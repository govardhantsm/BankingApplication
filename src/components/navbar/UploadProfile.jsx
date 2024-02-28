import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import toast from "react-hot-toast";

const UploadProfile = () => {
  let [file, setFile] = useState(null);
  const data = JSON.parse(sessionStorage.getItem("myObject"));
  console.log(data);
  console.log(data.branchManagerId);
  console.log(file);

  let handleSubmit = async e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("files", file);
    try {
      let val = await axios.post(
        `http://106.51.76.167:8082/api/version/v1/documents/saveProfile?id=${data.branchManagerId}&users=Employee`,
        formData
      );
      console.log(val);

      if (val.status == 201) {
        toast.success("Uploaded Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(data);
      toast.error(error.data);
    }
  };

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section data-aos="zoom-in">
      <div className="flex flex-col justify-center items-center h-[80vh] ">
        <label htmlFor="file" className=" text-gray-500 text-xl pb-3">
          Select Profile Photo
        </label>

        <div className="flex items-center mt-4">
          <label className=" w-[35rem] h-[200px] border-2 bg-blue-100 border-blue-700 border-dashed rounded-[5px] text-[10px] p-4">
            <div className="flex flex-col items-center justify-center mt-4">
              {/* <PiFilesLight className="text-9xl  text-gray-500" /> */}
              {/* <img src={file} alt="" className="w-[120px] h-[120px] mt-2" /> */}
              {file === null ? null : (
                <img
                  data-aos="zoom-in"
                  className="w-[80px] h-[50px] mt-2"
                  loading="lazy"
                  src={URL?.createObjectURL(file)}
                  alt=""
                  height="100%"
                  width="120px"
                />
              )}
              <p className="font-semibold text-xl">Drag and drop an Image</p>
              <p className="text-xs ml-3 text-slate-500">
                or to <span className="text-blue-900 ">Browse</span> choose a
                file
              </p>
              <p className="text-xs ml-3 text-slate-500">PNG, JPG, PDF</p>
            </div>
            <input
              className="ml-36 text-sm cursor-pointer"
              type="file"
              accept="image/x-png,image/gif,image/jpeg"
              name="image"
              onChange={e => setFile(e?.target?.files[0])}
            />
          </label>
        </div>
      </div>
      <section className=" flex gap-2 mr-4 items-center justify-end text-[14px]">
        <button
          onClick={handleSubmit}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 "
        >
          submit
        </button>
      </section>
    </section>
  );
};

export default UploadProfile;
