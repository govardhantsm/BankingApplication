import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { getAccountStatement } from "../../../redux/services/CustomerThunk/AccountsThunk";

const AccountStatement = () => {
  const data = JSON.parse(sessionStorage.getItem("myObject"));
  let dispatch = useDispatch();
  let [accountNumber, SetAccountNumber] = useState(
    data.accounts[0].accountNumber
  );

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 },
    (_, index) => 1900 + index + 1
  );
  let [statement, SetStatement] = useState();
  let [file, SetFile] = useState();
  let [startDate, SetStartDate] = useState();
  let [endDate, SetEndDate] = useState();
  let [date, SetDate] = useState("");

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section data-aos="zoom-in">
      <div className="bg-gray-50 ">
        <div className="middle font-semibold text-lg p-2 m-2">
          Account Statement
        </div>
        <div className="bottom p-4 ps-10 bg-white ms-4 shadow-md me-8 mb-4">
          <p className="text-sm text-blue-600 pb-2">Select the account</p>

          <div className="flex border-b-[1px] pb-2 me-[20%] font-semibold text-sm text-slate-700 ">
            <p className="basis-[90%]">Account Number</p>
            <p className="basis-[80%]">Branch</p>
            <p className="basis-[30%]">Account Type</p>
          </div>
          {data?.accounts?.map(account => {
            return (
              <div className="flex items-center border-b-[1px] me-[20%] pb-2">
                <div className="flex gap-2 pt-2 basis-[45%]">
                  <input
                    type="radio"
                    name="account"
                    checked={accountNumber === account.accountNumber}
                    onChange={() => SetAccountNumber(account.accountNumber)}
                    className="accent-black"
                  ></input>
                  <p className="text-sm font-semibold">
                    {account.accountNumber}
                  </p>
                </div>
                <div className="basis-[40%] text-xs text-slate-500">
                  <p>{account.branch.branchName}</p>
                </div>
                <div className="text-xs text-slate-500">
                  <p>{account.accountType}</p>
                </div>
              </div>
            );
          })}

          <div className="flex gap-10 text-xs pt-4 pb-4 text-slate-500">
            <p>Selected Account Number</p>
            <p>{accountNumber}</p>
          </div>
          <label htmlFor="date" className="text-sm text-blue-600">
            Select option for Statement Period
          </label>
          <div className="pt-3 flex items-center">
            <div className="flex text-xs w-[100%] gap-2 basis-[8%] ">
              <input
                type="radio"
                name="date"
                checked={date === "By Date"}
                onChange={() => {
                  SetDate("By Date");
                }}
                className="accent-black"
              ></input>
              <p>By Date</p>
            </div>
            <div className="flex text-xs basis-[8%] gap-2">
              <input
                type="radio"
                name="date"
                checked={date === "By Month"}
                onChange={() => {
                  SetDate("By Month");
                }}
                className="accent-black"
              ></input>
              <p>By Month</p>
            </div>
            <div className="flex text-xs basis-[10%] gap-2">
              <input
                type="radio"
                name="date"
                checked={date === "By Last 6 Months"}
                onChange={() => {
                  SetDate("By Last 6 Months");
                  let month = new Date().getMonth() - 5;
                  let year = new Date().getFullYear();
                  if (new Date().getMonth() - 5 < 0) {
                    month = 12 + (new Date().getMonth() - 5);
                    year -= 1;
                  }

                  SetStartDate(`${year}-${month > 9 ? month : `0${month}`}-01`);
                  SetEndDate(
                    `${new Date().getFullYear()}-${
                      new Date().getMonth() + 1 > 9
                        ? new Date().getMonth() + 1
                        : `0${new Date().getMonth() + 1}`
                    }-${new Date().getDate()}`
                  );
                }}
                className="accent-black"
              ></input>
              <p>By Last 6 Months</p>
            </div>
            <div className="flex ms-6 text-xs basis-[15%] gap-2">
              <input
                type="radio"
                name="date"
                checked={date === "By Financial Year"}
                onChange={() => {
                  SetDate("By Financial Year");
                }}
                className="accent-black"
              ></input>
              <p>By Financial Year</p>
            </div>
          </div>

          {date == "By Date" ? (
            <>
              <div className="flex pt-5 gap-8  text-xs items-center ms-16">
                <p className="text-slate-600 font-bold">Start Date</p>
                <input
                  type="date"
                  value={startDate}
                  onChange={e => SetStartDate(e.target.value)}
                  className="border-[1px] rounded border-gray-400 p-1 ps-3 w-[10%]"
                ></input>
              </div>
              <div className="flex pt-6 gap-9  text-xs items-center ms-16">
                <p className="text-slate-600 font-bold">End Date</p>
                <input
                  type="date"
                  onChange={e => SetEndDate(e.target.value)}
                  value={endDate}
                  className="border-[1px] rounded border-gray-400 p-1 ps-3 w-[10%]"
                ></input>
              </div>
            </>
          ) : date == "By Month" ? (
            <>
              {" "}
              <div className="flex pt-5 gap-8  text-xs items-center ms-16">
                <p className="text-slate-600 font-bold"> Month , Year</p>
                <input
                  type="month"
                  className="border-[1px] rounded border-gray-400 p-1 ps-3 ms-4 w-[15%]"
                  onChange={e => {
                    SetStartDate(`${e.target.value}-01`);

                    SetEndDate(
                      `${e.target.value}-${new Date(
                        e.target.value.slice(0, 4),
                        e.target.value.slice(5),
                        0
                      ).getDate()}`
                    );
                  }}
                ></input>
              </div>
            </>
          ) : date == "By Financial Year" ? (
            <>
              <div className="flex pt-5 gap-8  text-xs items-center ms-16">
                <p className="text-slate-600 font-bold">Year</p>
                <select
                  id="yearSelect"
                  name="yearSelect"
                  onChange={e => {
                    SetStartDate(`${e.target.value}-01-01`);
                    SetEndDate(`${e.target.value}-12-31`);
                  }}
                  className="border-[1px] rounded border-gray-400 p-1 ps-3 w-[10%]"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : (
            ""
          )}

          <p className="text-sm pt-5 text-blue-600">
            Select appropirate option to view,print or download the statement
          </p>
          <div className="flex items-center pt-4">
            <div className="flex text-xs basis-[6%] gap-2">
              <input
                type="radio"
                name="data"
                value={"view"}
                checked={file === "view"}
                onChange={() => {
                  SetFile("view");
                }}
                className="accent-black"
              ></input>
              <p>View</p>
            </div>

            <div className="flex text-xs basis-[16%] gap-2">
              <input
                type="radio"
                name="data"
                value={"excel"}
                checked={file === "excel"}
                onChange={() => {
                  SetFile("excel");
                  SetStatement(null);
                }}
                className="accent-black"
              ></input>
              <p>Download in MS Excel format</p>
            </div>

            <div className="flex text-xs basis-[15%] gap-2 ml-4">
              <input
                type="radio"
                name="data"
                value={"pdf"}
                checked={file === "pdf"}
                onChange={() => {
                  SetFile("pdf");
                  SetStatement(null);
                }}
                className="accent-black"
              ></input>
              <p>Download in PDF format</p>
            </div>
          </div>
          {statement ? (
            <div className=" text-slate-600 w-[96%] mx-6 bg-white p-8 text-sm">
              <div className="flex w-[100%] justify-between">
                <div>
                  <span>Show</span>
                  <select
                    name=""
                    id=""
                    className="w-[70px] border rounded m-1 text-center"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>
                  <span>entries</span>
                </div>
                <div>
                  <label htmlFor="search">Search</label>
                  <input
                    type="text"
                    name=""
                    id="search"
                    className="border ml-2 rounded"
                  />
                </div>
              </div>
              <table className="w-[100%] text-left border mt-3">
                <thead className="border">
                  <tr>
                    <th className="p-[10px] border">Date&Time</th>
                    <th className="p-[10px] border">Narration</th>
                    <th className="p-[10px] border">Debit</th>
                    <th className="p-[10px] border">Credit</th>
                    <th className="p-[10px]">Balance</th>
                  </tr>
                </thead>
                <tbody className="text-left">
                  {statement?.map(st => {
                    return (
                      <tr className="bg-gray-50">
                        <td className="p-[10px] border-r">
                          {st.date?.slice(0, 10)}
                        </td>
                        <td className="p-[10px] border-r  ">
                          To Transfer <br />
                          {st.narration}
                        </td>
                        <td className="p-[10px] border-r">{st.debit}</td>
                        <td className="p-[10px] border-r">{st.credit}</td>
                        <td className="p-[10px] ">{st.balance}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
          <div className="flex gap-2 justify-center pt-8 pb-8">
            <button
              type="submit"
              className="border-[1px] bg-blue-600 text-white rounded p-1 px-2"
              onClick={e => {
                e.preventDefault();
                if (file == "view") {
                  dispatch(
                    getAccountStatement({ accountNumber, startDate, endDate })
                  ).then(x => {
                    SetStatement(x.payload.data);
                  });
                } else if (file == "excel") {
                  dispatch(
                    getAccountStatement({ accountNumber, startDate, endDate })
                  ).then(x => {
                    const data = [
                      ["Date", "Narration", "Debit", "Credit", "Balance"],
                    ];
                    x.payload.data.map(row => {
                      let a = [];
                      a.push(row.date);
                      a.push(row.narration);
                      a.push(row.debit);
                      a.push(row.credit);
                      a.push(row.balance);
                      return data.push(a);
                    });

                    const workbook = XLSX.utils.book_new();
                    const worksheet = XLSX.utils.aoa_to_sheet(data);

                    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

                    const excelBuffer = XLSX.write(workbook, {
                      bookType: "xlsx",
                      type: "array",
                    });

                    const excelBlob = new Blob([excelBuffer], {
                      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    });

                    saveAs(excelBlob, "data.xlsx");
                  });
                } else {
                  dispatch(
                    getAccountStatement({ accountNumber, startDate, endDate })
                  ).then(x => {
                    const doc = new jsPDF();

                    const columns = [
                      "Date",
                      "Narration",
                      "Debit",
                      "Credit",
                      "Balance",
                    ];

                    const rows = [];
                    {
                      x.payload.data.map(row => {
                        let a = [];
                        a.push(row.date);
                        a.push(row.narration);
                        a.push(row.debit);
                        a.push(row.credit);
                        a.push(row.balance);
                        return rows.push(a);
                      });
                    }

                    doc.autoTable({ head: [columns], body: rows });
                    doc.save("table.pdf");
                  });
                }
              }}
            >
              Submit
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                SetFile(null);
                SetDate(null);
              }}
              className="border-[1px] bg-gray-400 rounded text-white p-1 px-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountStatement;
