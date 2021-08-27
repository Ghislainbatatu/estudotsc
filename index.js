"use strict";
function somar(a, b) {
    return a + b;
}
;
console.log(somar(7, 9));
function sub(a, b) {
    return a - b;
}
console.log(sub(9, 4));
var Identidade = /** @class */ (function () {
    function Identidade(primeiroNome, segundoNome, anos) {
        this.nome = primeiroNome;
        this.sobrenome = segundoNome;
        this.idade = anos;
    }
    return Identidade;
}());
var dados = new Identidade('Severino', 'Armando', 30);
console.log(dados.nome);
