// работаем с дом элементом, а дом элемент это наш html в объектном виде
document.title = "Form"; // обратились к дом элементу и тайтлу и изменили его на форм

const form = document.createElement('form') // создали форму, чтобы потом внутрь этой формы запихнуть наши инпуты с пешками а после заслилизовать
form.setAttribute('class', 'form') // задаем классы форм

function createInput(className, type, placeholder){ // создали функцию createInput которая принимает три параметра className для того чтобы задать класс этому инпуту, тип этого инпута и placeholder то есть подсказка
    const input = document.createElement('input') // в этой функции создаем input то есть документ createElement, обращаемся к нему
    input.setAttribute('class', className) // и добавляем атрибут то есть setAttribute, атрибут класс равняется первому параметру то есть className у
    input.setAttribute('type', type) // атрибут тайп равняется нашему типу (тип текст)
    input.setAttribute('placeholder', placeholder)
    return input
}

// вызов функции и приравнивание
const inputName = createInput('inputName', 'text', 'Name') // inputName вызывает createInput. а createInput берет три параметра 'inputName', 'text', 'Name'. моздает инпут и возвращает его. когда возвращает будет просто ровняться такому элементу<input>
const inputPassword = createInput('inputPassword', 'password', 'Password')
const inputSubmit = createInput('sendData', 'submit', null)

form.append(inputName)
form.append(inputPassword)
form.append(inputSubmit)

document.body.append(form) // выводим форму в body

function createStyles(element, style, value){
    element.style[style] = value;
}

createStyles(form, 'width', '400px');
createStyles(form, 'height', '400px');
createStyles(form, 'margin', '0 auto');
createStyles(form, 'border', '1px solid #242b2e');

createStyles(inputName, 'width', '90%');
createStyles(inputName, 'marginLeft', '3.5%');
createStyles(inputName, 'height', '40px');
createStyles(inputName, 'fontSize', '20px');
createStyles(inputName, 'padding', '5px');
createStyles(inputName, 'marginTop', '30px');

createStyles(inputPassword, 'width', '90%');
createStyles(inputPassword, 'marginLeft', '3.5%');
createStyles(inputPassword, 'height', '40px');
createStyles(inputPassword, 'fontSize', '20px');
createStyles(inputPassword, 'padding', '5px');
createStyles(inputPassword, 'marginTop', '30px');

createStyles(inputSubmit, 'width', '50%');
createStyles(inputSubmit, 'height', '35px');
createStyles(inputSubmit, 'marginLeft', '25%');
createStyles(inputSubmit, 'background', '#242b2e');
createStyles(inputSubmit, 'color', '#ffffff');
createStyles(inputSubmit, 'fontSize', '20px');
createStyles(inputSubmit, 'fontFamily', 'monospace');
createStyles(inputSubmit, 'fontWeight', 'bold');
createStyles(inputSubmit, 'marginTop', '50px');
createStyles(inputSubmit, 'cursor', 'pointer');
