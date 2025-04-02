function plusOne(digit){
    let len = digit.length

    for(let i = len-1; i >= 0; i--){
        if(digit[i] === 9){
            digit[i] = 0
        }else{
            digit[i]++
            return digit
        }
    }
    digit.unshift(1)
    return digit
}

console.log(plusOne([133]))


