import { useSelector } from "react-redux";
const useMdState = () => {
  let data = useSelector(state => state.md);
  return data;
};

export default useMdState;
