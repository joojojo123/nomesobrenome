document.getElementById("submitBtn").addEventListener("click", function() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var ano = document.getElementById("ano").value;
    idade = 2024-ano;
    var situacao;

    if (idade<18) {
        situacao = "criança"
        
    } else if (idade>18 && idade<70) {
        situacao = "adulto"
        
    } else {
        situacao = "velho"
    }

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Dados do Formulário:</h2>" +
                          "<p><strong>Nome completo:</strong> " + nome +"  "+ sobrenome+ "</p>" +
                          "<p><strong>Você é: " + situacao + "</p>"+
                          "<p><strong>idade:</strong> " +idade+ "</p>";
  });
