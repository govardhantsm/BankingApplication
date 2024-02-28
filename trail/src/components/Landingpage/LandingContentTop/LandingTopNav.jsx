import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const LandingTopNav = () => {
  return (
    <div className="w-[100%] h-[4.5rem] bg-[rgb(6,60,131)] absolute z-10 flex items-center ">
          <ul className="h-[40%] flex items-center justify-between w-[72%] text-white font-semibold border-e-[0.05rem] ps-4 pe-6 border-cyan-600 ">
            <li>
              <Link>Accounts</Link>
            </li>
            <li>
              <Link>Loans</Link>
            </li>
            <li>
              <Link>Cards</Link>
            </li>
            <li>
              <Link>Insurance</Link>
            </li>
            <li>
              <Link>Investment</Link>
            </li>
            <li>
              <Link>Offers</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Digital Banking</Link>
            </li>
          </ul>
          <div className="flex h-[100%] w-[18%] ">
            <span className="relative flex items-center text-2xl left-[2rem]  text-white">
              <IoIosSearch />
            </span>
            <span>
              <input
                type="text"
                className=" p-2 ps-10 w-[16rem] h-[100%] bg-[rgb(6,60,131)]  focus:outline-none"
              />
            </span>
          </div>
          <div className="bg-orange-400 flex items-center justify-center text-white font-semibold ms-3 ">
            <button className="group relative py-6 px-12">
              Login
              <div className="invisible bg-white border-orange-500 group-hover:visible h-[8rem] w-[15rem] border-[0.02rem] absolute right-0 mt-6 ">
                <div className="py-2 w-[100%] text-black">Login As</div>
                <div className="text-black py-2 hover:text-orange-400 border-b-[0.04rem] mx-3 flex items-center justify-between">
                  <NavLink to="/customer/login">Customer</NavLink>
                  <IoIosArrowRoundForward className="text-2xl text-orange-400" />
                </div>
                <div className="text-black py-2 hover:text-orange-400 flex items-center justify-between mx-3">
                  <NavLink to="/employee/login">Employee</NavLink>
                  <IoIosArrowRoundForward className="text-2xl text-orange-400" />
                </div>
              </div>
            </button>
          </div>
        </div>

  )
}

export default LandingTopNav
