import React, { useState , useEffect } from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";


function BarChart() {
    const [balanceData, setbalanceData] = useState([
        { token: "ETH" , balance: 23453534 },
        { token: "BTC" , balance: 53454353 },
        { token: "SXP" , balance: 83454351  },
        { token: "SLP" , balance: 13234355},
        { token: "BNB" , balance: 16765783},
        { token: "THT" , balance: 18346534 },
        { token: "BSC" , balance: 19346634},
        { token: "SAND", balance: 22346356 },
      ])
    
    // useEffect(() => {
    //   async function getData(){
    //     await fetch('http://65.108.59.117:7001/api/csv/chart/?address=0xFbDe24Ac8A2051d874a70CB18344dda8F2b54E33&Type=Transaction&fromdate=2016-01-01&todate=2016-01-03&TimeBase=day' , {
    //       method: 'GET',
    //       headers: {
    //           'Content-Type': 'application/json',
    //       },
    //     })
    //       .then(res => res.json())
    //       .then (data => {
    //         setbalanceData(data.result)
    //       })
    //   }

    //   getData()
    // }, [])

    

    useEffect(() => {
      if (balanceData!= null){
        am5.ready(function() {

            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
            // root.setThemes([
            //   am5themes_Animated.new(root)
            // ]);
            
            
            // Create chart
            // https://www.amcharts.com/docs/v5/charts/xy-chart/
            var chart = root.container.children.push(am5xy.XYChart.new(root, {
              panX: false,
              panY: false,
              wheelX: "panX",
              wheelY: "zoomX"
            }));
            
            // Add cursor
            // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
            var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                behavior: "zoomX"
              }));
            cursor.lineY.set("visible", false);
            
            
            // Create axes
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
            xRenderer.labels.template.setAll({
              rotation: -90,
              centerY: am5.p50,
              centerX: am5.p100,
              paddingRight: 15
            });
            
            var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
              maxDeviation: 0.3,
              categoryField: "token",
              renderer: xRenderer,
              tooltip: am5.Tooltip.new(root, {})
            }));
            
            var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
              maxDeviation: 0.3,
              renderer: am5xy.AxisRendererY.new(root, {})
            }));
            
            
            // Create series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            var series = chart.series.push(am5xy.ColumnSeries.new(root, {
              name: "Series 1",
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: "balance",
              sequencedInterpolation: true,
              categoryXField: "token",
              tooltip: am5.Tooltip.new(root, {
                labelText:"{valueY}"
              })
            }));
            
            series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
            series.columns.template.adapters.add("fill", (fill, target) => {
              return chart.get("colors").getIndex(series.columns.indexOf(target));
            });
            
            series.columns.template.adapters.add("stroke", (stroke, target) => {
              return chart.get("colors").getIndex(series.columns.indexOf(target));
            });
            
            
            // Set data

            chart.set("scrollbarX", am5.Scrollbar.new(root, {
                orientation: "horizontal"
            }));
            console.log(typeof(balanceData[0].balance))
            xAxis.data.setAll(balanceData);
            series.data.setAll(balanceData);
            
            
            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            series.appear(1000);
            chart.appear(1000, 100);
            
        })
      }
}, [balanceData])

    

    return (
        <div>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        </div>
    )
}

export default BarChart
