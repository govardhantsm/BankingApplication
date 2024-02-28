import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBank, getBank, getBankById, deleteBank, updateBank } from './../../../services/adminThunk/adminBankThunk/AdminBankThunk';
const initialState = {
  data: [],
  error: null,
  status: false,
  loading: false,
  success: false,
};
//slice
export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {},
  extraReducers: builder => {
    //create bank
    builder
      .addCase(createBank.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(createBank.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data.push(action.payload);
      })
      .addCase(createBank.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch bank
    builder
      .addCase(getBank.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBank.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBank.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // get bank by id
    builder
      .addCase(getBankById.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBankById.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBankById.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // update bank
    builder
      .addCase(updateBank.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(updateBank.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = state.data.map(el =>
          action.payload.bankId === el.bankId ? action.payload : el
        );
      })
      .addCase(updateBank.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // delete bank
    builder
      .addCase(deleteBank.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(deleteBank.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(deleteBank.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default bankSlice.reducer;
