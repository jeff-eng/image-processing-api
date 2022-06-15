"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resizer_1 = __importDefault(require("../../utilities/resizer"));
var fs_1 = require("fs");
describe('resizer - basic functionality', function () {
    // Pass a filename to resizer that doesn't match a filename in images/full folder
    it('resizer should throw error when passing in non-matching filename as input', function () { return __awaiter(void 0, void 0, void 0, function () {
        var filename;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = 'test';
                    return [4 /*yield*/, expectAsync((0, resizer_1.default)(filename, 420, 420)).toBeRejectedWithError()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Pass in a width and height that can't be converted to a number
    it('resizer should throw error when passing strings to width and height as input', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expectAsync((0, resizer_1.default)('fjord', 'foo', 'bar')).toBeRejectedWithError()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Pass in valid filename but width and height as strings
    it('resizer should not throw error when providing valid filename but W&H as strings', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expectAsync((0, resizer_1.default)('fjord', '420', '420')).not.toBeRejectedWithError()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Pass in valid filename that exists in images/full folder and valid width/height
    it('opening file via fs should pass - returns resolved promise; else would return error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var filename, width, height, filepath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = 'fjord';
                    width = 100;
                    height = 100;
                    filepath = "images/thumb/".concat(filename, "_").concat(width, "x").concat(height, ".jpeg");
                    // Calls resizer method to resize and write file to directory
                    return [4 /*yield*/, (0, resizer_1.default)(filename, width, height)];
                case 1:
                    // Calls resizer method to resize and write file to directory
                    _a.sent();
                    // Check that the resized file is in images/thumb folder using file system - resolved means success
                    return [4 /*yield*/, expectAsync(fs_1.promises.open(filepath, 'r')).toBeResolved()];
                case 2:
                    // Check that the resized file is in images/thumb folder using file system - resolved means success
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs_1.promises.unlink('images/thumb/fjord_100x100.jpeg')];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error encountered deleting file');
                    return [3 /*break*/, 3];
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, fs_1.promises.unlink('images/thumb/fjord_420x420.jpeg')];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error("Error encountered deleting file. ".concat(error_2));
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); });
});
