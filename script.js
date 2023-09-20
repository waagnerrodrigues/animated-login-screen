function trocarImagemNome() {
    var imagem = document.getElementById("imagem");
    var campoNome = document.querySelector('input[type="text"]');
    if (campoNome.value === "") {
                imagem.src = "ursoolhoaberto.png";
    } else {
                imagem.src = "ursoolhoaberto.png"; 
    }
 }

function trocarImagemSenha() {
    var imagem = document.getElementById("imagem");
    var campoSenha = document.querySelector('input[type="password"]');
    if (campoSenha.type === "password") {
        campoSenha.type = "password"; 
        imagem.src = "ursoolhofechado.png"; 
    } else {
        campoSenha.type = "password"; 
        imagem.src = "ursoolhoaberto.png"; 
    }
}

function restaurarImagem() {
    var imagem = document.getElementById("imagem");
    var campoSenha = document.querySelector('input[type="password"]');
    if (campoSenha.type === "text") {
        campoSenha.type = "password"; 
        imagem.src = "ursoolhoaberto.png"; 
    }
}