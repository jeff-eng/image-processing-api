import express from 'express';
import paramchecker from '../../utilities/paramchecker';
import resizer from '../../utilities/resizer';
import {promises as fs} from 'fs';

// Create individual route object for images
const images = express.Router();

// Images endpoint with custom middleware
images.get('/', paramchecker, async (req: express.Request, res: express.Response) => {
    const filename: string = req.query.filename as string;
    const width: string = req.query.width as string;
    const height: string = req.query.height as string;
    
    try {
        // TODO: Implement caching - check if file already exists before doing resize
        // If file already exists, just serve the file, otherwise run resize and then serve
        // fs.access(`images/thumb/${filename}-resized.jpeg`, fs.F_OK, (err) => {

        // });
        const filepath = `images/thumb/${filename}_${width}x${height}.jpeg`;
        await resizer(filename, width, height);    
        res.status(200).sendFile(filepath, {root: '.'});
    } catch (err) {
        res.status(400).send(`Bad request - ${err}`);
    }

});

// Export module
export default images;