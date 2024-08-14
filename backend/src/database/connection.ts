import mongoose from 'mongoose';
import dotenv from 'dotenv';
import createServer from '@/app';

dotenv.config();

const url: string = process.env.MONGODB_URI ?? '';

export default function connection(): void {
  mongoose
    .connect(url)
    .then(() => {
      console.log('Conectado a MongoDB');
      createServer();
    })
    .catch((error: unknown) => {
      console.log(error);
    });
};

connection();