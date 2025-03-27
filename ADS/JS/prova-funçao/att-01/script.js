/*1- Crie uma função que receba um valor em graus Celsius e retorne o equivalente em Fahrenheit.
F=(C×9/5)+32*/

let graus = parseFloat(prompt('Digete a temperatura em graus Celsius: '));

fahrenheit(graus);

function fahrenheit(num){
    let convertido = 0;
    convertido = (graus * 9/5) + 32
    console.log ('A temperatura em fahrenheit é ' + convertido);
}
