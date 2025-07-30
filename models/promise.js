const readFile = require("node:readilene");
const terminal = readilene.createInterface({
    input: process. stdin,
    output: process.stdout,
});

terminal.question("Qual seu nome: \n", function (valor) {
    console.log("seja bem vindo "+ valor);
});