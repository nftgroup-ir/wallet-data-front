import React, { forwardRef } from 'react'
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
    return (

        <div className="align-items-center">
            <Header />
            <MaterialTable
                style={{ maxWidth: '90%', display: 'block', margin: '-50px auto 0px auto' }}
                title="Basic Export Preview"
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Address', field: 'Address' },
                    { title: 'Point', field: 'Point', type: 'numeric' },
                    // {
                    //     title: 'Birth Place',
                    //     field: 'birthCity',
                    //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                    // },
                    { title: 'Transactions', field: 'Transactions', type: 'numeric' },
                    { title: 'NFT', field: 'NFT', type: 'numeric' },
                    { title: 'Balance', field: 'Balance', type: 'numeric' },
                ]}
                data={[{
                    Address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
                    name: "hani@gmail.com",
                    Point: 2,
                    Transactions: 158,
                    NFT: 0,
                    Balance: 2115743901717
                  },
                 
                  {
                    Address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
                    name: "hani@gmail.com",
                    Point: 2,
                    Transactions: 158,
                    NFT: 0,
                    Balance: 2115743901717                  
                  },
                  {
                    Address: "0x6b829251366c43BB3621BE6eeFC41CdbD514380c",
                    name: "mohammad@gmail.com",
                    Point: 3,
                    Transactions: 0,
                    NFT: 0,
                    Balance: 0
                  },
                  {
                    Address: "0x6b829251366c43BB3621BE6eeFC41CdbD514380c",
                    name: "mohammad@gmail.com",
                    Point: 3,
                    Transactions: 0,
                    NFT: 0,
                    Balance: 0
                  },
                  {
                    Address: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
                    name: "hani@gmail.com",
                    Point: 2,
                    Transactions: 158,
                    NFT: 0,
                    Balance: 2115743901717
                  },
                  {
                    Address: "0x6b829251366c43BB3621BE6eeFC41CdbD514380c",
                    name: "mohammad@gmail.com",
                    Point: 3,
                    Transactions: 0,
                    NFT: 0,
                    Balance: 0
                  },
                  ]}
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
