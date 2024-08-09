import dotenv from 'dotenv';
import WebSocket from 'ws';

dotenv.config();

const socket = new WebSocket(process.env.WS_ADDRESS);

socket.on('open', () => {
    console.log("Conectado ao serviço Camel via WebSocket no OpenShift.");
});

socket.on('error', (err) => {
    console.error("Erro de conexão com o serviço Camel no OpenShift:", err);
});

socket.on('message', (data) => {
    console.log("Mensagem recebida do camel:", data);
});

export const sendMessage = (message) => {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(message));
        console.log("Mensagem enviada para o serviço Camel:", message);
    } else {
        console.log("WebSocket não está conectado.");
    }
};
