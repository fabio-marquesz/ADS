/*2- Faça um algoritmo para ler um vetor de 20 números. Após isto, deverá ser lido mais um número qualquer e verificar se esse número
existe no vetor ou não. Se existir, o algoritmo deve gerar um novo vetor sem esse número. (Considere que não haver números
repetidos no vetor)*/

let numeros = [];
let numUser = 0;

for (let i = 0; i < 20; i++){
    numeros[i] = Math.floor(Math.random() * 10) + 1;
}

console.log(numeros);

numUser = Number(prompt('Digite um numero para retirar '));

console.log(numUser);

gerador(numUser);

function gerador(num){
    let resultado = 0
    if (numeros.includes(numUser)){
        resultado = numeros.filter(function(numero) {
            return numero != numUser;
          });
        console.log('Novo array ' + resultado);
    } else {
        console.log (' O numero fornecido não foi encontrado: ');
    }
}