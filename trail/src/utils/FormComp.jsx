import { useState } from "react";

const FormComp = ({ name, children }) => {
  return (
    <section className="w-[100%] h-[100vh] flex items-center justify-center bg-[rgb(237,237,237)] ">
      <div className="bg-white w-[26%] h-auto rounded shadow-md">
        <p className="flex justify-center my-4">
          {/* <span className="border-2 flex items-center justify-center border-red-500 rounded-full w-8 h-8 ">
            <strong className="text-green-700 text-xl">S</strong>{" "}
          </span>{" "} */}
        </p>
        <p className="text-center my-4 text-[rgb(92,92,92)] font-[600] text-lg	">
          Welcome to {name}
        </p>
        {/* <p className="uppercase text-center text-xs pb-4 ">{name}</p> */}
        {children}
      </div>
    </section>
  );
};

export default FormComp;