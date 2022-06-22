import TaskEntity from "../../Entities/Task/task";
import {
  IListActiveTaskRequirements,
  IListActiveTaskResult,
  IListActiveTaskRequest
} from "../../Entities/Task/types";

function ListInactive(
  params: IListActiveTaskRequirements,
  execute: IListActiveTaskRequest
): Promise<Array<IListActiveTaskResult>> {
  return new Promise<Array<IListActiveTaskResult>>((resolve, reject) => {
    execute({ id: params.id })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default ListInactive;
