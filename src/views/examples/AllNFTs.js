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




function AllNFTs() {
    const [allTransactions, setAllTransactions] = useState([])
    const [csvItems, setcsvItems] = useState([""])
    const [TokenIdSortBy, settokenIdSortBy] = useState("none")
    const [BlockNumberMintedSortBy, setblockNumberMintedSortBy] = useState("none")
    const [AmountSortBy, setamountSortBy] = useState("none")
    const [IsValidSortBy, setisValidSortBy] = useState("none")
    const [SyncingSortBy, setsyncingSortBy] = useState("none")
    const [FrozenSortBy, setfrozenSortBy] = useState("none")
    const [BlockNumberSortBy, setblockNumberSortBy] = useState("none")
    const [TokenIdOperator, settokenIdOperator] = useState("eq")
    const [BlockNumberMintedOperator, setblockNumberMintedOperator] = useState("eq")
    const [AmountOperator, setamountOperator] = useState("eq")
    const [nextPageUrl, setnextPage] = useState("")
    const [previousPageUrl, setpreviousPage] = useState("")
    const [allData, setallData] = useState(1)
    const data = [
        {
            name: "SecurityFundBasket",
            amount: 1,
            frozen: 0,
            symbol: "SFB",
            syncing: 1,
            is_valid: 0,
            metadata: null,
            owner_of: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            token_id: 24,
            synced_at: null,
            token_uri: null,
            block_number: 9188006,
            contract_type: "ERC721",
            token_address: "0xc9c77b0c2ee79cec54b3af7039f8a7bc684e48bd",
            block_number_minted: 9188006
        },
        {
            name: "SecurityFundBasket",
            amount: 1,
            frozen: 0,
            symbol: "SFB",
            syncing: 1,
            is_valid: 0,
            metadata: null,
            owner_of: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            token_id: 24,
            synced_at: null,
            token_uri: null,
            block_number: 9188006,
            contract_type: "ERC721",
            token_address: "0xc9c77b0c2ee79cec54b3af7039f8a7bc684e48bd",
            block_number_minted: 9188006
        },
        {
            name: "SecurityFundBasket",
            amount: 1,
            frozen: 0,
            symbol: "SFB",
            syncing: 1,
            is_valid: 0,
            metadata: null,
            owner_of: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            token_id: 24,
            synced_at: null,
            token_uri: null,
            block_number: 9188006,
            contract_type: "ERC721",
            token_address: "0xc9c77b0c2ee79cec54b3af7039f8a7bc684e48bd",
            block_number_minted: 9188006
        },
    ]
    const Filters = useRef()

    async function setFilters(e) {
        e.preventDefault()
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
        }
        // fetch(`http://65.108.59.117:7001/api/csv/transaction?addressSort=${filterObject.addressSort}&addressBaseSort=${filterObject.addressBaseSort}&emailSort=${filterObject.emailSort}&emailBaseSort=${filterObject.emailBaseSort}&pointSort=${filterObject.pointSort}&pointBaseSort=${filterObject.pointBaseSort}&txSort=${filterObject.txSort}&txBaseSort=${filterObject.txBaseSort}&nftSort=${filterObject.nftSort}&nftBaseSort=${filterObject.nftBaseSort}&balanceSort=${filterObject.balanceSort}&balanceBaseSort=${filterObject.balanceBaseSort}`, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data.results))
        console.log(filterObject)
    }

    useEffect(() => {
        async function getData() {
            await fetch('http://65.108.59.117:7001/api/csv/nft/', {
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
    const endRangeeeee = 200
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
                                            <DropdownMenu className="dropdown-menu-arrow" left>
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
                                                <DropdownMenu className="dropdown-menu-arrow" left>
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
                                                <DropdownMenu className="dropdown-menu-arrow" left>
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
                                                <DropdownMenu className="dropdown-menu-arrow" left>
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
                                                <DropdownMenu className="dropdown-menu-arrow" left>
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
                                                <DropdownMenu className="dropdown-menu-arrow" left>
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
                                    </tr>
                                </thead>
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

                                    </tr>
                                    {
                                        csvItems.map(e => (
                                            <tr>
                                                <td scope="row" className="Name">
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
                                                <td scope="row" className="Metadata deactive-table">
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
                                                <td className="TokenUri">
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

export default AllNFTs
