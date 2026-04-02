// TODO: organizar código, separar em arquivos, etc

import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

export const io = new Server(server, {
    cors: {
        origin: [
            "http://localhost:3210",
            "http://192.168.15.1:3210",
            "http://192.168.15.2:3210",
            "https://impostor-3r7r.onrender.com" // 👈 sem "/"
        ]
    }
});

io.on("connection", (socket) => {
    console.log("--+ jogador conectado:", socket.id);

    socket.onAny((event, ...args) => {
        console.log("evento recebido:", event, args);

        if (/^.+-spacebar/.test(event)) {
            console.log("evento de spacebar recebido:", event, args)
            socket.emit("spacebar-received", event, args)
        }

    });

    socket.on("create-lobby", (words, callback) => {

        function generateInviteCode(): string {
            const keys = "abcdefghijklmnopqrstuvwxyz123456789";

            let inviteCode = '';

            for (let i = 0; i < 6; i++) {
                const randomKey = Math.floor(Math.random() * 35);
                inviteCode += keys[randomKey];
            }

            return inviteCode;
        }

        const inviteCode = generateInviteCode();

        console.log("lobby criado:", inviteCode);

        callback(inviteCode);
    });

});

// 👇 MUITO IMPORTANTE
server.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT);
});