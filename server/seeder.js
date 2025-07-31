const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./db/db.js');
// Data - Models
const Product = require('./models/Product.js');
const products = require('./data/products.js');
const Event = require('./models/Event.js');
const events = require('./data/events.js');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);

    await Event.deleteMany();
    await Event.insertMany(events);
    
    console.log('Data seeded');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();