"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidPassword(_a) {
    var password = _a.password;
    if (password == null)
        return "Password is required";
    if (password.includes('"') || password.includes("'"))
        return "Password may not include quotes";
    if (password.includes("&") ||
        password.includes("?") ||
        password.includes("!") ||
        password.includes("="))
        return "Password may not include special characters";
    if (password.length < 5)
        return "Password is too short";
    if (password.length > 16)
        return "Password is too long";
    return true;
}
exports.default = isValidPassword;
