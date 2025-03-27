// 3- Faça uma função, que eleve um número inteiro qualquer a uma potência. O número e a potência devem ser fornecidos pelo usuário.

let numero = 0;
let potencia = 0;

numero = parseFloat(prompt('Digite um numero: '));
potencia = Number(prompt('Digite a potencia: '));

elevaçao(numero);

function elevaçao(num){
   let resultdo = 0;
   resultdo = Math.pow(numero, potencia);
    console.log('O resultdo é ' + resultdo);
}