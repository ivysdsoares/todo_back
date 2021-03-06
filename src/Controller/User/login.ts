import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
import { Props } from "../types";

function Login({ req, res }: Props) {
  UseCases.User.Login(req.body, DataAccess.User.Login)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
}

export default Login;
