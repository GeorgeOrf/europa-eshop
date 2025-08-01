const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db.js');
const productRoutes = require('./routes/productRoutes.js');
const eventRoutes = require('./routes/eventRoutes.js');

const app = express();

connectDB();

app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/events', eventRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


