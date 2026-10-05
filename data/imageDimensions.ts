// Dimensiones intrínsecas (en px) de las imágenes referenciadas en projects.ts.
// Se usan para pasarle width/height reales a next/image y evitar layout shift
// sin forzar un recorte artificial sobre capturas de página completa.
// Generado leyendo los headers PNG/JPEG de public/imagenes — regenerar si se
// agregan o reemplazan imágenes de proyecto.
export const imageDimensions: Record<string, { width: number; height: number }> = {
  "/imagenes/norfalk/web-1.png": { width: 2560, height: 7950 },
  "/imagenes/norfalk-before.png": { width: 1901, height: 8364 },
  "/imagenes/norfalk/web-2.png": { width: 2560, height: 12440 },
  "/imagenes/norfalk/celu-1.png": { width: 434, height: 952 },
  "/imagenes/norfalk/celu-2.png": { width: 2245, height: 3179 },
  "/imagenes/norfalk/lighthouse-old.png": { width: 1267, height: 820 },
  "/imagenes/norfalk/canva-1.png": { width: 1574, height: 907 },
  "/imagenes/norfalk/canva-2.png": { width: 1808, height: 682 },
  "/imagenes/norfalk/naming-1.png": { width: 1383, height: 768 },
  "/imagenes/norfalk/naming-2.png": { width: 1382, height: 758 },
  "/imagenes/norfalk/linkedin-before.png": { width: 2396, height: 1144 },
  "/imagenes/norfalk/newsletter-1.png": { width: 2037, height: 5091 },
  "/imagenes/gisela/web-1.png": { width: 1920, height: 5352 },
  "/imagenes/gisela/celu-1.png": { width: 2245, height: 3179 },
  "/imagenes/gisela/celu-2.png": { width: 2245, height: 3179 },
  "/imagenes/gisela/design-system-1.png": { width: 599, height: 847 },
  "/imagenes/gisela/design-system-2.png": { width: 598, height: 844 },
  "/imagenes/gisela/web-2-detail.png": { width: 1920, height: 7481 },
  "/imagenes/samuray/web-1.png": { width: 1920, height: 7615 },
  "/imagenes/samuray/celu-1.png": { width: 2245, height: 3179 },
  "/imagenes/samuray/celu-2.png": { width: 2245, height: 3179 },
  "/imagenes/mercedes-chanquia/web-1.png": { width: 1920, height: 2950 },
  "/imagenes/mercedes-chanquia/celu-1.png": { width: 2245, height: 3179 },
  "/imagenes/mauro-crema/web-1.png": { width: 1574, height: 2723 },
  "/imagenes/mauro-crema/celu-1.png": { width: 2245, height: 3179 },
  "/imagenes/mauro-crema/celu-2.jpg": { width: 1170, height: 2391 },
  "/imagenes/mauro-crema/slide-servicios.png": { width: 1920, height: 1081 },
  "/imagenes/mauro-crema/slide-internacional.png": { width: 1920, height: 1081 },
};

// Capturas de página completa (muy altas respecto a su ancho) se muestran en
// un marco con scroll interno en vez de recortarlas o estirar la página.
export function isTallScreenshot(src: string): boolean {
  const d = imageDimensions[src];
  if (!d) return false;
  return d.height / d.width > 2;
}
