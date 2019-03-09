function exibirTarefasCadastradas(campos){

    var cor = document.querySelector('#campos-tarefa');
    cor = cor.classList[1];

    var campoTarefa = document.querySelector('#historico-tarefas');
    campoTarefa.classList.remove('invisivel');

    cor = traduzCor(cor);   
    var div = montaMensagem(campos, cor);
    var lista = document.querySelector('#lista-tarefas');
    lista.appendChild(div);
    lista.appendChild(document.createElement("br"));
}

function montaMensagem(campos, cor) {

    var divPai = document.createElement("div");
    var divAssunto = document.createElement("div");
    var divCorpo = document.createElement("div");
    var divRodape = document.createElement("div");
    

    divPai.classList.add("card");
    divAssunto.classList.add(cor);
    divAssunto.classList.add("text-white");
    divAssunto.classList.add("card-header");
    divAssunto.classList.add("assunto");
    divCorpo.classList.add("card-body");
    divCorpo.classList.add("corpo");
    divRodape.classList.add("card-footer");

    divAssunto.textContent = campos['assunto'];
    divCorpo.textContent = campos['texto'];
    divRodape.textContent = "Data inicial: " + campos['dataInicial'] + " - Data final: " + campos['dataFinal'];
    divPai.appendChild(divAssunto);
    divPai.appendChild(divCorpo);
    divPai.appendChild(divCorpo);
    divPai.appendChild(divRodape);

    return divPai;
}

function traduzCor(cor) {
    switch (cor) {
        case 'background-vermelho':
            return 'bg-danger';
        case 'background-amarelo':
            return 'bg-warning';
        case 'background-azul':
            return 'bg-info';
    }
}


