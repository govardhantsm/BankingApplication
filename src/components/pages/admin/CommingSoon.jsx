import React, { useLayoutEffect } from "react";
import comingSoon from "../../../images/underConstruction.jpg";
import { NavLink, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CommingSoon = () => {
  let location = useLocation();
  let { state } = location;
  console.log(state);

  // Animation:
  useLayoutEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="zoom-in"
      className="flex h-[80vh] w-[80vw] flex-col items-center"
    >
      <div className="h-[80vh] w-[100%] flex justify-center items-center">
        <img
          className="h-[70vh] w-[90%]"
          src={comingSoon}
          alt="loading failed"
        />
      </div>
      <NavLink
        className=" bg-red-500 w-[90%] text-white rounded-md"
        to={
          state == "mdSection"
            ? "/mdlayout"
            : state == "bankManegarSection"
            ? "/bankmanager"
            : "mdSection"
            ? "/customer"
            : ""
        }
      >
        <button className="p-[10px] bg-red-500 w-[100%] text-white rounded-md">
          Go Back
        </button>
      </NavLink>
    </section>
  );
};

export default CommingSoon;
