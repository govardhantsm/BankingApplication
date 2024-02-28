import { useSelector } from "react-redux";

const useBmState = () => {
  let data = useSelector(state => state.bankManager);
  return data;
};

export default useBmState;