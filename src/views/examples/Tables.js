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
  // const [txChange, setTxChange] = useState(false)
  // const [nftChange, setNftChange] = useState(false)
  // const [balanceChange, setBalanceChange] = useState(false)
  const Moralis = require('moralis');
  // const serverUrl = "https://9famhvj4zx53.usemoralis.com:2053/server";
  // const appId = "XzBZFifAz87yqWb45REaWnxoLK3aBVZlVr2AX2Ee";
  // Moralis.start({ serverUrl, appId });


  // const txChangeHandler = (e) => {
  //   setTxChange(e)
  // }
  // const nftChangeHandler = (e) => {
  //   setNftChange(e)
  // }
  // const balanceChangeHandler = (e) => {
  //   setBalanceChange(e)
  // }

  const [Arry, setArry] = useState([])
  const [csvItems, setcsvItems] = useState([""])

  useEffect(() => {
    function setdata(e) {
      setcsvItems(e)
    }
    setdata(props.props)
  }, [])
  const endRangeeeee = 200
  const startRangeeeee = 1

  // useEffect(() => {
  //   fetch('http://65.108.59.117:7001/api/csv/' ,{
  //     method:'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Token ' + sessionStorage.getItem('token')
  //     },
  //   })
  //     .then(res=> res.json())
  //     .then(data=> {
  //       setcsvItems(data)
  //       console.log(csvItems)
  //       console.log(data)
  //     })
  // }, []);

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
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
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
                    <th scope="col">
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
                    <th scope="col">
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
                    <th scope="col">
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
                    <th scope="col">
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
                    <th scope="col">
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
                  <tr>
                    <td>
                      <InputGroup>
                        <Input placeholder="username" bsSize="lg" />
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
                        <Input placeholder="username" bsSize="lg" />
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
                        <Input placeholder="username" bsSize="lg" />
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
                        <Input placeholder="username" bsSize="lg" />
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
                        <Input placeholder="username" bsSize="lg" />
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
                        <Input placeholder="username" bsSize="lg" />
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
                          {e.address}
                          {console.log(e.address)}
                        </td>
                        <td>
                          {e.name}
                        </td>
                        <td>
                          {e.point}
                        </td>
                        <td>
                          <TxData props={e.address} id={e.id} />
                        </td>
                        <td>
                          <NftData props={e.address} id={e.id} />
                        </td>
                        <td>
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
                    <Col sm="1">

                      <Input id="perPage" type="select">
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
                    >
                      Page:
                    </Label>
                    <Col sm="1">
                      <Input id="pageNumber" type="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <Col sm="1">
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
