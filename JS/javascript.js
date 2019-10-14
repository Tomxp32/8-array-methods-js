const familia = [
    {name: 'Tommy', age: 18},
    {name: 'Dylan', age: 8}
];

const familiaName = familia.map((familia) =>{
    return familia.name;
});

console.log(familiaName);

const familia_2 = [
    {name: 'Tom', age: 18},
    {name:'Hateful', age:44}
]

const colores = [
    {color: 'red', number: 0},
    {color: 'blue', number: 1}
]


const coloresC = colores.filter ((colores) =>{
    return colores.number <=0;
});
console.log(coloresC);

const coloresName = colores.map ((colores) => {
    return colores.number;
})
console.log(colores);












const familia_2Names = familia_2.map((familia_2) =>{
    return familia_2.name;
})

console.log(familia_2Names);

const familia_2Filter = familia_2.filter((familia_2) =>{
    return familia_2.age <= 100;
});
console.log(familia_2Filter);

