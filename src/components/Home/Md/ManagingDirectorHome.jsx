import React from "react";

import MdLeftSideSection from "./MdLeftsideSection";
import { Outlet } from "react-router-dom";

const ManagingDirectorHome = () => {
  return (
    <section className="h-[100%]">
      <article className="h-[100%] flex">
        <aside className="w-[18.2vw] text-white">
          <MdLeftSideSection />
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

export default ManagingDirectorHome;
