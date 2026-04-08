export function obtenerRecurso(endpoint) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulación de respuesta según endpoint
            const respuesta = {
                codigoEstado: 200,
                exito: true,
                datos: {
                    nombreCompleto: "Juan Pérez",
                    edad: 22,
                    carrera: "Ingeniería en Sistemas",
                }
            };
            resolve(respuesta);
        }, 1000);
    });
}
//# sourceMappingURL=api-client.js.map