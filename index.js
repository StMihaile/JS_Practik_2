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