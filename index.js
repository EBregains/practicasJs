const h1 = document.querySelector('h1');
const title = document.querySelector('h1');
const formulario = document.getElementById('formulario');
const input1 = document.getElementById('numero1');
const input2 = document.getElementById('numero2');
const btnCalcular = document.getElementById('btnCalcular');
const pResultado = document.querySelector('.resultado');

formulario.addEventListener('submit', addValues)

function addValues(event) {
  console.log({event});
  event.preventDefault();
  pResultado.innerText = input1.value + input2.value;
}
