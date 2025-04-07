function revWordInPlace(str){
    let reversedStr = ""
    let wordStart = 0

    for(let i = 0; i <= str.length; i++){
        if(i === str.length || str[i] === " "){
            for(let j = i - 1; i >= wordStart; j--){
                reversedStr += str[j]
            }
            if(i < str.length){
                reversedStr += " "
            }
            wordStart = i + 1
        }
    }
    return reversedStr
}

console.log(revWordInPlace("hello world"))