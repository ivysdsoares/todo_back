"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataAccess_1 = __importDefault(require("DataAccess"));
var UseCases_1 = __importDefault(require("Domain/UseCases"));
// import { ILoginRequest } from "Domain/Entities/Task/types";
function Login(_a) {
    var req = _a.req, res = _a.res;
    UseCases_1.default.User.Login(req.body, DataAccess_1.default.User.Login)
        .then(function (resultado) {
        res.status(201).send(resultado);
    })
        .catch(function (err) {
        res.status(500).send(err);
    });
}
exports.default = Login;
