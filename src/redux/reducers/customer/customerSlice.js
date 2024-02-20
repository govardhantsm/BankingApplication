import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import {
  AxiosInstanceProtected,
  AxiosInstancePublic,
} from "../../../axios/AxiosInstance";
import { data } from "autoprefixer";


const initialState = {
  data: [],
  error: null,
  status: false,
  loading: false,
  success: false,
};

//=================Fetch Customer==============/
export const getCustomerProfile = createAsyncThunk("getBmProfile", async () => {
  try {
    const { data } = await AxiosInstanceProtected.get(`/users/getUserProfile`);
    return data;
  } catch (error) {
    return error.message;
  }
});


export const customerSlice = createSlice({
  name: "bankManager",
  initialState,
  reducers: {},
  extraReducers: builder => {
    //getCustomerProfile
    builder
      .addCase(getCustomerProfile.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getCustomerProfile.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getCustomerProfile.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default customerSlice.reducer;
