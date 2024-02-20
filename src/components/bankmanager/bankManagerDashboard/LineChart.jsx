import React, { useEffect, useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";

import { Bar } from "react-chartjs-2";
// import useGetMd from "../../../../utils/useGetMd";
import { useDispatch } from "react-redux";
import useGetMd from "../../../utils/useGetMd";

function LineChart() {
  let [mdDashBoard, setMdDashBoard] = useState();
  let dispatch = useDispatch();
  const user = useGetMd();
  // console.log(user);

  // useEffect(() => {
  //   if (user?.data?.data?.managingDirectorId) {
  //     let t = dispatch(getMdDashBoard(user?.data?.data?.managingDirectorId));
  //     t.unwrap().then(x => {
  //       setMdDashBoard(x.data);
  //       console.log(x.data);
  //     });
  //   }
  // }, [user?.data?.data?.managingDirectorId]);
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
