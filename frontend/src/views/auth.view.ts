import u from "umbrellajs";
import ui from "./ui.view.js";
import { authElements } from "../selectors/auth.selector.js";
import { charPointer } from "../templates/auth.template.js";

class AuthView extends ui{
    elements: authElements

    constructor(elements: authElements){
        super()
        this.elements = elements
    }


    fillFormWithCache(cache: {nickname: string, character: string}){

        var nicknameInput = this.elements.nicknameInput as HTMLInputElement
        nicknameInput.value = cache.nickname

        this.selectCharacter(cache.character)
        
    }

    selectCharacter(character: string){
        var pointer = u(`.charPointer`).first() as HTMLElement

        pointer.remove()
        
        var selectedCharacter = u(`.${character}`).first() as HTMLElement

        selectedCharacter.append(charPointer)

        var charImages = u(".charSelected").nodes as HTMLImageElement[]

        charImages.forEach((img) => {
            img.classList.remove("charSelected")
        })

        var selectedImage = u(selectedCharacter).find("img").first() as HTMLImageElement

        selectedImage.classList.add("charSelected")
    }

}

export default AuthView