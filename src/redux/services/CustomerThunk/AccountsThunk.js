import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstanceProtected } from "../../../axios/AxiosInstance";


export const getBank = createAsyncThunk("getBank", async () => {
  try {
    const { data } = await AxiosInstanceProtected.get(`/banks/getAll`);
    return data;
  } catch (error) {
    return error.message;
  }
});
