// Middleware for checking valid parameters from URL GET request
import express from 'express';

// Parameter checker function (function returns true/false if user supplied proper URL parameters)
const paramchecker = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    // Use the request object to obtain the query parameter keys and values
    const parameterKeys = Object.keys(req.query);
    const paramVals = Object.values(req.query);

    const width = paramVals[1] as string;
    const height = paramVals[2] as string;

    // Attempt to convert string to number (returns NaN if unable)
    const WidthIsNum: number = parseInt(width);
    const HeightIsNum: number = parseInt(height);

    if (
        parameterKeys.includes('filename') &&
        parameterKeys.includes('width') &&
        parameterKeys.includes('height') &&
        WidthIsNum &&
        HeightIsNum
    ) {
        next();
    } else {
        res.send(
            'Invalid Endpoint - Format should be: /api/images?filename=example&width=200&height=200'
        );
    }
};

export default paramchecker;
