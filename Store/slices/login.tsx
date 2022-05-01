import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoginUser, fetchSignUser, fetchUser } from "../../api/user";
import { useRouter } from "next/router";
import { createUserDTO, IUser, loginUserDTO } from "../../Interfaces/IUser";
import { IStore } from "../../Interfaces/IStore";
import {
  fetchUserLoginThunk,
  fetchUserSignInThunk,
  fetchUserThunk,
} from "../features/user";

const initialState: IStore = {
  status: {
    loading: false,
    firstFetch: false,
    user: false,
    error: null,
  },
};

const loginSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // todoAdded(state, action) {
    //     ✅ This "mutating" code is okay inside of createSlice!
    // state.push(action.payload)
    // },
  },
  extraReducers: (builder) => {
    //LOGIN
    builder
      .addCase(fetchUserLoginThunk.pending, (state, action) => {
        state.status.loading = true;
      })
      .addCase(fetchUserLoginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status.user = true;
        state.status.firstFetch = true;
        state.status.loading = false;
        console.log("action");
        console.log(action);
        console.log(action.payload);
      })
      .addCase(fetchUserLoginThunk.rejected, (state, action) => {
        state.status.firstFetch = true;
        state.status.loading = false;
        state.status.error = { boolean: true, text: "" };

        console.log("error");
        console.log(action);
        console.log(action.payload);
      });
  },
});

export default {
  loginReducer: loginSlice.reducer,
};
