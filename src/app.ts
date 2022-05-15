
import express from 'express';
import routes from './routes/index';

// Create express object
const app = express();
const port = 3000;

// API route - use the index.ts file within routes to handle
// endpoints that start with /api
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('This route is the root.');
});

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

export default app;