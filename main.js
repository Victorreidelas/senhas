const numeroSenha = document.querySelector('.parametro-senha__texto')
const botoes = document.querySelectorAll('.parametro-senha__botao')
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox')

console.log(checkbox[0].Checked)

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
    geraSenha()
}

function almentarTamanho() {
    if (tamanhoSenha < 20) 
    tamanhoSenha = tamanhoSenha + 1
    numeroSenha.textContent = tamanhoSenha
    geraSenha()
}


function geraSenha(){
    let alfabeto = ""
    let senha = ""
    if(checkbox[0].Checked){
        alfabeto = alfabeto + maiuscula
    }

    if(checkbox[1].Checked){
        alfabeto = alfabeto + minuscula
    }

    if(checkbox[2].Checked){
        alfabeto = alfabeto + numero
    }

    if(checkbox[3].Checked){
        alfabeto = alfabeto + simbolos
    }


    for(let i = 0; i < tamanhoSenha; i++ ){
        let numeroAleatorio = Math.random() * alfabeto.length
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + alfabeto[numeroAleatorio];
        console.log(senha)
    }
      campoSenha.value = senha   
}

