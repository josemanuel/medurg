# Medicación de Urgencias v10 JSON

Aplicación asistencial configurable mediante el catálogo JSON publicado por MedUrg Admin. Mantiene diseño, colores, iconos, favoritos, calculadoras, impresión/PDF y funcionamiento PWA de la v9.

## Ejecutar
```bash
python -m http.server 8080
```
Abra `http://localhost:8080`.

## Catálogo
Sustituya `data/catalog.json` por el archivo generado desde MedUrg Admin. Consulte `DATA_CONTRACT.md`.

## Sin conexión
El catálogo se solicita con estrategia network-first y la última copia válida queda disponible en caché para uso sin conexión.
