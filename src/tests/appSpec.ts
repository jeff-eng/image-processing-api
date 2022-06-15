import supertest from 'supertest';
import app from '../app';

// Tell Supertest what we are running are endpoint tests on
const request = supertest(app);

describe('Test endpoint response for app', () => {
    it('responds with status code', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
});
