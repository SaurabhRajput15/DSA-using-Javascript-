function countFreqChar(str){
    let frequency = {}
    
    for(let char of str){
      if(frequency[char]){
        frequency[char] += 1
      }else{
        frequency[char] = 1
      }
    }
    return frequency
  }
  
  console.log(countFreqChar("hello world"))