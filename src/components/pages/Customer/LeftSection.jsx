import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { LiaIdCardSolid } from "react-icons/lia";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import { logout } from "../../../redux/reducers/auth/authSlice";
import Spinner from "./../spinner/Spinner";
import { getCustomerProfile } from "../../../redux/reducers/customer/customerSlice";

const LeftSection = () => {
  const data = JSON.parse(sessionStorage.getItem("myObject"));
  let dispatch = useDispatch();
  let [account, setAccount] = useState(false);

  let [loan, setLoan] = useState(false);
  let [card, setCard] = useState(false);

  return (
    <div className="flex items-center flex-col h-[auto] gap-2">
      <div>
        <section className="text-sm h-[10%] w-[100%] bg-black">
          <div className="flex flex-col items-center">
            <img
              src={
                // user?.avatar ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAK2Ud4gQr9pQFT6rc3xbeq74MhZe7bOdvQ&usqp=CAU"
              }
              alt=""
              className="h-[4rem] w-[4rem] rounded-full mt-5"
            />
            <p className="mt-3">{data?.name}</p>
            <p className="mt-1 text-[rgb(112,112,112)]">Customer</p>
          </div>
        </section>
        <section className="h-[65%]">
          <div className="ms-8 mt-6">
            <div className="p-1 flex items-center ">
              <RiDashboard3Fill className="mr-2" />
              <NavLink
                to="/customer"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                DashBoard
              </NavLink>
            </div>
            <div
              className="flex mt-2 p-1 items-center  cursor-pointer "
              onClick={() => {
                setAccount(e => {
                  setCard(false);
                  setLoan(false);
                  return !e;
                });
              }}
            >
              <FaRegUserCircle className="mr-2" />
              <p>Accounts</p>
              <span>
                <RiArrowDropRightLine className="text-2xl ms-[4rem]" />
              </span>
            </div>
            {account &&
              [
                "Manage Beneficiary",
                "Amount Transfer",
                "Passbook",
                "Account Statement",
                "Account Details",
              ].map(d => {
                return (
                  <div className="ms-4 p-1  text-[rgb(112,112,112)]">
                    <NavLink
                      to={`/customer/${d}`}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {d}
                    </NavLink>
                  </div>
                );
              })}
            <div
              className="flex mt-2 p-1 items-center  cursor-pointer"
              onClick={() => {
                setLoan(e => {
                  setCard(false);
                  setAccount(false);
                  return !e;
                });
              }}
            >
              <FaHandHoldingDollar className="mr-2" />
              <p>Loans</p>
              <span>
                <RiArrowDropRightLine className="text-2xl ms-[5.5rem]" />
              </span>
            </div>
            {loan &&
              ["Apply Loans", "My Loans"].map(d => {
                return (
                  <div className="ms-4 p-1  text-[rgb(112,112,112)]">
                    <NavLink
                      state={"customerSection"}
                      to="/customer/comingSoon"
                      className={({ isActive }) => (isActive ? "" : "")}
                    >
                      {d}
                    </NavLink>
                  </div>
                );
              })}
            <div
              className="flex mt-2 p-1 items-center cursor-pointer"
              onClick={() => {
                setCard(e => {
                  setAccount(false);
                  setLoan(false);
                  return !e;
                });
              }}
            >
              <LiaIdCardSolid className="mr-2" />
              <p>Cards</p>
              <span>
                <RiArrowDropRightLine className="text-2xl ms-[5.4rem]" />
              </span>
            </div>
            {card &&
              ["Credit Cards"].map(d => {
                return (
                  <div className="ms-4 p-1  text-[rgb(112,112,112)]">
                    <NavLink
                      state={"customerSection"}
                      to="/customer/comingSoon"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {d}
                    </NavLink>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
      <div className="text-center">
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center mt-52"
          onClick={() => {
            dispatch(logout());
            window.location.assign("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LeftSection;
