import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import BankReducer from "./reducers/admin/adminBank/bankSlice";
import MdReducer from "./reducers/admin/adminMd/mdSlice";
import BranchReducer from "./reducers/managingDirector/mdBranch/branchSlice";
import BranchManagerReducer from "./reducers/managingDirector/mdBranchmanager/branchManagerSlice";
import BankManagerReducer from "./reducers/bankmanager/bankManagerSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    bank: BankReducer,
    md: MdReducer,
    branch: BranchReducer,
    branchManager: BranchManagerReducer,
    bankManager: BankManagerReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
