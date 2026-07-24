# Atlas Errante — PWA

Juego de adivinar lugares del mundo. Explora con fotos reales a nivel de
calle de **Mapillary** (comunidad abierta, sin costo) y adivina en un mapa
de **OpenStreetMap**.

## Consigue tu token de Mapillary (gratis, sin tarjeta)

1. Entra a https://www.mapillary.com y crea una cuenta gratis.
2. Ve a https://www.mapillary.com/dashboard/developers
3. Haz clic en **"Register application"**, completa el nombre de tu app.
4. Copia el **Client Token** que aparece (empieza con `MLY|...`).
5. Abre `index.html`, busca la línea:
   ```
   const MAPILLARY_TOKEN = "TU_MAPILLARY_TOKEN_AQUI";
   ```
   y reemplaza el texto entre comillas por tu token real.

No necesitas tarjeta de crédito ni facturación para esto.

## Cobertura de Mapillary

A diferencia de Street View, Mapillary depende de fotos subidas por la
comunidad, así que la cobertura varía mucho de un lugar a otro. El juego
ya maneja esto: si no encuentra fotos cerca de un lugar de la lista,
prueba automáticamente con otro. Si notas que ciertas rondas tardan en
cargar o casi nunca aparecen, puedes editar el arreglo `LOCATIONS` en
`index.html` y priorizar ciudades con más actividad en Mapillary
(en general: Europa occidental, EE.UU., y grandes ciudades de
Latinoamérica y Asia tienen mejor cobertura que zonas rurales).

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
