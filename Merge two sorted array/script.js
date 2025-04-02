function mergeTwoSortedArr(a, b){
    for(let i = 0; i < b.length; i++){
        a.push(b[i])
    }

    for(let i = 0; i < a.length; i++){
        for(let j = i + 1; j < a.length; j++){
            if(a[i] > a[j]){
                let temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
    return a
}

let a = [1, 5, 6]
let b = [2, 3, 7]

console.log(mergeTwoSortedArr(a, b))