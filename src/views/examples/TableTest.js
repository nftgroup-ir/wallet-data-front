import React, { forwardRef, useEffect, useState } from 'react'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from 'material-table'
import Header from 'components/Headers/Header';


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function TableTest() {

  const [csvItems, setcsvItems] = useState([])

  useEffect(() => {
    async function getData() {
      await fetch('http://65.108.59.117:7001/api/csv/', {
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
  console.log(csvItems)
  const dataTaken = csvItems
  console.log(dataTaken)

  return (

    <div className="align-items-center">
      <Header />
      <MaterialTable
        style={{ maxWidth: '90%', display: 'block', margin: '-50px auto 0px auto' }}
        title="Basic Export Preview"
        columns={[
          { title: 'Name', field: 'address' },
          { title: 'Address', field: 'email' },
          { title: 'Point', field: 'points' },
          { title: 'Transactions', field: 'transactions', type: 'numeric' },
          { title: 'NFT', field: 'NFT', type: 'numeric' },
          { title: 'Balance', field: 'balancedata[0].balance', type: 'numeric' },
        ]}
        // data={[{
        //   address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
        //   email: "hani@gmail.com",
        //   points: 2,
        //   transactions: 158,
        //   NFT: 0,
        //   balance: 2115743901717
        //   },

        //   ]}
        data={query =>
          new Promise((resolve, reject) => {
            resolve({
              data: dataTaken,
              page: 10,
              totalCount: 646,
            })
          })
        }
        options={{
          exportButton: true,
          filtering: true,
          search: true
        }}

        icons={tableIcons}

      />
    </div>
  )
}

export default TableTest
