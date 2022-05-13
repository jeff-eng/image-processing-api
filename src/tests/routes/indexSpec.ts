import supertest from 'supertest';
import routes from '../../routes/index';

const request = supertest(routes);

describe('Test API endpoint route', () => {
    it('should return status code 200 at api endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
});