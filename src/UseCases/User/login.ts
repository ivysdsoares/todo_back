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

    if (user.isValidLogin === true) {
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
      reject({ code: 422, message: user.isValidLogin });
    }
  });
}

export default Login;
