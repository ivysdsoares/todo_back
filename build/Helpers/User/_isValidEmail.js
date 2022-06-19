"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidEmail(_a) {
    var email = _a.email;
    if (email == null)
        return "Email is required";
    if (!email.includes("@") || !email.includes(".com"))
        return "Email is incomplete";
    if (email.includes('"') || email.includes("'"))
        return "Email may not include quotes";
    if (email.includes("&") ||
        email.includes("?") ||
        email.includes("!") ||
        email.includes("="))
        return "Email may not include special characters";
    if (email.length < 5)
        return "Email is too short";
    if (email.length > 30)
        return "Email is too long";
    return true;
}
exports.default = isValidEmail;
