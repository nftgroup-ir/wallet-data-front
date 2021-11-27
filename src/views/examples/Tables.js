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
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
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
      console.log(csvItems)
    }
    setdata(props.props)
  }, [])

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
                <h3 className="mb-0">your data</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">name</th>
                    <th scope="col">address</th>
                    <th scope="col">point</th>
                    <th scope="col">tx</th>
                    <th scope="col">NFT</th>
                    <th scope="col">balance</th>


                  </tr>
                </thead>
                <tbody>
                  {

                    csvItems.map(e => (
                      <tr>
                        <td scope="row">
                          {e.address}
                        </td>
                        <td>'
                          {e.email}
                        </td>
                        <td>
                          {e.point}
                        </td>
                        <td>
                          <TxData props={e.address}  />
                        </td>
                        <td>
                          <NftData props={e.address} />
                        </td>
                        <td>
                          <BalanceData props={e.address} />
                        </td>
                      </tr>

                    ))
                  }


                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
