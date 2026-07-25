# Atlas Errante — PWA

Juego de adivinar lugares del mundo:
- **Explorar**: Street View de Google (para las categorías con lugares curados:
  Todos, Capitales, Naturaleza, Mi continente, Desafío diario) o mapa de
  OpenStreetMap sin etiquetas (para "🎲 Aleatorio total", que no usa Street View).
- **Adivinar**: mapa de Google Maps (marcadores, animaciones, multijugador).

## Necesitas una API key de Google Maps

**Pasos para crear la clave:**
1. Entra a **console.cloud.google.com** → crea un proyecto nuevo.
2. Ve a **Facturación** → vincula una tarjeta (obligatorio, aunque no te
   cobre dentro de la cuota gratis).
3. Ve a **APIs y servicios → Biblioteca** → busca y habilita
   **"Maps JavaScript API"**.
4. Ve a **APIs y servicios → Credenciales → Crear credenciales →
   Clave de API**.
5. Restringe la clave (por dominio y a solo Maps JavaScript API).
6. Copia la clave. Abre `index.html`, busca:
   ```js
   const GOOGLE_MAPS_API_KEY = "TU_API_KEY_AQUI";
   ```
   y reemplaza el texto entre comillas por tu clave real.

## Por qué necesitas subir esto a un servidor

Los navegadores solo permiten instalar una PWA y registrar el "service worker"
cuando el sitio se sirve por **http(s)://**, no al abrir el archivo directamente
desde tu computadora (file://).

## ⚠️ Estructura de archivos — TODOS van sueltos en la misma carpeta raíz

A diferencia de versiones anteriores, **ya no hay subcarpeta `icons/`** —
todos los archivos, incluidos los íconos, van juntos en el mismo nivel.
Esto es para evitar que se rompa si tu herramienta de subida aplana las
carpetas al arrastrar archivos:

```
(raíz de tu sitio)/
├── index.html
├── manifest.json
├── sw.js
├── world-countries.json
├── icon-192.png
├── icon-512.png
├── icon-192-maskable.png
└── icon-512-maskable.png
```

Sube estos 8 archivos **todos sueltos, uno por uno o todos juntos, sin
carpetas** a la raíz de tu sitio (Netlify Drop, GitHub Pages, Vercel, etc.).

## Verificar que todo esté bien subido

Después de subir, revisa que estos enlaces carguen sin error 404
(cambia `tudominio.com` por tu URL real):
- `https://tudominio.com/manifest.json`
- `https://tudominio.com/sw.js`
- `https://tudominio.com/world-countries.json`
- `https://tudominio.com/icon-192.png`

## Opciones rápidas y gratuitas

**Netlify Drop:** https://app.netlify.com/drop — arrastra los 8 archivos.
**GitHub Pages:** sube los 8 archivos a un repositorio, activa Pages.
**Vercel:** https://vercel.com/new

No olvides agregar tu URL final a las restricciones de la API key de Google.

## Instalar en el celular

- **Android (Chrome):** abre la URL → menú (⋮) → "Instalar app", o el
  botón flotante "📲 Instalar app".
- **iPhone (Safari):** botón compartir (⬆️) → "Agregar a pantalla de inicio".

## Categorías disponibles

- 🌍 Todos (107 lugares, con Street View)
- 🏛 Solo capitales (con Street View)
- 🏔 Naturaleza/parques (con Street View)
- 📍 Mi continente (con Street View)
- 📅 Desafío diario (con Street View)
- 🎲 Aleatorio total (cualquier punto de tierra real, con mapa OSM — sin Street View)
