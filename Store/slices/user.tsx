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
  user: { email: "", lastName: "", firstName: "", id: "" },
  status: { loading: false, firstFetch: false, user: false },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //USER
    builder
      .addCase(fetchUserThunk.pending, (state, action) => {
        state.status.loading = true;
      })
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status.user = true;
        state.status.firstFetch = true;
        state.status.loading = false;
      })
      .addCase(fetchUserThunk.rejected, (state, action) => {
        state.status.firstFetch = true;
        state.status.loading = false;
        state.status.user = false;
      });
  },
});

export default {
  userReducer: userSlice.reducer,
};
