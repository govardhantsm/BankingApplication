import  axios  from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstanceProtected } from "../../../../axios/AxiosInstance";
//! create branch manager
export const createBranchManager = createAsyncThunk("createBranchManager", async payload => {
      const { data } = await axios.post(`http://106.51.76.167:8082/api/version/v1/branchManagers/save?branchId=${payload.branchId}`, payload , {
            headers :{
              Authorization : `Bearer ${localStorage.getItem("access_token") ? localStorage.getItem("access_token") : null}`
            }
          });
      return data;
    } 
  );
//! get branch manager

export const getBranchManager = createAsyncThunk("getBranchManager", async (bankId) => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/branchManagers/getAll?bankId=${bankId}`
      );  
      return data;
  
    } catch (error) {
      return error.message;
    }
  });

//! get branch manager by id
export const getBranchManagerById = createAsyncThunk("getBranchManagerById", async (employeeId) => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/branchManagers/getById?branchManagerId=${employeeId}`
      );  
      return data;
  
    } catch (error) {
      return error.message;
    }
  });
  //!update branch manager
  export const updateBranchManager = createAsyncThunk(
    "updateBranchManager",
    async (payload) => {
      try {
        const { data } = await AxiosInstanceProtected.put(
          `/branchManagers/update?branchManagerId=${payload.employeeId}`,
          payload
        );
        window.location.reload();
         return data;
      } catch (error) {
        return error.message;
      }
    }
  );
  //! delete branch manager
  export const deleteBranchManager = createAsyncThunk("deleteBranchManager", async (employeeId) => {
    try {
      const { data } = await AxiosInstanceProtected.delete(
        `/branchManagers/delete?branchManagerId=${employeeId}`
      )
      window.location.reload();
      return data;
    } catch (error) {
      return error.message;
    }
  });
  //! get all un assigned branch
  export const getAllUnassignedBranch = createAsyncThunk("getAllUnassignedBranch", async (bankId) => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/branchs/getAllUnAssigned?bankId=${bankId}`
      );  
      console.log(data)
      return data;
  
    } catch (error) {
      return error.message;
    }
  });