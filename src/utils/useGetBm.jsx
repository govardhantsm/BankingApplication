import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useBmState from './useBmState';
import { getBmProfile } from "../redux/reducers/bankmanager/bankManagerSlice";
const useGetBm = () => {
  const dispatch = useDispatch();
  const bankManager = useBmState();
  useEffect(() => {
    dispatch(getBmProfile());
  }, [dispatch]);
  return bankManager;
};

export default useGetBm;