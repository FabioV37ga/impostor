import { getElements, clientElements } from "../selectors/client.selector.js"

class ClientView {
    elements: clientElements

    constructor() {
        this.elements = getElements()
    }

    // Passar elementos vindos do controller, vindos do selector no constructor?
    toggleLoadingScreen(show: boolean) {
        // Isso aqui não ta seguindo o padrão de selector → método
        var loadingScreen = document.querySelector(".loading-screen") as HTMLElement
        if (show) {
            loadingScreen.style.display = "flex"
        } else {
            loadingScreen.style.display = "none"
        }
    }

    showLogo() {
        this.elements.logo.style.display = "initial"
        this.elements.logo.classList.add("loaded")
    }
}

export default ClientView