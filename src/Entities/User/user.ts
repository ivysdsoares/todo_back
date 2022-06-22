/* eslint-disable no-param-reassign */
import { IUserEntity, IUserEntityReturn } from "./types";
import Validation from "./Validation";
import isValidGmail from "./Validation/isvalidgmail";

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
    isValidPassWord: Validation.isValidPassword(Tpassword),
    isValidGmail: Validation.isValidGmail({ email: Temail, name: Tname }),
    isValidLogin: Validation.isValidLogin({
      email: Temail,
      password: Tpassword
    }),
    isValidCreate: Validation.isValidCreate({
      email: Temail,
      password: Tpassword,
      name: Tname
    })
  };
}

export default UserEntity;
