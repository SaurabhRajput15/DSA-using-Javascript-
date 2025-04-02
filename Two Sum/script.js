function twoSum(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i, j]
            }
        }
    }
    return []
}

const arr = [2, 7, 9, 11]
const target = 9
console.log(twoSum(arr, target))