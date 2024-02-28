import { useSelector } from "react-redux";

const useBranchManagerState = () => {
  let data = useSelector(state => state.branchManager);
  return data;
};

export default useBranchManagerState;