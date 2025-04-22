---
sidebar_position: 1
---

# Depuración de errores con la Console

La pestaña **Console** del navegador es una de las herramientas más utilizadas para depurar código JavaScript. Nos permite ver mensajes, errores, advertencias e incluso interactuar con los elementos del DOM en tiempo real.

## ¿Qué aprenderás?
- Interpretar errores y advertencias.
- Usar métodos de la consola para mostrar información.
- Ejecutar comandos directamente desde el navegador.
- Leer e inspeccionar objetos y variables en tiempo real.

---

## Interpretar errores comunes

Cuando el navegador encuentra un error en tu código, este aparece listado en la consola con un mensaje y un archivo fuente con número de línea. Algunos errores comunes son:

- `Uncaught TypeError`: estás intentando acceder o ejecutar algo que no es una función o propiedad válida.
- `Uncaught ReferenceError`: estás usando una variable que no ha sido declarada.
- `SyntaxError`: error de sintaxis, como olvidar cerrar una llave o usar mal los paréntesis.

**Ejemplo:**
```js
console.log(nombre); // Uncaught ReferenceError: nombre is not defined
```

---

## Métodos útiles de `console`
Puedes usar la consola para mostrar información personalizada durante el desarrollo:

```js
console.log("Hola mundo");         // Mensaje normal
console.warn("Esto es una advertencia"); // Mensaje en amarillo
console.error("Esto es un error"); // Mensaje en rojo
console.info("Información útil");  // Mensaje con ícono informativo
```

---

## Tablas y objetos
Puedes inspeccionar mejor los datos con `console.table()` o `console.dir()`:

```js
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 }
];

console.table(usuarios); // Muestra los objetos en formato de tabla
```

---

## Ejecutar código directamente en la consola
Puedes escribir cualquier código JavaScript directamente en la consola para probar ideas rápidamente o inspeccionar el estado actual de la aplicación:

```js
document.querySelector("h1").textContent = "Modificado desde la consola";
```

También puedes acceder a elementos seleccionados recientemente usando `$0`, `$1`, etc., donde $0 es el último elemento inspeccionado en la pestaña _Elements_.

--- 

## Sugerencias prácticas
- Usa `console.log()` para ver el contenido de variables en distintas partes de tu código.
- Usa `console.log()` para limpiar la consola si hay mucho ruido o contenida en ella.
- Si necesitas depurar en condiciones específicas, combina con `if`:

```js
if (usuario.rol === "admin"){
    console.log("Acceso de administrador");
}
```

---

## Conclusión
La consola es tu primer aliada al momento de depurar. Aprovecha sus funciones para entender mejor cómo se comporta tu código y encontrar errores más rápido.

👉En la próxima guía aprenderás a usar la pestaña **Elements** para inspeccionar y modificar el contenido de una página en tiempo real.