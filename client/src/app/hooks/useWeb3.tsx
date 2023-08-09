import { useEffect, useMemo, useState } from "react";
import Web3 from "web3";

const useWeb3 = () => {
    const [web3, setWeb3] = useState<Web3 | null>(null)
    const web3Instance = useMemo(() => {
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            return new Web3(window.ethereum);
        }
        return null;
    }, []);

    useEffect(() => {
        setWeb3(web3Instance);
    }, [web3Instance])

    return web3;
}

export default useWeb3;