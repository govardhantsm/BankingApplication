import React from "react";

function DebitCard() {
  return (
      <div className="bg-gray-50 w-[100%] ">
        
        <div className="middle font-semibold text-lg p-2 m-2">Debit Cards</div>
        <div className="bottom  p-4 ps-10 bg-white ms-4 shadow-md me-8 mb-4">
          <p className="font-semibold text-sm pt-2 pb-3">
            APPLY FOR DEBIT CARD
          </p>
          <p className="text-sm text-blue-400 pt-2 pb-2">Select the account</p>
          <div className="text-xs flex justify-between ps-2  pe-[80px] font-semibold text-slate-400 border-b-[1px] pb-2">
            <p>Account Number</p>
            <p>Branch</p>
            <p>Account Type</p>
          </div>
          <div className="flex justify-between pe-[80px] text-xs pt-2 border-b-[1px] pb-2">
            <div>
              <input className="accent-black" type="radio"></input>
              <label className="text-xs p-2 font-semibold text-slate-500">
                000000879875
              </label>
            </div>
            <p className="pl-11 text-slate-400 text-[11px]">South End Branch</p>
            <p className="text-slate-400 text-[11px] ">Savings Account</p>
          </div>
          <div className="flex text-xs text-slate-400 pt-4 ">
            <p className="pe-8 pb-8">Selected Account Number</p>
            <p>000000004567890987</p>
          </div>
          <p className="text-sm text-blue-500 pb-8">
            Please provide the necessary details
          </p>
          <div className="flex mb-5 items-center">
            <p className="pe-[8%] text-sm text-slate-400">Name on the Card</p>
            <input
              className="border-[1px] rounded-sm w-[30%] h-[25px]"
              type="text"
            ></input>
          </div>
          <div className="flex items-center text-sm text-slate-400 pb-10">
            <p className="pe-[5.5%] ">Select Type of the Card</p>
            <select className="border-[1px] w-[30%] rounded-sm h-[25px]">
              <option>Credit Card</option>
              <option>Debit Card</option>
            </select>
          </div>
          <div className="flex justify-center pr-[20%]">
            <button
              className="border-[1px] text-xs bg-blue-600 text-white pt-1 pb-1 ps-2 pe-2 font-semibold rounded-[4px]  "
              type="submit"
            >
              Submit
            </button>
            <button
              className="border-[1px] text-xs bg-gray-400 text-white pt-1 pb-1 ps-2 pe-2 font-semibold rounded-[4px]"
              type="submit"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default DebitCard;
