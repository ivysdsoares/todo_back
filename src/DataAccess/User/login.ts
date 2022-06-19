import { AxiosError } from "axios";
import {
  ILoginRequest,
  ILoginRequirements,
  ILoginResult
} from "../../Entities/User/types";
import Connection from "../connection";

function Login({
  email,
  password
}: ILoginRequirements): Promise<Array<ILoginResult>> {
  return new Promise((resolve, reject) => {
    Connection.get(`users?password=${password}&email=${email}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        if (typeof err.code === "number") {
          reject({ message: err.message, code: err.code });
        } else {
          reject({ message: err.message, code: 500 });
        }
      });
  });
}

export default Login;
