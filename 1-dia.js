let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

console.log("Valor numeroUm: " + numeroUm + "\nValor stringUm: " + stringUm);
console.log("Tipo numeroUm: " +typeof numeroUm + "\nTipo stringUm: " + typeof stringUm + "\n");

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

console.log("Tipo de numeroTrinta: " + numeroTrinta + "\nTipo de stringTrinta: " + stringTrinta);
console.log("Tipo numeroUm: " +typeof numeroTrinta + "\nTipo stringUm: " + typeof stringTrinta + "\n");

if (numeroDez == stringDez && numeroDez !== stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

console.log("Tipo de numeroTrinta: " + numeroDez + "\nTipo de stringTrinta: " + stringDez);
console.log("Tipo numeroUm: " +typeof numeroDez + "\nTipo stringUm: " + typeof stringDez + "\n");