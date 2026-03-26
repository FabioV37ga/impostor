import HomeController from "./home.controller.js";
import { Socket, io } from "socket.io-client";

class ClientController {
    static socket: Socket

    static connect() {
        // alert(".")

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


        ClientController.socket.on("connect", () => {
            console.log("--- jogador conectado:", ClientController.socket.id)

            const home = new HomeController
        });
    }

    static async createLobby() {
        // todo?: adicionar parâmetros?
        ClientController.socket.emit("create-lobby")

        ClientController.socket.on("lobby-created", () => {
            console.log("Socket - Marcador de lobby criado (frontend)")
        })
        // ↓ usar?
        // (Response: Response) => {
        // })
    }
}

export default ClientController