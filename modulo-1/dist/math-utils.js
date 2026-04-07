export function calcularMedia(valores) {
    if (valores.length === 0) {
        return null;
    }
    const suma = valores.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / valores.length;
}
export function calcularMediana(valores) {
    if (valores.length === 0) {
        return null;
    }
    const ordenados = [...valores].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    if (ordenados.length % 2 === 0) {
        const izquierda = ordenados[mitad - 1];
        const derecha = ordenados[mitad];
        if (izquierda === undefined || derecha === undefined) {
            return null;
        }
        return (izquierda + derecha) / 2;
    }
    const central = ordenados[mitad];
    return central ?? null;
}
export function filtrarAtipicos(valores, limite) {
    const media = calcularMedia(valores);
    if (media === null)
        return [];
    return valores.filter((valor) => Math.abs(valor - media) <= limite);
}
//# sourceMappingURL=math-utils.js.map