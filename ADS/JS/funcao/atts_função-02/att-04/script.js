//4.	Desenvolva uma estrutura modular com uma função que recebe através de parâmetro um número inteiro positivo e retorna à quantidade de dígitos deste número.

let numero = Number(prompt('Digite um valor: '));

let quantidade = qtdNumero(numero);

console.log('Qauntidad de digitos é : ' + quantidade);

function qtdNumero(num){
    let retorno, teste
    if (num > 0){
        teste = num.toString();
        retorno = teste.length;
    } else {
        console.log('Valor Negativo')
    }
    return retorno;
}