import React from "react";

import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const LandingHeaderTop = () => {
  return (
    <section className="flex items-center bg-[rgb(240,245,249)]  h-[35%] w-[100%] m-0 ">
      <div className="w-[10%] text-center border-r-2">careers</div>
      <section className="flex justify-between w-[50%]">
        <div className="pl-4">Agents</div>
        <div className="pr-4 border-r-2">Avilable in : English </div>
      </section>
     <div className="pl-3 flex items-center justify-between w-[28%] ">
        <div className="flex items-center W-[40%] pr-3 rounded-full bg-orange-200">
          <BiPhoneCall className="rounded-full bg-[rgb(227,55,60)] text-[1.4rem] " />
          <span className="pl-2"> 1800 1080</span>
        </div>
        <div className="W-[40%] pr-5">connecting Socially</div>
      </div>
      <div className=" flex justify-around w-[10%]">
        <span className="px-3 border-r-2">
          <FaFacebookF />
        </span>
        <span className="px-3 border-r-2">
          <FaTwitter />
        </span>
        <span className="px-3 border-r-2">
          <FaLinkedinIn />
        </span>
        <span className="px-3 ">
          <FaInstagram />
        </span>
      </div>
    </section>
  );
};

export default LandingHeaderTop;
