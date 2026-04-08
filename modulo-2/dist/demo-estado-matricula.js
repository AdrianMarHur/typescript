import { generarReporte } from "./domain/generar-reporte.js";
const asignaturas = [
    { codigo: "DAM01", nombre: "Programación", creditos: 6 },
    { codigo: "DAM02", nombre: "Bases de Datos", creditos: 6 }
];
const estado = {
    tipo: "ACTIVA",
    asignaturas
};
console.log(generarReporte(estado));
//# sourceMappingURL=demo-estado-matricula.js.map