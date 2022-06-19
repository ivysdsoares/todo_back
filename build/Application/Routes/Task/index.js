"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var TaskRouter = express_1.default.Router();
TaskRouter.post("/tasks/create", function (req, res) {
    return console.log("oi4");
});
TaskRouter.get("/tasks/inactive", function (req, res) {
    return console.log("oi5");
});
TaskRouter.get("/tasks/active", function (req, res) {
    return console.log("oi6");
});
TaskRouter.put("/tasks/edit", function (req, res) {
    return console.log("oi7");
});
exports.default = TaskRouter;
