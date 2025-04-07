function findMissingNumber(arr){
    let n = arr.length + 1
    let sum = 0
    expectedSum = n * (n + 1) / 2
    
    for(let i = 0; i < arr.length; i++){
      sum += arr[i]
    }
    
    return expectedSum - sum
  }
  
  console.log(findMissingNumber([1, 2, 4, 5, 6, 7]))