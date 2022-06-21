import { AxiosError } from "axios";
import {
  IValidTaskResult,
  IValidTaskRequirements
} from "../../Entities/Task/types";
import Connection from "../connection";

function ValidTask({ id }: IValidTaskRequirements): Promise<IValidTaskResult> {
  return new Promise((resolve, reject) => {
    Connection.get(`task/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          if (err.response.status === 404) {
            reject({ message: "Task does not exist", code: 404 });
          } else {
            reject({ message: err.message, code: err.code });
          }
        } else {
          reject({ message: err.message, code: 500 });
        }
      });
  });
}

export default ValidTask;
