// функция

//es6
const test1 = "awdawd";
let test2 = 1212;

const testFunc = function (){
    test2 = "112";
    console.log(test2)
}

// es5

var test3 = "awdawdawd";

function myFunc(){
    var test3 = "Hello!";

    console.log(test3)
}

//функция - es5
function func1(){
    console.log("Hello! Its func1!")
}

func1();

// function-класс, после чего идет название функции. func1-название функции. () в скобках указываем параметры и
//агрументы. {} в фигурных скобках пишем код который должен выполниться при вызове этой функции


//функция - es6

function func2 (){
    console.log("Hello its func2!")
}

func2();

// стрелочная функция
const func3 = () => {
    console.log("Hello its func3!")
}

func3();

// чем отличается стрелочная функция от обычной - стрелочная функция анонимная


//callback функция  - которую просто передали в другую функцию??

function firstFunc(func){
    console.log("Its first Func!")
    func()
}
function secondFunc(){
    console.log("Its second Func!")
}

firstFunc(secondFunc) // (функцию передали в функцию)


// анонимные функции (не именет названия)

const func4 = function (){

}
// у функции нет названия, название есть только у переменной(func4) которая равняется функции(function())
// вызываем func4 которое равняется анонимной функции



const button = document.getElementById('button');
let i = 0;

button.addEventListener('click', () => {
    i++;
    console.log(i)
})

// addEventListener - добавить слушатель событий


// аргументы или же параметры функции  (принимаем или же аргументы или же функции)

const justFunction = function(text, integer, array, object, bool, cb){
    console.log(text)
    console.log(integer)
    console.log(array)
    console.log(object)
    console.log(bool)
    // callback function
    cb(text)
}

justFunction("Hello", 1200, [1, 2, 3, 4], {key: "value"}, true, (text) => {
    console.log("Its callback function!", text)
})

// аргументы или же параметры функции

// callback функция

// анонимные функции