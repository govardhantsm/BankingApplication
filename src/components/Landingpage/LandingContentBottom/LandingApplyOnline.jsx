import React, { useEffect } from "react";
import dematOnline from "../../../images/dmat.jpg";
import cashLoan from "../../../images/cashloan.jpg";
import womenWithChronic from "../../../images/woman-with-chronic.jpg";
import fastag from "../../../images/Fastagsystem.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const LandingApplyOnline = () => {
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col justify-center items-center w-[100%] h-[auto] mt-20 ">
      <h1 className="text-center text-[2rem] font-bold pb-3" data-aos="zoom-in">
        <span>Apply </span>
        <span className=" text-orange-500"> Online</span>
      </h1>
      <section
        className=" my-3  flex  w-[87%] h-[85%] justify-around"
        data-aos="fade-up"
      >
        <div className="flex flex-col bg-white items-center w-[21%] h-[100%]">
          <img src={cashLoan} alt="" />
          <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-[10px]">
            QSP-CASH LOAN
          </p>
          <p className="text-[10px] text-center mb-2">
            Paperless digital process with instant disbursal
          </p>
          <button
            className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500"
            data-aos="flip-right"
          >
            APPLY ONLINE
          </button>
        </div>
        <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
          <img src={womenWithChronic} alt="" />
          <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-[10px]">
            QSP INSTANT SB ACCOUNT ONLINE
          </p>
          <p className="text-[10px] text-center mb-2">
            Open Account Online with Video KYC
          </p>
          <button
            className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500"
            data-aos="flip-right"
          >
            APPLY ONLINE
          </button>
        </div>
        <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
          <img src={dematOnline} alt="" />
          <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-[10px]">
            DEMAT ONLINE TRADING
          </p>
          <p className="text-[10px] text-center mb-2">Depository Services</p>
          <button
            className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500"
            data-aos="flip-right"
          >
            APPLY ONLINE
          </button>
        </div>
        <div className="flex flex-col bg-white items-center w-[21%] h-[100%] ">
          <img src={fastag} alt="" />
          <p className=" pt-5 pb-2 text-center tracking-widest font-semibold text-xs">
            FASTAG
          </p>
          <p className="text-xs text-center mb-2">
            National Electronic Toll Collection
          </p>
          <button
            className="my-4 bg-orange-500 py-2 px-4 font-medium text-white rounded-full text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500"
            data-aos="flip-right"
          >
            APPLY ONLINE
          </button>
        </div>
      </section>
    </section>
  );
};

export default LandingApplyOnline;
