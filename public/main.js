let numberOfCupsOfCoffee = 2

const fullName = 'Joe Myers'

console.log(`${numberOfCupsOfCoffee}, ${fullName}`)

const person = {
  name: 'Joe Myers',
  luckyNumber: '6',
  favoriteMovies: [
    'The 5th Element',
    'Into the Mouth of Madness',
    "Miller's Crossing",
  ],
}
console.log(person)

let userName = window.prompt("Hey, what's your name?")

console.log(`Hello, ${userName}`)

let userNumberOne = window.prompt('Give me a number!')

let userNumberTwo = window.prompt('Gimme another one!')

const firstOperand = parseFloat(userNumberOne)

const secondOperand = parseFloat(userNumberTwo)

const sum = firstOperand + secondOperand

console.log(
  `Your first number ${firstOperand} + your second number ${secondOperand} is ${sum}`
)

const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = firstOperand % secondOperand

console.log(
  `The difference of ${firstOperand} and ${secondOperand} is ${difference}`,
  `The product of  ${firstOperand} and ${secondOperand} is ${product}`,
  `The quotient of ${firstOperand} and ${secondOperand} is ${quotient} with a remainder of ${remainder}`
)

const numbers = [
  13682, 43960, 13227, 22518, 11906, 34895, 46433, 23652, 22101, 25174, 30534,
  36037, 16601, 12564, 22960, 43918, 28652, 27666, 43670, 21558, 42895, 24268,
  41919, 18246, 12445, 31733, 45485, 14273, 21855, 34225, 30209, 26057, 45428,
  12524, 31508, 19666, 20939, 20573, 43367, 47926, 39984, 11587, 46042, 47775,
  26710, 37320, 39719, 17173, 20112, 37102, 41157, 18265, 34484, 48967, 49787,
  20895, 33142, 25879, 26367, 48422, 12844, 42879, 26749, 14180, 37948, 41357,
  29479, 46412, 27046, 33011, 10489, 35899, 34370, 26275, 26127, 15263, 11509,
  21984, 49078, 39225, 19179, 34062, 29408, 12058, 40471, 13376, 13623, 48918,
  11093, 24554, 30760, 33821, 48027, 45802, 27857, 21418, 18960, 20254, 32042,
  37150,
]

let smallest = numbers[0]
for (let index = 1; index < numbers.length; index++) {
  const element = numbers[index]
  if (element < smallest) {
    smallest = element
  }
}

console.log(smallest)

let largest = numbers[0]
for (let index = 1; index < numbers.length; index++) {
  const element = numbers[index]
  if (element > largest) {
    largest = element
  }
}

console.log(largest)

let arraySum = 0
for (let index = 0; index < numbers.length; index++) {
  arraySum += numbers[index]
}

let average = arraySum / numbers.length

let stats = {
  smallest: smallest,
  largest: largest,
  sum: arraySum,
  average: average,
}

console.log(stats)
