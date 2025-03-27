/*3.	Desenvolva uma estrutura modular com uma função que recebe através de parâmetro a cadeia de caracteres e retorna:
●	-1, se existir na cadeia pelo menos um caractere que não seja um caractere numérico e alfabético.
●	0, se a quantidade de caracteres numéricos da cadeia for maior ou igual a quantidade de caracteres alfabéticos.
●	1, se a quantidade de caracteres alfabéticos da cadeia for maior que quantidade de caracteres numéricos.*/

let cadeia = prompt('digite uma cedeia de caracteres: ');

analisarCadeia(cadeia);

function analisarCadeia(char){
    let numero = 0;
    let letra = 0;

    for (let i = 0; i < cadeia.length; i++){
        let char = cadeia[i];

        if (/\d/.test(char)) {
            numero++;
        }
        
        else if (/[a-zA-Z]/.test(char)) {
            letra++;
        }
     
        else {
            return -1;
        }

    }

        if (numero >= letra) {
            return 0;
        }
        
      
        return 1;
        
}