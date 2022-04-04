const a = Number(prompt('Введите первое число'));
const operator = prompt('Выберите оператор: + - / * ');
const b = Number(prompt('Введите второе число'));

if (!isNaN(a) && !isNaN(b)) {
  switch (operator) {
    case '+':
      alert(`${a} ${operator} ${b} = ${a + b}`);
      break;
    case '-':
      alert(`${a} ${operator} ${b} = ${a - b}`);
      break;
    case '*':
      alert(`${a} ${operator} ${b} = ${a * b}`);
      break;
    case '/':
      alert(`${a} ${operator} ${b} = ${a / b}`);
      break;
    default:
      alert('Введите корректно один из операторов: + - / * ');
  }
} else {
  alert('Введите корректно ЧИСЛО!');
}
