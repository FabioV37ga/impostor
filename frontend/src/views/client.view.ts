class ClientView {
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
}

export default ClientView