"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь

  let discriminant = b ** 2 - 4 * a * c
  if(discriminant == 0){
    arr[0] = ( -b / (2 * a) )
  }
  if(discriminant > 0){
    arr[0] = ( (-b + Math.sqrt(discriminant) ) / (2 * a) )
    arr[1] = ( (-b - Math.sqrt(discriminant) ) / (2 * a) )
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  let args = [percent, contribution, amount, date]
  let params = ['Процентная ставка', 'Начальный взнос', 'Общая стоимость', 'Срок ипотеки']
  for (let i = 0; i < args.length; i++) {
    if ( args[i] === '' || isNaN(+args[i]) ) return `Параметр "${params[i]}" содержит неправильное значение "${args[i]}"`
  }

  let credit = amount - contribution

  let today = new Date()
  let years = date.getYear() - today.getYear()
  let monthes = date.getMonth() - today.getMonth()
  let period = years * 12 + monthes

  let interestRate = (+percent / 100) / 12

  let monthPayment = credit * (interestRate + (interestRate / (((1 + interestRate) ** period) - 1)))

  totalAmount = Math.round(monthPayment * period * 100) / 100

  return totalAmount;
}