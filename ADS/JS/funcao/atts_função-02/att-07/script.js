//7.	Números palíndromos são aqueles que escritos da direita para a esquerda têm o mesmo valor quando escritos da esquerda para a direita. Exemplo: 545; 97379; 123454321; etc. Escreva uma função que, recebendo como parâmetro um número inteiro, retorne este número escrito ao contrário. A seguir, implementar uma estrutura modular que determine e escreva, usando a função implementada, todos os números palíndromos entre 1000 e 10000.

let numero = Number(prompt('digite um numero'));

inverter(numero);

function inverter(num){
    let inverso = num.toString().split('').reverse().join('');
    return inverso
}



