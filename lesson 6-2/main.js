// es5 vs es6

// var vs let/const

//var a = 10;
//let b = 10;
//const c = 10;
//b = "abcd";
// глобальная


//function func(){
  //  console.log(b)
//}

//func()
//console.log(b)

//console.log(b + c)


//var a = 10;
//var mass = [];

//function f(){
  //  a = "1212";
    //a = "3434";
    //console.log(a) //1212
//}

//f()
//console.log(a) //1212

//for(var i = 0; i < mass.length; i++){

//}

//интерполяция строк ``
// интерп возврвщяет стринг
// чтобы внутри производить какие либо опеоации

const users = [
    {
        name: "Jack",
        age: 23
    },
    {
        name: "John",
        age: 19
    },
    {
        name: "Kirill",
        age: 20
    }
]

function getUserInfo(name, age){
    console.log("Name: " + name + "\n" + "Age: " + age)
}

function getUserInfoEs6(name, age){
    console.log(`Name: ${name}\nAge: ${(function () {
        return "neee"
    })()}`)
}

for(let i = 0; i < users.length; i++){
    getUserInfoEs6(users[i].name, users[i].age)
}

// spread operation - (...)  оператор заспределения

let mass = [
    {
        name: "Jack",
        age: 23
    },
    {
        name: "John",
        age: 19
    },
    {
        name: "Kirill",
        age: 20
    },
    {
        name: "Jack",
        age: 23
    },
    {
        name: "John",
        age: 19
    },
    {
        name: "Kirill",
        age: 20
    },
    {
        name: "Jack",
        age: 23
    },
    {
        name: "John",
        age: 19
    },
    {
        name: "Kirill",
        age: 20
    },

    {
        name: "Jack",
        age: 23
    },
    {
        name: "John",
        age: 19
    },
    {
        name: "Kirill",
        age: 20
    }
]
const mass2 = [1, 2, 3, 4, 5]

mass = [...mass, ...mass2]

console.log(mass2)

// спред оператор раскрывает, проходится циклом

// деструктуризация - {name}

//
// {
//      status: 200,
//      response:

const data = {
    status: 200,
    response: [
        {
            name: "Hello!"
        },
        {
            name: "awdawd"
        }
    ]
}

const { response, status } = data;

console.log(response[0], response[1])
console.log(status, data,status)

