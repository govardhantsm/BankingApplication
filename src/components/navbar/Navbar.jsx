import React, { useState } from "react";
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

const Navbar = () => {
  let [toggle, setToggle] = useState(false);
  const data = JSON.parse(sessionStorage.getItem("myObject"));
  console.log(data);
  let user;

  let role = data?.role;
  let branchName = data?.branchName;
  let bankName = data?.bankName;
  return (
    <section className="bg-white h-[100%] w-[100%] flex">
      <div className="w-[17%] bg-orange-400 h-[100%] flex items-center justify-center">
        <p className="ml-2 mr-2 text-slate-950 text-center">
          {role === "MANAGING_DIRECTOR"
            ? bankName
            : role === "BRANCH_MANAGER"
            ? bankName:role=="ADMIN"?"BankLauncher"
            : bankName}
        </p>
      </div>
      <div className="flex justify-between w-[83%] h-[100%]">
        <section className="w-[33%] flex justify-evenly items-center">
          {/* <FaBars className="ms-2" /> */}
          {/* <div className="flex">
            <span className="ms-7 ">English</span>
            <span>
              <RiArrowDropDownLine className="text-2xl me-4" />
            </span>
          </div> */}
          {/* <div className="flex">
            <span>
              <input
                type="text"
                placeholder="Search..."
                className="border-2 p-1 rounded-full ps-4 w-[15rem]"
              />
            </span>
            <span className="relative top-2 text-xl right-[2rem] text-slate-500">
              <IoIosSearch />
            </span>
          </div> */}
        </section>
        <section className="mr-6 w-[10%] flex text-2xl justify-between items-center">
          <BsBell className="text-xl" />
          {/* <CiMail /> */}

          {/* <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAK2Ud4gQr9pQFT6rc3xbeq74MhZe7bOdvQ&usqp=CAU"
            }
            alt=""
            className="h-[1.8rem] w-[1.8rem] rounded-full"
          /> */}
          {/* <FaUserTie /> */}
          <div>
            <span className="cursor-pointer" onClick={() => setToggle(!toggle)}>
              <FaUserTie />
            </span>
            {toggle ? (
              <div
                class="shadow-lg w-[auto] rounded-lg p-6 mx-auto my-6 max-w-md  absolute top-[40px] right-[0] z-20 bg-[#707070] text-[#fff] mr-2"
                data-aos="fade-down"
              >
                <div class="flex items-center mb-4 text-[#fff]">
                  <div class="mr-4">
                    <span class="text-5xl ">
                      <FaRegCircleUser />
                    </span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg	">
                      {data?.name || data?.branchManagerName || "NA"}
                    </h3>
                    <p class="text-base	">
                      {data.role === "MANAGING_DIRECTOR"
                        ? "MANAGING DIRECTOR"
                        : data.role === "BRANCH_MANAGER"
                        ? "BRANCH MANAGER"
                        : data.role == "ADMIN"
                        ? "ADMIN"
                        : "" || "NA"}
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <p class="flex">
                      <span className="mr-[10px] mt-1 text-xl">
                        <FaUserCheck />
                      </span>
                      <span class="text-base	">
                        Employee ID:{" "}
                        <span className="ml-2">
                          {data?.managingDirectorId ||
                            data?.branchId ||
                            data?.employeeId ||
                            "NA"}
                        </span>
                      </span>
                    </p>
                    <p class="flex">
                      <span className="mr-[10px] mt-1 text-xl">
                        <MdOutlineMail />
                      </span>
                      <span class="text-base">
                        Email:{" "}
                        <span className="ml-2">{data?.email || "NA"}</span>
                      </span>
                    </p>
                    <div>
                      <p class="flex">
                        <span className="pt-2 mr-[10px] mt-1 text-xl">
                          <FiEdit />
                        </span>
                        <span class="text-base bg-slate-500 w-auto p-2 rounded">
                          <NavLink
                            to={
                              data.role == "ADMIN"
                                ? "/adminlayout/uploadProfile"
                                : data.role == "MANAGING_DIRECTOR"
                                ? "/mdlayout/uploadProfile"
                                : data.role == "BRANCH_MANAGER"
                                ? "/bankmanager/uploadProfile"
                                : ""
                            }
                          >
                            Update Profile Picture
                          </NavLink>
                        </span>
                      </p>

                      <p class="flex">
                        <span className="pt-3 mr-[10px] mt-1 text-xl">
                          <MdOutlineRemoveCircle />
                        </span>
                        <span class="text-base bg-red-400 w-auto p-2 rounded mt-2">
                          <NavLink>Remove Profile Picture</NavLink>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
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
                    <NavLink
                      title="ComingSoon"
                      // to="/adminlayout/all-md"
                      // className={({ isActive }) => (isActive ? "active" : "")}
                    >
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
