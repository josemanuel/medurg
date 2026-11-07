# Contrato de datos MedUrg End User v10

La aplicación carga `data/catalog.json`, generado por MedUrg Admin. Solo presenta fichas con estado `APPROVED` o `PUBLISHED`.

## Instalación
1. En MedUrg Admin, complete revisión clínica, validación por Farmacia y aprobación.
2. En Publicación, pulse **Generar JSON para aplicación asistencial**.
3. Renombre el archivo descargado como `catalog.json`.
4. Sustituya `data/catalog.json`.
5. Publique una nueva versión o cambie `CACHE_NAME` en `sw.js` para actualizar las PWA instaladas.

## Campos consumidos
Catálogo: `schemaVersion`, `catalogVersion`, `catalogId`, `center`, `generatedAt`, `medications`.

Medicamento: `id`, `displayName`, `brands`, `clinicalGroup`, `colorGroup`, `indications`, `presentations`, `preparations`, `status`, `version`.

Preparación: `route`, `instructions`, `icons`. La primera preparación se usa en la ficha actual. La primera presentación activa se utiliza como presentación principal.
