var form = document.getElementById('submit')
var nome = document.getElementById('nome')
var sobrenome = document.getElementById('sobrenome')
var email = document.getElementById('email')
var senha = document.getElementById('senha')
    // 


/*
* @desc Add Event Listener On Submit Button
* */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validaDados();
});

/*
* @desc Set Error Class On Inputs When User Has Entered Wrong Data
* */
function encontraErro (input, message) {
    var formControl = input.parentElement;

    var span = formControl.querySelector('span');

    span.innerText = message;

    formControl.className = 'erro ao preenhcer formulário'
}

/*
* @desc Set Success Class On Inputs When User Has Entered Correct Data
* */
function naoEncontraErro(input) {
    var formControl = input.parentElement;

    formControl.className = 'formulário preenchido com sucesso';
}

/*
* @desc Check Inputs Value Prevent Submitting Empty Data
* */
function validaDados() {

    var nomeValue = nome.value.trim();
    var sobrenomeValue = sobrenome.value.trim();
    var emailValue = email.value.trim();
    var senhaValue = senha.value.trim();

    //First Name Validation
    if (nomeValue === '') {

        encontraErro (nome, 'Nome não pode estar em branco');
    } else {

        naoEncontraErro(nome);
    }

    //Last Name Validation
    if (sobrenomeValue === '') {

        encontraErro (sobrenome, 'Sobrenome não pode estar em branco');
    } else {

        naoEncontraErro(sobrenome);
    }

    //Email validation
    if (emailValue === '') {

        encontraErro (email, 'Email não pode estar em branco');

    } else if (!validaEmail(emailValue)) {

        encontraErro (email, 'Não é um email válido');

    } else {
        naoEncontraErro(email);
    }

    //Password Validation
    if (senhaValue === '') {

        encontraErro (senha, 'Senha não pode estar em branco');
    } else {

        naoEncontraErro(senha);
    }
}

/*
* @desc Check Email Value By Regex
* */
function validaEmail(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
}