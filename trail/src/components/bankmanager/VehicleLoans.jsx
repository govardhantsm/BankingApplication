import { TbArrowsDownUp } from "react-icons/tb";
//import GetMds from "../../../../utils/GetMds";
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { deleteMd } from "../../../../redux/reducers/md/mdSlice";
import { NavLink } from "react-router-dom";
import Spinner from "../pages/spinner/Spinner";

const VehicleLoans = () => {
  let state = null; //GetMds();

  let dispatch = useDispatch();
  let [search, setSearch] = useState(null);

  const [itemsPerPage, setItemsPerPage] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  let [loading, setLoading] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = state?.data?.data?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(state?.data?.data?.length / itemsPerPage);

  const handlePageChange = pageNumber => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setLoading(false);
    });
  };
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    setCurrentPage(cur => {
      return cur < totalPages ? cur + 1 : cur;
    });
  }

  return (
    <div className="w-[98%] h-[100%]">
      <div className="flex items-center justify-between pt-3 px-5">
        <p className="font-semibold">All Accounts</p>
        <NavLink
          to="/bankmanager/create-account "
          className="bg-gray-300 rounded py-2 px-3"
        >
          Vehicle Loans
        </NavLink>
      </div>
      {state?.status === true ? (
        <Spinner />
      ) : (
        <section className=" bg-white w-[98%] h-[90%] no-scrollbar ms-5">
          <header className="mx-10 my-2 w-[93%] flex justify-between items-center pt-4 ">
            <div>
              Show
              <select
                className=" mx-1 px-2 rounded-[0.25rem] border-2"
                onChange={e => {
                  setItemsPerPage(e.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              entries
            </div>
            <div>
              Search:
              <input
                className=" mx-1 px-2 border-2 rounded-[0.25rem]"
                type="text"
                onChange={e => {
                  let data = state?.data?.data?.filter(
                    ele =>
                      ele.email
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                      ele.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                  );
                  for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < currentItems.length; j++) {
                      if (
                        data[i].email.toLowerCase() ==
                          currentItems[j].email.toLowerCase() ||
                        data[i].name.toLowerCase() ==
                          currentItems[j].name.toLowerCase()
                      ) {
                        data = data.toSpliced(i, 1);
                      }
                    }
                  }

                  e.target.value && true ? setSearch(data) : setSearch(null);
                }}
              />
            </div>
          </header>
          <div className="mx-8 w-[95%]">
            <table style={{ tableLayout: "fixed", width: "100%" }}>
              <thead>
                <tr className="border-b-2">
                  <th className="py-2">
                    <div className="w-20% flex justify-between align-center px-2">
                      <span>Manager Name</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-20% flex justify-between align-center px-2">
                      <span>Email-Id</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-20% flex justify-between align-center px-2">
                      <span>Password</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-20% flex justify-between align-center px-2">
                      <span>Branch Name</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-20% flex justify-between align-center px-2">
                      <span> Actions</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {search?.map(data => {
                  return (
                    <tr className="text-xs border-b-2">
                      <td className="px-2 py-3 ">{data.name}</td>
                      <td className="px-2">{data.email}</td>
                      <td className="px-2">{data.password}</td>
                      <td className="px-2">{data.branch_name}</td>
                      <td className="px-2">
                        <div className="flex">
                          <span className="px-2  text-red-500">
                            <NavLink
                              to={`/adminlayout/managingDirectors/update/${data.employeeId}`}
                            >
                              <BiSolidPencil />
                            </NavLink>
                          </span>
                          <span className="px-2 ">
                            <MdDelete
                              onClick={() => {
                                let deleteConfirm =
                                  window.confirm("Are you sure");
                                if (deleteConfirm === true) {
                                  dispatch(deleteMd(data.employeeId));
                                }
                              }}
                            />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {currentItems?.map(data => {
                  return (
                    <tr className="text-xs border-b-2">
                      <td className="px-2 py-3 ">{data.name}</td>
                      <td className="px-2">{data.email}</td>
                      <td className="px-2">{data.password}</td>
                      <td className="px-2">{data.branch_name}</td>
                      <td className="px-2">
                        <div className="flex">
                          <span className="px-2  text-red-500">
                            <NavLink
                              to={`/managingDirectors/update/${data.employeeId}`}
                            >
                              <BiSolidPencil />
                            </NavLink>
                          </span>
                          <span className="px-2 ">
                            <MdDelete
                              onClick={() => {
                                let deleteConfirm =
                                  window.confirm("Are you sure");
                                if (deleteConfirm === true) {
                                  dispatch(deleteMd(data.employeeId));
                                }
                              }}
                            />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <footer className="mx-10 my-2 w-[93%]  flex justify-between items-center">
            <p>
              Showing {indexOfFirstItem} to {indexOfLastItem} of{" "}
              {state?.data?.data?.length} entries
            </p>
            <div className="mt-4 flex  items-center justify-center">
              <ul className="flex ">
                <li>
                  <button
                    className="text-center px-3 py-1 border-2"
                    onClick={prePage}
                  >
                    Prev
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer border-2 ${
                      index + 1 === currentPage
                        ? "bg-blue-500 text-white"
                        : "bg-blue-300 hover:bg-blue-200"
                    } px-3 py-1 rounded`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </li>
                ))}
                <li>
                  <button
                    className="text-center px-3 py-1 border-2"
                    onClick={nextPage}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </footer>
        </section>
      )}
    </div>
  );
};

export default VehicleLoans;
