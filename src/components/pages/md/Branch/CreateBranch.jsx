import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Button from "../../../../utilities/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import { Country, State, City } from "country-state-city";
import useGetMd from "../../../../utils/useGetMd"
import { createBranch } from './../../../../redux/services/managingDirectorThunk/mdBranchThunk/MdBranchThunk';

const CreateBranch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let bankId = useGetMd()?.data?.data?.bankId;
  let [cou, setCon] = useState(null);
  let [stat, setStat] = useState(null);

  const [state, setState] = useState({
    branchName: "",
    branchEmail: "",
    branchPhoneNumber: "",
    branchType: "",
    addressLine: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
  });

  let payload = {
    branchName: state.branchName,
    branchPhoneNumber: state.branchPhoneNumber,
    branchEmail: state.branchEmail,
    branchType: state.branchType,
    bankId: "",
    address: {
      addressLine: state.addressLine,
      pincode: state.pincode,
      country: state.country,
      city: state.city,
      state:state.state
    },
  };

  const handleSubmit = e => {
    e.preventDefault();
    payload.bankId = bankId;
    dispatch(createBranch(payload)); 
    navigate("/mdlayout/all-branches");
    toast.success("created successfully");
  };

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="h-[100%] w-[100%] relative" data-aos="zoom-in">
      <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold">Create Branch</div>
        <form onSubmit={handleSubmit} className="p-2 ps-4">
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchname" className="text-[rgb(145,142,143)]">
              Branch Name
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter here..."
              id="branchname"
              name="branchname"
              value={state.branchName}
              onChange={e => {
                setState({ ...state, branchName: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branchEmail" className="text-[rgb(145,142,143)]">
              Email
            </label>
            <input
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="email"
              placeholder="Enter Email"
              id="branchEmail"
              name="branchEmail"
              value={state.branchEmail}
              onChange={e => {
                setState({ ...state, branchEmail: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label
              htmlFor="branchPhoneNumber"
              className="text-[rgb(145,142,143)]"
            >
              Phone number
            </label>
            <input
              className=" w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter Phonenumber"
              id="branchPhoneNumber"
              name="branchPhoneNumber"
              value={state.branchPhoneNumber}
              onChange={e => {
                setState({ ...state, branchPhoneNumber: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="addressLine" className="text-[rgb(145,142,143)]">
              Main Branch Address
            </label>
            <textarea
              className="p-2 w-[80%] rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              id=" addressLine"
              name="addressLine"
              value={state.address}
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

          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
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
            >
              <option disabled value="" className="text-gray-400">
                -- Select The State --
              </option>
              {State.getStatesOfCountry(cou).map(region => (
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
              onChange={e => {
                setState({ ...state, city: e.target.value });
              }}
            >
              <option disabled value="" className="text-gray-400">
                -- Select The City --
              </option>
              {City.getCitiesOfState(cou, stat).map(city => {
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
              placeholder="Enter pincode"
              id="pincode"
              name="pincode"
              value={state.pincode}
              onChange={e => {
                setState({ ...state, pincode: e.target.value });
              }}
            />
          </div>

          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="branch_type" className="text-[rgb(145,142,143)]">
              Branch type
            </label>
            <select
              name="branchType"
              id="branchType"
              value={state.branchType}
              onChange={e => {
                setState({ ...state, branchType: e.target.value });
              }}
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-[rgb(145,142,143)] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
            >
              <option value="">--select here--</option>
              <option value="METRO">Metro branches</option>
              <option value="SEMIURBAN">Semi-Urban branches</option>
              <option value="RURAL">Rural branches</option>
            </select>
          </div>
          <div className="flex justify-end pt-4">
            <Button type="submit" name="Create Branch"></Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateBranch;
