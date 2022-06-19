"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidColor(e) {
    if (e == null)
        return "Task must have a color";
    if (e < 0 || e > 4)
        return "Color doesn't exist";
    return true;
}
exports.default = isValidColor;
