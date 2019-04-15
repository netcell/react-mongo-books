# Book Listing Demo

This is a demo of a book listing website with admin. Check a live version [here](https://master--zealous-austin-d3fb15.netlify.com/).

This is writen with React, Redux, React Router, Styled Component, Mongoose, Express. The Mongoose version being used is 5.4.21 since version 5.5x seems to have issue with `netlify-lambda` on Node 8.

## Setup

Create a file name `.env` at the root of the project. Copy the content of `sample.env` to this file and change the content accordingly.

- SERVER_HOST - The hostname of the server. Running locally, you can set it to [http://localhost:3000](http://localhost:3000)
- MONGO_URI - The URI to connect to your MongoDb server.

```
npm install
npm start
```

Navigate to [http://localhost:1234](http://localhost:1234) and enjoy.