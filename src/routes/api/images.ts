import express from 'express';

// Create individual route object for images
const images = express.Router();

images.get('/', (req, res) => {
    console.log('images.ts', res.statusCode);
    res.send('Images route');
});

// Export module
export default images;