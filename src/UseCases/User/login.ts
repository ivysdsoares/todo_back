import {
  ILoginRequirements,
  ILoginRequest,
  ILoginResult
} from "../../Entities/User/types";
import UserEntity from "../../Entities/User/user";

function Login(
  params: ILoginRequirements,
  execute: ILoginRequest
): Promise<ILoginResult> {
  return new Promise<ILoginResult>((resolve, reject) => {
    const user = UserEntity({ ...params });
    let valid: string | true = true;
    if (!(user.isValidEmail === true)) {
      valid = user.isValidEmail;
    }
    if (!(user.isValidPassWord === true)) {
      valid = user.isValidPassWord;
    }
    if (valid === true) {
      execute(params)
        .then((res) => {
          if (res.length === 0) {
            reject({ code: 403, message: "Wrong email or password" });
          } else {
            resolve({
              name: res[0].name,
              email: res[0].email,
              id: res[0].id
            });
          }
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      reject({ code: 422, message: valid });
    }
  });
}

export default Login;
