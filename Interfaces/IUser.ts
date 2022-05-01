export interface IUser {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  profileImage?: string;
  channel?: {
    channelImage?: string;
    name: string;
  };
}

export interface createUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface loginUserDTO {
  email: string;
  password: string;
}
