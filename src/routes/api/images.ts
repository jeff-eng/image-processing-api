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
        await resizer(filename, width, height);    
        
        res.status(200).sendFile(`images/thumb/${filename}-resized.jpeg`, {root: '.'});
    } catch (err) {
        console.log(err);
        res.status(400).send(`Bad request - ${err}`);
    }

    // The server response when resizer is given an invalid filename
    
});

// Export module
export default images;