// import sharp from 'sharp';
import resizer from '../../utilities/resizer';

// Resizer:
// 1) Takes in a filename (without file extension), width, and height
// 2) Read file from file system using the filename argument
// 3) Pass in the file to the Sharp method
// 4) Save result to a variable
// 5) Write modded file to the folder using fs module


describe('resizer - basic functionality', () => {

    // Pass a filename to resizer that doesn't match a filename in images/full folder
    it('resizer throws an error when passing in non-matching filename as input', async () => {
        const filename = 'test';
        
        await expectAsync(resizer(filename, 420, 420)).toBeRejectedWithError();
    });

    // Pass in a width and height that can't be converted to a number
    it('resizer throws an error when passing strings to width and height as input', async () => {
        // Expect an error to be thrown
        await expectAsync(resizer('fjord', 'foo', 'bar')).toBeRejectedWithError();
    });

    // // Pass in valid filename that exists in images/full folder and valid width/height
    // it('valid filename and valid width/height should not return undefined when attempting to do readFile', () => {
    //     // Doing a file system readfile action should not return undefined
    // });

});