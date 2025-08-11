function adicionarAmigo() { 
    const amigo = document.getElementById("amigo").value;
    const lista = document.getElementById("listaAmigos");
    const item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {   
    const amigos = document.querySelectorAll("#listaAmigos li");
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = "O amigo secreto é: " + amigoSecreto.textContent;
}