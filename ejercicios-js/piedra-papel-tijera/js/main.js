const select = document.querySelector('.js_select');
const result = document.querySelector('.js_result');
const btn = document.querySelector('.js_btn');

function getRandom() {
  const op = Math.round(Math.random() * 100);
  const optionUser = select.value;

  if (op <= 33) {
    console.log('piedra');
  }
  if (op > 33 && op <= 66) {
    console.log('papel');
  }

  if (op > 66) {
    console.log('tijera');
  }

  if (op <= 33 && optionUser === 'piedra') {
    result.innerHTML = 'EMPATE = El ordenador ha sacado piedra';
  }
  if (op <= 33 && optionUser === 'papel') {
    result.innerHTML = 'GANAS :) = El ordenador ha sacado piedra';
  }
  if (op <= 33 && optionUser === 'tijera') {
    result.innerHTML = 'PIERDES :( = El ordenador ha sacado piedra';
  }

  if (op > 33 && op <= 66 && optionUser === 'piedra') {
    result.innerHTML = 'PIERDES :( = El ordenador ha sacado papel';
  }
  if (op > 33 && op <= 66 && optionUser === 'papel') {
    result.innerHTML = 'EMPATE = El ordenador ha sacado papel';
  }
  if (op > 33 && op <= 66 && optionUser === 'tijera') {
    result.innerHTML = 'GANAS :) = El ordenador ha sacado papel';
  }

  if (op > 66 && optionUser === 'piedra') {
    result.innerHTML = 'GANAS :) = El ordenador ha sacado tijera';
  }
  if (op > 66 && optionUser === 'papel') {
    result.innerHTML = 'PIERDES :(= El ordenador ha sacado tijera';
  }
  if (op > 66 && optionUser === 'tijera') {
    result.innerHTML = 'EMPATE = El ordenador ha sacado tijera';
  }
}

function handleClick(event) {
  event.preventDefault();

  getRandom();
}

btn.addEventListener('click', handleClick);
