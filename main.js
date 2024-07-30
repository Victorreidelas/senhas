const numeroSenha = document.querySelector('.parametro-senha__texto')
const botoes = document.querySelectorAll('.parametro-senha__botao')

botoes[0].onclick = diminuirTamanho
botoes[1].onclick = almentarTamanho

let tamanhoSenha = 5
numeroSenha.textContent = tamanhoSenha

let maiuscula = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
console.log(maiuscula);

function diminuirTamanho() {
    if (tamanhoSenha > 1) 
        
    tamanhoSenha = tamanhoSenha - 1
    numeroSenha.textContent = tamanhoSenha
}

function almentarTamanho() {
    if (tamanhoSenha < 20) 
    tamanhoSenha = tamanhoSenha + 1
    numeroSenha.textContent = tamanhoSenha
}

