import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
import { Props } from "../types";

function Gmail({ req, res }: Props) {
  UseCases.User.Gmail(
    req.body,
    DataAccess.User.Exists,
    DataAccess.User.Create
  )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
}

export default Gmail;
