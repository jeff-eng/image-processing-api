"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Create individual route object for images
var images = express_1.default.Router();
images.get('/', function (req, res) {
    var queryObjectLength = Object.keys(req.query).length;
    if (queryObjectLength === 0) {
        var instructions = 'Endpoint format should be: \/api\/images?filename=example&width=200&height=200';
        res.send(instructions);
    }
    else if (queryObjectLength > 0) {
        res.sendStatus(200);
    }
});
// Export module
exports.default = images;
