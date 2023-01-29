// // (18) chart js takes datapoints for each month and displays databars for each month to keep track
// import "./Chart.css";
// import ChartBar from "./ChartBar";
// const Chart = (props) => {
//   return (
//     <div className="chart">
//       {props.dataPoints.map((dataPoint) => (
//   //(19) see ChartBar.js
//         <ChartBar
//           key={dataPoint.label}
//           value={dataPoint.value}
//           label={dataPoint.label}
//           maxValue={null}
//         />
//       ))}
//     </div>
//   );
// };

// export default Chart;

// (25)
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const arrayOfValueInDataPoints = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });

  // not Math.max take list of argument like Math.max(1,2,3) so we need to use spread operator ... to take out each value from array and pass as indiviual argument
  const totalMaximum = Math.max(...arrayOfValueInDataPoints);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};
// (26) got to chartBar.js

export default Chart;
