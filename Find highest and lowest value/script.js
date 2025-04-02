///Highest Value

let arr = [23, 87, 54, 34, 67]

function findHighestVal(arr){
    let max = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(findHighestVal(arr))


///Lowest Value

let array = [23, 87, 54, 34, 67]

function findLowestVal(array){
    let max = array[0]

    for(let i = 0; i < array.length; i++){
        if(array[i] < max){
            max = array[i]
        }
    }
    return max
}

console.log(findLowestVal(array))

