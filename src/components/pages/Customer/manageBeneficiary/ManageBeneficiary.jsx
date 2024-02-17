import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ManageBeneficiary = () => {
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section data-aos="zoom-in">
      <div className=" m-6 ms-8">
        <h2>Manage Beneficiary</h2>
      </div>
      <div>
        <ul className="flex gap-6 ml-8 ">
          <NavLink to="/customer/Manage Beneficiary/add Beneficiary ">
            Add Beneficiary
          </NavLink>
          <NavLink to="#">
            Modify Beneficiary
          </NavLink>
         
          <NavLink to="/customer/Manage Beneficiary/View Beneficiary">
            View Beneficiary
          </NavLink>
        </ul>
      </div>
      <div className=" m-6 ml-8 mt-1 ">
        <Outlet />
      </div>
    </section>
  );
};

export default ManageBeneficiary;
