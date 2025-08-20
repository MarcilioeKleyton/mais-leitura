const readFile = require("node:readline");
const { promiseHooks } = require("node:v8");
const terminal = readFile.createInterface({
    input: process. stdin,
    output: process.stdout,
});

// terminal.question("Qual seu nome: \n", function (valor) {
//     console.log("seja bem vindo "+ valor);
//     terminal.close();
// });

function question(pergunta) {
 const promise =Promise(function (resolve, reject) {
    terminal.question(pergunta, function (valor) {
        resolve(valor)
    });
  });
  return promise;
}
question("Qual seu nome? \ n"
    .then(function (nome){ 
        console.log("nome:" + nome);
    })
    .catch(function(erro){
        console.log("deu erro"+erro);
    })
.finally(function () {
    terminal.close();
});
