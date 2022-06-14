import express from 'express';
import paramchecker from '../../utilities/paramchecker';
import resizer from '../../utilities/resizer';
import { promises as fs } from 'fs';
import to from '../../utilities/helpers';

// Create individual route object for images
const images = express.Router();

// Images endpoint with custom middleware
images.get('/', paramchecker, async (req: express.Request, res: express.Response) => {
    const filename: string = req.query.filename as string;
    const width: string = req.query.width as string;
    const height: string = req.query.height as string;
    const filepath = `images/thumb/${filename}_${width}x${height}.jpeg`;
        
    // Check if file already exists
    const [error] = await to(fs.access(filepath));

    // Error handling without using nested try-catch statements
    if (!error) {
        // No error from fs.access - Okay to serve cached image
        res.status(200).sendFile(filepath, { root: '.' });
    } else if (error) {
        // Wrapping resizer method with the 'to' helper method to avoid error handling with nested try-catch
        const [resizingError] = await to(resizer(filename, width, height));
        // Handle if the resizing fails
        if (resizingError) {
            res.status(400).send(`Bad Request: ${resizingError}`);
        } else {                
            // Serve the resized image after resizing completes
            res.status(200).sendFile(filepath, { root: '.'});
        }
    }
});

// Export module
export default images;