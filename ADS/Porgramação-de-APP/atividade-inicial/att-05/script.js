let num1 = 0, num2 = 0, num3 = 0, maior = 0;

num1 = Number(prompt('Digite o primeiro numero: '));
num2 = Number(prompt('Digite o segundo numero: '));
num3 = Number(prompt('Digite o terceiro numero: '));

if (num1 > num2 && num1 > num3){
    maior += num1;
} else if (num2 > num1 && num2 > num3){
    maior += num2;
} else {
    maior +=num3;
}

console.log('O maior numero é: ' + maior)
