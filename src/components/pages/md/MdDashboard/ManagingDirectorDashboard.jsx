import React, { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import ManagingDirector from "./ManagingDirector";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import useGetMd from "../../../../utils/useGetMd";
import { useDispatch } from "react-redux";
import { getMdDashBoard } from "../../../../redux/services/managingDirectorThunk/mdBranchThunk/MdBranchThunk";

const ManagingDirectorDashboard = ({ name }) => {
  let [mdDashBoard, setMdDashBoard] = useState();
  let dispatch = useDispatch();
  const user = useGetMd();

  useEffect(() => {
    if (user?.data?.data?.managingDirectorId) {
      let t = dispatch(getMdDashBoard(user?.data?.data?.managingDirectorId));
      t.unwrap().then(x => {
        setMdDashBoard(x.data);
      });
    }
  }, [user?.data?.data?.managingDirectorId]);

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
          <div className="flex w-[85%] justify-between mt-5">
            <p>Total Branches</p>
            {/* <p className="p-2 bg-gray-400 h-[1.1rem] w-[1.1rem] text-[0.7rem] flex items-center justify-center text-white rounded-full">
              i
            </p> */}
          </div>
          <div className="font-[500] flex w-[100%] justify-center mt-3 tracking-widest text-[1.7rem] text-violet-600">
            {/* {mdDashBoard?.totalBranches} */}
            <CountUp start={0} end={mdDashBoard?.totalBranches} duration={2} />
          </div>
          <div className="flex w-[85%] justify-end mt-5">
            {/* <p className="flex items-center tracking-wider">
              <IoMdArrowDropup className="text-green-600 text-xl me-1" />
              10.25%
            </p> */}
          </div>
        </div>
        <div className="h-[100%] w-[19%] bg-white flex flex-col items-center rounded-md">
          <div className="flex w-[85%] justify-between mt-5">
            <p>Total Accounts</p>
            {/* <p className="p-2 bg-gray-400 h-[1.1rem] w-[1.1rem] text-[0.7rem] flex items-center justify-center text-white rounded-full">
              i
            </p> */}
          </div>
          <div className="font-[500] flex w-[100%] justify-center mt-3 tracking-widest text-[1.7rem] text-violet-600">
            {/* 1,22,02,155 */}
            <CountUp start={0} end={mdDashBoard?.totalAccounts} duration={3} />
          </div>
          {/* <div className="flex w-[85%] justify-end mt-5">
            <p className="flex items-center tracking-wider">
              <IoMdArrowDropdown className="text-red-600 text-xl me-1" />
              7.85%
            </p>
          </div> */}
        </div>
        <div className="h-[100%] w-[19%] bg-white flex flex-col items-center rounded-md">
          <div className="flex w-[85%] justify-between mt-5">
            <p>Total Employees</p>
            {/* <p className="p-2 bg-gray-400 h-[1.1rem] w-[1.1rem] text-[0.7rem] flex items-center justify-center text-white rounded-full">
              i
            </p> */}
          </div>
          <div className="font-[500] flex w-[100%] justify-center mt-3 tracking-widest text-[1.7rem] text-violet-600">
            {/* 3.2M */}
            <CountUp start={0} end={mdDashBoard?.totalemployees} duration={2} />
          </div>
          {/* <div className="flex w-[85%] justify-end mt-5">
            <p className="flex items-center tracking-wider">
              <IoMdArrowDropup className="text-green-600 text-xl me-1" />
              3.64%
            </p>
          </div> */}
        </div>
        <div className="h-[100%] w-[19%] bg-white flex flex-col items-center rounded-md">
          <div className="flex w-[85%] justify-between mt-5">
            <p>Today Deposits</p>
            {/* <p className="p-2 bg-gray-400 h-[1.1rem] w-[1.1rem] text-[0.7rem] flex items-center justify-center text-white rounded-full">
              i
            </p> */}
          </div>
          <div className="font-[500] flex w-[100%] justify-center mt-3 tracking-widest text-[1.7rem] text-violet-600">
            {/* 2.8M */}
            <CountUp start={0} end={mdDashBoard?.totalDeposits} duration={2} />
          </div>
          {/* <div className="flex w-[85%] justify-end mt-5">
            <p className="flex items-center tracking-wider">
              <IoMdArrowDropup className="text-green-600 text-xl me-1" />
              1.48%
            </p>
          </div> */}
        </div>
        <div className="h-[100%] w-[19%] bg-white flex flex-col items-center rounded-md">
          <div className="flex w-[85%] justify-between mt-5">
            <p>Today Fund Transfer</p>
            {/* <p className="p-2 bg-gray-400 h-[1.1rem] w-[1.1rem] text-[0.7rem] flex items-center justify-center text-white rounded-full">
              i
            </p> */}
          </div>
          <div className="font-[500] flex w-[100%] justify-center mt-3 tracking-widest text-[1.8rem] text-violet-600">
            {/* 2.8M */}
            <CountUp
              start={0}
              end={mdDashBoard?.totalFundTransfer}
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

export default ManagingDirectorDashboard;
