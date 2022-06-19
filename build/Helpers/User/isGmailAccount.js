"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isGmailAccount(_a) {
    var email = _a.email;
    if (!email)
        return Promise.reject(new Error("Email is required"));
    if (email.includes("gmail") || email.includes("hotmail")) {
        return Promise.resolve(true);
    }
    return Promise.reject(new Error("Is not a Google Account"));
}
exports.default = isGmailAccount;
