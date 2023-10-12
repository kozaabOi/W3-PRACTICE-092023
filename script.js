const arr = ["kutya", "cica", "mérési hiba"]

const numbers = [10, 20, 30, 40, 50]

/*for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}*/

/*for (const element of arr) {
  console.log(element)
}*/

//arr.forEach((element) => console.log(element))

/*const newNumbers = []

numbers.forEach(function (number, index, array) {
  let newNumber = number * 2
  console.log(newNumber, index, array)
  newNumbers.push(newNumber)
})

console.log(newNumbers)*/

/*const newNumbers = []

numbers.map(function(number, index, array) {
  let newNumber = number * 2
  console.log(newNumber, index, array)
  newNumbers.push(newNumber)
  return newNumber
})*/

const mapResult = numbers.map((number) => number * 2)

/*console.log(numbers)
console.log(mapResult)*/

const numberArray = [6, 11, 45, 8, 10, 16, 100]

const users = [
  {
    name: "Márk",
    age: 28,
    budget: 20000
  },
  {
    name: "Lajos",
    age: 22,
    budget: 1200
  },
  {
    name: "Olivér",
    age: 22,
    budget:999999
  },
  {
    name: "Örs",
    age: 44,
    budget: 124000
  }
]

const filterResult = numberArray.filter((number) => number % 2 !== 0)

//console.log(filterResult)

const usersWithHighBudget = users.filter(user => user.budget > 20000)
console.log(usersWithHighBudget)