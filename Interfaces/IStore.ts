import { IUser } from "./IUser";

export interface IStore {
  user?: IUser;
  status: {
    loading: boolean;
    firstFetch: boolean;
    user: boolean;
    error: { text: string; boolean: boolean } | null;
  };
}
