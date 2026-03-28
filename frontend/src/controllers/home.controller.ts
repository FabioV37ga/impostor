import { getElements, homeElements } from "../selectors/home.selector.js"
import u from "umbrellajs"
import ClientController from "./client.controller.js"

class HomeController {
    static elements: homeElements

    constructor() {
        HomeController.elements = getElements()
        this.addClickEvents()
    }

    addClickEvents() {

        u(HomeController.elements.createLobby).on("click", async ()=>{
            console.log("[click event] - criar lobby (botão)")
            var status = await ClientController.createLobby()

            if (status == "error"){
                console.log("[click event] - XXXXX")

            }else{
                console.log("[click event] -- processo de criação do Lobby completo.")
            }
        })
    }
}

export default HomeController