import u from "umbrellajs"

export interface homeButtons {
    createLobby: HTMLElement,

}


export function getButtons(): homeButtons {

    const createLobby = u("#create-lobby-btn").first() as HTMLElement

    return {
        createLobby: createLobby
    }
}