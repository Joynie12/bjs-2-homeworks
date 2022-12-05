"use strict"
function solveEquation(a, b, c) {
  let arr = [Math.pow(b , 2) - 4 * a * c];
  let answer = [];
  if (arr < 0) {
    console.log(answer);
  } else if (arr == 0) {
    answer = [-b/(2*a)];
    console.log(answer);
  } else if (arr > 0) {
    answer = [(-b + Math.sqrt(arr) )/(2*a) , (-b - Math.sqrt(arr))/(2*a)];
    console.log(answer);
  }
  return answer;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
    ) {
       console.log('Один из параметров содержит неверное значение');
       return false;
    }

  let percentForMonth = (percent / 100) / 12;
  let bodyOfCredit = amount - contribution;
  let payForMonth = bodyOfCredit * (percentForMonth + (percentForMonth / ((Math.pow((1 + percentForMonth), countMonths) - 1))));
  let totalAmount = 0;
  totalAmount = parseFloat((payForMonth * countMonths).toFixed(2));
  return totalAmount;
}