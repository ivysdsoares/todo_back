/* eslint-disable no-param-reassign */
import { IUserEntity, IUserEntityReturn } from "./types";
import Validation from "./Validation";

function UserEntity({
  id,
  email,
  password,
  name
}: IUserEntity): IUserEntityReturn {
  const Tid: number = id || 0;
  const Temail: string = email || "";
  const Tpassword: string = password || "";
  const Tname: string = name || "";

  return {
    id: Tid,
    email: Temail,
    password: Tpassword,
    name: Tname,
    isValidEmail: Validation.isValidEmail(Temail),
    isValidName: Validation.isValidName(Tname),
    isValidPassWord: Validation.isValidPassword(Tpassword)
  };
}

export default UserEntity;
