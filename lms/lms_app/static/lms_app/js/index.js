$("#telefoneProfessor").bind('input propertychange',function(){
    // pego o valor do telefone
    var texto = $(this).val();
    // Tiro tudo que não é numero
    texto = texto.replace(/[^\d]/g, '');
    // Se tiver alguma coisa
    if (texto.length > 0)
    {
    // Ponho o primeiro parenteses do DDD    
    texto = "(" + texto;

        if (texto.length > 3)
        {
            // Fecha o parenteses do DDD
            texto = [texto.slice(0, 3), ") ", texto.slice(3)].join('');  
        }
        if (texto.length > 12)
        {      
            // Se for 13 digitos ( DDD + 9 digitos) ponhe o traço no quinto digito            
            if (texto.length > 13) 
                texto = [texto.slice(0, 10), "-", texto.slice(10)].join('');
            else
             // Se for 12 digitos ( DDD + 8 digitos) ponhe o traço no quarto digito
                texto = [texto.slice(0, 9), "-", texto.slice(9)].join('');
        }   
            // Não adianta digitar mais digitos!
            if (texto.length > 15)                
               texto = texto.substr(0,15);
    }
    // Retorna o texto
   $(this).val(texto);     
})

$("#nascimentoProfessor").mask("99/99/9999");




function validarProfessor(form, erroForm) {
    var formInput = form[0];
    var element;
    var erro = false;
    for (i = 0; i <= formInput.length; i++) {

        // Nome
        if (formInput[i].getAttribute('name') == 'nomeProfessor') {
            element = formInput[i];
            if (element.value == "") {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira um nome";
                erro = true;
            } else {
                element.classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }

        // RM
        if (formInput[i].getAttribute('name') == 'rmProfessor') {
            element = formInput[i];
            if (element.value == "") {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira o RM";
                erro = true;
            } else {
                element.classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }
        
        // Apelido
        if (formInput[i].getAttribute('name') == 'apelidoProfessor') {
            element = formInput[i];
            if (element.value == "") {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira o apelido";
                erro = true;
            } else {
                element.classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }

        // Email
        if (formInput[i].getAttribute('name') == 'emailProfessor') {
            element = formInput[i];
            if (element.value == "") {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira o e-mail";
                erro = true;
            } else if (element.value.indexOf("@") == -1) {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira um e-mail válido";
                erro = true;
            } else {
                element.classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }

        // telefone
        if (formInput[i].getAttribute('name') == 'telefoneProfessor') {
            element = formInput[i];
            valor = element.value;
            valor = valor.replace(/[^\d]/g, '');
            if (valor == "") {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira o telefone";
                erro = true;
            } else if (valor.length < 10) {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira um telefone válido";
                erro = true;
            } else {
                element.classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }

        // Data de Nascimento
        if (formInput[i].getAttribute('name') == 'nascimentoProfessor') {
            element = formInput[i];
            valor = element.value;
            valor = valor.replace(/[^\d]/g, '');
            if (valor == "") {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira a data de nascimento";
                erro = true;
            } else if (valor.length < 8) {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira uma data válida";
                erro = true;
            } else {
                element.classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }

        // Sexo
        if (formInput[i].getAttribute('name') == 'sexoProfessor') {
            element = formInput[i];
            if (element.value == "") {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Selecione o sexo";
                erro = true;
            } else {
                element.classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }

        if (formInput[i].getAttribute('name') == 'usuarioProfessor') {
            element = formInput[i];
            if (element.value == "") {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira o nome de usuario";
                erro = true;
            } else {
                element.classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }

        if (formInput[i].getAttribute('name') == 'senhaProfessor') {
            element = formInput[i];
            if (element.value == "") {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira a senha";
                erro = true;
            } else if (element.value.length < 8) {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "A senha deve ter pelo menos 8 caracteres";
                erro = true;
            } else if (element.value != formInput[i + 1].value) {
                element.classList.add('is-invalid');
                formInput[i + 1].classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "As senhas não conferem";
                erro = true;
            } else {
                element.classList.remove('is-invalid');
                formInput[i + 1].classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }

        if (erro) {
            return false;
        }
    }
}

$(".formProfessor").submit(function(e) {
    validarProfessor($(".formProfessor"), $(".formProfessor .formErro"));
    e.preventDefault();
    
})

function main() {
        
}

$(document).ready(main());