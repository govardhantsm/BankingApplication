import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getStatement } from "../../../redux/services/CustomerThunk/AccountsThunk";
import AOS from "aos";
import "aos/dist/aos.css";

const PassBook = () => {
  let dispatch = useDispatch();
  let [statement, SetStatement] = useState();
  const data = JSON.parse(sessionStorage.getItem("myObject"));

  useEffect(() => {
    dispatch(getStatement(data.accounts[0].accountNumber)).then(x => {
      SetStatement(x.payload.data);
    });
  }, []);

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section data-aos="zoom-in">
      <div className="m-4 mx-6 font-semibold">
        <h2>PassBook</h2>
      </div>
      <div className=" text-slate-600 w-[96%] mx-6 bg-white p-8 text-sm">
        <div className="flex w-[100%] justify-between">
          {/* <div>
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
          </div> */}
          {/* <div>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              name=""
              id="search"
              className="border ml-2 rounded"
            />
          </div> */}
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
                  <td className="p-[10px] border-r">{st.date?.slice(0, 10)}</td>
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
    </section>
  );
};

export default PassBook;
