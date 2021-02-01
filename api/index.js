"use strict";
exports.__esModule = true;
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlroot"
});
con.connect(function (err) {
    if (err)
        throw console.log(err);
    console.log("Connected!");
});
