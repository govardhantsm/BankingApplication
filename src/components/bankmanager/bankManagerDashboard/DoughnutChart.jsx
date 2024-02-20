import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DoughnutChart() {
  return (
    <Doughnut
      data={{
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "revenue",
            data: [200, 300, 400],
            backgroundColor: ["blue", "gray", "orange"],
          },
        ],
      }}
    />
  );
}

export default DoughnutChart;
