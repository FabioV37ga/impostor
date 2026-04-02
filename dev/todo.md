# Primary

2. Desenvolver join room


todo:
    - Adicionar efeitos visuais de erro de autenticação (dados insuficientes).
    - Adicionar efeitos visuais de erro de criação de sala (dados insuficientes).



# Structure

<!-- estrutura de usuário salvo no cache -->

var b = '{"nickname": "veiga","character": "2","id": "10"}'

localStorage.setItem("impostor_player_data", b)
localStorage.getItem("impostor_player_data")
localStorage.removeItem("impostor_player_data")




# Notes

→ Jogador lança evento ao servidor

  <!-- 
document.querySelector("body")?.addEventListener("keydown", (event) => {
     if (event.code === "Space") {
         console.log("spacebar!")
         ClientController.socket.emit(`${ClientController.temp}-spacebar`, ClientController.socket.id, () => {

         })
     }
 })
 -->
 

→ Servidor recebe o evento e manda de volta ao jogador
<!--
if (/^.+-spacebar/.test(event)) {
    console.log("evento de spacebar recebido:", event, args)
    socket.emit("spacebar-received", event, args)

} 
-->


→ Cliente dos jogadores atualiza com evento
<!-- 
 ClientController.socket.on("spacebar-received", (event, args) => {
     console.log("spacebar recebido de volta:", event, args)
 }) 
 -->