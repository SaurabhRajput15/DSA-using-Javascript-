function nonRepeatingChar(s){
    let n = s.length
    
    for(let i = 0; i < n; i++){
      let found = false
      
      for(let j = 0; j < n; j++){
        if(i !== j && s[i] === s[j]){
          found = true
          break;
        }
      }
      if(found === false){
        return s[i]
      }
    }
    return "$"
  }
  
  console.log(nonRepeatingChar("racecar"))