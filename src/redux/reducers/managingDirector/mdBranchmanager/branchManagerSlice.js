import { createSlice} from "@reduxjs/toolkit";
import { createBranchManager, deleteBranchManager, getAllUnassignedBranch, getBranchManager, getBranchManagerById, updateBranchManager } from './../../../services/managingDirectorThunk/mdBranchManagerThunk/MdBranchManagerThunk';

const initialState = {
  data: [],
  error: null,
  status: false,
  loading: false,
  success: false,
};
//slice

export const branchManagerSlice = createSlice({
  name: "branchManager",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //create branch manager
    builder
      .addCase(createBranchManager.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(createBranchManager.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data.push(action.payload);
      })
      .addCase(createBranchManager.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch all unassigned 
    builder
      .addCase(getAllUnassignedBranch.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getAllUnassignedBranch.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getAllUnassignedBranch.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch branch manager
    builder
      .addCase(getBranchManager.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBranchManager.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBranchManager.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
        // fetch branch manager by id
    builder
    .addCase(getBranchManagerById.pending, (state) => {
      state.status = true;
      state.success = false;
    })
    .addCase(getBranchManagerById.fulfilled, (state, action) => {
      state.status = false;
      state.success = true;
      state.data = action.payload;
    })
    .addCase(getBranchManagerById.rejected, (state, action) => {
      state.status = false;
      state.error = action.error.message;
      state.success = false;
    });

    // update branch manager
    builder
      .addCase(updateBranchManager.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(updateBranchManager.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = state.data.map((el) =>
          action.payload.bankId === el.bankId ? action.payload : el
        );
      })

      .addCase(updateBranchManager.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // delete branch manager
    builder
      .addCase(deleteBranchManager.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(deleteBranchManager.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(deleteBranchManager.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default branchManagerSlice.reducer;
