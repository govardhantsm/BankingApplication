import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { LiaIdCardSolid } from "react-icons/lia";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { logout } from "../../../redux/reducers/auth/authSlice";
import Spinner from "./../spinner/Spinner";
import { getCustomerProfile } from "../../../redux/reducers/customer/customerSlice";

const LeftSection = () => {
  const data = JSON.parse(sessionStorage.getItem("myObject"));
  console.log(data.userId)
  let dispatch = useDispatch();
  let [account, setAccount] = useState(false);

  let [loan, setLoan] = useState(false);
  let [card, setCard] = useState(false);

  let [imageTest, setImageTest] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      fetch(
        `http://106.51.76.167:8082/api/version/v1/documents/findProfile?id=${data?.userId}&users=Customer`
      )
        .then(response => {
          return response.blob(); // Add return statement here
        })
        .then(blob => {
          const file = new File([blob], "filename", {
            type: blob.type,
          });
          setImageTest(file);
        })
        .catch(err => {
          err;
        });
    };
    fetchData();
  }, []);

  return (
    <section className="text-sm h-[100%] w-[100%] bg-black flex flex-col justify-between">
      <div className="flex flex-col items-center mt-5">
        {imageTest == null ? (
          <FaUserCircle className="h-[4rem] w-[4rem] rounded-full mt-5" />
        ) : (
          <img
            src={imageTest !== null ? URL.createObjectURL(imageTest) : ""}
            alt="Image Load Failed"
            className="h-[4rem] w-[4rem] rounded-full"
          />
        )}
        <p className="mt-3">{data?.name}</p>
        <p className="mt-1 text-[rgb(112,112,112)]">Customer</p>
      </div>
      <section className="h-[70%]">
        <div className="flex mt-6 items-center cursor-pointer">
          <RiDashboard3Fill className="text-2xl ms-6 mt-2" />
          <NavLink
            to="/customer"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <p className="ms-4"> DashBoard</p>
          </NavLink>
        </div>
        <div
          className="flex mt-6 items-center cursor-pointer "
          onClick={() => {
            setAccount(e => {
              setCard(false);
              setLoan(false);
              return !e;
            });
          }}
        >
          <FaRegUserCircle className="ms-6 text-xl" />
          <p className="ms-4">Accounts</p>
          <span>
            <RiArrowDropRightLine className="text-2xl ms-[4.5rem]" />
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
              <div className="ms-16 mt-2 p-1  text-[rgb(112,112,112)]">
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
          className="flex mt-6 items-center cursor-pointer"
          onClick={() => {
            setLoan(e => {
              setCard(false);
              setAccount(false);
              return !e;
            });
          }}
        >
          <FaHandHoldingDollar className="ms-6 text-xl" />
          <p className="ms-4">Loans</p>
          <span>
            <RiArrowDropRightLine className="text-2xl ms-[6rem]" />
          </span>
        </div>
        {loan &&
          ["Apply Loans", "My Loans"].map(d => {
            return (
              <div className="ms-16 mt-2 text-[rgb(112,112,112)]">
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
          className="flex mt-6 items-center cursor-pointer"
          onClick={() => {
            setCard(e => {
              setAccount(false);
              setLoan(false);
              return !e;
            });
          }}
        >
          <LiaIdCardSolid className="ms-6 text-xl" />
          <p className="ms-4">Cards</p>
          <span>
            <RiArrowDropRightLine className="text-2xl ms-[6rem]" />
          </span>
        </div>
        {card &&
          ["Credit Cards"].map(d => {
            return (
              <div className="ms-16 mt-2 text-[rgb(112,112,112)]">
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
      </section>
      <div className="text-center">
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center mb-8"
          onClick={() => {
            dispatch(logout());
            window.location.assign("/");
          }}
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default LeftSection;
