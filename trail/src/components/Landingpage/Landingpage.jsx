import React from "react";
import LandingHeader from "./LandingHeader/LandingHeader";
import LandingContentBottom from "./LandingContentBottom/LandingContentBottom";
import LandingFooter from "./LandingFooter/LandingFooter";
import LandingContentTop from "./LandingContentTop/LandingContentTop";

const Landingpage = () => {
  return (
    <span>
      <LandingHeader />
      <LandingContentTop />
      <LandingContentBottom />
      <LandingFooter />
    </span>
  );
};

export default Landingpage;
