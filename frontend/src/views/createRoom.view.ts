import ui from "./ui.view.js";
import { createRoom, confirmedWord } from "../templates/createRoom.template.js";
import { getElements, createRoomElements } from "../selectors/createRoom.selector.js";



class CreateRoomView extends ui {
    elements: createRoomElements | {}

    constructor() {
        super()
        this.render(createRoom())
        this.elements = {}
    }

    setWord(input: HTMLElement) {
        this.elements = getElements()
        var word: string;

        input.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                word = child.textContent!.trim().replace(",", "")
                if (word) {

                    this.confirmWord(word, getElements())

                    child.textContent = child.textContent!.replace(word, "").replace(",", "")

                    input.append(document.createTextNode(" "))

                    this.setCursor(input)
                }
            }
        })
    }

    confirmWord(word: string, elements: createRoomElements) {
        console.log(elements)

        elements.wordInput.append(
            confirmedWord(word)
        )

    }

    setCursor(input: HTMLElement) {
        input.focus()

        // garante que existe um TextNode no final
        if (!input.lastChild || input.lastChild.nodeType !== Node.TEXT_NODE) {
            input.appendChild(document.createTextNode(" "))
        }

        const textNode = input.lastChild as Text

        const range = document.createRange()
        const selection = window.getSelection()

        range.setStart(textNode, textNode.length)
        range.collapse(true)

        selection?.removeAllRanges()
        selection?.addRange(range)
    }
}

export default CreateRoomView