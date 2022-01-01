/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
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
  Table,
  Container,
  Row,
  FormGroup,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import React, { useState, useEffect, useRef } from 'react'


const NFTCo = () => {
  const [NFTSortBy, setNFTSort] = useState("none")
  const [txSortBy, settxSort] = useState("none")
  const [balanceSortBy, setbalanceSort] = useState("none")
  const [NFTOperator, setNFTOperator] = useState("eq")
  const [txOperator, settxOperator] = useState("eq")
  const [balanceOperator, setbalanceOperator] = useState("eq")
  const [csvItems, setcsvItems] = useState([])
  const [nextPageUrl, setnextPage] = useState("")
  const [previousPageUrl, setpreviousPage] = useState("")
  const [allData, setallData] = useState(1)
  const Filters = useRef()


  async function setFilters(e) {
    e ? e.preventDefault() : console.log("-")
    const AddressInput = document.getElementById("addressInput").value
    const NFTCount = document.getElementById("NFTInput").value
    const TxCount = document.getElementById("txInput").value
    const BalanceValue = document.getElementById("balanceInput").value
    var filterObject = {
      AddressInput: AddressInput,
      NFTSortBy: NFTSortBy,
      NFTCount: NFTCount,
      NFTOperator: NFTOperator,
      TxSortBy: txSortBy,
      TxCount: TxCount,
      TxOperator: txOperator,
      BalanceSortBy: balanceSortBy,
      BalanceValue: BalanceValue,
      BalanceOperator: balanceOperator,
    }
    fetch(`http://65.108.59.117:7001/api/csv?AddressInput=${filterObject.AddressInput}&NFTSortBy=${filterObject.NFTSortBy}&NFTCount=${filterObject.NFTCount}&NFTOperator=${filterObject.NFTOperator}&TxSortBy=${filterObject.TxSortBy}&TxCount=${filterObject.TxCount}&TxOperator=${filterObject.TxOperator}&BalanceSortBy=${filterObject.BalanceSortBy}&BalanceValue=${filterObject.BalanceValue}&BalanceOperator=${filterObject.BalanceOperator}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setcsvItems(data.results)
        // setnextPage(data.next)
        // setpreviousPage(data.previous)
        // setallData(data.count)
      })
    console.log(filterObject)
  }
  // function getSingleWalletData(walletAddress, NFT, TX, balance) {
  //   fetch('http://65.108.59.117:7001/api/csv/data_getter/?wallet=' + walletAddress + '&Tx=' + TX + '&NFT=' + NFT + '&balance=' + balance, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Token ' + sessionStorage.getItem('token')
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       alert(data.result)
  //     })
  // }
  useEffect(() => {
    async function getData() {
      await fetch("http://65.108.59.117:7001/api/csv/nftcompany/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
            // 'Authorization': 'Token ' + sessionStorage.getItem('token')
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setcsvItems(data.results)
          setnextPage(data.next)
          setpreviousPage(data.previous)
          setallData(data.count)
        })
    }
    getData()
  }, []);

  async function removeFilters(e) {
    e.preventDefault()
    // await fetch('http://65.108.59.117:7001/api/csv/balancedata/?AddressValue=&ContractDecimalValue=&ContractDecimalSortBy=&ContractNameValue=&ContractTickerSymbolValue=&ContractAddressValue=&LastTransferredAtValue=&TypeValue=cryptocurrency&BalanceValue=&BalanceSortBy=&BalanceOperator=&Balance24hValue=&Balance24hSortBy=&Balance24hOperator=&QuoteRateValue=&QuoteRateSortBy=&QuoteRateOperator=&QuoteRate24hValue=&QuoteRate24hSortBy=&QuoteRate24hOperator=&QuoteValue=&QuoteSortBy=&QuoteOperator=&Quote24hValue=&Quote24hSortBy=&Quote24hOperator=', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Token ' + sessionStorage.getItem('token')
    //     },
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         setcsvItems(data.results)
    //         setnextPage(data.next)
    //         setpreviousPage(data.previous)
    //         setallData(data.count)
    //         console.log(data)
    //     })
}

  const startRangeeeee = 1
  async function previousPage(e) {
    console.log(previousPageUrl)
    e.preventDefault()
    // await fetch(`${previousPageUrl}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Token ' + sessionStorage.getItem('token')
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     setcsvItems(data.results)
    //     setnextPage(data.next)
    //     setpreviousPage(data.previous)
    //     console.log(data)
    //   })
  }
  async function nextPage(e) {
    console.log(nextPageUrl)
    e.preventDefault()
    // await fetch(`${nextPageUrl}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Token ' + sessionStorage.getItem('token')
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     setcsvItems(data.results)
    //     setnextPage(data.next)
    //     setpreviousPage(data.previous)
    //     console.log(data)
    //   })
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
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="text-black mb-0">NFT Company</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    {/* <InputGroup className="input-group-alternative mb-2">
                      <Input bsSize="sm" id="tokenUpdate" />
                      <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => updateTokens(e)}
                      size="sm"
                    >
                      UPDATE
                    </Button>
                    </InputGroup> */}
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
                        {/* <DropdownItem
                          href="#pablo"
                          id="Email"
                          className="mmm"
                          onClick={e => handleColumn("Email")}
                        >
                          Email
                        </DropdownItem> */}
                        {/* <DropdownItem
                          href="#pablo"
                          id="Point"
                          className="mmm"
                          onClick={e => handleColumn("Point")}
                        >
                          Point
                        </DropdownItem> */}
                        <DropdownItem
                          href="#pablo"
                          id="URL"
                          className="mmm"
                          onClick={e => handleColumn("URL")}
                        >
                          URL
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
                      {/* <UncontrolledDropdown>
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
                      </UncontrolledDropdown> */}
                    </th>
                    {/* <th scope="col" className="Email">
                      Email
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
                    <th scope="col" className="Point">
                      Point
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
                    </th> */}
                    <th scope="col" className="URL">
                      URL
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
                              settxSort("ASC")
                              setNFTSort("none")
                              setbalanceSort("none")
                            }}
                          >
                            Ascending
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault()
                              settxSort("DESC")
                              setNFTSort("none")
                              setbalanceSort("none")
                            }}
                          >
                            Descending
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault()
                              settxSort("none")
                              setNFTSort("none")
                              setbalanceSort("none")
                            }}
                          >
                            Unsort
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </th>
                    <th scope="col" className="Tags">
                      Tags
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
                              settxSort("none")
                              setNFTSort("ASC")
                              setbalanceSort("none")
                            }}
                          >
                            Ascending
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault()
                              settxSort("none")
                              setNFTSort("DESC")
                              setbalanceSort("none")
                            }}
                          >
                            Descending
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault()
                              settxSort("none")
                              setNFTSort("none")
                              setbalanceSort("none")
                            }}
                          >
                            Unsort
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </th>
                    {/* <th scope="col" className="Balance">
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
                        <DropdownMenu className="dropdown-menu-arrow" >
                          <DropdownItem header>
                            Sort
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault()
                              settxSort("none")
                              setNFTSort("none")
                              setbalanceSort("ASC")
                            }}
                          >
                            Ascending
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault()
                              settxSort("none")
                              setNFTSort("none")
                              setbalanceSort("DESC")
                            }}
                          >
                            Descending
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault()
                              settxSort("none")
                              setNFTSort("none")
                              setbalanceSort("none")
                            }}
                          >
                            Unsort
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </th>
                    <th>
                      Option
                    </th> */}

                  </tr>
                </thead>
                <tbody>
                  <tr ref={Filters}>
                    <td className="Name">
                      <InputGroup>
                        <Input bsSize="sm" id="addressInput" />
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
                    {/* <td className="Email">
                      <InputGroup>
                        <Input bsSize="sm" />
                        <InputGroupAddon addonType="prepend">
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
                        </InputGroupAddon>

                      </InputGroup>
                    </td>
                    <td className="Point">
                      <InputGroup>
                        <Input bsSize="sm" />
                        <InputGroupAddon addonType="prepend">
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
                        </InputGroupAddon>

                      </InputGroup>
                    </td> */}
                    <td className="URL">
                      <InputGroup>
                        <Input bsSize="sm" id="txInput" />
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
                                    settxOperator("eq")
                                  }}
                                >
                                  Equals
                                </DropdownItem>
                                {/* <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Greater then And Equals
                                </DropdownItem> */}
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => {
                                    e.preventDefault()
                                    settxOperator("gt")
                                  }}
                                >
                                  Greater then
                                </DropdownItem>
                                {/* <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Smaller then and Equals
                                </DropdownItem> */}
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => {
                                    e.preventDefault()
                                    settxOperator("lt")
                                  }}
                                >
                                  Smaller then
                                </DropdownItem>
                                {/* <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Dismiss Filter
                                </DropdownItem> */}
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </InputGroupText>
                        </InputGroupAddon>

                      </InputGroup>
                    </td>
                    <td className="Tags">
                      <InputGroup>
                        <Input bsSize="sm" id="NFTInput" />
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
                                    setNFTOperator("eq")
                                  }}
                                >
                                  Equals
                                </DropdownItem>
                                {/* <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Greater then And Equals
                                </DropdownItem> */}
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => {
                                    e.preventDefault()
                                    setNFTOperator("gt")
                                  }}
                                >
                                  Greater then
                                </DropdownItem>
                                {/* <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Smaller then and Equals
                                </DropdownItem> */}
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => {
                                    e.preventDefault()
                                    setNFTOperator("lt")
                                  }}
                                >
                                  Smaller then
                                </DropdownItem>
                                {/* <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Dismiss Filter
                                </DropdownItem> */}
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </InputGroupText>
                        </InputGroupAddon>

                      </InputGroup>
                    </td>
                    {/* <td className="Balance">
                      <InputGroup>
                        <Input bsSize="sm" id="balanceInput" />
                        <InputGroupAddon addonType="prepend">
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
                                  onClick={e => {
                                    e.preventDefault()
                                    setbalanceOperator("eq")
                                  }}
                                >
                                  Equals
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => {
                                    e.preventDefault()
                                    setbalanceOperator("gt")
                                  }}
                                >
                                  Greater then
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => {
                                    e.preventDefault()
                                    setbalanceOperator("lt")
                                  }}
                                >
                                  Smaller then
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </InputGroupText>
                        </InputGroupAddon>

                      </InputGroup>
                    </td> */}
                  </tr>
                  {
                    csvItems.map(e => (
                      <tr>
                        <td className="Name">
                          {e.name}
                        </td>
                        {/* <td className="Email"> 
                          {e.name}
                        </td>
                        <td className="Point">
                          {e.point}
                        </td> */}
                        <td className="URL">
                          {/* <TxData props={e.address} id={e.id} /> */}
                          <a href={e.site_url}>{e.site_url}</a>
                        </td>
                        <td className="Tags">
                          {/* <NftData props={e.address} id={e.id} /> */}
                          {e.company_features}
                        </td>
                        {/* <td className="Balance">
                          <Button
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                          >
                            Show Balance
                          </Button>
                        </td> */}
                        {/* <td>
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
                              <DropdownItem
                                href="#pablo"
                                onClick={() => getSingleWalletData(e.address, 'true', 'true', 'true')}
                              >
                                Update NFTs & TX & balance
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={() => getSingleWalletData(e.address, 'true', 'false', 'false')}
                              >
                                Update NFTs
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={() => getSingleWalletData(e.address, 'false', 'true', 'false')}
                              >
                                Update TXs
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={() => getSingleWalletData(e.address, 'false', 'false', 'true')}
                              >
                                Update balance
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td> */}
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
    </>
  );
};

export default NFTCo;
