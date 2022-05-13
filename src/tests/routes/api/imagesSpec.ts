import supertest from 'supertest';
import images from '../../../routes/api/images';

const request = supertest(images);

// TODO: Write test for the /images endpoint
describe('Test endpoint responses', () => {
    it('should return status code 200 upon reaching /images endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
});