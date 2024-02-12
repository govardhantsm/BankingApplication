import React from "react";
import { Outlet } from "react-router-dom";

const ManageBeneficiary = () => {
  return (
    <section>
      <div className=" m-6">
        <h2>Manage Beneficiary</h2>
      </div>
      <div>
        <ul className="flex gap-4 ml-6">
          <li>Add Beneficiary</li>
          <li>Modify Beneficiary</li>
          <li>Delete Beneficiary</li>
          <li>View Beneficiary</li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default ManageBeneficiary;
