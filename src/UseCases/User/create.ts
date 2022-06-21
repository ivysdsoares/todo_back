import {
  ICreateUserRequirements,
  ICreateUserRequest,
  ICreateUserResult
} from "../../Entities/User/types";
import UserEntity from "../../Entities/User/user";

function Create(
  params: ICreateUserRequirements,
  execute: ICreateUserRequest
): Promise<ICreateUserResult> {
  return new Promise<ICreateUserResult>((resolve, reject) => {
    const user = UserEntity({ ...params });
    let valid: string | true = true;
    if (!(user.isValidEmail === true)) {
      valid = user.isValidEmail;
    }
    if (!(user.isValidPassWord === true)) {
      valid = user.isValidPassWord;
    }
    if (!(user.isValidName === true)) {
      valid = user.isValidName;
    }
    if (valid === true) {
      execute({ password: user.password, email: user.email, name: user.name })
        .then((res) => {
          resolve({ id: res.id });
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      reject({ code: 422, message: valid });
    }
  });
}

export default Create;
