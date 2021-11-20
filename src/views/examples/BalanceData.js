import React, { useState, useEffect, useRef } from 'react'

function BalanceData(props) {

    const [balanceData1, setBalanceData] = useState('')
    const Moralis = require('moralis');
    const serverUrl = "https://9famhvj4zx53.usemoralis.com:2053/server";
    const appId = "XzBZFifAz87yqWb45REaWnxoLK3aBVZlVr2AX2Ee";
    Moralis.start({ serverUrl, appId });

    useEffect(() => {
        async function ggg(e) {
            const balanceData = await Moralis.Web3API.account.getNativeBalance({ address: e })
            setBalanceData(balanceData.balance)
        }
        ggg(props.props)
        
    }, [])
    return (
        <>
            {balanceData1}
        </>
    )
}
export default BalanceData
