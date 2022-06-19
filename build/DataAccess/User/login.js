"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("DataAccess/connection"));
function Login(_a) {
    var email = _a.email, password = _a.password;
    return new Promise(function (resolve, reject) {
        connection_1.default.get("?password=".concat(password, "&email=").concat(email))
            .then(function (e) {
            console.log(e);
        })
            .catch(function (e) { });
    });
}
exports.default = Login;
