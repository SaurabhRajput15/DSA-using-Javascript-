let revInteger = function(x){
    let negative = x < 0
    let reversed = 0

    if(negative){
        x *=-1
    }

    while(x > 0){
        reversed = (reversed * 10) + (x % 10)
        x = Math.floor(x/10)
    }

    if(reversed > (2**31-1)){
        return -1
    }

    return negative ? (reversed *-1) : reversed
}

console.log(revInteger(123))