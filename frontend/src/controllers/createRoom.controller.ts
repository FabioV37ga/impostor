import CreateRoomView from "../views/createRoom.view.js";
import { mobileNavigation } from "../utils/mobileNavigation.util.js";
import { getElements, createRoomElements } from "../selectors/createRoom.selector.js";
import u from "umbrellajs"

class CreateRoomController {
    view: CreateRoomView
    callback: ()=> void
    elements: createRoomElements

    constructor(callback: () => void) {
        if (!mobileNavigation.isRenderingFromPopstate) {
            history.pushState({tela: "createRoom"}, '', '')
        }

        this.view = new CreateRoomView()

        this.elements = getElements()
        this.addClickEvents()
        this.callback = callback
    }

    addClickEvents(){
        u(this.elements.close).on("click", ()=>{
            this.return()
        })
    }

    return(){
        this.view.remove(this.elements.window)
        this.callback()
    }
}

export default CreateRoomController