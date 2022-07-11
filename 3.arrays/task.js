function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  if(arr1.length !== arr2.length) return false
  result = arr1.every( (item, idx) => arr1[idx] === arr2[idx] )

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter( item => item > 0 && item % 3 === 0).map( item => item * 10)

  return resultArr; // array
}
