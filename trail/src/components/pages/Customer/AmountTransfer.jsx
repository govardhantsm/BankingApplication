import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  amountTransfer,
  findAllBeneficiarys,
} from "../../../redux/services/CustomerThunk/AccountsThunk";
import { useNavigate } from "react-router";

const AmountTransfer = () => {
  const data = JSON.parse(sessionStorage.getItem("myObject"));
  let navigate = useNavigate();
  let account = data.accounts;
  let dispatch = useDispatch();
  let [flag, SetFlag] = useState(false);
  let [senderAccountNumber, SetSenderAccountNumber] = useState(
    account[0].accountNumber
  );
  let [receiverAccountNumber, SetReceiverAccountNumber] = useState();
  let [amount, SetAmount] = useState(0);
  let [beneficiariesList, setBeneficiariesList] = useState();
  let [purpose, SetPurpose] = useState();
  let [name, SetName] = useState(null);

  let [beneficiary, SetBeneficiary] = useState();
  useEffect(() => {
    dispatch(findAllBeneficiarys(senderAccountNumber)).then(x => {
      console.log(x.payload.data);
      if (x?.payload) SetBeneficiary(x?.payload?.data);
    });
  }, []);

  return (
    <div className="bg-gray-50" data-aos="zoom-in">
      <div className="middle font-semibold text-lg p-2 m-2 ">
        Amount Transfer
      </div>
      <section className="bottom p-4 bg-white  shadow-md me-10 ms-10 ">
        <p className="text-blue-500 pb-2 text-sm  ">
          Select the account from which you wish to transfer funds
        </p>
        <div className="flex justify-between text-sm font-semibold text-gray-400 border-b-[1px] pb-3 ms-3 me-8">
          <label htmlFor="account" className="basis-[25%]">
            Account Number
          </label>
          <p className="basis-[25%]">Branch</p>
          <p className="basis-[25%]">Account Type</p>
          <p className="pe-14 basis-[25%]">Balance</p>
        </div>

        {account?.map(ac => {
          return (
            <section
              key={ac.account}
              className="flex justify-between pt-2 items-center border-b-[1px] ms-2 me-8 text-gray-400 pb-2"
            >
              <div className="flex basis-[25%]">
                <input
                  type="radio"
                  name="account"
                  className="accent-black"
                  checked={ac.accountNumber == data?.accounts[0]?.accountNumber}
                  onChange={() => {
                    SetSenderAccountNumber(ac.accountNumber);
                  }}
                ></input>
                <p className="ps-2 text-sm font-semibold text-gray-500">
                  {ac.accountNumber}
                </p>
              </div>
              <div className="basis-[25%] text-xs font-semibold">
                <p>{ac.branch.branchName.toUpperCase()}</p>
              </div>
              <div className="basis-[25%] text-xs font-semibold">
                <p>{ac.accountType}</p>
              </div>
              <div className="basis-[25%] text-xs font-semibold">
                <p>
                  {ac.accountType == "SAVINGS_ACCOUNT"
                    ? ac.availableBalance
                    : ac.currentBalance}
                </p>
              </div>
            </section>
          );
        })}
        <div className="flex ms-2 pt-4 text-slate-400">
          <p className="text-xs pe-8">Selected Account Number</p>
          <p className="text-xs">
            {senderAccountNumber ? senderAccountNumber : "Not Selected"}
          </p>
        </div>
        <div className="flex ms-2 pt-4 items-center">
          <p className="text-xs pe-[130px] text-slate-400 ">Amount</p>
          <input
            type="text"
            value={amount}
            onChange={e => {
              SetAmount(e.target.value);
            }}
            className="border-[1px] border-gray-300 w-[20%] rounded p-1"
          ></input>
        </div>
        <div className="flex pt-4 items-center ms-2 text-slate-400">
          <p className="text-xs pe-[130px]">Purpose</p>
          <select
            className="border-[1px] p-1 border-gray-300 rounded w-[20%] text-xs text-slate-400"
            value={purpose}
            onChange={e => {
              SetPurpose(e.target.value);
            }}
          >
            <option>--select purpose--</option>
            <option value="Rent">Rent</option>
            <option value="Investments">Investments</option>
            <option value="Friends">Friends</option>
            <option value="Family">Family</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Bill Payment">Bill Payment</option>
          </select>
        </div>
        <p className="pt-4 ms-2 text-sm text-blue-600 ">
          Select Beneficiary Account
        </p>
        <div className="flex text-sm font-semibold ms-2 pt-4 border-b-[1px] pb-2 me-[4%] text-slate-500">
          <label htmlFor="rc" className="basis-[25%]">
            Account Number
          </label>
          <p className="basis-[25%]">Beneficiary Name</p>
          <p className="basis-[25%]">Branch</p>
          <p className="basis-[25%]">IFSC Code</p>
          <p className="basis-[8%]">Limit</p>
        </div>

        {beneficiary?.map(ben => {
          return (
            <div className="flex border-b-[1px] pb-2 me-[4%] ms-2 items-center ">
              <div className="pt-2 flex basis-[25%] ">
                <input
                  type="radio"
                  name="rc"
                  checked={receiverAccountNumber == ben.reciverAccountNumber}
                  value={ben.reciverAccountNumber}
                  onChange={() => {
                    SetName(ben.beneficiaryName);
                    SetReceiverAccountNumber(ben.reciverAccountNumber);
                  }}
                ></input>
                <p className="ps-2 text-sm font-semibold text-slate-500">
                  {ben.reciverAccountNumber}
                </p>
              </div>
              <div className="basis-[25%] text-xs text-slate-400">
                <p>{ben.beneficiaryName}</p>
              </div>
              <div className="basis-[25%] text-xs text-slate-400">
                <p>{ben.branchName ? ben.branchName : "BranchName"}</p>
              </div>
              <div className="basis-[25%] text-xs text-slate-400">
                <p>{ben.ifsccode}</p>
              </div>
              <div className="basis-[8%] text-xs text-slate-400">
                {ben.beneficiaryTransferLimit}
              </div>
            </div>
          );
        })}

        <p className="text-xs text-slate-400 ms-2 pt-4">
          Selected Beneficiary Name {`  :  ${name ? name : "Not Selected"}`}
        </p>
        <p className="pt-2 text-sm font-bold text-[#8c0000]">
          Please note,Beneficiary Account Number will ONLY be sued for
          Electronic Fund Transfer (please ensure correctness), the Beneficiary
          Name provided will not be considered for Electronic Fund Transfer as
          per RBI guidelines
        </p>
        <div className="pt-4 flex items-center">
          <input
            type="checkbox"
            onChange={e => {
              SetFlag(e.target.checked);
            }}
          ></input>
          <p className="text-sm ps-2">
            I accept the{" "}
            <span className="text-blue-600 text-sm">Terms and Conditions</span>
          </p>
        </div>

        <div className="flex gap-2 justify-center pt-8 ">
          <button
            className="border-[1px] bg-blue-600 text-white rounded p-1 px-2"
            onClick={e => {
              e.preventDefault();
              if (flag) {
                dispatch(
                  amountTransfer({
                    senderAccountNumber,
                    receiverAccountNumber,
                    amount,
                    purpose,
                  })
                );

                navigate("/customer/RestComp");
              }
            }}
          >
            Submit
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              SetName("");
              SetAmount(0);
              SetPurpose("");
              SetReceiverAccountNumber("");
            }}
            className="border-[1px] bg-gray-400 rounded text-white p-1 px-2"
          >
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

export default AmountTransfer;