// Orientação ao Objeto

const criarNovaPessoa = (nome) => {
  const obj = {};
  obj.nome = nome;
  obj.saudacao = () => {
    console.log(`Olá, ${nome}`);
  };
  return obj;
};

const pessoa = criarNovaPessoa("Leonardo");
// pessoa.saudacao();

function Pessoa(nome) {
  this.nome = nome;
  this.saudacao = () => {
    console.log(`Olá, ${this.nome}`);
  };
}

const pessoa2 = new Pessoa("Leonardo");
pessoa2.saudacao();

const pessoa3 = {
  nome: "Leonardo",
  saudacao: () => {},
};

class Humano {
  constructor(nome) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }

  set nome(value) {
    this._nome = value;
  }

  static qualClasseSou() {
    console.log("Sou a classe humano");
  }
}

class Aluno extends Humano {
  constructor(nome, nota) {
    super(nome);
    this.nota = nota;
  }
}

const gabrielle = new Aluno("Gabrielle", 10);
console.log(`Nome: ${gabrielle.nome}\nNota: ${gabrielle.nota}`);
Aluno.qualClasseSou();
