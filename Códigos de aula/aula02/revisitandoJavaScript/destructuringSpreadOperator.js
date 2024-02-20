//Destructuring + // Spread Operator 
const data = {
    firstName: "Leonardo",
    lastName: "Bragatti",
    age: 18,
  };

const myArray = [1, 2, 3];
const secondArray = [...myArray, 1];

const { firstName, ...result } = data;
const [firstItem, ...rest] = myArray;
console.log(
    `Meu nome é ${firstName} e o resto do objeto é ${JSON.stringify(result)}`
  );
  console.log(rest);



