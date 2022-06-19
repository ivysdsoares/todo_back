"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidTitle(e) {
    if (e === null)
        return "Title cannot be empty";
    if (typeof e !== "string")
        return "Title must be a sentence";
    if (e.length <= 5)
        return "Title is too small";
    if (e.length >= 30)
        return "Title is too big";
    if (e.includes('"') || e.includes("'"))
        return "Title may not include quotes";
    return true;
}
exports.default = isValidTitle;
