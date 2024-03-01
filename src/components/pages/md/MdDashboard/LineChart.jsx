import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";

import { Bar } from "react-chartjs-2";
import useGetMd from "../../../../utils/useGetMd";
import { useDispatch } from "react-redux";
import { getMdDashBoard } from "../../../../redux/services/managingDirectorThunk/mdBranchThunk/MdBranchThunk";

function LineChart() {
  const data1 = JSON.parse(sessionStorage.getItem("myObject"));
  console.log(data1.managingDirectorId);
  let [mdDashBoard, setMdDashBoard] = useState();
  let dispatch = useDispatch();
  let [lab, setlab] = useState([]);
  let [dad, setdad] = useState([]);
  let [dac, setdac] = useState([]);
  useEffect(() => {
    dispatch(getMdDashBoard(data1.managingDirectorId)).then(x => {
      console.log(x.payload.data.revenues);
      x.payload.data.revenues.map(obj => {
        setlab(l => new Set([...l, obj.revenueDate]));
        setdad(l => new Set([...l, obj.debited]));
        setdac(l => new Set([...l, obj.credited]));
      });
    });
  }, []);

  const data = {
    labels: [...lab],
    datasets: [
      {
        label: "Debit",
        data:[ ...dad],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Credit",
        data: [...dac],
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
