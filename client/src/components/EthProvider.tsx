"use client"

import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import type { Contract } from "web3-eth-contract";

import ethState from '../store/eth';
import useWeb3 from '../app/hooks/useWeb3';

import contractArtifact from "../../contracts/TestContract.json"; // modify this import to point to your contract abi

export const handleLogin = async (cb: (address: string) => void) => {
  try {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      cb(accounts[0])
    }
  } catch (e) {
    return;
  }
}

export default function EthProvider({ children }: { children: React.ReactNode }) {
  const [eth, setEth] = useRecoilState(ethState);

  const web3 = useWeb3();

  const init = useCallback(async () => {
    if (!web3) return;

    const networkId = (await web3.eth.net.getId()).toString();
    const {networks, abi} = contractArtifact;
    const contractAddress = networks[networkId as keyof typeof networks]?.address;
    if (!contractAddress)
      return;

    const contract = new web3.eth.Contract(
      abi as any,
      contractAddress
    ) as unknown as Contract<typeof abi>;

    handleLogin(address => {
      const ethObject = {
        contractMethods: contract.methods,
        contractAddress,
        address,
      }
      
      setEth(ethObject as any);
    })
  }, [setEth, web3]);

  useEffect(() => {
    console.log('EthProvider mounted');
    init();
  }, [init]);

  return React.cloneElement(children as React.ReactElement)
}