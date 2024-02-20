import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useDispatch } from "react-redux";
import useGetBm from "../../../utils/useGetBm";
import { getBmDasBoard } from "../../../redux/reducers/bankmanager/bankManagerSlice";

function PieChart() {
  let [bmDashBoard, setBmDashBoard] = useState();
  let dispatch = useDispatch();
  const user = useGetBm();
  console.log(user?.data?.data?.branchId);

  useEffect(() => {
    if (user?.data?.data?.branchId) {
      let t = dispatch(getBmDasBoard(user?.data?.data?.branchId));
      t.unwrap().then(x => {
        setBmDashBoard(x.data);
        console.log(x.data);
      });
    }
  }, [user?.data?.data?.branchId]);
  return (
    <Pie
      data={{
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "revenue",
            data: [
              bmDashBoard?.totalSavingAccountNumber,
              bmDashBoard?.totalCurrentAccount,
              bmDashBoard?.totalCreditCardAccount,
              bmDashBoard?.totalDeposits,
              bmDashBoard?.totalFundTransfer,
            ],
            backgroundColor: ["blue", "gray", "orange", "skyblue", "yellow"],
          },
        ],
      }}
    />
  );
}

export default PieChart;
