import axios from "axios";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

const Connection = axios.create({
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  baseURL: env?.DB_CONNECTION || ""
});

export default Connection;
