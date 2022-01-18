import Header from "components/Headers/Header.js";
import React, { useState, useEffect, useRef } from 'react'
import {
    Card,
    CardHeader,
    InputGroupText,
    InputGroupAddon,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Input,
    InputGroup,
    DropdownToggle,
    Pagination,
    Col,
    Button,
    Spinner,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row,
    FormGroup,
  } from "reactstrap";
import ImportantBalances from "./DashboardComponents/ImportantBalances";
import LastNFTs from "./DashboardComponents/LastNFTs";
import LastTxs from "./DashboardComponents/LastTxs";
import PieChart from "./DashboardComponents/PieChart";
import { useLocation } from "react-router-dom";



function WalletProfile() {
    let { search } = useLocation()
    const query = new URLSearchParams(search);
    const wallet = query.get('wallet')

    return (
        <>
            <Header />
            <Container fluid>
                <h1 style={{ textAlign: "center" }}>{`Wallet Address: ${wallet}`}</h1>
                <Row>
                    <Col xs="6" lg="6">
                        <PieChart wallet={wallet}/>
                    </Col>
                    <Col xs="6" lg="6">
                        <LastNFTs wallet={wallet}/>
                    </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                    <Col xs="6" lg="6">
                        <ImportantBalances wallet={wallet}/>
                    </Col>
                    <Col xs="6" lg="6">
                        <LastTxs wallet={wallet}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WalletProfile
