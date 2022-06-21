import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
import { Props } from "../types";

function Report({ req, res }: Props) {
  UseCases.Task.Report({ id: req.params.id }, DataAccess.Task.Report)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
}

export default Report;
