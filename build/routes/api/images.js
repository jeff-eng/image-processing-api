"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Create individual route object for images
var images = express_1.default.Router();
images.get('/', function (req, res) {
    console.log('images.ts', res.statusCode);
    res.send('Images route');
});
// Export module
exports.default = images;
