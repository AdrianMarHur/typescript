import type { EstadoMatricula } from "./types/estado-matricula.js";

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas`;

    case "SUSPENDIDA":
      return `Matrícula suspendida. Motivo: ${estado.motivo}`;

    case "FINALIZADA":
      return `Matrícula finalizada con nota media ${estado.notaMedia}`;

    default: {
      const comprobacionExhaustiva: never = estado;
      return comprobacionExhaustiva;
    }
  }
}