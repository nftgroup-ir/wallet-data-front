import React, { useState, useEffect, useRef } from 'react'

function NftData(props) {

    const [nftData1, setNftData] = useState([])
    const [idData, setidData] = useState(null)
    const Moralis = require('moralis');
    const serverUrl = "https://9famhvj4zx53.usemoralis.com:2053/server";
    const appId = "XzBZFifAz87yqWb45REaWnxoLK3aBVZlVr2AX2Ee";
    Moralis.start({ serverUrl, appId });

    useEffect(() => {
        async function ggg(e , id) {
            const nftData = await Moralis.Web3API.account.getNFTs({ address: e })
            setNftData(nftData.result)
            setidData(id)
        }
        ggg(props.props, props.id)
    }, [])

    useEffect(() => {
        if(idData!==null){
        const nftDataSend = {
            nft: nftData1,
            parent: idData
        }
        fetch("http://65.108.59.117:7001/api/csv/nft/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nftDataSend)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }else console.log("Error")
    }, [idData])

    return (
        <>
            {nftData1.length}
        </>
    )
}
export default NftData
