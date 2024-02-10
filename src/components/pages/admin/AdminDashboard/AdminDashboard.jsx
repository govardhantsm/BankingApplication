import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AdminDashboard = ({ name }) => {
  
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  return <div data-aos="zoom-in">{name}</div>;
};

export default AdminDashboard;
