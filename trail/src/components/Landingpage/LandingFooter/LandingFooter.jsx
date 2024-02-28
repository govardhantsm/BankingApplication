import React from 'react'

const LandingFooter = () => {
  return (
    <footer className="flex items-center justify-evenly w-[100%] h-[30%] mt-14 bg-black">
        <div className="text-white flex flex-col justify-evenly h-[90%] w-[22%] ms-36">
          <p>Home </p>
          <p>Accounts</p>
          <p>Transfers</p>
          <p>Payments</p>
        </div>
      <div className=" text-white flex flex-col justify-evenly h-[90%] w-[22%]">
          <p>Statemets </p>
          <p>Customer Support</p>
          <p>FAQs</p>
          <p>Security and Privacy</p>
        </div>
        <div className="text-white flex flex-col justify-evenly h-[90%] w-[22%]">
          <p>Terms and Conditions</p>
          <p>About Us</p>
          <p>Branch Locator</p>
          <p>ATM Locator</p>
        </div>
        <div className="text-white flex flex-col justify-evenly h-[90%] w-[22%]">
          <p>Mobile Apps </p>
          <p>News and Updates</p>
          <p>Social Media</p>
          <p>Feedback</p>
        </div>
      </footer>
  )
}

export default LandingFooter
