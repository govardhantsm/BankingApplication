import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useBranchState from "./useBranchState";
import { getMdProfile } from "../redux/services/managingDirectorThunk/mdBranchThunk/MdBranchThunk";

const useGetMd = () => {
  const dispatch = useDispatch();
  const branch = useBranchState();
  useEffect(() => {
    dispatch(getMdProfile());
  }, [dispatch]);
  return branch;
};

export default useGetMd;
