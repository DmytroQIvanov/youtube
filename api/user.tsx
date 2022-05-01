import axios from "axios";
import { serverURL } from "../config";
import { IUser } from "../Store/slices/user";
import { createUserDTO, loginUserDTO } from "../Interfaces/IUser";

export const fetchUser = async (id?: string): Promise<IUser> => {
  console.log("fetch");

  const answer = await axios.get(
    id ? `${serverURL}user/${id}` : `${serverURL}user/auth`,
    { withCredentials: true }
  );
  console.log("answer", answer);

  const user: IUser = answer.data;
  if (answer.status) {
    return user;
  }
  return null;
};
export const fetchLoginUser = async (props: loginUserDTO): Promise<IUser> => {
  const answer = await axios.post(`${serverURL}user/login`, props, {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Credentials": true,
      Accept: "*/*",
    },
  });
  console.log(answer);
  if (answer.status) {
    return answer.data;
  }
  return null;
};
export const fetchSignUser = async (props: createUserDTO) => {
  const answer = await axios.post(`${serverURL}user`, props, {
    withCredentials: true,
  });
  console.log(answer);
  if (answer.status) {
    return answer.data;
  }
  return null;
};
