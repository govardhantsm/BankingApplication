import React from "react";

const CustomerDashBoard = () => {
  const data = JSON.parse(sessionStorage.getItem("myObject"));
  console.log(data);
  return (
    <section className="m-6 bg-white border-2 h-[87vh]">
      <div className="h-[20vh] border w-[100%] flex justify-center items-center text-3xl font-semibold text-slate-800">
        {" "}
        <p>Customer Dashboard</p>
      </div>
      <article className="flex border h-[67vh]">
        <div className=" flex flex-col items-center justify-center gap-4 border-2 w-[50%]">
          <p className="font-semibold"> Account Details</p>
          <section className=" h-[30vh] w-[70%] p-10 rounded shadow-md shadow-slate-300	">
            <div className="w-[100%] h-[100%] flex flex-col gap-3 basis-[19rem] justify-evenly border-neutral-700 rounded">
              <p>
                <span className="w-[170px]  inline-block font-semibold text-[#6e6e6e]">
                  AccountNo:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.accountNumber || "NA"}
                </span>
              </p>
              <p className="w-[100%] ">
                <span className="w-[170px] font-semibold inline-block text-[#6e6e6e]">
                  AccountType:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.accountType || "NA"}{" "}
                </span>
              </p>
              <p>
                <span className="w-[170px]  inline-block font-semibold text-[#6e6e6e]">
                  Available Amount:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.availableBalance}{" "}
                </span>
              </p>
            </div>
          </section>
        </div>
        {/* <div className="text-center flex flex-col items-center justify-center gap-4 border-2 w-[50%]">
          <p>Card Details</p>
          <section className="bg-gray-300 h-[30vh] w-[80%] "></section>
        </div> */}
        <div className=" flex flex-col items-center justify-center gap-4 border-2 w-[50%]">
          <p className="font-semibold"> DebitCard Details</p>
          <section className=" h-[30vh] w-[65%] p-10 rounded shadow-md shadow-slate-300	">
            <div className="w-[100%] h-[100%] flex flex-col gap-3 basis-[19rem] justify-evenly border-neutral-700 rounded">
              <p className="w-[100%] ">
                <span className="w-[170px] font-semibold inline-block text-[#6e6e6e]">
                  CardNumber:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.debitCard?.cardNumber || "NA"}
                </span>
              </p>
              <p>
                <span className="w-[170px]  inline-block font-semibold text-[#6e6e6e]">
                  CVV:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.debitCard?.cvv || "NA"}
                </span>
              </p>
              <p>
                <span className="w-[170px]  inline-block font-semibold text-[#6e6e6e]">
                  Issue Date:
                </span>
                <span className="text-[#6e6e6e]">
                  {data?.accounts[0]?.debitCard?.issueDate || "NA"}{" "}
                </span>
              </p>
              <p>
                <span className="w-[170px]  inline-block font-semibold text-[#6e6e6e]">
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
