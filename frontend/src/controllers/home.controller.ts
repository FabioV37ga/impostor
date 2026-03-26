import { getButtons, homeButtons } from "../selectors/home.selector.js"
import u from "umbrellajs"
import ClientController from "./client.controller.js"

class HomeController {
    buttons: homeButtons

    constructor() {
        this.buttons = getButtons()
        this.addClickEvents()
    }

    addClickEvents() {

        u(this.buttons.createLobby).on("click", ()=>{
            console.log("[click event] - criar lobby (botão)")
            ClientController.createLobby()
        })
    }
}

export default HomeController