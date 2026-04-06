import JoinRoomView from "../views/joinRoom.view.js";
import { mobileNavigation } from "../utils/mobileNavigation.util.js";
import { getElements, JoinRoomElements } from "../selectors/joinRoom.selector.js";
import u from "umbrellajs"

class JoinRoomController {
    view: JoinRoomView
    callback: ()=> void
    elements: JoinRoomElements

    constructor(callback: () => void) {
        if (!mobileNavigation.isRenderingFromPopstate) {
            history.pushState({tela: "joinRoom"}, '', '')
        }

        this.view = new JoinRoomView()

        this.elements = getElements()
        this.addClickEvents()
        this.callback = callback
    }

    addClickEvents(){
        u(this.elements.close).on("click", ()=>{
            this.return()
            console.log("click on close")
        })
    }

    return(){
        this.view.remove(this.elements.window)
        this.callback()
    }
}

export default JoinRoomController