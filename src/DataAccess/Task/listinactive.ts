import { AxiosError } from "axios";
import {
  IListInactiveTaskRequest,
  IListInactiveTaskRequirements,
  IListInactiveTaskResult
} from "../../Entities/Task/types";
import Connection from "../connection";

function ListInactive({
  id
}: IListInactiveTaskRequirements): Promise<Array<IListInactiveTaskResult>> {
  return new Promise((resolve, reject) => {
    Connection.get(`task/?user_id=${id}`)
      .then((res) => {
        const active: Array<IListInactiveTaskResult> = res.data.filter(
          (e: IListInactiveTaskResult) =>
            // e.status !== "ONGOING" &&
            e.expiration_date < new Date().toISOString()
        );

        resolve(
          active.map((item) => ({
            id: item.id,
            user_id: item.user_id,
            expiration_date: item.expiration_date,
            title: item.title,
            description: item.description,
            color: item.color,
            status: item.status === "ONGOING" ? "EXPIRED" : item.status
          }))
        );
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

export default ListInactive;
