import LobbyView from "../views/lobby.view.js"

class LobbyController{
    view: LobbyView

    constructor(){
        this.view = new LobbyView()
    }
}

export default LobbyController