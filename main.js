const numeroSenha = document.querySelector('.parametro-senha-texto')
const botoes = document.querySelectorAll('parametro-senha-botao')

botoes[0].onclick = diminuirTamanho

function diminuirTamanho() {
    console.log('teste');
}
numeroSenha.textContent = 6