import mongoose from 'mongoose';

mongoose
  .connect('mongodb://127.0.0.1:27017/4NT', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error('❌ Connection error', e.message);
  });

export const db = mongoose.connection;
