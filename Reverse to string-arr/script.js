//reversed a string

function revStr(str){
    let len = str.length
    let newStr = ""

    for(let i = len-1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}

console.log(revStr("abcde"))


/// reversed a arr

let arr = [1, 2, 3, 4, 5, 6]
let len = arr.length
let newArr = []

for(let i = len-1; i >= 0; i--){
    newArr.push(arr[i])
}

console.log(newArr)