import React, { useEffect, useState } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'






// const dataSource = [
//   { id: 1, name: 'John McQueen', age: 35 },
//   { id: 2, name: 'Mary Stones', age: 25 },
//   { id: 3, name: 'Robert Fil', age: 27 },
//   { id: 4, name: 'Roger Robson', age: 81 },
//   { id: 5, name: 'Billary Konwik', age: 18 },
//   { id: 6, name: 'Bob Martin', age: 18 },
//   { id: 7, name: 'Matthew Richardson', age: 54 },
//   { id: 8, name: 'Ritchie Peterson', age: 54 },
//   { id: 9, name: 'Bryan Martin', age: 40 },
//   { id: 10, name: 'Mark Martin', age: 44 },
//   { id: 11, name: 'Michelle Sebastian', age: 24 },
//   { id: 12, name: 'Michelle Sullivan', age: 61 },
//   { id: 13, name: 'Jordan Bike', age: 16 },
//   { id: 14, name: 'Nelson Ford', age: 34 },
//   { id: 15, name: 'Tim Cheap', age: 3 },
//   { id: 16, name: 'Robert Carlson', age: 31 },
//   { id: 17, name: 'Johny Perterson', age: 40 }
// ]
function WinnerList() {
  const [csvItems, setcsvItems] = useState([])

  const columns = [
    { name: 'wallet', header: 'wallet', minWidth: 50, defaultFlex: 2 },
    { name: 'buyToken', header: 'buyToken', minWidth: 50, defaultFlex: 2 },
    { name: 'spendEth', header: 'spendEth', minWidth: 50, defaultFlex: 2 },
    { name: 'sellToken', header: 'sellToken', minWidth: 50, defaultFlex: 2 },
    { name: 'earnETH', header: 'earnETH', minWidth: 50, defaultFlex: 2 },
  ]
  const filterValue = [
    { name: 'wallet', operator: 'contains', type: 'string', value: '' },
    { name: 'buyToken', operator: 'contains', type: 'string', value: '' },
    { name: 'spendEth', operator: 'contains', type: 'string', value: '' },
    { name: 'sellToken', operator: 'contains', type: 'string', value: '' },
    { name: 'earnETH', operator: 'contains', type: 'string', value: '' },
  ]
  
  const gridStyle = { minHeight: 550 }
  

  useEffect(() => {
    async function getData() {
      await fetch('http://65.108.59.117:7001/api/csv/lottery/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + sessionStorage.getItem('token')
        },
      })
        .then(res => res.json())
        .then(data => {
          setcsvItems(data.reverse())
          console.log(data)
        })
    }
    getData()

  }, []);


  const dataSource = csvItems

  return (
    <ReactDataGrid
      idProperty="id"
      columns={columns}
      dataSource={dataSource}
      pagination
      defaultFilterValue={filterValue}
      style={gridStyle}
    />
  )
}

export default WinnerList
