import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useMdState from './useMdState';
import { getMd } from "../redux/services/adminThunk/adminMdThunk/AdminMdThunk";
const GetMds = () => {
  let dispatch = useDispatch();
  let md = useMdState();
  useEffect(() => {
    dispatch(getMd());
  }, [dispatch]);
  return md;
};

export default GetMds;
