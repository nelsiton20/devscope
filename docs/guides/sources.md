---
sidebar_position: 6
---

# Exploración y depuración de código con Sources

La pestaña **Sources** es una de las más poderosas dentro de las herramientas de desarrollo. Permite inspeccionar, depurar y administrar los archivos que tu sitio web carga en el navegador. Desde aquí puedes poner puntos de interrupción (*breakpoints*), observar el flujo de ejecución del código, y manipularlo para fines de prueba.

---

## ¿Qué puedes hacer en Sources?

- Ver todos los archivos (HTML, CSS, JS, imágenes, etc.) que carga tu sitio web.
- Depurar código JavaScript paso a paso.
- Usar breakpoints para detener la ejecución del código.
- Editar archivos en tiempo real directamente desde el navegador.
- Agregar *snippets* (fragmentos de código que puedes ejecutar).

---

## Estructura de la pestaña

- **File Navigator (izquierda)**: estructura de carpetas y archivos del sitio.
- **Editor (centro)**: donde puedes leer y modificar el contenido del archivo seleccionado.
- **Panel inferior**: muestra variables, *watch expressions*, *call stack* y puntos de interrupción.

---

## Uso de Breakpoints

Un *breakpoint* es un punto en el que quieres que el navegador pause la ejecución del código. Esto te permite ver el valor de las variables, seguir el flujo lógico, y encontrar errores.

### ¿Cómo agregar uno?

1. Abre un archivo JavaScript desde el File Navigator.
2. Haz clic en el número de línea donde deseas pausar la ejecución.
3. Interactúa con tu sitio para que ese código se ejecute.
4. El navegador se detendrá en ese punto.

Desde allí, puedes:
- Ver valores de variables.
- Avanzar paso a paso (`Step over`, `Step into`, `Step out`).
- Revisar el *call stack* y entender qué función llamó a cuál.

---

## Snippets

Los **Snippets** son pequeños fragmentos de código JavaScript que puedes escribir y ejecutar directamente desde el navegador, como si fueran funciones personalizadas.

### ¿Cómo crear uno?

1. Ve a la pestaña **Sources** > sección **Snippets**.
2. Crea un nuevo archivo y escribe tu código.
3. Haz clic derecho y selecciona **Run**.

> Ejemplo básico:
```javascript
console.log("¡Hola desde un snippet!");
```

---

## Modificaciones temporales
Puedes hacer cambios temporales en archivos JavaScript o CSS directamente desde el editor. Aunque estos cambios no afectan el servidor real, te permiten probar soluciones rápidas sin necesidad de editar el código fuente desde tu editor local.

--- 

## Casos de uso comunes
- Depurar errores complejos que no se resuelven solo con `console.log()`.
- Ver cómo fluye el código cuando se dispara un evento.
- Probar posibles soluciones a errores sin modificar tu código real.
- Ejecutar scripts personalizados con Snippets.

---

## Bonus: Experimentos con el flujo de ejecución
Intenta colocar un breakpoint dentro de un `addEventListener`, o dentro de una función `fetch`, y observa cómo se comporta la ejecución paso a paso. Esto te dará una mejor comprensión del asincronismo en JavaScript.
