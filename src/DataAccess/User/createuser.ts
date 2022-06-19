import { AxiosError } from "axios";
import {
  ICreateUserRequirements,
  ICreateUserResult
} from "../../Entities/User/types";
import Connection from "../connection";

function CreateUser({
  email,
  password,
  name
}: ICreateUserRequirements): Promise<ICreateUserResult> {
  return new Promise((resolve, reject) => {
    Connection.post(`users`, { name, password, email })
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

export default CreateUser;
