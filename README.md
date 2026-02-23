# MicroDSI (M2-S10) · Identificación de Procesos 🎯

**Autor:** Fernando Beneytez

## Descripción del Proyecto
Este repositorio contiene una mini-web estática interactiva creada como entregable para la sesión M2-S10. Su objetivo principal es servir como un "Mapa Mental" guiado que permite convertir el caos operativo en claridad a través de tres fases clave: inventario de procesos, priorización basada en datos y elaboración de un contrato SIPOC.

La web está construida íntegramente con HTML, CSS y Vanilla JavaScript, y está diseñada para ser desplegada directamente mediante **GitHub Pages**.

## 📂 Estructura de la Web
La aplicación consta de 4 secciones principales interconectadas:

1. **Inicio (`index.html`)**: Landing page con las instrucciones, reglas rápidas del juego y los KPIs del proyecto (misión, botín y tiempo objetivo).
2. **Feed (`feed.html`)**: Tarjetas interactivas de micro-lecciones (snap-scrolling vertical). Los ejemplos de cada lección cambian dinámicamente según el Track seleccionado.
3. **Pistas (`pista.html`)**: Un caso guiado de diseño de procesos (scroll horizontal) que hace las preguntas correctas para aterrizar el candidato a rediseñar.
4. **Laboratorio (`lab.html`)**: El espacio de trabajo final. Permite volcar el inventario (L1), el Top 5 de priorización y el SIPOC. Incluye un motor de exportación automática que genera un archivo Markdown (`.md`) listo para entregar.

## ⚙️ Tracks Soportados
La web adapta su contenido y contexto mediante un selector global de Tracks:
* **ITSM Triage**: Optimización de incidencias, reducción de misrouting y gestión de severidades.
* **HR**: Gestión de solicitudes de empleados, minimizando riesgos de PII (Datos Personales).
* **Procurement**: Alta de proveedores, auditorías, compliance y reducción de lead times.

## ⭐ Extensiones Implementadas (Extra)
Para este entregable se han implementado las siguientes mejoras opcionales:
* **Nuevas tarjetas en el Feed**: Se han añadido lecciones adicionales sobre la definición del *Producto Mínimo Viable (MVP)* y la *Mejora Continua* iterativa post-despliegue.
* **Pista de "No-alcance"**: Se ha añadido un paso final en el caso guiado para delimitar explícitamente qué queda fuera del MVP y evitar el *scope creep*.
* **Mejora del Exportador**: El entregable final `.md` del Laboratorio incluye ahora una sección automatizada para redactar el *Trade-off principal* y la *Restricción dominante*.

## 🚀 Despliegue
Este proyecto está optimizado para funcionar sin servidores ni bases de datos. 
Para visualizarlo, simplemente visita la URL pública generada por [GitHub Pages](https://pages.github.com/) asociada a este repositorio.
