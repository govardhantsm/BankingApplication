import React from "react";

const AddBeneficiary = () => {
  return (
    <section>
      <div className="bg-white border-t-2 border-orange-300">
        <form className="p-7 flex flex-col gap-5 shadow-md">
          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              Name
            </label>
            <input
              className="w-[320px] p-[5px] rounded border"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              Account Number
            </label>
            <input
              className="w-[320px] p-[3px] rounded border"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              Confirm Account Number
            </label>
            <input
              className="w-[320px] p-[3px] rounded border"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              IFSC Code
            </label>
            <input
              className="w-[320px] p-[3px] rounded border"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              Address Line 1
            </label>
            <input
              className="w-[320px] p-[3px] rounded border"
              type="text"
              name=""
              id=""
            />
            <span className="ml-[15px] text-slate-400">
              (Door No, Street Name)
            </span>
          </div>
          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              Address Line 2
            </label>
            <input
              className="w-[320px] p-[3px] rounded border"
              type="text"
              name=""
              id=""
            />
            <span className="ml-[15px] text-slate-400">(Locality, City)</span>
          </div>
          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              Pincode
            </label>
            <input
              className="w-[320px] p-[3px] rounded border"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              Bank Transfer Limit(INR)
            </label>
            <input
              className="w-[320px] p-[3px] rounded border"
              type="text"
              name=""
              id=""
            />
            <span className="ml-[15px] text-slate-400">
              (Maximum limit 10000000)
            </span>
          </div>
          <p className="text-red-700 font-semibold mt-5">
            Please note, Beneficiary Account Number will ONLY be used for
            Electronic Fund Transfer(please ensure correctness).the Beneficiary
            Name provided will not be considered for Electronic Fund Transfer as
            per RBI guidelines
          </p>
          <div className="text-center">
            <button className="text-white bg-blue-800 p-[6px] rounded mr-2">
              Submit
            </button>
            <button className="text-white bg-cyan-400 p-[6px] rounded ">
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBeneficiary;
