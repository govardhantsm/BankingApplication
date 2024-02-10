import React from "react";

import { Outlet } from "react-router-dom";
import BleftSideSection from "./BleftSideSection";

const Bhome = () => {
  return (
    <section className="h-[100%]">
      <article className="h-[100%] flex">
        <aside className="w-[17%] bg-black text-white h-[100%] ">
          <BleftSideSection />
        </aside>
        <aside className="w-[83%] h-[100%]">
          <div className="h-[100%] w-[100%]">
            <Outlet />
          </div>
        </aside>
      </article>
    </section>
  );
};

export default Bhome;
