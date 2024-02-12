import React from "react";

const PassBook = () => {
  return (
    <section>
      <div className="m-4 font-semibold">
        <h2>PassBook</h2>
      </div>
      <div className=" text-slate-600 w-[80%] ml-4 bg-white p-8">
        <div className="flex w-[100%] justify-between">
          <div>
            <span>Show</span>
            <select name="" id="" className="w-[70px] border rounded m-1 text-center">
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
          <thead>
            <tr>
              <th className="p-[10px]">Date&Time</th>
              <th className="p-[10px]">Narration</th>
              <th className="p-[10px]">Debit</th>
              <th className="p-[10px]">Credit</th>
              <th className="p-[10px]">Balance</th>
            </tr>
          </thead>
          <tbody className="text-left">
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
