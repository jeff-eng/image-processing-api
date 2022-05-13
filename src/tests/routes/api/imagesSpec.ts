import supertest from 'supertest';
import app from '../../../app';

const request = supertest(app);

// TODO: Write test for the /images endpoint
describe('Test endpoint responses', () => {
    it('should return status code 200 upon reaching /images endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
});