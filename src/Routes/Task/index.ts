import express, { Express, Request, Response } from "express";
import Controller from "../../Controller";

const TaskRouter = express.Router();

TaskRouter.post("/tasks/create", (req: Request, res: Response): void => {
  Controller.Task.CreateTask({ req, res });
});
TaskRouter.put("/tasks/edit", (req: Request, res: Response): void => {
  Controller.Task.EditTask({ req, res });
});
TaskRouter.get("/tasks/active/:id", (req: Request, res: Response) => {
  Controller.Task.ListActive({ req, res });
});
TaskRouter.get("/tasks/inactive/:id", (req: Request, res: Response): void =>
  Controller.Task.ListInactive({ req, res })
);
TaskRouter.get("/tasks/report/:id", (req: Request, res: Response): void =>
  Controller.Task.Report({ req, res })
);

export default TaskRouter;
