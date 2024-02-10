import React from 'react'
import { Link} from "react-router-dom";

import { IoIosArrowRoundForward } from "react-icons/io";
const LandingProcess = () => {
  return (
    <section className="w-[80%] h-[12rem] ms-24 flex">
        <div className="w-[30%] h-[15rem]">
          <p className="uppercase text-gray-400 text-sm font-semibold">
            OUR PROCESS
          </p>
          <h1 className="text-[2.8rem] font-[600] mt-3 leading-[3rem]">
            Get loan from 4 simple
            <span className="underline decoration-orange-500 decoration-8 ms-2">
              process
            </span>
          </h1>
        </div>
        <div className="w-[40%] h-[15rem] mt-2 ms-60">
          <p className="text-gray-800">
            Streamline your financial journey with our simplified loan
            process.Apply online,receive quick approval ,and enjoy transparent
            terms tailored to your needs . Experience hassle-free borrowing with
            our customer-friendly approach
          </p>
          <div className="text-blue-600 flex items-center mt-4 font-semibold">
            <span className="hover:text-blue-900">
              <Link>Learn more about it</Link>
            </span>
            <IoIosArrowRoundForward className="text-xl ms-1" />
          </div>
        </div>
      </section>
  )
}

export default LandingProcess
