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

for (let k = 0; k <= users.length; k++){
    if (users[k].age == 43) {
        simpUsers++
    }
}

console.log(simpUsers)


