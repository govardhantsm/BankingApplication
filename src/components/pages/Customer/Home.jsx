import React from "react";

import { Outlet } from "react-router-dom";
import LeftSection from "./LeftSection";

const Chome = () => {
  return (
    <section className="h-[90vh]">
      <article className="h-[100%] flex">
        <aside className="w-[18.2vw] text-white h-[auto] ">
          <LeftSection />
        </aside>
        <aside className="w-[83%] h-[100%]">
          <div className="h-[99%] w-[100%]">
            <Outlet />
          </div>
        </aside>
      </article>
    </section>
  );
};

export default Chome;
