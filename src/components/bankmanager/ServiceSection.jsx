import React, { useEffect, useState } from "react";
import { TfiUser } from "react-icons/tfi";
import { FaBuildingColumns } from "react-icons/fa6";
import { GiSteeringWheel } from "react-icons/gi";
import { ImCreditCard } from "react-icons/im";
import { BsPostcardFill } from "react-icons/bs";
import user from "../../images/profile.png";
import bank from "../../images/bank.png";
import ccard from "../../images/card.png";
import dcard from "../../images/credit-card.png";
import banking from "../../images/banking.png";
import { NavLink, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceSection = () => {
  let { state } = useLocation();
console.log(state);
  const [data, setData] = useState({
    accountType: "",
  });
  let payload = {
    name: state?.name,
    fatherName: state?.fatherName,
    motherName: state?.motherName,
    phoneNumber: state?.phoneNumber,
    email: state?.email,
    gender: state?.gender,
    dateOfBirth: state?.dateOfBirth,
    qualification: state?.qualification,
    occupationType: state?.occupationType,
    maritalStatus: state?.maritalStatus,
    annualIncome: state?.annualIncome,
    branchId: state?.branchId,
    status: "ACTIVE",
    userType: "ACCOUNT_HOLDER",
    address: {
      addressLine: state?.address?.addressLine,
      country: state?.address?.country,
      city: state?.address?.city,
      pincode: state?.address?.pincode,
    },
    accounts: [
      {
        status: "ACTIVE",
        primaryAccount: true,
        accountType: data.accountType,
      },
    ],
  };

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in">
      <section className="flex flex-col text-[14px] pb-4  ">
        <p className="pb-4 text-gray-500">Account Type</p>
        <section className="flex gap-x-6">
          <div
            onClick={() => {
              setData({ ...data, accountType: "SAVINGS_ACCOUNT" });
            }}
            className={
              data.accountType == "SAVINGS_ACCOUNT"
                ? "flex flex-col items-center justify-center bg-blue-800 w-[10rem] h-[6rem] gap-2 rounded border-white border-2 text-white"
                : "flex flex-col items-center justify-center bg-blue-100 w-[10rem] h-[6rem] gap-2 rounded"
            }
          >
            {/* <TfiUser className="text-4xl  text-gray-500" /> */}
            <img src={user} alt="" className="w-[50px] h-[50px]" />
            <p className="font-semibold">Savings Account</p>
          </div>
          <div
            onClick={() => {
              setData({ ...data, accountType: "CURRENT_ACCOUNT" });
            }}
            className={
              data.accountType == "CURRENT_ACCOUNT"
                ? "flex flex-col items-center justify-center bg-blue-800 w-[10rem] h-[6rem] gap-2 rounded border-white border-2 text-white"
                : "flex flex-col items-center justify-center bg-blue-100 w-[10rem] h-[6rem] gap-2 rounded"
            }
          >
            {/* <FaBuildingColumns className="text-4xl  text-gray-500" /> */}
            <img src={bank} alt="" className="w-[50px] h-[50px]" />
            <p className="font-semibold">Current Account</p>
          </div>
        </section>
      </section>
      <section className="flex flex-col pt-4">
        <p className="pb-4 text-gray-500">Choose Our Services</p>
        <section className="flex gap-x-6">
          <div className="flex flex-col items-center justify-center bg-blue-100 w-[10rem] h-[6rem] gap-2 rounded">
            {/* <ImCreditCard className="text-4xl  text-gray-500" /> */}
            <img src={ccard} alt="" className="w-[50px] h-[50px]" />
            <p className="font-semibold">Credit Card</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-100 w-[10rem] h-[6rem] gap-2 rounded">
            {/* <BsPostcardFill className="text-4xl  text-gray-500" /> */}
            <img src={dcard} alt="" className="w-[50px] h-[50px]" />
            <p className="font-semibold">Debit Card</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-100 w-[10rem] h-[6rem] gap-2 rounded">
            {/* <GiSteeringWheel className="text-4xl  text-gray-500" /> */}
            <img src={banking} alt="" className="w-[50px] h-[50px]" />
            <p className="font-semibold">Online Banking</p>
          </div>
        </section>
      </section>
      <section className=" flex gap-2 mr-4 items-center justify-end text-[14px]">
        <NavLink
          to="/bankmanager/create-account/PersonalDetails"
          className="border-[1px] px-3 py-1 rounded bg-gray-300 hover:bg-blue-500 hover:text-white"
        >
          Previous
        </NavLink>
        <NavLink
          state={payload}
          to={
            data.accountType
              ? "/bankmanager/create-account/DocumentSection"
              : "#"
          }
          className={`border-[1px] px-3 py-1 rounded bg-gray-300 ${
            data.accountType === ""
              ? "cursor-not-allowed"
              : "hover:bg-blue-500 hover:text-white "
          }`}
        >
          Next
        </NavLink>
      </section>
    </div>
  );
};

export default ServiceSection;
