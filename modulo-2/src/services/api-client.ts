import type { RespuestaAPI } from "../domain/types/api-response.js";

export function obtenerRecurso<T>(
  endpoint: string
): Promise<RespuestaAPI<T>> {

  return new Promise((resolve) => {
    setTimeout(() => {

      // Simulación de respuesta según endpoint
      const respuesta: RespuestaAPI<T> = {
        codigoEstado: 200,
        exito: true,
        datos: {
        } as T
      };

      resolve(respuesta);

    }, 1000);
  });
}