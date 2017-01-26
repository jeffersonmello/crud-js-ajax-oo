var tabela = document.querySelector("table tbody");

var template = (function(){ // seletor compilando os dados na tabela na tag script do Handlerbars
  var source = $("#template").html();
  return Handlebars.compile(source);
})();

// inicio da classe

// declarando a classe pessoa como function
var Pessoa = function(dado){
  var that = this; // declara que a variavel aquiele é isso
  this.guid = dado.guid;
  this.nome = dado.nome;
  this.telefone = dado.telefone;
  this.email = dado.email;
  this.linha = this.CreateElement();
  this.btnId = this.linha.querySelector(".btnId");
  this.btnId.addEventListener("click", function (event) {
    that.onBtnIdClick(event);
  });
}

Pessoa.prototype.CreateElement = function () {
  var linha = document.createElement("tr");
  tabela.appendChild(linha);
  linha.outerHTML = template(this);
  return tabela.lastElementChild;
}

Pessoa.prototype.onBtnIdClick = function (event) {
  alert(this.btnId.dataset.id);
}

$.ajax({
  url:  'model/Pessoa/handlerPessoa.php',
  type: 'POST',
  data: 'func=getAll',
  success: function(dados){
    $.each(dados, function(index, dado){
      var pessoa    = new Pessoa(dado);

      //pessoa.CreateElement();

    });
  }
});
