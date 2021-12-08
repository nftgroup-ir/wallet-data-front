import React, { useState, useEffect, useRef } from 'react'

function BalanceData(props) {

    const [balanceData1, setBalanceData] = useState('')
    const [idData, setidData] = useState(null)
    const Moralis = require('moralis');
    const serverUrl = "https://9famhvj4zx53.usemoralis.com:2053/server";
    const appId = "XzBZFifAz87yqWb45REaWnxoLK3aBVZlVr2AX2Ee";
    Moralis.start({ serverUrl, appId });

    useEffect(() => {
        async function ggg(e, id) {
            const balanceData = await Moralis.Web3API.account.getNativeBalance({ address: e })
            setBalanceData(balanceData.balance)
            setidData(id)
        }
        ggg(props.props, props.id)

    }, [])

    useEffect(() => {
        const balanceDataSend = {
            balance: balanceData1,
            parent: idData
        }
        if (idData !== null) {
            fetch("http://65.108.59.117:7001/api/csv/balancedata/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(balanceDataSend)
            })
                .then(res => res.json())
                .then(data=>console.log(data))
        } else console.log("Error")
    }, [idData])
    return (
        <>
            {balanceData1 / 1000000000000000000}
        </>
    )
}
export default BalanceData
