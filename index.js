const conteudoDiv = document.getElementById("conteudo");

const botaoProcessador = document.getElementById("processador");
const botaoTerminal = document.getElementById("terminal");
const botaoEditor = document.getElementById("editor");

botaoProcessador.addEventListener("click", function() {
  conteudoDiv.innerHTML = "<h1>Processador</h1><p>Você escolheu o simulador do processador!</p>";
});

botaoTerminal.addEventListener("click", function() {
  conteudoDiv.innerHTML = "<h1>Terminal</h1><p>Você escolheu o terminal de comandos!</p>";
});

botaoEditor.addEventListener("click", function() {
  conteudoDiv.innerHTML = "<h1>Editor</h1><p>Você escolheu o editor de hexadecimal!</p>";
});
