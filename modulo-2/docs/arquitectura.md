# Documentación del Modelo 2

## 1. Introducción

En este módulo se ha diseñado el modelo de datos de un sistema de gestión universitaria utilizando TypeScript estricto.  
El objetivo es definir estructuras de datos claras, seguras y escalables, detectando errores en tiempo de compilación y facilitando el mantenimiento del código.

---

## 2. Uso de `interface` para entidades del dominio

Para representar las entidades principales del sistema, como `Estudiante` y `Asignatura`, se ha optado por el uso de `interface`.

### Motivos para usar `interface`
- Representan **entidades del dominio**, no lógica.
- Definen contratos claros para objetos.
- Facilitan el tipado estructural (duck typing).
- Permiten extenderse en el futuro si el modelo crece.

En estas interfaces se ha aplicado el modificador `readonly` a los identificadores (`id`, `codigo`) para garantizar que la identidad de una entidad no pueda modificarse tras su creación.

Este enfoque refuerza la coherencia del dominio y evita errores por mutaciones accidentales.

---

## 3. Uso de `type` para uniones y estados

Para representar los distintos estados posibles de una matrícula se ha utilizado un `type alias` con una **unión discriminada**.

La estructura `EstadoMatricula` puede adoptar únicamente uno de estos estados:
- Activa
- Suspendida
- Finalizada

Cada estado incluye una propiedad literal `tipo` que actúa como discriminante.

### Ventajas del uso de uniones discriminadas
- Evitan estados incoherentes o inválidos.
- Permiten a TypeScript realizar _narrowing_ automático.
- Obligan a definir explícitamente todos los estados posibles del dominio.

Este patrón asegura que el sistema solo pueda representar situaciones válidas y controladas.

---

## 4. Diferenciación entre `interface` y `type`

En este módulo se ha seguido el criterio:
- `interface` → entidades y estructuras de datos del dominio.
- `type` → uniones, tipos compuestos y lógica de estados.

Esta diferenciación mejora la legibilidad del código y facilita su evolución conforme el sistema crece.

---

## 5. Uso de genéricos para abstracción de respuestas de red

Para el acceso a datos se ha diseñado un servicio genérico que devuelve respuestas tipadas mediante el uso de genéricos (`<T>`).

La interfaz `RespuestaAPI<T>` define un formato común de respuesta, independiente del tipo de datos contenido.

### Beneficios del uso de genéricos
- El servicio de datos no está acoplado a ningún modelo concreto.
- El tipo del payload se decide en el uso del servicio.
- Se mantiene un tipado fuerte en toda la cadena de datos.
- El código es reutilizable para múltiples recursos.

Gracias a este enfoque, la lógica de red queda abstraída del dominio, mejorando la flexibilidad y escalabilidad del sistema.

---

## 6. Conclusión

El modelo de datos diseñado en este módulo utiliza las capacidades de TypeScript para crear estructuras seguras, coherentes y fácilmente extensibles.

El uso adecuado de `interface`, `type` y genéricos permite representar fielmente el dominio del problema y reducir significativamente los errores en tiempo de ejecución.