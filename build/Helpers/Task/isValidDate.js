"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
function isValidDate(e) {
    if (e == null)
        return "Expiration date is required";
    if (!(0, moment_1.default)(e).isValid())
        return "Invalid date";
    return true;
}
exports.default = isValidDate;
