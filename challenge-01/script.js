function changeColor() {
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;
  let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

  const square = document.querySelector('.square');

  square.style.backgroundColor = color;
  document.getElementById('rgb').innerHTML = ': ' + color;
}

document.getElementById('red').addEventListener('input', changeColor);
document.getElementById('green').addEventListener('input', changeColor);
document.getElementById('blue').addEventListener('input', changeColor);
