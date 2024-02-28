import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const RestingPage = () => {
  let loc = useLocation();
  console.log(loc);
  return (
    <section className="h-[83vh] w-[100%] flex justify-center items-center mt-10">
      <div className="text-4xl font-bold rounded text-black mb-6 h-[100%] w-[95%] flex justify-evenly bg-gradient-to-r from-neutral-400 to-orange-200 items-center flex-col">
        <p>Created Succesfully</p>
        <NavLink
          to="/bankmanager/All Accounts"
          className="text-xl p-5 bg-gradient-to-r from-blue-400 to-blue-300 mt-4 rounded-md text-white"
          onCl
        >
          All Account
        </NavLink>
      </div>
    </section>
  );
};

export default RestingPage;
