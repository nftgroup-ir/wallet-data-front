import Header from "components/Headers/Header.js";
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Col,
    Row,
} from "reactstrap";
import React, { useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, Brush, ReferenceLine, } from 'recharts';


function Charts() {
    const [dataTx, setdataTx] = useState([
        { date: "0", Transactions: 0 },
        { date: "10/1", Transactions: 2 },
        { date: "10/2", Transactions: 3 },
        { date: "10/3", Transactions: 7 },
        { date: "10/4", Transactions: 5 },
        { date: "10/5", Transactions: 6 },
        { date: "10/6", Transactions: 12 },
        { date: "10/7", Transactions: 17 },
        { date: "10/8", Transactions: 8 },
        { date: "10/9", Transactions: 3 },
        { date: "10/10", Transactions: 4 },
        { date: "10/11", Transactions: 6 },
        { date: "10/12", Transactions: 14 },
        { date: "10/13", Transactions: 3 },
        { date: "10/14", Transactions: 0 },
        { date: "10/15", Transactions: 6 },
        { date: "10/16", Transactions: 2 },
        { date: "10/17", Transactions: 3 },
        { date: "10/18", Transactions: 7 },
        { date: "10/19", Transactions: 5 },
        { date: "10/20", Transactions: 6 },
        { date: "10/21", Transactions: 12 },
        { date: "10/22", Transactions: 17 },
        { date: "10/23", Transactions: 8 },
        { date: "10/24", Transactions: 3 },
        { date: "10/25", Transactions: 4 },
        { date: "10/26", Transactions: 6 },
        { date: "10/27", Transactions: 14 },
        { date: "10/28", Transactions: 3 },
        { date: "10/29", Transactions: 0 },
        { date: "10/30", Transactions: 6 },
    ])
    const [balanceData, setbalanceData] = useState([
        { token: "THT" , balance: 124800 },
        { token: "ETH" , balance: 65480 },
        { token: "RLC" , balance: 9498 },
        { token: "THT" , balance: 111800 },
        { token: "BTC" , balance: 95860 },
        { token: "RLC" , balance: 6598 },
        { token: "THT" , balance: 163800 },
        { token: "SXP" , balance: 98549 },
        { token: "RLC" , balance: 7498 },
        { token: "THT" , balance: 188800 },
        { token: "SLP" , balance: 77540 },
        { token: "RLC" , balance: 3298 },
        { token: "THT" , balance: 139800 },
        { token: "BNB" , balance: 65544 },
        { token: "RLC" , balance: 1298 },
        { token: "THT" , balance: 145800 },
        { token: "BSC" , balance: 84856 },
        { token: "RLC" , balance: 9598 },
        { token: "THT" , balance: 196800 },
        { token: "SAND" , balance: 57446 },
        { token: "RLC" , balance: 3698 },
        { token: "THT" , balance: 154800 },
    ])

    const dataDaily = [
        { date: "0", Transactions: 0 },
        { date: "10/1", Transactions: 2 },
        { date: "10/2", Transactions: 3 },
        { date: "10/3", Transactions: 7 },
        { date: "10/4", Transactions: 5 },
        { date: "10/5", Transactions: 6 },
        { date: "10/6", Transactions: 12 },
        { date: "10/7", Transactions: 17 },
        { date: "10/8", Transactions: 8 },
        { date: "10/9", Transactions: 3 },
        { date: "10/10", Transactions: 4 },
        { date: "10/11", Transactions: 6 },
        { date: "10/12", Transactions: 14 },
        { date: "10/13", Transactions: 3 },
        { date: "10/14", Transactions: 0 },
        { date: "10/15", Transactions: 6 },
        { date: "10/16", Transactions: 2 },
        { date: "10/17", Transactions: 3 },
        { date: "10/18", Transactions: 7 },
        { date: "10/19", Transactions: 5 },
        { date: "10/20", Transactions: 6 },
        { date: "10/21", Transactions: 12 },
        { date: "10/22", Transactions: 17 },
        { date: "10/23", Transactions: 8 },
        { date: "10/24", Transactions: 3 },
        { date: "10/25", Transactions: 4 },
        { date: "10/26", Transactions: 6 },
        { date: "10/27", Transactions: 14 },
        { date: "10/28", Transactions: 3 },
        { date: "10/29", Transactions: 0 },
        { date: "10/30", Transactions: 6 },
    ]

    const dataMonthly = [
        { date: "0", Transactions: 0 },
        { date: "December", Transactions: 32 },
        { date: "November", Transactions: 27 },
        { date: "October", Transactions: 10 },
        { date: "September", Transactions: 124 },
        { date: "August", Transactions: 43 },
        { date: "July", Transactions: 15 },
        { date: "June", Transactions: 51 },
        { date: "May", Transactions: 17 },
        { date: "April", Transactions: 9 },
        { date: "March", Transactions: 2 },
        { date: "February", Transactions: 18 },
        { date: "January", Transactions: 25 },
    ]
    const dataYearly = [
        { date: "0", Transactions: 0 },
        { date: "2017", Transactions: 320 },
        { date: "2018", Transactions: 274 },
        { date: "2019", Transactions: 107 },
        { date: "2020", Transactions: 1240 },
        { date: "2021", Transactions: 874 }
    ]
    const dailyChart = e => {
        e.preventDefault()
        setdataTx(dataDaily)
    }
    const monthlyChart = e => {
        e.preventDefault()
        setdataTx(dataMonthly)
    }
    const YearlyChart = e => {
        e.preventDefault()
        setdataTx(dataYearly)
        setbalanceData([
            { token: "THT" , balance: 124800 },
            { token: "ETH" , balance: 65480 },
            { token: "RLC" , balance: 9498 },
            { token: "THT" , balance: 111800 },
            { token: "BTC" , balance: 95860 },
            { token: "RLC" , balance: 6598 },
            { token: "THT" , balance: 163800 },
            { token: "SXP" , balance: 98549 },
            { token: "RLC" , balance: 7498 },
            { token: "THT" , balance: 188800 },
            { token: "SLP" , balance: 77540 },
            { token: "RLC" , balance: 3298 },
            { token: "THT" , balance: 139800 },
            { token: "BNB" , balance: 65544 },
            { token: "RLC" , balance: 1298 },
            { token: "THT" , balance: 145800 },
            { token: "BSC" , balance: 84856 },
            { token: "RLC" , balance: 9598 },
            { token: "THT" , balance: 196800 },
            { token: "SAND" , balance: 57446 },
            { token: "RLC" , balance: 3698 },
            { token: "THT" , balance: 154800 },
        ])
    }
    


    return (
        <div>
            <Header />
            <Row>
                <Col xs="8">
                    <LineChart width={1000} height={600} data={dataTx} margin={{ top: 20, right: 20, bottom: 5, left: 30 }}>
                        <Line type="monotone" dataKey="Transactions" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" />
                        <Legend />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </Col>
                <Col xs="4">
                    <UncontrolledDropdown style={{ marginTop: "60px" , marginLeft:"30px"}}>
                        <DropdownToggle
                            className="text-white"
                            href="#pablo"
                            role="button"
                            size="md"
                            color="primary"
                            onClick={e => e.preventDefault()}
                        >
                            data
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow">
                            <DropdownItem
                                href="#pablo"
                                id="Address"
                                className="mmm"
                                onClick={e =>dailyChart(e)}
                            >
                                Daily
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                id="Transactions"
                                className="mmm"
                                onClick={e => monthlyChart(e)}
                            >
                                Monthly
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                id="NFT"
                                className="mmm"
                                onClick={e => YearlyChart(e)}
                            >
                                Yearly
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
            </Row>
            <Row>
                <Col xs="8">
                    <BarChart width={1000} height={600} data={balanceData} margin={{ top: 20, right: 20, bottom: 5, left: 30 }}>
                        <Bar dataKey="balance" fill="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="token" />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <YAxis />
                        <ReferenceLine y={0} stroke="#000" />
                        <Brush dataKey="token" height={30} stroke="#8884d8" />
                        <Tooltip />
                    </BarChart>
                </Col>
                <Col xs="4">
                    {/* <UncontrolledDropdown style={{ marginTop: "60px"}}>
                        <DropdownToggle
                            className="text-white"
                            href="#pablo"
                            role="button"
                            size="md"
                            color="primary"
                            onClick={e => e.preventDefault()}
                        >
                            data
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" >
                            <DropdownItem
                                href="#pablo"
                                id="Address"
                                className="mmm"
                                onClick={e =>dailyChart(e)}
                            >
                                Daily
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                id="Transactions"
                                className="mmm"
                                onClick={e => monthlyChart(e)}
                            >
                                Monthly
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                id="NFT"
                                className="mmm"
                                onClick={e => YearlyChart(e)}
                            >
                                Yearly
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                </Col>
            </Row>
            
        </div>
    )
}

export default Charts
