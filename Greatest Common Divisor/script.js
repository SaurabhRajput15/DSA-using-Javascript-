function gcd(a, b){
    let smaller = Math.min(a, b)
    hcf = 1

    for(let i = 0; i <= smaller; i++){
        if(a % i === 0 && b % i === 0){
            hcf = i
        }
    }
    return hcf
}

console.log(gcd(20, 24))