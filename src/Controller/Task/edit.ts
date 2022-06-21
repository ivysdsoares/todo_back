import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
import { Props } from "../types";

function EditTask({ req, res }: Props) {
  UseCases.Task.EditTask(
    req.body,
    DataAccess.Task.EditTask,
    DataAccess.User.Valid,
    DataAccess.Task.ValidTask
  )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
}

export default EditTask;
