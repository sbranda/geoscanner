# Atlas Errante — PWA

Juego de adivinar lugares del mundo:
- **Explorar**: Street View de Google (para las categorías con lugares curados:
  Todos, Capitales, Naturaleza, Mi continente, Desafío diario) o mapa de
  OpenStreetMap sin etiquetas (para "🎲 Aleatorio total", que no usa Street View).
- **Adivinar**: mapa de Google Maps (marcadores, animaciones, multijugador).

## Necesitas una API key de Google Maps

Tanto el mapa de conjetura (Google Maps) como Street View requieren tu
propia clave de Google Maps Platform.

**Pasos para crear la clave:**
1. Entra a **console.cloud.google.com** → crea un proyecto nuevo.
2. Ve a **Facturación** → vincula una tarjeta (obligatorio, aunque no te
   cobre dentro de la cuota gratis).
3. Ve a **APIs y servicios → Biblioteca** → busca y habilita
   **"Maps JavaScript API"**.
4. Ve a **APIs y servicios → Credenciales → Crear credenciales →
   Clave de API**.
5. Restringe la clave:
   - Restricciones de aplicación → "Referencias HTTP (sitios web)" →
     agrega el dominio donde publiques el juego (ej. `tuapp.netlify.app/*`).
   - Restricciones de API → selecciona solo **Maps JavaScript API**.
6. Copia la clave. Abre `index.html`, busca la línea:
   ```js
   const GOOGLE_MAPS_API_KEY = "TU_API_KEY_AQUI";
   ```
   y reemplaza el texto entre comillas por tu clave real.

### Sobre el costo
Desde 2025 cada API de Google Maps Platform tiene su propia cuota
gratis mensual: Mapas dinámicos (Essentials) da miles de cargas
gratis/mes, y Street View dinámico (Pro) da **5.000 usos gratis/mes**.
Para uso personal esto normalmente alcanza de sobra, pero **necesitas
tarjeta vinculada** (sin facturación activa, el límite baja a 1
solicitud/día).

## Categorías disponibles

- 🌍 Todos (107 lugares, con Street View)
- 🏛 Solo capitales (con Street View)
- 🏔 Naturaleza/parques (con Street View)
- 📍 Mi continente (con Street View)
- 📅 Desafío diario (con Street View)
- 🎲 Aleatorio total (cualquier punto de tierra real, con mapa OSM — sin
  Street View, para evitar quedarte sin cobertura en zonas remotas)

## Por qué necesitas subir esto a un servidor

Los navegadores solo permiten instalar una PWA y registrar el "service worker"
cuando el sitio se sirve por **http(s)://**, no al abrir el archivo directamente
desde tu computadora (file://). Necesitas alojar estos archivos en algún sitio
con HTTPS.

## Opciones rápidas y gratuitas

**Netlify Drop (la más rápida, sin cuenta técnica):**
1. Entra a https://app.netlify.com/drop
2. Arrastra esta carpeta completa (`atlas-pwa`) a la página.
3. Netlify te da una URL pública al instante (ej. `algo.netlify.app`).
4. No olvides agregar esa URL a las restricciones de tu API key.
5. Ábrela desde el celular → aparecerá "Agregar a pantalla de inicio" o
   el botón "📲 Instalar app".

**GitHub Pages:**
1. Crea un repositorio nuevo y sube el contenido de esta carpeta.
2. Ve a Settings → Pages → selecciona la rama y carpeta raíz.

**Vercel:**
1. https://vercel.com/new → arrastra la carpeta o conecta el repo.

## Instalar en el celular

- **Android (Chrome):** abre la URL → menú (⋮) → "Instalar app", o el
  botón flotante "📲 Instalar app".
- **iPhone (Safari):** botón compartir (⬆️) → "Agregar a pantalla de inicio".

## Estructura

```
atlas-pwa/
├── index.html          (el juego)
├── manifest.json        (metadatos de la app: nombre, colores, iconos)
├── sw.js                 (service worker: caché para funcionar offline)
├── world-countries.json  (fronteras de países, para "Aleatorio total")
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    ├── icon-192-maskable.png
    └── icon-512-maskable.png
```
