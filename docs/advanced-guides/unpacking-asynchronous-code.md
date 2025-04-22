---
sidebar_position: 2
---

# Depuración de código asincrónico

La depuración de código asincrónico puede ser un verdadero reto. Funciones como `setTimeout`, `setInterval`, `fetch`, `promesas`, `async/await` y manejadores de eventos ejecutan código de forma no secuencial, lo que puede dificultar entender qué ocurre y cuándo. Por suerte, las DevTools ofrecen funcionalidades específicas para lidiar con estos casos.

---

## ¿Qué es el código asincrónico?

El código asincrónico se ejecuta *fuera del flujo principal*. Esto significa que el navegador no espera a que una operación termine antes de continuar con la siguiente línea de código.

Ejemplo clásico:
```js
console.log("Inicio");
setTimeout(() => {
  console.log("Esto se ejecuta después");
}, 1000);
console.log("Fin");
```

---

## Cómo depurar código asincrónico en DevTools

### 1. Consola y logs intercalados
Una primera forma básica de inspeccionar el flujo asincrónico es intercalar console.log con etiquetas claras. Pero para análisis más precisos, se recomiendan los siguientes pasos:

### 2. Habilitar la opción 'Async Stack Traces'
DevTools puede mantener el seguimiento del call stack asincrónico, lo cual te permite ver de dónde se originó una promesa o evento asincrónico.

**Pasos:**
1. Abre DevTools.
2. Ve a la pestaña Settings (ícono de engranaje).
3. En la sección Sources, activa:
    ✅ _Enable async stack traces_

Esto te mostrará el rastro completo, incluso cuando el salto en la ejecución ocurra en una promesa o `setTimeout`.

### 3. Uso de breakpoints en código asincrónico
Coloca breakpoints dentro de:
- Callbacks de `setTimeout` o `setInterval`
- Funciones `.then()` o `.catch()` de promesas
- Funciones `async`/`await`

DevTools pausará cuando ese bloque se ejecute, permitiéndote inspeccionar el estado de variables, el entorno, y ver la pila de llamadas asincrónica.

### 4. Inspección de promesas desde la Consola
Puedes inspeccionar el estado de una promesa directamente en la consola:

```js
let prom = fetch("https://api.ejemplo.com");
```

Luego escribe:
```js
prom
```

DevTools te mostrará si está pendiente, resuelta o rechazada. También puedes hacer click sobre ella para ver su contexto.

### 5. Usar `debugger`; para pausar manualmente
Otra técnica útil es insertar manualmente la palabra `debugger` en un bloque asincrónico:

```js
async function cargarDatos(){
    const res = await fetch("https://api.ejemplo.com");
    debugger; // DevTools pausará aquí
    const datos = await res.json();
    console.log(datos);
}
```

---

## Buenas prácticas para depurar asincronía
- Nombra tus funciones asincrónicas para poder reconocerlas fácilmente en el _Call Stack_.
- Divide tu código complejo en funciones pequeñas y reutilizables.
- Usa herramientas como `Promise.all` con cuidado: una sola promesa rechazada puede romper todo el flujo.

---

## ¿Qué evitar?
- No confiar únicamente en `console.log`, ya que puede mostrar valores obsoletos si se imprimen antes de que ocurra una operación.
- No asumir que la ejecución es secuencial. Siempre hay que considerar posibles _race conditions_ o retrasos.