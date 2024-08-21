import mongoose from 'mongoose';
import dotenv from 'dotenv';
import createServer from '../app.js';
dotenv.config();
const url = process.env.MONGODB_URI ?? '';
export default function connection() {
    mongoose
        .connect(url)
        .then(() => {
        console.log('Conectado a MongoDB');
        createServer();
    })
        .catch((error) => {
        console.log(error);
    });
}
;
connection();
