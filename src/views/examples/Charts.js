import Header from "components/Headers/Header.js";
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
import React, { useState, useEffect, useRef } from 'react'
import * as V from 'victory';
import { VictoryLine, VictoryChart, VictoryLabel } from 'victory';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


function Charts() {
    const [dataTx, setdataTx] = useState([
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 7 },
        { x: 4, y: 5 },
        { x: 5, y: 6 },
    ])
    return (
        <div>
            <Header />
            <Row>
                <Col xs="6">
                    {/* <VictoryChart>
                        <VictoryLine
                            style={{
                                data: { stroke: "#c43a31" },
                                parent: { border: "1px solid #ccc" }
                            }}
                            domain={{ x: [0, 10], y: [0, 10] }}
                            data={dataTx}
                            labels={({ datum }) => datum.y}
                            labelComponent={<VictoryLabel renderInPortal dy={-20} />}
                        />
                    </VictoryChart> */}
                    <LineChart width={600} height={300} data={dataTx} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="y" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="x" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </Col>
                <Col xs="4">
                    <UncontrolledDropdown>
                        <DropdownToggle
                            className="text-white"
                            href="#pablo"
                            role="button"
                            size="md"
                            color="primary"
                            onClick={e => e.preventDefault()}
                        >
                            data
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" left>
                            <DropdownItem
                                href="#pablo"
                                id="Address"
                                className="mmm"
                                onClick={(e) => e.preventDefault()}
                            >
                                Daily
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                id="Transactions"
                                className="mmm"
                                onClick={(e) => e.preventDefault()}
                            >
                                Monthly
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                id="NFT"
                                className="mmm"
                                onClick={(e) => e.preventDefault()}
                            >
                                Yearly
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
            </Row>
            <Row>
                <Col xs="8">
                    
                </Col>
            </Row>
        </div>
    )
}

export default Charts
