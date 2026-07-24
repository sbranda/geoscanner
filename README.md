# Atlas Errante — PWA

Juego de adivinar lugares del mundo. Explora con fotos reales a nivel de
calle de **KartaView** (plataforma abierta, sin token) y adivina en un
mapa de **OpenStreetMap**.

## Sobre KartaView

No necesitas cuenta, token ni tarjeta. Se usa el endpoint clásico y
público de su API (`api.openstreetcam.org/1.0/list/nearby-photos/`) que
acepta consultas de lectura sin autenticación.

A diferencia de Street View o Mapillary, KartaView muestra **fotos
individuales** (no panorámicas de 360°), así que el panel de "explorar"
te deja pasar entre varias fotos cercanas con los botones ‹ › para
hacerte una idea del lugar, en vez de girar una sola panorámica.

## Cobertura

KartaView tiene especial fuerza en el Sudeste Asiático y es más
irregular en otras regiones. El juego ya maneja esto: prueba primero un
radio chico (500 m), luego uno mediano (3 km) y uno grande (15 km); si
no encuentra nada, salta automáticamente a otro lugar de la lista.

## Por qué necesitas subir esto a un servidor

Los navegadores solo permiten instalar una PWA y registrar el "service worker"
cuando el sitio se sirve por **http(s)://**, no al abrir el archivo directamente
desde tu computadora (file://). Necesitas alojar estos 3 elementos (index.html,
manifest.json, sw.js, carpeta icons/) en algún sitio con HTTPS.

## Opciones rápidas y gratuitas

**Netlify Drop (la más rápida, sin cuenta técnica):**
1. Entra a https://app.netlify.com/drop
2. Arrastra esta carpeta completa (`atlas-pwa`) a la página.
3. Netlify te da una URL pública al instante (ej. `algo.netlify.app`).
4. Ábrela desde el celular con Chrome/Safari → aparecerá la opción
   "Agregar a pantalla de inicio" o el botón "📲 Instalar app".

**GitHub Pages:**
1. Crea un repositorio nuevo y sube el contenido de esta carpeta.
2. Ve a Settings → Pages → selecciona la rama y carpeta raíz.
3. GitHub te da una URL tipo `tuusuario.github.io/tu-repo`.

**Vercel:**
1. https://vercel.com/new → arrastra la carpeta o conecta el repo.

## Probarlo localmente antes de subirlo

Con Node instalado:
```
npx serve atlas-pwa
```
Luego abre la URL local que te muestre (ej. http://localhost:3000).
No funcionará como instalable en `localhost` desde el celular, pero sí
en desktop Chrome (localhost cuenta como origen seguro).

## Instalar en el celular

- **Android (Chrome):** abre la URL → menú (⋮) → "Instalar app" o "Agregar a
  pantalla de inicio", o usa el botón flotante "📲 Instalar app" que aparece
  en la esquina.
- **iPhone (Safari):** abre la URL → botón compartir (⬆️) → "Agregar a
  pantalla de inicio". Safari no muestra el botón de instalación automática,
  este paso manual es normal en iOS.

## Estructura

```
atlas-pwa/
├── index.html          (el juego)
├── manifest.json        (metadatos de la app: nombre, colores, iconos)
├── sw.js                 (service worker: caché para funcionar offline)
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    ├── icon-192-maskable.png
    └── icon-512-maskable.png
```
