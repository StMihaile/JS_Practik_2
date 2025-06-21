/*
1

let undefindeVar;
let nullVar = null;
let emptyStringVar = '';
let zeroVar = 0;
let falseVar = false;

console.log(undefindeVar ?? 'Результат');
console.log(nullVar ?? 'Результат');
console.log(emptyStringVar ?? 'Результат');
console.log(zeroVar ?? 'Результат');
console.log(falseVar ?? 'Результат');

*/
/*
2

const price = 0;

//const result = price || 'Цена не указана';
const result = price ?? 'Цена не указана';

console.log(result);
*/
/*
3

const bmw = {
 name: "BMW",
 color: 'black',
 hp: 340,
 doors: 2,
 isStarted: false
}

bmw.color = 'green';
console.log(bmw);

const engine = {
    hp: 340, 
    capacity: 3,
    mileage: 60000
}

bmw.engine = engine;

delete bmw.hp
console.log(bmw);
console.log(bmw.color);

console.log(bmw['name']);

*/
/*

4
const car = {
 name: "BMW",
 color: 'green',
 wheels: 4,
 hp: 340,
 doors: 2,
 isStarted: false,
 engine: {
    hp: 340,
    capacity: 3,
    mileage: 60000,
 },
 start: function() {
    console.log(this);
    this.isStarted = true;
},

openDoor(door) {
    console.log('Открываем дверь', door);
}
}


car.stop = function() {
    this.isStarted = false;
}

car.start();

console.log(car.isStarted);

*/
/*

5
const person = {
    name: "Петя",
    getName: function(){
        console.log(`Привет, меня зовут ${this.name}`);
    }
}

const person2 = Object.create(person);
person2.name = "Вася";

person.getName();
person2.getName();
*/
/*

6

const a = {
    a: 1,
    b: 2,
    c: 3
}

const b = {
    c: 5,
    d: 6
}

const object = Object.assign(a, b);
console.log(object);
*/
/*
7

const car = {
    name: 'Audi',
    hp: 280
}

const pair = Object.entries(car);

console.log(pair);
*/

/*

8

const car = {
    name: 'Audi',
    hp: 280
}

Object.freeze(car);

car.name = 'Mersedes';

console.log(car);
*/
/*
9

const car = {
    name: 'Audi',
    hp: 280
}

let key = Object.keys(car);

console.log(key);

key.forEach((key) => {
    console.log(car[key]);
})

*/

/*

10

const car = {
    name: 'Audi',
    hp: 280
}

let values = Object.values(car);

console.log(values);
*/
/*
11

const object = {
    a: 1,
    b: 2,
    c: 3
}

for(property in object) {
    console.log(`Свойство ${property} имеет значение: ${object[property]}`);
}
    */

/*
12

const object = {
    a: 1,
    b: 2,
    c: 3
}

Object.keys(object).forEach((property) => {
    console.log(`Свойство ${property} имеет значение: ${object[property]}`);
})
    */
/*
13

const registrationForm = {
    firstName: 'Петя',
    lastName: 'Иванов',
    birthDate: '19.12.1990',
    password: 'qwerty'
}

Object.keys(registrationForm).forEach((field) => {
    if(!registrationForm[field]) {
        console.log('Форма заполнена не до конца');
    } else {
        console.log("Форма заполнена верно");
    }
})
*/
/*
14

const car = {
    name: 'BMW',
    isStarted: false,
    start() {
        console.log('Машина заведена');
        this.isStarted = true;
    },
    stop() {
        this.isStarted = false;
    }
}

//const name = car.name;
//const isStarted = car.isStarted;
//const start = car.start;
//const stop = car.stop;

const {name, isStarted, start, stop, hp = 120} = car;
start();
console.log(car.isStarted);

console.log(hp);

*/