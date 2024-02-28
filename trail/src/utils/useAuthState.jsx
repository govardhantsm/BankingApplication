import { useSelector } from "react-redux";

const useAuthState = () => {
  let data = useSelector(state => state.auth);
  return data;
};

export default useAuthState;