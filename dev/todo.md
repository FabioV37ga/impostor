# Primary

1. Desenvolver create room
2. Desenvolver join room

todo:
    →   Fazer loop de 'Auth → Home → Auth' (identificar, redirecionar para home, voltar para tela de 
        identificação se usuário quiser trocar algo) - controlado pelo clientController








# Structure

2. Mover preload de assets para utils/

<!-- estrutura de usuário salvo no cache -->

var b = '{"nickname": "veiga","character": "2","id": "10"}'

localStorage.setItem("impostor_player_data", b)
localStorage.getItem("impostor_player_data")
localStorage.removeItem("impostor_player_data")