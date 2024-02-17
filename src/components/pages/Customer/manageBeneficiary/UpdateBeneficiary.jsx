import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  SaveBeneficiary,
  findBeneficiary,
  savebeneficiary,
} from "../../../../redux/services/CustomerThunk/AccountsThunk";
import { getCustomerProfile } from "../../../../redux/reducers/customer/customerSlice";
import AOS from "aos";
import "aos/dist/aos.css";
import {  useNavigate, useParams } from "react-router-dom";

const UpdateBeneficiary = () => {
  let { beneficiaryId } = useParams();
    let dispatch = useDispatch();
    let navigate=useNavigate();

  let [payload, SetPayload] = useState({
    senderAccountNumber: "",
    reciverAccountNumber: "",
    beneficiaryTransferLimit: "",
    beneficiaryName: "",
    ifsccode: "",
  });

  useEffect(() => {
    dispatch(findBeneficiary(beneficiaryId)).then(x => {
      console.log(x.payload.data);
      SetPayload({ ...x.payload.data });
    });
  }, []);
  let [set, SetSet] = useState(false);
  let handleChange = e => {
    let { name, value } = e.target;
    SetPayload({ ...payload, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();

      dispatch(SaveBeneficiary(payload));
      navigate("/customer/Manage Beneficiary/View Beneficiary");
  };
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section data-aos="zoom-in">
      <div className="bg-white border-t-2 border-orange-300">
        <form
          className="p-7 flex flex-col gap-5 shadow-md"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              Name
            </label>
            <input
              className="w-[320px] p-[5px] rounded border"
              type="text"
              name="beneficiaryName"
              value={payload.beneficiaryName}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className={`${set ? "ps-40 text-red-500 pb-2" : "hidden"} `}>
              {"Account Number fields must be identical.  "}
            </div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              Account Number
            </label>
            <input
              className="w-[320px] p-[3px] rounded border"
              type="text"
              name="reciverAccountNumber"
              value={payload.reciverAccountNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              IFSC Code
            </label>
            <input
              className="w-[320px] p-[3px] rounded border"
              type="text"
              name="ifsccode"
              value={payload.ifsccode}
              onChange={handleChange}
            />
          </div>
         
          <div>
            <label className="inline-block w-[220px] text-slate-400" htmlFor="">
              Bank Transfer Limit(INR)
            </label>
            <input
              className="w-[320px] p-[3px] rounded border"
              type="text"
              name="beneficiaryTransferLimit"
              value={payload.beneficiaryTransferLimit}
              onChange={handleChange}
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
              Update
            </button>
            {/* <button
              className="text-white bg-cyan-400 p-[6px] rounded "
              onClick={() => {
                SetPayload({
                  senderAccountNumber: "",
                  reciverAccountNumber: "",
                  beneficiaryTransferLimit: "",
                  beneficiaryName: "",
                  ifsccode: "",
                  cnumber: "",
                });
              }}
            >
              Reset
            </button> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateBeneficiary;
