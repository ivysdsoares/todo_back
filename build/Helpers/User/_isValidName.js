"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidName(_a) {
    var name = _a.name;
    if (name == null)
        return "Name is required";
    if (name.includes('"') || name.includes("'"))
        return "Name may not include quotes";
    if (name.length < 5)
        return "Name is too short";
    if (name.length > 30)
        return "Name is too long";
    return true;
}
exports.default = isValidName;
