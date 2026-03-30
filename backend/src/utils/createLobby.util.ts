// Função que gera o código de convite para o lobby.

function generateInviteCode(): string {
    const keys = "abcdefghijklmnopqrstuvwxyz";

    let inviteCode = '';

    for (let i = 0; i < 6; i++) {
        const randomKey = Math.floor(Math.random() * 26);
        inviteCode += keys[randomKey];
    }

    return inviteCode;
}

