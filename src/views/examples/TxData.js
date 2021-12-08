import React, { useState, useEffect, useRef } from 'react'

function TxData(props) {
    const [txData1, setTxData] = useState([])
    const [idData, setidData] = useState(null)
    const Moralis = require('moralis');
    const serverUrl = "https://9famhvj4zx53.usemoralis.com:2053/server";
    const appId = "XzBZFifAz87yqWb45REaWnxoLK3aBVZlVr2AX2Ee";
    Moralis.start({ serverUrl, appId });

    useEffect(() => {
        async function ggg(e, id) {
            const txData = await Moralis.Web3API.account.getTransactions({ address: e })
            console.log(TxData)
            setTxData(txData.result)
            setidData(id)

        }
        ggg(props.props, props.id)
        }, [props.props])

    useEffect(() => {
        const TXDataSend = {
            transaction: txData1,
            parent: idData
        }
        if (idData !== null) {
            fetch("http://65.108.59.117:7001/api/csv/transaction/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(TXDataSend)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        } else console.log("Error")
    }, [idData])
return (
    <>
        {txData1.length}
    </>
)
}

export default TxData
