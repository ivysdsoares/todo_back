import { AxiosError } from "axios";
import {
  ICreateTaskRequirements,
  ICreateTaskResult
} from "../../Entities/Task/types";
import Connection from "../connection";

function CreateTask({
  title,
  description,
  status,
  color,
  user_id,
  expiration_date
}: ICreateTaskRequirements): Promise<ICreateTaskResult> {
  return new Promise((resolve, reject) => {
    Connection.post(`task`, {
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

export default CreateTask;
