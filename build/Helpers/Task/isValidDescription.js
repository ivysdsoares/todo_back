"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidDescription(e) {
    if (typeof e !== "string")
        return "Title must be a sentence";
    if (e.length >= 150)
        return "Title is too big";
    if (e.includes('"') || e.includes('"'))
        return "Title may not include quotes";
    return true;
}
exports.default = isValidDescription;
