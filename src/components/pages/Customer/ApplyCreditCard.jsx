import React from "react";

const ApplyCreditCard = () => {
  return (
    <div className="bg-gray-50">
      <div className="middle font-semibold text-lg p-2 m-2">Credit Card</div>
      <div className="bottom p-4 bg-white ms-4 shadow-md ">
        <p className="text-sm font-semibold ps-2 pb-4">APPLY CREDIT CARD</p>
        <p className="text-blue-600 ps-10 pb-4">Select the amount</p>
        <div className="flex text-sm font-semibold justify-between ms-10 me-20 border-b-[1px] pb-2 text-slate-500">
          <p>Account Number</p>
          <p>Branch</p>
          <p className="pe-14">Acoount Type</p>
        </div>
        <div className="flex text-sm  ms-10 me-20 text-slate-500 pt-2 border-b-[1px] pb-2 items-center justify-between">
          <div className="flex gap-1">
            <input type="radio"></input>
            <p className="font-semibold ">000000789966543</p>
          </div>
          <p className="ps-10">South End Branch</p>
          <p className="pe-10 pb-1">Savings Account</p>
        </div>
        <div className="flex pt-4 text-sm ">
          <p className=" ps-10 pe-10 text-xs text-slate-400">
            Select Account Number
          </p>
          <p>0000003456789009</p>
        </div>
        <p className="ms-10 pt-8 text-blue-600 pb-6">
          Please provide the necessary details
        </p>
        <div className="flex gap-20 ms-10 ">
          <p className="">Name on the Card</p>
          <input
            type="Text"
            className="border-[1px] rounded-sm w-[28%] h-8 "
          ></input>
        </div>
        <div className="ms-10 flex gap-4 pt-4">
          <div className="flex gap-2 items-center ms-[14.5%]">
            <input type="radio" />
            <p className="text-sm text-slate-400">Salaried</p>
          </div>
          <div className="flex gap-2 items-center ">
            <input type="radio"></input>
            <p className="text-sm text-slate-400">Self-Employed</p>
          </div>
        </div>
        <div className="flex gap-[6%] ms-10 pt-4 rounded-sm  ">
          <p>Salary per Month</p>
          <input
            type="text"
            className="border-[1px] rounded-sm w-[28%] h-8 "
          ></input>
        </div>
        <div className="flex gap-[6.5%] ms-10 pt-6 rounded-sm">
          <p>Company Name</p>
          <input
            type="text"
            className="border-[1px] rounded-sm w-[28%] h-8 "
          ></input>
        </div>
        <div className="flex gap-[3%] pt-6 ms-10 items-center pb-8">
          <p>Select Type of the Card</p>
          <select className="border-[1px] w-[28%] h-8  ">
            <option>Credit Card</option>
            <option>Debit Card</option>
          </select>
        </div>
        <div className="flex gap-2 justify-center me-[25%] pb-10">
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
  );
};

export default ApplyCreditCard;
