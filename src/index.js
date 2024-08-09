import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import messageRoutes from './routes/messageRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', messageRoutes);

app.listen(port, () => {
  console.log(`Servidor HTTP rodando na porta ${port}`);
});

export default app;
