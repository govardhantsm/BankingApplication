import { useSelector } from "react-redux";

const useBankState = () => {
  let data = useSelector(state => state.bank);
  return data;
};

export default useBankState;
