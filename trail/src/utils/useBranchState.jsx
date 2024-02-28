import { useSelector } from "react-redux";

const useBranchState = () => {
  let data = useSelector(state => state.branch);
  return data;
};

export default useBranchState;
