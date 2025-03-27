// 4- Crie uma função que recebe três números inteiro representando horas, minutos e segundos e converte esse valor para segundos.

let num1 = 0, num2 = 0, num3 = 0;

num1 = Number(prompt('Digite um nuemro representando a horas: '));
num2 = Number(prompt('Digite um nuemro representando os minutos: '));
num3 = Number(prompt('Digite um nuemro representando os segundos: '));

conversor(num1);

function conversor(numero){
    let resultado = 0;
    let horas = (num1 * 3.600);
    let minutos = (num2 * 60);
    resultado = horas + minutos + num3;
    console.log('A quantidade em segundos é ' + resultado);
}