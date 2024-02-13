import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import { NavLink } from "react-router-dom";

const PersonalDetails = () => {
  let [cou, setCon] = useState(null);
  let [stat, setStat] = useState(null);

  // console.log(bmProfile)
  const [state, setState] = useState({
    name: "",
    phoneNumber: "",
    fatherName: "",
    motherName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    qualification: "",
    occupationType: "",
    panNumber: "",
    maritalStatus: "",
    annualIncome: "",
    status: "ACTIVE",
    userType: "ACCOUNT_HOLDER",
    addressLine: "",
    pincode: "",
    country: "",
    State: "",
    city: "", 
    primaryAccount: true,
    accountType: "",
    branchId: "",
  });

  let payload = {
    name: state.name,
    fatherName: state.fatherName,
    motherName: state.motherName,
    phoneNumber: state.phoneNumber,
    email: state.email,
    gender: state.gender,
    dateOfBirth: state.dateOfBirth,
    qualification: state.qualification,
    occupationType: state.occupationType,
    panNumber: state.panNumber,
    maritalStatus: state.maritalStatus,
    annualIncome: state.annualIncome,
    branchId: state.branchId,
    status: "ACTIVE",
    userType: "ACCOUNT_HOLDER",
    address: {
      addressLine: state.addressLine,
      pincode: state.pincode,
      country: state.country,
      State: state.State,
      city: state.city,
    },
    accounts: [
      {
        status: "ACTIVE",
        primaryAccount: true,
        accountType: state.account,
      },
    ],
  };

  // validation
  let isValidation = () => {
    return (
      state.name &&
      state.fatherName &&
      state.motherName &&
      state.phoneNumber &&
      state.email &&
      state.gender &&
      state.dateOfBirth &&
      state.qualification &&
      state.occupationType &&
      state.panNumber &&
      state.maritalStatus &&
      state.annualIncome &&
      state.addressLine &&
      state.pincode &&
      state.country &&
      state.city
    );
  };

  return (
    <section>
      <section className=" flex w-[100%] flex-wrap gap-y-3 gap-x-4 h-[21rem] overflow-auto no-scrollbar">
        <div className=" flex flex-col basis-[19rem] ">
          <label htmlFor="firstname" className="text-[15px] pb-2 text-gray-400">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
            value={state.name}
            onChange={e => {
              setState({ ...state, name: e.target.value });
            }}
          />
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label
            htmlFor="middlename"
            className="text-[15px] pb-2 text-gray-400"
          >
            Middle Name
          </label>
          <input
            type="text"
            name="middlename"
            id="middlename"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
            value={state.middlename}
            onChange={e => {
              setState({ ...state, middlename: e.target.value });
            }}
          />
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label htmlFor="lastname" className="text-[15px] pb-2 text-gray-400">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
            value={state.lastname}
            onChange={e => {
              setState({ ...state, lastname: e.target.value });
            }}
          />
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label
            htmlFor="nameprefix"
            className="text-[15px] pb-2 text-gray-400"
          >
            Name Prefix
          </label>
          <select
            name="nameprefix"
            id="nameprefix"
            value={state.nameprefix}
            onChange={e => {
              setState({ ...state, nameprefix: e.target.value });
            }}
            className="border-2 rounded-md focus:outline-none pl-3 p-[0.36rem] text-[rgb(145,142,143)] sm:text-sm sm:leading-6"
          >
            <option value="">--select here--</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </select>
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label
            htmlFor="fatherName"
            className="text-[15px] pb-2 text-gray-400"
          >
            Father Name
          </label>
          <input
            type="text"
            name="fatherName"
            id="fatherName"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
            value={state.fatherName}
            onChange={e => {
              setState({ ...state, fatherName: e.target.value });
            }}
          />
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label
            htmlFor="motherName"
            className="text-[15px] pb-2 text-gray-400"
          >
            Mother Name
          </label>
          <input
            type="text"
            name="motherName"
            id="motherName"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
            value={state.motherName}
            onChange={e => {
              setState({ ...state, motherName: e.target.value });
            }}
          />
        </div>
        <div className="text-[rgb(145,142,143)] w-[25.5%]">
          <div className="mb-4">
            <label htmlFor="gender">Gender</label>
          </div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            className="w-4 h-4"
            onChange={e => {
              setState({ ...state, gender: e.target.value });
            }}
          />
          <label htmlFor="male" className="ms-2">
            MALE
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            className="ms-4 w-4 h-4"
            onChange={e => {
              setState({ ...state, gender: e.target.value });
            }}
          />
          <label htmlFor="female" className="ms-2">
            FEMALE
          </label>
          <input
            type="radio"
            id="others"
            name="gender"
            value="others"
            className="ms-4 w-4 h-4"
            onChange={e => {
              setState({ ...state, gender: e.target.value });
            }}
          />
          <label htmlFor="others" className="ms-2">
            OTHERS
          </label>
        </div>
        <div className="flex flex-col w-[25.5%] ">
          <label htmlFor="dob" className="text-[15px] pb-2 text-gray-400">
            DOB
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={state.dateOfBirth}
            onChange={e => {
              setState({ ...state, dateOfBirth: e.target.value });
            }}
            className="text-sm border-2 px-2 py-[0.33rem] rounded-md text-gray-400 "
          />
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label
            htmlFor="maritalstatus"
            className="text-[15px] pb-2 text-gray-400"
          >
            Marital Status
          </label>
          <select
            name="maritalstatus"
            id="maritalstatus"
            value={state.maritalStatus}
            onChange={e => {
              setState({ ...state, maritalStatus: e.target.value });
            }}
            className="border-2 rounded-md focus:outline-none pl-3 p-[0.36rem] text-[rgb(145,142,143)] sm:text-sm sm:leading-6"
          >
            <option value="">--select here--</option>
            <option value="SINGLE">SINGLE</option>
            <option value="MARRIED">MARRIED</option>
            <option value="WIDOWED">WIDOWED</option>
            <option value="DIVORCED">DIVORCED</option>
            <option value="SEPARATED">SEPARATED</option>
          </select>
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label htmlFor="email" className="text-[15px] pb-2 text-gray-400">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
            value={state.email}
            onChange={e => {
              setState({ ...state, email: e.target.value });
            }}
          />
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label htmlFor="panNumber" className="text-[15px] pb-2 text-gray-400">
            PAN Number
          </label>
          <input
            type="text"
            name="panNumber"
            id="panNumber"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
            value={state.panNumber}
            onChange={e => {
              setState({ ...state, panNumber: e.target.value });
            }}
          />
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label htmlFor="phone" className="text-[15px] pb-2 text-gray-400">
            TelePhone
          </label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            id="phoneNumber"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={e => {
              setState({ ...state, phoneNumber: e.target.value });
            }}
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
          />
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label
            htmlFor="qualification"
            className="text-[15px] pb-2 text-gray-400"
          >
            Educational Qualification
          </label>
          <select
            name="qualification"
            id="qualification"
            value={state.qualification}
            onChange={e => {
              setState({ ...state, qualification: e.target.value });
            }}
            className="border-2 rounded-md focus:outline-none pl-3 p-[0.36rem] text-[rgb(145,142,143)] sm:text-sm sm:leading-6"
          >
            <option value="">--select here--</option>
            <option value="GRADUATE">GRADUATE</option>
            <option value="UNDERGRADUATE">UNDERGRADUATE</option>
            <option value="PRIMARY">PRIMARY</option>
            <option value="SECONDARY">SECONDARY</option>
          </select>
        </div>
        <div className=" flex flex-col basis-[19rem]">
          <label
            htmlFor="occupation"
            className="text-[15px] pb-2 text-gray-400"
          >
            Occupation Type
          </label>
          <select
            name="occupation"
            id="occupation"
            value={state.occupationType}
            onChange={e => {
              setState({ ...state, occupationType: e.target.value });
            }}
            className="border-2 rounded-md focus:outline-none pl-3 p-[0.36rem] text-[rgb(145,142,143)] sm:text-sm sm:leading-6"
          >
            <option value="">--select here--</option>
            <option value="EMPLOYED">EMPLOYED</option>
            <option value="UNEMPLOYED">UNEMPLOYED</option>
            <option value="AGRICULTURE">AGRICULTURE</option>
          </select>
        </div>

        <div className=" flex flex-col basis-[19rem]">
          <label htmlFor="income" className="text-[15px] pb-2 text-gray-400">
            Annual Income
          </label>
          <input
            type="text"
            name="annualIncome"
            id="annualIncome"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
            value={state.annualIncome}
            onChange={e => {
              setState({ ...state, annualIncome: e.target.value });
            }}
          />
        </div>
        <div className=" flex flex-col basis-[39rem]">
          <label htmlFor="address" className="text-[15px] pb-2 text-gray-400">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            className="border-2 rounded-md focus:outline-none pl-2 p-1"
            value={state.addressLine}
            onChange={e => {
              setState({ ...state, addressLine: e.target.value });
            }}
          />
        </div>
        <div className="flex justify-between flex-col mb-6">
          <label htmlFor="country" className="text-[15px] pb-2 text-gray-400">
            Country
          </label>
          <select
            className="border-2 rounded-md focus:outline-none pl-5 p-[0.38rem] text-[rgb(145,142,143)] sm:text-sm sm:leading-6"
            name="country"
            id="country"
            value={state.country}
            onChange={e => {
              setCon(
                Country.getAllCountries().filter(ele => {
                  return ele.name == e.target.value;
                })[0].isoCode
              );
              setState({ ...state, country: e.target.value });
            }}
          >
            <option disabled value="" className="text-gray-400">
              -- Select The Country --
            </option>
            {Country.getAllCountries().map(city => {
              return <option value={city.name}>{city.name}</option>;
            })}
          </select>
        </div>

        <div className="flex flex-col basis-[19rem]">
          <label htmlFor="region" className="text-[15px] pb-2 text-gray-400">
            State
          </label>
          <select
            className="border-2 rounded-md focus:outline-none pl-3 p-[0.38rem] text-[rgb(145,142,143)] sm:text-sm sm:leading-6"
            name="region"
            id="region"
            value={state.region}
            onChange={e => {
              const selectedState = e.target.value;
              setStat(
                State.getStatesOfCountry(cou).find(
                  ele => ele.name === selectedState
                )?.isoCode
              );
              setState({ ...state, region: selectedState });
            }}
          >
            <option disabled value="" selected className="text-gray-400">
              -- Select The State --
            </option>
            {State.getStatesOfCountry(cou).map(region => (
              <option key={region.isoCode} value={region.name}>
                {region.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col basis-[19rem]">
          <label htmlFor="city" className="text-[15px] pb-2 text-gray-400">
            City
          </label>
          <select
            className="border-2 rounded-md focus:outline-none pl-3 p-[0.38rem] text-[rgb(145,142,143)] sm:text-sm sm:leading-6"
            name="city"
            id="city"
            value={state.city}
            onChange={e => {
              setState({ ...state, city: e.target.value });
            }}
          >
            <option disabled value="" className="text-gray-400">
              -- Select The City --
            </option>

            {City.getCitiesOfState(cou, stat).map(city => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col basis-[19rem]">
          <label
            htmlFor="pincode"
            className="text-[rgb(145,142,143)] text-[15px] pb-2"
          >
            Pincode
          </label>
          <input
            className="border-2 rounded-md focus:outline-none pl-3 p-[0.265rem] text-[rgb(145,142,143)] sm:text-sm sm:leading-6"
            type="tel"
            pattern="[0-9]{6}"
            placeholder="Enter pincode"
            id="pincode"
            name="pincode"
            value={state.pincode}
            onChange={e => {
              setState({ ...state, pincode: e.target.value });
            }}
          />
        </div>
      </section>
      <section className="flex gap-2 mr-4 items-center justify-end text-[14px]">
        <NavLink
          state={payload}
          to={
            isValidation() ? "/bankmanager/create-account/ServiceDetails" : "#"
          }
          className={`border-[1px] px-3 py-1 rounded ${
            isValidation()
              ? "bg-gray-300 hover:bg-blue-500 hover:text-white"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isValidation()}
        >
          Next
        </NavLink>
      </section>
    </section>
  );
};

export default PersonalDetails;
