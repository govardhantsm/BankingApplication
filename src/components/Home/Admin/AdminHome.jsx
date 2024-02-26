import React from "react";

import AdminLeftSideSection from "./AdminLeftSideSection";
import { Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <section className="h-[90vh] ">
      <article className="h-[100%] flex">
        <aside className="w-[18.2vw] text-white h-[auto]">
          <AdminLeftSideSection />
        </aside>
        <aside className="w-[83%] h-[90vh] overflow-auto no-scrollbar">
          <div className="h-[99%] w-[100%]">
            <Outlet />
          </div>
        </aside>
      </article>
    </section>
  );
};

export default AdminHome;
