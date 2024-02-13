import React from "react";

const PassBook = () => {
  return (
    <section>
      <div className="m-4 mx-6 font-semibold">
        <h2>PassBook</h2>
      </div>
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
            <tr>
              <td className="p-[10px] border">28/10/2023</td>
              <td className="p-[10px]">
                To Transfer <br />
                UPI/DR/8989989898
              </td>
              <td className="p-[10px]">2000</td>
              <td className="p-[10px]"></td>
              <td className="p-[10px]">85000</td>
            </tr>
            <tr>
              <td className="p-[10px]">28/10/2023</td>
              <td className="p-[10px]">
                To Transfer <br />
                UPI/DR/8989989898
              </td>
              <td className="p-[10px]"></td>
              <td className="p-[10px]">2000</td>
              <td className="p-[10px]">85000</td>
            </tr>
            <tr>
              <td className="p-[10px]">28/10/2023</td>
              <td className="p-[10px]">
                To Transfer <br />
                UPI/DR/8989989898
              </td>
              <td className="p-[10px]">2000</td>
              <td className="p-[10px]"></td>
              <td className="p-[10px]">85000</td>
            </tr>
            <tr>
              <td className="p-[10px]">28/10/2023</td>
              <td className="p-[10px]">
                To Transfer <br />
                UPI/DR/8989989898
              </td>
              <td className="p-[10px]"></td>
              <td className="p-[10px]">2000</td>
              <td className="p-[10px]">85000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PassBook;
