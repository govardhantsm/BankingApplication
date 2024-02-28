import React from "react";

const MyLoans = () => {
  return (
    <section>
      <h2 className="m-6 font-semibold text-lg">My Loans</h2>
      <table className="ml-5 text-slate-400 bg-white shadow-md w-[80%] text-center">
        <thead>
          <tr>
            <th className="p-[10px]">Name</th>
            <th className="p-[10px]">Loan Number</th>
            <th className="p-[10px]">Loan Type</th>
            <th className="p-[10px]">Loan Amount</th>
            <th className="p-[10px]">Tenure</th>
            <th className="p-[10px]">Interest Rate</th>
            <th className="p-[10px]">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px] font-semibold">Abhishek R</td>
            <td className="p-[10px]">8978897889</td>
            <td className="p-[10px]">Personal Loan</td>
            <td className="p-[10px]">500000</td>
            <td className="p-[10px]">4 years</td>
            <td className="p-[10px]">12.5%</td>
            <td className="p-[10px]">Approved</td>
          </tr>
          <tr>
            <td className="p-[10px] font-semibold">Abhishek R</td>
            <td className="p-[10px]">8978897889</td>
            <td className="p-[10px]">Personal Loan</td>
            <td className="p-[10px]">500000</td>
            <td className="p-[10px]">4 years</td>
            <td className="p-[10px]">12.5%</td>
            <td className="p-[10px]">Approved</td>
          </tr>
          <tr>
            <td className="p-[10px] font-semibold">Abhishek R</td>
            <td className="p-[10px]">8978897889</td>
            <td className="p-[10px]">Personal Loan</td>
            <td className="p-[10px]">500000</td>
            <td className="p-[10px]">4 years</td>
            <td className="p-[10px]">12.5%</td>
            <td className="p-[10px]">Approved</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default MyLoans;
