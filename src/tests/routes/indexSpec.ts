import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

describe('Test GET requests to /api', () => {
    it('should return status code 200 at /api ', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });
});
