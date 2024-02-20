import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import {
  AxiosInstanceProtected,
  AxiosInstancePublic,
} from "../../../axios/AxiosInstance";

import axios from "axios";

const initialState = {
  data: [],
  error: null,
  status: false,
  loading: false,
  success: false,
};
//=================Create Branch==============/
export const createAccount = createAsyncThunk(
  "createAccount",
  async payload => {
    try {
      const data = await AxiosInstanceProtected.post(
        `/users?branchId=${payload.branchId}`,
        payload
      );

      let userId = data?.data?.data?.userId;
      localStorage.setItem("userId", userId);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

// ===========posting file=========
export const createAccountWithFile = createAsyncThunk(
  "createAccountWithFile",
  async payload => {
    let userId = localStorage.getItem("userId");

    if (userId) {
      try {
        const { data } = await axios.post(
          `http://106.51.76.167:8082/api/version/v1/documents?id=${userId}&users=customer&types=VOTER_ID`,
          payload,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${
                localStorage.getItem("access_token")
                  ? localStorage.getItem("access_token")
                  : null
              }`,
            },
          }
        );

        return data;
      } catch (error) {
        return error.message;
      }
    }
  }
);
//=================Fetch all Branch==============/
export const getAllAccount = createAsyncThunk("getAllAccount", async bankId => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `accounts/getAllAccounts/branchId?branchId=${bankId}`
    );

    return data;
  } catch (error) {
    return error.message;
  }
});

//=============Delete Account============
export const deleteBankAccount = createAsyncThunk(
  "deleteBankAccount",
  async accountNumber => {
    try {
      const { data } = await AxiosInstanceProtected.delete(
        `/accounts/remove?accountNumber=${accountNumber}`
      );
      window.location.reload();
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//=================Fetch all SavingAccount==============/
export const getAllSavingAccount = createAsyncThunk(
  "getAllSavingAccount",
  async branchId => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `accounts/saving/getAllAccounts/branchId?branchId=${branchId}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//=================Fetch all CurrentAccount==============/
export const getAllCurrentAccount = createAsyncThunk(
  "getAllCurrentAccount",
  async branchId => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `accounts/current/getAllAccounts/branchId?branchId=${branchId}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//=================Fetch Bm==============/
export const getBmProfile = createAsyncThunk("getBmProfile", async () => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/branchManagers/getBranchManager`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

//=================Fetch Bm==============/
export const getApprove = createAsyncThunk("getApprove", async payload => {
  try {
    const { data } = await AxiosInstanceProtected.patch(
      `/accounts/debitCard/changeApproval`,
      payload
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

// //=================Fetch all unassigned==============/
// export const getAllUnassigned = createAsyncThunk(
//   "getAllUnassigned",
//   async bankId => {
//     try {
//       const { data } = await AxiosInstanceProtected.get(
//         `/branchs/getAllUnAssigned?bankId=${bankId}`
//       );
//       return data;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );

//=================Fetch Branch By id==============/
// export const getBranchManagerById = createAsyncThunk(
//   "getBranchManagerById",
//   async employeeId => {
//     try {
//       const { data } = await AxiosInstanceProtected.get(
//         `/branchManagers/getById?branchManagerId=${employeeId}`
//       );
//       return data;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );
// //=================Update Branch==============/
// export const updateBranchManager = createAsyncThunk(
//   "updateBranchManager",
//   async payload => {
//     try {
//       const { data } = await AxiosInstanceProtected.put(
//         `/branchManagers/update?branchManagerId=${payload.employeeId}`,
//         payload
//       );
//       return data;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );

//slice

export const bankManagerSlice = createSlice({
  name: "bankManager",
  initialState,
  reducers: {},
  extraReducers: builder => {
    //create account
    builder
      .addCase(createAccount.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
    //getApprove
    builder
      .addCase(getApprove.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getApprove.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getApprove.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
    //create account with file
    builder
      .addCase(createAccountWithFile.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(createAccountWithFile.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(createAccountWithFile.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
    //fetch bm
    builder
      .addCase(getBmProfile.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBmProfile.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBmProfile.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
    // fetch all account
    builder
      .addCase(getAllAccount.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getAllAccount.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getAllAccount.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch all unassigned
    builder
      .addCase(getAllSavingAccount.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getAllSavingAccount.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getAllSavingAccount.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // // update bankmanager
    // builder
    //   .addCase(updateBranchManager.pending, state => {
    //     state.status = true;
    //     state.success = false;
    //   })
    //   .addCase(updateBranchManager.fulfilled, (state, action) => {
    //     state.status = false;
    //     state.success = true;
    //     state.data = state.data.map(el =>
    //       action.payload.bankId === el.bankId ? action.payload : el
    //     );
    //   })

    //   .addCase(updateBranchManager.rejected, (state, action) => {
    //     state.status = false;
    //     state.error = action.error.message;
    //     state.success = false;
    //   });

    // delete bankAccount
    builder
      .addCase(deleteBankAccount.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(deleteBankAccount.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(deleteBankAccount.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default bankManagerSlice.reducer;
