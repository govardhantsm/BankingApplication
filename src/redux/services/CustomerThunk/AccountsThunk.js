import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstanceProtected } from "../../../axios/AxiosInstance";


export const savebeneficiary = createAsyncThunk("savebeneficiarys", async (payload) => {
  try {
    const { data } = await AxiosInstanceProtected.post(`/beneficiarys`,payload);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const findAllBeneficiarys = createAsyncThunk(
  "findallbeneficiarys",
  async acnumber => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/beneficiarys/findAll?accountNumber=${acnumber}`,
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

///transactions/fundTransfer

export const amountTransfer = createAsyncThunk(
  "amountTransfer",
  async payload => {
    try {
      const { data } = await AxiosInstanceProtected.post(
        `/transactions/fundTransfer`,payload
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//getStatements

export const getStatement = createAsyncThunk("getStatement", async acnumber => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/transactions/passBook?accountNumber=${acnumber}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});