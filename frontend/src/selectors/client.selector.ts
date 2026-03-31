import u from "umbrellajs"

export interface clientElements {
    logo: HTMLElement
}

export function getElements(): clientElements {

    const logo = u(".logo-container img").first() as HTMLElement

    return {
        logo
    }
}