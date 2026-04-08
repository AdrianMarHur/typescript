export function generarReporte(estado) {
    switch (estado.tipo) {
        case "ACTIVA":
            return `Matrícula activa con ${estado.asignaturas.length} asignaturas`;
        case "SUSPENDIDA":
            return `Matrícula suspendida. Motivo: ${estado.motivo}`;
        case "FINALIZADA":
            return `Matrícula finalizada con nota media ${estado.notaMedia}`;
        default: {
            const comprobacionExhaustiva = estado;
            return comprobacionExhaustiva;
        }
    }
}
//# sourceMappingURL=generar-reporte.js.map