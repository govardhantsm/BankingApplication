import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstanceProtected } from "../../../axios/AxiosInstance";


export const savebeneficiary = createAsyncThunk("savebeneficiarys", async (payload) => {
  try {
    const { data } = await AxiosInstanceProtected.post(`/beneficiarys`,payload);
    return data;
  } catch (error) {
    return error.message;
  }
});
