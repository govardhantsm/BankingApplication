import React from "react";
import Button from "../../../utilities/Button";
import { useNavigate } from "react-router";

const RestingComp = () => {
  let navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[90%] w-[100%]">
      <section className="border h-[50%] w-[50%] bg-white rounded-lg shadow-lg">
        <p className="text-4xl font-bold text-center mt-[5rem]  text-gray-700">
          Amount Transfered Sucessfully
        </p>
        <div className="text-center mt-[5rem]">
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              navigate("/customer/dashboard");
            }}
          >
            Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default RestingComp;
