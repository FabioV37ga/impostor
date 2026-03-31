import u from "umbrellajs";
import { getElements, authElements } from "../selectors/auth.selector.js";

interface user {
    nickname: string
    character: string
    id: string
}

class AuthController {
    static user: user
    elements: authElements
    id: string
    userData: user
    windowState: "shown" | "hidden"

    constructor(userID: string, isFirstAccess: boolean) {
        // todo: adicionar cache para evitar que o usuário tenha que preencher os dados toda vez que entrar na página de autenticação
        // cache here
        var localStorageCache = localStorage.getItem("impostor_player_data")
        var cache: user | null = localStorageCache ? JSON.parse(localStorageCache) : null
        // if (cache){}


        this.userData = {
            nickname: cache ? cache.nickname : "",
            character: cache ? cache.character : "",
            id: userID
        }

        console.log(this.userData)
        AuthController.user = this.userData

        // se houver dados salvos no cache, preencher o formulário automaticamente
        // Quando o usuário entra na página pela primeira vez, verifica cache, se houver, esconde tela de auth.
        // Se o usuário voltar à pagina de auth para editar seus dados, o cache carrega pra preencher o nickname e char

        if (isFirstAccess == true) {
            // cache ? this.view.renderCacheData() : null
            if (cache) {
                if (cache.nickname && cache.character) {
                    console.log("cache encontrado no primeiro acesso, pulando tela de autenticação")
                    this.windowState = "hidden"
                }
            } else {
                console.log("nenhum cache encontrado no primeiro acesso, mostrando tela de autenticação")
                this.initialize()
            }
        } else {
            console.log("não é o primeiro acesso, mostrando tela de autenticação com dados preenchidos")
            this.initialize()

        }
    }

    initialize() {
        this.windowState = "shown"
        this.elements = getElements()
        this.addEventListeners()
    }


    addEventListeners() {
        console.log("created!")
        u(this.elements.nicknameInput).on("input", (event) => {

            const target = event.target as HTMLInputElement
            this.setNickname(target.value)
        })
    }

    setNickname(nickname: string) {
        this.userData.nickname = nickname
        AuthController.user = this.userData
        console.log("nickname atualizado:", nickname)
    }

    setCharacter(character: string) {
        this.userData.character = character
        AuthController.user = this.userData
    }

    returnState() {
        return this.windowState;
    }
    // input()
}

export default AuthController