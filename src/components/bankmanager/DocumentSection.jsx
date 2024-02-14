import React, { useState, useEffect } from "react";
import { PiFilesLight } from "react-icons/pi";
import file from "../../images/submit.png";
import useGetBm from "../../utils/useGetBm";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  createAccount,
  createAccountWithFile,
} from "../../redux/reducers/bankmanager/bankManagerSlice";
const DocumentSection = () => {
  const data = JSON.parse(sessionStorage.getItem("myObject"));
  let { state } = useLocation();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let [file, setFile] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("files", file);

    state.branchId = data?.branchId;
    dispatch(createAccount(state)).then(x => {
      dispatch(createAccountWithFile(formData));
    });

    navigate(`${localStorage.getItem("path")}`);
  };
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section data-aos="zoom-in">
      <div className="flex flex-col  ">
        <label htmlFor="file" className=" text-gray-500 text-[0.9rem] pb-3">
          ID Type
        </label>
        <select
          name="idtype"
          id="idtype"
          className=" w-[30rem] border-2 rounded  "
        >
          <option disabled value="" className="text-gray-400">
            -- Select The Document Type--
          </option>
          <option value="VOTER_ID">Voter_id</option>
          <option value="ADHAR_CARD">Adhar_Card</option>
          <option value="PANCARD">Pan_Card</option>
          <option value="PASSPORT">Passport</option>
        </select>

        <div className="flex items-center mt-4">
          <label className=" w-[35rem] border-2 bg-blue-100 border-blue-700 h-[15rem] border-dashed rounded-[5px] text-[10px] ">
            <div className="flex flex-col items-center justify-center mt-4">
              {/* <PiFilesLight className="text-9xl  text-gray-500" /> */}
              <img src={file} alt="" className="w-[120px] h-[120px] mt-2" />
              <p className="font-semibold text-xl">Drag and drop an Image</p>
              <p className="text-xs ml-3 text-slate-500">
                or to <span className="text-blue-900 ">Browse</span> choose a
                file
              </p>
              <p className="text-xs ml-3 text-slate-500">PNG, JPG, PDF</p>
            </div>
            <input
              type="file"
              className="hidden"
              onChange={e => setFile(e.target.files[0])}
            />
          </label>
        </div>
      </div>
      <section className=" flex gap-2 mr-4 items-center justify-end text-[14px]">
        <NavLink
          state={state}
          to="/bankmanager/create-account/ServiceDetails"
          className="border-[1px] px-3 py-1 rounded bg-gray-300 hover:bg-blue-500 hover:text-white"
        >
          Previous
        </NavLink>
        {/* <NavLink
     state={payload}
     to= {data.accountType ?"/bankmanager/create-account/DocumentSection":"#"} 
     className="border-[1px] px-3 py-1 rounded bg-gray-300 hover:bg-blue-500 hover:text-white"
     >
    <button>Next</button>
     </NavLink> */}
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 "
          onClick={handleSubmit}
        >
          submit
        </button>
      </section>
    </section>
  );
};

export default DocumentSection;
