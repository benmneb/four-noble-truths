import mongoose from 'mongoose';

import app from './app.js';

const apiPort = 5000;

app.listen(apiPort, () =>
  console.log(
    `✅ Server running on port ${apiPort}... connecting to MongoDB Atlas`
  )
);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });
