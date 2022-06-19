import { Request, Response } from "express";
import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";

function Gmail({ req, res }: { req: Request; res: Response }) {
  UseCases.User.Gmail(
    req.body,
    DataAccess.User.Exists,
    DataAccess.User.CreateUser
  )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err.message);
    });
}

export default Gmail;
