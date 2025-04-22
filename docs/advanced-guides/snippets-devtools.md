---
sidebar_position: 3
---

# Uso de Snippets en DevTools

Los Snippets son pequeños fragmentos de código JavaScript que puedes guardar y ejecutar directamente desde las DevTools. Son como pequeños scripts personalizados que te permiten automatizar tareas, hacer pruebas rápidas o inspeccionar el estado de una página sin modificar el código fuente original.

---

## ¿Dónde encuentro los Snippets?

1. Abre las **DevTools** (F12 o clic derecho → Inspeccionar).
2. Ve a la pestaña **Sources**.
3. En el panel lateral izquierdo, haz clic en **Snippets**.
4. Haz clic derecho y selecciona **New** para crear uno nuevo.
5. Dale un nombre y empieza a escribir tu código JavaScript.

---

## ¿Cómo ejecuto un Snippet?

Después de escribir tu código en el snippet, simplemente:
- Haz clic derecho sobre el archivo y selecciona **Run**.
- O presiona `Ctrl + Enter` (Windows/Linux) o `Cmd + Enter` (Mac) mientras tienes el snippet abierto.

---

## ¿Para qué se usan?

### ✅ Automatizar tareas

Ejemplo: Quitar todos los banners o anuncios molestos de una página con un solo clic.

```js
document.querySelectorAll('.ad, .popup, .banner').forEach(el => el.remove());
```

### ✅ Obtener rápidamente información de la página
Ejemplo: Listar todos los enlaces de una página.

```js
const links = Array.from(document.querySelectorAll('a')).map(a => a.href);
console.log(links);
```

### ✅ Probar código sin modificar archivos fuente
Puedes usar Snippets para probar una función compleja, validar estructura de daatos, medir tiempos de respuestas, etc., todo sin tocar el código fuente de la aplicación.

### ✅ Medir rendimiento
Ejemplo: Ver cuánto tarda una operación:

```js
console.time("Proceso");
for(let i = 0; i < 1000000; i++) {}
console.timeEnd("Proceso");
```

---

## ¿Snippets vs Consola?
| Consola | Snippets |
|---------|----------|
| Se borra al recargar la página | Se mantienen guardados |
| Para pruebas rápidas y puntuales | Para tareas repetitivas o reutilizables |
| No permite guardar código de forma persistente | Sí permite guardar y ejecutar múltiples veces |

--- 

## Recomendaciones
- Guarda snippets útiles en tu navegador y reutilízalos entre proyectos.
- Agrupa snippets por tema (accesibilidad, limpieza del DOM, rendimiento, etc.).
- No olvides borrar snippets que ya no usas para mantener tu panel limpio.

--- 

## Importante
Los Snippets se ejecutan en el contexto de la página actual, por lo que tienen acceso al DOM, a las variables globales y a las funciones definidas en el sitio que estás inspeccionando.