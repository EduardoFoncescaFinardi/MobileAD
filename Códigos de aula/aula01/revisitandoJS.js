console.log("Hello World")


//Declarando Variavel
const firsName = "Mel"; // A variavel não muda
const lastName ="Maia";
const age = 18;

let name = "Mel"; // Pode alterar no decorrer do código

var nome = "Mel"; // uma variavel global

// Interpolação de String
console.log(`Meu nome é ${firsName} e tenho ${age} anos`);

//ou (Leonardo NÃO gosta, pois você está fazendo uma operação,
//correndo o risco de dar MERDA)
console.log("Meu nome é " + firsName);


//Funções (A getFullName1 é a melhor forma, pois dessa forma, não se deixa 
// dois argumentos com o mesmo nome, nas outras deixam, fazendo com que o código
// fique com argumentos duplicados na execução)
const getFullName1 = (firsName, lastName) => {
    const fullName1 = `${firsName} ${lastName}`.trim();
    return fullName1;
};
// ou
const getFullName2 = function (firsName, lastName) {
    const FullName2 = `${firsName} ${lastName}`.trim();
    return fullName2;
};
// ou
function getFullName3 (firsName, lastName) {
    const fullName3 = `${firsName} ${lastName}`.trim();
    return fullName3;
};

//Exibindo a função
console.log(
    `Meu nome é ${getFullName1(firsName, lastName)} e tenho ${age} anos`
);

// Spread Operator 
const myArray = [1, 2, 3];
const secondArray = [4, ... myArray];
const thirdArray = [... myArray, 4];

const user = {
    firsName: "Mel",
    lastName: "Maia",
    age: 18
};

// Destructuring

const { firsName1, lastName1, age1 } = user;

console.log(
    `Meu nome é ${user.firsName} e meu sobrenome ${lastName} e tenho ${age}`
);


const updateUser = {
    ...user, 
    lastName: "Maia Rodrigues",
    email: "m.martinazzo@gmail.com",
};

console.log (
    `Usuario atualizado ${updateUser.email}
    ${updateUser.firsName} 
    ${updateUser.lastName}`
)










