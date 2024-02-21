import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import Spinner from "../../spinner/Spinner";
import { NavLink, useNavigate } from "react-router-dom";
import useGetBank from "../../../../utils/useGetAllBanks";
import AOS from "aos";
import "aos/dist/aos.css";
import { deleteBank } from "./../../../../redux/services/adminThunk/adminBankThunk/AdminBankThunk";

const AllBank = () => {
  let [search, setSearch] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let state = useGetBank();

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-[100%] p-5 h-[100%]" data-aos="zoom-in">
      <div className="flex justify-between ">
        <div className="pb-3 font-semibold">All Banks</div>
        <div>
          <input
            className="p-2 mb-2 rounded-md border w-[250px]"
            placeholder="SearchBankByName"
            type="text"
            name=""
            id=""
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      {state?.status === true ? (
        <Spinner />
      ) : (
        <section className="w-full overflow-auto h-[95%] no-scrollbar">
          {Array.isArray(state?.data?.data) &&
            state?.data?.data?.map((user, index) => {
              if (user?.bankName?.toString().includes(search?.toString())) {
                return (
                  <div
                    className="flex w-[100%] bg-white px-3 pt-3 mb-6"
                    key={index + 1}
                  >
                    <div className="w-1/3 flex flex-col">
                      <div className="p-3 pl-4 font-medium">
                        <span className="font-bold w-32 inline-block text-[rgba(136,136,136)]">
                          Bank Name :
                        </span>{" "}
                        <span className=" text-[rgba(136,136,136)]">
                          {user.bankName}
                        </span>
                      </div>

                      <div className="p-3 pl-4 font-medium">
                        <span className="font-bold w-32 inline-block text-[rgba(136,136,136)]">
                          Bank Location :
                        </span>{" "}
                        <span className="text-[rgba(136,136,136)]">
                          {user?.address?.city}
                        </span>
                      </div>
                      <div className="p-3 pl-4 font-medium">
                        <span className="font-bold w-32 inline-block text-[rgba(136,136,136)]">
                          MD Name :{" "}
                        </span>
                        <span className="text-[rgba(136,136,136)]">
                          {user.managingDirectorName}
                        </span>
                      </div>
                    </div>
                    <div className="w-2/3 border-s-[1px]">
                      <div className="flex justify-between pl-4">
                        <section>
                          <div className="p-2 font-bold text-[rgba(136,136,136)]">
                            Total Debit Card Holders :
                          </div>
                          <div className="p-2 font-bold w-auto inline-block text-[rgba(136,136,136)]">
                            Total Credit Card Holders :{" "}
                          </div>
                        </section>
                        <section>
                          <div className="p-2 font-bold text-[rgba(136,136,136)]">
                            Total Loan Card Holders :{" "}
                          </div>
                          <div className="p-2 font-bold text-[rgba(136,136,136)]">
                            Total Accounts :
                          </div>
                        </section>
                        <div className="p-2 font-semibold text-[rgba(136,136,136)]">
                          <NavLink
                            to={`/adminlayout/update-bank/${user.bankId}`}
                          >
                            <FaEdit className="text-2xl" />
                          </NavLink>

                          <RxCross2
                            className="text-2xl mt-2 text-red-500"
                            onClick={() => {
                              let deleteConfirm =
                                window.confirm("Are you sure");
                              if (deleteConfirm === true) {
                                dispatch(deleteBank(user?.bankId));
                                // navigate("/adminlayout/all-bank");
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="pl-4 flex">
                        <div className="pt-2 px-2 font-semibold text-[rgba(136,136,136)] w-60">
                          Main Branch Address :
                        </div>
                        <div className="ms-2  h-[7vh] pt-2 ps-1 text-[rgba(136,136,136)]">
                          {user?.address?.addressLine} ,{user?.address?.state},{" "}
                          {user?.address?.city} ,{user?.address?.country} ,{" "}
                          {user?.address?.pincode}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </section>
      )}
    </div>
  );
};

export default AllBank;
