import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
import { Props } from "../types";

function Detail({ req, res }: Props) {
  UseCases.Task.Detail(
    req.body,
    DataAccess.Task.Detail,
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

export default Detail;
