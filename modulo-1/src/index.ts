import {
  calcularMedia,
  calcularMediana,
  filtrarAtipicos
} from "./math-utils.js";

const datos = [10, 12, 13, 100, 11, 9];

console.log("Datos:", datos);
console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Sin atípicos:", filtrarAtipicos(datos, 20));