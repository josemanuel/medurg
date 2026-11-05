# Medicación de Urgencias v9

PWA completa con fichas, favoritos, calculadoras, códigos cromáticos, iconos y maquetador de impresión/PDF.

## Ejecutar localmente

```bash
python -m http.server 8080
```

Abra `http://localhost:8080`. La instalación PWA requiere localhost o HTTPS.

## Impresión y PDF

El modal permite A3, A4, A5, Carta y Legal; orientación vertical u horizontal; entre 1 y 8 fichas por fila; fichas resumidas o completas; y todas, favoritas o filtradas.

Las muestras cromáticas se generan como SVG con relleno real para conservar el color en el preview y el PDF. Para ocultar fecha, título, host y numeración, desactive **Encabezados y pies de página** en el diálogo del navegador.

## Seguridad

Prototipo pendiente de validación clínica y farmacéutica.
