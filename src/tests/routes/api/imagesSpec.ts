import supertest from 'supertest';
import app from '../../../app';

const request = supertest(app);

describe('Tests /GET requests to /api/images', () => {
    it('should return status code 200 at /api/images', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    });

    it('/api/images should return instructions on how to structure URL if not provided', async () => {
        const response = await request.get('/api/images');
        const instructions = 'Endpoint format should be: \/api\/images?filename=example&width=200&height=200';
        expect(response.text).toEqual(instructions);
    });

    it('should return 200 when query string parameters provided', async () => {
        const response = await request.get('/api/images').query({name: 'jeff'});
        expect(response.status).toBe(200);
    });

});