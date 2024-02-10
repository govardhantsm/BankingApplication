import { TbArrowsDownUp } from "react-icons/tb";
import GetMds from "../../../../utils/GetMds";
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Spinner from "../../spinner/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";
import { deleteMd } from "../../../../redux/services/adminThunk/adminMdThunk/AdminMdThunk";

const AllMD = () => {
  let state = GetMds();
  let dispatch = useDispatch();
  let [search, setSearch] = useState(null);

  const [itemsPerPage, setItemsPerPage] = useState(2);

  const [currentPage, setCurrentPage] = useState(1);
  let [loading, setLoading] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = state?.data?.data?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const [data, setData] = useState([{ currentItems }]); // Your initial data
  console.log(data);
  const [isAscending, setIsAscending] = useState(true);
  const totalPages = Math.ceil(state?.data?.data?.length / itemsPerPage);

  const handleToggleSort = () => {
    setIsAscending(!isAscending);
    setData(data.sort((a, b) => (isAscending ? a - b : b - a)));
    console.log("currentItems:", currentItems);
  };

  const handlePageChange = (pageNumber) => {
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
    setCurrentPage((cur) => {
      return cur < totalPages ? cur + 1 : cur;
    });
  }

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-[100%] p-5 h-[100%]" data-aos="zoom-in">
      <div className="pb-3 font-semibold">All MD</div>
      {state.status === true ? (
        <Spinner />
      ) : (
        <section className=" bg-white w-[100%] overflow-auto h-[95%] no-scrollbar">
          <header className="mx-10 my-2 w-[93%] flex justify-between items-center ">
            <div>
              Show
              <select
                className="px-2 rounded-[0.25rem] border-2"
                onChange={(e) => {
                  setItemsPerPage(e.target.value);
                }}
              >
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
              </select>
              entries
            </div>
            <div>
              Search:
              <input
                className=" mx-1 px-2 border-2 rounded-[0.25rem]"
                type="text"
                onChange={(e) => {
                  let data = state?.data?.data?.filter(
                    (ele) =>
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
          <div className="mx-12 w-[91%]">
            <table style={{ tableLayout: "fixed", width: "100%" }}>
              <thead>
                <tr className="border-b-2">
                  <th className="py-2">
                    <div className="w-20% flex justify-between align-center px-2">
                      <span>Manager Name</span>
                      <button onClick={handleToggleSort}>
                        <TbArrowsDownUp />
                      </button>
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
                      <span>Bankname</span>
                      <span>
                        <TbArrowsDownUp />
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="w-20% flex justify-between align-center px-2">
                      <span>Address</span>
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
                {search?.map((data) => {
                  return (
                    <tr className="text-xs border-b-2">
                      <td className="px-2 py-3 ">{data.name}</td>
                      <td className="px-2">{data.email}</td>
                      <td className="px-2">{data.bankName}</td>
                      <td className="px-2">{data?.addres?.city}</td>
                      <td className="px-2">
                        <div className="flex">
                          <span className="px-2  text-red-500">
                            <NavLink
                              to={`/adminlayout/update-md/${data.employeeId}`}
                            >
                              <BiSolidPencil />
                            </NavLink>{" "}
                          </span>

                          <span className="px-2 ">
                            <MdDelete
                              onClick={() => {
                                let deleteConfirm =
                                  window.confirm("Are you sure");
                                if (deleteConfirm === true) {
                                  dispatch(deleteMd(data.managingDirectorId));
                                }
                              }}
                            />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {currentItems?.map((data) => {
                  return (
                    <tr className="text-xs border-b-2">
                      <td className="px-2 py-3 ">{data.name}</td>
                      <td className="px-2">{data.email}</td>
                      <td className="px-2">{data.bankName}</td>
                      <td className="px-2">{data?.addres?.city}</td>
                      <td className="px-2">
                        <div className="flex">
                          <span className="px-2  text-red-500">
                            <NavLink
                              to={`/adminlayout/update-md/${data.managingDirectorId}`}
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
                                  dispatch(deleteMd(data.managingDirectorId));
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
              Showing {indexOfFirstItem + 1} to{" "}
              {indexOfLastItem < state?.data?.data?.length
                ? indexOfLastItem
                : state?.data?.data?.length}{" "}
              of
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

export default AllMD;
