function binarySearch(arr, target){
    let leftIndex = 0
    let rightIndex = arr.length - 1
    
    while(leftIndex <= rightIndex){
      let midIndex = Math.floor((leftIndex + rightIndex) / 2)
      
      if(target === arr[midIndex]){
        return midIndex
      }
      
      if(target < arr[midIndex]){
        rightIndex = midIndex - 1
      }else{
        leftIndex = midIndex + 1
      }
    }
    return -1
  }
  
  console.log(binarySearch([2, 8, 6, 4, 7], 7))