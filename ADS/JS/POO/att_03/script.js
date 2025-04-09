const prompt = require("prompt-sync")();

class TelefoneCelular {
  #marca;
  #modelo;
  #preco;
  #memoria;

  getDescricao() {
    return "Marca: " + this.#marca + ", Modelo: " + this.#modelo + ", Preço: " + this.#preco + ", Memória: " + this.#memoria;
  }

  getNome() {
    return this.#marca;
  }

  setNome(value) {
    this.#marca = value;
  }

  getNome() {
    return this.#modelo;
  }

  setNome(value) {
    this.#modelo = value;
  }

  getNome() {
    return this.#preco;
  }

  setNome(value) {
    this.#preco = value;
  }

  getNome() {
    return this.#memoria;
  }

  setNome(value) {
    this.#memoria = value;
  }
}

const celular = new TelefoneCelular();

cliente.setMarca(prompt("Digite o nome da marca: "));
cliente.setModelo(prompt("Digite o nome do modelo: "));
cliente.setPreco(prompt("Digite o valor: "));
cliente.setMemoria(prompt("Digite a quantidede de mémoria: "));

console.log(cliente.getDescricao());
