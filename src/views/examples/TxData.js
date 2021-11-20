import React, { useState, useEffect, useRef } from 'react'

function TxData(props) {
    const [txData1, setTxData] = useState('')
    const Moralis = require('moralis');
    const serverUrl = "https://9famhvj4zx53.usemoralis.com:2053/server";
    const appId = "XzBZFifAz87yqWb45REaWnxoLK3aBVZlVr2AX2Ee";
    Moralis.start({ serverUrl, appId });

    useEffect(() => {
        async function ggg(e) {
            const txData = await Moralis.Web3API.account.getTransactions({ address: e })
            setTxData(txData.result.length)
        }
        ggg(props.props)
    }, [])
    return (
        <>
            {txData1}
        </>
    )
}

export default TxData
