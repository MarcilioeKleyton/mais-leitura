
const fs = require("node:fs")

fs.readFile("./arq1.txt", function (error, resposta) {
  if(error){
    console.log("erroo ao ler o primeiro arquivo")
    return

  }
  fs.readFile("./arq2.txt", function (error2, resposta2){
    if(error2){
      console.log("consegui ler o primeiro arquivo, mas o segundo deu error")
      return

    }
    fs.readFile("./arq3.txt",function (error3,resposta3 ){
      if(error3){
        console.log("error ao ler o terceiro arquivo")
        return

      }

      console.log(`${resposta}${resposta2}${resposta3}`);
    });
  });
})

console.log("FIM")