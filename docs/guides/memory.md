---
sidebar_position: 7
---

# Análisis de uso de memoria con Memory

La pestaña **Memory** es una herramienta avanzada que te permite inspeccionar cómo tu aplicación web utiliza la memoria del sistema. Aunque no es tan usada como otras pestañas, es clave para identificar problemas de rendimiento relacionados con el consumo excesivo de memoria o *memory leaks* (fugas de memoria).

---

## ¿Para qué sirve Memory?

Con esta pestaña puedes:

- Ver cuánta memoria consume tu aplicación.
- Detectar objetos que no se liberan de memoria.
- Analizar cómo crecen ciertas estructuras en tiempo real.
- Identificar *memory leaks* y optimizar el uso de recursos.

---

## Tipos de perfiles de memoria

Al hacer un análisis, puedes elegir entre tres tipos principales de perfiles:

### 1. Heap Snapshot
Toma una “foto” de la memoria en un momento específico. Ideal para:

- Ver todos los objetos en memoria.
- Comparar snapshots antes y después de una acción para ver qué objetos permanecen.

### 2. Allocation Instrumentation on Timeline
Graba la actividad de memoria a lo largo del tiempo. Útil para:

- Detectar si hay crecimiento constante de objetos (posible fuga de memoria).
- Analizar qué partes del código están generando más carga.

### 3. Allocation Sampling
Ofrece una visión más ligera y rápida del uso de memoria, con menor impacto en el rendimiento durante la medición.

---

## ¿Cómo tomar un snapshot?

1. Abre la pestaña **Memory**.
2. Selecciona `Heap snapshot`.
3. Haz clic en el botón **Take snapshot**.
4. Interactúa con la app (si deseas) y toma más snapshots para comparar.

Podrás filtrar por clases, tipos de objeto y ver las referencias que mantienen vivos a los objetos.

---

## Detectar fugas de memoria

Una *fuga de memoria* ocurre cuando tu código mantiene referencias a objetos que ya no deberían existir, impidiendo que el recolector de basura (Garbage Collector) los elimine.

### Indicadores comunes:
- El uso de memoria sigue aumentando con el tiempo.
- Objetos que deberían destruirse siguen apareciendo en snapshots.
- Listas o estructuras que nunca se vacían.

---

## Consejos para analizar memoria

- Compara dos snapshots antes y después de una acción para ver qué objetos permanecen.
- Presta atención a listas grandes o estructuras que crecen sin control.
- Observa el panel de referencias para entender qué está reteniendo los objetos.
- Usa `window.performance.memory` en la consola para acceder a datos básicos de uso de memoria.

---

## Buenas prácticas para evitar fugas

- Elimina *event listeners* cuando ya no se necesiten.
- Cierra intervalos o timers (`setInterval`, `setTimeout`) correctamente.
- No almacenes referencias innecesarias en variables globales.
- Usa herramientas como `WeakMap` o `WeakSet` cuando sea posible para referencias que no bloqueen la recolección de basura.

