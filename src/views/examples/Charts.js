import Header from "components/Headers/Header.js";
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Col,
    Row,
} from "reactstrap";
import React, { useState , useEffect } from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import BarChart from "../Charts/BarChart"
import LineChart from "../Charts/LineChart";
import PieChart from "views/Charts/PieChart";

function Charts() {
    const [balanceData, setbalanceData] = useState([])
    

    return (
        <div>
            <Header />
            <div>
                <BarChart />
            </div>
            <br />
            <br />
            <div>
                <LineChart />
            </div>
            <br />
            <br />
            <div>
                <PieChart />    
            </div>
        </div>
    )
}

export default Charts
