// function add(n1: number, n2: number, showPrint?:boolean): number {
//     return n1 + n2;
// }

// //const number1 = 5;
// const number1 = 5;
// const number2 = 22;
// const printResut = true

// const result = add(number1, number2);
// console.log(result);
//  ------------------

// const person = {
//     name: 'Milos',
//     age: 28,
// }

// const person: object = {
//     name: 'Milos',
//     age: 28,
// };

// console.log(person);

// const person: {
//     name: string,
//     age: number,
// } = {
//     name: 'Milos',
//     age: 28,
// };

// console.log(person.name);

// ---------- Array Type ----------
// const person = {
//     name: 'Milos',
//     age: 28,
//     hobbies: ['Sports', 'Cooking']
// };

// let favoriteActivities: string[];
// favoriteActivities = ['fdfdf'];

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase())
//     console.log(hobby.map())
// }
// person.hobbies.map((item) => {})

// ---------- Enum ------------
// enum Role {ADMIN = 'A', AUTHOR = 1}
// const person = {
//     name: 'Milos',
//     age: 28,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN
// };

// ------------- Union Type --------
type Combinable = number | string;
type User = {
    name: string;
    age: number;
}

function combine(input1: Combinable, input2: Combinable): Combinable {
    let result;

    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const number1 = 5;
const number2 = 22;

const result = combine(number1, number2);
console.log(result); 

const combineNames = combine('Milos', 'Max')
console.log(combineNames);