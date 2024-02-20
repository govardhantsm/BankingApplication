import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserShield } from "react-icons/fa6";
const LandingHeaderBottom = () => {
  return (
    <section className="flex border-2 items-center h-[65%] w-[100%] bg-white ">
      <div className="w-[20%] text-center ">LoGo</div>
      <section className="flex items-center w-[80%] ">
        <div className="flex items-center border-r-2 pe-3">
          Contact Us <IoIosArrowDown className="pl-2 text-2xl" />
        </div>
        <div className="flex items-center px-3 border-r-2">
          About Us <IoIosArrowDown className=" ml-2 pl-2 text-2xl" />
        </div>
        <div className="flex items-center px-3">
          Locate Us <IoIosArrowDown className=" ml-2 pl-2 text-2xl" />
        </div>
        <div className="flex items-center w-[60%] h-[60%]">
          <input
            type="search"
            className="w-[100%] ml-2 border-2 rounded-full py-2 border-blue-700 px-3 placeholder-black focus:outline-none"
            placeholder="Search for Products, Services .."
          />
          <span className="relative right-[4.9rem] rounded-full ">
            <MdOutlineSearch className="w-[1.5rem] h-[1.5rem] p-1 rounded-full bg-orange-400 text-white flex items-center justify-center" />
          </span>
          <span className=" relative right-[4.5rem] text-xl border-l-2 border-orange-400 pl-2 text-orange-400 ">
            <FaMicrophone />
          </span>
        </div>
        <div className="text-4xl text-orange-400 ">
          <IoMdNotificationsOutline />
        </div>
      </section>
    </section>
  );
};

export default LandingHeaderBottom;
