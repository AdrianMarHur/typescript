import { obtenerRecurso } from "./services/api-client.js";
async function main() {
    const respuesta = await obtenerRecurso("/estudiantes/1");
    if (respuesta.exito) {
        console.log(respuesta.datos.nombreCompleto);
    }
}
main();
//# sourceMappingURL=index.js.map