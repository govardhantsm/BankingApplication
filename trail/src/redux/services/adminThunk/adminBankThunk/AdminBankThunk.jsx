import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstanceProtected } from "../../../../axios/AxiosInstance";
import toast from "react-hot-toast";

//!create bank
export const createBank = createAsyncThunk("createBank", async payload => {
  try {
    const { data } = await axios.post(
      "http://106.51.76.167:8082/api/version/v1/banks",
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
    console.log(data);
    if (data.statusCode == 201) {
      toast.success("Bank Created Successfully");
    }
    window.location.assign("/adminlayout/all-bank");

    return data;
  } catch (error) {
    toast.error(error.message);
    return error.message;
  }
});

//! Get all banks

export const getBank = createAsyncThunk("getBank", async () => {
  try {
    const { data } = await AxiosInstanceProtected.get(`/banks/getAll`);
    return data;
  } catch (error) {
    return error.message;
  }
});

//! getbankById

export const getBankById = createAsyncThunk("getBankById", async bankId => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/banks/bankId/${bankId}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

//! update bank

export const updateBank = createAsyncThunk("updateBank", async payload => {
  try {
    const { data } = await AxiosInstanceProtected.put(
      `/banks/bankId/${payload.bankId}`,
      payload
    );
    toast.success("Bank updated successfully");
    window.location.assign("/adminlayout/all-bank");
    return data;
  } catch (error) {
    toast.error(error.message);
    return error.message;
  }
});

//! delete bank

export const deleteBank = createAsyncThunk("deleteBank", async bankId => {
  try {
    console.log(bankId);
    const { data } = await AxiosInstanceProtected.delete(
      `/banks/bankId/${bankId}`
    );
    window.location.assign("/adminlayout/all-bank");
    return data;
  } catch (error) {
    return error.message;
  }
});