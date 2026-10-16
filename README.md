# Tarjeta Joven Salvador Alvarado

Proyecto independiente basado en el código de producción de Tarjeta Joven Elota, commit `9b9187bcb1ee09c4b263762253d41fa40aff247b` (15/10/2026).

La copia no contiene repositorio Git del origen, vinculación a Vercel, credenciales, cuentas ni registros de otro municipio. Se entrega en modo presentación. Abrir `Vista-previa-Salvador-Alvarado.html` permite revisar la portada sin instalar dependencias y sin recopilar información.

Leer `Guia-configuracion-Salvador-Alvarado.html` para crear un repositorio, un proyecto Vercel y un Firebase nuevos. No importar datos ni variables de los proyectos existentes.

## Requisitos

Node.js 24 LTS (o >=22.18.0), npm y proyectos nuevos de Vercel y Firebase para iniciar operaciones.

## Validación y compilación

```sh
npm ci
npm test
npm run typecheck
npm run build
npm run preview:file
```

La compilación funciona sin Firebase en modo presentación. Para ejecutar en local después de vincular exclusivamente el proyecto nuevo y verificar sus variables:

```sh
npm run check:config
npm run dev
```

## Configuración

`.env.example` contiene los nombres de variables sin credenciales. Los controles comparan el ID web, el ID esperado, el ID Admin, la cuenta de servicio y los dos buckets. Bloquean IDs con los nombres de los otros municipios. No son un sustituto de IAM, reglas de Firebase ni de revisar cada operación del servidor.

`NEXT_PUBLIC_APP_MODE=preview` y `APP_MODE=preview` son el modo inicial. Las páginas operativas no se montan y la API devuelve 503 mientras falta la conexión. Las variables de cliente se fijan al compilar: cambiar variables exige desplegar una compilación nueva.

## Funciones conservadas de la base

Solicitud y aprobación de jóvenes y negocios; autorización de madre, padre o tutor para menores; activación de contraseña por correo; tarjeta y QR; directorio y mapas; promociones y bolsa de trabajo; validación de QR por negocio; panel Master/Staff; reglas de Firestore y Storage. Su funcionamiento conectado debe verificarse contra el Firebase nuevo antes del lanzamiento.

## Cambios de esta versión

- Nueva portada editorial, secciones de beneficios y de identidad local, diseño adaptable.
- Guinda #85033E, verde #109D7A, turquesa #08BDD2 y tonos cálidos.
- Dos archivos oficiales conservados byte a byte; hashes en `docs/activos-oficiales.json`.
- Fotografía de la presa Eustaquio Buelna publicada por el Ayuntamiento, acreditada en `docs/origen-y-verificacion.md`.
- Mapas centrados aproximadamente en Guamúchil: 25.4600, -108.0797. Es un centro de mapa, no un domicilio de atención.
- Panel en `/administracion`, QR con prefijo `TJSA-`, almacenamiento local con prefijo `tjsa:v1:` y nueva identidad de aplicación Firebase/PWA.
- Inicialización Admin diferida; sin credenciales predeterminadas; verificación de proyecto y bucket; roles limitados a Master/Staff.
- Redes oficiales configurables y ocultas si no se han confirmado.

## Rutas

| Ruta | Uso |
|---|---|
| `/` | Portada municipal |
| `/login` | Acceso y solicitud de jóvenes |
| `/tarjeta` | Tarjeta, beneficios y oportunidades |
| `/login-negocio` | Acceso y solicitud de aliados |
| `/portal-negocios` | Escáner, beneficios y métricas del negocio |
| `/directorio` | Directorio público |
| `/administracion` | Panel del equipo |
| `/activar-cuenta` | Activación de contraseña |
| `/aviso-de-privacidad` | Condiciones y aviso |

## Entrega y límites de verificación

Compilación de producción, TypeScript y pruebas de aislamiento completadas. Sin pruebas en navegador ni operaciones reales de Firebase/correo: no se proporcionaron recursos nuevos. La publicación se administra exclusivamente en el proyecto Vercel `tarjeta-joven-salvador-alvarado`. El modo conectado queda pendiente de configurar su Firebase nuevo. El repositorio de origen se mantuvo sin cambios.

La base heredada no recibió una auditoría integral. Verificar el ciclo completo de solicitud, aprobación, correo, acceso, QR, canje, cancelación y permisos con cuentas de prueba antes de abrir al público. Los contactos y el aviso deben confirmarse por el instituto responsable.
