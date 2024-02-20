import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  error: null,

  success: false,
};
//slice
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addData: (state, action) => {
      const newData = action.payload;
      state.data = { ...state.data, ...newData };
    },
  },
});

export default loginSlice.reducer;
export const { addData }=loginSlice.actions;
