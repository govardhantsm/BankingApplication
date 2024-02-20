import React from "react";

const AmountTransfer = () => {
  return (
    <div className="bg-gray-50">
      <div className="middle font-semibold text-lg p-2 m-2 ">
        Amount Transfer
      </div>
      <div className="bottom p-4 bg-white  shadow-md me-10 ms-10 ">
        <p className="text-blue-500 pb-2 text-sm  ">
          Select the account from which you wish to transfer funds
        </p>
        <div className="flex justify-between text-sm font-semibold text-gray-400 border-b-[1px] pb-3 ms-3 me-8">
          <p className="basis-[25%]">Account Number</p>
          <p className="basis-[25%]">Branch</p>
          <p className="basis-[25%]">Account Type</p>
          <p className="pe-14 basis-[25%]">Balance</p>
        </div>

        <div className="flex justify-between pt-2 items-center border-b-[1px] ms-2 me-8 text-gray-400 pb-2">
          <div className="flex basis-[25%]">
            <input type="radio" className="accent-black"></input>
            <p className="ps-2 text-sm font-semibold text-gray-500">
              00000785668965
            </p>
          </div>
          <div className="basis-[25%] text-xs font-semibold">
            <p>South End Branch</p>
          </div>
          <div className="basis-[25%] text-xs font-semibold">
            <p>Savings Account</p>
          </div>
          <div className="basis-[25%] text-xs font-semibold">
            <p>50000.00</p>
          </div>
        </div>
        <div className="flex ms-2 pt-4 text-slate-400">
          <p className="text-xs pe-8">Selected Account Number</p>
          <p className="text-xs">000000078751234555</p>
        </div>
        <div className="flex ms-2 pt-4 items-center">
          <p className="text-xs pe-[130px] text-slate-400 ">Amount</p>
          <input
            type="text"
            className="border-[1px] border-gray-300 w-[20%] rounded p-1"
          ></input>
        </div>
        <div className="flex pt-4 items-center ms-2 text-slate-400">
          <p className="text-xs pe-[130px]">Purpose</p>
          <select className="border-[1px] p-1 border-gray-300 rounded w-[20%] text-xs text-slate-400">
            <option>--select purpose--</option>
          </select>
        </div>
        <p className="pt-4 ms-2 text-sm text-blue-600 ">
          Select Beneficiary Account
        </p>
        <div className="flex text-sm font-semibold ms-2 pt-4 border-b-[1px] pb-2 me-[4%] text-slate-500">
          <p className="basis-[25%]">Account Number</p>
          <p className="basis-[25%]">Beneficiary Name</p>
          <p className="basis-[25%]">Branch</p>
          <p className="basis-[25%]">IFSC Code</p>
          <p className="basis-[8%]">Limit</p>
        </div>

        <div className="flex border-b-[1px] pb-2 me-[4%] ms-2 items-center ">
          <div className="pt-2 flex basis-[25%] ">
            <input type="radio"></input>
            <p className="ps-2 text-sm font-semibold text-slate-500">
              000000078689546
            </p>
          </div>
          <div className="basis-[25%] text-xs text-slate-400">
            <p>Mark Anatony</p>
          </div>
          <div className="basis-[25%] text-xs text-slate-400">
            <p>Jayanagar</p>
          </div>
          <div className="basis-[25%] text-xs text-slate-400">
            <p>QSPSE000458</p>
          </div>
          <div className="basis-[8%] text-xs text-slate-400">25000000</div>
        </div>

        <div className="flex border-b-[1px] pb-2 me-[4%] ms-2 items-center ">
          <div className="pt-2 flex basis-[25%] ">
            <input type="radio"></input>
            <p className="ps-2 text-sm font-semibold text-slate-500">
              000000078689546
            </p>
          </div>
          <div className="basis-[25%] text-xs text-slate-400">
            <p>Mark Anatony</p>
          </div>
          <div className="basis-[25%] text-xs text-slate-400">
            <p>Jayanagar</p>
          </div>
          <div className="basis-[25%] text-xs text-slate-400">
            <p>QSPSE000458</p>
          </div>
          <div className="basis-[8%] text-xs text-slate-400">25000000</div>
        </div>

        <div className="flex border-b-[1px] pb-2 me-[4%] ms-2 items-center ">
          <div className="pt-2 flex basis-[25%] ">
            <input type="radio"></input>
            <p className="ps-2 text-sm font-semibold text-slate-500">
              000000078689546
            </p>
          </div>
          <div className="basis-[25%] text-xs text-slate-400">
            <p>Mark Anatony</p>
          </div>
          <div className="basis-[25%] text-xs text-slate-400">
            <p>Jayanagar</p>
          </div>
          <div className="basis-[25%] text-xs text-slate-400">
            <p>QSPSE000458</p>
          </div>
          <div className="basis-[8%] text-xs text-slate-400">25000000</div>
        </div>
        <p className="text-xs text-slate-400 ms-2 pt-4">
          Select Beneficiary Name
        </p>
        <p className="pt-2 text-sm font-bold text-[#8c0000]">
          Please note,Beneficiary Account Number will ONLY be sued for
          Electronic Fund Transfer (please ensure correctness), the Beneficiary
          Name provided will not be considered for Electronic Fund Transfer as
          per RBI guidelines
        </p>
        <div className="pt-4 flex items-center">
          <input type="checkbox"></input>
          <p className="text-sm ps-2">
            I accept the{" "}
            <span className="text-blue-600 text-sm">Terms and Conditions</span>
          </p>
        </div>

        <div className="flex gap-2 justify-center pt-8 ">
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

export default AmountTransfer;
