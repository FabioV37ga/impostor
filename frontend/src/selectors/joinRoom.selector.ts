import u from "umbrellajs"

export interface JoinRoomElements {
    window: HTMLElement,
    code: HTMLElement,
    confirm: HTMLElement,
    close: HTMLElement,
}

export function getElements(): JoinRoomElements {
    const window = u(".join-room").first() as HTMLElement
    const code = u(".join-code").first() as HTMLElement
    const confirm = u(".joinRoomBtn").first() as HTMLElement
    const close = u("#joinRoom-close").first() as HTMLElement

    return {
        window,
        code,
        confirm,
        close
    }
}