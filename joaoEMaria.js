console.log("módulo joaoEMaria");

let joao = 1;
let maria = 2;

function getJoao() {
  return joao;
}

function getMaria() {
  return maria;
}

function setJoao(n) {
  if (n < 0) {
    joao = 0;
  } else {
    joao = n;
  }
}

function setMaria(n) {

    if (n < 0) {
        maria = 0;
    } else {    
        maria = n;
    }
}

function deJoaoParaMaria() {
    maria += joao;
    joao = 0;
}

function deMariaParaJoao() {    
    joao += maria;
    maria = 0;
}

export { getJoao, getMaria, setJoao, setMaria, deJoaoParaMaria, deMariaParaJoao };