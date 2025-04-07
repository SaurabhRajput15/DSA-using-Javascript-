function powerOfTwo(num){
    if(num < 1){
      return false
    }
    
    while(num > 2){
      if(num % 2 !== 0){
        return false
      }
      num = num/2
    }
    return true
  }
  
console.log(powerOfTwo(8))