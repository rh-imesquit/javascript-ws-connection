import express from 'express';
import { sendMessage } from '../services/websocketService.js';

const router = express.Router();

router.post('/send', (req, res) => {
    console.log("Body:", req.body)
    console.log("Recebi uma mensagem via HTTP:", req.body.message);
    sendMessage(req.body.message);
    res.status(200).send("Mensagem enviada para o serviço externo via WebSocket.");
});

export default router;
