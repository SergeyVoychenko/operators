const a = Number(prompt('Введите первое число'));
const operator = prompt('Выберите оператор: + , - , / , * ');
const b = Number(prompt('Введите второе число'));
if (!isNaN(a) && !isNaN(b)) {
  // можно тернальным оператором ? но код становиться плохо читабелен.
  // let sum = (operator === '+') ? a + b :
  //   (operator === '-') ? a - b :
  //     (operator === '/') ? a / b :
  //       (operator === '*') ? a * b :
  //         'введите корректно один из операторов: + , - , / , * ';
  // рекомендуеться использовать классический if
  let sum;
  if (operator === '+') {
    sum = a + b;
  } else if (operator === '-') {
    sum = a - b;
  } else if (operator === '/') {
    sum = a / b;
  } else if (operator === '*') {
    sum = a * b;
  } else {
    sum = ('введите корректно один из операторов: + , - , / , * ');
  }
  alert(`Ваш результат:  ${sum}`);
} else {
  alert('Введите корректно ЧИСЛО!');
}
