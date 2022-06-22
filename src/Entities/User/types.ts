export interface IUserEntity {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
}

export interface IUserEntityReturn {
  id: number;
  email: string;
  password: string;
  name: string;
  isValidName: string | true;
  isValidPassWord: string | true;
  isValidEmail: string | true;
  isValidLogin: string | true;
  isValidGmail: string | true;
  isValidCreate: string | true;
}
export interface ILoginRequirements {
  email: string;
  password: string;
}
export interface ILoginResult {
  email: string;
  name: string;
  id: number;
}
export type ILoginRequest = ({
  email,
  password
}: ILoginRequirements) => Promise<Array<ILoginResult>>;

export interface ICreateUserRequirements {
  email: string;
  name: string;
  password: string;
}

export interface ICreateUserResult {
  id: number;
}

export type ICreateUserRequest = ({
  email,
  password,
  name
}: ICreateUserRequirements) => Promise<ICreateUserResult>;

export interface IExistsRequirements {
  email: string;
}

export interface IExistsResult {
  id: number;
}

export type IExistsRequest = ({
  email
}: IExistsRequirements) => Promise<Array<IExistsResult>>;

export interface IValidUserRequirements {
  id: number;
}

export interface IValidUserResult {
  id: number;
}

export type IValidUserRequest = ({
  id
}: IValidUserRequirements) => Promise<IValidUserResult>;

export interface IGmailRequirements {
  email: string;
  name: string;
}

export interface IGmailResult {
  id: number;
}

export type IGmailRequest = ({
  email,
  name
}: IGmailRequirements) => Promise<Array<IGmailResult>>;
