function isFactorial(x){
    let result = 1
    
    for(let i = 2; i <= x; i++){
      result *= i
    }
    return result
  }
  
  console.log(isFactorial(5))