var campoFiltro = document.querySelector('#filtro');

campoFiltro.addEventListener("input", function(){
    var input =  this.value;
    var card = document.querySelectorAll('.card');
    
    card.forEach(function(div){
        var sentensa  = div.querySelector('.assunto').textContent;
        var expressao = new RegExp(input, "i");
        if (!expressao.test(sentensa)) {
            div.classList.add('invisivel');
        } else {
            div.classList.remove('invisivel');
        }
    });    
});