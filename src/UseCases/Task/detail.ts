import TaskEntity from "../../Entities/Task/task";
import {
  IValidTaskRequest,
  IEditTaskRequest,
  IEditTaskResult,
  IValidTaskResult,
  IDetailTaskRequirements,
  IDetailTaskRequest,
  IDetailTaskResult
} from "../../Entities/Task/types";
import { IValidUserRequest, IValidUserResult } from "../../Entities/User/types";

function Detail(
  params: IDetailTaskRequirements,
  execute: IDetailTaskRequest,
  validateUser: IValidUserRequest,
  validateTask: IValidTaskRequest
): Promise<IDetailTaskResult> {
  return new Promise<IDetailTaskResult>((resolveFinal, rejectFinal) => {
    const task = TaskEntity(params);
    const isValidUser = new Promise<IValidUserResult>((resolve, reject) => {
      if (task.isValidUserId === true) {
        validateUser({ id: params.user_id })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        reject({ code: 422, message: task.isValidUserId });
      }
    });
    const isValidTask = new Promise<IValidTaskResult>((resolve, reject) => {
      if (task.isValidId === true) {
        validateTask({ id: params.id })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        reject({ code: 422, message: task.isValidId });
      }
    });

    Promise.all([isValidTask, isValidUser])
      .then((e) => {
        execute(params)
          .then((res) => {
            resolveFinal({ ...res });
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

export default Detail;
