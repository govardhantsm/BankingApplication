import { useState } from "react";
import { useDispatch } from "react-redux";
// import { registerThunk } from "../../redux/reducers/auth/authSlice";
// import FormComp from "../../utils/FormComp";
// import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Register = () => {
  let dispatch = useDispatch();
  // const navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  let { name, email, password, avatar } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    // dispatch(registerThunk(state));
    console.log(state);
    navigate("/");
  };
  // Animation:
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in">
      <FormComp name={"Register"}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <label htmlFor="name">name</label> */}
            <input
              type="text"
              className="form-control p-2 border-b-2 w-[88%] mx-6 mb-4"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">email</label> */}
            <input
              type="email"
              className="form-control p-2 border-b-2 w-[88%] mx-6 mb-4"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">password</label> */}
            <input
              type="password"
              className="form-control p-2 border-b-2 w-[88%] mx-6 mb-4"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="avatar">avatar</label> */}
            <input
              type="avatar"
              className="form-control p-2 border-b-2 w-[88%] mx-6 mb-4"
              id="avatar"
              name="avatar"
              value={avatar}
              onChange={handleChange}
              placeholder="Enter avatar-url"
            />
          </div>
          <div className="form-group">
            <button
              className="py-1 px-[9rem] mx-6 rounded-md bg-blue-600 text-white mt-4 mb-6"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </FormComp>
    </div>
  );
};

export default Register;
