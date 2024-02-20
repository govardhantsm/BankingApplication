import React from "react";

function AccountDetails() {
  return (
    <div className="bg-gray-50">
      <div className="middle font-semibold text-lg p-2 m-2">
        Account Details
      </div>
      <div className="bottom p-4 ps-10  bg-white ms-4 shadow-md me-8 mb-4">
        <div className="flex text-md font-semibold">
          <p className="pb-4 pe-[100px] text-slate-400">First Name</p>
          <p>Abhishek</p>
        </div>

        <div className="flex font-semibold">
          <p className="pb-4 pe-[103px] text-slate-400">Last Name</p>
          <p>Rampur</p>
        </div>

        <div className="flex font-semibold text-slate-400">
          <p className="pb-4 pe-[122px] ">Address</p>
          <p>
            Indiqube South Mile Building , No.17 and 17,1,S End Rd,Vijayarangam
            Layout,Basavanagudi,Bengaluru,Karnataka 560004
          </p>
        </div>

        <div className="flex font-semibold">
          <p className="pb-4 pe-[142px] text-slate-400">State</p>
          <p>Karnataka</p>
        </div>

        <div className="flex font-semibold">
          <p className="pb-4 pe-[120px] text-slate-400">Country</p>
          <p>India</p>
        </div>

        <div className="flex font-semibold">
          <p className="pb-4 pe-[112px] text-slate-400">Zip Code</p>
          <p>560004</p>
        </div>

        <div className="flex font-semibold">
          <p className="pb-4 pe-[85px] text-slate-400">Date of Birth</p>
          <p>23-05-21</p>
        </div>

        <div className="flex font-semibold">
          <p className="pb-4 pe-[78px] text-slate-400">Display Name</p>
          <p>Master Abhiskek R</p>
        </div>

        <div className="flex font-semibold">
          <p className="pb-4 pe-[85px] text-slate-400">Pan Number</p>
          <p>CFC5785002</p>
        </div>

        <div className="flex font-semibold">
          <p className="pb-4 pe-[135px] text-slate-400">Email</p>
          <p>abhishek@gmail.com</p>
        </div>
        <div className="flex font-semibold">
          <p className="pb-4 pe-[60px] text-slate-400">Mobile Number</p>
          <p>8965412355</p>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
