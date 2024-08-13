import express from 'express';
import './database/connection';
const app = express();
const port = process.env.PORT ?? 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port.toString()}`);
});
