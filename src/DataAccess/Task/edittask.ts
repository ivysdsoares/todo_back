import { AxiosError } from "axios";
import {
  IEditTaskRequirements,
  IEditTaskResult
} from "../../Entities/Task/types";
import Connection from "../connection";

function EditTask({
  id,
  title,
  description,
  status,
  color,
  user_id,
  expiration_date
}: IEditTaskRequirements): Promise<IEditTaskResult> {
  return new Promise((resolve, reject) => {
    Connection.put(`task/${id}`, {
      title,
      description,
      status,
      color,
      user_id,
      expiration_date
    })
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

export default EditTask;
