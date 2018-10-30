function Validar(form, erroForm) {
    var formInput = form[0];
    var element;
    var erro = false;
    for (i = 0; i <= formInput.length; i++) {

        // telefone
        if (formInput[i].getAttribute('name') == 'telefone') {
            element = formInput[i];
            valor = element.value;
            valor = valor.replace(/[^\d]/g, '');
            if (valor.length < 10) {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "Insira um telefone válido";
                erro = true;
            } else {
                element.classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }

        if (formInput[i].getAttribute('name') == 'senha') {
            element = formInput[i];
            if (element.value.length < 8) {
                element.classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "A senha deve ter pelo menos 8 caracteres";
                erro = true;
            } else if (element.value != formInput[i + 1].value) {
                element.classList.add('is-invalid');
                formInput[i + 1].classList.add('is-invalid');
                erroForm[i - 1]["innerText"] = "As senhas não conferem";
                erro = true;
            } else {
                console.log('teste4');
                element.classList.remove('is-invalid');
                formInput[i + 1].classList.remove('is-invalid');
                erroForm[i - 1]["innerText"] = "";
            }
        }

        if (erro) {
            return false;
        }
    }
};

function ValidarPercentual(percentualTeorico, percentualPratico) {
    var resultado = parseInt(percentualTeorico.value) + parseInt(percentualPratico.value);
    if (resultado != 100) {
        $('.erroPercentual')[0].classList.add('is-invalid');
        $('.erroPercentual')[0]["innerText"] = "Os valores devem somar 100";
        return false;
    }
}

$(".formProfessor").submit(function(e) {
    Validar($(".formProfessor"), $(".formProfessor .formErro"));
    e.preventDefault();
    
});

$(".formAluno").submit(function(e) {
    Validar($(".formAluno"), $(".formAluno .formErro"));
    e.preventDefault();
    
});

$('.formDisciplina').submit(function(e) {
    ValidarPercentual($('.percentualTeoricoDisciplina')[0], $('.percentualPraticoDisciplina')[0]);
    e.preventDefault();
})



function main() {
        
}

$(document).ready(main());