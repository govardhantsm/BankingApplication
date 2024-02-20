import { useState } from "react";

const FormComp = ({name,children}) => {

  return (
  <section className="w-[100%] h-[100vh] flex items-center justify-center bg-[rgb(237,237,237)]">
      <div className="bg-white w-[26%] h-auto">
        <p className="flex justify-center my-4"><span className="border-2 flex items-center justify-center border-red-500 rounded-full w-8 h-8 "><strong className="text-green-700 text-xl">S</strong> </span> </p>
        <p className="text-center my-2 font-[600]">Welcome to QSP Bank</p>
      <p className="uppercase text-center text-xs pb-6 ">{name}</p>
      {children}
    </div>
  </section>
  );
};

export default FormComp;
