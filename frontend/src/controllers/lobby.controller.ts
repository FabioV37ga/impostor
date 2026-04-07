import { player } from "../models/player.model.js"
import LobbyView from "../views/lobby.view.js"
import { mobileNavigation } from "../utils/mobileNavigation.util.js";
import ClientController from "../controllers/client.controller.js";

class LobbyController {
    lobbyInfo: any
    view: LobbyView;
    host: player;
    inviteCode: string;
    words?: string[];

    constructor(host: player, inviteCode: string, words?: string[]) {
        if (!mobileNavigation.isRenderingFromPopstate) {
            history.pushState({ tela: "lobby" }, '', '')
        }

        this.inviteCode = inviteCode
        this.host = host
        words ? this.words = words : null;

        this.view = new LobbyView(inviteCode, words ? "create" : "join")

        console.log(host)
        console.log(host)
        console.log(host)

        if (host.isHost)
            this.addPlayerToLobby(host)

        this.addSocketListeners(this.inviteCode)
    }

    addPlayerToLobby(player: player) {
        this.view.appendPlayer(player)
    }

    addSocketListeners(inviteCode: string) {
        console.log(inviteCode + "-player-joined added")

        ClientController.socket.on(`${inviteCode}-join-success`, (lobbyObject: any) => {

            this.lobbyInfo = lobbyObject
            this.words = lobbyObject.words
            this.inviteCode = lobbyObject.id

            var players = lobbyObject.players

            for (let player = 0; player <= players.length - 1; player++) {
                this.addPlayerToLobby(players[player])
            }
        })

        ClientController.socket.on(`${inviteCode}-player-joined`, (lobbyObject: any) => {
            console.log("Novo jogador entrou na sala:", lobbyObject)
            this.lobbyInfo = lobbyObject
            this.addPlayerToLobby(lobbyObject.players[lobbyObject.players.length - 1])
        })
    }


}

export default LobbyController