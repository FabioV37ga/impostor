import html from "nanohtml"

export const auth = html`
    <section class="auth">
        <div class="name-text">
            <span class="horizontal-bar"></span>
            <p>digite seu nome</p>
            <span class="horizontal-bar"></span>
        </div>
        <input type="text" id="nickname_input" placeholder="Digite seu nome">
        <div class="char-selection">
            <div class="char-text">
                <span class="horizontal-bar"></span>
                <p>escolha seu personagem</p>
                <span class="horizontal-bar"></span>
            </div>
            <div class="chars">
                <div class="char">
                    <img src="./charMale.png" alt="">
                    <p>Masculino</p>
                </div>
                <div class="char">
                    <img src="./charFemale.png" alt="">
                    <p>Feminino</p>
                </div>
            </div>
        </div>
        <a href="#" id="confirm-auth">confirmar</a>
    </section>
`

export const charPointer = html`
    <div class="charPointer">▼</div>
`