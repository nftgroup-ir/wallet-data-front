import React, { useState, useEffect, useRef } from 'react'
import Header from "components/Headers/Header.js";
import Tables from './Tables';

function WalletData() {
    const data = [
        {
            address: "0x5980565737bb2885790c79f126d2c862ad1dc8ab",
            name: "test@test.test",
            point: "5"
        },
        {
            address: "0x5980565737bb2885790c79f126d2c862ad1dc8ab",
            name: "test@test.test",
            point: "5"
        },
        {
            address: "0x5980565737bb2885790c79f126d2c862ad1dc8ab",
            name: "test@test.test",
            point: "5"
        },
        {
            address: "0x5980565737bb2885790c79f126d2c862ad1dc8ab",
            name: "test@test.test",
            point: "5"
        },
        {
            address: "0x5980565737bb2885790c79f126d2c862ad1dc8ab",
            name: "test@test.test",
            point: "5"
        }
    ]
    return (
        <div>
            <Header />
            <Tables props={data} />
        </div>
    )
}

export default WalletData
