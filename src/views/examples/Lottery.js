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

  const submitNewWinner = e => {
    e.preventDefault()
    console.log(form.current.querySelectorAll('input'))
    const newPet = new FormData(form.current.Input)
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
                              name='Name'
                              id="input-Firstname"
                              required
                              placeholder="First Name"
                              type="text"
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
                              name='Name'
                              id="input-Lastname"
                              required
                              placeholder="Last Name"
                              type="text"
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
                              name='Name'
                              id="input-Email"
                              required
                              placeholder="Email"
                              type="email"
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
                              name='Name'
                              id="input-WalletAddress"
                              required
                              placeholder="Wallet Address"
                              type="text"
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
