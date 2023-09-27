function swapImageName() {
    let imagem = document.getElementById("image");
    let campoNome = document.querySelector('input[type="text"]');
    if (campoNome.value === "") {
                imagem.src = "imagens/ursoolhoaberto.png";
    } else {
                imagem.src = "imagens/ursoolhoaberto.png"; 
    }
 }

function swapImagePassword() {
    let imagem = document.getElementById("image");
    let campoSenha = document.querySelector('input[type="password"]');
    if (campoSenha.type === "password") {
        campoSenha.type = "password"; 
        imagem.src = "imagens/ursoolhofechado.png"; 
    } else {
        campoSenha.type = "password"; 
        imagem.src = "imagens/ursoolhoaberto.png"; 
    }
}

function restoreImage() {
    let imagem = document.getElementById("image");
    let campoSenha = document.querySelector('input[type="password"]');
    if (campoSenha.type === "text") {
        campoSenha.type = "password"; 
        imagem.src = "imagens/ursoolhoaberto.png"; 
    }
}

function redirect() {
    let name = document.getElementById("nameInput").value;
    if (name) {
        window.location.href = "logged.html?name=" + encodeURIComponent(name);
    } else {
        alert("Please enter your name before proceeding.");
    }
}