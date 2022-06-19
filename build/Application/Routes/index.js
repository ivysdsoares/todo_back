"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("./User"));
var Task_1 = __importDefault(require("./Task"));
exports.default = { UserRouter: User_1.default, TaskRouter: Task_1.default };
