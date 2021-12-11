import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
} from "reactstrap";
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Header from "components/Headers/Header";

function Scrapper() {

    const walletClick = e => {
        e.preventDefault()
        fetch('http://65.108.59.117:7001/api/csv/scrape/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log("ساغول")
            })
    }
    const txClick = e => {
        e.preventDefault()
        fetch('http://65.108.59.117:7001/api/csv/get_transactions/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log("ساغول")
            })
    }
    const nftClick = e => {
        e.preventDefault()
        fetch('http://65.108.59.117:7001/api/csv/get_nfts/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log("ساغول")
            })
    }
    return (
        <>
            <Header />
            <div className="text-center">
                <Col lg="5" md="7">
                    <Card className="bg-secondary shadow border-0">
                        <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                                <small>Scrapper</small>
                            </div>
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button" onClick={e => walletClick(e)}>
                                    Wallet
                                </Button>
                                <Button className="my-4" color="primary" type="button" onClick={e => txClick(e)}>
                                    Transactions
                                </Button>
                                <Button className="my-4" color="primary" type="button" onClick={e => nftClick(e)}>
                                    NFTs
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </div>

        </>
    )
}

export default Scrapper
