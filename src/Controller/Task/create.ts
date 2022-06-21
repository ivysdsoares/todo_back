import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
import { Props } from "../types";

function CreateTask({ req, res }: Props) {
  UseCases.Task.CreateTask(
    req.body,
    DataAccess.Task.CreateTask,
    DataAccess.User.Valid
  )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
}

export default CreateTask;
