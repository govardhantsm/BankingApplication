import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
const ManagingDirector = () => {
  return (
    <section className="h-[100%] w-[100%] mt-8 flex justify-between">
      <div className="h-[100%] w-[27%] bg-white rounded-md">
        <p className="p-5">Loan Portfolio</p>
        <section className="h-[20%] w-[100%] flex justify-evenly">
          <div className="flex flex-col items-center">
            <p className="text-[1.4rem] mb-2">48M</p>
            <p className="text-gray-400 text-sm">Total loan</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[1.4rem] mb-2">23M</p>
            <p className="text-gray-400 text-sm">Outstanding</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[1.4rem] mb-2">7.3M</p>
            <p className="text-gray-400 text-sm">Interest Due</p>
          </div>
        </section>
        <div className="h-[55%] w-[100%] flex justify-center items-center">
          <DoughnutChart />
        </div>
      </div>
      <div className="h-[100%] w-[40%] bg-white rounded-md">
        <div className="flex w-[96%] justify-between">
          <p className="p-4">Revenue</p>
          <div className="mt-5">
            <button className="bg-gray-600 px-3 py-1 text-white text-sm h-[2rem]">
              Today
            </button>
            <button className="bg-sky-100 px-3 py-1 text-gray-800 text-sm h-[2rem]">
              Weekly
            </button>
            <button className="bg-sky-100 px-3 py-1 text-gray-800 text-sm h-[2rem]">
              Monthly
            </button>
          </div>
        </div>
        <section className="h-[20%] w-[100%] flex justify-around mt-5">
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-sm mb-1">Target</p>
            <p className="text-[1.2rem] flex justify-center items-center">
              <IoIosArrowRoundDown className="text-red-600 text-2xl" />
              120M
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-sm mb-1">Last week</p>
            <p className="text-[1.2rem] flex items-center">
              <IoIosArrowRoundUp className="text-green-600 text-2xl" />
              23M
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-sm mb-1">Last Month</p>
            <p className="text-[1.2rem] flex justify-center items-center">
              <IoIosArrowRoundDown className="text-red-600 text-2xl" />
              80M
            </p>
          </div>
        </section>
        <div className="h-[50%] w-[80%] flex justify-center items-center m-auto">
          <LineChart />
        </div>
      </div>
      <div className="h-[100%] w-[29%] bg-white rounded-md">
        <p className="pt-4 ps-4">Total Account Holders</p>
        <div className="h-[60%] w-[100%] flex justify-center items-center">
          <PieChart />
        </div>
        <section className="h-[20%] w-[100%] flex justify-around mt-5">
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-sm mb-1">Target</p>

            <p className="text-[1.2rem] flex justify-center items-center">
              <IoIosArrowRoundDown className="text-red-600 text-2xl" />
              18k
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-sm mb-1">Last week</p>
            <p className="text-[1.2rem] flex items-center">
              <IoIosArrowRoundUp className="text-green-600 text-2xl" />
              3.25k
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-sm mb-1">Last Month</p>
            <p className="text-[1.2rem] flex justify-center items-center">
              <IoIosArrowRoundUp className="text-green-600 text-2xl" />
              28k
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ManagingDirector;
