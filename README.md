# Atlas Errante — PWA

Juego de adivinar lugares del mundo. Explora con fotos 360° reales de
**Panoramax** (proyecto abierto del instituto geográfico francés IGN y la
comunidad OpenStreetMap) y adivina en un mapa de **OpenStreetMap**.

## Sobre Panoramax

No necesitas cuenta, token ni tarjeta. Se usa la API pública de
búsqueda de Panoramax (`api.panoramax.xyz/api/search`), que es una
federación de servidores STAC abiertos, y su visor oficial embebible
(`@panoramax/web-viewer`) para mostrar las fotos 360° con la misma
sensación de "mirar alrededor" que Street View.

## Cobertura

Panoramax tiene su cobertura más fuerte en **Francia** y va creciendo en
el resto de Europa Occidental (Bélgica, Países Bajos, Reino Unido,
Italia, España, Alemania...). Por eso la lista de ciudades del juego
está centrada en esa región. El juego busca la foto 360° más cercana a
cada ciudad; si la más cercana está a más de 120 km (poca cobertura en
esa zona), prueba automáticamente con otra ciudad de la lista.

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
