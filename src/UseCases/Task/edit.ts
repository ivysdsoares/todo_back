import TaskEntity from "../../Entities/Task/task";
import {
  IValidTaskRequest,
  IEditTaskRequest,
  IEditTaskRequirements,
  IEditTaskResult,
  IValidTaskResult
} from "../../Entities/Task/types";
import { IValidUserRequest, IValidUserResult } from "../../Entities/User/types";

function EditTask(
  params: IEditTaskRequirements,
  execute: IEditTaskRequest,
  validateUser: IValidUserRequest,
  validateTask: IValidTaskRequest
): Promise<IEditTaskResult> {
  return new Promise<IEditTaskResult>((resolveFinal, rejectFinal) => {
    const task = TaskEntity({
      color: params.color,
      status: params.status,
      title: params.title,
      description: params.description,
      expiration_date: params.expiration_date,
      user_id: params.user_id,
      id: params.id
    });
    const valid = task.isValidBody;
    const isValidUser = new Promise<IValidUserResult>((resolve, reject) => {
      if (valid === true) {
        validateUser({ id: task.user_id })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        reject({ code: 422, message: valid });
      }
    });
    const isValidTask = new Promise<IValidTaskResult>((resolve, reject) => {
      if (valid === true) {
        validateTask({ id: task.id })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        reject({ code: 422, message: valid });
      }
    });

    Promise.all([isValidTask, isValidUser])
      .then((e) => {
        execute(params)
          .then((res) => {
            resolveFinal({ id: res.id });
          })
          .catch((err) => {
            rejectFinal(err);
          });
      })
      .catch((err) => {
        rejectFinal(err);
      });
  });
}

export default EditTask;
