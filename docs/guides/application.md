---
sidebar_position: 4
---

# Gestión de almacenamiento y recursos con Application

La pestaña **Application** en las herramientas de desarrollo del navegador permite visualizar y administrar los recursos que tu aplicación web guarda en el navegador del usuario. Es muy útil cuando trabajas con almacenamiento local, cookies, caché, y configuraciones relacionadas con PWA (Progressive Web Apps).

---

## ¿Para qué sirve?
Desde esta pestaña puedes inspeccionar:
- Cookies
- Local Storage y Session Storage
- IndexedDB y Web SQL
- Archivos guardados en caché
- Manifest y Service Workers (para PWA)

Esta pestaña es clave cuando tu aplicación necesita guardar información en el navegador, o cuando quieres asegurarte de que se está almacenando y recuperando correctamente.

---

## Local Storage y Session Storage

Ambos son mecanismos de almacenamiento clave-valor proporcionados por el navegador:

- **Local Storage**: persiste incluso después de cerrar la pestaña o navegador.
- **Session Storage**: solo vive mientras la pestaña esté abierta.

Puedes inspeccionar, editar, eliminar y agregar valores desde el panel lateral izquierdo en la sección **Storage > Local Storage / Session Storage**.

> Ejemplo:
```javascript
localStorage.setItem("usuario", "Nelson");
sessionStorage.setItem("tema", "oscuro");
```

---

## Cookies
Las cookies son pequeños archivos que el servidor o el cliente pueden almacenar para guardar datos de sesión, preferencias de usuario o tokens de autenticación.

Desde el panel **Cookies**, puedes:
- Ver todas las cookies guardadas por el sitio actual.
- Observar detalles como su valor, dominio, fecha de expiración, y si están marcadas como `Secure` o `HttpOnly`.
- Eliminar cookies individualmente o todas a la vez.

--- 

## IndexedDB
Es una base de datos más compleja que permite almacenar objetos estructurados. Ideal para aplicaciones web avanzadas que requieren almacenar grandes volúmenes de datos (por ejemplo, apps offline).

Desde esta sección puedes:

- Ver las bases de datos y sus objetos almacenados.
- Explorar registros en forma de tabla.
- Borrar objetos o bases completas.

--- 

## Application Cache y Cache Storage
Aunque **Application Cache** está obsoleto, **Cache Storage** es la alternativa moderna y segura, usada comúnmente junto a los Service Workers.

Aquí puedes inspeccionar los recursos que la app ha cacheado para su uso offline (como HTML, JS, imágenes, etc.).

--- 

## Manifest y Service Workers
Si estás trabajando con una Progressive Web App (PWA), estos dos elementos son esenciales:

- **Manifest**: define íconos, nombre, color de tema, y cómo se comporta la app cuando se instala.
- **Service Workers**: scripts que corren en segundo plano, permiten funciones offline, manejo de notificaciones push, y más.

En esta pestaña puedes:
- Ver si el _service worker_ está activo.
- Actualizarlo o detenerlo manualmente.
- Ver el archivo `manifest.json` y sus configuraciones.

--- 

## Casos de uso comunes
- Verificar si los datos se están almacenando correctamente.
- Borrar rápidamente el almacenamiento local o cookies durante pruebas.
- Analizar qué guarda tu app cuando se trabaja sin conexión.
- Detectar errores relacionados al almacenamiento (por ejemplo, cuando los datos no persisten o se borran inesperadamente).