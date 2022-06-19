import { Request, Response } from "express";
import UseCases from "../../UseCases";
import DataAccess from "../../DataAccess";


function CreateUser({ req, res }: { req: Request; res: Response }) {
  UseCases.User.CreateUser(req.body, DataAccess.User.CreateUser)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(err.code).send(err.message);
    });
}

export default CreateUser;
