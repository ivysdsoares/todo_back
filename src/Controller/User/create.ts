import { Request, Response } from "express";
import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";

function Create({ req, res }: { req: Request; res: Response }) {
  UseCases.User.Create(req.body, DataAccess.User.Create)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
}

export default Create;
