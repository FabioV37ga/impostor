import u from "umbrellajs"

export interface homeElements {
    logo: HTMLElement,
    createLobby: HTMLElement,
}


export function getElements(): homeElements {

    const createLobby = u("#create-lobby-btn").first() as HTMLElement
    const logo = u(".logo-container img").first() as HTMLElement

    return {
        logo: logo,
        createLobby: createLobby
    }
}