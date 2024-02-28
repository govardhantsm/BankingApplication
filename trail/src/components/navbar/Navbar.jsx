import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RiDashboard3Fill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { MdApproval } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LiaIdCardSolid } from "react-icons/lia";
import { CiBank } from "react-icons/ci";
import AOS from "aos";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { IoTrailSignOutline } from "react-icons/io5";
import { MdEmojiObjects } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import axios from "axios";
import { getBmProfilePic } from "../../redux/reducers/bankmanager/bankManagerSlice";

const Navbar = () => {
  const data = JSON.parse(sessionStorage.getItem("myObject"));
  console.log(data);
  let user;

  let role = data?.role;
  let branchName = data?.branchName;
  let bankName = data?.bankName;
  // useEffect(() => {
  //   const fetchImageUrl = async () => {
  //     try {
  //       const response = await getBmProfilePic.get(
  //         `documents/findProfile?id=FF0009&users=Employee`
  //       );
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("An error occurred. Please try again later.");
  //     }
  //   };

  //   fetchImageUrl();
  // }, []);
 
  return (
    <section className="bg-white h-[100%] w-[100vw] flex">
      <div className="w-[18.2vw] bg-orange-400 h-[100%] flex items-center justify-center">
        <p className="ml-2 mr-2 text-slate-950 text-center ">
          {role === "MANAGING_DIRECTOR"
            ? bankName
            : role === "BRANCH_MANAGER"
            ? bankName
            : bankName || data.userType == "ACCOUNT_HOLDER"
            ? data?.bank?.bankName
            : "Bank Launcher"}
        </p>
      </div>
      <div className="flex justify-between w-[83%] h-[100%]">
        <section className="w-[33%] flex justify-evenly items-center"></section>
        <section className="mr-6 w-[10%] flex text-2xl justify-between items-center">
          <BsBell className="text-xl" />

          <div className="group relative">
            <span className="cursor-pointer">
              <FaUserTie />
            </span>
            <div
              className="invisible group-hover:visible shadow-md rounded-lg p-7 max-w-md absolute -right-[50px] z-20 bg-[#b8b8b8] text-[#fff] mr-2"
              data-aos="fade-down"
            >
              <div className="flex w-[auto] items-center mb-4 text-[#fff]">
                <div className="mr-4">
                  <span className="text-5xl">
                    <FaRegCircleUser />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg ">
                    {data?.name || data?.branchManagerName || "NA"}
                  </h3>
                  <p className="text-base font-light w-[170px]">
                    {data.role === "MANAGING_DIRECTOR"
                      ? "MANAGING DIRECTOR"
                      : data.role === "BRANCH_MANAGER"
                      ? "BRANCH MANAGER"
                      : data.role === "ADMIN"
                      ? "ADMIN"
                      : data.role === "CUSTOMER"
                      ? "Customer"
                      : ""}
                  </p>
                </div>
              </div>

              <div>
                <p className="flex w-auto">
                  <span className="mr-[10px] mt-1 text-xl">
                    <FaUserCheck />
                  </span>
                  <span className="text-base flex">
                    <span className="font-semibold w-[110px]">
                      {" "}
                      Employee ID:{" "}
                    </span>
                    <span className="ml-2">
                      {data?.managingDirectorId ||
                        data?.branchId ||
                        data?.employeeId ||
                        data?.userId ||
                        "NA"}
                    </span>
                  </span>
                </p>
                <p className="flex">
                  <span className="mr-[10px] mt-1 text-xl">
                    <MdOutlineMail />
                  </span>
                  <span className="text-base flex">
                    <span className="font-semibold "> Email: </span>
                    <span className="ml-2">{data?.email || "NA"}</span>
                  </span>
                </p>
                <div>
                  <p className="flex">
                    <span className="pt-2 mr-[10px] mt-1 text-xl">
                      <FiEdit />
                    </span>
                    <span className="text-base w-auto p-1 rounded mt-1 border-b-2 border-red-400">
                      <NavLink
                        to={
                          data.role === "ADMIN"
                            ? "/adminlayout/uploadProfile"
                            : data.role === "MANAGING_DIRECTOR"
                            ? "/mdlayout/uploadProfile"
                            : data.role === "BRANCH_MANAGER"
                            ? "/bankmanager/uploadProfile"
                            : ""
                        }
                      >
                        Update Profile Picture
                      </NavLink>
                    </span>
                  </p>

                  <p className="flex">
                    <span className="pt-3 mr-[10px] mt-1 text-xl">
                      <MdOutlineRemoveCircle />
                    </span>
                    <span className="text-base border-b-2 w-[auto] p-1 rounded mt-2  border-red-400">
                      <NavLink>Remove Profile Picture</NavLink>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="group relative">
            <PiDotsNineBold className="me-2" />
            {data.role == "ADMIN" ? (
              <div className="invisible bg-white border-orange-500 group-hover:visible p-2 h-[auto] w-[auto] border-[0.02rem] absolute z-10 right-0 mt-0 rounded">
                <div className="flex flex-col gap-[.3rem] items-center ml-4 mt-3 justify-center h-[60%] w-[80%]">
                  <div className="flex gap-1">
                    <NavLink to="/adminlayout" title="Dashboard">
                      <RiDashboard3Fill className="" />
                    </NavLink>
                    <NavLink
                      title="CreateBank"
                      to="/adminlayout/create-bank"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <MdApproval className="" />
                    </NavLink>
                    <NavLink
                      title="AllBank"
                      to="/adminlayout/all-bank"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <CiBank className="me-3 text-[2rem]" />
                    </NavLink>
                  </div>

                  <div className="flex gap-2">
                    <NavLink
                      title="CreateMD"
                      to="/adminlayout/create-md"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <FaHandHoldingDollar className="" />
                    </NavLink>
                    <NavLink
                      title="AllMD"
                      to="/adminlayout/all-md"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <LiaIdCardSolid className="" />
                    </NavLink>
                    <NavLink title="ComingSoon" to="#">
                      <MdEmojiObjects className="" />
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : data.role == "MANAGING_DIRECTOR" ? (
              <div className="invisible bg-white border-orange-500 group-hover:visible p-2 h-[auto] w-[auto] border-[0.02rem] absolute z-10 right-0 mt-0 rounded">
                <div className="flex gap-3 items-center ml-4 mt-3 justify-center h-[60%] w-[80%] flex-col">
                  <div className="flex gap-2">
                    <NavLink to="/mdlayout" title="Dashboard">
                      <RiDashboard3Fill className="" />
                    </NavLink>
                    <NavLink
                      title="CreateBranch"
                      to="/mdlayout/create-branch"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <MdApproval className="" />
                    </NavLink>
                    <NavLink
                      title="AllBranch"
                      to="/mdlayout/all-branches"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <CiBank className="me-3 text-[2rem]" />
                    </NavLink>
                  </div>

                  <div className="flex  gap-2">
                    <NavLink
                      title="CreateBranchManager"
                      to="/mdlayout/create-branchManager"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <FaHandHoldingDollar className="" />
                    </NavLink>
                    <NavLink
                      title="AllBranchManager"
                      to="/mdlayout/all-branchManager"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <LiaIdCardSolid className="" />
                    </NavLink>
                    <NavLink
                      title="AllAccounts"
                      to="/mdlayout/all-accounts"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <MdAccountCircle className="me-3" />
                    </NavLink>
                  </div>
                  <div className="flex ">
                    <NavLink
                      title="SavingAccounts"
                      to="/mdlayout/savings-accounts"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <MdAccountBalanceWallet className="me-3" />
                    </NavLink>
                    <NavLink
                      title="CurrentAccounts"
                      to="/mdlayout/current-accounts"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <TbMoneybag className="me-3" />
                    </NavLink>
                    <NavLink
                      title="ComingSoon"
                      // to="/mdlayout/current-accounts"
                      // className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <IoTrailSignOutline className="me-3" />
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : data.role == "BRANCH_MANAGER" ? (
              <div className="invisible bg-white border-orange-500 group-hover:visible p-2 h-[auto] w-[auto] border-[0.02rem] absolute z-10 right-0 mt-0 rounded">
                <div className="flex gap-[.3rem] flex-col items-center ml-4 mt-3 justify-center h-[60%] w-[80%]">
                  <div className="flex gap-3">
                    <NavLink to="/bankmanager" title="Dashboard">
                      <RiDashboard3Fill className="" />
                    </NavLink>
                    <NavLink
                      title="CreateAccount"
                      to="/bankmanager/create-account"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <MdApproval className="" />
                    </NavLink>
                    <NavLink
                      title="AllAccounts"
                      to="/bankmanager/All Accounts"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <CiBank className="me-3 text-[2rem]" />
                    </NavLink>
                  </div>

                  <div className="flex gap-3">
                    <NavLink
                      title="SavingAccounts"
                      to="/bankmanager/Savings Accounts"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <FaHandHoldingDollar className="" />
                    </NavLink>
                    <NavLink
                      title="CurrentAccounts"
                      to="/bankmanager/Current Accounts"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <LiaIdCardSolid className="" />
                    </NavLink>
                    <NavLink
                      title="LoanAccounts"
                      to="/bankmanager/Loan Accounts"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <MdAccountCircle className="me-3" />
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : data.userType == "ACCOUNT_HOLDER" ? (
              <div className="invisible bg-white border-orange-500 group-hover:visible p-2 h-[auto] w-[auto] border-[0.02rem] absolute z-10 right-0 mt-0 rounded">
                <div className="flex gap-[.3rem] flex-col items-center ml-4 mt-3 justify-center h-[60%] w-[80%]">
                  <div className="flex gap-5">
                    <NavLink to="/customer" title="Dashboard">
                      <RiDashboard3Fill className="" />
                    </NavLink>
                    <NavLink
                      title="ApplyLoans"
                      to="#"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <FaHandHoldingDollar className="me-3" />
                    </NavLink>
                  </div>

                  <div className="flex gap-3">
                    <NavLink
                      title="PassBook"
                      to="/customer/Passbook"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <MdAccountCircle className="me-3" />
                    </NavLink>
                    <NavLink
                      title="CreditCard"
                      to="#"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <FaCreditCard className="me-3" />
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </button>
        </section>
      </div>
    </section>
  );
};

export default Navbar;
