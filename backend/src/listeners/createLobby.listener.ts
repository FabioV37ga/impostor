import { Socket } from "socket.io";
import { generateInviteCode } from "../utils/generateInviteCode";
import LobbyController from "../controllers/lobby.controller";

export function handleCreateLobby(socket: Socket) {
    socket.on("create-lobby", (host, words, callback) => {

        const inviteCode = generateInviteCode();

        var lobby = new LobbyController(inviteCode, host, words)

        callback(inviteCode);
    });
}