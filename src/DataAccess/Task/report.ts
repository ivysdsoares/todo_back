import { AxiosError } from "axios";
import {
  ITaskEntityReturn,
  IReportTaskRequirements,
  IReportTaskResult
} from "../../Entities/Task/types";
import Connection from "../connection";

function Report({
  id
}: IReportTaskRequirements): Promise<IReportTaskResult> {
  return new Promise((resolve, reject) => {
    Connection.get(`task/?user-id=${id}`)
      .then((res) => {
        let stats: IReportTaskResult = {
          ongoing: 0,
          complete: 0,
          failed: 0,
          expired: 0
        };
        res.data.forEach((item: ITaskEntityReturn) => {
          if (item.status === "ONGOING") {
            if (item.expiration_date < new Date().toISOString()) {
              stats.expired += 1;
            } else {
              stats.ongoing += 1;
            }
          }
          if (item.status === "COMPLETE") {
            stats.complete += 1;
          }
          if (item.status === "FAILED") {
            stats.failed += 1;
          }
        });

        resolve(stats);
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

export default Report;
