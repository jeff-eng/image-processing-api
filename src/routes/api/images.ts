import express from 'express';
import paramchecker from '../../utilities/paramchecker';

// Create individual route object for images
const images = express.Router();

// Images endpoint
images.get('/', paramchecker, (req, res) => {
    res.send('Hello');
    console.log('/images endpoint');
});

// Export module
export default images;