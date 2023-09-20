function trocarImagemNome() {
    let imagem = document.getElementById("imagem");
    let campoNome = document.querySelector('input[type="text"]');
    if (campoNome.value === "") {
                imagem.src = "imagens/ursoolhoaberto.png";
    } else {
                imagem.src = "imagens/ursoolhoaberto.png"; 
    }
 }

function trocarImagemSenha() {
    let imagem = document.getElementById("imagem");
    let campoSenha = document.querySelector('input[type="password"]');
    if (campoSenha.type === "password") {
        campoSenha.type = "password"; 
        imagem.src = "imagens/ursoolhofechado.png"; 
    } else {
        campoSenha.type = "password"; 
        imagem.src = "imagens/ursoolhoaberto.png"; 
    }
}

function restaurarImagem() {
    let imagem = document.getElementById("imagem");
    let campoSenha = document.querySelector('input[type="password"]');
    if (campoSenha.type === "text") {
        campoSenha.type = "password"; 
        imagem.src = "imagens/ursoolhoaberto.png"; 
    }
}