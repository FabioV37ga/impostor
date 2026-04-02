import u from "umbrellajs"

export interface homeElements {
    homeScreen: HTMLElement,
    createLobby: HTMLElement,
    profile: HTMLElement

}


export function getElements(): homeElements {

    const homeScreen = u(".button-area").first() as HTMLElement

    const createLobby = u("#create-lobby-btn").first() as HTMLElement

    const profile = u(".profile").first() as HTMLElement

    return {
        homeScreen: homeScreen,
        createLobby: createLobby,
        profile: profile
    }
}