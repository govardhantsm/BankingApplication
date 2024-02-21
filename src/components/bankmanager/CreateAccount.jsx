import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useGetBm from "../../utils/useGetBm";
import AOS from "aos";
import "aos/dist/aos.css";

const CreateAccount = () => {
  let data = [
    "/bankmanager/All Accounts/PersonalDetails",
    "/bankmanager/All Accounts/ServiceDetails",
    "/bankmanager/All Accounts/DocumentSection",
  ];
  let [personal, setPersonal] = useState(true);
  let [service, setService] = useState(false);
  let [doc, setdoc] = useState(false);

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in">
      <form action="">
        <div className="p-3 pr-8">
          <p className="font-medium">Create Account</p>
          <div className="bg-white mt-3 p-4 w-[100%] ">
            <p className="text-[15px]">FILL THE FORM</p>

            <div className="flex items-center justify-center my-2">
              <NavLink
                to="/bankmanager/create-account/PersonalDetails"
                className={`${
                  personal == true
                    ? " text-blue-100 bg-blue-500 "
                    : " text-blue-500 bg-blue-100 "
                } basis-[15rem] p-3 flex rounded-md m-1`}
                onClick={() => {
                  setPersonal(true);
                  setService(false);
                  setdoc(false);
                }}
              >
                <span
                  className={`${
                    personal == true ? "border-white" : " border-blue-500"
                  } flex items-center justify-center border-2 rounded-full  w-[1.6rem] h-[1.6rem] border-blue-500`}
                >
                  1.
                </span>
                <span className="pl-2 ">Personal Details</span>
              </NavLink>
              <NavLink
                className={`${
                  service == true
                    ? " text-blue-100 bg-blue-500 "
                    : " text-blue-500 bg-blue-100 "
                } basis-[15rem] p-3 flex rounded-md m-1`}
                onClick={() => {
                  setPersonal(false);
                  setService(true);
                  setdoc(false);
                }}
                to="/bankmanager/create-account/ServiceDetails"
              >
                <span
                  className={`${
                    service == true ? "border-white" : " border-blue-500"
                  } flex items-center justify-center border-2 rounded-full  w-[1.6rem] h-[1.6rem] border-blue-500`}
                >
                  2.
                </span>
                <span className="pl-2">Service Details</span>
              </NavLink>
              <NavLink
                className={`${
                  doc == true
                    ? " text-blue-100 bg-blue-500 "
                    : " text-blue-500 bg-blue-100 "
                } basis-[15rem] p-3 flex rounded-md m-1`}
                onClick={() => {
                  setPersonal(false);
                  setService(false);
                  setdoc(true);
                }}
                to="/bankmanager/create-account/DocumentSection"
              >
                <span
                  className={`${
                    doc == true ? "border-white" : " border-blue-500"
                  } flex items-center justify-center border-2 rounded-full  w-[1.6rem] h-[1.6rem] border-blue-500`}
                >
                  3.
                </span>
                <span className="pl-2 ">Document Section</span>
              </NavLink>
            </div>
            <div className="py-2 w-[100%] h-[65vh]">
              <Outlet />
            </div>
            {/* <section className=" flex gap-2 mr-4 items-center justify-end text-[14px]">
            <button className="border-[1px]  px-3 py-1 rounded bg-gray-300 hover:bg-blue-500 hover:text-white">
              Cancel
            </button>
            <button className="border-[1px] px-3 py-1 rounded bg-gray-300 hover:bg-blue-500 hover:text-white">
              previous
            </button>
            <button className="border-[1px] px-3 py-1 rounded bg-gray-300 hover:bg-blue-500 hover:text-white">
              Next
            </button>
          </section> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
