var form = document.getElementById('submit')
var nome = document.getElementById('nome')
var sobrenome = document.getElementById('sobrenome')
var email = document.getElementById('email')
var senha = document.getElementById('senha')

form.addEventListener('submit'), (e) => {
    e.preventDefault();
    validaDados();
}

function validarDados() {

function validaNome(nome) {
if(nome == '') {
    alert('Nome não pode estar em branco')
} else {
    return nome
}
}

function validaSobrenome(sobrenome) {

    if(sobrenome == '') {
    alert('Sobrenome não pode estar em branco')
} else {
    return sobrenome
}
}

function validaEmail(email) {
if(email == '') {
    alert('email não pode estar em branco')
} if (email = /\S+@\S+\.\S+/) {
    return true
    
}else{
    return false
    alert('tente um email válido')
}
}

function validaSenha(senha) {
    if(senha == '') {
        alert('senha não pode estar em branco')
    }
    }
}
