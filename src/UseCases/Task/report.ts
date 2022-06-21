import {
  IReportTaskRequirements,
  IReportTaskResult,
  IReportTaskRequest
} from "../../Entities/Task/types";

function Report(
  params: IReportTaskRequirements,
  execute: IReportTaskRequest
): Promise<IReportTaskResult> {
  return new Promise<IReportTaskResult>((resolve, reject) => {
    execute({ id: params.id })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default Report;
