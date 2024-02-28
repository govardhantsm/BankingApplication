import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import { Country, State, City } from "country-state-city";
import Button from "../../../../utilities/Button";
import {
  getAccountById,
  getUpdateAccount,
} from "./../../../../redux/services/managingDirectorThunk/mdAccountThunk/MdAccountThunk";

const UpdateAccount = () => {
  let [cou, setCon] = useState(null);
  let [stat, setStat] = useState(null);
  const location = useLocation();
  console.log(location);
  let { state } = location;
  console.log(state);
  let { accountNumber } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [updatedState, setUpdatedState] = useState();

  useEffect(() => {
    dispatch(getAccountById(accountNumber)).then(x => {
      console.log(x.payload.data);
      setUpdatedState(x.payload.data);
    });
  }, [accountNumber]);

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
    dispatch(getUpdateAccount(updatedState));
    if (state == "AllAccount") {
      navigate("/mdlayout/all-accounts");
      toast.success("Account updated successfully");
    } else if (state == "SavingAccount") {
      navigate("/mdlayout/savings-accounts");
      toast.success("saving Account updated successfully");
    } else if (state == "CurrentAccount") {
      navigate("/mdlayout/current-accounts");
      toast.success("CurrentAccount updated successfully");
    }
  };

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="h-[100%] w-[100%] relative" data-aos="zoom-in">
      <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold">Update Account</div>
        <form className="p-2 ps-4" onSubmit={handleSubmit}>
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
              value={updatedState && updatedState.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="email" className="text-[rgb(145,142,143)]">
              Email
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="email"
              id="emailID"
              name="emailID"
              value={updatedState && updatedState.emailID}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              Phone number
            </label>
            <input
              className=" w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter Name"
              id="name"
              name="phoneNumber"
              value={updatedState && updatedState.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchaddress" className="text-[rgb(145,142,143)]">
              Address
            </label>
            <textarea
              className="w-[80%] rounded-md border-0 pt-1 ps-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
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
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{6}"
              placeholder="Enter here..."
              id="pincode"
              name="pincode"
              value={updatedState && updatedState.address.pincode}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between w-[99%] mb-4">
            <div className="mb-3">
              <label htmlFor="dob" className="text-[rgb(145,142,143)] ">
                DOB
              </label>
            </div>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="date"
              id="dob"
              name="dateOfBirth"
              value={updatedState && updatedState?.dateOfBirth?.substr(0, 10)}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              Status
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter Name"
              id="status"
              name="status"
              value={updatedState && updatedState.status}
              onChange={handleChange}
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              PanNumber
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              id="panNumber"
              name="panNumber"
              value={updatedState && updatedState.panNumber}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" name="Update Account"></Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default UpdateAccount;
