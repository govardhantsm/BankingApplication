import React from "react";
// import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";

import { Bar } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Debit",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Credit",
        data: [45, 70, 60, 55, 75],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default LineChart;

// function LineChart() {
//   return (
//     <Line
//       data={{
//         labels: [1, 2, 3, 4, 5],
//         datasets: [
//           {
//             label: "revenue",
//             data: [200, 300, 400, 100],
//             backgroundColor: ["blue", "gray", "orange", "skyblue"],
//           },
//         ],
//       }}
//       options={{
//         elements: {
//           line: {
//             tension: 0.5,
//           },
//         },
//         // plugins: {
//         //   title: {
//         //     text: "Revenue",
//         //   },
//         // },
//       }}
//     />
//   );
// }

// export default LineChart;
