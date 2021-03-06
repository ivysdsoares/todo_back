import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
import { Props } from "../types";

function Create({ req, res }: Props) {
  UseCases.Task.Create(
    req.body,
    DataAccess.Task.Create,
    DataAccess.User.Valid
  )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
}

export default Create;
