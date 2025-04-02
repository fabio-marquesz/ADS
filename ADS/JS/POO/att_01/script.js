const prompt  = require('prompt-sync')();

// Class = Modelo de atributos e funções para a criação de um objeto
class Cliente {
    nome; // Atributo 
    idade;
    cpf;
    agencia;
}

// Objeto = possui as informações da de forma individual
let cliente = new Cliente(); 

cliente.nome = prompt("Digite o nome do cliente: ");
cliente.idade = 24;
cliente.cpf =  "999.999.999-01";
cliente.agencia = 101010;

console.log(cliente);