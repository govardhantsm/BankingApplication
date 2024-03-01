import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstanceProtected } from "../../../../axios/AxiosInstance";
//! create branch
export const createBranch = createAsyncThunk("createBranch", async payload => {
  const { data } = await axios.post(
    `http://106.51.76.167:8082/api/version/v1/branchs/save?bankId=${payload.bankId}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("access_token")
            ? localStorage.getItem("access_token")
            : null
        }`,
      },
    }
  );

  return data;
});
//! get branch
export const getBranch = createAsyncThunk("getBranch", async bankId => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/branchs/getAllBranch?bankId=${bankId}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

//! get branch by id
export const getBranchById = createAsyncThunk(
  "getBranchById",
  async branchId => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/branchs/getById?branchId=${branchId}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//!update branch
export const updateBranch = createAsyncThunk("updateBranch", async payload => {
  try {
    const { data } = await AxiosInstanceProtected.put(
      `/branchs/update?branchId=${payload.branchId}`,
      payload
    );

    return data;
  } catch (error) {
    return error.message;
  }
});

//! delete branch
export const deleteBranch = createAsyncThunk("deleteBranch", async bankId => {
  try {
    const { data } = await AxiosInstanceProtected.delete(
      `/branchs/delete?branchId=${bankId}`
    );

    return data;
  } catch (error) {
    return error.message;
  }
});
//! get md profile
export const getMdProfile = createAsyncThunk("getMdProfile", async () => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/managingDirectors/getManagingDirector`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

//! get md Data
// export const getMdData = createAsyncThunk("getMdProfile", async () => {
//   try {
//     const { data } = await AxiosInstanceProtected.get(
//       `managingDirectors/getManagingDirectorDashBoard`
//     );
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// });

export const getMdDashBoard = createAsyncThunk("getMdData", async payload => {
  console.log(payload);
  try {
    const { data } = await AxiosInstanceProtected.get(
      `managingDirectors/getManagingDirectorDashBoard?managingDirectorId=${payload}`,
      payload
    );
    console.log(data);

    return data;
  } catch (error) {
    return error.message;
  }
});
