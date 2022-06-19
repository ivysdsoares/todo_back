import express, { Express, Request, Response } from "express";

const TaskRouter = express.Router();

TaskRouter.post("/tasks/create", (req: Request, res: Response): void =>
  console.log("oi4")
);
TaskRouter.get("/tasks/inactive", (req: Request, res: Response): void =>
  console.log("oi5")
);
TaskRouter.get("/tasks/active", (req: Request, res: Response): void =>
  console.log("oi6")
);
TaskRouter.put("/tasks/edit", (req: Request, res: Response): void =>
  console.log("oi7")
);

export default TaskRouter;
