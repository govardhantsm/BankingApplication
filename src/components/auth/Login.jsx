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

const Login = ({ name }) => {
  let [isPswdVisible, setIspswdVisible] = useState(true);
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

  let handleSubmit = e => {
    e.preventDefault();
    // let data =
    dispatch(userLogin(state)).then(x => {
      if (x.payload == "Employee not found");
      {
        setIncorrect(true);
      }
      localStorage.setItem("access_token", x.payload.token);
      if (x.payload.role == "ADMIN") {
        window.location.assign("/adminlayout");
        localStorage.setItem("role", x.payload.role);
      }
      if (x.payload.role == "MANAGING_DIRECTOR") {
        window.location.assign("/mdlayout");
        localStorage.setItem("role", x.payload.role);
      }
      if (x.payload.role == "BRANCH_MANAGER") {
        window.location.assign("/bankmanager");
        localStorage.setItem("role", x.payload.role);
      }
      if (x.payload.role == "ACCOUNT_HOLDER") {
        window.location.assign("/customer");
        localStorage.setItem("role", x.payload.role);
      }
    });

    // data.unwrap().then(x => {
    //   console.log(x);
    //   localStorage.setItem("access_token", x.token);
    //   if (x.role == "ADMIN") {
    //     window.location.assign("/adminlayout");
    //     localStorage.setItem("role", x.role);
    //   }
    //   if (x.role == "MANAGING_DIRECTOR") {
    //     window.location.assign("/mdlayout");
    //     localStorage.setItem("role", x.role);
    //   }
    //   if (x.role == "BRANCH_MANAGER") {
    //     window.location.assign("/bankmanager");
    //     localStorage.setItem("role", x.role);
    //   }
    //   if (x.role == "ACCOUNT_HOLDER") {
    //     console.log(x);
    //     window.location.assign("/customer");
    //     localStorage.setItem("role", x.role);
    //   }
    // });
  };
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in">
      <FormComp name={name + "_" + "Login"}>
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
              className="form-control p-2 border-b-2 w-[88%] mx-6 mb-4"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email-id"
            />
            <span className="absolute top-2 right-7 text-2xl text-[rgb(157,155,155)]">
              <HiOutlineMail />
            </span>
          </div>
          <div className="form-group relative">
            {/* <label htmlFor="password">password</label> */}
            <input
              type={isPswdVisible ? "password" : "text"}
              className="form-control p-2 border-b-2 w-[88%] mx-6"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
            <span
              className="absolute top-2 right-7 text-2xl text-[rgb(157,155,155)]"
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
