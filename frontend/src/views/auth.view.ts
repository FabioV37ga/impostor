import ui from "./ui.view.js";
import { authElements } from "../selectors/auth.selector.js";

class AuthView extends ui{
    elements: authElements

    constructor(elements: authElements){
        super()
        this.elements = elements
    }

    fillFormWithCache(cache: {nickname: string, character: string}){

        var nicknameInput = this.elements.nicknameInput as HTMLInputElement
        nicknameInput.value = cache.nickname

        console.log("cache character:", cache.character)
        
    }


}

export default AuthView