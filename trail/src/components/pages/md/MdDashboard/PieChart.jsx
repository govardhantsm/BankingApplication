import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import useGetMd from "../../../../utils/useGetMd";
import { useDispatch } from "react-redux";
import { getMdDashBoard } from "../../../../redux/services/managingDirectorThunk/mdBranchThunk/MdBranchThunk";

function PieChart() {
  let [mdDashBoard, setMdDashBoard] = useState();
  let dispatch = useDispatch();
  const user = useGetMd();
  // console.log(user);

  useEffect(() => {
    if (user?.data?.data?.managingDirectorId) {
      let t = dispatch(getMdDashBoard(user?.data?.data?.managingDirectorId));
      t.unwrap().then(x => {
        setMdDashBoard(x?.data?.accountHolders);
        console.log(x?.data?.accountHolders);
      });
    }
  }, [user?.data?.data?.managing]);
  return (
    <Pie
      data={{
        labels: [1 + "Saving", 2 + " " + "Current", 3 +"Credit", 4+"Loan"],
        datasets: [
          {
            label: "",
            data: [
              mdDashBoard?.totalSavingAccounts,
              mdDashBoard?.totalCurrentAccounts,
              mdDashBoard?.totalCreditAccounts,
              mdDashBoard?.totalLoanAccounts,
            ],
            backgroundColor: ["blue", "gray", "orange", "skyblue"],
          },
        ],
      }}
    />
  );
}

export default PieChart;
