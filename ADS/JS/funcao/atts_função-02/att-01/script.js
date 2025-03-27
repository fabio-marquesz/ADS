//1.	Desenvolva uma estrutura modular com uma função que recebe através de parâmetro uma cadeia de caracteres e retorna verdadeiro se “todos” os caracteres alfabéticos da cadeia são minúsculos e falso caso contrário.

let palavra = String(prompt('Digite letras aleatorias: '));

minusculo(palavra);

function minusculo(string){
       
    let string2 = string.toUpperCase();

    if (string == string2){
        console.log('falsso');
    } else {
        console.log('verdadeiro');
    }
}