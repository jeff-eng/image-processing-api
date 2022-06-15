import supertest from 'supertest';
import app from '../../../app';
import { promises as fs } from 'fs';

const request = supertest(app);

describe('Tests /GET requests to /api/images', () => {
    it('should return status code 200 at /api/images', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    });

    it('/api/images should return instructions on how to structure URL if not provided', async () => {
        const response = await request.get('/api/images');
        const instructions =
            'Invalid Endpoint - Format should be: /api/images?filename=example&width=200&height=200';
        expect(response.text).toEqual(instructions);
    });

    it('should return 200 when query string parameters provided', async () => {
        const response = await request
            .get('/api/images')
            .query({ name: 'jeff' });
        expect(response.status).toBe(200);
    });
});

describe('Tests for resizing using URL', () => {
    // Invalid filename and valid width/height values should return 400 error
    it('should return 400 error when invalid filename and valid width/height provided', async () => {
        const filename = 'beach';

        const response = await request.get(
            `/api/images?filename=${filename}&width=100&height=100`
        );

        expect(response.statusCode).toBe(400);
    });

    // Response should return and display the resized image when visiting URL with valid parameters
    it('should return 200 status and image when visiting URL with valid parameters', async () => {
        const filename = 'fjord';

        const response = await request.get(
            `/api/images?filename=${filename}&width=100&height=100`
        );

        expect(response.statusCode).toBe(200);
    });

    it('fs should be able to resolve promise when trying to open resized image file', async () => {
        const filename = 'fjord';
        const width = 100;
        const height = 100;
        await request.get(
            `/api/images?filename=${filename}&width=${width}&height=${height}`
        );

        await expectAsync(
            fs.open(`images/thumb/${filename}_${width}x${height}.jpeg`, 'r')
        ).toBeResolved();
    });
});
