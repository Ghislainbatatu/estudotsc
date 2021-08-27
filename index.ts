function somar(a: number ,b: number){
    return a+b
};

console.log(somar(7,9))

function sub(a: number, b:number){
    return a-b;
}
console.log(sub(9,4))

interface Pessoa{
    nome: string,
    sobrenome: string,
    idade: number
}

class Identidade implements Pessoa {
    nome; 
    sobrenome; 
    idade;

    constructor( primeiroNome: string, segundoNome: string, anos: number){
        this.nome=primeiroNome;
        this.sobrenome=segundoNome;
        this.idade=anos;

    }
}
var dados = new Identidade('Severino','Armando', 30);

console.log(dados.nome)