// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  sum = 0;
  for(let i = 0; i < arr.length; i++){
    if (!min) min = arr[i]
    if (!max) max = arr[i]
    if (arr[i] < min) min = arr[i]
    if (arr[i] > max) max = arr[i]
    sum += arr[i]
  }
  avg = +(sum / arr.length).toFixed(2)

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код
  sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  for(let i = 0; i < arrOfArr.length; i++){
    let currentSum = func( arrOfArr[i] )
    if (max === undefined) max = currentSum
    if (currentSum > max) max = currentSum
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min, max;
  for(let i = 0; i < arr.length; i++){
    if (!min) min = arr[i]
    if (!max) max = arr[i]
    if (arr[i] < min) min = arr[i]
    if (arr[i] > max) max = arr[i]
  }
  return Math.abs(max - min)
}
