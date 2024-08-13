import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url: string = process.env.MONGODB_URI ?? '';

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error : unknown) => {
    console.log(error);
  });
