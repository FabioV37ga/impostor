import CreateRoomView from "../views/createRoom.view.js";
import { mobileNavigation } from "../utils/mobileNavigation.util.js";
import { getElements, createRoomElements, getConfirmedWords } from "../selectors/createRoom.selector.js";
import u from "umbrellajs"
import ClientController from "./client.controller.js";

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
        u(this.elements.confirm).on("click", ()=>{
            ClientController.createLobby(this.returnConfirmedWords())
        })

        u(this.elements.close).on("click", ()=>{
            this.return()
            console.log("click on close")
        })

        u(this.elements.wordInput).on("keyup", (e: Event) => {
            const event = e as KeyboardEvent
            
            if(event.key === ','){
                this.view.setWord(this.elements.wordInput)
            }
        })
    }

    returnConfirmedWords(): string[] {
        var confirmedWordElements = getConfirmedWords()
        var confirmedWordList: string[] = []

        confirmedWordElements.forEach(element => {
            confirmedWordList.push(element.textContent.trim())
        });

        return confirmedWordList
    }

    return(){
        this.view.remove(this.elements.window)
        this.callback()
    }
}

export default CreateRoomController