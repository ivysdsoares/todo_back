import TaskEntity from "../../Entities/Task/task";
import {
  ICreateTaskRequest,
  ICreateTaskRequirements,
  ICreateTaskResult
} from "../../Entities/Task/types";
import { IValidUserRequest } from "../../Entities/User/types";

function CreateTask(
  params: ICreateTaskRequirements,
  execute: ICreateTaskRequest,
  validate: IValidUserRequest
): Promise<ICreateTaskResult> {
  return new Promise<ICreateTaskResult>((resolve, reject) => {
    const task = TaskEntity({
      color: params.color,
      status: "ONGOING",
      title: params.title,
      description: params.description,
      expiration_date: params.expiration_date,
      user_id: params.user_id
    });
    const valid = task.isValidBody;

    if (valid === true) {
      const is_valid_user = validate({ id: task.user_id });
      is_valid_user
        .then(() => {
          execute({
            color: task.color,
            status: "ONGOING",
            title: task.title,
            description: task.description,
            expiration_date: task.expiration_date,
            user_id: task.user_id
          })
            .then((res) => {
              resolve({ id: res.id });
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      reject({ code: 422, message: valid });
    }
  });
}

export default CreateTask;
