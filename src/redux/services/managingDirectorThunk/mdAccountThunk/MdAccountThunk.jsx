import { AxiosInstanceProtected } from "../../../../axios/AxiosInstance";
import { createAsyncThunk } from '@reduxjs/toolkit';
//! get all accounts
export const getAllAccountsMd = createAsyncThunk("allAccounts", async bankId => {
    const { data } = await AxiosInstanceProtected.get(
      `/accounts/getAllAccounts/bankId?bankId=${bankId}`
    );
    return data;
  });
//! get all current accounts
  export const getAllcurrentAccounts = createAsyncThunk(
    "currentAccounts",
    async bankId => {
      const { data } = await AxiosInstanceProtected.get(
        `/accounts/current/getAllAccounts/bankId?bankId=${bankId}`
      );
      return data;
    }
  );
//! get all savings accounts
export const getAllSavingsAccounts = createAsyncThunk(
    "savingsAccounts",
    async bankId => {
      const { data } = await AxiosInstanceProtected.get(
        `/accounts/saving/getAllAccounts/bankId?bankId=${bankId}`
      );
      return data;
    }
  );

  //! update account
  export const getUpdateAccount = createAsyncThunk(
    "getUpdateAccount",
    async payload => {
      try {
        const { data } = await AxiosInstanceProtected.put(
          `/accounts/updateAccount`,
          payload
        );
  
        return data;
      } catch (error) {
        return error.message;
      }
    }
  );

  //! get account
  export const getAccountById = createAsyncThunk("getAccountById", async bankId => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/accounts/getAccountByAccountNumber?accountNumber=${bankId}`
      );
  
      return data;
    } catch (error) {
      return error.message;
    }
  });
//! delete account
export const DeleteAccountThunk = createAsyncThunk(
  "deleteAccount",
  async accountNumber => {
    try {
      const { data } = await AxiosInstanceProtected.delete(
        `/accounts/remove?accountNumber=${accountNumber}`
      );
      
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
export default DeleteAccountThunk;