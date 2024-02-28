import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllSavingsAccounts, getAllcurrentAccounts } from "../../../services/managingDirectorThunk/mdAccountThunk/MdAccountThunk";
import { getAllAccounts } from './../../../services/managingDirectorThunk/mdAccountThunk/MdAccountThunk';
const initialState = {
  data: [],
  error: null,
  status: false,
  loading: false,
  success: false,
};
export const mdAccountSlice = createSlice({
  name: "mdAccount",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // fetch all accounts
    builder
      .addCase(getAllAccounts.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getAllAccounts.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload.data;
      })
      .addCase(getAllAccounts.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch all savings accounts
    builder
      .addCase(getAllSavingsAccounts.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getAllSavingsAccounts.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload.data;
      })
      .addCase(getAllSavingsAccounts.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch all current accounts
    builder
      .addCase(getAllcurrentAccounts.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getAllcurrentAccounts.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload.data;
      })
      .addCase(getAllcurrentAccounts.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default mdAccountSlice.reducer;
