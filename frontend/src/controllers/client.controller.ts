import HomeController from "./home.controller.js";
import { Socket, io } from "socket.io-client";

class ClientController {
    static socket: Socket
    static createLobbyDelay: Boolean = false;

    static connect() {

        // todo: tela de carregamento
        // this.view.toggleLoadingScreen("show")


        const url = window.location.href

        switch (true) {

            case url.includes("localhost"):
                ClientController.socket = io("http://localhost:3001");
                break;

            case url.includes("192.168.15.1"):
                ClientController.socket = io("http://192.168.15.2:3001");
                break;

            case url.includes("192.168.15.2"):
                ClientController.socket = io("http://192.168.15.2:3001");
                break;
        }

        ClientController.socket.on("connect_error", () => {
            var loadingscreen = document.querySelector(".loading-screen") as HTMLElement
            loadingscreen.style.display = "flex"
        })

        ClientController.socket.once("connect", () => {
            console.log("--- jogador conectado:", ClientController.socket.id)

            const home = new HomeController
        });

        ClientController.socket.on("connect", () => {
            // this.view.toggleLoadingScreen("hide")

            var loadingscreen = document.querySelector(".loading-screen") as HTMLElement
            loadingscreen.style.display = "none"
        });
    }

    static async createLobby(): Promise<string | "error"> {

        // todo?: adicionar parâmetros?
        if (ClientController.createLobbyDelay == true) {
            console.log("--- CREATE-LOBBY-REQUEST recusado: onCooldown")
            return new Promise((resolve) => {
                resolve("error")
            })
        }

        else {
            ClientController.createLobbyDelay = true;

            return new Promise((resolve) => {
                ClientController.socket.emit("create-lobby", (inviteCode: string) => {

                    setTimeout(() => {
                        ClientController.createLobbyDelay = false;
                    }, 3000);

                    resolve(inviteCode as string)
                })
            })
        }
    }
}

export default ClientController