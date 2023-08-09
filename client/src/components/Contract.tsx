"use client"

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import ethState from "../store/eth";

export default function Contract() {
    const [eth] = useRecoilState<any>(ethState)

    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!eth) return;
        const fetchTestString = async () => {
            const { contractMethods } = eth;
            if (contractMethods) {
                try {
                    const testString = await contractMethods.getString?.().call();
                    setText(testString);
                } catch (e) {
                    console.warn('error', e);
                }
            }
        }

        fetchTestString();
    }, [eth]);

    const setTestString = async () => {
        if (!eth) return;

        const { contractMethods, address } = eth;

        if (contractMethods && address) {
            setLoading(true);
            try {
                const gas = await contractMethods.setString?.(text).estimateGas({from: address});
                console.warn(gas)
                await contractMethods.setString?.(text).send({from: address, gas});
                alert('success')
            } catch (e) {
                alert('failed to set string')
                console.warn('error', e);
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <div style={{background: 'white', color: 'black', padding: '20px 10px'}}>
            <p>Test smart contract</p> <br />
            <input type="text" value={text} onChange={e => setText(e.target.value)} /> <br /> <br />
            <button disabled={loading || !text} onClick={setTestString}>Set new string</button>
        </div>
    )
}