"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var paramchecker_1 = __importDefault(require("../../utilities/paramchecker"));
// Create individual route object for images
var images = express_1.default.Router();
// Images endpoint with custom middleware
images.get('/', paramchecker_1.default, function (req, res) {
    res.send('Hello, you have reached the \\images endpoint with query params.');
});
// Export module
exports.default = images;
