import React, { Fragment, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Button from "../../../../utilities/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import AOS from "aos";
import "aos/dist/aos.css";
import useGetMd from "../../../../utils/useGetMd";
import toast from "react-hot-toast";
import { createBranchManager, getAllUnassignedBranch } from './../../../../redux/services/managingDirectorThunk/mdBranchManagerThunk/MdBranchManagerThunk';
const CreateBranchManager = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let data = useGetMd();
  let [bankId, setBankId] = useState(null);
  let [branch, setBranch] = useState(null);
  let [cou, setCon] = useState(null);
  let [stat, setStat] = useState(null);
  const [state, setState] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    addressLine: "",
    pincode: "",
    branchId: "",
    country: "",
  state: "",
    city: "",
  });
  useEffect(() => {
    setBankId(data && data?.data?.data?.bankId);
  }, [data, bankId]);

  useEffect(() => {
    if (bankId) {
      let test = dispatch(getAllUnassignedBranch(bankId));
      test.unwrap().then((x) => setBranch(x.data));
    }
  }, [bankId]);

  let payload = {
    name: state.name,
    phoneNumber: state.phoneNumber,
    email: state.email,
    gender: state.gender,
    dateOfBirth: state.dateOfBirth,
    branchId: state.branchId,
    address: {
      addressLine: state.addressLine,
      pincode: state.pincode,
      country: state.country,
      state: state.state,
      city: state.city,
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBranchManager(payload));
    navigate("/mdlayout/all-branchManager");
    toast.success("created successfully");
    // window.location.reload()
  };

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="h-[95%] w-[100%] relative" data-aos="zoom-in">
      <section className="rounded-md border-2 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold ">
          Create Branch Manager
        </div>
        <form className="ps-4" onSubmit={handleSubmit}>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              Name
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter Name"
              id="name"
              name="name"
              value={state.name}
              onChange={(e) => {
                setState({ ...state, name: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="email" className="text-[rgb(145,142,143)]">
              Email
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="email"
              placeholder="Enter Email"
              id="email"
              name="email"
              value={state.email}
              onChange={(e) => {
                setState({ ...state, email: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="phonenumber" className="text-[rgb(145,142,143)]">
              Phone number
            </label>
            <input
              className=" w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter Phonenumber"
              id="phonenumber"
              name="phonenumber"
              value={state.phoneNumber}
              onChange={(e) => {
                setState({ ...state, phoneNumber: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchaddress" className="text-[rgb(145,142,143)]">
              Address
            </label>
            <textarea
              className="w-[80%] pt-1 ps-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              id="branchaddress"
              type="text"
              value={state.addressLine}
              onChange={(e) => {
                setState({ ...state, addressLine: e.target.value });
              }}
              cols={30}
              rows={2}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="country" className="text-[rgb(145,142,143)]">
              Country
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="country"
              id="country"
              value={state.country}
              onChange={(e) => {
                console.log(e.target.value);
                setCon(
                  Country.getAllCountries().filter((ele) => {
                    return ele.name == e.target.value;
                  })[0].isoCode
                );
                setState({ ...state, country: e.target.value });
              }}
            >
              <option disabled value="" className="text-gray-400">
                -- Select The Country --
              </option>
              {Country.getAllCountries().map((city) => {
                return <option value={city.name}>{city.name}</option>;
              })}
            </select>
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="state" className="text-[rgb(145,142,143)]">
              State
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="state"
              id="state"
              value={state.state}
              onChange={(e) => {
                const selectedState = e.target.value;
                setStat(
                  State.getStatesOfCountry(cou).find(
                    (ele) => ele.name === selectedState
                  )?.isoCode
                );
                setState({ ...state, state: selectedState });
              }}
            >
              <option disabled value="" className="text-gray-400">
                -- Select The State --
              </option>
              {State.getStatesOfCountry(cou).map((region) => (
                <option key={region.isoCode} value={region.name}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="city" className="text-[rgb(145,142,143)]">
              City
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="city"
              id="city"
              value={state.city}
              onChange={(e) => {
                setState({ ...state, city: e.target.value });
              }}
            >
              <option disabled value="" className="text-gray-400">
                -- Select The City --
              </option>
              {City.getCitiesOfState(cou, stat).map((city) => {
                return <option value={city.name}>{city.name}</option>;
              })}
            </select>
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="pincode" className="text-[rgb(145,142,143)]">
              Pincode
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{6}"
              placeholder="Enter Pincode"
              id="pincode"
              name="pincode"
              value={state.pincode}
              onChange={(e) => {
                setState({ ...state, pincode: e.target.value });
              }}
            />
          </div>
          <section className="w-[80%] flex ms-64">
            <div className="text-[rgb(145,142,143)] w-[60%]">
              <div className="mb-4">
                <label htmlFor="gender">Gender</label>
              </div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className=" w-4 h-4"
                onChange={(e) => {
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
                onChange={(e) => {
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
                onChange={(e) => {
                  setState({ ...state, gender: e.target.value });
                }}
              />
              <label htmlFor="others" className="ms-2">
                OTHERS
              </label>
            </div>
            <div className="text-[rgb(145,142,143)] w-[100%]">
              <div className="mb-3">
                <label htmlFor="dob">DOB</label>
              </div>
              <input
                type="date"
                id="dob"
                name="dob"
                value={state.dateOfBirth}
                onChange={(e) => {
                  setState({ ...state, dateOfBirth: e.target.value });
                }}
                className="text-base border-2 px-2 py-1 rounded-md w-[50%] "
              />
            </div>
          </section>
          <div className="flex justify-between w-[99%] mb-4 mt-2">
            <div>
              <label htmlFor="banks" className="text-[rgb(145,142,143)]">
                branch
              </label>
            </div>
            <select
              className="block  w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-[rgb(145,142,143)] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              // value={query}
              // onChange={handleQueryChange}

              onChange={(e) => {
                setState({ ...state, branchId: e.target.value });
              }}
            >
              <option>select branch</option>
              {branch?.length >= 0 &&
                branch?.map((branch) => (
                  <Fragment key={branch.branchId}>
                    <option value={branch.branchId}>{branch.branchName}</option>
                  </Fragment>
                ))}
            </select>
          </div>

          <div className="flex justify-end">
            <Button type="submit" name="Create Manager"></Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateBranchManager;
