let array = [1, 'string', true, 2, 'mike', false, 3, "name", false]
let numberArray = array.filter((num) => typeof num === "number")
console.log(numberArray)

let booleanArray = array.filter((bool) => typeof bool === "boolean")
console.log(booleanArray)

let stringArray = array.filter((str) => typeof str === "string")
console.log(stringArray)