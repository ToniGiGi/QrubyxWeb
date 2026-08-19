# QrubyxWeb - Handoff & Context Document

Este documento contiene todo el contexto arquitectónico, visual y técnico del proyecto **Qrubyx** hasta la fecha. Su propósito es servir como "memoria" para que nuevos agentes de IA puedan continuar el desarrollo sin perder la armonía del código ni el diseño establecido.

---

## 1. Stack Tecnológico
- **Framework:** React + Vite.
- **Estilos:** CSS Puro (Vanilla CSS). No se utilizan frameworks como Tailwind, Bootstrap o Material UI. Todo se maneja mediante módulos/archivos CSS por componente y variables CSS globales (`src/index.css`).
- **Despliegue:** Cloudflare Pages (conectado a la rama `main` de GitHub).

---

## 2. Reglas de Diseño (UI/UX)
El estilo visual de Qrubyx es **"Arquitectura Digital / Cyberpunk elegante"**.
- **Tema:** Dark mode estricto. Fondo principal: `#09090b`.
- **Glassmorphism:** Uso intensivo de tarjetas translúcidas con `backdrop-filter: blur(20px)`, fondos `rgba(255, 255, 255, 0.02)` y bordes sutiles.
- **Iluminación Neón:** Efectos de resplandor usando `box-shadow` y `filter: drop-shadow(...)`.
- **Colores Principales:**
  - Gradiente de la marca: Naranja (`#f97316`) -> Morado (`#a855f7`) -> Cyan (`#06b6d4`).
  - Acentos de tarjetas: Verde Qrubyx (`#10b981`) y Cyan Eléctrico (`#00e5ff`).
- **Regla Estricta de Legibilidad:** NUNCA usar texto morado/violeta oscuro sobre el fondo negro. Los textos deben ser blancos o grises (`var(--text-primary)`, `var(--text-secondary)`).
- **Branding (Importante):** El nombre de la empresa SIEMPRE se escribe **Qrubyx.** (con un punto final). El punto final suele llevar un color de acento o heredar el gradiente del texto principal.

---

## 3. Arquitectura del Proyecto
El proyecto utiliza una estructura orientada a *features*.
- **`src/features/`**: Contiene todos los componentes principales. Cada componente tiene su carpeta con su archivo `.jsx` y su `.css`.
  - `Header/`: Navbar inteligente (Smart Navbar) que se oculta al hacer scroll hacia abajo y reaparece al hacer scroll hacia arriba (`transform: translateY`).
  - `Hero/`: Sección principal con el título en gradiente, subtítulo, botón de "Proyectos" y botón de GitHub.
  - `TechStack/`: Carrusel infinito (Marquee) de tecnologías. Los logos (SVGs) tienen un efecto `drop-shadow` al hacer hover que respeta el canal alpha de la imagen.
  - `About/`: Sección "Conoce a Qrubyx." (Misión y Filosofía).

---

## 4. El Sistema de "Cables de Datos" (Ngrok Style)
La sección `About` (`src/features/About/`) tiene la ingeniería CSS más compleja del proyecto hasta ahora. 
- Contiene un sistema de **"Cables de Datos"** simulando fibra óptica.
- Los cables son líneas punteadas (`border: 2px dashed rgba(255, 255, 255, 0.15)`) con esquinas perfectamente redondeadas (`border-radius: 16px`).
- **Animaciones (`@keyframes`):**
  - Un paquete de datos (una bolita de luz brillante de 8x8px) viaja por estos cables.
  - Las matemáticas de la curva están calculadas en CSS para que la bolita trace la curva de 16px a la perfección sin salirse del cable.
  - **Sincronización:** El ciclo de la animación base es de 1.5s. Cada 3 ciclos (4.5s en total, usando `animation-delay`), un **barrido de reflejo de cristal (Shimmer)** cruza diagonalmente la tarjeta coincidiendo exactamente con el choque del paquete de datos.

---

## 5. Estado Actual y Próximos Pasos
**Componentes completados:** `Header`, `Hero`, `TechStack`, `About`.
**Componentes pendientes (Creados pero vacíos):** 
1. `src/features/Mascot/Mascot.jsx`: (¡PRÓXIMO PASO!) Esta sección está destinada a presentar a **"Qry"**, el gatito mascota tecnológico de la empresa.
2. `src/features/Projects/Projects.jsx`
3. `src/features/Services/Services.jsx`

**Instrucciones para el siguiente Agente:**
Comienza a trabajar en la sección `Mascot.jsx`. Asegúrate de leer este documento y mantener la armonía visual (Glassmorphism, luces neón sutiles, paleta de colores oscuros) que ya está establecida en los demás archivos `.css`.
