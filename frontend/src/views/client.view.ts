class ClientView {
    toggleLoadingScreen(show: boolean) {
        var loadingscreen = document.querySelector(".loading-screen") as HTMLElement
        if (show) {
            loadingscreen.style.display = "flex"
        } else {
            loadingscreen.style.display = "none"
        }
    }
}

export default ClientView