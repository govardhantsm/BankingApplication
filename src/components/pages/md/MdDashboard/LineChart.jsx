import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";

function LineChart() {
  return (
    <Line
      data={{
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "revenue",
            data: [200, 300, 400, 100],
            backgroundColor: ["blue", "gray", "orange", "skyblue"],
          },
        ],
      }}
      options={{
        elements: {
          line: {
            tension: 0.5,
          },
        },
        // plugins: {
        //   title: {
        //     text: "Revenue",
        //   },
        // },
      }}
    />
  );
}

export default LineChart;
