"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _isValidEmail_1 = __importDefault(require("./_isValidEmail"));
var _isValidName_1 = __importDefault(require("./_isValidName"));
var _isValidPassword_1 = __importDefault(require("./_isValidPassword"));
var isGmailAccount_1 = __importDefault(require("./isGmailAccount"));
exports.default = { isGmailAccount: isGmailAccount_1.default, _isValidEmail: _isValidEmail_1.default, _isValidName: _isValidName_1.default, _isValidPassword: _isValidPassword_1.default };
