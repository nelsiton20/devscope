---
sidebar_position: 3
---

# Análisis de red con Network

La pestaña **Network** del navegador es fundamental para analizar las solicitudes que realiza una página web. Desde archivos HTML, CSS y JS, hasta imágenes, fuentes o peticiones AJAX, todo puede ser rastreado y examinado en esta sección.

---

## ¿Para qué sirve?

Al cargar una página, el navegador realiza múltiples solicitudes para traer todos los recursos necesarios. La pestaña Network permite:

- Ver cada solicitud realizada.
- Medir el tiempo de carga.
- Ver el tipo de recurso y su estado.
- Analizar errores de red o tiempos lentos de respuesta.

---

## Lo básico de la pestaña Network

Al abrir esta pestaña y recargar la página, verás una lista de todos los recursos cargados. Cada fila representa una solicitud con información como:

- **Name**: nombre del archivo solicitado.
- **Status**: código de estado HTTP (200, 404, 500, etc).
- **Type**: tipo de recurso (documento, script, hoja de estilo, imagen...).
- **Initiator**: qué parte del código originó la solicitud.
- **Time**: tiempo que tardó la solicitud.

También puedes ver una barra de colores que representa gráficamente cuánto tardó en completarse cada etapa de la solicitud.

---

## Filtrar solicitudes

Puedes filtrar los resultados por tipo de archivo usando los botones: `JS`, `CSS`, `Img`, `XHR`, `Doc`, entre otros. Esto es útil si solo quieres ver, por ejemplo, las peticiones AJAX o los scripts.

---

## Analizar detalles de una solicitud

Al hacer clic sobre una solicitud, se abre una vista con varios paneles:

- **Headers**: muestra las cabeceras enviadas y recibidas.
- **Preview**: vista previa del contenido (si es legible).
- **Response**: respuesta real del servidor.
- **Timing**: desglose del tiempo total que tomó la solicitud.
- **Cookies**: cookies asociadas a la solicitud (si las hay).

---

## Uso común: revisar errores de carga

Si tu página no está funcionando correctamente, puedes detectar fácilmente errores como:

- Recursos no encontrados (`404`).
- Solicitudes bloqueadas por CORS.
- Tiempo de respuesta demasiado alto.
- Problemas al cargar una API externa.

---

## Consejos prácticos

- Marca la opción **Preserve log** si no quieres que se borre la lista de solicitudes al recargar.
- Usa **Disable cache** para que los recursos se vuelvan a solicitar desde el servidor cada vez.
- Si una página se carga lentamente, revisa en **Timing** dónde se está tardando más.
- Puedes exportar la información de red como archivo HAR para analizarla después o compartirla con otros desarrolladores.

