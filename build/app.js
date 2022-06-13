"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
// Create express object
var app = (0, express_1.default)();
var port = 3000;
// API route - use the index.ts file within routes to handle
// endpoints that start with /api
app.use('/api', index_1.default);
app.get('/', function (req, res) {
    res.status(200).sendFile('src/index.html', { root: '.' });
});
// Start server
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
exports.default = app;
