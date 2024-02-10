import React from "react";
import { Pie} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart() {
  return <Pie data={{
    labels:[1,2,3,4,5],
    datasets:[
        {label:"revenue",
        data:[200,300,400,100],
            backgroundColor:[
 "blue","gray","orange","skyblue"
            ]
    }
    ]
  }} />;
}

export default PieChart;