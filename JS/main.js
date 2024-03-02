let firstName = 'Nikita'
let lastName = 'Ilinov'
const age = 18
const city = 'Kazan'
const contry = 'Russia'

console.log(firstName, lastName, age, 'y.o.', 'City:', city, 'Contry:', contry)

const a = 5
const b = 6

const sum = a * b
const minus = a - b
const del = a / b
const delDel = b / a
const delOst = b % a


console.log(a, '+', b, '=', sum)
console.log(a, '-', b, '=', minus)
console.log(a, '/', b, '=', del)
console.log(a, '/', b, '=', delDel)
console.log(a, '%', b, '=', delOst)


console.log(`${city} is capital of ${contry}`)
console.log(typeof (city))


// Урок 79 (условия)

if (age >= 18) {
    console.log('Вы совершеннолетний')
} else {
    console.log('Вам еще нет 18')
}

age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18')

// Урок 80 (циклы)

for (let i = 2; i <= 12; i = i + 2) {
    console.log(i)
}

for (let i = 10; i > 1; i--) {
    console.log(i)
}

let i = 2

while (i <= 12) {
    console.log(i)
    i = i + 2
}

// Урок 81 (массивы)

const numbers = [1, 5, 8, 14, 15, 21]
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i])
    }
}

const colors = ['каждый', 'охотник', 'желает', 'знать', 'где', 'сидит', 'фазан']
for (let i = colors.length - 1; i >= 0; i = i - 1) {
    console.log(colors[i])
}

// Урок 82 (функции)

function helloName(name) {
    return (`Hello ${name}`)
}

let nameFunction = 'Nikita'
console.log(helloName(nameFunction))

let arrayNumbers = [15, 2, 5, 89, 31, 1, 25, -90, -99, 222]
let arrayFilter = []

function arrayTens(arrayNumbers, comparison) {
    n = 0
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > comparison) {
            arrayFilter[n] = arrayNumbers[i]
            n++
        }
    }
    return arrayFilter
}

console.log(arrayTens(arrayNumbers, 10))

let number1 = 2
let number2 = 5
let operation = 'add'
let resultCalculate = ''

function calculate(number1, number2, operation) {
    switch (operation){
        case 'add':
            resultCalculate = number1 + number2;
            break;
        case 'sub':
            resultCalculate = number1 - number2;
            break;
        case 'mul':
            resultCalculate = number1 * number2;
            break;
        case 'div':
            resultCalculate = number1 / number2;
            break;
    }
    return resultCalculate
}

console.log(calculate(number1, number2, operation))
console.log(calculate(5, 5, 'div'))

// =========================================
const band = '==========================================='
console.log(band)
// =========================================

// Урок 83 (Объекты)

const user = {
    name: 'Nikita',
    age: 23,
    city: 'Kazan',
    sayHello(names){
        console.log(`Hello ${names}`)
    }
}

console.log(user.name)
user.sayHello('Oleg')

const users = [
    {
        name: 'Alexey',
        age: 43,
        isAdmin: true,
    },
    {
        name: 'Oscar',
        age: 43,
        isAdmin: false,
    },
    {
        name: 'Maks',
        age: 55,
        isAdmin: true,
    },
    {
        name: 'Olyga',
        age: 43,
        isAdmin: false,
    }
]

let simpUsers = 0

for (let k = 0; k < users.length; k++){
    // console.log(users[k].name, users[k].age)
    if (users[k].isAdmin == true) {
        simpUsers++
    }
}

console.log(simpUsers)

// Урок 85 Методы массивов

userName = []

users.forEach((user) => {
    // console.log(user)
    userName.push(user.name)
    // console.log(user.name)
})

console.log(userName)

// Урок 87 

const element = document.querySelector('.block')
console.log(element)
console.log(element.textContent)
element.textContent = 'parabola'
console.log(element.textContent)
element.id = 32
element.style.backgroundColor = 'red'
const element2 = document.querySelectorAll('div')
console.log(element2)
element2.forEach((element) => {
    element.style.color = 'blue'
    element.style.background = 'grey'
})


// Урок 88

let btnIsRed = false
button = document.querySelector('.button')
button.addEventListener('click', () => {
    if (btnIsRed){
        button.style.background = 'green'
        btnIsRed = false
    } else{
        button.style.background = 'red'
        btnIsRed = true
    }
})

document.addEventListener('scroll', () => {
    console.log('scroll work')
})


// Урок 89

const helloBtn = document.querySelector('.helloBtn')
const text = document.querySelector('.text')
text.style.background = 'red'
text.style.color = 'white'

helloBtn.addEventListener('click', () => {
    text.classList.toggle('move')
    helloBtn.classList.toggle('red')
    if (text.classList.contains('move')) {
        text.textContent = 'Пока'
    } else {
        text.textContent = 'Привет'
    }
    // helloBtn.classList.add('red')
    // text.classList.add('move')
})



