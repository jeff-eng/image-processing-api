import sharp from 'sharp';

const resizer = async (
    filename: string,
    width: string | number,
    height: string | number
): Promise<void> => {
    const filepath = `images/full/${filename}.jpeg`;

    await sharp(filepath)
        .resize(Number(width), Number(height))
        .toFile(`images/thumb/${filename}_${width}x${height}.jpeg`);
};

export default resizer;