import { AxiosError } from "axios";
import {
  IValidUserResult,
  IValidUserRequirements
} from "../../Entities/User/types";
import Connection from "../connection";

function ValidUser({ id }: IValidUserRequirements): Promise<IValidUserResult> {
  return new Promise((resolve, reject) => {
    Connection.get(`users/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          if (err.response.status === 404) {
            reject({ message: "User does not exist", code: 404 });
          } else {
            reject({ message: err.message, code: err.code });
          }
        } else {
          reject({ message: err.message, code: 500 });
        }
      });
  });
}

export default ValidUser;
