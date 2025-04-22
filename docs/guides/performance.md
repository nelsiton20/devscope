---
sidebar_position: 5
---

# Análisis de rendimiento con Performance

La pestaña **Performance** permite medir y entender cómo se comporta tu sitio web durante la carga y mientras el usuario interactúa con él. Es esencial para optimizar tiempos de respuesta, identificar cuellos de botella y mejorar la experiencia del usuario.

---

## ¿Qué se puede hacer con Performance?

Con esta herramienta puedes:

- Grabar la actividad del navegador durante la carga de la página o una interacción específica.
- Identificar operaciones lentas de JavaScript.
- Medir el uso de la CPU.
- Detectar tareas pesadas que bloquean el hilo principal.
- Analizar cuándo y cómo se renderizan los elementos en pantalla.

---

## Cómo iniciar una grabación

1. Abre la pestaña **Performance**.
2. Haz clic en el botón de grabar (círculo rojo).
3. Interactúa con tu sitio web o recarga la página.
4. Detén la grabación haciendo clic nuevamente en el botón.

El navegador generará una línea de tiempo detallada que podrás analizar.

---

## Entendiendo la línea de tiempo

La grabación incluye varias secciones:

- **FPS** (Frames por segundo): muestra la fluidez del renderizado.
- **CPU**: indica la carga del procesador.
- **Network**: actividad de red durante la grabación.
- **Main Thread**: tareas ejecutadas por el hilo principal, como scripts, renderizado, estilo, etc.
- **Timings**: eventos como `DOMContentLoaded` o `Load`.

Cada tarea aparece como una barra horizontal. Las barras más largas indican procesos más pesados o lentos.

---

## Identificación de problemas comunes

- **JavaScript pesado**: si ves bloques grandes en el hilo principal (Main), puede haber funciones o scripts que tarden mucho en ejecutarse.
- **Renderizado lento**: operaciones como aplicar estilos o dibujar en pantalla pueden volverse costosas si el DOM es muy grande o hay animaciones mal optimizadas.
- **Baja tasa de FPS**: si cae por debajo de 60 fps, el sitio puede sentirse lento o con saltos.

---

## Consejos prácticos

- Usa la grabación en dispositivos de gama media o simulando redes lentas para encontrar problemas reales.
- Filtra por secciones para centrarte solo en `Scripting`, `Rendering`, `Painting`, etc.
- Usa los eventos clave (como `DOMContentLoaded`) para entender cuándo ocurren ciertas acciones.

---

## Herramientas adicionales dentro de Performance

- **Screenshots**: puedes ver miniaturas de cómo iba cargando la página.
- **Flame Chart**: visualización de llamadas de función, ideal para detectar qué función está consumiendo más recursos.
- **Summary**: te da una vista rápida del tipo de procesos que dominaron durante la grabación (JS, estilo, render, etc).

