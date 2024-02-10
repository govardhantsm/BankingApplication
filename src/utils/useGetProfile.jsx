import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useAuthState from './useAuthState';
import { GetAdminProfile } from "../redux/services/authThunk/GetAdminProfileThunk";

const useGetProfile = () => {
  const dispatch = useDispatch();
  const data = useAuthState();
  useEffect(() => {
    dispatch(GetAdminProfile());
  }, [dispatch]);
  return data;
};

export default useGetProfile;