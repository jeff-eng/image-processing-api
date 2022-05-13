import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req, res) => {
    console.log('routes index.ts', res.statusCode);
    res.send('main api route');
});

routes.use('/images', images)

export default routes;