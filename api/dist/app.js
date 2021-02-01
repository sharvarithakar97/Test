"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 7001;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Server Working !!');
});
app.post('/addTask', function (req, res) {
    var task = req.body;
    console.log(task);
    return res.status(200).json({ status: true });
});
app.listen(port, function () {
    return console.log("server is listening on " + port);
});
