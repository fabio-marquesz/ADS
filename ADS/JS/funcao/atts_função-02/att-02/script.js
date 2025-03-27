// 2.	Desenvolva uma função que recebe através de parâmetros, duas cadeias de caracteres e retorna verdadeiro se as cadeias são iguais e falso caso contrário. Obs. fazer comparações “caractere por caractere” até definir o valor de retorno.

let str1 = prompt('Digite uma palavra:');
let str2 = prompt('Digite outra palavra:');

// Função que compara duas cadeias de caracteres "caractere por caractere"
function compararStrings(str1, str2) {
    // Se as strings não tiverem o mesmo comprimento, são diferentes
    if (str1.length !== str2.length) {
        return false;
    }

    // Comparar caractere por caractere
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false; // Se algum caractere for diferente, retorna false
        }
    }

    return true; // Se todos os caracteres forem iguais, retorna true
}



