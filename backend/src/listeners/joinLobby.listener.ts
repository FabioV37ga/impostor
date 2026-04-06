import { Socket } from "socket.io";
import { lobbies } from "../database/lobbies.db";
import { player } from "../models/player.model";

export function handleJoinLobby(socket: Socket, event: any, ...args: any) {

    if (/^.+-join/.test(event)) {
        console.log("evento de join recebido")

        var inviteCode = args[0]
        var user: player = args[1]
        // console.log(user)

        // var joinedLobby = lobbies.find(lobby => lobby.id == inviteCode)
        var joinedLobbyIndex = lobbies.findIndex(lobby => lobby.id == inviteCode)
        // console.log(joinedLobbyIndex)

        // if (!joinedLobby) emit("join-error")

        if (lobbies[joinedLobbyIndex]) {
            lobbies[joinedLobbyIndex].players.push(user)
            console.log(lobbies[joinedLobbyIndex])
        }


    }

}