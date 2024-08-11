import express from 'express';

const app: express.Application = express();
const port: number | string = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port.toString()}`);
});

