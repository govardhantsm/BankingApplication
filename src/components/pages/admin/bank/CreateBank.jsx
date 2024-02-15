import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Button from "../../../../utilities/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import { createBank } from "./../../../../redux/services/adminThunk/adminBankThunk/AdminBankThunk";

const CreateBank = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [cou, setCon] = useState(null);
  let [stat, setStat] = useState(null);
  const [state, setState] = useState({
    bankName: "",
    address: "",
    addressId: "",
    addressLine: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
  });

  let payload = {
    bankName: state.bankName,
    address: {
      addressLine: state.addressLine,
      pincode: state.pincode,
      country: state.country,
      state: state.state,
      city: state.city,
    },
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (isValidation()) {
      console.log("clicked");
      dispatch(createBank(payload));
      navigate("/adminlayout/all-bank");
      toast.success("Bank created successfully");
    }
  };

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  let isValidation = () => {
    return (
      state.bankName &&
      state.addressLine &&
      state.pincode &&
      state.country &&
      state.state &&
      state.city
    );
  };

  return (
    <section className="h-[100%] w-[100%] relative" data-aos="zoom-in">
      <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold">Create Bank</div>
        <form onSubmit={handleSubmit} className="p-2 ps-4">
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              Bank Name
            </label>
            {!/^[A-Za-z\s]+$/.test(state.bankName) && state.bankName ? (
              <div>
                <input
                  className="border-red-600 rounded-md py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6 w-[59rem] "
                  type="text"
                  pattern="[A-Za-z\s]+"
                  placeholder="Enter bankname"
                  id="bankname"
                  name="bankname"
                  value={state.bankName}
                  onChange={e => {
                    setState({ ...state, bankName: e.target.value });
                  }}
                />
                <p className="text-red-600 text-xs">Enter only string value</p>
              </div>
            ) : (
              <input
                className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="text"
                pattern="[A-Za-z\s]+"
                placeholder="Enter bankname"
                id="bankname"
                name="bankname"
                value={state.bankName}
                onChange={e => {
                  setState({ ...state, bankName: e.target.value });
                }}
              />
            )}
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchaddress" className="text-[rgb(145,142,143)]">
              Main Branch Address
            </label>
            <textarea
              className="p-2 w-[80%] rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              id="branchaddress"
              name="branchaddress"
              value={state.addressLine}
              onChange={e => {
                setState({ ...state, addressLine: e.target.value });
              }}
              cols={30}
              rows={3}
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
              onChange={e => {
                // console.log(e.target.value);
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
              {/* {Country.getAllCountries().map(li => console.log(li))} */}
              {Country.getAllCountries().map(city => {
                return <option value={city.name}>{city.name}</option>;
              })}
              {/* {console.log(Country.getAllCountries())} */}
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
              onChange={e => {
                const selectedState = e.target.value;
                setStat(
                  State.getStatesOfCountry(cou).find(
                    ele => ele.name === selectedState
                  )?.isoCode
                );
                setState({ ...state, state: selectedState });
              }}
              selected
            >
              <option disabled value="" className="text-gray-400">
                -- Select The State --
              </option>
              {State.getStatesOfCountry(cou).map(state => (
                <option key={state.isoCode} value={state.name}>
                  {state.name}
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

          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="pincode" className="text-[rgb(145,142,143)]">
              Pincode
            </label>
            {!/^[0-9]+$/.test(state.pincode) && state.pincode ? (
              <div>
                <input
                  className="w-[59rem] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
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
                <p className="text-red-600 text-xs">Enter only numeric value</p>
              </div>
            ) : (
              <input
                className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
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
            )}
          </div>

          <div className="flex justify-end pt-4">
            {/* <Button type="submit" name="Create Bank"></Button> */}
            {/* <Button
              type="submit"
              name="Create Bank"
              disabled={!isValidation()}
              style={{ cursor: !isValidation() ? "not-allowed" : "pointer" }}
            ></Button> */}
            {isValidation() ? (
              <button className="p-[10px] m-3 bg-blue-500 text-white rounded">
                Create Bank
              </button>
            ) : (
              <button className="p-[10px] m-3 bg-gray-400 text-white rounded cursor-not-allowed">
                Create Bank
              </button>
            )}
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateBank;
