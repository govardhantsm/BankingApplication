/ eslint-disable no-undef /
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from './../../services/authThunk/UserLoginThunk';
import { GetAdminProfile } from './../../services/authThunk/GetAdminProfileThunk';



//LOCAL_STORAGE
// initialize userToken from local storage
const userToken = localStorage.getItem("access_token")
  ? localStorage.getItem("access_token")
  : null;

const initialState = {
  data: [],
  userInfo: null,
  error: null,
  userToken,
  status: false,
  loading: false,
  success: false,
};

// //?===================REGISTER ==========================//

// export const registerThunk = createAsyncThunk("register", async payload => {
//   try {
//     // eslint-disable-next-line no-undef
//     const { data } = await AxiosInstancePublic.post(`/users`, payload);
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// });


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem("access_token"); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.status = false;
    },
  },

  extraReducers: builder => {
    //REGISTER
    // builder
    //   .addCase(registerThunk.pending, state => {
    //     state.status = true;
    //   })
    //   .addCase(registerThunk.fulfilled, (state, action) => {
    //     state.status = false;
    //     state.data.push(action.payload);
    //   })
    //   .addCase(registerThunk.rejected, (state, action) => {
    //     state.status = false;
    //     state.error = action.error.message;
    //   });
    //LOGIN
    builder
      .addCase(userLogin.pending, state => {
        state.status = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.status = false;
        state.userInfo = payload.data;
        state.userToken = payload.userToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.status = false;
        // state.error = action.error.message;
        state.loading = false;
        state.error = payload;
      });

    //GETPROFILE
    builder
      .addCase(GetAdminProfile.pending, state => {
        state.status = true;
        state.error = null;
      })
      .addCase(GetAdminProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.status = false;
        state.userInfo = payload;
      })
      .addCase(GetAdminProfile.rejected, (state, { payload }) => {
        state.status = false;
        state.loading = false;
        state.error = payload;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
