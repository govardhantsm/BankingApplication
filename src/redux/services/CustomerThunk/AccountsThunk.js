import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstanceProtected } from "../../../axios/AxiosInstance";

export const savebeneficiary = createAsyncThunk(
  "savebeneficiarys",
  async payload => {
    try {
      const { data } = await AxiosInstanceProtected.post(
        `/beneficiarys`,
        payload
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const findAllBeneficiarys = createAsyncThunk(
  "findallbeneficiarys",
  async acnumber => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/beneficiarys/findAll?accountNumber=${acnumber}`
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
        `/transactions/fundTransfer`,
        payload
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
///transactions/getAccountStatement
export const getAccountStatement = createAsyncThunk(
  "getAccountStatement",
  async payload => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/transactions/getAccountStatement?accountNumber=${payload.accountNumber}&startDate=${payload.startDate}&endDate=${payload.endDate}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

///transactions/getStatementExcel
export const getStatementExcel = createAsyncThunk(
  "getStatementExcel",
  async payload => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/transactions/getAccountStatement/downloadExcel?accountNumber=${payload.accountNumber}&startDate=${payload.startDate}&endDate=${payload.endDate}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

///transactions/getStatementPdf
export const getStatementPdf = createAsyncThunk(
  "getStatementPdf ",
  async payload => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/transactions/getAccountStatement/downloadPDF?accountNumber=${payload.accountNumber}&startDate=${payload.startDate}&endDate=${payload.endDate}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//beneficiarys/findBeneficiary?beneficiaryId
export const findBeneficiary = createAsyncThunk(
  "findBeneficiary ",
  async payload => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/beneficiarys/findBeneficiary?beneficiaryId=${payload}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//Savebeneficiarys
export const SaveBeneficiary = createAsyncThunk(
  "SaveBeneficiary ",
  async payload => {
    try {
      const { data } = await AxiosInstanceProtected.post(
        `/beneficiarys`,
        payload
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//DeleteBeneficiary
export const DeleteBeneficiary = createAsyncThunk(
  "DeleteBeneficiary",
  async payload => {
    try {
      const { data } = await AxiosInstanceProtected.delete(
        `/beneficiarys?beneficiaryId=${payload}`,
        payload
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//ChangeStatus
export const ChangeStatus = createAsyncThunk("ChangeStatus", async payload => {
  try {
    const { data } = await AxiosInstanceProtected.patch(
      `/accounts/debitCard/changeStatus`,
      payload
    );
    return data;
  } catch (error) {
    return error.message;
  }
});
