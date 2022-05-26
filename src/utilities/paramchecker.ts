// Middleware for checking valid parameters from URL GET request
import express from 'express';

// Parameter checker function (function returns true/false if user supplied proper URL parameters)
const paramchecker = (req: express.Request, res: express.Response, next: Function) => {
    // Use the request object to obtain the query parameter keys
    const parameters = Object.keys(req.query);
    
    if (parameters.includes('filename') && parameters.includes('width') && parameters.includes('height')) {
        next();
    } else {
        res.send('Endpoint format should be: \/api\/images?filename=example&width=200&height=200');
    }

};

export default paramchecker;