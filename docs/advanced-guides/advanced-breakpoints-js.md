---
sidebar_position: 1
---

# Uso de Breakpoints avanzados en JavaScript

Los breakpoints avanzados son una herramienta poderosa dentro de DevTools que te permiten pausar la ejecución de tu código en situaciones muy específicas. Esto resulta útil para detectar bugs complejos, observar el flujo de ejecución o entender mejor cómo interactúan los eventos en tu aplicación.

---

## ¿Qué es un breakpoint?

Un *breakpoint* es un punto en el código donde el navegador se detiene automáticamente durante la ejecución de JavaScript, permitiéndote inspeccionar el estado actual: variables, llamadas, contexto, etc.

---

## Tipos de breakpoints en DevTools

### 1. **Breakpoints estándar**
Se colocan haciendo clic en el número de línea en la pestaña **Sources**. Son útiles para pausar en un punto específico del código.

---

### 2. **Conditional breakpoints**
Permiten pausar la ejecución solo si se cumple una condición lógica.

**Cómo usarlo:**
- Haz clic derecho sobre el número de línea en el panel **Sources**.
- Elige **"Add conditional breakpoint..."**.
- Ingresa una condición, por ejemplo:  
  ```js
  user.age > 18
  ```  

---

### 3. DOM breakpoints
Se utilizan para pausar cuando un nodo del DOM cambia.

**Pasos:**
1. Ve a la pestaña **Elements** y selecciona el nodo que deseas observar.
2. Haz clic derecho > **Break on...**
3. Elige entre:
    - Subtree modifications
    - Attribute modifications
    - Node removal

Ideal para detectar cambios inesperados en el DOM.

--- 

### 4. XHR/Fetch breakpoints
Se activan cuando una solicitud XHR o Fetch ocurre.

**Pasos:**
1. Ve a la pestaña **Sources**.
2. En la barra lateral derecha, busca la sección **XHR/fetch Breakpoints**.
3. Haz clic en **"+"** y coloca una parte de la URL o déjalo vacío para capturar cualquier llamada.

--- 

### 5. Event Listener breakpoints
Permiten pausar la ejecución cuando ocurre un evento específico (como `click`, `scroll`, `input`, etc.).

**Pasos:**
1. En la pestaña **Sources**, busca la sección **Event Listener Breakpoints**.
2. Marca el evento deseado (por ejemplo, `click` → `Mouse` → `click`).
3. DevTools pausará cuando ese evento ocurra en cualquier parte del documento.

---

### 6. Exception breakpoints
Puedes pausar la ejecución cuando se lanza una excepción (error) en tu aplicación.

**Cómo activarlo:**
- En el panel **Sources**, arriba a la derecha activa:
    - **Pause on exceptions** (pausa en cualquier error).
    - **Pause on caught exceptions** (también en errores dentro de bloques `try...catch`).

--- 

## ¿Por qué usarlos?
Estos breakpoints te permiten:
- Depurar más rápido sin necesidad de añadir muchos `console.log`.
- Detectar errores complejos relacionados a interacciones asincrónicas o de eventos.
- Observar cambios invisibles o inesperados en el DOM.
- Pausar justo antes de que se realice una llamada de red.

---

## Consejos finales
- Usa breakpoints condicionales cuando quieras pausar solo en ciertos casos.
- Combínalos con el panel **Call Stack** para rastrear el origen de una ejecución.
- No olvides quitar breakpoints cuando termines tu análisis para evitar interrupciones inesperadas.