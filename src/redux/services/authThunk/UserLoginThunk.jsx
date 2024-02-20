import {AxiosInstancePublic } from "../../../axios/AxiosInstance";
import { createAsyncThunk } from '@reduxjs/toolkit';
export const userLogin = createAsyncThunk(
    "/auth/login",
    async (payload, { rejectWithValue }) => {
      try {
        const { data } = await AxiosInstancePublic.post(
          `/login?users=${payload.userType}`,
          payload
        );
        // store user's token in local storage
        localStorage.setItem("access_token", data?.data?.token);
        return data.data;
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
);