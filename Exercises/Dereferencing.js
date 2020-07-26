// Make a dereferenced copy of the array below. (Hint: You will need to dereference each object in the array, not just the array itself)

let myPeople = [
    {
        firstName: "Luke",
        lastName: "Parker",
        age: 23
    }, {
        firstName: "Rachel",
        lastName: "Nox",
        age: 28
    }, {
        firstName: "Douglas",
        lastName: "Adams",
        age: 42
    }
];

let lukeFromArr = myPeople.find(person => person.firstName == "Luke"); // myPeople.find needs to be in this format because the array methods/functions also need functions to work?
let luke = {
    firstName: lukeFromArr.firstName,
    lastName: lukeFromArr.lastName,
    age: lukeFromArr.age,
};
console.log(lukeFromArr); // output: { firstName: 'Luke', lastName: 'Parker', age: 23 }; this will be regardless of whether lukeFromArr or luke is logged

let rachelFromArr = myPeople.find(person => person.lastName == "Nox");
let rachel = {
    firstName: rachelFromArr.firstName,
    lastName: rachelFromArr.lastName,
    age: rachelFromArr.age,
};
console.log(rachel);

let douglasFromArr = myPeople.find(person => person.age == 42);
let douglas = {
    firstName: douglasFromArr.firstName,
    lastName: douglasFromArr.lastName,
    age: douglasFromArr.age
};
console.log(douglas);

let dereferenceArray =[...myPeople];

let dereferenceArrayAnotherWay = myPeople.map((person) => ({ ...person})); // when arrow function present put brackets around the curly braces so that the curly braces aren't considered functions, shorthand method

// dereferencing needed because both variables of the array are in memory, however they link to the same object. So when you change one object it will change both of them

// let luke = { ...myPeople[0] }: // will be a new object, so nothing will change in the myPeople array
// let luke = myPeople[0] // will be the same object, so both will change because they have the same pointer value