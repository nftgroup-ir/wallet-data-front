import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Button,
    Row,
    Container,
    Col,
    Spinner,
    InputGroup,
  } from "reactstrap";
  import Header from '../../components/Headers/Header'
  import React, { useRef, useState } from "react";  
  import ReactDataGrid from '@inovua/reactdatagrid-community'
  import '@inovua/reactdatagrid-community/index.css'



  function TransactionTracker() {
    const [ReceivedData, setReceivedData] = useState([])
    //Form
    const [inputList, setInputList] = useState([{ Wallet: "" }]);
    const form = useRef()
    const [SmartContract , setSmartContract] = useState("")
    const [FromDate , setFromDate] = useState("")
    const [ToDate , setToDate] = useState("")
    const [IsLoading, setIsLoading] = useState(false)
    // const [walletaddress , setWalletaddress] = useState("")
    //http://65.108.59.117:7001/api/csv/get_tokentxreport/?wallet=0xEa750A05d48bcfF03936B67724F16497Bf5BE0b8&wallet=0x6d16749cEfb3892A101631279A8fe7369A281D0E&sc=0x2a3956fdced9a0f9ace46426e5cfaa0f1939247d&from=2010-01-01&to=2022-01-01&wallet=0xaE9Cb34600BC442aAB09dce7222A8bD74CeF1cEC
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    const handleAddClick = () => {
        setInputList([...inputList, { Wallet: "" }]);
    };

    const submitForm = e => {
        e.preventDefault()
        setIsLoading(true)
        var query = "?sc="+SmartContract+"&from="+FromDate+"&to="+ToDate
        inputList.map(item =>{
            query += "&wallet=" + item.Wallet 
        })
        fetch(`http://65.108.59.117:7001/api/csv/get_tokentxreport/${query}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Token ' + sessionStorage.getItem('token')
          },
        })
          .then(res => res.json())
          .then(data => {
            setReceivedData(data.data)
            document.getElementById('success').innerHTML="Data Logged!"
            setIsLoading(false)
          })
    }
    //Table
    const columns = [
        { name: 'wallet', header: 'wallet', minWidth: 50, defaultFlex: 2 },
        { name: 'buy token', header: 'buy Token', minWidth: 50, defaultFlex: 2 },
        { name: 'spend eth', header: 'spend Eth', minWidth: 50, defaultFlex: 2 },
        { name: 'sell token', header: 'sell Token', minWidth: 50, defaultFlex: 2 },
        { name: 'earnETH', header: 'earn ETH', minWidth: 50, defaultFlex: 2 },
      ]
    const filterValue = [
      { name: 'wallet', operator: 'contains', type: 'string', value: '' },
      { name: 'buy token', operator: 'contains', type: 'string', value: '' },
      { name: 'spend eth', operator: 'contains', type: 'string', value: '' },
      { name: 'sell token', operator: 'contains', type: 'string', value: '' },
      { name: 'earnETH', operator: 'contains', type: 'string', value: '' },
    ]
    const gridStyle = { minHeight: 550 , margin:10 }
    
    
    return (
        <>
          <Header />
          <Container className="mt--7 align-items-center" fluid>
              <Row>
                <Col className="order-xl-1" xl="6">
                  <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="mb-0">Track Wallet</h3>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <div ref={form}>
                        <Form onSubmit={submitForm}>
                          <div className="pl-lg-4">
                            <Row>
                              <Col lg="12">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-SmartContract"
                                  >
                                    Smart Contract
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name='SmartContract'
                                    id="input-SmartContract"
                                    placeholder="Smart Contract"
                                    type="text"
                                    value={SmartContract}
                                    required
                                    onChange={e => setSmartContract(e.target.value)}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-FromDate"
                                  >
                                    From Date
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name='FromDate'
                                    id="input-FromDate"
                                    placeholder="From Date"
                                    type="date"
                                    value={FromDate}
                                    required
                                    onChange={e => setFromDate(e.target.value)}
                                  />
                                </FormGroup>
                              </Col>
                              {/* <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-WalletAddress"
                                  >
                                    Wallet Address
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name='walletaddress'
                                    id="input-WalletAddress"
                                    placeholder="Wallet Address"
                                    type="text"
                                    value={walletaddress}
                                    required
                                    onChange={e => setWalletaddress(e.target.value)}
                                  />
                                </FormGroup>
                              </Col> */}
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-ToDate"
                                  >
                                    To Date
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name='ToDate'
                                    id="input-ToDate"
                                    placeholder="To Date"
                                    type="date"
                                    value={ToDate}
                                    required
                                    onChange={e => setToDate(e.target.value)}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                              {inputList.map((x, i) => {
                                  return (
                                      <FormGroup>
                                          <label
                                            className="form-control-label"
                                            htmlFor="Wallet"
                                          >
                                            Wallet
                                          </label>
                                          <InputGroup className="input-group-alternative mb-2">
                                              <Input
                                                name="Wallet"
                                                id="Wallet"
                                                placeholder="Wallet Address"
                                                value={x.Wallet}
                                                onChange={e => handleInputChange(e, i)}
                                              />
                                              {inputList.length !== 1 && 
                                              <Button
                                                  color="danger"
                                                  href="#pablo"
                                                  onClick={() => handleRemoveClick(i)}
                                                  size="sm"
                                              >
                                              Remove
                                              </Button>
                                              }
                                                  {inputList.length - 1 === i && <Button
                                                  color="success"
                                                  href="#pablo"
                                                  onClick={handleAddClick}
                                                  size="sm"
                                              >
                                              Add
                                              </Button>}
                                          </InputGroup>
                                      </FormGroup>
                                  );
                              })}
                              </Col>
                              {/* <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-WalletAddress"
                                  >
                                    Wallet Address
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name='walletaddress'
                                    id="input-WalletAddress"
                                    placeholder="Wallet Address"
                                    type="text"
                                    value={walletaddress}
                                    required
                                    onChange={e => setWalletaddress(e.target.value)}
                                  />
                                </FormGroup>
                              </Col> */}
                            </Row>
                          </div>
                          <hr className="my-4" />
                          <div className="pl-lg-4">
                            <Row>
                              <Col lg="12">
                                <FormGroup>
                                  <Input
                                    className="form-control-alternative"
                                    placeholder="submit"
                                    type="submit"
                                  />
                                  <p id="success" style={{ textAlign: "center" }}></p>
                                </FormGroup>
                                {IsLoading ? <div style={{ textAlign: "center" }}><Spinner animation="border" style={{ margin:"10px"}}/> </div>: null}
                              </Col>
                            </Row>
                          </div>
                        </Form>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
          </Container>
          <ReactDataGrid
            idProperty="id"
            columns={columns}
            dataSource={ReceivedData}
            pagination
            defaultFilterValue={filterValue}
            style={gridStyle}
          />
        </>
    )
  }
  
export default TransactionTracker
  