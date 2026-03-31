import u from "umbrellajs"

export interface homeElements {
    createLobby: HTMLElement,
}


export function getElements(): homeElements {

    const createLobby = u("#create-lobby-btn").first() as HTMLElement

    return {
        createLobby: createLobby
    }
}