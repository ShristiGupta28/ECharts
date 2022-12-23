import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "./../wineData.json";

const Scatter = () => {
  const [scatterOption, setScatterOption] = useState({});

  useEffect(() => {
    getDataForScatterChart();
  }, []);

  const getDataForScatterChart = () => {
    const colorIntensityData = [];
    WineData.map((item) => {
      return colorIntensityData.push(
        item.Color_intensity ? item.Color_intensity : 0
      );
    });

    const hueData = [];
    WineData.map((item) => {
      return hueData.push(item.Hue ? item.Hue : 0);
    });

    let tempScatterOption = {
      xAxis: {
        data: colorIntensityData,
        name: "Color Intensity",
      },
      yAxis: {
        type: "value",
        name: "Hue",
      },
      series: [
        {
          data: hueData,
          type: "scatter",
        },
      ],
    };
    setScatterOption(tempScatterOption);
  };

  return <ReactEcharts option={scatterOption} />;
};

export default Scatter;
