require('dotenv').config();  // Ensure this is at the top!

console.log("Environment Variables Loaded:", {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_CLUSTER: process.env.DB_CLUSTER,
  DB_NAME: process.env.DB_NAME,
});

const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

async function connectDB() {
  try {
    if (!uri) {
      console.error('Mongo URI is undefined. Please check .env variables.');
      return;
    }
    
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

connectDB();
