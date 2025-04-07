function primeFactor(num){
    let factor = []
    divisor = 2
    
    while(num > 1){
      if(num % divisor === 0){
        factor.push(divisor)
        num = num/divisor
      }else{
        divisor++
      }
    }
    return factor
  }
  
  console.log(primeFactor(4))