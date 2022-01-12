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
  Card,
  CardHeader,
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
  Table,
  Spinner,
  Container,
  Row,
  FormGroup,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import React, { useState, useEffect, useRef } from 'react'


const NFTCo = () => {
  const [csvItems, setcsvItems] = useState([])
  const [nextPageUrl, setnextPage] = useState("")
  const [previousPageUrl, setpreviousPage] = useState("")
  const [allData, setallData] = useState(1)
  const [IsLoading, setIsLoading] = useState(true)
  const Filters = useRef()


  async function setFilters(e) {
    e ? e.preventDefault() : console.log("-")
    setIsLoading(true)
    const nameInput = document.getElementById("nameInput").value
    const urlInput = document.getElementById("urlInput").value
    const tagInput = document.getElementById("tagInput").value
    const tagArray = tagInput.split(" ")
    var s = ""
    for (var i = 0 ; i < tagArray.length ; i++){
      s += "&tagInput="+tagArray[i]
    }
    var filterObject = {
      nameInput: nameInput,
      urlInput: urlInput,
      tagInput: tagInput,
    }
    fetch(`http://65.108.59.117:7001/api/csv/nftcompany/?nameInput=${filterObject.nameInput}&urlInput=${filterObject.urlInput}${s}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setcsvItems(data.results)
        setIsLoading(false)
        setnextPage(data.next)
        setpreviousPage(data.previous)
        setallData(data.count)
      })
    console.log(filterObject)
  }
  // function getSingleWalletData(walletAddress, NFT, TX, balance) {
  //   fetch('http://65.108.59.117:7001/api/csv/data_getter/?wallet=' + walletAddress + '&Tx=' + TX + '&NFT=' + NFT + '&balance=' + balance, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Token ' + sessionStorage.getItem('token')
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       alert(data.result)
  //     })
  // }
  useEffect(() => {
    async function getData() {
      await fetch(`http://65.108.59.117:7001/api/csv/nftcompany/?nameInput=&urlInput=&tagInput=`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
            // 'Authorization': 'Token ' + sessionStorage.getItem('token')
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setcsvItems(data.results)
          setnextPage(data.next)
          setpreviousPage(data.previous)
          setallData(data.count)
          setIsLoading(false)
        })
    }
    getData()
  }, []);

  async function removeFilters(e) {
    e.preventDefault()
    setIsLoading(true)
    await fetch('http://65.108.59.117:7001/api/csv/nftcompany/?nameInput=&urlInput=&tagInput=', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Token ' + sessionStorage.getItem('token')
        },
    })
        .then(res => res.json())
        .then(data => {
            setcsvItems(data.results)
            setIsLoading(false)
            setnextPage(data.next)
            setpreviousPage(data.previous)
            setallData(data.count)
            console.log(data)
        })
}

  const startRangeeeee = 1
  async function previousPage(e) {
    e.preventDefault()
    if (previousPageUrl) {
    setIsLoading(true)
    await fetch(`${previousPageUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + sessionStorage.getItem('token')
      },
    })
      .then(res => res.json())
      .then(data => {
        setcsvItems(data.results)
        setIsLoading(false)
        setnextPage(data.next)
        setpreviousPage(data.previous)
        console.log(data)
      })
    }
  }
  async function nextPage(e) {
    e.preventDefault()
    setIsLoading(true)
    await fetch(`${nextPageUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + sessionStorage.getItem('token')
      },
    })
      .then(res => res.json())
      .then(data => {
        setcsvItems(data.results)
        setIsLoading(false)
        setnextPage(data.next)
        setpreviousPage(data.previous)
        console.log(data)
      })
  }

  function handleColumn(e) {
    console.log(e)
    console.log(document.querySelector('#' + e))
    var x = document.querySelector('#' + e)
    x.classList.toggle('deactive-table-button')
    document.querySelectorAll('.' + e).forEach((d) => {
      d.classList.toggle('deactive-table')
    })
  }

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
                    <h3 className="text-black mb-0">NFT Company</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={e => e.preventDefault()}
                      >
                        Columns
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-arrow" >
                        <DropdownItem
                          href="#pablo"
                          id="Name"
                          className="mmm"
                          onClick={e => handleColumn("Name")}
                        >
                          Name
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          id="URL"
                          className="mmm"
                          onClick={e => handleColumn("URL")}
                        >
                          URL
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          id="Tags"
                          className="mmm"
                          onClick={e => handleColumn("Tags")}
                        >
                          Tags
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => removeFilters(e)}
                      size="sm"
                    >
                      Remove filters
                    </Button>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={setFilters}
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
                  </Col>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="Name">
                      Name
                    </th>
                    <th scope="col" className="URL">
                      URL
                    </th>
                    <th scope="col" className="Tags">
                      Tags
                    </th>
                  </tr>
                </thead>
                {!IsLoading ?
                <tbody>
                  <tr ref={Filters}>
                    <td className="Name">
                      <InputGroup>
                        <Input bsSize="sm" id="nameInput" />
                      </InputGroup>
                    </td>
                    <td className="URL">
                      <InputGroup>
                        <Input bsSize="sm" id="urlInput" />
                      </InputGroup>
                    </td>
                    <td className="Tags">
                      <InputGroup>
                        <Input bsSize="sm" id="tagInput" />
                      </InputGroup>
                    </td>
                  </tr>
                  {
                    csvItems.map(e => (
                      <tr>
                        <td className="Name">
                          {e.name}
                        </td>
                        {/* <td className="Email"> 
                          {e.name}
                        </td>
                        <td className="Point">
                          {e.point}
                        </td> */}
                        <td className="URL">
                          <a href={e.site_url}>{e.site_url}</a>
                        </td>
                        <td className="Tags">
                          {e.features.map(a =>(
                            `${a.name} , `
                          ))}
                        </td>
                      </tr>

                    ))
                  }


                </tbody> : <tbody style={{ textAlign:"center"}}><td></td><Spinner animation="border" style={{ margin:"10px"}}/></tbody>
              }
              </Table>
              <CardFooter>
                <Row>

                  <FormGroup row>
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink
                          aria-label="Previous"
                          href="#pablo"
                          onClick={e => previousPage(e)}
                        >
                          <i className="fa fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          aria-label="Next"
                          href="#pablo"
                          onClick={e => nextPage(e)}
                        >
                          <i className="fa fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </FormGroup>
                  <Col sm="1" >
                    <p>{`${startRangeeeee} - ${allData}`}</p>
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

export default NFTCo;
