import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RiDashboard3Fill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { MdApproval } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LiaIdCardSolid } from "react-icons/lia";
import { CiBank } from "react-icons/ci";
import AOS from "aos";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdOutlineRemoveCircle } from "react-icons/md";

const Navbar = () => {
  let [toggle, setToggle] = useState(false);
  const data = JSON.parse(sessionStorage.getItem("myObject"));
  console.log(data);
  let user;

  let role = data?.role;
  let branchName = data?.branchName;
  let bankName = data?.bankName;
  return (
    <section className="bg-white h-[100%] w-[100%] flex">
      <div className="w-[17%] bg-orange-400 h-[100%] flex items-center justify-center">
        <p className="ml-2 mr-2">
          {role === "MANAGING_DIRECTOR"
            ? bankName
            : role === "BRANCH_MANAGER"
            ? branchName
            : "BankLauncher"}
        </p>
      </div>
      <div className="flex justify-between w-[83%] h-[100%]">
        <section className="w-[33%] flex justify-evenly items-center">
          {/* <FaBars className="ms-2" /> */}
          {/* <div className="flex">
            <span className="ms-7 ">English</span>
            <span>
              <RiArrowDropDownLine className="text-2xl me-4" />
            </span>
          </div> */}
          {/* <div className="flex">
            <span>
              <input
                type="text"
                placeholder="Search..."
                className="border-2 p-1 rounded-full ps-4 w-[15rem]"
              />
            </span>
            <span className="relative top-2 text-xl right-[2rem] text-slate-500">
              <IoIosSearch />
            </span>
          </div> */}
        </section>
        <section className="mr-6 w-[10%] flex text-2xl justify-between items-center">
          <BsBell className="text-xl" />
          {/* <CiMail /> */}

          {/* <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAK2Ud4gQr9pQFT6rc3xbeq74MhZe7bOdvQ&usqp=CAU"
            }
            alt=""
            className="h-[1.8rem] w-[1.8rem] rounded-full"
          /> */}
          {/* <FaUserTie /> */}
          <div>
            <span onClick={() => setToggle(!toggle)}>
              <FaUserTie />
            </span>
            {toggle ? (
              <div
                class="shadow-lg w-[auto] rounded-lg p-6 mx-auto my-6 max-w-md  absolute top-[40px] right-[0] z-20 bg-[#89abfa] text-[#fff]"
                data-aos="fade-left"
              >
                <div class="flex items-center mb-4 text-[#fff]">
                  <div class="mr-4">
                    <span class="text-5xl ">
                      <FaRegCircleUser />
                    </span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg	">{data?.name || "NA"}</h3>
                    <p class="text-base	">
                      {data.role === "MANAGING_DIRECTOR"
                        ? "MANAGING DIRECTOR"
                        : "" || "NA"}
                    </p>
                  </div>
                </div>

                <div class="">
                  <div>
                    <p class="flex">
                      <span className="mr-[10px] mt-1 text-xl">
                        <FaUserCheck />
                      </span>
                      <span class="text-base	">
                        Employee ID:{" "}
                        <span className="ml-2">
                          {data?.managingDirectorId || "NA"}
                        </span>
                      </span>
                    </p>
                    <p class="flex">
                      <span className="mr-[10px] mt-1 text-xl">
                        <MdOutlineMail />
                      </span>
                      <span class="text-base">
                        Email:{" "}
                        <span className="ml-2">{data?.email || "NA"}</span>
                      </span>
                    </p>
                    <p class="flex">
                      <span className="mr-[10px] mt-1 text-xl">
                        <FiEdit />
                      </span>
                      <span class="text-base	">Update Profile Picture</span>
                    </p>
                    <p class="flex">
                      <span className="mr-[10px] mt-1 text-xl">
                        <MdOutlineRemoveCircle />
                      </span>
                      <span class="text-base	">Remove Profile Picture</span>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <button className="group relative">
            <PiDotsNineBold className="me-2" />
            <div className="invisible bg-white border-orange-500 group-hover:visible h-[6rem] w-[10rem] border-[0.02rem] absolute z-10 right-0 mt-0 rounded ">
              <div  className="flex flex-wrap gap-[.3rem] items-center ml-4 mt-3 justify-center h-[60%] w-[80%]">
                <NavLink to="/mdlayout">
                  <RiDashboard3Fill className="me-3 mt-[0.15rem]" />
                </NavLink>
                <NavLink
                  to="/mdlayout/all-branches"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <CiBank className="me-3 text-[2rem]" />
                </NavLink>
                <NavLink
                  to="/mdlayout/create-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <MdApproval className="me-3" />
                </NavLink>
                <NavLink
                  to="/mdlayout/all-accounts"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <MdAccountCircle className="me-3" />
                </NavLink>

                <NavLink
                  to="/mdlayout/create-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <FaHandHoldingDollar className="ms-3" />
                </NavLink>
                <NavLink
                  to="/mdlayout/all-branchManager"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <LiaIdCardSolid className="ms-3 mt-[0.15rem] text-[2rem]" />
                </NavLink>
              </div>
            </div>
          </button>
        </section>
      </div>
    </section>
  );
};

export default Navbar;
