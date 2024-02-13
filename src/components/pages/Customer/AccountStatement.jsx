import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AccountStatement = () => {
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section data-aos="zoom-in">
      <div className="bg-gray-50 ">
        <div className="middle font-semibold text-lg p-2 m-2">
          Account Statement
        </div>
        <div className="bottom p-4 ps-10 bg-white ms-4 shadow-md me-8 mb-4">
          <p className="text-sm text-blue-600 pb-2">Select the account</p>

          <div className="flex border-b-[1px] pb-2 me-[20%] font-semibold text-sm text-slate-700 ">
            <p className="basis-[90%]">Account Number</p>
            <p className="basis-[80%]">Branch</p>
            <p className="basis-[30%]">Account Type</p>
          </div>
          <div className="flex items-center border-b-[1px] me-[20%] pb-2">
            <div className="flex gap-2 pt-2 basis-[45%]">
              <input type="radio" className="accent-black"></input>
              <p className="text-sm font-semibold">00000785668965</p>
            </div>
            <div className="basis-[40%] text-xs text-slate-500">
              <p>South End Branch</p>
            </div>
            <div className="text-xs text-slate-500">
              <p>Savings Account</p>
            </div>
          </div>

          <div className="flex gap-10 text-xs pt-4 text-slate-500">
            <p>Select Account Number</p>
            <p>00000007875123555</p>
          </div>
          <p className="text-sm pt-4 text-blue-600">
            Select option for Statement Period
          </p>
          <div className="pt-5 flex items-center">
            <div className="flex text-xs gap-2 basis-[8%] ">
              <input type="radio" className="accent-black"></input>
              <p>By Date</p>
            </div>
            <div className="flex text-xs basis-[8%] gap-2">
              <input type="radio" className="accent-black"></input>
              <p>By Month</p>
            </div>
            <div className="flex text-xs basis-[10%] gap-2">
              <input type="radio" className="accent-black"></input>
              <p>By Last 6 Months</p>
            </div>
            <div className="flex text-xs basis-[10%] gap-2">
              <input type="radio" className="accent-black"></input>
              <p>By Financial Year</p>
            </div>
          </div>

          <div className="flex pt-10 gap-8  text-xs items-center ms-16">
            <p className="text-slate-600">Start Date</p>
            <input
              type="text"
              placeholder="[dd/mm/yyyy]"
              className="border-[1px] rounded border-gray-400 p-1 ps-3 w-[10%]"
            ></input>
          </div>

          <div className="flex pt-6 gap-9  text-xs items-center ms-16">
            <p className="text-slate-600">End Date</p>
            <input
              type="text"
              placeholder="[dd/mm/yyyy]"
              className="border-[1px] rounded border-gray-400 p-1 ps-3 w-[10%]"
            ></input>
          </div>

          <p className="text-sm pt-4 text-blue-600">
            Select appropirate option to view,print or download the statement
          </p>
          <div></div>
          <div className="flex items-center pt-4">
            <div className="flex text-xs basis-[6%] gap-2">
              <input type="radio" className="accent-black"></input>
              <p>View</p>
            </div>

            <div className="flex text-xs basis-[16%] gap-2">
              <input type="radio" className="accent-black"></input>
              <p>Download in MS Excel format</p>
            </div>

            <div className="flex text-xs basis-[15%] gap-2">
              <input type="radio" className="accent-black"></input>
              <p>Download in PDF format</p>
            </div>
          </div>

          <div className="flex gap-2 justify-center pt-8 pb-8">
            <button
              type="submit"
              className="border-[1px] bg-blue-600 text-white rounded p-1 px-2"
            >
              Submit
            </button>
            <button
              type="submit"
              className="border-[1px] bg-gray-400 rounded text-white p-1 px-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountStatement;
