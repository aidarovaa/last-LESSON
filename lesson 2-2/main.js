const mass = [1, 2, 3, 4, 12, 13, 121212, "string", {key: "value"}, [1, 2, 3,]]
const obj = {
    key: "value",
    username: "Jack"
}

//console.log(obj.username)
//console.log(mass[1])

// циклы
//for(let i = 0; i < mass.length; i++){
//    console.log(mass[i])
//}

//let i = 0

//while(i < 10 ){
    //console.log("I`am while!")
  //  i++;
//}

// Функции

// es5 - function

//const firstName = "Jack"
//const lastName = "Barbaro"

//const firstName2 = "John"
//const lastName2 = "Barbaro"

//const fullName = firstName + " " + lastName;
//const fullName2 = firstName2 + " " + lastName2;
//console.log(fullName, fullName2) хардкод

function getFullName(firstName, lastName, age){  // это параметры функции либо же аргументы функции
    //console.log(firstName, lastName)
    return firstName + " " + lastName + "Age:" + age;
}

console.log(getFullName("Jack", 12, "Barbaro"))
//getFullName("Jack", "Barbaro") // вызов функции
//getFullName("John", "Barbaro")

// функция нужна для того чтобы код был менее весещим,
// функции должны называться таким образом то что они именно делают
// функции пишем для того чтобы не повторять тот или иной код
// функция должна называться таким образом то есть что она делает так и называется
// нужно следить за порядком функции, отправлять строго по порядку

//practise

const users = [
    {
        username: "Jack",
        age: 21
    },
    {
        username: "Barbaro",
        age: 32
    },
    {
        username: "John",
        age: 19
    }
]  // массив состоящий из объектов (0,1,2 элементы)

function getUserInfo(username, age) {
    console.log("Username: " + username + "\n" + "Age:" + age)
}

for(let i = 0; i < users.length; i++){
    getUserInfo(users[i].username, users[i].age)
}  // цикл for

// объекты
// весь js и есть объект

const obj2 = {
    username: "Jack",
    age: 21,
    key: "value"
}

//console.log(obj2)
//console.log(obj2.key)

//console.log(obj.username)
// обращяемся сперва к переменной это obj затем к ключю username
// точка отвечает за вложенности

//const str = "Hello!"
// тип данных стринг но в памяти js это объект

//console.log(users.slice(0, 1))

// slice - отрезать массив
// splice - удаляет элемент массива    удаление элемента с определенным индексом. users.splise(1,1) - удалить по
// индексу один один элемент

users.push({
    username: "Ilim",
    age: 23
})

console.log(users)
// push - добавляет новый элемент в конец массива

users.pop()
console.log(users)
// pop - удаляет из конца, удаляет последний элемент с массива

users.shift()
console.log(users)
// shift - удаляет из начала первый элемент
// unshift - добавляет в начало

// indexOf - поиск номера элемента в массиве

// структура объекта - ключ:значение

// структура массива состоит из индексов и элементов (по какому-то индексу хранится какой-либо элемент)

// for in - нужен для объектов
// for of - нужен для массива

for(const key in obj2){
    console.log(key)
}   // достать ключи в объекте 2

for(const user of users){
    console.log(user)
}   // получаем объекты сразу

// for of - нужен чтобы просто пройтись получить данные для массива

let i = 0
do {
    console.log(i)
    i++
} while (i < 5)   // пока i меньше 5 делай do




while (i < 5) {
    console.log(i)
    i++;

