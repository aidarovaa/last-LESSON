//const button = document.getElementById('button') // взять элемнт по id
//button.setAttribute('class', 'itsClassMan')
//console.log(button)

//button.onclick = () => {
//    console.log("Hello its changed function!")
//}
//console.log(button)


//const blocks = document.getElementsByClassName('block')  //доставать все элементы по такому классу ( )

//blocks[0].style.width = "100px"
//blocks[0].style.height = "100px"
//blocks[0].style.background = "#242b2e"

//console.log(blocks)


//const button2 = document.getElementsByName() // взять элемент по имени


//const query = document.querySelector('.block') // ищет по такому классу находит 10 элементов и отдает первый попавшийся
//console.log(query)
// querySelector находит первый попавщийся тег по такому то классу


//const what = document.querySelectorAll('.block') // находит все элементы по классу
//console.log(what)

//html это и есть объект любой тег объект


const button = document.getElementById('button')// взять элемент по id (доставать один элемент по айдишнику)
console.log(button) // создали переменную батон которая равняется ..... потом обращаемся к элементу
// то есть к документу гетэлементбайайди и передаем туда айти элементы которые хотим достать,
// тем самым переменная батон будет равняться кнопке
console.log(button.id) // выведится просто button

button.onclick = () => {
    console.log('Hello its changed function!')
}
console.log(button)

//
const button5 = document.getElementById('button')
button.setAttribute('class', 'itsClassMan') // атрибут в html помощьники тега,
// тег один это большой объект большой класс а в нем есть дочерные элементы то есть атрибут
console.log(button)
button.innerText = "changed text" // поменяем текст внутри кнопки



//const button1 = document.getElementsByClassName() // взять все элементы по классу (берет все элементы по одному классу)
// доставать все элементы по такому классу

const blocks = document.getElementsByClassName('block')  //доставать все элементы по такому классу ( )

blocks[0].style.width = "100px"
blocks[0].style.height = "100px"
blocks[0].style.background = "#242b2e"
console.log(blocks)



const blocks2 = document.getElementsByName('block') // взять элемент по имени
console.log(blocks2)  // достаем элементы по атрибуту name



const query = document.querySelector('.block')  // находит первый попавшийся тег(элемент) по такому то классу
// достает первый попавшийся элемент по классу block
console.log(query)



const what = document.querySelectorAll('.block') // находит все элементы по классу
console.log(what)