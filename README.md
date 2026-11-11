# PrimerPaso

Sitio web de apoyo para personas que buscan su primera oportunidad laboral.

## Cómo probarlo
1. Extrae la carpeta del ZIP.
2. Abre `index.html` en un navegador. Para una experiencia más consistente, usa la extensión Live Server de VS Code.
3. Prueba registro e inicio de sesión, creador de CV, buscador de empleos y preparación para entrevistas.

## Funciones incluidas en esta versión
- Registro e inicio de sesión de demostración mediante `localStorage`.
- Perfil de usuario local.
- Creador de CV por pasos, con vista previa e impresión/guardado como PDF.
- Guía de preguntas para entrevistas y guardado de una respuesta de práctica.
- Buscador de empleos con filtros, ordenamiento y ofertas guardadas en memoria de la página.
- Registro local de interés al pulsar Aplicar.

## Limitaciones importantes
Esta es una versión frontend para demostración académica. Las cuentas, contraseñas, CV y solicitudes se guardan solo en el navegador mediante `localStorage`; no existe servidor, base de datos, recuperación de contraseña ni autenticación segura. No debe usarse con contraseñas reales ni publicarse como servicio de producción sin backend.

Las ofertas y empresas que aparecen en la maqueta son datos de ejemplo, no vacantes verificadas. El botón Aplicar registra interés local, pero no envía una solicitud a una empresa. Para habilitar postulaciones reales hay que incorporar empresas verificadas, correo/teléfono de contacto confirmado o un backend de aplicaciones.

## Siguiente etapa recomendada
Conectar autenticación y base de datos reales (por ejemplo Supabase o Firebase), administrar ofertas desde un panel de empresa y guardar CV/solicitudes de forma segura.
