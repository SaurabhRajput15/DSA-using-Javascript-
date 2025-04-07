let num = [1, 2, 2, 3, 4, 5, 5, 6, 7]
let newNum = []
for(let i = 0; i < num.length; i++){
  if(newNum.indexOf(num[i]) === -1){
    newNum.push(num[i])
  }
}

console.log(newNum)