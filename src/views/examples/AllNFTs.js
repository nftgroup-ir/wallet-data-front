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
import React, { useState, useEffect, useRef } from 'react'
import "../../assets/css/CustomCss.css"
import { useLocation } from "react-router-dom";





function AllNFTs() {
    let { search } = useLocation()
    const [csvItems, setcsvItems] = useState([""])
    const [TokenIdSortBy, settokenIdSortBy] = useState("none")
    const [BlockNumberMintedSortBy, setblockNumberMintedSortBy] = useState("none")
    const [AmountSortBy, setamountSortBy] = useState("none")
    const [IsValidSortBy, setisValidSortBy] = useState("none")
    const [SyncingSortBy, setsyncingSortBy] = useState("none")
    const [FrozenSortBy, setfrozenSortBy] = useState("none")
    const [BlockNumberSortBy, setblockNumberSortBy] = useState("none")
    const [TokenIdOperator, settokenIdOperator] = useState("")
    const [BlockNumberMintedOperator, setblockNumberMintedOperator] = useState("")
    const [AmountOperator, setamountOperator] = useState("")
    const [nextPageUrl, setnextPage] = useState("")
    const [previousPageUrl, setpreviousPage] = useState("")
    const [allData, setallData] = useState(1)
    const [IsLoading, setIsLoading] = useState(true)
    const Filters = useRef()

    async function setFilters(e) {
        e.preventDefault()
        setIsLoading(true)
        const NameValue = document.getElementById("NameValue").value
        const AmountValue = document.getElementById("AmountValue").value
        const FrozenValue = document.getElementById("FrozenValue").value
        const SymbolValue = document.getElementById("SymbolValue").value
        const SyncingValue = document.getElementById("SyncingValue").value
        const IsValidValue = document.getElementById("IsValidValue").value
        const MetadataValue = document.getElementById("MetadataValue").value
        const TokenIdValue = document.getElementById("TokenIdValue").value
        const TokenUriValue = document.getElementById("TokenUriValue").value
        const BlockNumberValue = document.getElementById("BlockNumberValue").value
        const ContractTypeValue = document.getElementById("ContractTypeValue").value
        const TokenAddressValue = document.getElementById("TokenAddressValue").value
        const BlockNumberMintedValue = document.getElementById("BlockNumberMintedValue").value
        const OwnerOfValue = document.getElementById("OwnerOfValue").value
        const TagsValue = document.getElementById("TagsValue").value
        var filterObject = {
            NameValue: NameValue,
            AmountValue: AmountValue,
            FrozenValue: FrozenValue,
            SymbolValue: SymbolValue,
            SyncingValue: SyncingValue,
            IsValidValue: IsValidValue,
            MetadataValue: MetadataValue,
            TokenIdValue: TokenIdValue,
            TokenUriValue: TokenUriValue,
            BlockNumberValue: BlockNumberValue,
            ContractTypeValue: ContractTypeValue,
            TokenAddressValue: TokenAddressValue,
            BlockNumberMintedValue: BlockNumberMintedValue,
            OwnerOfValue: OwnerOfValue,
            TokenIdSortBy: TokenIdSortBy,
            BlockNumberMintedSortBy: BlockNumberMintedSortBy,
            AmountSortBy: AmountSortBy,
            IsValidSortBy: IsValidSortBy,
            SyncingSortBy: SyncingSortBy,
            FrozenSortBy: FrozenSortBy,
            BlockNumberSortBy: BlockNumberSortBy,
            TokenIdOperator: TokenIdOperator,
            BlockNumberMintedOperator: BlockNumberMintedOperator,
            AmountOperator: AmountOperator,
            TagsValue: TagsValue
        }
        fetch(`http://65.108.59.117:7001/api/csv/nft/?NameValue=${filterObject.NameValue}&AmountValue=${filterObject.AmountValue}&FrozenValue=${filterObject.FrozenValue}&SymbolValue=${filterObject.SymbolValue}&SyncingValue=${filterObject.SyncingValue}&IsValidValue=${filterObject.IsValidValue}&MetadataValue=${filterObject.MetadataValue}&TokenIdValue=${filterObject.TokenIdValue}&TokenUriValue=${filterObject.TokenUriValue}&BlockNumberValue=${filterObject.BlockNumberValue}&ContractTypeValue=${filterObject.ContractTypeValue}&TokenAddressValue=${filterObject.TokenAddressValue}&BlockNumberMintedValue=${filterObject.BlockNumberMintedValue}&OwnerOfValue=${filterObject.OwnerOfValue}&TokenIdSortBy=${filterObject.TokenIdSortBy}&BlockNumberMintedSortBy=${filterObject.BlockNumberMintedSortBy}&AmountSortBy=${filterObject.AmountSortBy}&IsValidSortBy=${filterObject.IsValidSortBy}&SyncingSortBy=${filterObject.SyncingSortBy}&FrozenSortBy=${filterObject.FrozenSortBy}&BlockNumberSortBy=${filterObject.BlockNumberSortBy}&TokenIdOperator=${filterObject.TokenIdOperator}&BlockNumberMintedOperator=${filterObject.BlockNumberMintedOperator}&AmountOperator=${filterObject.AmountOperator}&TagsValue=${filterObject.TagsValue}`, {
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
        console.log(filterObject)
    }

    useEffect(() => {
        const query = new URLSearchParams(search);
        const wallet = query.get('wallet')
        if (!wallet){
        async function getData() {
            await fetch('http://65.108.59.117:7001/api/csv/nft/?NameValue=&AmountValue=&FrozenValue=&SymbolValue=&SyncingValue=&IsValidValue=&MetadataValue=&TokenIdValue=&TokenUriValue=&BlockNumberValue=&ContractTypeValue=&TokenAddressValue=&BlockNumberMintedValue=&OwnerOfValue=&TokenIdSortBy=&BlockNumberMintedSortBy=&AmountSortBy=&IsValidSortBy=DESC&SyncingSortBy=&FrozenSortBy=&BlockNumberSortBy=&TokenIdOperator=&BlockNumberMintedOperator=&AmountOperator=&TagsValue=', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Token ' + sessionStorage.getItem('token')
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
            await fetch(`http://65.108.59.117:7001/api/csv/nft/?NameValue=&AmountValue=&FrozenValue=&SymbolValue=&SyncingValue=&IsValidValue=&MetadataValue=&TokenIdValue=&TokenUriValue=&BlockNumberValue=&ContractTypeValue=&TokenAddressValue=&BlockNumberMintedValue=&OwnerOfValue=${wallet}&TokenIdSortBy=&BlockNumberMintedSortBy=&AmountSortBy=&IsValidSortBy=DESC&SyncingSortBy=&FrozenSortBy=&BlockNumberSortBy=&TokenIdOperator=&BlockNumberMintedOperator=&AmountOperator=&TagsValue=`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Token ' + sessionStorage.getItem('token')
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
    }, [])

    async function removeFilters(e) {
        e.preventDefault()
        setIsLoading(true)
        await fetch('http://65.108.59.117:7001/api/csv/nft/?NameValue=&AmountValue=&FrozenValue=&SymbolValue=&SyncingValue=&IsValidValue=&MetadataValue=&TokenIdValue=&TokenUriValue=&BlockNumberValue=&ContractTypeValue=&TokenAddressValue=&BlockNumberMintedValue=&OwnerOfValue=&TokenIdSortBy=&BlockNumberMintedSortBy=&AmountSortBy=&IsValidSortBy=&SyncingSortBy=&FrozenSortBy=&BlockNumberSortBy=&TokenIdOperator=&BlockNumberMintedOperator=&AmountOperator=&TagsValue=', {
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
                console.log(data)
                setIsLoading(false)
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
                                        <h3 className="text-black mb-0">NFTs</h3>
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
                                                    id="Name"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Name")}
                                                >
                                                    Name
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Amount"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Amount")}
                                                >
                                                    Amount
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Frozen"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Frozen")}
                                                >
                                                    Frozen
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Symbol"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Symbol")}
                                                >
                                                    Symbol
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Syncing"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Syncing")}
                                                >
                                                    Syncing
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="IsValid"
                                                    className="mmm"
                                                    onClick={e => handleColumn("IsValid")}
                                                >
                                                    Is Valid
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Metadata"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Metadata")}
                                                >
                                                    Metadata
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Owner"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Owner")}
                                                >
                                                    Owner
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="TokenId"
                                                    className="mmm"
                                                    onClick={e => handleColumn("TokenId")}
                                                >
                                                    Token Id
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="SyncedAt"
                                                    className="mmm"
                                                    onClick={e => handleColumn("SyncedAt")}
                                                >
                                                    Synced At
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="TokenUri"
                                                    className="mmm"
                                                    onClick={e => handleColumn("TokenUri")}
                                                >
                                                    Token Uri
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
                                                    id="ContractType"
                                                    className="mmm"
                                                    onClick={e => handleColumn("ContractType")}
                                                >
                                                    Contract Type
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="TokenAddress"
                                                    className="mmm"
                                                    onClick={e => handleColumn("TokenAddress")}
                                                >
                                                    Token Address
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="BlockNumberMinted"
                                                    className="mmm"
                                                    onClick={e => handleColumn("BlockNumberMinted")}
                                                >
                                                    Block Number Minted
                                                </DropdownItem>
                                                <DropdownItem
                                                    href="#pablo"
                                                    id="Tags"
                                                    className="mmm"
                                                    onClick={e => handleColumn("Tags")}
                                                >
                                                    Tags
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
                                        <th scope="col" className="Name">
                                            Name

                                        </th>
                                        <th scope="col" className="Amount">
                                            Amount
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
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("ASC")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("DESC")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Frozen deactive-table">
                                            Frozen
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
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("ASC")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("DESC")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Symbol">
                                            Symbol

                                        </th>
                                        <th scope="col" className="Syncing deactive-table">
                                            Syncing
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
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("ASC")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("DESC")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>

                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="IsValid">
                                            Is Valid
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
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("ASC")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("DESC")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Metadata deactive-table">
                                            Metadata

                                        </th>
                                        <th scope="col" className="Owner">
                                            Owner
                                        </th>
                                        <th scope="col" className="TokenId deactive-table">
                                            Token Id
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
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("ASC")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("DESC")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="SyncedAt deactive-table">
                                            Synced At
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
                                        <th scope="col" className="TokenUri">
                                            Token Uri
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
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("ASC")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("DESC")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="ContractType">
                                            Contract Type
                                        </th>
                                        <th scope="col" className="TokenAddress deactive-table">
                                            Token Address
                                        </th>
                                        <th scope="col" className="BlockNumberMinted deactive-table">
                                            Block Number Minted
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
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("ASC")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Ascending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("DESC")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Descending
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            settokenIdSortBy("none")
                                                            setblockNumberMintedSortBy("none")
                                                            setamountSortBy("none")
                                                            setisValidSortBy("none")
                                                            setsyncingSortBy("none")
                                                            setfrozenSortBy("none")
                                                            setblockNumberSortBy("none")
                                                        }}
                                                    >
                                                        Unsort
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </th>
                                        <th scope="col" className="Tags">
                                            Tags
                                        </th>
                                    </tr>
                                </thead>
                                {!IsLoading ?
                                <tbody>
                                    <tr ref={Filters}>
                                        <td className="Name">
                                            <InputGroup>
                                                <Input bsSize="sm" id="NameValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="Amount">
                                            <InputGroup>
                                                <Input bsSize="sm" id="AmountValue" />
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
                                                                        setamountOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setamountOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setamountOperator("lt")
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
                                        <td className="Frozen deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="FrozenValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="Symbol">
                                            <InputGroup>
                                                <Input bsSize="sm" id="SymbolValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="Syncing deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="SyncingValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="IsValid">
                                            <InputGroup>
                                                <Input bsSize="sm" id="IsValidValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="Metadata deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="MetadataValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="Owner">
                                            <InputGroup>
                                                <Input bsSize="sm" id="OwnerOfValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="TokenId deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="TokenIdValue" />
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
                                                                        settokenIdOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        settokenIdOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        settokenIdOperator("lt")
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
                                        <td className="SyncedAt deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" />
                                            </InputGroup>
                                        </td>
                                        <td className="TokenUri">
                                            <InputGroup>
                                                <Input bsSize="sm" id="TokenUriValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="BlockNumber deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="BlockNumberValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="ContractType">
                                            <InputGroup>
                                                <Input bsSize="sm" id="ContractTypeValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="TokenAddress deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="TokenAddressValue" />
                                            </InputGroup>
                                        </td>
                                        <td className="BlockNumberMinted deactive-table">
                                            <InputGroup>
                                                <Input bsSize="sm" id="BlockNumberMintedValue" />
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
                                                                        setblockNumberMintedOperator("eq")
                                                                    }}
                                                                >
                                                                    Equals
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setblockNumberMintedOperator("gt")
                                                                    }}
                                                                >
                                                                    Greater then
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => {
                                                                        e.preventDefault()
                                                                        setblockNumberMintedOperator("lt")
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
                                        <td className="Tags">
                                            <InputGroup>
                                                <Input bsSize="sm" id="TagsValue" />
                                            </InputGroup>
                                        </td>

                                    </tr>
                                    {
                                        csvItems.map(e => (
                                            <tr>
                                                <td className="Name">
                                                    {e.name}
                                                </td>
                                                <td className="Amount">
                                                    {e.amount}
                                                </td>
                                                <td className="Frozen deactive-table">
                                                    {e.frozen}
                                                </td>
                                                <td className="Symbol">
                                                    {e.symbol}
                                                </td>
                                                <td className="Syncing deactive-table">
                                                    {e.syncing}
                                                </td>
                                                <td className="IsValid">
                                                    {e.is_valid}
                                                </td>
                                                <td className="Metadata deactive-table OverFlow">
                                                    {e.metadata}
                                                </td>
                                                <td className="Owner">
                                                    {e.owner_of}
                                                </td>
                                                <td className="TokenId deactive-table">
                                                    {e.token_id}
                                                </td>
                                                <td className="SyncedAt deactive-table">
                                                    {e.synced_at}
                                                </td>
                                                <td className="TokenUri OverFlow" >
                                                    {e.token_uri}
                                                </td>
                                                <td className="BlockNumber deactive-table">
                                                    {e.block_number}
                                                </td>
                                                <td className="ContractType">
                                                    {e.contract_type}
                                                </td>
                                                <td className="TokenAddress deactive-table">
                                                    {e.token_address}
                                                </td>
                                                <td className="BlockNumberMinted deactive-table">
                                                    {e.block_number_minted}
                                                </td>
                                                <td className="Tags">
                                                    {e.nft_feature? e.nft_feature.map(a => (
                                                        `${a.name}, `
                                                    )): ""}
                                                </td>
                                            </tr>

                                        ))
                                    }


                                </tbody>: <tbody style={{ textAlign:"center"}}><td></td><td></td><td></td><Spinner animation="border" style={{ margin:"10px"}}/></tbody>
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

export default AllNFTs
