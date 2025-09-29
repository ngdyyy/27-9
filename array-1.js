const user = [
    {name: 'An', age: 20},
    {name: 'Bình', age: 21},
    {name: 'Châu', age:20},
    {name: 'Dũng', age:22}
];

const tuoi20 = user.filter(user => user.age === 20);
console.log(tuoi20);

const tuoi21 = user.filter(user => user.age === 21);
console.log(tuoi21);

const tuoi22 = user.filter(user => user.age === 22);
console.log(tuoi22);