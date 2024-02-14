import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiBank } from "react-icons/ci";
import { RiArrowDropRightLine, RiDashboard2Fill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/reducers/auth/authSlice";
import Spinner from "../../pages/spinner/Spinner";
import { RiDashboard3Fill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { MdApproval } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LiaIdCardSolid } from "react-icons/lia";
import useGetMd from "../../../utils/useGetMd";

const MdLeftsideSection = () => {
  //const user = useGetProfile();

  // const user = useGetMd();
 const data = JSON.parse(sessionStorage.getItem("myObject"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Branch, setBranch] = useState(false);
  const [BankManager, setBankManager] = useState(false);
  const [Approvals, setApprovals] = useState(false);
  const [Accounts, setAccounts] = useState(false);
  const [Loans, setLoans] = useState(false);
  const [Cards, setCards] = useState(false);

  return (
    <>
      <section className="text-sm h-[100%] w-[100%] bg-black flex justify-between flex-col">
        
        <div className="flex flex-col items-center h-[20%]">
          <img
            src={
              // user?.avatar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAK2Ud4gQr9pQFT6rc3xbeq74MhZe7bOdvQ&usqp=CAU"
            }
            alt=""
            className="h-[4rem] w-[4rem] rounded-full mt-5"
          />
          <p className="mt-3">{data?.name}</p>
          <p className="mt-1 text-[rgb(112,112,112)]">
            {data?.role == "MANAGING_DIRECTOR"?"MANAGING DIRECTOR":""}
          </p>
          <p className="mt-1 text-[rgb(112,112,112)]"></p>
        </div>
        
        <section className="h-[70%]">
          <div className="flex mt-8 ms-8">
            <NavLink to="/mdlayout">
              <div className="flex ">
                <RiDashboard3Fill className="me-3 mt-[0.15rem]" />
                <p> DashBoard</p>
              </div>
            </NavLink>
          </div>
          <div
            className="flex mt-3 items-center justify-between w-[90%]"
            onClick={() =>
              setBranch(e => {
                setBankManager(false);
                setAccounts(false);
                setApprovals(false);
                setCards(false);
                setLoans(false);
                return !e;
              })
            }
          >
            <p className="ms-8 flex">
              <CiBank className="me-3 text-[0.98rem]" />
              Branch
            </p>
            <span>
              {Branch ? (
                <RiArrowDropDownLine className="text-2xl" />
              ) : (
                <RiArrowDropRightLine className="text-2xl" />
              )}
            </span>
          </div>
          {Branch && (
            <div className="ms-10 mt-2">
              <li className="list-none text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/create-branch"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Create Branch
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/all-branches"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  All branches
                </NavLink>
              </li>
            </div>
          )}
          <div
            className="flex mt-3 items-center justify-between w-[90%]"
            onClick={() =>
              setBankManager(e => {
                setBranch(false);
                setAccounts(false);
                setApprovals(false);
                setCards(false);
                setLoans(false);
                return !e;
              })
            }
          >
            <p className="ms-8 flex ">
              <GrUserManager className="me-3" /> Branch Manager
            </p>
            <span>
              {BankManager ? (
                <RiArrowDropDownLine className="text-2xl" />
              ) : (
                <RiArrowDropRightLine className="text-2xl" />
              )}
            </span>
          </div>
          {BankManager && (
            <div className="ms-10 mt-2">
              <li className="list-none text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/create-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Create Branch Manager
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/all-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  All Branch Manager
                </NavLink>
              </li>
            </div>
          )}
          <div
            className="flex mt-3 items-center justify-between w-[90%]"
            onClick={() =>
              setApprovals(e => {
                setBranch(false);
                setBankManager(false);
                setAccounts(false);
                setCards(false);
                setLoans(false);
                return !e;
              })
            }
          >
            <p className="ms-8 flex">
              <MdApproval className="me-3" />
              Approvals
            </p>
            <span>
              {Approvals ? (
                <RiArrowDropDownLine className="text-2xl" />
              ) : (
                <RiArrowDropRightLine className="text-2xl" />
              )}
            </span>
          </div>
          {Approvals && (
            <div className="ms-10 mt-2">
              <li className="list-none text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/create-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Loan Approvals
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/all-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Card Approvals
                </NavLink>
              </li>
            </div>
          )}
          <div
            className="flex mt-3 items-center justify-between w-[90%]"
            onClick={() =>
              setAccounts(e => {
                setBranch(false);
                setBankManager(false);
                setApprovals(false);
                setCards(false);
                setLoans(false);
                return !e;
              })
            }
          >
            <p className="ms-8 flex">
              <MdAccountCircle className="me-3" />
              Accounts
            </p>
            <span>
              {Accounts ? (
                <RiArrowDropDownLine className="text-2xl" />
              ) : (
                <RiArrowDropRightLine className="text-2xl" />
              )}
            </span>
          </div>
          {Accounts && (
            <div className="ms-10 mt-2">
              <li className="list-none text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/all-accounts"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  All Accounts
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/savings-accounts"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Savings Accounts
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/current-accounts"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Current Accounts
                </NavLink>
              </li>
              {/* <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/loan-accounts"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Loan Accounts
                </NavLink>
              </li> */}
            </div>
          )}
          <div
            className="flex mt-3 items-center justify-between w-[90%]"
            onClick={() =>
              setLoans(e => {
                setBranch(false);
                setBankManager(false);
                setApprovals(false);
                setAccounts(false);
                setCards(false);
                return !e;
              })
            }
          >
            <p className="ms-8 flex">
              <FaHandHoldingDollar className="me-3" />
              Loans
            </p>
            <span>
              {Loans ? (
                <RiArrowDropDownLine className="text-2xl" />
              ) : (
                <RiArrowDropRightLine className="text-2xl" />
              )}
            </span>
          </div>
          {Loans && (
            <div className="ms-10 mt-2">
              <li className="list-none text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/create-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  All Loans
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/all-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Personal Loans
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/all-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home Loans
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/all-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Educational Loans
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/all-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Vehicle Loans
                </NavLink>
              </li>
            </div>
          )}
          <div
            className="flex mt-3 items-center justify-between w-[90%]"
            onClick={() =>
              setCards(e => {
                setBranch(false);
                setBankManager(false);
                setApprovals(false);
                setLoans(false);
                setAccounts(false);

                return !e;
              })
            }
          >
            <p className="ms-8 flex">
              <LiaIdCardSolid className="me-3 mt-[0.15rem] text-[0.95rem]" />
              Cards
            </p>
            <span>
              {Cards ? (
                <RiArrowDropDownLine className="text-2xl" />
              ) : (
                <RiArrowDropRightLine className="text-2xl" />
              )}
            </span>
          </div>
          {Cards && (
            <div className="ms-10 mt-2">
              <li className="list-none text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/create-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  All Cards
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/all-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Credit Cards
                </NavLink>
              </li>
              <li className="list-none mt-2 text-[rgb(112,112,112)]">
                <NavLink
                  to="/mdlayout/all-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Debit Cards
                </NavLink>
              </li>
            </div>
          )}
        </section>
        <div className="text-center">
          <button
            className=" text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </section>
    </>
  );
};

export default MdLeftsideSection;
