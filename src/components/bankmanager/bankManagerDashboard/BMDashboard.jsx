import React, { useEffect, useState } from "react";

import ManagingDirector from "./ManagingDirector";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

import { useDispatch } from "react-redux";

import useGetBm from "../../../utils/useGetBm";
import { getBmDasBoard } from "../../../redux/reducers/bankmanager/bankManagerSlice";

const BMDashboard = ({ name }) => {
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

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="w-[100%] h-[100%] flex items-center flex-col"
      data-aos="zoom-in"
    >
      <section className="h-[25%] w-[97%] mt-8 flex justify-between">
        <div className="h-[100%] w-[19%] bg-white flex flex-col items-center rounded-md">
          <div className="flex w-[85%] justify-between mt-5 text-center">
            <p>Total Saving Accounts in Branch</p>
            {/* <p className="p-2 bg-gray-400 h-[1.1rem] w-[1.1rem] text-[0.7rem] flex items-center justify-center text-white rounded-full">
              i
            </p> */}
          </div>
          <div className="font-[500] flex w-[100%] justify-center mt-3 tracking-widest text-[1.7rem] text-violet-600">
            {/* {mdDashBoard?.totalBranches} */}
            <CountUp
              start={0}
              end={bmDashBoard?.totalSavingAccountNumber}
              duration={2}
            />
          </div>
          <div className="flex w-[85%] justify-end mt-5">
            {/* <p className="flex items-center tracking-wider">
              <IoMdArrowDropup className="text-green-600 text-xl me-1" />
              10.25%
            </p> */}
          </div>
        </div>
        <div className="h-[100%] w-[19%] bg-white flex flex-col items-center rounded-md">
          <div className="flex w-[85%] justify-between mt-5 text-center">
            <p>Total Current Accounts in Branch</p>
            {/* <p className="p-2 bg-gray-400 h-[1.1rem] w-[1.1rem] text-[0.7rem] flex items-center justify-center text-white rounded-full">
              i
            </p> */}
          </div>
          <div className="font-[500] flex w-[100%] justify-center mt-3 tracking-widest text-[1.7rem] text-violet-600">
            {/* 1,22,02,155 */}
            <CountUp
              start={0}
              end={bmDashBoard?.totalCurrentAccount}
              duration={3}
            />
          </div>
          {/* <div className="flex w-[85%] justify-end mt-5">
            <p className="flex items-center tracking-wider">
              <IoMdArrowDropdown className="text-red-600 text-xl me-1" />
              7.85%
            </p>
          </div> */}
        </div>
        <div className="h-[100%] w-[19%] bg-white flex flex-col items-center rounded-md">
          <div className="flex w-[85%] justify-between mt-5 text-center">
            <p>Total Credit Card in Branch</p>
            {/* <p className="p-2 bg-gray-400 h-[1.1rem] w-[1.1rem] text-[0.7rem] flex items-center justify-center text-white rounded-full">
              i
            </p> */}
          </div>
          <div className="font-[500] flex w-[100%] justify-center mt-3 tracking-widest text-[1.7rem] text-violet-600">
            {/* 3.2M */}
            <CountUp
              start={0}
              end={bmDashBoard?.totalCreditCardAccount}
              duration={2}
            />
          </div>
          {/* <div className="flex w-[85%] justify-end mt-5">
            <p className="flex items-center tracking-wider">
              <IoMdArrowDropup className="text-green-600 text-xl me-1" />
              3.64%
            </p>
          </div> */}
        </div>
        <div className="h-[100%] w-[19%] bg-white flex flex-col items-center rounded-md">
          <div className="flex w-[85%] justify-between mt-5 text-center">
            <p>Total Today Deposits in Branch</p>
            {/* <p className="p-2 bg-gray-400 h-[1.1rem] w-[1.1rem] text-[0.7rem] flex items-center justify-center text-white rounded-full">
              i
            </p> */}
          </div>
          <div className="font-[500] flex w-[100%] justify-center mt-3 tracking-widest text-[1.7rem] text-violet-600">
            {/* 2.8M */}
            <CountUp start={0} end={bmDashBoard?.totalDeposits} duration={2} />
          </div>
          {/* <div className="flex w-[85%] justify-end mt-5">
            <p className="flex items-center tracking-wider">
              <IoMdArrowDropup className="text-green-600 text-xl me-1" />
              1.48%
            </p>
          </div> */}
        </div>
        <div className="h-[100%] w-[19%] bg-white flex flex-col items-center rounded-md">
          <div className="flex w-[85%] justify-between mt-5 text-center">
            <p>Today Fund Transfer in Branch</p>
            {/* <p className="p-2 bg-gray-400 h-[1.1rem] w-[1.1rem] text-[0.7rem] flex items-center justify-center text-white rounded-full">
              i
            </p> */}
          </div>
          <div className="font-[500] flex w-[100%] justify-center mt-3 tracking-widest text-[1.8rem] text-violet-600">
            {/* 2.8M */}
            <CountUp
              start={0}
              end={bmDashBoard?.totalFundTransfer}
              duration={2}
            />
          </div>
          {/* <div className="flex w-[85%] justify-end mt-5">
            <p className="flex items-center tracking-wider">
              <IoMdArrowDropup className="text-green-600 text-xl me-1" />
              1.48%
            </p>
          </div> */}
        </div>
      </section>
      <section className="h-[55%] w-[96%]">
        <ManagingDirector />
      </section>
    </section>
  );
};

export default BMDashboard;
