// Palindrome Number

let isPalindrome = function(x){
    if(x < 0){
        return false
    }

    return x === reversedInteger(x)
}

let reversedInteger = function(x){
    let reversed = 0

    while(x > 0){
        reversed = (reversed * 10) + (x % 10)
        x = Math.floor(x / 10)
    }

    return reversed
}

console.log(isPalindrome(121))


// Palindrome String


function palStr(str){
    let len = str.length
    let mid = len / 2

    for(let i = 0; i < mid; i++){
        if(str[i] !== str[len-1-i]){
            return false
        }
    }
    return true
}

console.log(palStr("ababaa"))