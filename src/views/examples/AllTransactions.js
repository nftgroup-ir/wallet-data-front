import React, { forwardRef, useEffect, useState, useCallback } from 'react'
// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';
// import MaterialTable from 'material-table'
import Header from 'components/Headers/Header';
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'



// const tableIcons = {
//   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//   DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// };


function AllTransactions() {
    const [allTransactions, setAllTransactions] = useState([])
    const columns = [
        { name: 'hash', header: 'Hash', minWidth: 50, defaultFlex: 5 },
        { name: 'nonce', header: 'Nonce', minWidth: 50, defaultFlex: 5, type: 'number' },
        { name: 'transaction_index', header: 'Transaction index', minWidth: 50, defaultFlex: 5, type: 'number' },
        { name: 'from_address', header: 'From', minWidth: 50, defaultFlex: 5 },
        { name: 'to_address', header: 'To', minWidth: 50, defaultFlex: 5 },
        { name: 'value', header: 'Value', minWidth: 50, defaultFlex: 5, type: 'number' },
        { name: 'gas', header: 'Gas', minWidth: 50, defaultFlex: 5, type: 'number' },
        { name: 'gas_price', header: 'Gas price', minWidth: 50, defaultFlex: 5, type: 'number' },
        { name: 'input', header: 'Input', minWidth: 50, defaultFlex: 5 },
        { name: 'receipt_cumulative_gas_used', header: 'Receipt cumulative gas used', minWidth: 50, defaultFlex: 5, type: 'number' },
        { name: 'receipt_gas_used', header: 'Receipt gas used', minWidth: 50, defaultFlex: 5, type: 'number' },
        { name: 'receipt_contract_address', header: 'Receipt contract address', minWidth: 50, defaultFlex: 5 },
        { name: 'receipt_root', header: 'Receipt root', minWidth: 50, defaultFlex: 5 },
        { name: 'receipt_status', header: 'Receipt status', minWidth: 50, defaultFlex: 5, type: 'number' },
        { name: 'block_timestamp', header: 'Block timestamp', minWidth: 50, defaultFlex: 5 },
        { name: 'block_number', header: 'Block number', minWidth: 50, defaultFlex: 5, type: 'number' },
        { name: 'block_hash', header: 'Block hash', minWidth: 50, defaultFlex: 5 },
    ]
    const defaultFilterValue = [
        { name: 'hash', operator: 'contains', type: 'string', value: '' },
        { name: 'nonce', operator: 'gte', type: 'number', value: '' },
        { name: 'transaction_index', operator: 'gte', type: 'number', value: '' },
        { name: 'from_address', operator: 'contains', type: 'string', value: '' },
        { name: 'to_address', operator: 'contains', type: 'string', value: '' },
        { name: 'value', operator: 'gte', type: 'number', value: '' },
        { name: 'gas', operator: 'gte', type: 'number', value: '' },
        { name: 'gas_price', operator: 'gte', type: 'number', value: '' },
        { name: 'input', operator: 'contains', type: 'string', value: '' },
        { name: 'receipt_cumulative_gas_used', operator: 'gte', type: 'number', value: '' },
        { name: 'receipt_gas_used', operator: 'gte', type: 'number', value: '' },
        { name: 'receipt_contract_address', operator: 'contains', type: 'string', value: '' },
        { name: 'receipt_root', operator: 'contains', type: 'string', value: '' },
        { name: 'receipt_status', operator: 'gte', type: 'number', value: '' },
        { name: 'block_timestamp', operator: 'contains', type: 'string', value: '' },
        { name: 'block_number', operator: 'gte', type: 'number', value: '' },
        { name: 'block_hash', operator: 'contains', type: 'string', value: '' },
    ]

    // function getData({ skip, limit, sortInfo, groupBy, filterValue }) {
    //   return fetch('http://65.108.59.117:7001/api/csv/' + '?skip='+skip+'&limit='+limit+(groupBy && groupBy.length?'&groupBy='+groupBy:'')+'&sortInfo='+JSON.stringify(sortInfo) + '&filterBy='+JSON.stringify(filterValue), {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Token ' + sessionStorage.getItem('token')
    //     },
    //   })
    //     .then(res => {return res.json()})
    // }





    const gridStyle = { minHeight: 550 }
    //  useCallback(getData, [])


    useEffect(() => {
        async function getData() {
            await fetch('http://65.108.59.117:7001/api/csv/transaction/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + sessionStorage.getItem('token')
                },
            })
                .then(res => res.json())
                .then(data => {
                    setAllTransactions(data)
                    console.log(data)
                })
        }
        getData()

    }, []);

    const dataSource = allTransactions
    console.log(dataSource)



    return (

        <div className="align-items-center">
            <Header />
            {/* <MaterialTable
        style={{ maxWidth: '90%', display: 'block', margin: '-50px auto 0px auto' }}
        title="Basic Export Preview"
        columns={[
          { title: 'Name', field: 'address' },
          { title: 'Address', field: 'email' },
          { title: 'Point', field: 'points' },
          { title: 'Transactions', field: 'transaction.length', type: 'numeric' },
          { title: 'NFT', field: 'nft.length', type: 'numeric' },
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

      /> */}
            <ReactDataGrid
                idProperty="id"
                columns={columns}
                dataSource={dataSource}
                pagination
                defaultFilterValue={defaultFilterValue}
                style={gridStyle}
            />
        </div>
    )
}

export default AllTransactions
