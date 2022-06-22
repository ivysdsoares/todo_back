import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
import { Props } from "../types";

function Edit({ req, res }: Props) {
  UseCases.Task.Edit(
    req.body,
    DataAccess.Task.Edit,
    DataAccess.User.Valid,
    DataAccess.Task.Valid
  )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
}

export default Edit;
