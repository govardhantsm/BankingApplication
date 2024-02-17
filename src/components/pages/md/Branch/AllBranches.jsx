import React, { useEffect, useLayoutEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import Spinner from "../../spinner/Spinner";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useBranchState from "./../../../../utils/useBranchState";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  deleteBranch,
  getBranch,
} from "../../../../redux/services/managingDirectorThunk/mdBranchThunk/MdBranchThunk";

const AllBranches = () => {
  let dispatch = useDispatch();
  let state = useBranchState();
  console.log(state);
  let [bankId, setBankId] = useState(null);
  let [branch, setBranch] = useState(null);
  useEffect(() => {
    setBankId(state && state?.data?.data?.bankId);
  }, [state, bankId]);

  useLayoutEffect(() => {
    if (bankId) {
      let test = dispatch(getBranch(bankId));
      test.unwrap().then(x => setBranch(x.data));
    }
  }, [bankId]);

  // Animation:
  useLayoutEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-[100%] p-5 h-[100%]" data-aos="zoom-in">
      <div className="pb-3 font-semibold">All Branches</div>
      {state?.status === true ? (
        <Spinner />
      ) : (
        <section className="w-full overflow-auto h-[95%] no-scrollbar">
          {branch?.length > 0 &&
            branch?.map((user, index) => {
              return (
                <div
                  className="flex w-[100%] bg-white px-3 pt-3 mb-6"
                  key={index + 1}
                >
                  <div className="w-1/3 ">
                    <div className="flex">
                      <span className="p-3 pl-4 font-bold w-48">
                        Branch Name:{" "}
                      </span>
                      <span className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                        {user.branchName}
                      </span>
                    </div>

                    <div className="flex">
                      <span className="p-3 pl-4 font-bold w-48">
                        IFSC Code:{" "}
                      </span>
                      <span className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                        {user.ifsccode}
                      </span>
                    </div>

                    <div className="flex">
                      <span className="p-3 pl-4 font-bold w-48">
                        Branch Manager
                      </span>
                      <span className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                        {user.branchManagerName}
                      </span>
                    </div>
                  </div>
                  <div className="w-2/3 border-s-[1px]">
                    <div className="flex justify-between pl-4">
                      <section>
                        <div className="p-2 font-font-semibold ">
                          <span className="p-3 pl-4 font-bold w-48">
                            Total Debit Card Holders :
                          </span>
                          <span className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                            {user.card || "NA"}
                          </span>
                        </div>

                        <div className="p-2 font-font-semibold ">
                          <span className="p-3 pl-4 font-bold w-48">
                            Total Credit Card Holders :
                          </span>
                          <span className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                            {user.card || "NA"}
                          </span>
                        </div>
                      </section>
                      <section>
                        <div className="p-2 font-font-semibold ">
                          <span className="p-3 pl-4 font-bold w-48">
                            Total Loan Card Holders :
                          </span>
                          <span className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                            {user.card || "NA"}
                          </span>
                        </div>

                        <div className="p-2 font-font-semibold ">
                          <span className="p-3 pl-4 font-bold w-48">
                            Total Accounts :
                          </span>
                          <span className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                            {user.card || "NA"}
                          </span>
                        </div>
                      </section>
                      <div className="p-2 font-semibold text-[rgba(136,136,136)]">
                        <NavLink
                          to={`/mdlayout/update-branch/${user.branchId}`}
                        >
                          <FaEdit className="text-2xl" />
                        </NavLink>

                        <RxCross2
                          className="text-2xl mt-2 text-red-500"
                          onClick={() => {
                            let deleteConfirm = window.confirm("Are you sure");
                            if (deleteConfirm === true) {
                              dispatch(deleteBranch(user.branchId));
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="pl-4">
                      <div className="p-2 font-font-semibold ">
                        <span className="p-3 pl-4 font-bold w-48">
                          Branch Address:
                        </span>
                        <span className="p-2 font-font-semibold text-[rgba(136,136,136)]">
                          {` ${user.address.addressLine}, ${user.address.city}, ${user.address.state}, ${user.address.country}` ||
                            "NA"}
                        </span>
                      </div>
                      {/* <div className="pt-2 px-2 font-semibold text-[rgba(136,136,136)]">
                        Branch Address:
                        <div className="text-black-900">
                          {" "}
                          {` ${user.address.addressLine}, ${user.address.city}, ${user.address.state}, ${user.address.country}`}
                        </div>
                      </div> */}
                      <div className="ms-2 font-semibold text-[rgba(136,136,136) w-[98%] h-[10vh]">
                        {/* {user.address.addressLine} , {user.address.country}, {user.address.pincode}  */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
      )}
    </div>
  );
};

export default AllBranches;
