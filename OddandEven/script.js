let isEven = (num) => {
    if(num % 2 === 0){
        return `${num} is even`
    }
    return `${num} is odd`
}

console.log(isEven(35))

//using ternary operator

let valueIsEven = (val) => val % 2 === 0 ? `${val} is even` : `${val} is odd`
console.log(valueIsEven(34))