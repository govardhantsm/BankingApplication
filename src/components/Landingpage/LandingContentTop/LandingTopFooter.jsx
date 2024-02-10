import React from 'react'
import { GoDotFill } from "react-icons/go";
import { RiLoader5Fill } from "react-icons/ri";
const LandingTopFooter = () => {
  return (
   
        <section className=" w-[100%] h-[4.5rem] bg-[rgb(6,60,131)] absolute z-10 mt-80 flex justify-center ">
          <div className="w-[92%] h-[18rem] mt-4 flex justify-between">
            <div className="w-[24%] h-[100%] bg-white">
              <h1 className="uppercase text-xl ps-2 pt-1">DIGITAL BANKING</h1>
              <p className="font-semibold text-md text-gray-400 -mt-1 ps-2">
                Advance.Innovative.Instant
              </p>
              <section className="w-[60%] h-[9rem] mt-2 ms-4 flex flex-col justify-between text-sm">
                <div className="border-2 rounded-full py-2 flex items-center">
                  <span className="h-[1.2rem] w-[1.2rem] rounded-full border-2 mx-4">
                    <RiLoader5Fill className="relative bottom-1 right-1 text-orange-400 text-2xl" />
                  </span>
                  Net Banking
                </div>
                <div className="border-2 border-orange-400 rounded-full py-2 flex items-center">
                  <GoDotFill className="text-orange-500 mx-4 text-lg" /> Mobile
                  Banking
                </div>
                <div className="border-2 border-orange-400 rounded-full py-2 flex items-center">
                  <GoDotFill className="text-orange-500 mx-4 text-lg" />
                  WhatsApp Banking
                </div>
              </section>
              <button className="uppercase bg-orange-500 py-2 px-5 text-white rounded-full mt-6 text-sm mx-3 hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500">
                explore digital banking
              </button>
            </div>
            <div className="w-[48%] h-[100%] bg-white flex flex-wrap justify-evenly items-center">
              <div className="h-[6rem] w-[45%] ">
                {/* <FaUserShield className="text-5xl" /> */}

                <h1 className="font-semibold">Accounts</h1>
                <p className="leading-9 text-gray-400">
                  Three easy methods to swiftly open accounts
                </p>
              </div>
              <div className="h-[6rem] w-[45%]">
                <h1 className="font-semibold">Loans</h1>
                <p className="leading-9 text-gray-400">
                  ensures that you recieve a better interest rate on all loans
                </p>
              </div>
              <div className="h-[6rem] w-[45%] ">
                <h1 className="font-semibold">Cards</h1>
                <p className="leading-9 text-gray-400">
                  Get the right card for you
                </p>
              </div>
              <div className="h-[6rem] w-[45%] ">
                <h1 className="font-semibold">Investment</h1>
                <p className="leading-9 text-gray-400">
                  Invest your hard earned money with us
                </p>
              </div>
            </div>
            <div className="w-[22%] h-[100%] bg-white">
              <div className="mt-10 ms-14">
                <h1 className="text-xl font-semibold">
                  Save Money , Save Life !
                </h1>
                <p>Any questions?</p>
                <span>Call</span>
                <span className="text-blue-800 text-lg font-semibold ms-2">
                  0100 5200 369
                </span>
                <button className="uppercase bg-orange-500 py-2 px-5 text-white rounded-full mt-16 text-sm hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500 ">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </section>
     
  )
}

export default LandingTopFooter
