import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBranch, deleteBranch, getBranch, getBranchById, getMdProfile, updateBranch } from './../../../services/managingDirectorThunk/mdBranchThunk/MdBranchThunk';

const initialState = {
  data: [],
  error: null,
  status: false,
  loading: false,
  success: false,
};
//slice
export const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //create branch
    builder
      .addCase(createBranch.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(createBranch.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data.push(action.payload);
      })
      .addCase(createBranch.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    //fetch md
    builder
      .addCase(getMdProfile.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getMdProfile.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getMdProfile.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch branch
    builder
      .addCase(getBranch.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBranch.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBranch.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch branch by id
    builder
      .addCase(getBranchById.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBranchById.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBranchById.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // update bank
    builder
      .addCase(updateBranch.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(updateBranch.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = state.data.map((el) =>
          action.payload.bankId === el.bankId ? action.payload : el
        );
      })

      .addCase(updateBranch.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // delete branch
    builder
      .addCase(deleteBranch.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(deleteBranch.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(deleteBranch.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default branchSlice.reducer;
