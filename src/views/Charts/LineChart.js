import React, { useState , useEffect } from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";


function LineChart() {
  const [txData, settxData] = useState([
    { date: 1640995200 , total: 23453534 },
    { date: 1641081600 , total: 53454353 },
    { date: 1641168000 , total: 83454351 },
    { date: 1641254400 , total: 13234355 },
    { date: 1641340800 , total: 16765783 },
    { date: 1641427200 , total: 18346534 },
    { date: 1641513600 , total: 19346634 },
    { date: 1641600000 , total: 22346356 },
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
    //         console.log(data)
    //         settxData(data.result)
    //       })
    //   }

    //   getData()
    // }, [])


    useEffect(() => {
      if(txData!=null){
        am5.ready(function() {

            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            var root = am5.Root.new("Linechartdiv");
            
            
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
            
            
            // Generate random data
            var date = new Date();
            date.setHours(0, 0, 0, 0);
            var value = 100;
            
            function generateData() {
              value = Math.round((Math.random() * 10 - 5) + value);
              am5.time.add(date, "day", 1);
              return {
                date: date.getTime(),
                value: value
              };
            }
            
            function generateDatas(count) {
              var data = [];
              for (var i = 0; i < count; ++i) {
                data.push(generateData());
              }
              return data;
            }
            
            
            // Create axes
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
              maxDeviation: 0.2,
              baseInterval: {
                timeUnit: "day",
                count: 1
              },
              renderer: am5xy.AxisRendererX.new(root, {}),
              tooltip: am5.Tooltip.new(root, {})
            }));
            
            var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
              renderer: am5xy.AxisRendererY.new(root, {})
            }));
            
            
            // Add series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            var series = chart.series.push(am5xy.LineSeries.new(root, {
              name: "Series",
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: "value",
              valueXField: "date",
              tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
              })
            }));
            
            
            // Add scrollbar
            // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
            chart.set("scrollbarX", am5.Scrollbar.new(root, {
              orientation: "horizontal"
            }));
            
            
            // Set data
            var data = generateDatas(1200);
            console.log(data)
            console.log(typeof(txData[1].date))
            console.log(txData)
            series.data.setAll(data);
            // xAxis.data.setAll(txData);
            
            
            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            series.appear(1000);
            chart.appear(1000, 100);
            
        });
      }
    }, [txData])

    return (
        <div>
            <div id="Linechartdiv" style={{ width: "100%", height: "500px" }}></div>
        </div>
    )
}

export default LineChart
