import { Server } from "socket.io";

const PORT = 3001;

const io = new Server(PORT, {
    cors: { origin: "*" }
})

io.on("connection", (socket) => {
    console.log("--+ jogador conectado:", socket.id);

    socket.onAny((event, ...args) => {
        console.log("evento recebido:", event, args);
    });

    socket.on("create-lobby", () => {

        function generateInviteCode(): string {
            const keys = "abcdefghijklmnopqrstuvwxyz"

            let inviteCode = ''

            for (let digito = 0; digito < 6; digito++) {
                const randomKey = Math.floor(Math.random() * 26);
                inviteCode += keys[randomKey]
            }

            return inviteCode
        }

        var inviteCode = generateInviteCode()

        console.log("lobby criado: ", inviteCode);
    });
});