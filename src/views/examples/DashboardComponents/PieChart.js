import React, { useEffect, useState } from 'react'
import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent"


function PieChart(props) {
  const wallet = props.wallet
  // var data
  // async function hosein() {
  //   await fetch(`http://65.108.59.117:7001/api/csv/chart/?address=0x00000000219ab540356cbb839cbe05303d7705fa&Type=Balance`, {
  //     method: 'GET',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  // })
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log('onee: ',data.result)
  //         return([{
  //               category: "Dummy",
  //               value: 1000,
  //               settings: {
  //                 fill: am5.color(0xdadada),
  //                 stroke: am5.color(0xdadada),
  //                 fillOpacity: 0.3,
  //                 strokeDasharray: [4, 4],
  //                 tooltipText: null,
  //                 draggable: false
  //               },
  //               dummyLabelSettings: {
  //                 forceHidden: true
  //               }
  //             },
  //             {
  //               category: "ETH",
  //               value: 501.9
  //             },
  //             ...[data.result]
            
  //         ])
            
  //     })
  // }
    // useEffect(() => {
    //    data = hosein()
    //    setTimeout(() => {
    //     console.log('data1:',data)
    //    }, 4000);
    // }, [])
    // useEffect(() => {
      
      setTimeout(() => {


        am5.ready(function() {
            
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            var root = am5.Root.new("Piechartdiv");
            
            // Create custom theme
            // https://www.amcharts.com/docs/v5/concepts/themes/#Quick_custom_theme
            var myTheme = am5.Theme.new(root);
            myTheme.rule("Label").set("fontSize", "0.8em");
            
            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            // root.setThemes([
            //   am5themes_Animated.new(root),
            //   myTheme
            // ]);
            
            // Create wrapper container
            var container = root.container.children.push(am5.Container.new(root, {
              width: am5.p100,
              height: am5.p100,
              layout: root.horizontalLayout
            }));
            
            // Create first chart
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
            var chart0 = container.children.push(am5percent.PieChart.new(root, {
              innerRadius: am5.p50,
              tooltip: am5.Tooltip.new(root, {})
            }));
            
            // Create series
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
            var series0 = chart0.series.push(am5percent.PieSeries.new(root, {
              valueField: "value",
              categoryField: "category",
              alignLabels: false
            }));
            
            series0.labels.template.setAll({
              textType: "circular",
              templateField: "dummyLabelSettings"
            });
            
            series0.ticks.template.set("forceHidden", true);
            
            var sliceTemplate0 = series0.slices.template;
            sliceTemplate0.setAll({
              draggable: true,
              templateField: "settings",
              cornerRadius: 5
            });
            
            // Separator line
            container.children.push(am5.Line.new(root, {
              layer: 1,
              height: am5.percent(60),
              y: am5.p50,
              centerY: am5.p50,
              strokeDasharray: [4, 4],
              stroke: root.interfaceColors.get("alternativeBackground"),
              strokeOpacity: 0.5
            }));
            
            // Label
            container.children.push(am5.Label.new(root, {
              layer: 1,
              text: "Drag slices over the line",
              y: am5.p50,
              textAlign: "center",
              rotation: -90,
              isMeasured: false
            }));
            
            // Create second chart
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
            var chart1 = container.children.push(am5percent.PieChart.new(root, {
              innerRadius: am5.p50,
              tooltip: am5.Tooltip.new(root, {})
            }));
            
            // Create series
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
            var series1 = chart1.series.push(am5percent.PieSeries.new(root, {
              valueField: "value",
              categoryField: "category",
              alignLabels: false
            }));
            
            series1.labels.template.setAll({
              textType: "circular",
              radius: 20,
              templateField: "dummyLabelSettings"
            });
            
            series1.ticks.template.set("forceHidden", true);
            
            var sliceTemplate1 = series1.slices.template;
            sliceTemplate1.setAll({
              draggable: true,
              templateField: "settings",
              cornerRadius: 5
            });
            
            var previousDownSlice;
            
            // change layers when down
            sliceTemplate0.events.on("pointerdown", function (e) {
              if (previousDownSlice) {
                //  previousDownSlice.set("layer", 0);
              }
              e.target.set("layer", 1);
              previousDownSlice = e.target;
            });
            
            sliceTemplate1.events.on("pointerdown", function (e) {
              if (previousDownSlice) {
                // previousDownSlice.set("layer", 0);
              }
              e.target.set("layer", 1);
              previousDownSlice = e.target;
            });
            
            // when released, do all the magic
            sliceTemplate0.events.on("pointerup", function (e) {
              series0.hideTooltip();
              series1.hideTooltip();
            
              var slice = e.target;
              if (slice.x() > container.width() / 4) {
                var index = series0.slices.indexOf(slice);
                slice.dataItem.hide();
            
                var series1DataItem = series1.dataItems[index];
                series1DataItem.show();
                series1DataItem.get("slice").setAll({ x: 0, y: 0 });
            
                handleDummy(series0);
                handleDummy(series1);
              } else {
                slice.animate({
                  key: "x",
                  to: 0,
                  duration: 500,
                  easing: am5.ease.out(am5.ease.cubic)
                });
                slice.animate({
                  key: "y",
                  to: 0,
                  duration: 500,
                  easing: am5.ease.out(am5.ease.cubic)
                });
              }
            });
            
            sliceTemplate1.events.on("pointerup", function (e) {
              var slice = e.target;
            
              series0.hideTooltip();
              series1.hideTooltip();
            
              if (slice.x() < container.width() / 4) {
                var index = series1.slices.indexOf(slice);
                slice.dataItem.hide();
            
                var series0DataItem = series0.dataItems[index];
                series0DataItem.show();
                series0DataItem.get("slice").setAll({ x: 0, y: 0 });
            
                handleDummy(series0);
                handleDummy(series1);
              } else {
                slice.animate({
                  key: "x",
                  to: 0,
                  duration: 500,
                  easing: am5.ease.out(am5.ease.cubic)
                });
                slice.animate({
                  key: "y",
                  to: 0,
                  duration: 500,
                  easing: am5.ease.out(am5.ease.cubic)
                });
              }
            });
            
            // data
            let data = [
              {
                category: "Dummy",
                value: 100 ,
                settings: {
                  fill: am5.color(0xdadada),
                  stroke: am5.color(0xdadada),
                  fillOpacity: 0.3,
                  strokeDasharray: [4, 4],
                  tooltipText: null,
                  draggable: false
                },
                dummyLabelSettings: {
                  forceHidden: true
                }
              },
            ];
            series0.data.setAll(data);
            series1.data.setAll(data);
            
            am5.net.load(`http://65.108.59.117:7001/api/csv/chart/?address=${wallet}&Type=Balance`).then(function(result) {
              // This gets executed when data finishes loading
              // ... do something
              var x = JSON.parse(result.xhr.response).result
              console.log(x)
              series0.data.pushAll(x);
              series1.data.pushAll(x);
              console.log(series0.data)
              console.log(series1.data)
              
            }).catch(function(result) {
              // This gets executed if there was an error loading URL
              // ... handle error
              console.log("Error loading " + result.xhr.responseURL);
            });
            // series0.data.unshift({
            //   category: "Dummy",
            //   value: 100,
            //   settings: {
            //     fill: am5.color(0xdadada),
            //     stroke: am5.color(0xdadada),
            //     fillOpacity: 0.3,
            //     strokeDasharray: [4, 4],
            //     tooltipText: null,
            //     draggable: false
            //   },
            //   dummyLabelSettings: {
            //     forceHidden: true
            //   }
            // },);
            // series1.data.unshift({
            //   category: "Dummy",
            //   value: 100,
            //   settings: {
            //     fill: am5.color(0xdadada),
            //     stroke: am5.color(0xdadada),
            //     fillOpacity: 0.3,
            //     strokeDasharray: [4, 4],
            //     tooltipText: null,
            //     draggable: false
            //   },
            //   dummyLabelSettings: {
            //     forceHidden: true
            //   }
            // },);

            // show/hide dummy slice depending if there are other visible slices
            function handleDummy(series) {
              // count visible data items
              var visibleCount = 0;
              am5.array.each(series.dataItems, function (dataItem) {
                if (!dataItem.isHidden()) {
                  visibleCount++;
                }
              });
              // if all hidden, show dummy
              if (visibleCount === 0) {
                series.dataItems[0].show();
              } else {
                series.dataItems[0].hide();
              }
            }
            // set data
            
            
            // hide all except dummy
            am5.array.each(series1.dataItems, function (dataItem) {
              if (dataItem.get("category") !== "Dummy") {
                dataItem.hide(0);
              }
            });
            
            // hide dummy
            series0.dataItems[0].hide(0);
            
            // reveal container
            container.appear(1000, 100);
            
            });}, 2000);
    // }, [])

    return (
        <>
            <div id="Piechartdiv" style={{ width: "100%", height: "500px" }}></div>
        </>
    )
}

export default PieChart
