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
    const isValidUser = new Promise<IValidUserResult>((resolve, reject) => {
      validateUser({ id: params.user_id })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
    const isValidTask = new Promise<IValidTaskResult>((resolve, reject) => {
      validateTask({ id: params.id })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
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
