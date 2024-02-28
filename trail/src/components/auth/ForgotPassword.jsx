import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FormComp from "../../utils/FormComp";
import { FaLock } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";


const ForgotPassword = () => {
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in">
      <FormComp name={"Forgot your password?"}>
        <div className="bg-[rgb(117,151,185)] w-[88%] mx-6  p-3 flex rounded-[3px] mb-8">
          <span className="text-xs text-white ">
            Get instructions instant! Enter your email
          </span>
          <span className="pl-1 text-white">
            <FaXmark />
          </span>
        </div>
        <form>
          <div className="form-group">
            {/* <label htmlFor="email">email</label> */}
            <input
              type="email"
              className="form-control p-2 border-b-2 w-[88%] mx-6 mb-4"
              id="email"
              name="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group mx-6 pt-4 w-[88%]">
            <button
              className="py-1 w-full  rounded-md bg-blue-600 text-white"
              type="submit"
            >
              Send
            </button>
          </div>
          <footer className="flex items-center justify-center py-4  text-[rgb(157,155,155)]">
            <span className="me-4">
              Return To
              <span className="text-blue-700">
                <Link to={"/"}>Login</Link>
              </span>
            </span>
          </footer>
        </form>
      </FormComp>
    </div>
  );
};

export default ForgotPassword;
