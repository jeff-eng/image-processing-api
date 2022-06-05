import sharp from 'sharp';



const resizer = async (filename: string, width: string | number, height: string | number) => {
    try {
        const filepath = `images/full/${filename}.jpeg`;
        
        await sharp(filepath)
        .resize(width as number, height as number)
        .toFile(`images/thumb/${filename}-resized.jpeg`);
    } catch (err) {
        console.log('error thrown on line 12');
        throw err;
    }
};

export default resizer;