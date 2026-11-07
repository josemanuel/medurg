# Especificación funcional MedUrg Admin v2

## Objetivo
Gestionar de forma trazable la autoría, revisión clínica, validación farmacéutica, aprobación y publicación de fichas de medicación que consumirá la aplicación asistencial.

## Roles
- Autor: crea y corrige borradores.
- Revisor clínico: valida indicaciones, contexto, vía y uso asistencial.
- Farmacia Hospitalaria: valida presentación, concentración, preparación, diluyentes, estabilidad y seguridad.
- Aprobador: adopta la decisión formal y congela la versión.
- Publicador: genera e instala el catálogo de distribución.

## Fases y acciones
1. Catálogo: crear/abrir trabajo, importar demostración, copia de seguridad y visión global.
2. Autoría: guardar, comprobar, enviar a revisión y crear una nueva versión.
3. Revisión: validar clínicamente, solicitar cambios, validar por Farmacia y generar informe.
4. Aprobación: aprobar o devolver para cambios. Requiere ambas validaciones, fecha y próxima revisión.
5. Publicación: previsualizar, exportar JSON y marcar como publicado.

## Transiciones
- DRAFT → IN_REVIEW
- IN_REVIEW → CLINICALLY_VALIDATED | CHANGES_REQUESTED
- CHANGES_REQUESTED → DRAFT | IN_REVIEW
- CLINICALLY_VALIDATED → PHARMACY_VALIDATED | CHANGES_REQUESTED
- PHARMACY_VALIDATED → APPROVED | CHANGES_REQUESTED
- APPROVED → PUBLISHED | RETIRED
- PUBLISHED → RETIRED

No existe selector libre de estado. Cada botón ejecuta una transición permitida y registra un evento.

## Reglas bloqueantes
Una ficha no se envía a revisión sin ID, nombre, grupo, indicación, presentación, preparación, vía e instrucciones. No se aprueba sin validación clínica, validación farmacéutica, aprobador, fecha y próxima revisión. No se publica si no está aprobada o presenta errores.

## Historial
Cada transición almacena UUID, fecha ISO 8601, estado anterior y nuevo, acción, actor, rol, comentario, versión de ficha y versión de catálogo. El esquema formal está en `workflow-history.schema.json`.

## Seguridad y alcance MVP
La v2 usa localStorage y no implementa autenticación ni auditoría inmutable. Para producción se requiere backend, Microsoft Entra ID, roles, registro de auditoría, concurrencia, copias de seguridad y firma/hash del paquete.
