"use strict";
/* eslint-disable no-param-reassign */
Object.defineProperty(exports, "__esModule", { value: true });
var UserEntity = /** @class */ (function () {
    function UserEntity(_a) {
        var id = _a.id, email = _a.email, password = _a.password, name = _a.name;
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
    }
    return UserEntity;
}());
exports.default = UserEntity;
