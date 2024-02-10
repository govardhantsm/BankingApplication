import React from "react";

import MdLeftSideSection from "./MdLeftsideSection";
import { Outlet } from "react-router-dom";

const ManagingDirectorHome = () => {
  return (
    <section className="h-[100%]">
      <article className="h-[100%] flex">
        <aside className="w-[17%] text-white h-[671px]">
          <MdLeftSideSection />
        </aside>
        <aside className="w-[83%] h-[100%]">
          <div className="h-[99%] w-[100%]">
            <Outlet/>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default ManagingDirectorHome;