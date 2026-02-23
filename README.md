# MicroDSI (M2-S10) · Identificación de Procesos 🎯

**Autor:** Fernando Beneytez

## Descripción del Proyecto
[cite_start]Este repositorio contiene una mini-web estática interactiva creada como entregable para la sesión M2-S10[cite: 4]. [cite_start]Su objetivo principal es servir como un "Mapa Mental" guiado que permite convertir el caos operativo en claridad a través de tres fases clave: inventario de procesos, priorización basada en datos y elaboración de un contrato SIPOC[cite: 8].

[cite_start]La web está construida íntegramente con HTML, CSS y Vanilla JavaScript, y está diseñada para ser desplegada directamente mediante **GitHub Pages**[cite: 4, 37].

## 📂 Estructura de la Web
La aplicación consta de 4 secciones principales interconectadas:

1. [cite_start]**Inicio (`index.html`)**: Landing page con las instrucciones, reglas rápidas del juego y los KPIs del proyecto (misión, botín y tiempo objetivo)[cite: 5].
2. **Feed (`feed.html`)**: Tarjetas interactivas de micro-lecciones (snap-scrolling vertical). [cite_start]Los ejemplos de cada lección cambian dinámicamente según el Track seleccionado[cite: 6, 49].
3. [cite_start]**Pistas (`pista.html`)**: Un caso guiado de diseño de procesos (scroll horizontal) que hace las preguntas correctas para aterrizar el candidato a rediseñar[cite: 7].
4. **Laboratorio (`lab.html`)**: El espacio de trabajo final. Permite volcar el inventario (L1), el Top 5 de priorización y el SIPOC. [cite_start]Incluye un motor de exportación automática que genera un archivo Markdown (`.md`) listo para entregar[cite: 8].

## ⚙️ Tracks Soportados
[cite_start]La web adapta su contenido y contexto mediante un selector global de Tracks[cite: 11]:
* [cite_start]**ITSM Triage**: Optimización de incidencias, reducción de misrouting y gestión de severidades[cite: 12].
* [cite_start]**HR**: Gestión de solicitudes de empleados, minimizando riesgos de PII (Datos Personales)[cite: 13].
* [cite_start]**Procurement**: Alta de proveedores, auditorías, compliance y reducción de lead times[cite: 14].

## ⭐ Extensiones Implementadas (Extra)
[cite_start]Para este entregable se han implementado las siguientes mejoras opcionales[cite: 141]:
* [cite_start]**Nuevas tarjetas en el Feed**: Se han añadido lecciones adicionales sobre la definición del *Producto Mínimo Viable (MVP)* y la *Mejora Continua* iterativa post-despliegue[cite: 142].
* [cite_start]**Pista de "No-alcance"**: Se ha añadido un paso final en el caso guiado para delimitar explícitamente qué queda fuera del MVP y evitar el *scope creep*[cite: 143].
* [cite_start]**Mejora del Exportador**: El entregable final `.md` del Laboratorio incluye ahora una sección automatizada para redactar el *Trade-off principal* y la *Restricción dominante*[cite: 144].

## 🚀 Despliegue
Este proyecto está optimizado para funcionar sin servidores ni bases de datos. 
[cite_start]Para visualizarlo, simplemente visita la URL pública generada por [GitHub Pages](https://pages.github.com/) asociada a este repositorio[cite: 104].
