const a = Number(prompt('Введите первое число'));
const operator = prompt('Выберите оператор: + , - , / , * ');
const b = Number(prompt('Введите второе число'));
if (!isNaN(a) && !isNaN(b)) {
  let sum = (operator === '+') ? a + b :
    (operator === '-') ? a - b :
      (operator === '/') ? a / b :
        (operator === '*') ? a * b :
          'введите корректно один из операторов: + , - , / , * ';
  alert(`Ваш результат:  ${sum}`);
} else {
  alert('Введите ЧИСЛО!');
}
