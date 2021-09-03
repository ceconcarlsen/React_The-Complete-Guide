/*
Spread: Usado para desconstruir array ou objetos 
EX:
    const newArray = [...oldArray, 1,2];
*/
const numbers = [1,2,3,4,5];
const newNumbers = [...numbers,6,7];
console.log(newNumbers);

const person = {
    name: "Gabriel"
};

const newPerson = {
    ...person,
    age: 22
}
console.log(newPerson);

/*
Rest: Usado para juntar uma lista de uma função em um array
EX:
    funcion sortArgs(...args){
        return args.sort()
    }
*/
const filter = (...args) =>{
    return args.filter(el  => el === 1 );
}
console.log(filter(1,2,3));