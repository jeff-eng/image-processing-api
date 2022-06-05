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
// import sharp from 'sharp';
var resizer_1 = __importDefault(require("../../utilities/resizer"));
// Resizer:
// 1) Takes in a filename (without file extension), width, and height
// 2) Read file from file system using the filename argument
// 3) Pass in the file to the Sharp method
// 4) Save result to a variable
// 5) Write modded file to the folder using fs module
describe('resizer - basic functionality', function () {
    // Pass a filename to resizer that doesn't match a filename in images/full folder
    it('resizer throws an error when passing in non-matching filename as input', function () { return __awaiter(void 0, void 0, void 0, function () {
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
    it('resizer throws an error when passing strings to width and height as input', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Expect an error to be thrown
                return [4 /*yield*/, expectAsync((0, resizer_1.default)('fjord', 'foo', 'bar')).toBeRejectedWithError()];
                case 1:
                    // Expect an error to be thrown
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // // Pass in valid filename that exists in images/full folder and valid width/height
    // it('valid filename and valid width/height should not return undefined when attempting to do readFile', () => {
    //     // Doing a file system readfile action should not return undefined
    // });
});
