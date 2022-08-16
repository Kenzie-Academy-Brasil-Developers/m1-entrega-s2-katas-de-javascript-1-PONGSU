  function oneThroughTwenty(n){
    let lista = [];
    for(let i = 1; i <=  n; i++){
      lista.push(i)
    }
      return lista;
  }
console.log("exercicio 1: " + oneThroughTwenty(20));
   
function evensToTwenty(n){
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 2 == 0) {
      lista.push(i)
    }
  }
    return lista;
}
console.log("exercicio 2: " + evensToTwenty(20));

function oddsToTwenty(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 2 != 0) {
      lista.push(i)
    }
  }
    return lista;
}
console.log("exercicio 3: " + oddsToTwenty(20));

function multiplesOfFive(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 5 == 0) {
      lista.push(i)
    }
  }
    return lista;
}
console.log("exercicio 4: " + multiplesOfFive(100));

function squareNumbers(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (Number.isInteger(Math.sqrt(i))) {
      lista.push(i)
    }
  }
    return lista;
}
console.log("exercicio 5: " + squareNumbers(100));


function countingBackwards(n) {
  let lista = [];
  for(let i = 1; i <=  n; i++){
    lista.push(i)
  }
    return lista.reverse()
}
console.log("exercicio 6: " + countingBackwards(20));

function evenNumbersBackwards(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 2 == 0) {
      lista.push(i)
    }
  }
    return lista.reverse()
}
console.log("exercicio 7: " + evenNumbersBackwards(20));

function oddNumbersBackwards(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 2 != 0) {
      lista.push(i)
    }
  }
    return lista.reverse()
}
console.log("exercicio 8: " + oddNumbersBackwards(20));

function multiplesOfFiveBackwards(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 5 == 0) {
      lista.push(i)
    }
  }
    return lista.reverse()
}
console.log("exercicio 9: " + multiplesOfFiveBackwards(100));

function squareNumbersBackwards(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (Number.isInteger(Math.sqrt(i))) {
      lista.push(i)
    }
  }
    return lista.reverse()
}
console.log("exercicio 10: " + squareNumbersBackwards(100));
