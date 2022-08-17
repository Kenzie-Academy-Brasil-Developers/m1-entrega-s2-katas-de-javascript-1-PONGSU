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
    if(Number.isInteger(Math.sqrt(i))){
      lista.push(i)
    }
  }
  return lista.reverse()
}
console.log("exercicio 10: " + squareNumbersBackwards(100));

/* -os ex 5 ao 10 pq nao sei se poderia usar os codigos a cima--------- */console.log("|"); console.log("espaço para resoluções em alternativa caso as anteriores não sejam validas para o exercicio"); console.log("|");
/* alternativa ao if (Number.isInteger(Math.sqrt(i)))
considerando que a raiz de 100 é 10, então 
as outras raizes perfeitas dos numeros
entre 1 e 100 vão ser os numeros de 10 até 1 */

function squareNumbers2(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    lista.push(i*i)
  }
  return lista;
}
console.log("exercicio 5²: " + squareNumbers2(10));

/* Alternativa "amadora" para o .reverse */
function inverter(lista) {
  let x = (lista.length) - 1;
  for(let a = 0; a <= (x/2); a++){
    let aux0 = lista[x - a]
    let auxfin = lista[a]
    lista[(a - x) * -1] = auxfin
    lista[a] = aux0
  }
  return lista   
}

function countingBackwards2(n) {
  let lista = [];
  for(let i = 1; i <=  n; i++){
    lista.push(i)
  }
  return inverter(lista)
}
console.log("exercicio 6²: " + countingBackwards2(20));

function evenNumbersBackwards2(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 2 == 0) {
      lista.push(i)
    }
  }
  return inverter(lista)
}
console.log("exercicio 7²: " + evenNumbersBackwards2(20));

function oddNumbersBackwards2(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 2 != 0) {
      lista.push(i)
    }
  }
  return inverter(lista)
}
console.log("exercicio 8²: " + oddNumbersBackwards2(20));

function multiplesOfFiveBackwards2(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    if (i % 5 == 0) {
      lista.push(i)
    }
  }
  return inverter(lista)
}
console.log("exercicio 9²: " + multiplesOfFiveBackwards2(100));

function squareNumbersBackwards2(n) {
  let lista = [];
  for(let i = 1; i <= n; i++){
    lista.push(i*i)
  }
  let x = (lista.length) - 1;
  return inverter(lista)
}
console.log("exercicio 10²: " + squareNumbersBackwards2(10));