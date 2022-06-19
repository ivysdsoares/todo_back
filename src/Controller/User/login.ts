import { Request, Response } from "express";
import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";
// import { ILoginRequest } from "Domain/Entities/Task/types";

function Login({ req, res }: { req: Request; res: Response }) {
  UseCases.User.Login(req.body, DataAccess.User.Login)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err.message);
    });
}

export default Login;
