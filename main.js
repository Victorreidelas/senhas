const numeroSenha = document.querySelector('.parametro-senha__texto')
const botoes = document.querySelectorAll('.parametro-senha__botao')
const campoSenha = document.querySelector('#campo-senha');

botoes[0].onclick = diminuirTamanho
botoes[1].onclick = almentarTamanho

let tamanhoSenha = 5
numeroSenha.textContent = tamanhoSenha

let maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let minuscula = "abcdefghijklmnopqrstuvwxyz"
let numero = "123456789"
let simbolos ="!?@%&*#-_"

geraSenha()

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


function geraSenha(){
    let senha = ""
    for(let i = 0; i < tamanhoSenha; i++ ){
        let numeroAleatorio = Math.random() * maiuscula.length
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + maiuscula[numeroAleatorio];
        console.log(senha)
    }
      campoSenha.value = senha   
}

