// Recortes livianos (parte superior, ya en el ratio del marco) de las capturas
// que se muestran en marcos chicos: el hero y las tarjetas de Work. Las
// capturas originales de página completa pesan hasta 12 MB y miden hasta
// 12.440 px de alto; acá se usa solo lo que se ve.
// Generado con sharp a partir de public/imagenes — regenerar si se reemplazan
// esas capturas. Las páginas de caso siguen usando la captura completa.
export const covers: Record<string, string> = {
  "/imagenes/norfalk/web-2.png": "/imagenes/covers/norfalk-web-2.jpg",
  "/imagenes/norfalk/newsletter-1.png": "/imagenes/covers/norfalk-newsletter-1.jpg",
  "/imagenes/norfalk/canva-1.png": "/imagenes/covers/norfalk-canva-1.jpg",
  "/imagenes/norfalk/naming-1.png": "/imagenes/covers/norfalk-naming-1.jpg",
  "/imagenes/norfalk/linkedin-before.png": "/imagenes/covers/norfalk-linkedin-before.jpg",
  "/imagenes/norfalk/canva-2.png": "/imagenes/covers/norfalk-canva-2.jpg",
  "/imagenes/gisela/web-1.png": "/imagenes/covers/gisela-web-1.jpg",
  "/imagenes/gisela/web-3.png": "/imagenes/covers/gisela-web-3.jpg",
  "/imagenes/mauro-crema/web-1.png": "/imagenes/covers/mauro-crema-web-1.jpg",
  "/imagenes/mauro-crema/slide-servicios.png": "/imagenes/covers/mauro-crema-slide-servicios.jpg",
  "/imagenes/mauro-crema/slide-internacional.png": "/imagenes/covers/mauro-crema-slide-internacional.jpg",
  "/imagenes/samuray/web-1.png": "/imagenes/covers/samuray-web-1.jpg",
  "/imagenes/samuray/web-2.png": "/imagenes/covers/samuray-web-2.jpg",
  "/imagenes/samuray/web-3.png": "/imagenes/covers/samuray-web-3.jpg",
  "/imagenes/mercedes-chanquia/web-1.png": "/imagenes/covers/mercedes-chanquia-web-1.jpg",
  "/imagenes/mercedes-chanquia/web-2.png": "/imagenes/covers/mercedes-chanquia-web-2.jpg",
  "/imagenes/mercedes-chanquia/web-3.png": "/imagenes/covers/mercedes-chanquia-web-3.jpg",
  "/imagenes/norfalk/celu-1.png": "/imagenes/covers/norfalk-celu-1.jpg",
  "/imagenes/gisela/celu-pantalla.jpg": "/imagenes/covers/gisela-celu-pantalla.jpg",
  "/imagenes/mauro-crema/celu-2.jpg": "/imagenes/covers/mauro-crema-celu-2.jpg",
  "/imagenes/samuray/celu-pantalla.jpg": "/imagenes/covers/samuray-celu-pantalla.jpg",
  "/imagenes/mercedes-chanquia/celu-pantalla.jpg": "/imagenes/covers/mercedes-chanquia-celu-pantalla.jpg",
};

export function cover(src: string): string {
  return covers[src] ?? src;
}
