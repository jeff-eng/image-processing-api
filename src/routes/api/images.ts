import express from 'express';
import paramchecker from '../../utilities/paramchecker';
import resizer from '../../utilities/resizer';
import { constants, accessSync } from 'node:fs';

// Create individual route object for images
const images = express.Router();

// Images endpoint with custom middleware
images.get('/', paramchecker, async (req: express.Request, res: express.Response) => {
    const filename: string = req.query.filename as string;
    const width: string = req.query.width as string;
    const height: string = req.query.height as string;
    const filepath = `images/thumb/${filename}_${width}x${height}.jpeg`;
    
    try {
        // Check if file is cached
        accessSync(filepath, constants.R_OK | constants.W_OK);
        // Serve file from cache
        res.status(200).sendFile(filepath, {root: '.'});
    } catch (error) {
        // Attempt to resize image
        await resizeImage(filename, width, height, req, res);
        // Serve file after resizing and saved to folder
        res.status(200).sendFile(filepath, {root: '.'});
    }
});

// Helper function for resizing to make try-catch block cleaner and avoid nested try-catch statements
const resizeImage = async (filename: string, width: string, height: string, req: express.Request, res: express.Response) => {
    try {
        await resizer(filename, width, height);
    } catch (error) {
        res.status(400).send(`Bad Request: ${error}`);
    }
};

// Export module
export default images;