let ninjas: string[] = [];

ninjas.push('rob');

let mixed: (string|number|boolean)[] = [];


// union types, using rounded brackets before object type
mixed.push('hello');
mixed.push(20);
mixed.push(false)

console.log(mixed);

// no need to use rounded brackers or union type for non array variables
let uid: string|number;

uid = 123;
uid = '123';

let ninjaOne: object;
ninjaOne = {name: 'yoshi, age: 30'};

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};'}

ninjaTwo = {name: 'mario', age: 20, beltColour: 'black'}