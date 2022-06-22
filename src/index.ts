import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./DataAccess/connection";
import Routes from "./Routes";

const app = express();
app.use(bodyParser.json());
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "*"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Custom-Header"
  );

  next();
});

app.use(Routes.TaskRouter);
app.use(Routes.UserRouter);

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
export default app;
