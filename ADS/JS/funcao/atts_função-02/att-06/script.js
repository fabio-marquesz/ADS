// 6.	Número perfeito é aquele cuja soma de seus divisores, exceto ele próprio, é igual ao número. Exemplo: 6 é perfeito porque 1 + 2 + 3 = 6. Desenvolva uma estrutura modular que imprima os números perfeitos compreendidos entre 1 e 500.

// Função para calcular a soma dos divisores de um número
function somaDivisores(num) {
    let soma = 0;
    for (let i = 1; i <= num / 2; i++) { // Verificar até a metade do número
        if (num % i === 0) { // Se i for divisor de num
            soma += i;
        }
    }
    return soma;
}

// Função para verificar se um número é perfeito
function isPerfect(num) {
    return somaDivisores(num) === num; // Se a soma dos divisores for igual ao número, é perfeito
}

// Função para imprimir os números perfeitos entre 1 e 500
function printPerfectNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPerfect(i)) {
            console.log(i); // Imprime o número perfeito
        }
    }
}

// Chama a função para imprimir os números perfeitos entre 1 e 500
printPerfectNumbers(1, 500);
