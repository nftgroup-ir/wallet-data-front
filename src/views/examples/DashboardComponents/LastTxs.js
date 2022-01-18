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
import React, { useState, useEffect, useRef } from 'react'
import "../../../assets/css/CustomCss.css"
import ReactTooltip from 'react-tooltip';






function LastTxs(props) {
    const [csvItems, setcsvItems] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const wallet = props.wallet

    
    useEffect(() => {
        async function getData() {
            await fetch(`http://65.108.59.117:7001/api/csv/dashboard/?table=transaction&walletAddress=${wallet}`, {
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
                    setIsLoading(false)
                })
        }
        getData()
        
    }, [])
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
                                        <h3 className="text-black mb-0">Transactions</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="Hash">
                                            Hash
                                        </th>
                                        <th scope="col" className="From">
                                            From
                                        </th>
                                        <th scope="col" className="To">
                                            To
                                        </th>
                                        <th scope="col" className="Value">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                {!IsLoading ?
                                <tbody>
                                    
                                    {
                                        csvItems.map(e => (
                                            <tr>
                                                <td  className="Hash">
                                                    {e.hash}
                                                </td>
                                                <td className="From">
                                                    {e.from_address}
                                                </td>
                                                <td className="To">
                                                    {e.to_address}
                                                </td>
                                                <td 
                                                className="Value"
                                                data-tip={`Value = ${e.value?e.value.toLocaleString():0}`}
                                                >
                                                    {/* <TxData props={e.address} id={e.id} /> */}
                                                    {e.value < 1000 && e.value? Number(e.value).toLocaleString(undefined, {maximumFractionDigits:4}) : nFormatter(e.value , 1)}
                                                    <ReactTooltip />
                                                </td>
                                            </tr>

                                        ))
                                    }


                                </tbody>: <tbody style={{ textAlign:"center"}}><td></td><Spinner animation="border" style={{ margin:"10px"}}/></tbody>
                            }
                            </Table>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LastTxs
