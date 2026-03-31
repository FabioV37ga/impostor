import u from "umbrellajs"

export interface authElements {
    nicknameInput: HTMLElement
    characterInputs: HTMLElement[]
    confirmButton: HTMLElement
}

export function getElements(): authElements {

    const nicknameInput = u("#nickname_input").first() as HTMLElement
    const characterInputs = u(".character").nodes as HTMLElement[]
    const confirmButton = u("#confirm_auth").first() as HTMLElement
    

    return {
        nicknameInput,
        characterInputs,
        confirmButton
    }
}