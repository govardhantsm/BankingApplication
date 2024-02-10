import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import useGetProfile from "./utils/useGetProfile";
import Spinner from "./components/pages/spinner/Spinner";
import { Toaster } from "react-hot-toast";

const AdminLayout = () => {
  // const user = useGetProfile();
  return (
    <section className="h-[100vh]">
      {/* {user=== null ? <Spinner/> : */}
      <article className="h-[8%]">
        <Navbar />
      </article>
      <article className="h-[92%] ">
        <Toaster/>
        <Outlet />
      </article>
    </section>
  );
};

export default AdminLayout;
