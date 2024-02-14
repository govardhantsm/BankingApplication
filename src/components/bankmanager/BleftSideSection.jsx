import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";


import { RiDashboard3Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { logout } from "../../redux/reducers/auth/authSlice";

import { LiaIdCardSolid } from "react-icons/lia";
import { FaHandHoldingDollar } from "react-icons/fa6";

const BleftSideSection = () => {
  let loc = useLocation();
  
  let [account, setAccount] = useState(false);
  let [loan, setLoan] = useState(false);
  let [card, setCard] = useState(false);
  return (
    <div className="flex items-center justify-between flex-col h-[100%]">
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
          <p className="mt-3">{loc.state.branchManagerName}</p>
          <p className="mt-1 text-[rgb(112,112,112)]">
            {loc.state.role == "BRANCH_MANAGER"?"BRANCH MANAGER":""}
          </p>
        </div>
      </section>
      <section className="h-[65%]">
        <div className="ms-8 mt-6">
          <div className="p-1 flex items-center ">
            <RiDashboard3Fill className="mr-2" />
            <NavLink
              to="/bankmanager"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              DashBoards
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
              {account ? (
                <RiArrowDropDownLine className="text-2xl ms-[3.8rem]" />
              ) : (
                <RiArrowDropRightLine className="text-2xl ms-[3.8rem]" />
              )}
            </span>
          </div>
          {account &&
            [
              "All Accounts",
              "Savings Accounts",
              "Current Accounts",
              "Loan Accounts",
            ].map(d => {
              return (
                <div className="ms-4 p-1  text-[rgb(112,112,112)]">
                  <NavLink
                    to={`/bankmanager/${d}`}
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
              {loan ? (
                <RiArrowDropDownLine className="text-2xl ms-[5.6rem]" />
              ) : (
                <RiArrowDropRightLine className="text-2xl ms-[5.6rem]" />
              )}
            </span>
          </div>
          {loan &&
            [
              "All Loans",
              "Personal Loans",
              "Home Loans",
              "Educational Loans",
              "Vehicle Loans",
            ].map(d => {
              return (
                <div className="ms-4 p-1  text-[rgb(112,112,112)]">
                  <NavLink
                    to={`/bankmanager/${d}`}
                    className={({ isActive }) =>
                      isActive ? "bg-gray-600" : ""
                    }
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
              {card ? (
                <RiArrowDropDownLine className="text-2xl ms-[5.5rem]" />
              ) : (
                <RiArrowDropRightLine className="text-2xl ms-[5.5rem]" />
              )}
            </span>
          </div>
          {card &&
            ["All Cards", "Credit Cards", "Debit Cards"].map(d => {
              return (
                <div className="ms-4 p-1  text-[rgb(112,112,112)]">
                  <NavLink
                    to={`/bankmanager/${d}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {d}
                  </NavLink>
                </div>
              );
            })}
        </div>
      </section>
      <div className="text-center">
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center"
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

export default BleftSideSection;
