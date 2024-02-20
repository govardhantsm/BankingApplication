import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstanceProtected } from "../../../../axios/AxiosInstance";
//!create MD
export const createMd = createAsyncThunk("createMdk", async payload => {
  const { data } = await AxiosInstanceProtected.post(
    `/managingDirectors?bankId=${payload.bankId}`,
    payload
  );
  window.location.reload();
  console.log(data);
  return data;
});

//!Get Md
export const getMd = createAsyncThunk("getMd", async () => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/managingDirectors/getAllManagingDirector`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

//! get Md by Id

export const getMdById = createAsyncThunk("getMdById", async employeeId => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/managingDirectors/getManagingDirectorById?managingDirectorId=${employeeId}`
    );

    return data;
  } catch (error) {
    return error.message;
  }
});

//! update MD
export const updateMd = createAsyncThunk("updateMd", async payload => {
  try {
    const { data } = await AxiosInstanceProtected.put(
      `/managingDirectors?managerId=${payload.employeeId}`,
      payload
    );
    window.location.relaoad();
    return data;
  } catch (error) {
    return error.message;
  }
});

//! delete MD
export const deleteMd = createAsyncThunk("deleteMd", async employeeId => {
  try {
    const { data } = await AxiosInstanceProtected.delete(
      `/managingDirectors/removeManagingDirector?managerId=${employeeId}`
    );
    window.location.reload();
    return data;
  } catch (error) {
    return error.message;
  }
});

//! get all unassigned
export const getAllUnassigned = createAsyncThunk(
  "getAllUnassigned",
  async () => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/banks/getAllUnAssigned`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
