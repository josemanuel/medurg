# Medicación de Urgencias v6

PWA local de apoyo para preparación y administración de medicación de urgencias.

## Ejecutar localmente

```bash
python -m http.server 8080
```

Abrir `http://localhost:8080`. La instalación PWA requiere `localhost` o HTTPS; no funciona mediante `file://`.

## Publicación

Subir todos los archivos conservando la carpeta `icons/`. Para una versión nueva, cambiar `CACHE_NAME` en `sw.js`.

## Seguridad

Prototipo pendiente de validación por Urgencias y Farmacia Hospitalaria. No sustituye prescripción, ficha técnica, protocolo vigente ni doble comprobación.
