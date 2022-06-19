interface IUserEntity {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
}


interface IUserEntityReturn {
  id: number | null;
  email: string | null;
  password: string | null;
  name: string | null;
  isValidName: string | true;
  isValidPassWord: string | true;
  isValidEmail: string | true;
}
interface ILoginRequirements {
  email: string;
  password: string;
}
interface ILoginResult {
  email: string;
  name: string;
  id: number;
}
type ILoginRequest = ({
  email,
  password
}: ILoginRequirements) => Promise<Array<ILoginResult>>;

interface ICreateUserRequirements {
  email: string;
  name: string;
  password: string;
}

interface ICreateUserResult {
  id: number;
}

type ICreateUserRequest = ({
  email,
  password,
  name
}: ICreateUserRequirements) => Promise<ICreateUserResult>;

interface IExistsRequirements {
  email: string;
}

interface IExistsResult {
  id: number;
}

type IExistsRequest = ({
  email
}: IExistsRequirements) => Promise<Array<IExistsResult>>;

interface IGmailRequirements {
  email: string;
  name: string;
}

interface IGmailResult {
  id: number;
}

type IGmailRequest = ({
  email,
  name
}: IGmailRequirements) => Promise<Array<IGmailResult>>;

export type {
  IUserEntity,
  IUserEntityReturn,
  ILoginRequest,
  ILoginResult,
  ILoginRequirements,
  ICreateUserRequirements,
  ICreateUserResult,
  ICreateUserRequest,
  IExistsRequirements,
  IExistsResult,
  IExistsRequest,
  IGmailRequirements,
  IGmailResult,
  IGmailRequest
};
