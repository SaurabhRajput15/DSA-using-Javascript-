let areAnagram = function(str1, str2){
    let n1 = str1.length
    let n2 = str2.length

    if(n1 !== n2){
        return false
    }

    str1 = str1.split("").sort().join("")
    str2 = str2.split("").sort().join("")

    for(let i = 0; i < n1; i++){
        if(str1[i] !== str2[i]){
            return false
        }
    }
    return true
}

let str1 = "ababa"
let str2 = "ababaa"

if(areAnagram(str1, str2)){
    console.log(true)
}else{
    console.log(false)
}