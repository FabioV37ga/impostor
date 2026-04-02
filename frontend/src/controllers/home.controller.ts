import { getElements, homeElements } from "../selectors/home.selector.js"
import u from "umbrellajs"
import ClientController from "./client.controller.js"
import homeView from "../views/home.view.js"

class HomeController {
    static elements: homeElements
    view: homeView

    constructor(userData: {nickname: string, character: string}) {
        this.view = new homeView(userData)
        console.log("HomeController criado com os seguintes dados do usuário:", userData)
        HomeController.elements = getElements()
        this.addClickEvents()
    }

    addClickEvents() {

        u(HomeController.elements.createLobby).on("click", async () => {
            console.log("[click event] - criar lobby (botão)")
            var status = await ClientController.createLobby()

            if (status == "error") {
                console.log("[click event] - processo de criação do Lobby já em andamento, recusado.")

            }
        })

        u(HomeController.elements.profile).on("click", () => {
            console.log("[click event] - profile (botão)")

            this.view.remove(HomeController.elements.homeScreen);

            ClientController.render("auth")
        })
    }
}

export default HomeController