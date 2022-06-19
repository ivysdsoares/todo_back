"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var Routes_1 = __importDefault(require("./Application/Routes"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
    methods: "*"
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Custom-Header");
    next();
});
app.use(Routes_1.default.TaskRouter);
app.use(Routes_1.default.UserRouter);
app.listen(8080, function () {
    console.log("Server is listening on port 8080");
});
exports.default = app;
