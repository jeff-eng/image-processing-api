import express from 'express';
import paramchecker from '../../utilities/paramchecker';

// Create individual route object for images
const images = express.Router();

// Images endpoint with custom middleware
images.get('/', paramchecker, (req, res) => {
    res.send('Hello, you have reached the \\images endpoint with query params.');
});

// Export module
export default images;