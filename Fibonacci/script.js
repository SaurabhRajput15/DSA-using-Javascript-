function isFibonacci(x){
    let fib = [0, 1]

    for(let i = 2; i < x; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(isFibonacci(8))