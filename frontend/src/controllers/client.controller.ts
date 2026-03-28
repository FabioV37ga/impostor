import HomeController from "./home.controller.js";
import { Socket, io } from "socket.io-client";
import { getElements, homeElements } from "../selectors/home.selector.js"

class ClientController {
    static socket: Socket
    static createLobbyDelay: Boolean = false;
    static areAssetsLoaded: Boolean = false;

    static async preloadAssets() {
        const assets = [
            "/background.png",
            "/logo.png"
        ]

        await Promise.all(
            assets.map(src => {
                return new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    img.src = src;

                    img.onload = () => {
                        resolve()
                        ClientController.areAssetsLoaded = true
                        HomeController.elements.logo.style.display="initial"
                        HomeController.elements.logo.classList.add("loaded")

                        console.log("Asset carregado.")
                    };
                    img.onerror = () => reject(`Erro ao carregar: ${src}`);
                });
            })
        );
    }

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

            case url.includes("onrender.com"):
                ClientController.socket = io("https://impostor-game-k9kg.onrender.com/");
                break;
        }

        ClientController.socket.on("connect_error", () => {
            // this.view.toggleLoadingScreen("show")
            console.log("Conexão ao socket não estabelecida, tentando conexão...")
            var loadingscreen = document.querySelector(".loading-screen") as HTMLElement
            loadingscreen.style.display = "flex"
        })

        ClientController.socket.once("connect", () => {
            console.log("--- jogador conectado:", ClientController.socket.id)


            const home = new HomeController
        });

        ClientController.socket.on("connect", async () => {

            // this.view.toggleLoadingScreen("hide")

            await ClientController.preloadAssets()
            setTimeout(() => {

                if (ClientController.areAssetsLoaded == false) {
                    console.log("carregando assets...")
                } else {
                    var loadingscreen = document.querySelector(".loading-screen") as HTMLElement
                    loadingscreen.style.display = "none"
                }
            }, 2000);

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