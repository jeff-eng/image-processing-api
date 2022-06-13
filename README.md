# Image Processing API
An image processing API that resizes images to user specifications when visiting a URL endpoint. This Image Processing API allows you to resize a limited set of images available by providing the filename, width, and height parameters in the URL. Functionality also includes caching to serve the resized images without needing reprocess the image on every endpoint request attempt. 
This project was built as part of the Udacity Full Stack JavaScript Nanodegree.

## Getting Started
1. Clone this repository and run `npm install` on the CLI to install all project dependencies.
2. Run the scripts below.
3. Visit the `/api` endpoint. You will be presented with a front-end that has instructions on how to use the API.

### Scripts to run on the CLI
- Test Script (compiles project from TypeScript to JavaScript, then runs unit tests)
    - `npm run test`
- Start Script (starts the server)
    - `npm run start`
- Build Script (builds and compiles project to JavaScript)
    - `npm run build`
- Prettier Script
    - `npm run prettier`
- ESLint Linting Script
    - `npm run lint`

## Endpoints
- `/` 
  - this endpoint is the index page with instructions on how exactly to use Image Processing API.
- `/api/images?filename=filename&width=width&height=height` 
  - filename, width, and height are user-supplied inputs for the query string parameters.
  - Example: `/api/images?filename=fjord&width=150&height=150`

## Technologies Used
- TypeScript
- Node.js
- Express.js (routing)
- Jasmine (unit testing)
- Prettier and ESLint (code formatting and linting)
- [Sharp](https://www.npmjs.com/package/sharp) (resizing images)