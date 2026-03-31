import html from "nanohtml"

const home = html`
    <section class="button-area">
        <div class="button-area-text">
            <span class="horizontal-bar"></span>
            <p>multiplayer</p>
            <span class="horizontal-bar"></span>
        </div>
        <div class="buttons">
            <button id="join-lobby-btn">Entrar em sala</button>
            <button id="create-lobby-btn">criar uma sala</button>
        </div>
    </section>
`

export default home