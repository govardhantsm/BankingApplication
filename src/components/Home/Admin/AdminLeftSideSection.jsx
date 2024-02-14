import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RiDashboard3Line } from "react-icons/ri";
import { CiBank } from "react-icons/ci";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/reducers/auth/authSlice";

import Button from "../../../utilities/Button";
import { RiArrowDropDownLine } from "react-icons/ri";

const AdminLeftSideSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [bank, setBank] = useState(false);
  let [md, setMd] = useState(false);
  const data = JSON.parse(sessionStorage.getItem("myObject"));

  return (
    <>
      <section className="text-sm h-[100%] w-[100%] bg-black">
        {
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
            <p className="mt-1 text-[rgb(112,112,112)]">{data?.role}</p>
          </div>
        }

        {/* <li className="list-none">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
        <div className="flex mt-8"><RiDashboard3Line className="ms-6 text-xl mt-[0.1rem]" /> <p className="ms-4">Dashboard</p></div>
        </NavLink>
      </li> */}
        <div
          className="flex mt-6 items-center cursor-pointer"
          onClick={() =>
            setBank(e => {
              setMd(false);
              return !e;
            })
          }
        >
          <div>
            <CiBank className="ms-6 text-xl" />
          </div>
          <p className="ms-4 ">Bank</p>
          <span>
            {bank ? (
              <RiArrowDropDownLine className="text-2xl ms-[8rem]" />
            ) : (
              <RiArrowDropRightLine className="text-2xl ms-[8rem]" />
            )}
            {/* <RiArrowDropRightLine className="text-2xl ms-[8rem]" /> */}
          </span>
        </div>
        {bank && (
          <div className="ms-16 mt-2">
            <li className="list-none text-[rgb(112,112,112)]">
              <NavLink
                to="/adminlayout/create-bank"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Create Bank
              </NavLink>
            </li>
            <li className="list-none mt-2 text-[rgb(112,112,112)]">
              <NavLink
                to="/adminlayout/all-bank"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                All bank
              </NavLink>
            </li>
          </div>
        )}
        <div
          className="flex mt-3 items-center cursor-pointer"
          onClick={() =>
            setMd(e => {
              setBank(false);
              return !e;
            })
          }
        >
          <div>
            <IoMail className="text-xl ms-6" />
          </div>
          <p className="ms-4">Managing Director</p>
          {/* <span>
            <RiArrowDropRightLine className="text-2xl ms-[1.8rem]" />
          </span> */}
          <span>
            {md ? (
              <RiArrowDropDownLine className="text-2xl ms-[1.8rem]" />
            ) : (
              <RiArrowDropRightLine className="text-2xl ms-[1.8rem]" />
            )}
          </span>
        </div>
        {md && (
          <div className="ms-16 mt-2">
            <li className="list-none text-[rgb(112,112,112)]">
              <NavLink
                to="/adminlayout/create-md"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Create MD
              </NavLink>
            </li>
            <li className="list-none mt-2 text-[rgb(112,112,112)]">
              <NavLink
                to="/adminlayout/all-md"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                All MD
              </NavLink>
            </li>
          </div>
        )}

        <div className="ms-20 mt-[18rem]">
          <button
            className=" text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
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

export default AdminLeftSideSection;
