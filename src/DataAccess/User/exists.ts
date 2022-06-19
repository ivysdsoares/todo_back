import { AxiosError } from "axios";
import { IExistsRequirements, IExistsResult } from "../../Entities/User/types";
import Connection from "../connection";

function Exists({ email }: IExistsRequirements): Promise<Array<IExistsResult>> {
  return new Promise((resolve, reject) => {
    Connection.get(`users?email=${email}`)
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

export default Exists;
