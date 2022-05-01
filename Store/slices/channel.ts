import { createSlice } from "@reduxjs/toolkit";
import { fetchUserThunk } from "../features/user";
import { IStore } from "../../Interfaces/IStore";

const initialState: any = {
  status: { loading: false, firstFetch: false, user: false, error: null },
};

const channelSlice = createSlice({
  name: "channel",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserThunk.pending, (state, action) => {
        state.status.loading = true;
      })
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        //TODO
        state.status.firstFetch = true;
        state.status.loading = false;
      })
      .addCase(fetchUserThunk.rejected, (state, action) => {
        state.status.firstFetch = true;
        state.status.loading = false;
      });
  },
});
export default {
  channelReducer: channelSlice.reducer,
};
