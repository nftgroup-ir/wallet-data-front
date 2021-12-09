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




function AllTransactions() {
    const [allTransactions, setAllTransactions] = useState([])
    const [csvItems, setcsvItems] = useState([""])

    const data = [
        {
            id: 201,
            hash: "0x7ca358fea3249d8c1a92dc2b95381c6a3a332d428595a5b2efc8c2ea669a6755",
            nonc: null,
            transaction_index: null,
            from_address: "0xf778130cda40056ed0b48c42421020cef88a62e1",
            to_address: "0xe304283c3e60cefaf7ea514007cf4e8fdc3d869d",
            value: 659309389,
            gas: null,
            gas_price: 93425618283,
            input: null,
            receipt_cumulative_gas_used: null,
            receipt_gas_used: 59076,
            receipt_contract_address: null,
            receipt_root: null,
            receipt_status: null,
            block_timestamp: "2021-12-06 - 10:39:13",
            block_number: null,
            block_hash: null,
            parent: 5
        },
        {
            id: 202,
            hash: "0x1438e8605835275e6a247bd57c95da713c63abc818644579ea85ffed6ee40649",
            nonc: null,
            transaction_index: null,
            from_address: "0x9b82087aeac5ede362744d6b4727e4d3d852f404",
            to_address: "0x2373c5dc96238a64ce4062e74000fd3dacfd3bf7",
            value: 782332987343,
            gas: null,
            gas_price: 75376093833,
            input: null,
            receipt_cumulative_gas_used: null,
            receipt_gas_used: 100965,
            receipt_contract_address: null,
            receipt_root: null,
            receipt_status: null,
            block_timestamp: "2021-12-06 - 10:39:13",
            block_number: null,
            block_hash: null,
            parent: 5
        },
        {
            id: 203,
            hash: "0xd253584563a7863ded5c3e01a92f2b62e9e00edd47542ad0d4d8afac0f6beed8",
            nonc: null,
            transaction_index: null,
            from_address: "0x1b962a286e9bea7b51d45a3fb176673405d3ff0f",
            to_address: "0x265befe2b1a0f4f646dea96ba09c1656b74bda91",
            value: 2398327474372,
            gas: null,
            gas_price: 84852909601,
            input: null,
            receipt_cumulative_gas_used: null,
            receipt_gas_used: 164682,
            receipt_contract_address: null,
            receipt_root: null,
            receipt_status: null,
            block_timestamp: "2021-12-06 - 10:39:13",
            block_number: null,
            block_hash: null,
            parent: 5
        },
    ]
    const Filters = useRef()

    async function setFilters(e) {
        e.preventDefault()
        const xYz = await Array.from(Filters.current.querySelectorAll('input'))
        const mmmm = xYz.map(e => e.value)
        console.log(mmmm)
        var filterObject = {
            addressSort: mmmm[0],
            addressBaseSort: "",
            emailSort: mmmm[1],
            emailBaseSort: "",
            pointSort: mmmm[2],
            pointBaseSort: "",
            txSort: mmmm[3],
            txBaseSort: "",
            nftSort: mmmm[4],
            nftBaseSort: "",
            balanceSort: mmmm[5],
            balanceBaseSort: "",
        }
        fetch(`http://65.108.59.117:7001/api/csv/transaction?addressSort=${filterObject.addressSort}&addressBaseSort=${filterObject.addressBaseSort}&emailSort=${filterObject.emailSort}&emailBaseSort=${filterObject.emailBaseSort}&pointSort=${filterObject.pointSort}&pointBaseSort=${filterObject.pointBaseSort}&txSort=${filterObject.txSort}&txBaseSort=${filterObject.txBaseSort}&nftSort=${filterObject.nftSort}&nftBaseSort=${filterObject.nftBaseSort}&balanceSort=${filterObject.balanceSort}&balanceBaseSort=${filterObject.balanceBaseSort}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    useEffect(() => {
        function setdata(e) {
            setcsvItems(e)
        }
        setdata(data)
    }, [])
    const endRangeeeee = 200
    const startRangeeeee = 1

    function handleColumn(e) {
        console.log(e)
        console.log(document.querySelector('#'+e))
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
                                            <DropdownMenu className="dropdown-menu-arrow" left>
                                                <DropdownItem header>
                                                    Sort
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
                                        <th scope="col">
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
                                                <DropdownMenu className="dropdown-menu-arrow" left>
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
                                                <DropdownMenu className="dropdown-menu-arrow" left>
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
                                        <th scope="col">
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
                                        <th scope="col">
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
                                                <DropdownMenu className="dropdown-menu-arrow" left>
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
                                        <th scope="col">
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
                                                <DropdownMenu className="dropdown-menu-arrow" left>
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
                                        <th scope="col">
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
                                                <DropdownMenu className="dropdown-menu-arrow" left>
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
                                <tbody>
                                    <tr ref={Filters}>
                                        <td>
                                            <InputGroup>
                                                <Input bsSize="sm" />
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
                                                </InputGroupAddon>

                                            </InputGroup>
                                        </td>
                                        <td className="From">
                                            <InputGroup>
                                                <Input bsSize="sm" />
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
                                                </InputGroupAddon>

                                            </InputGroup>
                                        </td>
                                        <td>
                                            <InputGroup>
                                                <Input bsSize="sm" />
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
                                                </InputGroupAddon>

                                            </InputGroup>
                                        </td>
                                        <td>
                                            <InputGroup>
                                                <Input bsSize="sm" />
                                                <InputGroupAddon addonType="prepend" >
                                                    <InputGroupText>
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
                                                </InputGroupAddon>

                                            </InputGroup>
                                        </td>
                                        <td>
                                            <InputGroup>
                                                <Input bsSize="sm" />
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
                                                </InputGroupAddon>

                                            </InputGroup>
                                        </td>
                                        <td>
                                            <InputGroup>
                                                <Input bsSize="sm" />
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
                                                </InputGroupAddon>

                                            </InputGroup>
                                        </td>
                                    </tr>
                                    {
                                        csvItems.map(e => (
                                            <tr>
                                                <td scope="row">
                                                    {e.hash}
                                                </td>
                                                <td className="From">
                                                    {e.from_address}
                                                </td>
                                                <td>
                                                    {e.to_address}
                                                </td>
                                                <td>
                                                    {/* <TxData props={e.address} id={e.id} /> */}
                                                    {e.value}
                                                </td>
                                                <td>
                                                    {/* <NftData props={e.address} id={e.id} /> */}
                                                    {e.gas_price}
                                                </td>
                                                <td>
                                                    {/* <BalanceData props={e.address} id={e.id} /> */}
                                                    {e.block_timestamp}
                                                </td>
                                            </tr>

                                        ))
                                    }


                                </tbody>
                            </Table>
                            <CardFooter>
                                <Row>
                                    <FormGroup row>
                                        <Label
                                            for="perPage"
                                            sm={8}
                                        >
                                            Items per page:
                                        </Label>
                                        <Col sm="2">
                                            <Input id="perPage" type="select" className="custom-select" >
                                                <option>20</option>
                                                <option>50</option>
                                                <option>100</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label
                                            for="pageNumber"
                                            sm={6}
                                            className="form-control-label"
                                        >
                                            Page:
                                        </Label>
                                        <Col sm="2">
                                            <Input id="pageNumber" type="select" className="custom-select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <Col sm="1" >
                                        <p>{`${startRangeeeee} - ${endRangeeeee}`}</p>
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
