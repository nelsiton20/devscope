---
sidebar_position: 2
---

# Inspección y ajustes de estilos con Elements

La pestaña **Elements** de las herramientas del navegador te permite inspeccionar el HTML y los estilos CSS aplicados a cada elemento del DOM. Es una herramienta esencial para depurar problemas visuales y hacer ajustes rápidos sin modificar el código fuente directamente.

---

## ¿Qué aprenderás?
- Inspeccionar la estructura HTML de una página.
- Ver y modificar estilos CSS en tiempo real.
- Identificar qué estilos provienen de qué archivo.
- Probar cambios de estilo sin modificar tu código fuente.

---

## Inspeccionando el HTML

Cuando abres la pestaña **Elements**, verás una representación estructurada del HTML de la página. Puedes:

- Desplegar o colapsar etiquetas para explorar la jerarquía.
- Hacer clic derecho sobre un elemento en la página y seleccionar **“Inspeccionar”** para ubicarlo directamente.
- Editar contenido HTML haciendo doble clic sobre una etiqueta o texto.

---

## Explorando los estilos CSS

Al seleccionar un elemento, en el panel derecho verás los estilos CSS aplicados. Aquí puedes:

- Ver propiedades heredadas y sobreescritas.
- Identificar en qué archivo o línea fue definida cada regla.
- Añadir, quitar o modificar propiedades CSS en tiempo real.

**Ejemplo:** Cambiar el color del texto
```css
color: red;
```

--- 

## Editar clases y estilso directamente
Puedes editar el atributo `class` de un elemento o agregar clases nuevas temporalmente. También puedes alternar la visibilidad de clases CSS usando las casillas de verificación junto a cada propiedad.

Además, puedes escribir nuevas reglas directamente desde el panel _Styles_:
1. Haz clic en una línea vacía en el panel.
2. Escribe la propiedad CSS
3. Presionar Enter y el cambio se verá reflejado de inmediato.

--- 

## Box Model: márgenes, bordes y más
En la parte inferior del panel de estilos encontrarás una visualización del **Box Model**. Esta herramienta te muestra gráficamente:

- **Content**: el contenido real del elemento.
- **Padding**: el espacio entre el contenido y el borde.
- **Border**: el borde del elemento.
- **Margin**: el espacio fuera del borde.

Puedes hacer clic sobre los valores para modificarlos directamente.

--- 

## Estado del elemento: :hover, :active, etc.
Puedes forzar estados del elemento como `:hover` o `:focus` desde el menú de tres puntos junto a "Styles" > **:hov**. Esto es útil para ver estilos que solo aparecen cuando el usuario interactúa con la página.

--- 

## Buenas prácticas
- Usa esta herramienta para experimentar con nuevos estilos antes de aplicarlos en tu código.
- Si ves un estilo tachado, significa que ha sido sobreescrito por una regla más específica.
- Anota los cambios útiles para luego pasarlos a tu archivo CSS definitivo.

--- 

## Conclusión
La pestaña Elements es esencial para todo desarrollador frontend. Con ella puedes inspeccionar la estructura del DOM y ajustar visualmente los estilos, lo que te permite entender y corregir el diseño de forma rápida y precisa.

👉 En la siguiente guía aprenderás a trabajar con la pestaña Network, donde podrás monitorear todas las solicitudes realizadas por tu página.