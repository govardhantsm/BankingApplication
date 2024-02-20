import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import { Country, State, City } from "country-state-city";
import {
  getBankById,
  updateBank,
} from "./../../../../redux/services/adminThunk/adminBankThunk/AdminBankThunk";

const UpdateBank = () => {
  let [cou, setCon] = useState(null);
  let [stat, setStat] = useState(null);

  let { bankId } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [updatedState, setUpdatedState] = useState();

  useEffect(() => {
    dispatch(getBankById(bankId)).then(x => setUpdatedState(x.payload.data));
  }, [bankId]);

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
      dispatch(updateBank(updatedState));
      // navigate("/adminlayout/all-bank");
      
    } else {
      toast.error("Please enter all fields");
    }
  };

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  console.log(updatedState);

  const isValidation = () => {
    if (/^[0-9]+$/.test(updatedState?.address?.pincode))
      return (
        updatedState?.address?.addressLine &&
        updatedState.address.country &&
        updatedState.address.state &&
        updatedState.address.city &&
        updatedState?.address?.pincode
      );
  };
  console.log(isValidation());

  return (
    <>
      <section className="h-[100%] w-[100%] relative" data-aos="zoom-in">
        <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
          <div className="ps-4 pt-3 uppercase font-semibold">update Bank</div>

          <form className="p-2 ps-4" onSubmit={handleSubmit}>
            <div className="flex justify-between w-[99%] mb-4">
              <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
                Bank Name
              </label>

              <input
                className="w-[80%] pointer-events-none opacity-40 cursor-not-allowed rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                type="text"
                pattern="[A-Za-z\s]+"
                placeholder="Enter here..."
                id="bankname"
                name="bankName"
                value={updatedState && updatedState.bankName}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between w-[99%] mb-4">
              <label
                htmlFor="branchaddress"
                className="text-[rgb(145,142,143)]"
              >
                Main Branch Address
              </label>

              <textarea
                className="w-[80%] pt-1 ps-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                id="adress"
                cols={30}
                rows={3}
                name="addressLine"
                value={updatedState && updatedState.address.addressLine}
                onChange={handleChange}
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
              <label htmlFor="pincode" className="text-[rgb(145,142,143)]">
                Pincode
              </label>
              {!/^[0-9]+$/.test(updatedState?.address?.pincode) &&
              updatedState?.address?.pincode ? (
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
                  <p className="text-red-600 text-xm">
                    Enter only numeric value
                  </p>
                </div>
              ) : (
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
              )}
            </div>
            <div className="flex justify-end pt-4">
              {isValidation() ? (
                <button className="text-white border-2 border-orange-400 bg-orange-400 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Update Bank
                </button>
              ) : (
                <button className="text-white border-2 border-orange-300 bg-orange-300 hover:border-2 hover:border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-not-allowed">
                  Update Bank
                </button>
              )}
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default UpdateBank;
