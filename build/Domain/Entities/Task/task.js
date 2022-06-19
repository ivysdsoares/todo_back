"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TaskFactory(_a) {
    var isValidTitle = _a.isValidTitle, isValidStatus = _a.isValidStatus, isValidDescription = _a.isValidDescription, isValidDate = _a.isValidDate;
    return function Task(_a) {
        var user_email = _a.user_email, id = _a.id, title = _a.title, status = _a.status, description = _a.description, expiration_date = _a.expiration_date, color = _a.color;
        var VT = isValidTitle(title);
        if (!(VT === true)) {
            throw new Error(VT);
        }
        var VS = isValidStatus(status);
        if (!(VS === true)) {
            throw new Error(VS);
        }
        var VD = isValidDescription(description);
        if (!(VD === true)) {
            throw new Error(VD);
        }
        var VE = isValidDate(expiration_date);
        if (!(VE === true)) {
            throw new Error(VE);
        }
        return {
            getId: function () { return id || null; },
            getUserEmail: function () { return user_email; },
            getTitle: function () { return title; },
            getDescription: function () { return description; },
            getExpirationDate: function () { return expiration_date; },
            getStatus: function () { return status; },
            getColor: function () { return color; },
            setId: function (e) {
                id = e;
            },
            setTitle: function (e) {
                title = e;
            },
            setStatus: function (e) {
                status = e;
            },
            setDescription: function (e) {
                description = e;
            },
            setExpirationDate: function (e) {
                expiration_date = e;
            },
            setColor: function (e) {
                color = e;
            }
        };
    };
}
exports.default = TaskFactory;
