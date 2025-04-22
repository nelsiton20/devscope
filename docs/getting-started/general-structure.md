--- 
sibedar_position: 4
---

# Estructura general de las herramientas del navegador

Las herramientas del desarrollador (DevTools) están organizadas en pestañas, cada una enfocada en una parte específica del desarrollo y depuración web. A continuación te damos un vistazo general a las secciones más importantes:

## Elements

Permite inspeccionar y modificar la estructura del DOM y los estilos CSS aplicados a cada elemento. Es útil para entender cómo está construida visualmente una página, aplicar cambios en tiempo real, y detectar problemas de diseño.

## Console

Una consola interactiva donde puedes ver mensajes de error, advertencias, logs personalizados con `console.log()` y ejecutar comandos de JavaScript directamente. Es muy útil para depurar scripts y revisar el flujo del programa.

## Sources

Aquí puedes ver y explorar los archivos fuente de tu proyecto (HTML, JS, CSS, etc.). También puedes colocar *breakpoints* para depurar línea por línea y ver el estado de las variables en tiempo real.

## Network

Muestra todas las solicitudes que realiza la página: archivos cargados, llamadas a APIs, tiempos de carga, códigos de estado (como 200, 404, etc.). Es fundamental para entender cómo se comunican las aplicaciones con el servidor y detectar cuellos de botella.

## Performance

Permite grabar el comportamiento de la página para analizar su rendimiento. Puedes ver cómo se distribuyen los recursos, cuánto tiempo toma cada fase de carga, y detectar posibles cuellos de rendimiento.

## Application

Ofrece acceso a recursos como el almacenamiento local (`localStorage`, `sessionStorage`), cookies, bases de datos (`IndexedDB`), y archivos en caché. Es útil para verificar cómo una aplicación web almacena y maneja datos del usuario.

## Lighthouse (en algunos navegadores)

Es una herramienta de auditoría automatizada que analiza el rendimiento, accesibilidad, buenas prácticas y SEO de una página web. Proporciona un informe detallado con recomendaciones de mejora.

---

En las siguientes secciones exploraremos cada herramienta en profundidad, con ejemplos prácticos para que aprendas a sacarles el máximo provecho.
