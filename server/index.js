const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5000;

console.log(`Server will run on port: ${port}`);
