// I Push sens Push 

let fruits = ['Apple','Orange','Banana']

fruits = [...fruits,'Mango']
console.log(fruits);

// Unshift sans Unshift II 

fruits = ['berry', ...fruits]
console.log(fruits);

// Array Concatenation 

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

let array = [`${arr1},${arr2}`]
console.log(array);

// Object III 

const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
}

const bobby = {...user,firstName:'Bobby'}
console.log(bobby);

console.log('');
console.log('');

// Foreach IV

const numbers = [1, 2, 3, 4, 5, 6]

let newNumber = numbers.forEach( e => {
console.log(e)
;})

console.log('');
console.log('');


// Filter V 

let filtered = numbers.filter( e => {
    return e % 2 !== 0
})
console.log(filtered);

console.log('');
console.log('');

// Map VI 

let mapped = numbers.map( e => {
    return e * e
})
console.log(mapped);
