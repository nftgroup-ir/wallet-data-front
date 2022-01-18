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
    Tooltip,
    Button,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Spinner,
    Row,
    FormGroup,
} from "reactstrap";
// core components
import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from "react-router-dom";
import "../../../assets/css/CustomCss.css"
import ReactTooltip from 'react-tooltip';






function ImportantBalances(props) {
    const [csvItems, setcsvItems] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const wallet = props.wallet

    
    useEffect(() => {
        async function getData() {
            await fetch(`http://65.108.59.117:7001/api/csv/dashboard/?table=balance&walletAddress=${wallet}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + sessionStorage.getItem('token')
                },
            })
                .then(res => res.json())
                .then(data => {
                    setcsvItems(data)
                    setIsLoading(false)
                    console.log(data)
                })
        }
        getData()
        
    }, [])
    

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
            <Container fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="text-black mb-0">Balances</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="ContractName">
                                            Contract Name
                                        </th>
                                        <th>
                                            Symbol
                                        </th>
                                        <th scope="col" className="ContractAddress">
                                            Contract Address
                                        </th>
                                        <th scope="col" className="Balance">
                                            Balance
                                        </th>
                                    </tr>
                                </thead>
                                {!IsLoading ?
                                <tbody>
                                    {
                                        csvItems.map(e => (
                                            <tr>
                                                <td  className="ContractName">
                                                    {e.contract_name}
                                                </td>
                                                <td>
                                                    {e.contract_ticker_symbol}
                                                </td>
                                                <td className="ContractAddress">
                                                    {e.contract_address}
                                                </td>
                                                <td 
                                                className="Balance" 
                                                data-tip={`balance = ${(e.balance / Math.pow(10, e.contract_decimals)).toLocaleString()}`}
                                                >
                                                    {(e.balance / Math.pow(10, e.contract_decimals)) < 1000 && e.balance? (e.balance / Math.pow(10, e.contract_decimals)).toLocaleString(undefined, {maximumFractionDigits:2}): nFormatter((e.balance / Math.pow(10, e.contract_decimals)) , 1)}
                                                    <ReactTooltip />
                                                </td>
                                            </tr>

                                        ))
                                    }


                                </tbody> : <tbody style={{ textAlign:"center"}}><td></td><td></td><Spinner animation="border" style={{ margin:"10px"}}/></tbody>
                            }
                            </Table>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default ImportantBalances
