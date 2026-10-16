# Origen y verificación

Fecha: 15 de octubre de 2026.

## Código de referencia

- Repositorio de solo lectura: https://github.com/IMJU-ESC/Tarjeta-joven-Elota
- Rama consultada: main.
- Commit copiado: 9b9187bcb1ee09c4b263762253d41fa40aff247b.
- La copia de referencia conservó su árbol de trabajo limpio al terminar. No se crearon commits, ramas, PR ni cambios de configuración en ese proyecto.

## Archivos oficiales

Se conservaron sin alterar los bytes de las dos imágenes facilitadas por el usuario. Solo se cambiaron los nombres dentro de la copia nueva.

- `images (3).jpg` → `public/imju-salvador-alvarado.jpg`.
- `Escudo-salvador-alvarado-1.png` → `public/identidad-salvador-alvarado.png`.

Los hashes de control se encuentran en `activos-oficiales.json`. No se recrearon logos ni se separó, recortó o recoloreó el escudo del archivo compuesto. Los elementos ornamentales del sitio son independientes de las imágenes oficiales.

## Fotografía local

- Lugar: presa Eustaquio Buelna, Guamúchil.
- Fuente: H. Ayuntamiento de Salvador Alvarado.
- Publicación: https://salvadoralvarado.gob.mx/salvador-alvarado-se-prepara-para-apreciar-el-eclipse-de-sol-en-la-presa-eustaquio-buelna/
- Imagen: https://salvadoralvarado.gob.mx/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-04-at-3.14.09-PM-1024x682.jpeg
- Archivo: `public/guamuchil.jpg`, descarga original sin edición.
- El centro de los mapas es una referencia aproximada de Guamúchil y no una ubicación oficial de atención.

## Comprobaciones realizadas

- Instalación reproducible mediante `npm ci` con el lockfile.
- Compilación de producción de Next.js 16.3.5: correcta.
- TypeScript estricto: correcto.
- Pruebas automatizadas: coincidencia de IDs, rechazo de proyectos anteriores, rechazo de buckets ajenos, hashes de logos oficiales y ausencia de referencias operativas residuales en app/public.
- Verificación de que el modo conectado falla al no contar con las variables nuevas necesarias.
- Exportación de la portada a un archivo HTML autocontenido, sin scripts de Next.js ni dependencias de Firebase.

## Pendiente para operar

- Crear el repositorio GitHub, proyecto Vercel y proyecto Firebase nuevos.
- Cargar variables, habilitar servicios y publicar reglas exclusivamente en esos recursos.
- Confirmar correo, domicilio, redes y aviso con el instituto de Salvador Alvarado.
- Crear el primer Master.
- Probar con navegador, correo y Firebase nuevos: solicitud, aprobación, menores, activación, QR, canje, cancelación, eliminación de documentos y permisos.
- No se ejecutó auditoría integral ni pruebas de carga/concurrencia de la base heredada.

## Publicación

Repositorio independiente: https://github.com/IMJU-ESC/Tarjeta-Joven-S-alvarado

Proyecto Vercel independiente: tarjeta-joven-salvador-alvarado.

La aplicación se publica inicialmente en modo presentación. El Firebase nuevo, sus reglas, el correo y los accesos se configuran después, sin reutilizar recursos de otro municipio.
