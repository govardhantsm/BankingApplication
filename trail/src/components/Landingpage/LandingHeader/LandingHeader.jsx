import React from "react";
import LandingHeaderTop from "./LandingHeaderTop";
import LandingHeaderBottom from "./LandingHeaderBottom";

const LandingHeader = () => {
  return (
    <header className=" h-[15%] w-[100%] m-0 ">
      <LandingHeaderTop />
      <LandingHeaderBottom />
    </header>
  );
};

export default LandingHeader;
