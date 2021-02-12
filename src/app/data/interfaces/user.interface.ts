export interface IUserLogin {
  username: string;
  password: string;
  remember: boolean;
}

export interface IUserRegister {
  username: string;
  password: string;
  password_verify: string;
  firstName: string;
  lastName: string;
}

export interface IUserData {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

export interface IUserList {
  users: IUserData[];
}
