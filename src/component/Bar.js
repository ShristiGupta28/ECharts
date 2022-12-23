import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "./../wineData.json";

function Bar() {
  const [barOption, setBarOption] = useState({}); //States to store the details about the bar chart

  useEffect(() => {
    getDataForBarChart(); //Function will be invoked when the component loads
  }, []);

  const getDataForBarChart = () => {
    let avgMalicAcid = [];
    const unique = [...new Set(WineData.map((item) => item.Alcohol))]; //gets all the unique categories of Alcohol present in the data set
    unique.map((alcoholType) => {
      const alcoholData = WineData.filter((item) => {
        //Filter the records with each category of Alcohol
        return item.Alcohol === alcoholType;
      });
      let sum = 0;
      for (let ele of alcoholData) {
        //Calculates the sum of Malic Acid from the filtered data
        sum = sum + ele.Malic_Acid;
      }
      let avg = sum / alcoholData.length; //Calculates the average of Malic Acid
      return avgMalicAcid.push(Number(avg.toFixed(2)));
    });
    let tempBarOption = {
      //Setup for all the details required for the implementation of Bar Chart from ECharts.
      xAxis: {
        data: unique,
        type: "category",
        name: "Alcohol",
      },
      yAxis: {
        type: "value",
        name: "Malic Acid",
      },
      series: [
        {
          data: avgMalicAcid,
          type: "bar",
        },
      ],
    };
    setBarOption(tempBarOption); //Updating state
  };

  return <ReactEcharts option={barOption} />; //Rendering the Bar Chart
}

export default Bar;
