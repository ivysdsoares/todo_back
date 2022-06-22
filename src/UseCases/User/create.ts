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

    if (user.isValidCreate === true) {
      execute({ password: user.password, email: user.email, name: user.name })
        .then((res) => {
          resolve({ id: res.id });
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      reject({ code: 422, message: user.isValidCreate });
    }
  });
}

export default Create;
