"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Controller_1 = __importDefault(require("./Application/Controller"));
var UserRouter = express_1.default.Router();
UserRouter.post("/a", function (req, res) {
    Controller_1.default.User.Login({ req: req, res: res });
    console.log(1231);
});
UserRouter.post("/b", function (req, res) { return console.log("oi2"); });
exports.default = UserRouter;
