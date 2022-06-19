"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var dotenv_1 = __importDefault(require("dotenv"));
var env = dotenv_1.default.config().parsed;
var Connection = axios_1.default.create({
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
    baseURL: env === null || env === void 0 ? void 0 : env.USER_BD
});
exports.default = Connection;
