import { TbArrowsDownUp } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Spinner from "../pages/spinner/Spinner";
import useGetBm from "../../utils/useGetBm";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  deleteBankAccount,
  getAllAccount,
  getApprove,
} from "../../redux/reducers/bankmanager/bankManagerSlice";
import { MdOutlineCreditCardOff } from "react-icons/md";
import { MdOutlineCreditScore } from "react-icons/md";
import { MdOutlineCreditCard } from "react-icons/md";
import { MdCreditScore } from "react-icons/md";
import Button from "../../utilities/Button";

let Hover = ({ data }) => {
  return (
    <div className="invisible bg-white border-orange-500 group-hover:visible h-[5rem] w-[10rem] border-[0.02rem] absolute z-10 -right-40 -mt-10 rounded pt-4 ">
      <p className="text-left pl-2">Name : {data.name}</p>{" "}
      <p className="text-left pl-2">Date : {data.debitCardDto.issueDate} </p>
      <p className="text-left pl-2">
        Number:{data.debitCardDto.debitCardNumber}
      </p>
    </div>
  );
};

//let PopUp=()=>{return()}

const BranchAllAccounts = () => {
  let [accountNumber, SetAccountNumber] = useState();
  let [state, setState] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = state?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(state?.length / itemsPerPage);
  localStorage.setItem("path", "/bankmanager/All Accounts");
  let dispatch = useDispatch();
  let [search, setSearch] = useState(null);
  let [loading, setLoading] = useState(false);
  let [toggle, SetToggle] = useState(false);
  let [approval, SetApproval] = useState();
  let navigate = useNavigate();
  const handlePageChange = pageNumber => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setLoading(false);
    });
  };

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  const data = JSON.parse(sessionStorage.getItem("myObject"));

  // =========get all user Account=========//
  useEffect(() => {
    if (data.branchId) {
      dispatch(getAllAccount(data?.branchId))
        .unwrap()
        .then(x => {
          setState(x.data);
        });
    }
  }, [data?.branchId]);
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-[98%] ssh-[100%]" data-aos="zoom-in">
      <div className="flex items-center justify-between pt-3 px-5">
        <p className="font-semibold">All Accounts</p>
        <NavLink
          to="/bankmanager/create-account"
          className="bg-gray-300 rounded py-2 px-3"
        >
          Create Account
        </NavLink>
      </div>
      {state?.status === true ? (
        <Spinner />
      ) : (
        <section className=" bg-white w-[98%] h-[90%] no-scrollbar ms-5">
          <header className="mx-10 my-2 w-[93%] flex justify-between items-center pt-4 ">
            <div>
              Show
              <select
                className=" mx-1 px-2 rounded-[0.25rem] border-2"
                onChange={e => {
                  setItemsPerPage(e.target.value);
                }}
              >
                <option value="2">2</option>

                <option value="4">4</option>

                <option value="6">6</option>

                <option value="8">8</option>

                <option value="10">10</option>

                <option value="12">12</option>
              </select>
              {" entries"}
            </div>
            <div>
              Search:
              <input
                className=" mx-1 px-2 border-2 rounded-[0.25rem]"
                type="text"
                onChange={e => {
                  let data = state?.filter(
                    ele =>
                      ele.emailID
                        ?.toLowerCase()
                        ?.includes(e.target.value.toLowerCase()) ||
                      ele.name
                        ?.toLowerCase()
                        .includes(e.target.value.toLowerCase())
                  );
                  // console.log(currentItems, "currentitems");
                  // for (let i = 0; i < data.length; i++) {
                  //   for (let j = 0; j < currentItems.length; j++) {
                  //     if (
                  //       data[i]?.emailID?.toLowerCase() ==
                  //         currentItems[j]?.emailID?.toLowerCase() ||
                  //       data[i]?.name?.toLowerCase() ==
                  //         currentItems[j]?.name?.toLowerCase()
                  //     ) {
                  //       data = data.toSpliced(i, 1);
                  //     }
                  //   }
                  // }
                  // console.log(data);
                  e.target.value && true ? setSearch(data) : setSearch(null);
                }}
              />
            </div>
          </header>
          <div className="mx-8 w-[95%]">
            <table style={{ tableLayout: "fixed", width: "100%" }}>
              <thead>
                <tr className="border-b-2">
                  <th className="py-2">
                    <div className="w-18% flex justify-between align-center px-2 text-sm">
                      <span>Name</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>

                  <th>
                    <div className="w-18% flex justify-between align-center px-2 text-sm">
                      <span>Email-Id</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-18% flex justify-between align-center px-2 text-sm">
                      <span>Account Type</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-18% flex justify-between align-center px-2 text-sm">
                      <span>Account Number</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th className="py-2">
                    <div className="w-18% flex justify-between align-center px-2 text-sm">
                      <span>Status</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th className="py-2">
                    <div className="w-18% flex justify-between align-center px-2 text-sm">
                      <span>Debit Card</span>
                    </div>
                  </th>
                  <th>
                    <div className="w-18% flex justify-between align-center px-2 text-sm">
                      <span> Actions</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {search &&
                  search?.map((data, ind) => {
                    return (
                      <tr className="text-xs border-b-2" key={ind}>
                        <td className="px-2 py-3 ">{data.name}</td>

                        <td className="px-2">{data.emailID}</td>
                        <td className="px-2">{data.accountType}</td>
                        <td className="px-2">{data.accountNumber}</td>
                        <td className="px-2">{data.status}</td>
                        <td className="px-2">
                          <>
                            <button
                              className="group relative"
                              onClick={() => {
                                SetAccountNumber(data.accountNumber);
                                SetToggle(t => !t);
                              }}
                            >
                              {data.debitCardDto.approval === "APPROVED" ? (
                                <MdCreditScore className="text-[2rem] pl-2" />
                              ) : data.debitCardDto.approval === "REJECT" ? (
                                <MdOutlineCreditCardOff className="text-[2rem] pl-2" />
                              ) : (
                                <MdOutlineCreditCard className="text-[2rem] pl-2" />
                              )}

                              <div className="invisible bg-white border-orange-500 group-hover:visible h-[5rem] w-[10rem] border-[0.02rem] absolute z-10 -right-40 -mt-10 rounded pt-4 ">
                                <p className="text-left pl-2">
                                  Name : {data.name}
                                </p>{" "}
                                <p className="text-left pl-2">
                                  Date : {data.debitCardDto.issueDate}{" "}
                                </p>
                                <p className="text-left pl-2">
                                  Number:{data.debitCardDto.debitCardNumber}
                                </p>
                              </div>
                            </button>
                            {toggle ? (
                              <div
                                class="shadow-lg w-[25rem] h-[12rem] rounded-lg p-6 mx-auto my-6 max-w-md  absolute top-[100px] right-[400px] z-20 bg-gray-300 text-[#2a2929] mr-2"
                                data-aos="fade-down"
                              >
                                <div class="flex flex-col items-center mb-4 p-2 pt-6 ">
                                  <div className="pb-6 flex">
                                    <label className="text-[20px] pt-2 pr-2 text-black font-bold ">
                                      Approval :{" "}
                                    </label>
                                    <select
                                      className="border-2 rounded-md focus:outline-none pl-3 p-[0.36rem] text-[rgb(145,142,143)] sm:text-sm sm:leading-6"
                                      onChange={e => {
                                        SetApproval(e.target.value);
                                      }}
                                    >
                                      <option>-----Select Status----</option>
                                      <option value="APPROVED">Approved</option>
                                      <option value="REJECT">Rejected</option>
                                      <option value="HOLD">Hold</option>
                                      <option value="IN_PROCESS">
                                        In-Progress
                                      </option>
                                    </select>
                                  </div>
                                  <button
                                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    onClick={e => {
                                      e.preventDefault();

                                      dispatch(
                                        getApprove({
                                          approval,
                                          accountNumber,
                                        })
                                      ).then(x => {
                                        SetToggle(t => !t);
                                        window.location.reload();
                                      });
                                    }}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </>
                        </td>
                        <td className="px-2">
                          <div className="flex">
                            <span className="px-2  text-red-500">
                              <NavLink
                                to={`/bankmanager/account/update/${data?.accountNumber}`}
                                state={"AllAccount"}
                              >
                                <BiSolidPencil />
                              </NavLink>
                            </span>
                            <span className="px-2 ">
                              <MdDelete
                                onClick={() => {
                                  let deleteConfirm =
                                    window.confirm("Are you sure");
                                  if (deleteConfirm === true) {
                                    dispatch(
                                      deleteBankAccount(data.accountNumber)
                                    );
                                  }
                                }}
                              />
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {search == null &&
                  currentItems?.map((data, ind) => {
                    return (
                      <tr className="text-xs border-b-2" key={ind}>
                        <td className="px-2 py-3 ">{data.name}</td>

                        <td className="px-2">{data.emailID}</td>
                        <td className="px-2">{data.accountType}</td>
                        <td className="px-2">{data.accountNumber}</td>
                        <td className="px-2">{data.status}</td>
                        <td className="px-2">
                          <>
                            <button
                              className="group relative"
                              onClick={() => {
                                SetAccountNumber(data.accountNumber);
                                SetToggle(t => !t);
                              }}
                            >
                              {data.debitCardDto.approval === "APPROVED" ? (
                                <MdCreditScore className="text-[2rem] pl-2" />
                              ) : data.debitCardDto.approval === "REJECT" ? (
                                <MdOutlineCreditCardOff className="text-[2rem] pl-2" />
                              ) : (
                                <MdOutlineCreditCard className="text-[2rem] pl-2" />
                              )}

                              <div className="invisible bg-white border-orange-500 group-hover:visible h-[5rem] w-[10rem] border-[0.02rem] absolute z-10 -right-40 -mt-10 rounded pt-4 ">
                                <p className="text-left pl-2">
                                  Name : {data.name}
                                </p>{" "}
                                <p className="text-left pl-2">
                                  Date : {data.debitCardDto.issueDate}{" "}
                                </p>
                                <p className="text-left pl-2">
                                  Number:{data.debitCardDto.debitCardNumber}
                                </p>
                              </div>
                            </button>
                            {toggle ? (
                              <div
                                class="shadow-lg w-[25rem] h-[12rem] rounded-lg p-6 mx-auto my-6 max-w-md  absolute top-[100px] right-[400px] z-20 bg-gray-300 text-[#2a2929] mr-2"
                                data-aos="fade-down"
                              >
                                <div class="flex flex-col items-center mb-4 p-2 pt-6 ">
                                  <div className="pb-6 flex">
                                    <label className="text-[20px] pt-2 pr-2 text-black font-bold ">
                                      Approval :{" "}
                                    </label>
                                    <select
                                      className="border-2 rounded-md focus:outline-none pl-3 p-[0.36rem] text-[rgb(145,142,143)] sm:text-sm sm:leading-6"
                                      onChange={e => {
                                        SetApproval(e.target.value);
                                      }}
                                    >
                                      <option>-----Select Status----</option>
                                      <option value="APPROVED">Approved</option>
                                      <option value="REJECT">Rejected</option>
                                      <option value="HOLD">Hold</option>
                                      <option value="IN_PROCESS">
                                        In-Progress
                                      </option>
                                    </select>
                                  </div>
                                  <button
                                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                    onClick={e => {
                                      e.preventDefault();

                                      dispatch(
                                        getApprove({
                                          approval,
                                          accountNumber,
                                        })
                                      ).then(x => {
                                        SetToggle(t => !t);
                                        window.location.reload();
                                      });
                                    }}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </>
                        </td>
                        <td className="px-2">
                          <div className="flex">
                            <span className="px-2  text-red-500">
                              <NavLink
                                to={`/bankmanager/account/update/${data?.accountNumber}`}
                                state={"AllAccount"}
                              >
                                <BiSolidPencil />
                              </NavLink>
                            </span>
                            <span className="px-2 ">
                              <MdDelete
                                onClick={() => {
                                  let deleteConfirm =
                                    window.confirm("Are you sure");
                                  if (deleteConfirm === true) {
                                    dispatch(
                                      deleteBankAccount(data.accountNumber)
                                    );
                                  }
                                }}
                              />
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <footer className="mx-10 my-2 w-[93%]  flex justify-between items-center">
            <p>
              Showing {indexOfFirstItem + 1} to {indexOfLastItem} {" Of "}
              {state?.length} {" entries"}
            </p>
            <div className="mt-4 flex  items-center justify-center">
              <ul className="flex ">
                <li>
                  <button
                    className="text-center px-3 py-1 border-2"
                    onClick={prePage}
                  >
                    Prev
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer border-2 ${
                      index + 1 === currentPage
                        ? "bg-blue-500 text-white"
                        : "bg-blue-300 hover:bg-blue-200"
                    } px-3 py-1 rounded`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </li>
                ))}

                <li>
                  <button
                    className="text-center px-3 py-1 border-2"
                    onClick={nextPage}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </footer>
        </section>
      )}
    </div>
  );
};

export default BranchAllAccounts;
