const main = document.querySelector('.js-main');
const face = document.querySelector('.js-face');
const btn = document.querySelector('.js-btn');
//para recuperar el valor de un select vamos a necesitar un evento de botón, si no siempre recuperará el valor por defecto
const select = document.querySelector('.js-select');

function getRandom() {
  return Math.round(Math.random() * 100);
}

function paintFace() {
  const selectValue = select.value;
  face.innerHTML = selectValue;

  // if (main.classList.contains('yellow')) {
  //   face.innerHTML = ':)';
  // } else {
  //   face.innerHTML = ':(';
  // }
}

const changeBackground = () => {
  const randomNumber = getRandom(100);
  console.log(randomNumber);

  if (randomNumber % 2 === 0) {
    main.classList.add('yellow');
    main.classList.remove('orange');
  } else {
    main.classList.add('orange');
    main.classList.remove('yellow');
  }
};

//buenas prácticas es que la handeClick solo llame a funciones
function handleClick(event) {
  event.preventDefault();

  changeBackground();
  paintFace();
}

btn.addEventListener('click', handleClick);

//Math.random() = nº entre 0 y 1, es decir con decimales
//para que sea un número entero lo multiplicamos por 100
//Math.round () = redondea para que no salgan decimales

console.log(getRandom());
