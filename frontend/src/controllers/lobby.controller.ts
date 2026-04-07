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

        this.view = new LobbyView(inviteCode, words ? "create" : "join" )

        console.log(host)
        console.log(host)
        console.log(host)
        this.addPlayerToLobby(host)

        this.addSocketListeners(this.inviteCode)
    }

    addPlayerToLobby(player: player) {
        this.view.appendPlayer(player)
    }

    addSocketListeners(inviteCode: string) {
        console.log(inviteCode + "-player-joined added")

        ClientController.socket.on(`${inviteCode}-player-joined`, (user: player) => {
            console.log("Socorro!!!!!!!!!!!!!!!")
            this.addPlayerToLobby(user)
        })
    }


}

export default LobbyController