"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidStatus(e) {
    if (e === null)
        return "Task must have a status";
    if (!(e === "FINISHED") && !(e === "FAILED") && !(e === "ON GOING"))
        return "Status doesn't exist";
    return true;
}
exports.default = isValidStatus;
