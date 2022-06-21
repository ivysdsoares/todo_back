import { AxiosError } from "axios";
import {
  ICreateUserRequirements,
  ICreateUserResult
} from "../../Entities/User/types";
import Connection from "../connection";

function Create({
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
        if (err.response) {
          reject({ message: err.message, code: err.response.status });
        } else {
          reject({ message: err.message, code: 500 });
        }
      });
  });
}

export default Create;
