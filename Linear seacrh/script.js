function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === target){
        return i
      }
    }
    return -1
  }
  
  console.log(linearSearch([3, 7, 5, 8, 4], 7))