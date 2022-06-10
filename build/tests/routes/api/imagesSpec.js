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
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../../../app"));
var fs_1 = require("fs");
var request = (0, supertest_1.default)(app_1.default);
describe('Tests /GET requests to /api/images', function () {
    it('should return status code 200 at /api/images', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('/api/images should return instructions on how to structure URL if not provided', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, instructions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images')];
                case 1:
                    response = _a.sent();
                    instructions = 'Invalid Endpoint - Format should be: \/api\/images?filename=example&width=200&height=200';
                    expect(response.text).toEqual(instructions);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return 200 when query string parameters provided', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images').query({ name: 'jeff' })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Tests for resizing using URL', function () {
    // Invalid filename and valid width/height values should return 400 error
    it('should return 400 error when invalid filename and valid width/height provided', function () { return __awaiter(void 0, void 0, void 0, function () {
        var filename, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = 'beach';
                    return [4 /*yield*/, request.get("/api/images?filename=".concat(filename, "&width=100&height=100"))];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    // Response should return and display the resized image when visiting URL with valid parameters
    it('should return 200 status and image when visiting URL with valid parameters', function () { return __awaiter(void 0, void 0, void 0, function () {
        var filename, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = 'fjord';
                    return [4 /*yield*/, request.get("/api/images?filename=".concat(filename, "&width=100&height=100"))];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('fs should be able to resolve promise when trying to open resized image file', function () { return __awaiter(void 0, void 0, void 0, function () {
        var filename, width, height, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = 'fjord';
                    width = 100;
                    height = 100;
                    return [4 /*yield*/, request.get("/api/images?filename=".concat(filename, "&width=").concat(width, "&height=").concat(height))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, expectAsync(fs_1.promises.open("images/thumb/".concat(filename, "_").concat(width, "x").concat(height, ".jpeg"), 'r')).toBeResolved()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
