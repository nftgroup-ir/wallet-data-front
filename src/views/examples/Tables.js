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
import { useMoralis } from "react-moralis";
import TxData from "./TxData";
import NftData from "./NftData";
import BalanceData from "./BalanceData";


const Tables = (props) => {
  const Moralis = require('moralis');
  const [Arry, setArry] = useState([])
  const [csvItems, setcsvItems] = useState([""])

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
    fetch(`http://65.108.59.117:7001/api/csv?addressSort=${filterObject.addressSort}&addressBaseSort=${filterObject.addressBaseSort}&emailSort=${filterObject.emailSort}&emailBaseSort=${filterObject.emailBaseSort}&pointSort=${filterObject.pointSort}&pointBaseSort=${filterObject.pointBaseSort}&txSort=${filterObject.txSort}&txBaseSort=${filterObject.txBaseSort}&nftSort=${filterObject.nftSort}&nftBaseSort=${filterObject.nftBaseSort}&balanceSort=${filterObject.balanceSort}&balanceBaseSort=${filterObject.balanceBaseSort}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  useEffect(() => {
    async function getData() {
        await fetch('http://65.108.59.117:7001/api/csv/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token')
            },
        })
            .then(res => res.json())
            .then(data => {
                setcsvItems(data)
                console.log(data)
            })
    }
    getData()

}, []);
  const endRangeeeee = 200
  const startRangeeeee = 1
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
                    <h3 className="text-black mb-0">Wallets</h3>
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
                          id="Email"
                          className="mmm"
                          onClick={e => handleColumn("Email")}
                        >
                          Email
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          id="Point"
                          className="mmm"
                          onClick={e => handleColumn("Point")}
                        >
                          Point
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          id="Transactions"
                          className="mmm"
                          onClick={e => handleColumn("Transactions")}
                        >
                          Transactions
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          id="NFT"
                          className="mmm"
                          onClick={e => handleColumn("NFT")}
                        >
                          NFT
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          id="Balance"
                          className="mmm"
                          onClick={e => handleColumn("Balance")}
                        >
                          Balance
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
                    <th scope="col" className="Email">
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
                    </th>
                    <th scope="col" className="Transactions">
                      Transactions
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
                    <th scope="col" className="NFT">
                      NFT
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
                    <td className="Address">
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
                    <td className="Email">
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
                    <td className="Point">
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
                    <td className="Transactions">
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
                    <td className="NFT">
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
                    <td className="Balance">
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
                        <td scope="row" className="Address">
                          {e.address}
                        </td>
                        <td className="Email"> 
                          {e.name}
                        </td>
                        <td className="Point">
                          {e.point}
                        </td>
                        <td className="Transactions">
                          <TxData props={e.address} id={e.id} />
                        </td>
                        <td className="NFT">
                          <NftData props={e.address} id={e.id} />
                        </td>
                        <td className="Balance">
                          <BalanceData props={e.address} id={e.id} />
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
    </>
  );
};

export default Tables;
