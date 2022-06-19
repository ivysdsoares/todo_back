"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isValidColor_1 = __importDefault(require("./isValidColor"));
var isValidDate_1 = __importDefault(require("./isValidDate"));
var isValidDescription_1 = __importDefault(require("./isValidDescription"));
var isValidStatus_1 = __importDefault(require("./isValidStatus"));
var isValidTitle_1 = __importDefault(require("./isValidTitle"));
exports.default = {
    isValidColor: isValidColor_1.default,
    isValidTitle: isValidTitle_1.default,
    isValidDescription: isValidDescription_1.default,
    isValidStatus: isValidStatus_1.default,
    isValidDate: isValidDate_1.default
};
