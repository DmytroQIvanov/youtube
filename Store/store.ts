import { configureStore } from "@reduxjs/toolkit";
import login from "./slices/login";
import create from "./slices/create";
import user from "./slices/user";
import channel from "./slices/channel";

const store = configureStore({
  reducer: {
    login: login.loginReducer,
    user: user.userReducer,
    create: create.createReducer,
    channel: channel.channelReducer,
    // video:video.videoReducer
  },
});

export default store;
