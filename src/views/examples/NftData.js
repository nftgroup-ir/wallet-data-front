import React, { useState, useEffect, useRef } from 'react'

function NftData(props) {

    const [nftData1, setNftData] = useState('')
    const Moralis = require('moralis');
    const serverUrl = "https://9famhvj4zx53.usemoralis.com:2053/server";
    const appId = "XzBZFifAz87yqWb45REaWnxoLK3aBVZlVr2AX2Ee";
    Moralis.start({ serverUrl, appId });

    useEffect(() => {
        async function ggg(e) {
            const nftData = await Moralis.Web3API.account.getNFTs({ address: e })
            setNftData(nftData.result.length)
        }
        ggg(props.props)
    }, [])
    return (
        <>
        {nftData1}
        </>
    )
}
export default NftData
