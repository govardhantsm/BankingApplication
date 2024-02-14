import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createMd, deleteMd, getAllUnassigned, getMd, getMdById, updateMd } from './../../../services/adminThunk/adminMdThunk/AdminMdThunk';

const initialState = {
  data: [],
  error: null,
  status: false,
  loading: false,
  success: false,
};
//slice
export const mdSlice = createSlice({
  name: "md",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // create md
    builder
      .addCase(createMd.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(createMd.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        console.log(action.meta.requestStatus);
        state.data.push(action.payload);
      })
      .addCase(createMd.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch all unassigned
    builder
      .addCase(getAllUnassigned.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getAllUnassigned.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getAllUnassigned.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch bank
    builder
      .addCase(getMd.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getMd.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getMd.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // get bank by id
    builder
    .addCase(getMdById.pending, (state) => {
      state.status = true;
      state.success = false;
    })
    .addCase(getMdById.fulfilled, (state, action) => {
      state.status = false;
      state.success = true;
      state.data = action.payload;
    })
    .addCase(getMdById.rejected, (state, action) => {
      state.status = false;
      state.error = action.error.message;
      state.success = false;
    });

    // update bank
    builder
      .addCase(updateMd.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(updateMd.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
        // state.data = state.data.map(el =>
        //   action.payload.bankId === el.bankId ? action.payload : el
        // );
      })

      .addCase(updateMd.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // delete bank
    builder
      .addCase(deleteMd.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(deleteMd.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = state.data.map(el =>
          action.payload.employeeId === el.employeeId ? action.payload : el
        );
      })
      .addCase(deleteMd.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default mdSlice.reducer;
