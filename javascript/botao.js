numero = 0;

function less() {
  numero--;
  setValue(numero);
}

function more() {
  numero++;
  setValue(numero);
}

function setValue(value) {
  document.getElementById('num').value = value;
}

setValue(numero);



numero2 = 0;

function less2() {
  numero2--;
  setValue2(numero2);
}

function more2() {
  numero2++;
  setValue2(numero2);
}

function setValue2(value) {
  document.getElementById('num2').value = value;
}

setValue2(numero2);

numero3 = 0;

function less3() {
  numero3--;
  setValue3(numero3);
}

function more3() {
  numero3++;
  setValue3(numero3);
}

function setValue3(value) {
  document.getElementById('num3').value = value;
}

setValue3(numero3);