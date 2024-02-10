import React from "react";

import AdminLeftSideSection from "./AdminLeftSideSection";
import { Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <section className="h-[100%]">
      <article className="h-[100%] flex">
        <aside className="w-[17%] bg-black text-white h-[100%] ">
          <AdminLeftSideSection />
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

export default AdminHome;
