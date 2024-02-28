import { Navigate } from "react-router-dom";
import useBankState from "../utils/useBankState";

const PrivateRoute = ({ children }) => {
//null or undefined
let {userToken} = useBankState();
  if (userToken === null || undefined) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;