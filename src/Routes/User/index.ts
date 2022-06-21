import express, { Request, Response } from "express";
import Controller from "../../Controller";

const UserRouter = express.Router();

UserRouter.post("/user/login", (req: Request, res: Response) => {
  Controller.User.Login({ req, res });
});
UserRouter.post("/user/create", (req: Request, res: Response) => {
  Controller.User.Create({ req, res });
});
UserRouter.post("/user/gmail", (req: Request, res: Response) => {
  Controller.User.Gmail({ req, res });
});

export default UserRouter;
