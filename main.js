const numeroSenha = document.querySelector('.parametro-senha__texto')
const botoes = document.querySelectorAll('.parametro-senha__botao')

botoes[0].onclick = diminuirTamanho

let tamanhoSenha = 5

function diminuirTamanho() {
    console.log('teste');
}
numeroSenha.textContent = tamanhoSenha