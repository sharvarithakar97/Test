"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var con = mysql_1.default.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "mysqlroot"
});
con.connect(function (err) {
    if (err)
        throw console.log(err);
    console.log("Connected!");
});
