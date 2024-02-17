import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import {
  AxiosInstanceProtected,
  AxiosInstancePublic,
} from "../../../axios/AxiosInstance";
import { data } from "autoprefixer";
import {
  SaveBeneficiary,
  findAllBeneficiarys,
  findBeneficiary,
  getAccountStatement,
  getStatement,
  getStatementExcel,
  getStatementPdf,
  savebeneficiary,
} from "../../services/CustomerThunk/AccountsThunk";

const initialState = {
  data: [],
  error: null,
  status: false,
  loading: false,
  success: false,
};

//=================Fetch Customer==============/
export const getCustomerProfile = createAsyncThunk("getBmProfile", async () => {
  try {
    const { data } = await AxiosInstanceProtected.get(`/users/getUserProfile`);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const customerSlice = createSlice({
  name: "bankManager",
  initialState,
  reducers: {},
  extraReducers: builder => {
    //getCustomerProfile
    builder
      .addCase(getCustomerProfile.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getCustomerProfile.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getCustomerProfile.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    //savebeneficiary
    builder
      .addCase(savebeneficiary.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(savebeneficiary.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(savebeneficiary.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    //findAllbeneficiary
    builder
      .addCase(findAllBeneficiarys.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(findAllBeneficiarys.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(findAllBeneficiarys.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
    //amountTransfer
    builder
      .addCase(amountTransfer.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(amountTransfer.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(amountTransfer.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // getStatement
    builder
      .addCase(getStatement.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getStatement.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getStatement.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // getAccountStatement
    builder
      .addCase(getAccountStatement.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getAccountStatement.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getAccountStatement.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
    // getStatementExcel
    builder
      .addCase(getStatementExcel.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getStatementExcel.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getStatementExcel.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
    // getStatementPdf
    builder
      .addCase(getStatementPdf.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getStatementPdf.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getStatementPdf.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // findBeneficiary
    builder
      .addCase(findBeneficiary.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(findBeneficiary.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(findBeneficiary.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    //SaveBeneficiary
    builder
      .addCase(SaveBeneficiary.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(SaveBeneficiary.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(SaveBeneficiary.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    //DeleteBeneficiary
    builder
      .addCase(DeleteBeneficiary.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(DeleteBeneficiary.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(DeleteBeneficiary.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default customerSlice.reducer;
