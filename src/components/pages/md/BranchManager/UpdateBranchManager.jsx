import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../../../utilities/Button";
import { Country, State, City } from "country-state-city";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  getBranchManagerById,
  updateBranchManager,
} from "../../../../redux/services/managingDirectorThunk/mdBranchManagerThunk/MdBranchManagerThunk";
import toast from "react-hot-toast";

const UpdateBranchManager = () => {
  let { employeeId } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [cou, setCon] = useState(null);
  let [stat, setStat] = useState(null);

  let [updatedState, setUpdatedState] = useState();
  useEffect(() => {
    dispatch(getBranchManagerById(employeeId)).then(x => {
      console.log(x.payload.data);
      setUpdatedState(x.payload.data);
    });
  }, [employeeId]);

  const handleChange = e => {
    if (Object.keys(updatedState.address).includes(e.target.name)) {
      setUpdatedState({
        ...updatedState,
        address: { ...updatedState.address, [e.target.name]: e.target.value },
      });
    } else {
      setUpdatedState({
        ...updatedState,
        [e.target.name]: e.target.value,
      });
    }
  };
  let handleSubmit = e => {
    e.preventDefault();

    if (isValidation()) {
      dispatch(updateBranchManager(updatedState)).then(x => {
        if (x.payload)
        {
          navigate("/mdlayout/all-branchManager");
          toast.success("updated successfully");
          }
      });

      // window.location.reload();
      // 
    }
  };

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  // validation:
  let isValidation = () => {
    if (
      /^[0-9]+$/.test(updatedState?.address.pincode) &&
      /^[A-Za-z\s]+$/.test(updatedState.name) &&
      /^[0-9]+$/.test(updatedState.phoneNumber)
    )
      return (
        updatedState.name &&
        updatedState.phoneNumber &&
        updatedState.email &&
        updatedState.gender &&
        updatedState.dateOfBirth &&
        updatedState.address.addressLine &&
        updatedState?.address.pincode &&
        updatedState?.address.state &&
        updatedState?.address.country &&
        updatedState?.address.city
      );
  };

  return (
    <section className="h-[100%] w-[100%] relative" data-aos="zoom-in">
      <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold">
          Update Branch Manager
        </div>
        <form className="p-2 ps-4" onSubmit={handleSubmit}>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              Name
            </label>
            <div className="w-[80%]">
              <input
                className="w-[100%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="text"
                placeholder="Enter Name"
                id="name"
                name="name"
                value={updatedState && updatedState.name}
                onChange={handleChange}
              />
              {!/^[A-Za-z\s]+$/.test(updatedState?.name) &&
              updatedState.name ? (
                <p className="text-red-600 text-xm">
                  Enter only Alphabets value
                </p>
              ) : (
                ""
              )}
            </div>
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
              value={updatedState && updatedState.email}
              // onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              Phone number
            </label>
            <div className="w-[80%]">
              <input
                className=" w-[100%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="tel"
                pattern="[0-9]{10}"
                placeholder="Enter Name"
                id="name"
                name="phoneNumber"
                value={updatedState && updatedState.phoneNumber}
                onChange={handleChange}
              />
              {!/^[0-9]+$/.test(updatedState?.phoneNumber) &&
              updatedState?.phoneNumber ? (
                <p className="text-red-600 text-xm">Enter only numeric value</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchaddress" className="text-[rgb(145,142,143)]">
              Address
            </label>
            <textarea
              className="w-[80%] pt-1 ps-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              id="branchaddress"
              type="text"
              name="addressLine"
              value={updatedState && updatedState?.address?.addressLine}
              onChange={handleChange}
              cols={30}
              rows={3}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              Country
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="country"
              id="country"
              value={updatedState && updatedState?.address?.country}
              onChange={e => {
                console.log(e.target.value);
                setCon(
                  Country.getAllCountries().filter(ele => {
                    return ele.name == e.target.value;
                  })[0].isoCode
                );
                handleChange(e);
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

          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              State
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="state"
              id="state"
              value={updatedState && updatedState?.address?.state}
              onChange={e => {
                setStat(
                  State.getStatesOfCountry(cou).find(
                    ele => ele.name === e.target.value
                  )?.isoCode
                );
                setStat(e => {
                  console.log(e);
                });
                setUpdatedState({
                  ...updatedState,
                  address: {
                    ...updatedState.address,
                    [e.target.name]: e.target.value,
                  },
                });
              }}
            >
              <option disabled value="" className="text-gray-400">
                -- Select The State --
              </option>
              {State.getStatesOfCountry(
                cou == null
                  ? Country.getAllCountries().filter(ele => {
                      return ele.name == updatedState?.address?.country;
                    })[0]?.isoCode
                  : cou
              )?.map(region => (
                <option key={region.isoCode} value={region.name}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              City
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="city"
              id="city"
              value={updatedState && updatedState?.address?.city}
              onChange={e => {
                handleChange(e);
              }}
            >
              <option disabled value="" className="text-gray-400">
                -- Select The City --
              </option>

              {City.getCitiesOfState(
                cou == null
                  ? Country.getAllCountries().filter(ele => {
                      return ele.name == updatedState?.address?.country;
                    })[0]?.isoCode
                  : cou,
                stat == null
                  ? State.getStatesOfCountry(
                      cou == null
                        ? Country.getAllCountries().filter(ele => {
                            return ele.name == updatedState?.address?.country;
                          })[0]?.isoCode
                        : cou
                    ).filter(ele => {
                      return ele.name == updatedState?.address?.state;
                    })[0]?.isoCode
                  : stat
              ).map(city => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              Pincode
            </label>
            <div className="w-[80%]">
              <input
                className="w-[100%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="tel"
                pattern="[0-9]{6}"
                placeholder="Enter here..."
                id="pincode"
                name="pincode"
                value={updatedState && updatedState.address.pincode}
                onChange={handleChange}
              />
              {!/^[0-9]+$/.test(updatedState?.address.pincode) &&
              updatedState?.address.pincode ? (
                <p className="text-red-600 text-xm">Enter only numeric value</p>
              ) : (
                ""
              )}
              {updatedState?.address.pincode?.length > 6 ? (
                <p className="text-red-600 text-xm">Enter only 6 value</p>
              ) : (
                ""
              )}
            </div>
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
                checked={"male" === updatedState?.gender?.toLowerCase()}
                className=" w-4 h-4"
                onChange={handleChange}
              />
              <label htmlFor="male" className="ms-2">
                MALE
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={"female" === updatedState?.gender?.toLowerCase()}
                className="ms-4 w-4 h-4"
                onChange={handleChange}
              />
              <label htmlFor="female" className="ms-2">
                FEMALE
              </label>
              <input
                type="radio"
                id="others"
                name="gender"
                value="others"
                checked={"others" === updatedState?.gender?.toLowerCase()}
                className="ms-4 w-4 h-4"
                onChange={handleChange}
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
                name="dateOfBirth"
                value={updatedState && updatedState?.dateOfBirth?.substr(0, 10)}
                onChange={handleChange}
                className="text-base border-2 px-2 py-1 rounded-md w-[50%] "
              />
            </div>
          </section>
          <div className="flex justify-end pt-4">
            <Button type="submit" name="Update BM"></Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default UpdateBranchManager;
