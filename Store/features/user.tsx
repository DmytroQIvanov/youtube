import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserDTO, IUser, loginUserDTO } from "../../Interfaces/IUser";
import { fetchLoginUser, fetchSignUser, fetchUser } from "../../api/user";

export const fetchUserThunk = createAsyncThunk("user", async (): IUser => {
  const user: IUser = await fetchUser();
  return user;
});
export const fetchUserLoginThunk = createAsyncThunk(
  "userLogin",
  async (data: loginUserDTO) => {
    const user: IUser = await fetchLoginUser(data);
    return user;
  }
);

export const fetchUserSignInThunk = createAsyncThunk(
  "userCreate",
  async (data: createUserDTO) => {
    const user = await fetchSignUser(data);
    return user;
  }
);
