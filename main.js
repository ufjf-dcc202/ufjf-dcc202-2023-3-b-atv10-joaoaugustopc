import { getMaria, getJoao, deJoaoParaMaria, deMariaParaJoao } from "./joaoEMaria.js";

console.log('módulo main');

console.log("Joao tem ",getJoao(), " maçãs!");
console.log("Maria tem ",getMaria(), " maçãs!");

deJoaoParaMaria();

console.log("Joao tem ",getJoao(), " maçãs!");
console.log("Maria tem ",getMaria(), " maçãs!");

deMariaParaJoao();

console.log("Joao tem ",getJoao(), " maçãs!");
console.log("Maria tem ",getMaria(), " maçãs!");