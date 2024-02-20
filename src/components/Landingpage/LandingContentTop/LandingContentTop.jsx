import React from 'react'
import LandingTopNav from './LandingTopNav'
import LandingTopFooter from './LandingTopFooter'
import basicimg from "../../../images/basicimg.png";
const LandingTopMain = () => {
  return (
    <section className="w-[100%] h-[92%] flex justify-center">
     <LandingTopNav/>   
    <img
    src={basicimg}
      alt=""
      className="h-[50%] w-[100%] relative object-cover"
    />
   <LandingTopFooter/>
    </section>
  )
}

export default LandingTopMain
