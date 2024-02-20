import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { getCustomerProfile } from "../../../redux/reducers/customer/customerSlice";
import { RiFundsLine } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { LuBookMinus } from "react-icons/lu";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const CustomerDashBoard = () => {
  let dispatch = useDispatch();
  let [showDebitCard, setShowDebitCard] = useState(false);
  const [data, SetData] = useState();
  useEffect(() => {}, []);
  dispatch(getCustomerProfile()).then(y => {
    SetData(y.payload.data);
  });

  let [toggle, setToggle] = useState(true);

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="m-6 bg-white  h-[87vh]" data-aos="zoom-in">
      <div className="h-[20vh]  w-[100%] flex justify-center items-center text-3xl font-semibold text-slate-800">
        {" "}
        <p className="text-[#424242]">Customer Dashboard</p>
      </div>
      <article className="flex  h-[50vh]">
        <div className=" flex flex-col items-center justify-center gap-4 w-[50%]">
          <p className="font-semibold text-xl text-gray-600">
            {" "}
            Account Details
          </p>
          <section className=" h-[30vh] w-[70%] p-10 rounded shadow-md shadow-slate-400	">
            <div className="w-[100%] h-[100%] flex flex-col gap-3 basis-[19rem] justify-evenly border-neutral-700 rounded">
              <p>
                <span className="w-[170px]  inline-block font-semibold text-[#424242]">
                  AccountNo:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.accountNumber || "NA"}
                </span>
              </p>
              <p className="w-[100%] ">
                <span className="w-[170px] font-semibold inline-block text-[#424242]">
                  AccountType:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.accountType || "NA"}{" "}
                </span>
              </p>
              <p>
                <span className="w-[170px]  inline-block font-semibold text-[#424242]">
                  Available Balance:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.availableBalance}{" "}
                </span>
              </p>
              <p className="flex justify-around text-3xl text-[#424242] mt-2">
                <NavLink to="/customer/Amount Transfer">
                  <span title="FundTransfer">
                    <RiFundsLine />
                  </span>
                </NavLink>
                <NavLink to="/customer/Manage Beneficiary/add Beneficiary">
                  <span title="AddBeneficiary">
                    <MdAdd />
                  </span>
                </NavLink>
                <NavLink to="/customer/Passbook">
                  <span title="PassBook">
                    <LuBookMinus />
                  </span>
                </NavLink>
                <NavLink to="/customer/Account Statement">
                  <span title="AccountStatement">
                    <MdOutlineAccountBalanceWallet />
                  </span>
                </NavLink>
              </p>
            </div>
          </section>
        </div>
        {/* <div className="text-center flex flex-col items-center justify-center gap-4 border-2 w-[50%]">
          <p>Card Details</p>
          <section className="bg-gray-300 h-[30vh] w-[80%] "></section>
        </div> */}
        <div className=" flex flex-col items-center justify-center gap-4 w-[50%]">
          <p className="font-semibold text-xl text-gray-600">
            {" "}
            DebitCard Details
          </p>
          <section className=" h-[auto] w-[72%] py-5 px-10 rounded shadow-md shadow-slate-400	">
            <div className="w-[100%] h-[100%] flex flex-col  gap-3 basis-[19rem] justify-evenly border-neutral-700 rounded">
              <p className="flex items-center border">
                <span className="w-[170px] inline-block font-semibold  text-[#424242]">
                  Status
                </span>
                <span className="text-[#6e6e6e]">{data.status}</span>

                <span
                  className="w-[auto] pl-4 mt-1 inline-block font-semibold rounded  cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? (
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="orange"
                          d="M9 7c-4.96 0-9 4.035-9 9s4.04 9 9 9h14c4.957 0 9-4.043 9-9s-4.043-9-9-9zm14 2c3.879 0 7 3.121 7 7s-3.121 7-7 7s-7-3.121-7-7s3.121-7 7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="orange"
                        d="M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36"
                      />
                      <path
                        fill="orange"
                        d="M329.956 621.227a109.227 109.227 0 1 0 0-218.454a109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088a182.044 182.044 0 0 1 0 364.088"
                      />
                    </svg>
                  )}
                </span>
              </p>

              <p className="w-[100%] ">
                <span className="w-[170px] font-semibold inline-block text-[#424242]">
                  CardNumber:
                </span>
                {showDebitCard ? (
                  <span className="text-[#6e6e6e]">
                    {data?.accounts[0]?.debitCard?.cardNumber || "NA"}
                  </span>
                ) : (
                  <span className="text-[#6e6e6e]">
                    XXXXXXXX
                    {data?.accounts[0]?.debitCard?.cardNumber.slice(8, 13) ||
                      "NA"}
                  </span>
                )}
                <button
                  onClick={() => setShowDebitCard(!showDebitCard)}
                  className="text-sm p-1 bg-orange-400 rounded ml-2 text-white"
                >
                  {showDebitCard ? "Hide" : "Show"}
                </button>
                {console.log(showDebitCard)}
              </p>
              <p>
                <span className="w-[170px]  inline-block font-semibold text-[#424242]">
                  CVV:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.debitCard?.cvv || "NA"}
                </span>
              </p>
              <p>
                <span className="w-[170px]  inline-block font-semibold text-[#424242]">
                  Issue Date:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.debitCard?.issueDate || "NA"}{" "}
                </span>
              </p>
              <p>
                <span className="w-[170px]  inline-block font-semibold text-[#424242]">
                  Exp Date:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.debitCard?.expiryDate || "NA"}{" "}
                </span>
              </p>
            </div>
          </section>
        </div>
      </article>
    </section>
  );
};

export default CustomerDashBoard;
