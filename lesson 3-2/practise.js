function getLength(element){
    return element.length;
}

console.log(getLength(123456))
// у integer нету ключа length, по сути это number число какое-то и мы не можем найти длину, она не из чего не состоит
//это просто намбер, а у текста есть длина это символы(сколько символов в этом тексте), у массива тоже есть длина







// функция которая возвращает отсортированный массив
// создали функция, назвали ее mySort у нее есть один параметр который называется mess,
// внутри этой функции проиясходит действие, он возвращает нам отсортированный массив (болду все)
function mySort(mass){
    console.log(mass.sort((a, b) => { return a - b }))  // сортирует массив по порядку
}
mySort([1, 1, 45, 12, 1234, 12])
mySort([1,123,123,123123, 1389163,1313])

function reversMass(mass){
    console.log(mass.reverse())
}

reversMass([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // сортирует обратно


const mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const mass2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mass.reverse())
console.log(mass2.reverse())







// четные числа
function getEvenNumbers(mass){  // функция которая принимает массив
    const newMass = [];  // пушим новый массив
    for(let i = 0; i < mass.length; i++){    // цикл который проходится по этому массиву
        if(mass[i] % 2 === 0){   // делаем распорядок   (выводит остаток если этот остаток равняется нулю то значит четное)
            newMass.push(mass[i])   // пушим то есть добавляем элемент который только что проверили
        }
    }

    console.log(newMass)
}

getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])






// фильтровать массив состоящий из всех типов данных в один тип

const mass3 = [1, "2", "3", 4, [1, 2, 3, 4], {key: "value"}]

function getOnlyOneType(mass, type){
    const newMass = []; // создаем новый массив что бы потом в нее запушить

    for(let i = 0; i < mass.length; i++){  // цикл
        if(typeof mass[i] === type){ // проверка
            newMass.push(mass[i]) // если typeof mass[i] равняется тайпу то мы пушим в этот массив
        }
    }

    console.log(newMass)
}

getOnlyOneType(mass3, "number")
// мы просто взяли создали функцию которая принимает два параметра это неотфильтрованный массив
// и вторым параметром тип который мы хотим отфильтровать, после чего просто проходимся обычным циклом
// и проверяем каждый элемент в массиве на тип, то есть typeof возвращает тип какого либо элемента(тип данных)
// и приравниваем нашему второму параметру которую мы передали то есть number,
// если все окей возвращается тру булен значение if страбатывает и частичка кода внутри него срабатывает
// это newMass push mass от i, то есть просто запушили в новый массив пустой, пока что,
// элемент который только что проверили на тип
// и в конце после окончания всего этого цикла мы просто вывели этот новый массив


// return останавливает функцию тем самым возвращая что то. return всегда должен быть в конце функции
// либо в том месте где ее нужно остановить
