---
sidebar_position: 4
---

# Monitoreo de rendimiento con Lighthouse

Lighthouse es una herramienta automatizada de código abierto integrada en las Chrome DevTools. Permite auditar una página web en diferentes aspectos como rendimiento, accesibilidad, buenas prácticas, SEO y compatibilidad con aplicaciones web progresivas (PWA).

---

## ¿Cómo acceder a Lighthouse?

1. Abre las DevTools (F12 o clic derecho → Inspeccionar).
2. Ve a la pestaña **Lighthouse**.
3. Selecciona las categorías que deseas auditar (Performance, Accessibility, etc.).
4. Elige si deseas ejecutar la auditoría en modo **móvil** o **escritorio**.
5. Haz clic en **Analyze page load** para generar el reporte.

---

## Categorías disponibles

- **Performance**: Mide qué tan rápido carga tu sitio.
- **Accessibility**: Evalúa si tu sitio es accesible para usuarios con discapacidades.
- **Best Practices**: Revisa si estás usando buenas prácticas de desarrollo.
- **SEO**: Analiza si tu sitio es fácilmente rastreable por motores de búsqueda.
- **Progressive Web App**: Revisa si tu app cumple con los requisitos para comportarse como una aplicación instalada.

---

## ¿Qué información entrega?

El reporte de Lighthouse ofrece:

- Una puntuación general por cada categoría (de 0 a 100).
- Recomendaciones detalladas con enlaces para aprender más.
- Datos del tiempo de carga real como *First Contentful Paint*, *Largest Contentful Paint*, *Speed Index*, entre otros.
- Diagnósticos que te ayudan a identificar problemas y cómo solucionarlos.

---

## Ejemplo de uso práctico

Supongamos que una web carga lento en dispositivos móviles. Al ejecutar Lighthouse puedes descubrir que:

- Hay imágenes sin comprimir.
- El CSS no está minificado.
- Existen scripts que bloquean el renderizado.

Gracias a esta información puedes tomar decisiones técnicas precisas para mejorar el tiempo de carga.

---

## Tips para sacarle el máximo provecho

- Ejecuta la auditoría en modo Incógnito para evitar interferencias de extensiones.
- Realiza la prueba varias veces y promedia los resultados.
- Guarda los reportes y compáralos en el tiempo para evaluar mejoras.

---

## Exportar resultados

Puedes exportar el reporte generado en formato **HTML**, **JSON** o **Markdown** para compartirlo o documentar avances en un proyecto.

---

## Ideal para…

- Desarrolladores que quieren optimizar su sitio antes de lanzarlo.
- Equipos que trabajan en rendimiento y accesibilidad.
- Freelancers que desean entregar un diagnóstico profesional a sus clientes.

