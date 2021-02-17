export interface IUserLogin {
  email: string;
  password: string;
  remember: boolean;
}

export interface IUserRegister {
  email: string;
  password: string;
  password_verify: string;
  firstName: string;
  lastName: string;
  acceptPolicy: boolean;
}

export interface IUserData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface IUserList {
  users: IUserData[];
}
