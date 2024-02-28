import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingSteptoGetloan = () => {
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="w-[90%] h-[17rem] flex mt-16 ms-24 justify-between"
      data-aos="fade-up"
    >
      <div className="w-[23%] h-[100%] bg-white rounded-xl hover:shadow-lg hover:shadow-slate-400 group p-2">
        <h1 className="text-3xl font-semibold text-blue-800 px-7 py-3 group-hover:text-4xl group-hover:transition-all">
          01
        </h1>
        <p className="text-black font-semibold ms-8">Check Eligibility</p>
        <p className="text-gray-500 ms-8 leading-7 w-[80%] text-[0.95rem]">
          Check your loan eligibility with our user-friendly online tool.
          Discover personalized financing options tailored to your needs.
        </p>
      </div>
      <div className="w-[23%] h-[100%] bg-white rounded-xl hover:shadow-lg hover:shadow-slate-400 group p-2">
        <h1 className="text-3xl font-semibold text-blue-800 px-7 py-3 group-hover:text-4xl group-hover:transition-all">
          02
        </h1>
        <p className="text-black font-semibold ms-8">Apply for loan</p>
        <p className="text-gray-500 ms-8 leading-7 w-[80%] text-[0.95rem]">
          Apply for a loan online in just a few clicks.Experience a seamless
          application process with quick approvals.
        </p>
      </div>
      <div className="w-[23%] h-[100%] bg-white rounded-xl hover:shadow-lg hover:shadow-slate-400 group p-2">
        <h1 className="text-3xl font-semibold text-blue-800 px-7 py-3 group-hover:text-4xl group-hover:transition-all">
          03
        </h1>
        <p className="text-black font-semibold ms-8">Get Approved</p>
        <p className="text-gray-500 ms-8 leading-7 w-[80%] text-[0.95rem]">
          Get approved for a loan swiftly. Enjoy a hassle-free process and
          access the funds you need promptly.
        </p>
      </div>
      <div className="w-[23%] h-[100%] bg-white rounded-xl hover:shadow-lg hover:shadow-slate-400 group p-2">
        <h1 className="text-3xl font-semibold text-blue-800 px-7 py-3 group-hover:text-4xl group-hover:transition-all">
          04
        </h1>
        <p className="text-black font-semibold ms-8">Get your money</p>
        <p className="text-gray-500 ms-8 leading-7 w-[80%] text-[0.95rem]">
          recieve your loan funds promptly Experience quick disbursement for
          immediate access to the money you need.
        </p>
      </div>
    </section>
  );
};

export default LandingSteptoGetloan;