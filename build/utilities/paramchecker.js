"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Parameter checker function (function returns true/false if user supplied proper URL parameters)
var paramchecker = function (req, res, next) {
    // Use the request object to obtain the query parameter keys and values
    var parameterKeys = Object.keys(req.query);
    var paramVals = Object.values(req.query);
    var width = paramVals[1];
    var height = paramVals[2];
    // Attempt to convert string to number (returns NaN if unable)
    var WidthIsNum = parseInt(width);
    var HeightIsNum = parseInt(height);
    if (parameterKeys.includes('filename') &&
        parameterKeys.includes('width') &&
        parameterKeys.includes('height') &&
        WidthIsNum &&
        HeightIsNum) {
        next();
    }
    else {
        res.send('Invalid Endpoint - Format should be: \/api\/images?filename=example&width=200&height=200');
    }
};
exports.default = paramchecker;
