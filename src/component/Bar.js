import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "./../wineData.json";

function Bar() {
  const [barOption, setBarOption] = useState({});

  useEffect(() => {
    getDataForBarChart();
  }, []);

  const getDataForBarChart = () => {
    let avgMalicAcid = [];
    const unique = [...new Set(WineData.map((item) => item.Alcohol))];
    unique.map((alcoholType) => {
      const alcoholData = WineData.filter((item) => {
        return item.Alcohol === alcoholType;
      });
      let sum = 0;
      for (let ele of alcoholData) {
        sum = sum + ele.Malic_Acid;
      }
      let avg = sum / alcoholData.length;
      return avgMalicAcid.push(Number(avg.toFixed(2)));
    });
    let tempBarOption = {
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
    setBarOption(tempBarOption);
  };

  return <ReactEcharts option={barOption} />;
}

export default Bar;
