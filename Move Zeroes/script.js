function moveZeroes(num){
    let index = 0

    for(let i = 0; i < num.length; i++){
        if(num[i] !== 0){
            let temp = num[index]
            num[index] = num[i]
            num[i] = temp
            index++
        }
    }
    return num
}

console.log(moveZeroes([2, 0, 5, 0, 6, 7]))