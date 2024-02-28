import { AxiosInstanceProtected} from "../../../axios/AxiosInstance";
import { createAsyncThunk } from '@reduxjs/toolkit';
export const GetAdminProfile = createAsyncThunk("/admins/getAdmin", async () => {
    try {
      const { data } = await AxiosInstanceProtected.get(`/admins/getAdmin`);
      return data;
    } catch (error) {
      return error.message;
    }
  });