import express from 'express';

// Create individual route object for images
const images = express.Router();

images.get('/', (req, res) => {
    const queryObjectLength = Object.keys(req.query).length;
    
    if ( queryObjectLength === 0) {
        const instructions = 'Endpoint format should be: \/api\/images?filename=example&width=200&height=200';
        res.send(instructions);
    } else if (queryObjectLength > 0) {
        res.sendStatus(200);
    } 


});

// Export module
export default images;