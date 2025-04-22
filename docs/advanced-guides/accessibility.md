---
sidebar_position: 6
---

# Auditorías de accesibilidad básicas con DevTools

La accesibilidad web busca que las aplicaciones puedan ser utilizadas por el mayor número de personas posible, incluidas aquellas con discapacidades visuales, auditivas, cognitivas o motoras. Google Chrome ofrece herramientas dentro de DevTools para ayudarte a identificar y mejorar problemas de accesibilidad en tus páginas web.

---

## ¿Dónde se encuentra?

1. Abre **DevTools** (F12).
2. Dirígete a la pestaña **Elements**.
3. Selecciona cualquier elemento del DOM.
4. En el panel derecho, busca la sección **Accessibility**.
   - Si no está visible, haz clic en el ícono de engranaje ⚙️ (Settings) y habilita **Accessibility** desde “Experiments” o “Rendering”.

---

## ¿Qué puedes ver?

- **Nombre accesible del elemento**.
- **Roles**: Indican qué función tiene un elemento (por ejemplo, `button`, `link`, `textbox`).
- **Estados**: Como `aria-pressed`, `disabled`, `checked`, etc.
- **Propiedades ARIA**: Ayudan a describir elementos complejos a los lectores de pantalla.

---

## Uso del panel Lighthouse para accesibilidad

Además del panel de Elements, puedes usar **Lighthouse** para ejecutar una auditoría automática de accesibilidad:

1. Abre DevTools y ve a la pestaña **Lighthouse**.
2. Selecciona solo la categoría **Accessibility**.
3. Haz clic en **Analyze page load**.
4. Revisa los resultados, donde se listan problemas y sugerencias para corregirlos.

---

## Buenas prácticas básicas de accesibilidad

- Usa etiquetas semánticas como `header`, `nav`, `main`, `footer`.
- Asegúrate de que todos los botones y enlaces tengan textos descriptivos.
- Proporciona textos alternativos en las imágenes (`alt`).
- Mantén un contraste adecuado entre el texto y el fondo.
- Evita depender únicamente del color para transmitir información.
- Usa correctamente las propiedades `aria-*` solo cuando sea necesario.

---

## Inspeccionar enfoque (Focus)

En DevTools también puedes simular cómo navega un usuario usando solo el teclado:

1. Abre DevTools → pestaña **Rendering**.
2. Activa **Emulate focus** o **Show focus areas**.
3. Usa `Tab` para recorrer los elementos y ver qué elementos son alcanzables mediante teclado.

---

## Herramientas adicionales recomendadas

- [axe DevTools extension](https://www.deque.com/axe/devtools/): extensión gratuita para Chrome que analiza la accesibilidad directamente en tu navegador.
- [WAVE Evaluation Tool](https://wave.webaim.org/extension/): otra herramienta útil para revisar problemas visualmente.

---

## Reflexión

Una buena experiencia de usuario es aquella que está disponible para todos. Incorporar prácticas accesibles desde el desarrollo no solo mejora la calidad de tu producto, sino que también demuestra compromiso con la inclusión digital.

