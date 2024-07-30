const numeroSenha = document.querySelector('.parametro-senha__texto')
const botoes = document.querySelectorAll('.parametro-senha__botao')

botoes[0].onclick = diminuirTamanho
botoes[1].onclick = almentarTamanho

let tamanhoSenha = 5
numeroSenha.textContent = tamanhoSenha

function diminuirTamanho() {
    if (tamanhoSenha > 1) 
        
    tamanhoSenha = tamanhoSenha - 1
    numeroSenha.textContent = tamanhoSenha
}

function almentarTamanho() {
    tamanhoSenha = tamanhoSenha + 1
    numeroSenha.textContent = tamanhoSenha
}

