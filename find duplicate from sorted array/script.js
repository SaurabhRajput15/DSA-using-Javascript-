let num = [1, 2, 2, 3, 4, 5, 5, 6, 7]
function findDuplicateValue(num){
  return num.filter((item, index) => num.indexOf(item) !== index)
}

console.log(findDuplicateValue(num))