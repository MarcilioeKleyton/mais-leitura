// @ts-check

const calculadora = require("../models/calculadra")


test("Criando primeiro teste", function(){
    console.log("oie");
})
test ("Soma de 2 + 2 deve retornar 4", function(){
const resultado = calculadora.soma(2,2)
expect(resultado).toBe(4)
})
test("soma de 2 + 4")