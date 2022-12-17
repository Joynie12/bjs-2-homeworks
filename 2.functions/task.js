// function getArrayParams(...arr) {
//   let min = [Infinity];
//   let max = [-Infinity];
//   let sum = 0;

//   min = Math.max(...arr);
//   max = Math.min(...arr);
//   sum = getArrayParams.reduce((a, b) => a + b, 0);
//   avg = parseFloat((sum/getArrayParams.length).toFixed(2));

//   return { min: min, max: max, avg: avg };
// }

// function summElementsWorker(...arr) {
//   const summary = summElementsWorker.reduce((sum, current) => sum + current, 0);
//   return summary;
// }

// function differenceMaxMinWorker(...arr) {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   let difference = max - min;
//   return difference;
// }

// function differenceEvenOddWorker(...arr) {
//   let sumEvenElement = 0;
//   let sumOddElement = 0;

//   for (let i = 0; i < differenceEvenOddWorker.length; i++) {
//     if (i % 2 == 0) {
//       sumEvenElement++;
//     } else sumOddElement++;
//   }
//   return (sumEvenElement - sumOddElement);
// }

// function averageEvenElementsWorker(...arr) {
//   let sumEvenElement = 0;
//   let countEvenElement = 0;

//   for (let i = 0; i < averageEvenElementsWorker.length; i++) {
//     if (i % 2 == 0) {
//       sumEvenElement ++;
//       countEvenElement ++;
//     }
//   }
//   return (sumEvenElement / countEvenElement);
// }

// function makeWork (arrOfArr, func) {
//   let max = func(...arrOfArr[0]);
//   for (let i = 1; i < arrOfArr.length; i++) {
//     const funcResult = func(...arrOfArr[i]);
//     if (funcResult > max) {
//       max = funcResult;
//     }
//   }

//   return max;
//   // return Math.max(...arrOfArr.map(arr => func(arr)));
// }

function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
   if (arr[i] > max) {
    max = arr[i];
   }
   else if (arr[i] < min) {
    min = arr[i];
   }
   sum = sum + arr[i];
  } 
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let difference;
  if (arr.length > 0) {
    difference = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  } else {
    difference = 0;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; //четные
  let sumOddElement = 0;  //нечетные
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }
}

function makeWork (arrOfArr, func) {
 let maxWorkerResult = -Infinity;
 for (let i = 0; i < arrOfArr.length; i++) {
  const resultFunc = func(...arrOfArr[i]);
  if (resultFunc > maxWorkerResult) {
    maxWorkerResult = resultFunc;
  }
}
 return maxWorkerResult;
}