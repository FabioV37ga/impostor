import { getElements, homeElements } from "../selectors/home.selector.js"
import u from "umbrellajs"
import ClientController from "./client.controller.js"
import home from "../templates/home.template.js"

class HomeController {
    static elements: homeElements

    constructor() {
        this.render()
        HomeController.elements = getElements()
        this.addClickEvents()
    }


    render() {
        var content = u(".content").first() as HTMLElement
        
        content.append(home)
    }

    addClickEvents() {

        u(HomeController.elements.createLobby).on("click", async () => {
            console.log("[click event] - criar lobby (botão)")
            var status = await ClientController.createLobby()

            if (status == "error") {
                console.log("[click event] - XXXXX")

            } else {
                console.log("[click event] -- processo de criação do Lobby completo.")
            }
        })
    }
}

export default HomeController