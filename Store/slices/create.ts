import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IStore } from "../../Interfaces/IStore";
import {
  fetchUserLoginThunk,
  fetchUserSignInThunk,
  fetchUserThunk,
} from "../features/user";

const initialState: IStore = {
  status: { loading: false, firstFetch: false, user: false, error: null },
};

const create = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //CREATE
    builder
      .addCase(fetchUserSignInThunk.pending, (state, action) => {
        state.status.loading = true;
      })
      .addCase(fetchUserSignInThunk.fulfilled, (state, action) => {
        state.status.user = true;
        console.log(action);
        state.status.firstFetch = true;
        state.status.loading = false;
      });
  },
});

export default {
  createReducer: create.reducer,
};
