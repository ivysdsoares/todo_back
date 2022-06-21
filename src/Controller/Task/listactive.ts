import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
import { Props } from "../types";

function ListActive({ req, res }: Props) {
  UseCases.Task.ListActive(
    { id: req.params.id },
    DataAccess.Task.ListActive
  )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
}

export default ListActive;
