import { AxiosError } from "axios";
import {
  IDetailTaskResult,
  IDetailTaskRequirements
} from "../../Entities/Task/types";
import Connection from "../connection";

function Detail({
  id,
  user_id
}: IDetailTaskRequirements): Promise<IDetailTaskResult> {
  return new Promise((resolve, reject) => {
    Connection.get(`task/?id=${id}&user_id=${user_id}`)
      .then((res) => {
        if (res.data.length === 0) {
          reject({ message: "Task does not belong to user", code: 401 });
        } else {
          resolve(res.data[0]);
        }
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

export default Detail;
