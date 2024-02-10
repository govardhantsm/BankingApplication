import React from 'react'
import bg from "../../../images/bg.png";
import card1 from "../../../images/card1.png";
import card2 from "../../../images/card2.png";
import card3 from "../../../images/card3.png";
import { FaMobileScreenButton } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdPayments } from "react-icons/md";
const LandingPayments = () => {
  return (
    <section className="w-[80%] h-[550px] mt-12 ms-48 flex items-center">
    <div className="w-[45%] h-[100%]">
      <section>
        <h1 className="text-3xl font-semibold">Customize Your Payments</h1>
        <p className="mt-6 leading-2 text-[0.95rem]">
          Personalize the newly-improved Payments Options From to include
          all your payment methods such as,easy monthly payments,credit
          cards
        </p>
      </section>
      <section className="h-[75%] w-[100%] mt-10 flex flex-col justify-between">
        <div className="h-[30%] w-[100%] bg-white rounded-xl flex items-center">
          <div className="w-[10%] h-[100%] flex items-center justify-center ms-8 me-2">
            <FaMobileScreenButton className="text-5xl" />
          </div>
          <div className="w-[80%]">
            <h1 className="font-semibold text-lg">
              Set daily maximum transaction limitation
            </h1>
            <p className=" mt-1">
              The daily,weekly,monthly and yearly limits for amount of
              transactions and total number of transactions.
            </p>
          </div>
        </div>
        <div className="h-[30%] w-[100%] bg-white rounded-xl flex items-center">
          <div className="w-[10%] h-[100%] flex items-center justify-center ms-8 me-2">
            <SlCalender className="text-4xl" />
          </div>
          <div className="w-[80%]">
            <h1 className="font-semibold text-lg">
              Customize your next payment schedule.
            </h1>
            <p className="mt-1">
              The daily,weekly,monthly and yearly limits for amount of
              transactions and total number of transactions.
            </p>
          </div>
        </div>
        <div className="h-[30%] w-[100%] bg-white rounded-xl flex items-center">
          <div className="w-[10%] h-[100%] flex items-center justify-center ms-8 me-2">
            <MdPayments className="text-5xl" />
          </div>
          <div className="w-[80%]">
            <h1 className="font-semibold text-lg">
              Get latest update about your payments.
            </h1>
            <p className=" mt-1">
              The daily,weekly,monthly and yearly limits for amount of
              transactions and total number of transactions.
            </p>
          </div>
        </div>
      </section>
    </div>
    <div className="w-[45%] h-[97%] ms-12">
        <img src={bg} alt="" className="h-[90%] w-[90%] mt-32 ms-20 relative" />
        <img
          src={card2}
          alt=""
          className="h-[38%] w-[27%] absolute top-[118rem] bg-transparent left-[59rem]"
        />
        <img
          src={card1}
          alt=""
          className="h-[36%] w-[26%] absolute top-[124rem] bg-transparent left-[56rem]"
        />
        <img
          src={card3}
          alt=""
          className="h-[53%] w-[32%] absolute top-[125.5rem] bg-transparent left-[52rem]"
        />
      </div>

  </section>
  )
}

export default LandingPayments
