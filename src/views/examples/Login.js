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
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import ReCaptchaV2 from 'react-google-recaptcha'



const Login = () => {

  const REACT_APP_SITE_KEY = "6LcFmBQeAAAAAGR86tDLuxEgQCxEBB2UThOLBblH"

  const errStyle = {
    textAlign: "center",
    marginTop: "10px",

  }

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [CaptchaSuccess, setCaptchaSuccess] = useState(null)
  const history = useHistory()

  function handleChange(token){
    fetch('http://65.108.59.117:7001/api/v1/users/auth/captchVerify/', {
         method: 'POST',
         body: JSON.stringify({ 'captcha_value': token }),
         headers: { 'Content-Type': 'application/json' }
       })
        .then(res => res.json())
        .then(data => {
          console.log(data.captcha.success)
          setCaptchaSuccess(data.captcha.success)
        }) 


  }
  function handleExpire(){
    setCaptchaSuccess(false)
  }



  async function onSubmit(e) {
    e.preventDefault();
    // const captcha = {
    //   secret: "6LcFmBQeAAAAAHsoXFfXbicFHU_uCN2YXb0gMies",
    //   response: capToken
    // }
    // await fetch(`http://127.0.0.1:8000/api/v1/users/auth/captchVerify/` , {
    //   method: 'POST',
    //   headers: {
    //       'Content-Type': 'application/json',
    //   },
    //   body:JSON.stringify({
    //     'g-recaptcha-response': captcha.response
    //   })
    // })
    //   .then(res=>res.json)
    //   .then(data =>{
    //     console.log(data)
    //   })
    
  
    const user = {
      email: userName,
      password: password
    };
    if(CaptchaSuccess === true){
    fetch('http://65.108.59.117:7001/api/v1/users/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      
      .then((response) => {
        if(response.status === 400) {
          document.getElementById('errorrr').innerHTML = "check your username or password!"
        }else if (response.status === 500 ){
          document.getElementById('errorrr').innerHTML = "something went wrong!"
        }
        return response.json()
      })

      .then((result) => {
        if (result.key) {
          sessionStorage.clear();
          sessionStorage.setItem('token', result.key)
          history.push('/admin/walletdata')
        } else {
          console.log(result)
        }
      })
      .catch(error => {
        setUserName('')
        setPassword('')
        console.log(error)
        // Window.sessionStorage.clear()
        document.getElementById('errorrr').innerHTML = '!!!'

      })
    }
    else{
      document.getElementById('errorrr').innerHTML = 'Captcha Error'
    }


  }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in</small>
            </div>
            <Form role="form" onSubmit={onSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    required
                    onClick={e => document.getElementById("errorrr").innerHTML = ""}
                    autoComplete="new-email"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    required
                    onClick={e => document.getElementById("errorrr").innerHTML = ""}
                    onChange={e => setPassword(e.target.value)}
                  />
                </InputGroup>
                <div style={{ marginTop: "10px" }}>
                <ReCaptchaV2
                 sitekey={REACT_APP_SITE_KEY} 
                 onChange={handleChange}
                 onExpired={handleExpire}
                />
                </div>
                <p id="errorrr" style={errStyle}></p>
              </FormGroup>
              {/* <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div> */}
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        {/* <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row> */}
      </Col>
    </>
  );
};

export default Login;
