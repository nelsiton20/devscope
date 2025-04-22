--- 
sidebar_position: 5
---

# Acceso y edición del Local Storage y Session Storage

Los navegadores modernos permiten almacenar datos localmente usando el **Local Storage** y el **Session Storage**. Esto es útil para guardar información como preferencias de usuario, temas visuales, tokens de sesión, entre otros, sin necesidad de consultar un servidor cada vez.

Con las DevTools puedes inspeccionar, editar y eliminar fácilmente estos datos.

---

## ¿Dónde se encuentran?

1. Abre las **DevTools** (F12).
2. Ve a la pestaña **Application**.
3. En el panel izquierdo, dentro de la sección **Storage**, verás:
   - **Local Storage**
   - **Session Storage**
4. Haz clic en alguno para visualizar las claves y valores almacenados por el sitio actual.

---

## Diferencias clave

| Característica     | Local Storage            | Session Storage              |
|--------------------|--------------------------|------------------------------|
| Persistencia       | Permanente (hasta que se borre) | Solo durante la sesión del navegador |
| Alcance            | Disponible en todas las pestañas del mismo origen | Solo en la pestaña actual    |
| Capacidad          | ~5MB                     | ~5MB                         |

---

## Cómo leer datos

Puedes usar la consola para acceder a los datos almacenados:

```js
// Local Storage
console.log(localStorage.getItem("usuario"));

// Session Storage
console.log(sessionStorage.getItem("tema"));
```

---

## Cómo modificar valores
Desde la pestaña **Application**:
1. Haz doble clic en una celda de la tabla para editar su valor.
2. Presiona Enter para guardar.

Desde la consola:
```js
localStorage.setItem("tema", "oscuro");
sessionStorage.setItem("idioma", "es");
```

---

## Cómo eliminar datos
Desde DevTools:
- Haz clic derecho sobre una clave y selecciona **Delete**.
- O haz clic en **Clear All** para eliminar todos los datos de esa sección.

Desde la consola:
```js
localStorage.removeItem("usuario");
sessionStorage.clear(); // Borra todo
```

---

## Casos de uso comunes
- Guarda el token de autenticación después del login.
- Recordar la preferencia del usuario (modo oscuro/claro).
- Almacenar valores temporales de formularios.

---

## Recomendaciones
- No almacenes datos sensibles (como contraseñas) en Local o Session Storage.
- Usa el almacenamiento como herramienta de soporte, no como única fuente de verdad.
- Limpia los datos cuando ya no sean necesarios para evitar errores futuros.

