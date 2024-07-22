function calculate(a, b, operator) {
  switch (operator){
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return NaN;
  }
}

let a = parseFloat(prompt("Введите первое число:"));
let b = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

const result = calculate.apply(null,[a,b,operator]);//null - this, остальные аругменты пишутся внутри apply в виде массива
console.log('ответ:', result);