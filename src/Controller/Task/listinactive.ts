import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
import { Props } from "../types";

function ListInactive({ req, res }: Props) {
  UseCases.Task.ListInactive(
    { id: req.params.id },
    DataAccess.Task.ListInactive
  )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
}

export default ListInactive;
