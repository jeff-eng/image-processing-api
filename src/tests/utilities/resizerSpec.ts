import resizer from '../../utilities/resizer';
import {promises as fs} from 'fs';

describe('resizer - basic functionality', () => {

    // Pass a filename to resizer that doesn't match a filename in images/full folder
    it('resizer should throw error when passing in non-matching filename as input', async () => {
        const filename = 'test';
        
        await expectAsync(resizer(filename, 420, 420)).toBeRejectedWithError();
    });

    // Pass in a width and height that can't be converted to a number
    it('resizer should throw error when passing strings to width and height as input', async () => {
        await expectAsync(resizer('fjord', 'foo', 'bar')).toBeRejectedWithError();
    });

    // Pass in valid filename but width and height as strings
    it('resizer should not throw error when providing valid filename but W&H as strings', async () => {
        await expectAsync(resizer('fjord', '420', '420')).not.toBeRejectedWithError();
    }); 

    // Pass in valid filename that exists in images/full folder and valid width/height
    it('opening file via fs should pass - returns resolved promise; else would return error', async () => {
        const filename = 'fjord';
        const width: number = 100;
        const height: number = 100;
        const filepath = `images/thumb/${filename}_${width}x${height}.jpeg`;

        // Calls resizer method to resize and write file to directory
        await resizer(filename, width, height);
        // Check that the resized file is in images/thumb folder using file system - resolved means success
        await expectAsync(fs.open(filepath, 'r')).toBeResolved();
    });

});