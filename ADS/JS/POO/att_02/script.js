const prompt = require("prompt-sync")();

// Class = Modelo de atributos e funções para a criação de um objeto
class Cliente {

    // # -> Priva o dado
  #nome; // Atributo
  idade;
  cpf;
  agencia;


  // Retorna uma string com os dados/atributos
  getDescricao() {
    return "Nome: " + this.#nome + ", Idade: " + this.idade;
  }

  // Obtem nome
  getNome() {
    return this.#nome;
  }
  // Preenche o dado
  setNome(value) {
    this.#nome = value;
  }
}

// Objeto = possui as informações da de forma individual
let cliente = new Cliente();

// Chamando a função

cliente.setNome(prompt("Digite o nome do cliente: "));
cliente.idade = 24;
cliente.cpf = "999.999.999-01";
cliente.agencia = 101010;

console.log(cliente);
console.log(cliente.getDescricao());
