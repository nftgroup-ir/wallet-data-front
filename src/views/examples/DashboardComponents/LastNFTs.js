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





function LastNFTs(props) {
    const [csvItems, setcsvItems] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const wallet = props.wallet

    useEffect(() => {
        async function getData() {
            await fetch(`http://65.108.59.117:7001/api/csv/dashboard/?table=NFT&walletAddress=${wallet}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Token ' + sessionStorage.getItem('token')
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
                                        <h3 className="text-black mb-0">NFTs</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="Name">
                                            Name

                                        </th>
                                        <th scope="col" className="Symbol">
                                            Symbol

                                        </th>
                                        <th scope="col" className="TokenAddress">
                                            Token Address
                                        </th>
                                        <th scope="col" className="Tags">
                                            Tags
                                        </th>
                                    </tr>
                                </thead>
                                {!IsLoading ?
                                <tbody>
                                    {
                                        csvItems.map(e => (
                                            <tr>
                                                <td className="Name">
                                                    {e.name}
                                                </td>
                                                <td className="Symbol">
                                                    {e.symbol}
                                                </td>
                                                <td className="TokenAddress">
                                                    {e.token_address}
                                                </td>
                                                <td className="Tags">
                                                    {e.nft_feature? e.nft_feature.map(a => (
                                                        `${a.name}, `
                                                    )): ""}
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

export default LastNFTs
