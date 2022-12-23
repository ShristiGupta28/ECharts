import React from "react";
import Scatter from "./component/Scatter";
import Bar from "./component/Bar";

function App() {
  // useEffect(() => {
  //   // getDataForScatterChart();
  //   getDataForBarChart();
  // }, []);

  // const getDataForScatterChart = () => {
  //   const colorIntensityData = [];
  //   WineData.map((item) => {
  //     return colorIntensityData.push(
  //       item.Color_intensity ? item.Color_intensity : 0
  //     );
  //   });

  //   const hueData = [];
  //   WineData.map((item) => {
  //     return hueData.push(item.Hue ? item.Hue : 0);
  //   });

  //   let tempScatterOption = {
  //     xAxis: {
  //       data: colorIntensityData,
  //       name: "Color Intensity",
  //     },
  //     yAxis: {
  //       type: "value",
  //       name: "Hue",
  //     },
  //     series: [
  //       {
  //         data: hueData,
  //         type: "scatter",
  //       },
  //     ],
  //   };
  //   setScatterOption(tempScatterOption);
  // };

  // const getDataForBarChart = () => {
  //   let avgMalicAcid = [];
  //   const unique = [...new Set(WineData.map((item) => item.Alcohol))];
  //   unique.map((alcoholType) => {
  //     const alcoholData = WineData.filter((item) => {
  //       return item.Alcohol === alcoholType;
  //     });
  //     let sum = 0;
  //     for (let ele of alcoholData) {
  //       sum = sum + ele.Malic_Acid;
  //     }
  //     let avg = sum / alcoholData.length;
  //     return avgMalicAcid.push(Number(avg.toFixed(2)));
  //   });
  //   let tempBarOption = {
  //     xAxis: {
  //       data: unique,
  //       type: "category",
  //       name: "Alcohol",
  //     },
  //     yAxis: {
  //       type: "value",
  //       name: "Malic Acid",
  //     },
  //     series: [
  //       {
  //         data: avgMalicAcid,
  //         type: "bar",
  //       },
  //     ],
  //   };
  //   setBarOption(tempBarOption);
  // };

  return (
    <>
      <Scatter />
      <Bar />
    </>
  );
}
export default App;
