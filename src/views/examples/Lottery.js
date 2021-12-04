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
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Container,
  Col,
} from "reactstrap";
import Header from '../../components/Headers/Header'
import { useRef, useState } from "react";


const Lottery = () => {
  const form = useRef()
  const [firstname , setFirstname] = useState("")
  const [lastname , setLastname] = useState("")
  const [email , setEmail] = useState("")
  const [walletaddress , setWalletaddress] = useState("")

  const submitNewWinner = e => {
    e.preventDefault()
    const winner={
      firstname: firstname,
      lastname: lastname,
      email: email,
      walletaddress: walletaddress
    }
    console.log(winner)
    fetch('http://65.108.59.117:7001/api/csv/lottery/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + sessionStorage.getItem('token')
      },
      body: JSON.stringify(winner)
      
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.getElementById('success').innerHTML="saved successfully!"
      })
  }

  return (
    <>
      {/* <UserHeader /> */}
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Your Information</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div ref={form}>
                  <Form onSubmit={submitNewWinner}>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-Firstname"
                            >
                              First Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              name='firstname'
                              id="input-Firstname"
                              required
                              placeholder="First Name"
                              type="text"
                              value={firstname}
                              required
                              onChange={e => setFirstname(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-Lastname"
                            >
                              Last Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              name='lastname'
                              id="input-Lastname"
                              required
                              placeholder="Last Name"
                              type="text"
                              value={lastname}
                              required
                              onChange={e => setLastname(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-Email"
                            >
                              Email
                            </label>
                            <Input
                              className="form-control-alternative"
                              name='email'
                              id="input-Email"
                              required
                              placeholder="Email"
                              type="email"
                              value={email}
                              required
                              onChange={e => setEmail(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
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
                              required
                              placeholder="Wallet Address"
                              type="text"
                              value={walletaddress}
                              required
                              onChange={e => setWalletaddress(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                    </div>
                    <hr className="my-4" />
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <Input

                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="submit"
                              type="submit"
                            />
                            <p id="success" style={{ textAlign: "center" }}></p>
                          </FormGroup>
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

    </>
  );
};

export default Lottery;
