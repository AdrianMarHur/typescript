import { obtenerRecurso } from "./services/api-client.js";
import type { Estudiante } from "./domain/types/estudiantes.js";

async function main() {
  const respuesta = await obtenerRecurso<Estudiante>("/estudiantes/1");

  if (respuesta.exito) {
    console.log(respuesta.datos.nombreCompleto);
  }
}

main();
