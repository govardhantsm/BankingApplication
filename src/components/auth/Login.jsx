import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FormComp from "../../utils/FormComp";
import { FaLock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { userLogin } from "./../../redux/services/authThunk/UserLoginThunk";
import useGetProfile from "../../utils/useGetProfile";
import { GetAdminProfile } from "../../redux/services/authThunk/GetAdminProfileThunk";
import { getMdProfile } from "../../redux/services/managingDirectorThunk/mdBranchThunk/MdBranchThunk";
import { getBmProfile } from "../../redux/reducers/bankmanager/bankManagerSlice";
import { addData } from "../../redux/reducers/login/loginSlice";
import { getCustomerProfile } from "../../redux/reducers/customer/customerSlice";
import toast from "react-hot-toast";

const Login = ({ name }) => {
  let [isPswdVisible, setIspswdVisible] = useState(true);
  let [emailVerify, setEmailVerify] = useState();
  let [emailFormat, setEmailFormat] = useState(true);
  let [pswdVerify, setPswdVerify] = useState();
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let [incorrect, setIncorrect] = useState(false);
  let [state, setState] = useState({
    email: "",
    password: "",
    userType: name,
  });
  let { email, password, userType } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let isValidation = () => {
    return email !== "" && password !== "" ? true : false;
  };
  console.log(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.(in)$/.test(
      email
    )
  );

  let handleSubmit = e => {
    e.preventDefault();

    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.(in)$/.test(
        email
      )
    ) {
      setEmailFormat(true);
    } else if (email !== "") {
      setEmailFormat(false);
    } else {
      setEmailFormat(true);
    }
    if (email == "") {
      setEmailVerify("Email is required");
    } else {
      setEmailVerify("");
    }
    if (password === "") {
      setPswdVerify("Password is required");
    } else {
      setPswdVerify("");
    }

    if (isValidation()) {
      dispatch(userLogin(state)).then(x => {
        localStorage.setItem("access_token", x.payload.token);
        if (x.payload.role == "ADMIN") {
          dispatch(GetAdminProfile()).then(y => {
            sessionStorage.setItem("myObject", JSON.stringify(y.payload.data));
            navigate("/adminlayout");
          });

          //window.location.reload();
        } else if (x.payload.role == "MANAGING_DIRECTOR") {
          dispatch(getMdProfile()).then(y => {
            sessionStorage.setItem("myObject", JSON.stringify(y.payload.data));
            navigate("/mdlayout");
          });
        } else if (x.payload.role == "BRANCH_MANAGER") {
          dispatch(getBmProfile()).then(y => {
            sessionStorage.setItem("myObject", JSON.stringify(y.payload.data));
            navigate("/bankmanager");
          });
        } else if (x.payload.role == "ACCOUNT_HOLDER") {
          dispatch(getCustomerProfile()).then(y => {
            sessionStorage.setItem("myObject", JSON.stringify(y.payload.data));
            navigate("/customer");
          });
        } else {
          setIncorrect(true);
        }
      });
    }
  };

  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in">
      <FormComp name={name + " " + "Login"}>
        <p
          className={`${
            incorrect ? " text-red-500 text-center " : "hidden"
          }  p-0  mb-4`}
        >
          {"invalid credentials"}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group relative">
            {/* <label htmlFor="email">email</label> */}

            <input
              type="email"
              className="form-control p-2 border-b-2 w-[88%] mx-6 mb-2"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email-id"
            />
            <span className="absolute top-2 right-12 text-2xl text-[rgb(157,155,155)]">
              <HiOutlineMail />
            </span>
          </div>
          <p className="text-red-600 text-xm mx-7">{emailVerify}</p>
          {!emailFormat ? (
            <p className="text-red-600 text-xm mx-7">
              Enter email in email format
            </p>
          ) : (
            ""
          )}

          <div className="form-group relative">
            {/* <label htmlFor="password">password</label> */}
            <input
              type={isPswdVisible ? "password" : "text"}
              className="form-control p-2 border-b-2 w-[88%] mx-6 m-2"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
            <span
              className="absolute top-4 right-12 text-2xl text-[rgb(157,155,155)]"
              onClick={() => setIspswdVisible(!isPswdVisible)}
            >
              {state.password ? (
                isPswdVisible ? (
                  <FiEye />
                ) : (
                  <FiEyeOff />
                )
              ) : (
                <FiEye />
              )}
            </span>
          </div>
          <p className="text-red-600 text-xm mx-7">{pswdVerify}</p>
          {/* <div className="form-group pt-3" value={userType} onChange={handleChange}>
          <label htmlFor=" userType" className="ps-6">Choose UserType</label>
          <div>
          <input type="radio" value="employee" name="userType" />
          emoployee
          <input type="radio" value="customer" name="userType" />
          customer
          </div>
        </div> */}

          <div className="form-group mx-6 pt-12 w-[88%]">
            <button
              className="py-1 w-full  rounded-md bg-blue-600 text-white"
              type="submit"
            >
              Login
            </button>
          </div>
          <footer className="flex items-center justify-center py-4  text-[rgb(157,155,155)]">
            <FaLock className="pe-1" />
            <span className="me-4">
              <Link to={"/forgotpassword"}> Forgot Password?</Link>
            </span>
            {/* <span>
            <Link to={"/register"}>Register</Link>
          </span> */}
          </footer>
        </form>
      </FormComp>
    </div>
  );
};

export default Login;
{
  /* <div className="flex items-center justify-evenly pt-4 pb-10 text-[rgb(157,155,155)] text-sm">
  <button
    onClick={() => {
      setName("Switch To MD Login");
    }}
    className="md"
  >
    Switch To MD Login
  </button>
  <button
    onClick={() => {
      setName("Switch To Bank Manager Login");
    }}
    className="manager"
  >
    Switch To Bank Manager Login
  </button>
</div>; */
}
