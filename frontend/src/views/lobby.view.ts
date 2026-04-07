import ui from "./ui.view.js";
import { lobbyScreen, lobbyPlayer } from "../templates/lobby.template.js";

class LobbyView extends ui{
    constructor(){
        super()
        this.render(lobbyScreen())
    }
}

export default LobbyView 