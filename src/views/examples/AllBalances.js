import {
    Badge,
    Card,
    CardHeader,
    InputGroupText,
    InputGroupAddon,
    CardFooter,
    Label,
    DropdownMenu,
    Dropdown,
    DropdownItem,
    UncontrolledDropdown,
    Input,
    InputGroup,
    DropdownToggle,
    Media,
    Pagination,
    Col,
    Button,
    Nav,
    Option,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    FormGroup,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import React, { useState, useEffect, useRef } from 'react'




function AllBalances() {
    const [allTransactions, setAllTransactions] = useState([])
    const [csvItems, setcsvItems] = useState([""])
    const [ContractDecimalSortBy, setContractDecimalSortBySortBy] = useState("none")
    const [BalanceSortBy, setBalanceSortBy] = useState("none")
    const [Balance24hSortBy, setBalance24hSortBy] = useState("none")
    const [QuoteRateSortBy, setQuoteRateSortBy] = useState("none")
    const [QuoteRate24hSortBy, setQuoteRate24hSortBy] = useState("none")
    const [QuoteSortBy, setQuoteSortBy] = useState("none")
    const [Quote24hSortBy, setQuote24hSortBy] = useState("none")
    const [BalanceOperator, setBalanceOperator] = useState("eq")
    const [Balance24hOperator, setBalance24hOperator] = useState("eq")
    const [QuoteRateOperator, setQuoteRateOperator] = useState("eq")
    const [QuoteRate24hOperator, setQuoteRate24hOperator] = useState("eq")
    const [QuoteOperator, setQuoteOperator] = useState("eq")
    const [Quote24hOperator, setQuote24hOperator] = useState("eq")
    const [nextPageUrl, setnextPage] = useState("")
    const [previousPageUrl, setpreviousPage] = useState("")
    const [allData, setallData] = useState(1)
    const Filters = useRef()

    async function setFilters(e) {
        e.preventDefault()
        const AddressValue = document.getElementById("AddressValue").value
        const ContractDecimalValue = document.getElementById("ContractDecimalValue").value
        const ContractNameValue = document.getElementById("ContractNameValue").value
        const ContractTickerSymbolValue = document.getElementById("ContractTickerSymbolValue").value
        const ContractAddressValue = document.getElementById("ContractAddressValue").value
        const LastTransferredAtValue = document.getElementById("LastTransferredAtValue").value
        const TypeValue = document.getElementById("TypeValue").value
        const BalanceValue = document.getElementById("BalanceValue").value
        const Balance24hValue = document.getElementById("Balance24hValue").value
        const QuoteRateValue = document.getElementById("QuoteRateValue").value
        const QuoteRate24hValue = document.getElementById("QuoteRate24hValue").value
        const QuoteValue = document.getElementById("QuoteValue").value
        const Quote24hValue = document.getElementById("Quote24hValue").value
        var filterObject = {
            AddressValue: AddressValue,
            ContractDecimalValue: ContractDecimalValue,
            ContractDecimalSortBy: ContractDecimalSortBy,
            ContractNameValue: ContractNameValue,
            ContractTickerSymbolValue: ContractTickerSymbolValue,
            ContractAddressValue: ContractAddressValue,
            LastTransferredAtValue: LastTransferredAtValue,
            TypeValue: TypeValue,
            BalanceValue: BalanceValue,
            BalanceSortBy: BalanceSortBy,
            BalanceOperator: BalanceOperator,
            Balance24hValue: Balance24hValue,
            Balance24hSortBy: Balance24hSortBy,
            Balance24hOperator: Balance24hOperator,
            QuoteRateValue: QuoteRateValue,
            QuoteRateSortBy: QuoteRateSortBy,
            QuoteRateOperator: QuoteRateOperator,
            QuoteRate24hValue: QuoteRate24hValue,
            QuoteRate24hSortBy: QuoteRate24hSortBy,
            QuoteRate24hOperator: QuoteRate24hOperator,
            QuoteValue: QuoteValue,
            QuoteSortBy: QuoteSortBy,
            QuoteOperator: QuoteOperator,
            Quote24hValue: Quote24hValue,
            Quote24hSortBy: Quote24hSortBy,
            Quote24hOperator: Quote24hOperator,
        }
        fetch(`http://65.108.59.117:7001/api/csv/balancedata?AddressValue=${filterObject.AddressValue}&ContractDecimalValue=${filterObject.ContractDecimalValue}&ContractDecimalSortBy=${filterObject.ContractDecimalSortBy}&ContractNameValue=${filterObject.ContractNameValue}&ContractTickerSymbolValue=${filterObject.ContractTickerSymbolValue}&ContractAddressValue=${filterObject.ContractAddressValue}&LastTransferredAtValue=${filterObject.LastTransferredAtValue}&TypeValue=${filterObject.TypeValue}&BalanceValue=${filterObject.BalanceValue}&BalanceSortBy=${filterObject.BalanceSortBy}&BalanceOperator=${filterObject.BalanceOperator}&Balance24hValue=${filterObject.Balance24hValue}&Balance24hSortBy=${filterObject.Balance24hSortBy}&Balance24hOperator=${filterObject.Balance24hOperator}&QuoteRateValue=${filterObject.QuoteRateValue}&QuoteRateSortBy=${filterObject.QuoteRateSortBy}&QuoteRateOperator=${filterObject.QuoteRateOperator}&QuoteRate24hValue=${filterObject.QuoteRate24hValue}&QuoteRate24hSortBy=${filterObject.QuoteRate24hSortBy}&QuoteRate24hOperator=${filterObject.QuoteRate24hOperator}&QuoteValue=${filterObject.QuoteValue}&QuoteSortBy=${filterObject.QuoteSortBy}&QuoteOperator=${filterObject.QuoteOperator}&Quote24hValue=${filterObject.Quote24hValue}&Quote24hSortBy=${filterObject.Quote24hSortBy}&Quote24hOperator=${filterObject.Quote24hOperator}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setcsvItems(data.results)
                setnextPage(data.next)
                setpreviousPage(data.previous)
                setallData(data.count)
            })
        console.log(filterObject)
    }

    useEffect(() => {
        async function getData() {
            await fetch('http://65.108.59.117:7001/api/csv/balancedata/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + sessionStorage.getItem('token')
                },
            })
                .then(res => res.json())
                .then(data => {
                    setcsvItems(data.results)
                    setnextPage(data.next)
                    setpreviousPage(data.previous)
                    setallData(data.count)
                    console.log(data)
                })
        }
        getData()

    }, [])
    const startRangeeeee = 1
    async function previousPage(e) {
        e.preventDefault()
        await fetch(`${previousPageUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token')
            },
        })
            .then(res => res.json())
            .then(data => {
                setcsvItems(data.results)
                setnextPage(data.next)
                setpreviousPage(data.previous)
                setallData(data.count)
                console.log(data)
            })
    }
    async function nextPage(e) {
        e.preventDefault()
        await fetch(`${nextPageUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token')
            },
        })
            .then(res => res.json())
            .then(data => {
                setcsvItems(data.results)
                setnextPage(data.next)
                setpreviousPage(data.previous)
                setallData(data.count)
                console.log(data)
            })
    }

    function handleColumn(e) {
        console.log(e)
        console.log(document.querySelector('#' + e))
        var x = document.querySelector('#' + e)
        x.classList.toggle('deactive-table-button')
        document.querySelectorAll('.' + e).forEach((d) => {
            d.classList.toggle('deactive-table')
        })

        //    var x = document.getElementsByClassName(`.${e}`)
        //    console.log(x)
        //    for(var i=0; i<x.length;i++){
        //        x[i].style.display = "none"
        //    }
    }




    return (

        <div className="align-items-center">
            <Header />
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="text-black mb-0">Balances</h3>
                                    </Col>
                                    <Col className="text-right" xs="4">
                                        <UncontrolledDropdown>
                                            <DropdownToggle
                                                className="text-light"
                                                href="#pablo"
                                                role="button"
                                                size="sm"
                                                color=""
                                                onClick={e => e.preventDefault()}
                                            >
                                                Columns
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-arrow" left>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Address"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Address")}
                                                >
                                                    Address
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="ContractDecimal"
                                                    className="mmm"
                                                    onClick={e => handleColumn("ContractDecimal")}
                                                >
                                                    Contract Decimal
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="ContractName"
                                                    className="mmm"
                                                    onClick={e => handleColumn("ContractName")}
                                                >
                                                    Contract Name
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="ContractTickerSymbol"
                                                    className="mmm"
                                                    onClick={e => handleColumn("ContractTickerSymbol")}
                                                >
                                                    Contract Ticker Symbol
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="ContractAddress"
                                                    className="mmm"
                                                    onClick={e => handleColumn("ContractAddress")}
                                                >
                                                    Contract Address
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Logo"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Logo")}
                                                >
                                                    Logo
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="LastTransferredAt"
                                                    className="mmm"
                                                    onClick={e => handleColumn("LastTransferredAt")}
                                                >
                                                    Last Transferred At
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Type"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Type")}
                                                >
                                                    Type
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Balance"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Balance")}
                                                >
                                                    Balance
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Balance24h"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Balance24h")}
                                                >
                                                    Balance 24h
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="QuoteRate"
                                                    className="mmm"
                                                    onClick={e => handleColumn("QuoteRate")}
                                                >
                                                    Quote Rate
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="QuoteRate24h"
                                                    className="mmm"
                                                    onClick={e => handleColumn("QuoteRate24h")}
                                                >
                                                    Quote Rate 24h
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Quote"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Quote")}
                                                >
                                                    Quote
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Quote24h"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Quote24h")}
                                                >
                                                    Quote 24h
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            Remove filters
                                        </Button>
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={setFilters}
                                            size="sm"
                                        >
                                            Set filters
                                        </Button>
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            Export CSV
                                        </Button>
                                        {/* <Nav navbar>{createLinks(ArticlesRoutes)}</Nav> */}
                                    </Col>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="Address">
                                            Address
                                        </th>
                                        <th scope="col" className="ContractDecimal deactive-table">
                                            Contract Decimal
                                            <UncontrolledDropdown>
                                                <DropdownToggle
                                                    className="btn-icon-only text-light"
                                                    href="#pablo"
                                                    role="button"
                                                    size="sm"
                                                    color=""
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" left>
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("ASC")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("DESC")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="ContractName deactive-table">
                                            Contract Name
                                        </th>
                                        <th scope="col" className="ContractTickerSymbol ">
                                            Contract Ticker Symbol
                                        </th>
                                        <th scope="col" className="ContractAddress deactive-table">
                                            Contract Address
                                        </th>
                                        <th scope="col" className="Logo">
                                            Logo
                                        </th>
                                        <th scope="col" className="LastTransferredAt deactive-table">
                                            Last Transferred At
                                        </th>
                                        <th scope="col" className="Type deactive-table">
                                            Type
                                        </th>
                                        <th scope="col" className="Balance">
                                            Balance
                                            <UncontrolledDropdown>
                                                <DropdownToggle
                                                    className="btn-icon-only text-light"
                                                    href="#pablo"
                                                    role="button"
                                                    size="sm"
                                                    color=""
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" left>
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("ASC")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("DESC")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Balance24h deactive-table">
                                            Balance 24h
                                            <UncontrolledDropdown>
                                                <DropdownToggle
                                                    className="btn-icon-only text-light"
                                                    href="#pablo"
                                                    role="button"
                                                    size="sm"
                                                    color=""
                                                    onClick={e => { e.preventDefault() }}
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" left>
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("ASC")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("DESC")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="QuoteRate">
                                            Quote Rate
                                            <UncontrolledDropdown>
                                                <DropdownToggle
                                                    className="btn-icon-only text-light"
                                                    href="#pablo"
                                                    role="button"
                                                    size="sm"
                                                    color=""
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" left>
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("ASC")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("DESC")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="QuoteRate24h deactive-table">
                                            Quote Rate 24h
                                            <UncontrolledDropdown>
                                                <DropdownToggle
                                                    className="btn-icon-only text-light"
                                                    href="#pablo"
                                                    role="button"
                                                    size="sm"
                                                    color=""
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" left>
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("ASC")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("DESC")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("DESC")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Quote">
                                            Quote
                                            <UncontrolledDropdown>
                                                <DropdownToggle
                                                    className="btn-icon-only text-light"
                                                    href="#pablo"
                                                    role="button"
                                                    size="sm"
                                                    color=""
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" left>
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("ASC")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("DESC")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Quote24h deactive-table">
                                            Quote 24h
                                            <UncontrolledDropdown>
                                                <DropdownToggle
                                                    className="btn-icon-only text-light"
                                                    href="#pablo"
                                                    role="button"
                                                    size="sm"
                                                    color=""
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fas fa-ellipsis-v" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" left>
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("ASC")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("DESC")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setContractDecimalSortBySortBy("none")
                                                            setBalanceSortBy("none")
                                                            setBalance24hSortBy("none")
                                                            setQuoteRateSortBy("none")
                                                            setQuoteRate24hSortBy("none")
                                                            setQuoteSortBy("none")
                                                            setQuote24hSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr ref={Filters}>
                                        <td className="Address">
                                            <InputGroup>
                                                <Input bsSize="sm" id="AddressValue" />
                                                {/* <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        <i className="ni ni-lock-circle-open" />
                                                        <UncontrolledDropdown split>
                                                            <DropdownToggle
                                                                className="btn-icon-only text-light"
                                                                href="#pablo"
                                                                role="button"
                                                                size="sm"
                                                                color=""
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" left>
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Greater then And Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Smaller then and Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Smaller then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Dismiss Filter
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </InputGroupText>
                                                </InputGroupAddon> */}

                                            </InputGroup>
                                        </td>
                                        <td className="ContractDecimal deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="ContractDecimalValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="ContractName deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="ContractNameValue" />
                                                {/* <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        <UncontrolledDropdown split>
                                                            <DropdownToggle
                                                                className="btn-icon-only text-light"
                                                                href="#pablo"
                                                                role="button"
                                                                size="sm"
                                                                color=""
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" left>
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Greater then And Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Smaller then and Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Smaller then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Dismiss Filter
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </InputGroupText>
                                                </InputGroupAddon> */}

                                            </InputGroup>
                                        </td>
                                        <td className="ContractTickerSymbol">
                                            <InputGroup>
                                                <Input bsSize="sm" id="ContractTickerSymbolValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="ContractAddress deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="ContractAddressValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="Logo">
                                            <InputGroup>
                                                <Input bsSize="sm" id="LogoValue" disabled />
                                            </InputGroup>
                                        </td>
                                        <td className="LastTransferredAt deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="LastTransferredAtValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="Type deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="TypeValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="Balance">
                                            <InputGroup>
                                                <Input bsSize="sm" id="BalanceValue" />
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown split>
                                                            <DropdownToggle
                                                                className="btn-icon-only text-light"
                                                                href="#pablo"
                                                                role="button"
                                                                size="sm"
                                                                color=""
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" left>
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setBalanceOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setBalanceOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setBalanceOperator("lt")
                                                                    }}
                                                                >
                                                                    Smaller then
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </td>
                                        <td className="Balance24h deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="Balance24hValue" />
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown split>
                                                            <DropdownToggle
                                                                className="btn-icon-only text-light"
                                                                href="#pablo"
                                                                role="button"
                                                                size="sm"
                                                                color=""
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" left>
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setBalance24hOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setBalance24hOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setBalance24hOperator("lt")
                                                                    }}
                                                                >
                                                                    Smaller then
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </InputGroupText>
                                                </InputGroupAddon>

                                            </InputGroup>
                                        </td>
                                        <td className="QuoteRate">
                                            <InputGroup>
                                                <Input bsSize="sm" id="QuoteRateValue" />
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown split>
                                                            <DropdownToggle
                                                                className="btn-icon-only text-light"
                                                                href="#pablo"
                                                                role="button"
                                                                size="sm"
                                                                color=""
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" left>
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuoteRateOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuoteRateOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuoteRateOperator("lt")
                                                                    }}
                                                                >
                                                                    Smaller then
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </InputGroupText>
                                                </InputGroupAddon>

                                            </InputGroup>
                                        </td>
                                        <td className="QuoteRate24h deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="QuoteRate24hValue" />
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown split>
                                                            <DropdownToggle
                                                                className="btn-icon-only text-light"
                                                                href="#pablo"
                                                                role="button"
                                                                size="sm"
                                                                color=""
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" left>
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuoteRate24hOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuoteRate24hOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuoteRate24hOperator("lt")
                                                                    }}
                                                                >
                                                                    Smaller then
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </td>
                                        <td className="Quote">
                                            <InputGroup>
                                                <Input bsSize="sm" id="QuoteValue" />
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown split>
                                                            <DropdownToggle
                                                                className="btn-icon-only text-light"
                                                                href="#pablo"
                                                                role="button"
                                                                size="sm"
                                                                color=""
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" left>
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuoteOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuoteOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuoteOperator("lt")
                                                                    }}
                                                                >
                                                                    Smaller then
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </td>
                                        <td className="Quote24h deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="Quote24hValue" />
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown split>
                                                            <DropdownToggle
                                                                className="btn-icon-only text-light"
                                                                href="#pablo"
                                                                role="button"
                                                                size="sm"
                                                                color=""
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" left>
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuote24hOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuote24hOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setQuote24hOperator("lt")
                                                                    }}
                                                                >
                                                                    Smaller then
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </td>
                                    </tr>
                                    {
                                        csvItems.map(e => (
                                            <tr>
                                                <td scope="row" className="Address">
                                                    {e.parent}
                                                </td>
                                                <td scope="row" className="ContractDecimal deactive-table">
                                                    {e.contract_decimals}
                                                </td>
                                                <td scope="row" className="ContractName deactive-table">
                                                    {e.contract_name}
                                                </td>
                                                <td className="ContractTickerSymbol">
                                                    {e.contract_ticker_symbol}
                                                </td>
                                                <td className="ContractAddress deactive-table">
                                                    {e.contract_address}
                                                </td>
                                                <td className="Logo">
                                                    <div className="avatar-group">
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip742438047"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={e.logo_url}
                                                            />
                                                        </a>
                                                    </div>
                                                </td>
                                                <td scope="row" className="LastTransferredAt deactive-table">
                                                    {e.last_transferred_at}
                                                </td>
                                                <td className="Type deactive-table">
                                                    {/* <NftData props={e.address} id={e.id} /> */}
                                                    {e.type}
                                                </td>
                                                <td scope="row" className="Balance">
                                                    {(e.balance / Math.pow(10, e.contract_decimals))}
                                                </td>
                                                <td scope="row" className="Balance24h deactive-table">
                                                    {e.balance_24h}
                                                </td>
                                                <td scope="row" className="QuoteRate">
                                                    {e.quote_rate}
                                                </td>
                                                <td scope="row" className="QuoteRate24h deactive-table">
                                                    {e.quote_rate_24h}
                                                </td>
                                                <td scope="row" className="Quote">
                                                    {e.quote}
                                                </td>
                                                <td scope="row" className="Quote24h deactive-table">
                                                    {e.quote_24h}
                                                </td>
                                            </tr>

                                        ))
                                    }


                                </tbody>
                            </Table>
                            <CardFooter>
                                <Row>
                                    <FormGroup row>
                                        <Pagination>
                                            <PaginationItem>
                                                <PaginationLink
                                                    aria-label="Previous"
                                                    href="#pablo"
                                                    onClick={e => previousPage(e)}
                                                >
                                                    <i className="fa fa-angle-left" />
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                                    2
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    aria-label="Next"
                                                    href="#pablo"
                                                    onClick={e => nextPage(e)}
                                                >
                                                    <i className="fa fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </FormGroup>
                                    <Col sm="1" >
                                        <p>{`${startRangeeeee} - ${allData}`}</p>
                                    </Col>
                                </Row>
                            </CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default AllBalances
