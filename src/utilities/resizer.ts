import sharp from 'sharp';

const resizer = async (filename: string, width: string | number, height: string | number) => {
    try {
        const filepath = `images/full/${filename}.jpeg`;
        
        // Call the async sharp method
        await sharp(filepath)
        .resize(Number(width), Number(height))
        .toFile(`images/thumb/${filename}-resized.jpeg`);
    } catch (err) {
        throw err;
    }
};

export default resizer;