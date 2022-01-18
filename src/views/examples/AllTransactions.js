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
    PaginationItem,
    PaginationLink,
    Spinner,
    Table,
    Container,
    Row,
    FormGroup,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import React, { useState, useEffect, useRef  } from 'react'
import "../../assets/css/CustomCss.css"
import ReactTooltip from 'react-tooltip';
import { useLocation } from "react-router-dom";







function AllTransactions() {
    let { search } = useLocation()
    const [csvItems, setcsvItems] = useState([""])
    const [NonceSortBy, setNonceSortBy] = useState("none")
    const [ValueSortBy, setValueSortBy] = useState("none")
    const [GasSortBy, setGasSortBy] = useState("none")
    const [GasPriceSortBy, setGasPriceSortBy] = useState("none")
    const [RCGUSortBy, setRCGUSortBy] = useState("none")
    const [RGUSortBy, setRGUSortBy] = useState("none")
    const [NonceOperator, setNonceOperator] = useState("")
    const [ValueOperator, setValueOperator] = useState("")
    const [GasOperator, setGasOperator] = useState("")
    const [GasPriceOperator, setGasPriceOperator] = useState("")
    const [RCGUOperator, setRCGUOperator] = useState("")
    const [RGUOperator, setRGUOperator] = useState("")
    const [nextPageUrl, setnextPage] = useState("")
    const [previousPageUrl, setpreviousPage] = useState("")
    const [allData, setallData] = useState(1)
    const [IsLoading, setIsLoading] = useState(true)
    const Filters = useRef()

    async function setFilters(e) {
        e.preventDefault()
        setIsLoading(true)
        const HashValue = document.getElementById("HashValue").value
        const NonceValue = document.getElementById("NonceValue").value
        const TxIndexValue = document.getElementById("TxIndexValue").value
        const FromValue = document.getElementById("FromValue").value
        const ToValue = document.getElementById("ToValue").value
        const ValueValue = document.getElementById("ValueValue").value
        const GasValue = document.getElementById("GasValue").value
        const GasPriceValue = document.getElementById("GasPriceValue").value
        const InputValue = document.getElementById("InputValue").value
        const RCGUValue = document.getElementById("RCGUValue").value
        const RGUValue = document.getElementById("RGUValue").value
        const RCUValue = document.getElementById("RCUValue").value
        const RRValue = document.getElementById("RRValue").value
        const RSValue = document.getElementById("RSValue").value
        const TimeValue = document.getElementById("TimeValue").value
        const BlockNumberValue = document.getElementById("BlockNumberValue").value
        const BlockHashValue = document.getElementById("BlockHashValue").value
        var filterObject = {
            HashValue: HashValue,
            NonceValue: NonceValue,
            NonceSortBy: NonceSortBy,
            NonceOperator: NonceOperator,
            TxIndexValue: TxIndexValue,
            FromValue: FromValue,
            ToValue: ToValue,
            ValueValue: ValueValue,
            ValueSortBy: ValueSortBy,
            ValueOperator: ValueOperator,
            GasValue: GasValue,
            GasSortBy: GasSortBy,
            GasOperator: GasOperator,
            GasPriceValue: GasPriceValue,
            GasPriceSortBy: GasPriceSortBy,
            GasPriceOperator: GasPriceOperator,
            InputValue: InputValue,
            RCGUValue: RCGUValue,
            RCGUSortBy: RCGUSortBy,
            RCGUOperator: RCGUOperator,
            RGUValue: RGUValue,
            RGUSortBy: RGUSortBy,
            RGUOperator: RGUOperator,
            RCUValue: RCUValue,
            RRValue: RRValue,
            RSValue: RSValue,
            TimeValue: TimeValue,
            BlockNumberValue: BlockNumberValue,
            BlockHashValue: BlockHashValue,
        }
        fetch(`http://65.108.59.117:7001/api/csv/transaction/?HashValue=${filterObject.HashValue}&NonceValue=${filterObject.NonceValue}&NonceSortBy=${filterObject.NonceSortBy}&NonceOperator=${filterObject.NonceOperator}&TxIndexValue=${filterObject.TxIndexValue}&FromValue=${filterObject.FromValue}&ToValue=${filterObject.ToValue}&ValueValue=${filterObject.ValueValue}&ValueSortBy=${filterObject.ValueSortBy}&ValueOperator=${filterObject.ValueOperator}&GasValue=${filterObject.GasValue}&GasSortBy=${filterObject.GasSortBy}&GasOperator=${filterObject.GasOperator}&GasPriceValue=${filterObject.GasPriceValue}&GasPriceSortBy=${filterObject.GasPriceSortBy}&GasPriceOperator=${filterObject.GasPriceOperator}&InputValue=${filterObject.InputValue}&RCGUValue=${filterObject.RCGUValue}&RCGUSortBy=${filterObject.RCGUSortBy}&RCGUOperator=${filterObject.RCGUOperator}&RGUValue=${filterObject.RGUValue}&RGUSortBy=${filterObject.RGUSortBy}&RGUOperator=${filterObject.RGUOperator}&RCUValue=${filterObject.RCUValue}&RRValue=${filterObject.RRValue}&RSValue=${filterObject.RSValue}&TimeValue=${filterObject.TimeValue}&BlockNumberValue=${filterObject.BlockNumberValue}&BlockHashValue=${filterObject.BlockHashValue}`, {
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
                console.log(data)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        const query = new URLSearchParams(search);
        const wallet = query.get('wallet')
        if (!wallet){
            async function getData() {
                await fetch('http://65.108.59.117:7001/api/csv/transaction/?HashValue=&NonceValue=&FromValue=&ToValue=&ValueValue=&GasValue=&GasPriceValue=&GasPriceSortBy=&InputValue=&RCGUValue=&RGUValue=&BlockHashValue=&RCUValue=&RRValue=&RSValue=&TimeValue=&BlockNumberValue=&BlockHashValue=&RCGUSortBy=&RGUSortBy=&TxIndexValue=&NonceSortBy=&ValueSortBy=ASC&GasSortBy=&NonceOperator=&ValueOperator=&GasOperator=&BlockHashValue=&GasPriceOperator=&RCGUOperator=&RGUOperator=', {
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
                        setIsLoading(false)
                    })
            }
            getData()
        }
        else{
            async function getData() {
                await fetch(`http://65.108.59.117:7001/api/csv/alltransactions/?wallet=${wallet}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Token ' + sessionStorage.getItem('token')
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        setcsvItems(data)
                        // setnextPage(data.next)
                        // setpreviousPage(data.previous)
                        setallData(data.length)
                        console.log(data)
                        setIsLoading(false)
                        // setIsLoading(false)
                    })
            }
            getData()
        }

    }, [])

    async function removeFilters(e) {
        e.preventDefault()
        setIsLoading(true)
        await fetch('http://65.108.59.117:7001/api/csv/transaction/?HashValue=&NonceValue=&FromValue=&ToValue=&ValueValue=&GasValue=&GasPriceValue=&GasPriceSortBy=&InputValue=&RCGUValue=&RGUValue=&BlockHashValue=&RCUValue=&RRValue=&RSValue=&TimeValue=&BlockNumberValue=&BlockHashValue=&RCGUSortBy=&RGUSortBy=&TxIndexValue=&NonceSortBy=&ValueSortBy=&GasSortBy=&NonceOperator=&ValueOperator=&GasOperator=&BlockHashValue=&GasPriceOperator=&RCGUOperator=&RGUOperator=', {
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
                setIsLoading(false)
            })
    }
    const startRangeeeee = 1
    async function previousPage(e) {
        e.preventDefault()
        if (previousPageUrl) {
        setIsLoading(true)
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
                setIsLoading(false)
            })
        }
    }
    async function nextPage(e) {
        e.preventDefault()
        setIsLoading(true)
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
                setIsLoading(false)
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

     //Function for k,m,... for numbers
     function nFormatter(num, digits) {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "B" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
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
                                        <h3 className="text-black mb-0">Transactions</h3>
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
                                            <DropdownMenu className="dropdown-menu-arrow" >
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Hash"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Hash")}
                                                >
                                                    Hash
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Nonc"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Nonc")}
                                                >
                                                    Nonc
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="TransactionIndex"
                                                    className="mmm"
                                                    onClick={e => handleColumn("TransactionIndex")}
                                                >
                                                    Transaction Index
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="From"
                                                    className="mmm"
                                                    onClick={e => handleColumn("From")}
                                                >
                                                    From
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="To"
                                                    className="mmm"
                                                    onClick={e => handleColumn("To")}
                                                >
                                                    To
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Value"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Value")}
                                                >
                                                    Value
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Gas"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Gas")}
                                                >
                                                    Gas
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="GasPrice"
                                                    className="mmm"
                                                    onClick={e => handleColumn("GasPrice")}
                                                >
                                                    Gas Price
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Input"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Input")}
                                                >
                                                    Input
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="ReceiptCumulativeGasUsed"
                                                    className="mmm"
                                                    onClick={e => handleColumn("ReceiptCumulativeGasUsed")}
                                                >
                                                    Receipt Cumulative Gas Used
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="ReceiptGasUsed"
                                                    className="mmm"
                                                    onClick={e => handleColumn("ReceiptGasUsed")}
                                                >
                                                    Receipt Gas Used
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="ReceiptContractAddress"
                                                    className="mmm"
                                                    onClick={e => handleColumn("ReceiptContractAddress")}
                                                >
                                                    Receipt Contract Address
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="ReceiptRoot"
                                                    className="mmm"
                                                    onClick={e => handleColumn("ReceiptRoot")}
                                                >
                                                    Receipt Root
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="ReceiptStatus"
                                                    className="mmm"
                                                    onClick={e => handleColumn("ReceiptStatus")}
                                                >
                                                    Receipt Status
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Time"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Time")}
                                                >
                                                    Time
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="BlockNumber"
                                                    className="mmm"
                                                    onClick={e => handleColumn("BlockNumber")}
                                                >
                                                    Block Number
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="BlockHash"
                                                    className="mmm"
                                                    onClick={e => handleColumn("BlockHash")}
                                                >
                                                    Block Hash
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => removeFilters(e)}
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
                                        <th scope="col" className="Hash">
                                            Hash
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Nonc deactive-table">
                                            Nonc
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("ASC")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("DESC")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="TransactionIndex deactive-table">
                                            Transaction Index
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="From">
                                            From
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="To">
                                            To
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
                                                <DropdownMenu className="dropdown-menu-arrow" left >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Value">
                                            Value
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("ASC")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("DESC")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Gas deactive-table">
                                            Gas
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("ASC")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("DESC")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="GasPrice">
                                            Gas price
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("ASC")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("DESC")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>

                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Input deactive-table">
                                            Input
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="ReceiptCumulativeGasUsed deactive-table">
                                            Receipt Cumulative Gas Used
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("ASC")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("DESC")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="ReceiptGasUsed deactive-table">
                                            Receipt Gas Used
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("ASC")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("DESC")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setNonceSortBy("none")
                                                            setValueSortBy("none")
                                                            setGasSortBy("none")
                                                            setGasPriceSortBy("none")
                                                            setRCGUSortBy("none")
                                                            setRGUSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="ReceiptContractAddress deactive-table">
                                            Receipt Contract Address
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="ReceiptRoot deactive-table">
                                            Receipt Root
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="ReceiptStatus deactive-table">
                                            Receipt Status
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Time">
                                            Time
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="BlockNumber deactive-table">
                                            Block Number
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="BlockHash deactive-table">
                                            Block Hash
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
                                                <DropdownMenu className="dropdown-menu-arrow" >
                                                    <DropdownItem header>
                                                        Sort
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                    </tr>
                                </thead>
                                {!IsLoading ?
                                <tbody>
                                    <tr ref={Filters}>
                                        <td className="Hash">
                                            <InputGroup>
                                                <Input bsSize="sm" id="HashValue" />
                                                {/* <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        <i className="ni ni-lock-circle-open" />
                                                        <UncontrolledDropdown >
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
                                                            <DropdownMenu className="dropdown-menu-arrow" >
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
                                        <td className="Nonc deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="NonceValue" />
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown >
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
                                                            <DropdownMenu className="dropdown-menu-arrow" >
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setNonceOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setNonceOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setNonceOperator("lt")
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
                                        <td className="TransactionIndex deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="TxIndexValue" />
                                                {/* <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        <UncontrolledDropdown >
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
                                                            <DropdownMenu className="dropdown-menu-arrow" >
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
                                        <td className="From">
                                            <InputGroup>
                                                <Input bsSize="sm" id="FromValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="To">
                                            <InputGroup>
                                                <Input bsSize="sm" id="ToValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="Value">
                                            <InputGroup>
                                                <Input bsSize="sm" id="ValueValue" />
                                                <InputGroupAddon addonType="prepend" >
                                                    <InputGroupText>
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown >
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
                                                            <DropdownMenu className="dropdown-menu-arrow" >
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setValueOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setValueOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setValueOperator("lt")
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
                                        <td className="Gas deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="GasValue" />
                                                <InputGroupAddon addonType="prepend" >
                                                    <InputGroupText>
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown >
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
                                                            <DropdownMenu className="dropdown-menu-arrow" >
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setGasOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setGasOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setGasOperator("lt")
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
                                        <td className="GasPrice">
                                            <InputGroup>
                                                <Input bsSize="sm" id="GasPriceValue" />
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown >
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
                                                            <DropdownMenu className="dropdown-menu-arrow" >
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setGasPriceOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setGasPriceOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setGasPriceOperator("lt")
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
                                        <td className="Input deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="InputValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="ReceiptCumulativeGasUsed deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="RCGUValue" />
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown >
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
                                                            <DropdownMenu className="dropdown-menu-arrow" >
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setRCGUOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setRCGUOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setRCGUOperator("lt")
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
                                        <td className="ReceiptGasUsed deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="RGUValue" />
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText >
                                                        {/* <i className="ni ni-lock-circle-open" /> */}
                                                        <UncontrolledDropdown >
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
                                                            <DropdownMenu className="dropdown-menu-arrow" >
                                                                <DropdownItem header>
                                                                    Filter by
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setRGUOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setRGUOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setRGUOperator("lt")
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
                                        <td className="ReceiptContractAddress deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="RCUValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="ReceiptRoot deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="RRValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="ReceiptStatus deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="RSValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="Time">
                                            <InputGroup>
                                                <Input bsSize="sm" id="TimeValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="BlockNumber deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="BlockNumberValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="BlockHash deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="BlockHashValue" />
                                            </InputGroup>
                                        </td>
                                    </tr>
                                    {
                                        csvItems.map(e => (
                                            <tr>
                                                <td  className="Hash">
                                                    {e.hash}
                                                </td>
                                                <td  
                                                className="Nonc deactive-table"
                                                // data-tip={`Nonce = ${e.nonc?e.nonc.toLocaleString():0}`}
                                                >
                                                    {e.nonc < 1000 && e.nonc? Number(e.nonc).toLocaleString(undefined, {maximumFractionDigits:4}) : nFormatter(e.nonc , 1)}
                                                    {/* <ReactTooltip /> */}
                                                </td>
                                                <td  className="TransactionIndex deactive-table">
                                                    {e.transaction_index}
                                                </td>
                                                <td className="From">
                                                    {e.from_address}
                                                </td>
                                                <td className="To">
                                                    {e.to_address}
                                                </td>
                                                <td 
                                                className="Value"
                                                // data-tip={`Value = ${e.value?e.value.toLocaleString():0}`}
                                                >
                                                    {/* <TxData props={e.address} id={e.id} /> */}
                                                    {e.value < 1000 && e.value? Number(e.value).toLocaleString(undefined, {maximumFractionDigits:4}) : nFormatter(e.value , 1)}
                                                    {/* <ReactTooltip /> */}
                                                </td>
                                                <td  
                                                className="Gas deactive-table"
                                                // data-tip={`Gas = ${e.gas?e.gas.toLocaleString():0}`}
                                                >
                                                    {e.gas < 1000 && e.gas? Number(e.gas).toLocaleString(undefined, {maximumFractionDigits:4}) : nFormatter(e.gas , 1)}
                                                    {/* <ReactTooltip /> */}
                                                </td>
                                                <td 
                                                className="GasPrice"
                                                // data-tip={`GasPrice = ${e.gas_price?e.gas_price.toLocaleString():0}`}
                                                >
                                                    {/* <NftData props={e.address} id={e.id} /> */}
                                                    {e.gas_price < 1000 && e.gas_price? Number(e.gas_price).toLocaleString(undefined, {maximumFractionDigits:4}) : nFormatter(e.gas_price , 1)}
                                                    {/* <ReactTooltip /> */}
                                                </td>
                                                <td  className="Input deactive-table">
                                                    {e.input}
                                                </td>
                                                <td  
                                                className="ReceiptCumulativeGasUsed deactive-table"
                                                // data-tip={`ReceiptCumulativeGasUsed = ${e.receipt_cumulative_gas_used?e.receipt_cumulative_gas_used.toLocaleString():0}`}
                                                >
                                                    {e.receipt_cumulative_gas_used < 1000 && e.receipt_cumulative_gas_used? Number(e.receipt_cumulative_gas_used).toLocaleString(undefined, {maximumFractionDigits:4}) : nFormatter(e.receipt_cumulative_gas_used , 1)}
                                                    {/* <ReactTooltip /> */}
                                                </td>
                                                <td  
                                                className="ReceiptGasUsed deactive-table"
                                                // data-tip={`ReceiptGasUsed = ${e.receipt_gas_used?e.receipt_gas_used.toLocaleString():0}`}
                                                >
                                                    {e.receipt_gas_used < 1000 && e.receipt_gas_used? Number(e.receipt_gas_used).toLocaleString(undefined, {maximumFractionDigits:4}) : nFormatter(e.receipt_gas_used , 1)}
                                                    {/* <ReactTooltip /> */}
                                                </td>
                                                <td  className="ReceiptContractAddress deactive-table">
                                                    {e.receipt_contract_address}
                                                </td>
                                                <td  className="ReceiptRoot deactive-table">
                                                    {e.receipt_root}
                                                </td>
                                                <td  className="ReceiptStatus deactive-table">
                                                    {e.receipt_status}
                                                </td>
                                                <td className="Time">
                                                    {/* <BalanceData props={e.address} id={e.id} /> */}
                                                    {e.block_timestamp}
                                                </td>
                                                <td  className="BlockNumber deactive-table">
                                                    {e.block_number}
                                                </td>
                                                <td  className="BlockHash deactive-table">
                                                    {e.block_hash}
                                                </td>
                                            </tr>

                                        ))
                                    }


                                </tbody>: <tbody style={{ textAlign:"center"}}><td></td><td></td><Spinner animation="border" style={{ margin:"10px"}}/></tbody>
                            }
                            </Table>
                            <CardFooter>
                                <Row>
                                    <FormGroup row>
                                        <Pagination className="pagination">
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
                                            {/* <PaginationItem>
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
                                            </PaginationItem> */}
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

export default AllTransactions
