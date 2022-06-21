import { AxiosError } from "axios";
import {
  IListActiveTaskRequest,
  IListActiveTaskRequirements,
  IListActiveTaskResult
} from "../../Entities/Task/types";
import Connection from "../connection";

function ListActive({
  id
}: IListActiveTaskRequirements): Promise<Array<IListActiveTaskResult>> {
  return new Promise((resolve, reject) => {
    Connection.get(`task/?user_id=${id}`)
      .then((res) => {
        const active: Array<IListActiveTaskResult> = res.data.filter(
          (e: IListActiveTaskResult) =>
            e.status === "ONGOING" &&
            e.expiration_date > new Date().toISOString()
        );
        resolve(active);
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

export default ListActive;
