/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import useBankState from "../utils/useBankState";

const PublicRoute = ({ children }) => {
let {userToken} = useBankState();
  if (userToken) {
    return <Navigate to="/adminlayout" />;
  } else {
    return <>{children}</>;
  }
};

export default PublicRoute;