var tipoTarefa = document.querySelector('#tipo');
var camposTarefa = document.querySelector('#campos-tarefa');
var cadastrarTarefa = document.querySelector('#cadastrar-tarefa');

tipoTarefa.addEventListener('click', function(event){
    // Remove a classe invisivel apos clicar no tipo de tarefa
    camposTarefa.classList.remove('invisivel');
    
    // insere no campo item tarefa o tipo de tarefa 
    var itemTarefa = document.querySelector('#item-tarefa');
    itemTarefa.textContent = event.target.textContent;

    // Remove qualquer classe diferente de row nos campos tarefa, para que o backgroud sempre pegue a cor  da tarefa 
    camposTarefa.classList.forEach(function(classe){
        if (classe != 'row') {            
            camposTarefa.classList.remove(classe);
        }
    });
    // adciona a cor de acordo com o tipo de tarefa
    camposTarefa.classList.add(event.target.classList[2]);
});

cadastrarTarefa.addEventListener('click', function (event){
    event.preventDefault();

    var validaCampos = document.querySelector('#valida-campos');
    validaCampos.innerHTML = '';

    var campos = { 
                'assunto':  document.querySelector('#assunto').value,
                'texto': document.querySelector('#texto-tarefa').value,
                'dataInicial': document.querySelector('#data-inicial').value,
                'dataFinal': document.querySelector('#data-final').value
            }
    var dataInicial = document.querySelector('#data-inicial').value;
    var dataFinal = document.querySelector('#data-final').value;

    var erros = validarCampos(campos);
    montaListaErros(erros, validaCampos);

    var errosData = validarData(dataInicial, dataFinal);
    montaListaErros(errosData, validaCampos);


    if (erros.length == 0 && errosData.length == 0) {
        exibirTarefasCadastradas(campos);
        var formulario = document.querySelector('#formulario');
        formulario.reset();
    }
});

function montaListaErros(erros, campos) {
    var ul = document.createElement('ul');

    erros.forEach(function (erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
    campos.appendChild(ul);
}

function validarData(dataInicial, dataFinal) {
    var erro = [];
    if (dataInicial > dataFinal) {
        erro.push('Data inicial não pode ser maior que data final');
    }
    return erro;
}

// Verifica se os Campos estão vazios
function validarCampos(campos){
    var erros = [];
    if (campos['texto'] == '') {
        erros.push('O campo descrição tarefa não pode ser vazio');
    }
    if (campos['assunto'] == '') {
        erros.push('O campo assunto não pode ser vazio');
    }
    if (campos['dataInicial'] == '') {
        erros.push('O campo dta inicial não pode ser vazio');
    }
    if (campos['dataFinal'] == '') {
        erros.push('O campo data final não pode ser vazio');
    }

    return erros;
}


