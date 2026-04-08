import { generarReporte } from "./domain/generar-reporte.js";
import type { EstadoMatricula } from "./domain/types/estado-matricula.js";
import type { Asignatura } from "./domain/types/asignatura.js";

const asignaturas: Asignatura[] = [
  { codigo: "DAM01", nombre: "Programación", creditos: 6 },
  { codigo: "DAM02", nombre: "Bases de Datos", creditos: 6 }
];

const estado: EstadoMatricula = {
  tipo: "ACTIVA",
  asignaturas
};

console.log(generarReporte(estado));