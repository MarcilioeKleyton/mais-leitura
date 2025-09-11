const fs= require("node:fs");
 
function promessa = new promise (function(resolve,reject){
    fs.readFile(arquivo,function(err,reposta){
        if(err){
            reject(err)
            return
        }
        resolve(resposta.toString())
    })
  }) 
  return promessa;

  
  fs.readFile("./arq1.txt")
  .then(function(valor){
console.log("10")
  }).catch(function(error){
console.log("deu error")
  }).ffinally(function({
console.log("sem error")
  }))