  function oneThroughTwenty(n){
    let lista = [];
    for(let i = 1; i <=  n; i++){
      lista.push(i)
    }
      return lista;
  }
console.log(oneThroughTwenty(20));
   
function evensToTwenty(n){
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 2 == 0) {
      lista.push(i)
    }
  }
    return lista;
}
console.log(evensToTwenty(20));

function oddsToTwenty(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 2 != 0) {
      lista.push(i)
    }
  }
    return lista;
}
console.log(oddsToTwenty(20));

function multiplesOfFive(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 5 == 0) {
      lista.push(i)
    }
  }
    return lista;
}
console.log(multiplesOfFive(100));

function squareNumbers(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (Number.isInteger(Math.sqrt(i))) {
      lista.push(i)
    }
  }
    return lista;
}
console.log(squareNumbers(100));


function countingBackwards(n) {
  let lista = [];
  for(let i = 1; i <=  n; i++){
    lista.push(i)
  }
    return lista.reverse()
}
console.log(countingBackwards(20));

function evenNumbersBackwards(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 2 == 0) {
      lista.push(i)
    }
  }
    return lista.reverse()
}
console.log(evenNumbersBackwards(20));

function oddNumbersBackwards(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 2 != 0) {
      lista.push(i)
    }
  }
    return lista.reverse()
}
console.log(oddNumbersBackwards(20));

function multiplesOfFiveBackwards(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 5 == 0) {
      lista.push(i)
    }
  }
    return lista.reverse()
}
console.log(multiplesOfFiveBackwards(100));

function squareNumbersBackwards(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (Number.isInteger(Math.sqrt(i))) {
      lista.push(i)
    }
  }
    return lista.reverse()
}
console.log(squareNumbersBackwards(100));
