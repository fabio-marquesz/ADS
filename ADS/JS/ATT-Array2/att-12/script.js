/*12- Considere um vetor de trajetórias de 9 elementos, onde cada elemento possui o valor do próximo elemento do vetor a ser lido.                    

Índice    0   1    2    3    4    5    6    7     8     9                      
Valor        5    7    6    9     2   8    4     0     3
            
Assim, a seqüência da leitura seria 1, 5, 2, 7, 4, 9, 3, 6, 8, 0            

Faça um algoritmo que seja capaz de ler esse vetor e seguir a trajetória*/

let vetor = [5, 7, 6, 9, 2, 8, 4, 0, 3];
let trajetoria = [];
let indice = 0;

console.log('Índice inicial:' + indice);
trajetoria.push(indice);

while (indice < vetor.length) {
    console.log('Valor:' + vetor[indice]);
    indice = vetor[indice];
    
    if (indice < vetor.length) {
        console.log('Próximo índice:' + indice);
        trajetoria.push(indice);
    } else {
        console.log('Fim da trajetória');
        break;
    }
}

console.log('Trajetória completa:' + trajetoria.join(' -> '));

