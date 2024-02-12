import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ManageBeneficiary = () => {
  return (
    <section>
      <div className=" m-6 ms-8">
        <h2>Manage Beneficiary</h2>
      </div>
      <div>
        <ul className="flex gap-6 ml-8 ">
          <NavLink
            to="/customer/Manage Beneficiary/add Beneficiary "
            
          >
            Add Beneficiary
          </NavLink>
          <NavLink to="/customer/Manage Beneficiary/Modify Beneficiary">
            Modify Beneficiary
          </NavLink>
          <NavLink to="/customer/Manage Beneficiary/Delete Beneficiary">
            Delete Beneficiary
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
