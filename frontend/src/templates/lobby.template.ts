import html from "nanohtml"

export function lobbyScreen() {
    return html`
        <section class="lobby">
            <div class="lobby-title">
                <span class="horizontal-bar"></span>
                <p class="lobby-title-p">
                    Sala: <span id="lobby-title-inviteCode">aj2o3p</span>
                </p>
                <span class="horizontal-bar"></span>
            </div>
            <div class="lobby-waiting">
                Aguardando jogadores...
            </div>
            <ul class="lobby-playerList">
                
            </ul>
            <p class="wait-playerCount">
                Esperando 1/6 jogadores...
            </p>
            <button id="host-startGame">
                Iniciar partida
            </button>
        </section>
    
    `
}

export function lobbyPlayer(char: string, nickname: string, isHost: boolean) {
    return html`
    <li class="lobby-player">
        <img src="./${char}.png" alt="">
        <p class="player-nickname">
            ${nickname}
        </p>
        ${isHost ?
            `<div class="player-hostMark">
            host
        </div>`
            : null}
    </li>
    `
}