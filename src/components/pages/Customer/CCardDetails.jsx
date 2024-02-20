import React from "react";


function CCardDetail() {
  return (
    <div className="bg-gray-50 ">
      <div className="top flex items-center p-2 pt-3 pb-3 bg-white">
        <p className="pe-6 ps-10 text-sm text-slate-500">English</p>
        <input
          className="border-[1px] text-sm p-1 ps-4 rounded-2xl"
          type="text"
          placeholder="Search..."
        ></input>
      </div>
      <div className="middle font-semibold text-lg p-2 m-2">Credit Card</div>
      <div className="bottom p-4 ps-10 bg-white ms-4 shadow-md me-8 mb-4">
        <div className="flex ">
          <p className="font-semibold text-sm pt-2 pb-3 ">
            CREDIT CARD DETAILS
          </p>
          <button className="border-[1px] ps-3  pe-3 text-sm font-semibold bg-blue-600 text-white rounded-[5px] ml-[75%] mb-2">
            Apply for Debit Card
          </button>
        </div>
        <p className="text-sm text-blue-500 ps-5 pb-5">Account Details</p>
        <div className="flex text-sm">
          <p className="ps-12 text-slate-400">Account Number</p>
          <p className="ps-[90px] mb-4">00008786579989</p>
        </div>
        <div className="flex text-sm ">
          <p className="ps-12 text-slate-400 ">Account Type</p>
          <p className="ps-[112px] mb-8 ">Savings Account</p>
        </div>
        <p className="ps-5 font-semibold text-slate-400  pb-5">
          Credit Card list applied from your Account
        </p>
        <div className="flex mx-7 me-12 justify-between border-b-[1px] font-semibold text-sm px-2 pb-2">
          <p>Credit Card Number</p>
          <p>Card Holder Name</p>
          <p>Credit Limit</p>
          <p>Card Status</p>
        </div>
        <div className="flex mx-7 me-12 justify-between border-b-[1px]  text-slate-400 text-sm px-2 pb-2  pt-2">
          <p>234567890987654</p>
          <p className="pr-[40px]">Abhishek R</p>
          <p className="pr-[35px]">--</p>
          <button className="border-[1px] rounded-sm border-orange-300 font-semibold text-orange-300 text-[7.5px] mr-3 px-2 h-[0.9rem] flex justify-center items-center">
            PENDING
          </button>
        </div>
        <div className="flex mx-7 me-12 justify-between text-slate-400 border-b-[1px] text-sm px-2 pb-2  pt-2 ">
          <p>234567890987654</p>
          <p className="pr-[40px]">Abhishek R</p>
          <p className="pr-[35px]">--</p>
          <button className="border-[1px] rounded-sm border-red-500 text-red-500 font-semibold text-[8px] mr-3 px-[0.38rem] h-[0.9rem] flex justify-center items-center">
            REJECTED
          </button>
        </div>
        <div className="flex mx-7 me-12 justify-between text-slate-400 border-b-[1px] text-sm px-2 pb-2  pt-2 mb-32">
          <p>234567890987654</p>
          <p className="pr-[35px]">Abhishek R</p>
          <p className="pr-[20px]">65000</p>
          <button className="border-[1px] rounded-sm border-[#3fea28e0] font-semibold text-[#3fea28e0] text-[7.5px] mr-3 px-2 h-[0.9rem] flex justify-center items-center">
            Approved
          </button>
        </div>
      </div>
    </div>
  );
}

export default CCardDetail;
