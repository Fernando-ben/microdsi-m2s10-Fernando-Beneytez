// =====================
// MicroDSI · Tracks
// =====================
const TRACKS = [
  { id: "itsm", name: "ITSM Triage" },
  { id: "hr",   name: "HR" },
  { id: "proc", name: "Procurement" },
];

function getTrackFromURL() {
  const u = new URL(window.location.href);
  const t = u.searchParams.get("track");
  return TRACKS.some(x => x.id === t) ? t : null;
}
function getTrack() {
  return getTrackFromURL() || localStorage.getItem("track") || "itsm";
}
function setTrack(t) {
  localStorage.setItem("track", t);
  const u = new URL(window.location.href);
  if (!u.searchParams.get("track")) location.reload();
}

// =====================
// Micro-lecciones (M2-S10) + Extensiones Opcionales
// =====================
const LESSONS = [
  {
    tag: "M2-S10 · Fundamentos",
    title: "Proceso ≠ Procedimiento ≠ Capacidad",
    text: "Capacidad: lo que la organización sabe hacer. Proceso: transforma entradas en salidas para un cliente. Procedimiento: cómo se ejecuta un paso.",
    examples: {
      itsm: ["Capacidad: Soporte TI", "Proceso: Gestionar incidencias", "Procedimiento: Clasificar severidad y prioridad"],
      hr:   ["Capacidad: Gestión de personas", "Proceso: Gestionar solicitudes HR", "Procedimiento: Verificar documentación de permiso"],
      proc: ["Capacidad: Compras", "Proceso: Alta de proveedor", "Procedimiento: Validación fiscal y compliance"],
    },
    check: "Escribe 1 ejemplo real de tu entorno para cada categoría (capacidad/proceso/procedimiento).",
  },
  {
    tag: "M2-S10 · Límites",
    title: "Trigger + Output: la definición mínima de proceso",
    text: "Si no puedes decir qué lo inicia (trigger) y qué produce (output), no tienes un proceso defendible: tienes un área o una intención.",
    examples: {
      itsm: ["Trigger: ticket creado o alerta monitoring", "Output: resolución o escalado con trazabilidad"],
      hr:   ["Trigger: solicitud de nómina/permiso", "Output: respuesta oficial + registro (sin PII innecesaria)"],
      proc: ["Trigger: proveedor solicita alta", "Output: proveedor dado de alta en ERP o rechazo motivado"],
    },
    check: "Define trigger y output de un proceso L1 de tu inventario (2 líneas).",
  },
  {
    tag: "M2-S10 · Arquitectura",
    title: "L0/L1/L2: granularidad correcta",
    text: "L0 = macroprocesos; L1 = catálogo; L2 = variante operativa candidata a rediseño. Evita saltar directo a L3.",
    examples: {
      itsm: ["L0: Operaciones TI", "L1: Gestión de incidencias", "L2: Triage por canal (portal/telefono)"],
      hr:   ["L0: PeopleOps", "L1: Gestión de solicitudes", "L2: Solicitud sensible (PII) vs general"],
      proc: ["L0: Compras", "L1: Alta de proveedores", "L2: Alta estándar vs alta con excepción (riesgo)"],
    },
    check: "Convierte 1 L0 en 3 procesos L1 y elige 1 variante L2.",
  },
  {
    tag: "M2-S10 · Inventario",
    title: "Catálogo L1: regla Verbo + Objeto",
    text: "Un proceso L1 no es un departamento. Fórmula: verbo + objeto. Debe ser repetible, medible y con cliente.",
    examples: {
      itsm: ["Gestionar incidencias", "Gestionar solicitudes", "Gestionar problemas (root cause)"],
      hr:   ["Gestionar permisos", "Gestionar altas/bajas", "Gestionar consultas de nómina"],
      proc: ["Dar de alta proveedor", "Gestionar órdenes de compra", "Gestionar homologación"],
    },
    check: "Escribe 10 procesos L1 (uno por línea) siguiendo Verbo+Objeto.",
  },
  {
    tag: "M2-S10 · Medición",
    title: "Baseline: si no mides antes, no demuestras mejora",
    text: "Un rediseño sin baseline es un acto de fe. Elige 1 métrica de valor, 1 de coste y 1 de riesgo.",
    examples: {
      itsm: ["Valor: % misrouting o FCR triage", "Coste: AHT triage", "Riesgo: % tickets críticos mal clasificados"],
      hr:   ["Valor: tiempo a respuesta", "Coste: €/caso o min/caso", "Riesgo: incidentes PII / 1000 casos"],
      proc: ["Valor: lead time alta", "Coste: nº iteraciones por doc incompleta", "Riesgo: excepciones sin trazabilidad"],
    },
    check: "Define 3 métricas (valor/coste/riesgo) y di cómo las medirías (1 línea cada una).",
  },
  {
    tag: "M2-S10 · Dolor",
    title: "Dolores típicos: retrabajo, esperas, errores, variabilidad",
    text: "Señales para candidato: alto volumen, mucho rebote/retrabajo, colas/esperas, errores recurrentes, alta variabilidad entre agentes.",
    examples: {
      itsm: ["Misrouting frecuente", "KB desactualizada", "Reaperturas y escalados innecesarios"],
      hr:   ["Respuestas inconsistentes", "Búsqueda manual en políticas", "Documentación incompleta -> ida y vuelta"],
      proc: ["Docs incompletos", "Aprobaciones opacas", "Dependencia ERP y compliance"],
    },
    check: "Marca 2 dolores y aporta 1 evidencia: dato, ejemplo o síntoma observable.",
  },
  {
    tag: "M2-S10 · Riesgo",
    title: "Riesgo y gobernanza: PII, auditoría, criticidad",
    text: "No priorices solo por volumen. PII, auditoría y errores críticos cambian el diseño (HITL, logs, RBAC).",
    examples: {
      itsm: ["PII: media (según contenido del ticket)", "Auditoría: necesaria para post-mortem", "Criticidad: incidentes P1"],
      hr:   ["PII: alta (nómina, contratos)", "Auditoría: obligatoria", "Criticidad: impacto legal/reputacional"],
      proc: ["PII: media (datos fiscales)", "Auditoría: aprobaciones y trazabilidad", "Criticidad: fraude/compliance"],
    },
    check: "Asigna un nivel de riesgo (1–5) y la razón (PII/auditoría/criticidad).",
  },
  {
    tag: "M2-S10 · Selección",
    title: "Matriz Impacto / Esfuerzo / Riesgo",
    text: "Prioriza con números: Impacto (valor) vs Esfuerzo (cambio) vs Riesgo (gobernanza). Decide top-3 antes de modelar en detalle.",
    examples: {
      itsm: ["Impacto alto si tickets/mes alto", "Esfuerzo medio por integraciones ITSM/KB", "Riesgo medio por P1"],
      hr:   ["Impacto medio-alto por volumen y reputación", "Esfuerzo medio por RBAC y data policy", "Riesgo alto por PII"],
      proc: ["Impacto alto por lead time y dependencia", "Esfuerzo alto por ERP/approval", "Riesgo medio-alto por compliance"],
    },
    check: "Puntúa 5 procesos (1–5) y calcula score (elige fórmula y sé consistente).",
  },
  {
    tag: "M2-S10 · Contrato",
    title: "SIPOC: contrato mínimo antes de AS-IS/TO-BE",
    text: "SIPOC define límites y evita scope creep: suppliers/inputs/process/outputs/customers. Si esto no cierra, el rediseño se rompe.",
    examples: {
      itsm: ["Suppliers: usuarios, monitoring", "Inputs: ticket+contexto", "Outputs: resolución/escalado", "Customers: usuario+owner"],
      hr:   ["Suppliers: empleados, payroll", "Inputs: solicitud+documentos", "Outputs: respuesta+registro", "Customers: empleado+HR"],
      proc: ["Suppliers: proveedor, compras", "Inputs: docs fiscales", "Outputs: alta/rechazo", "Customers: compras+finanzas"],
    },
    check: "Completa SIPOC con 4–6 pasos en ‘Process’ (verbos).",
  },
  {
    tag: "M2-S10 · Frontera",
    title: "Frontera del sistema: qué NO entra",
    text: "Define el no-alcance ahora. Es parte de la calidad: protege tiempo, reduce conflicto y hace viable el MVP.",
    examples: {
      itsm: ["No-alcance: automatizar cambios mayores (CAB)", "No-alcance: cerrar P1 sin humano"],
      hr:   ["No-alcance: asesoría legal personalizada", "No-alcance: decisiones disciplinarias"],
      proc: ["No-alcance: negociación de precios", "No-alcance: excepciones sin aprobación humana"],
    },
    check: "Escribe 2 puntos de no-alcance para tu proceso candidato.",
  },
  {
    tag: "M2-S10 · Preparación IA",
    title: "¿Dónde la IA ayuda sin romper gobernanza?",
    text: "IA suele aportar en: extracción/clasificación, búsqueda (RAG), resumen y recomendación. Añade guardrails si hay PII o criticidad.",
    examples: {
      itsm: ["Clasificación semántica", "RAG sobre KB", "Resumen de ticket para escalado"],
      hr:   ["Extracción de campos (sin guardar PII libre)", "RAG sobre políticas", "Asistente de redacción con plantillas"],
      proc: ["Extracción/validación docs", "Detección de inconsistencias", "Rutas de aprobación sugeridas"],
    },
    check: "Propón 1 palanca IA + 1 control (HITL/auditoría/RBAC/minimización).",
  },
  // --- EXTENSIÓN OPCIONAL: 2 TARJETAS NUEVAS ---
  {
    tag: "M2-S10 · MVP",
    title: "Producto Mínimo Viable (MVP)",
    text: "Enfócate en la funcionalidad core que aporta el 80% del valor. Deja los edge cases para iteraciones futuras.",
    examples: {
      itsm: ["MVP: Triage automático solo para tickets de baja severidad"],
      hr:   ["MVP: Autorespuesta para FAQs de nómina básicas"],
      proc: ["MVP: Validación automatizada solo para proveedores nacionales"],
    },
    check: "Define qué funcionalidad será el corazón de tu MVP.",
  },
  {
    tag: "M2-S10 · Mejora Continua",
    title: "Iteración tras el despliegue",
    text: "El proceso no termina en el TO-BE. Monitoriza el nuevo baseline y recoge feedback real de los usuarios.",
    examples: {
      itsm: ["Revisión semanal de falsos positivos en triage IA"],
      hr:   ["Encuesta de satisfacción de 1 clic al cerrar solicitud"],
      proc: ["Auditoría mensual de los tiempos de aprobación del ERP"],
    },
    check: "Propón 1 mecanismo para recoger feedback post-despliegue.",
  },
  // ---------------------------------------------
  {
    tag: "Puente a M2-S11",
    title: "Salida del día: candidato + baseline + SIPOC",
    text: "Hoy se cierra selección y contrato. En M2-S11 harás AS-IS/TO-BE paso a paso y gobernanza (RACI/RAID).",
    examples: {
      itsm: ["Salida: SIPOC triage + baseline misrouting", "Preparar AS-IS dolores por paso"],
      hr:   ["Salida: SIPOC solicitudes + baseline tiempo respuesta", "Preparar restricciones PII y audit"],
      proc: ["Salida: SIPOC alta proveedor + baseline lead time", "Preparar dependencias ERP"],
    },
    check: "Entrega 1: inventario L1 + matriz priorización + SIPOC del ganador (1 página).",
  },
];

// =====================
// Pistas (caso guiado) por track + Extensión "No-alcance"
// =====================
const PISTA_STEPS = {
  itsm: [
    { t:"ITSM Triage · Objetivo", b:"Reducir misrouting y retrabajo sin perder trazabilidad.", q:"¿Quién es el cliente del proceso (customers)?"},
    { t:"L0/L1/L2", b:"L1: Gestión de incidencias. L2: triage por severidad y canal.", q:"Escribe 1 L2 alternativo (variante operativa)."},
    { t:"Dolores AS-IS", b:"Misrouting, KB desactualizada, escalados innecesarios, P1 críticos.", q:"Marca 2 dolores medibles y 1 evidencia."},
    { t:"Prioriza", b:"Impacto alto si volumen alto; riesgo por P1 y auditoría.", q:"Puntúa Impacto/Esfuerzo/Riesgo (1–5) y explica."},
    { t:"SIPOC", b:"Cierra límites del proceso para evitar scope creep.", q:"Completa Suppliers/Inputs/Process(4–6)/Outputs/Customers."},
    { t:"No-alcance", b:"Define qué queda fuera del MVP.", q:"Escribe 2 cosas que NO harías en el primer rediseño."} 
  ],
  hr: [
    { t:"HR · Objetivo", b:"Responder solicitudes con PII minimizada y auditoría.", q:"¿Qué tipo de solicitudes entran y cuáles NO?"},
    { t:"L0/L1/L2", b:"L1: Gestionar solicitudes HR. L2: sensible vs general.", q:"Define un L2 sensible y un L2 general."},
    { t:"Riesgo PII", b:"Aquí el riesgo manda el diseño: RBAC, minimización, logs.", q:"¿Qué input contiene PII y cómo lo minimizas?"},
    { t:"Prioriza", b:"No priorices solo por volumen: penaliza riesgo alto.", q:"Puntúa Impacto/Esfuerzo/Riesgo y justifica."},
    { t:"SIPOC", b:"Contrato mínimo antes de rediseñar.", q:"Completa SIPOC y añade 1 control (auditoría/HITL/RBAC)."},
    { t:"No-alcance", b:"Define límites claros para no sobrecargar el MVP.", q:"Escribe 2 cosas que quedan fuera."} 
  ],
  proc: [
    { t:"Procurement · Objetivo", b:"Reducir lead time de alta proveedor y rechazos por docs incompletos.", q:"¿Qué output define ‘alta exitosa’?"},
    { t:"L0/L1/L2", b:"L1: Alta de proveedor. L2: estándar vs excepción.", q:"Define la excepción más común y por qué existe."},
    { t:"Dolores AS-IS", b:"Ida y vuelta por documentos, aprobaciones opacas, dependencia ERP.", q:"Marca 2 dolores y 1 dependencia clave."},
    { t:"Prioriza", b:"Alto impacto, alto esfuerzo: exige MVP y no-alcance.", q:"Puntúa Impacto/Esfuerzo/Riesgo y explica el trade-off."},
    { t:"SIPOC", b:"Contrato mínimo + compliance.", q:"Completa SIPOC e indica dónde entra auditoría/aprobación."},
    { t:"No-alcance", b:"Evita el scope creep desde el día 1.", q:"Escribe 2 excepciones que seguirán siendo manuales."} 
  ],
};

// =====================
// Helpers DOM
// =====================
function $(sel, root=document){ return root.querySelector(sel); }
function el(tag, cls){ const n=document.createElement(tag); if(cls) n.className=cls; return n; }

function ensureTrackSelector() {
  const sel = $("#trackSel");
  if (!sel) return;

  const t = getTrack();
  sel.value = t;

  sel.addEventListener("change", (e) => {
    setTrack(e.target.value);
  });
}

function pill(label, key, href){
  const a = el(href ? "a" : "span", "pill");
  a.innerHTML = `<strong>${key}</strong> <span>${label}</span>`;
  if(href){ a.href = href; }
  return a;
}

function toggleMark(idx, btn){
  const marks = JSON.parse(localStorage.getItem("marks")||"{}");
  const t = getTrack();
  const key = `${t}:${idx}`;
  marks[key] = !marks[key];
  localStorage.setItem("marks", JSON.stringify(marks));
  btn.textContent = marks[key] ? "Marcado" : "Marcar";
  btn.classList.toggle("primary", !!marks[key]);
}

function renderFeed(){
  const wrap = $("#feedWrap");
  if(!wrap) return;

  const t = getTrack();
  wrap.innerHTML = ""; 

  LESSONS.forEach((L, idx) => {
    const snap = el("section","cardSnap");
    const card = el("article","lessonCard");

    const main = el("div","lessonMain");
    const side = el("aside","lessonSide");

    const top = el("div","titleRow");
    const badge = el("span","badge");
    badge.textContent = L.tag;

    const markerBtn = el("button","btn");
    markerBtn.type="button";
    markerBtn.textContent = "Marcar";
    markerBtn.onclick = () => toggleMark(idx, markerBtn);

    top.appendChild(badge);
    top.appendChild(markerBtn);

    const h2 = el("h2"); h2.textContent = L.title;
    const p = el("p"); p.textContent = L.text;

    const call = el("div","callout");
    const cb = el("b"); cb.textContent = "Micro-entregable (30–90s)";
    const cs = el("span"); cs.textContent = L.check;
    call.appendChild(cb); call.appendChild(cs);

    main.appendChild(top);
    main.appendChild(h2);
    main.appendChild(p);
    main.appendChild(call);

    const ex = el("div","sideBlock");
    const exH = el("h4"); exH.textContent = `Ejemplo · ${TRACKS.find(x=>x.id===t).name}`;
    const ul = el("ul");

    (L.examples[t] || []).forEach(txt => {
      const li = el("li"); li.textContent = txt;
      ul.appendChild(li);
    });
    ex.appendChild(exH); ex.appendChild(ul);

    const act = el("div","sideBlock");
    const actH = el("h4"); actH.textContent = "Acciones rápidas";
    const actions = el("div","actions");
    actions.appendChild(pill("Ir al Lab", "→", "lab.html"));
    actions.appendChild(pill("Pistas del caso", "⇢", "pista.html"));
    act.appendChild(actH); act.appendChild(actions);

    side.appendChild(ex);
    side.appendChild(act);

    card.appendChild(main);
    card.appendChild(side);
    snap.appendChild(card);
    wrap.appendChild(snap);
  });
}

// =====================
// Pista (secuencia horizontal por track)
// =====================
function setupPista(){
  const wrap = $("#pistaWrap");
  if(!wrap) return;

  const t = getTrack();
  const steps = PISTA_STEPS[t] || [];
  wrap.innerHTML = "";

  steps.forEach((s,i)=>{
    const sec = el("section","pista");
    const card = el("div","pistaCard");
    card.innerHTML = `
      <div class="badge">Pista ${i+1}/${steps.length} · ${TRACKS.find(x=>x.id===t).name}</div>
      <h2 style="margin:10px 0 6px 0">${s.t}</h2>
      <p style="margin:0;color:var(--muted);line-height:1.45">${s.b}</p>
      <hr class="sep"/>
      <b style="display:block;font-size:13px">Check</b>
      <p style="margin:6px 0 10px 0;color:var(--muted)">${s.q}</p>
      <textarea placeholder="Escribe aquí..."></textarea>
      <div class="footerHint">Tip: breve + 1 dato o condición.</div>
    `;
    sec.appendChild(card);
    wrap.appendChild(sec);
  });

  const prog = $("#prog");
  if(!prog) return;

  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const idx = [...wrap.children].indexOf(e.target);
        const pct = ((idx+1)/wrap.children.length)*100;
        prog.style.width = pct.toFixed(0)+"%";
      }
    });
  }, { root: wrap, threshold: .6 });

  [...wrap.children].forEach(ch=>io.observe(ch));
}

// =====================
// Lab export + Extensión Trade-off (Versión Mejorada/Bonita)
// =====================
function exportLabToMarkdown(){
  const out = $("#mdOut");
  const inv = $("#inv")?.value.trim() || "";
  const pr  = $("#prio")?.value.trim() || "";
  const sip = $("#sipoc")?.value.trim() || "";

  const t = getTrack();
  const tName = TRACKS.find(x=>x.id===t)?.name || t;

  // 1. Convertir Inventario en una lista con viñetas
  let invFormatted = "_(vacío)_";
  if (inv) {
    invFormatted = inv.split('\n')
                      .map(line => line.trim() ? `- ${line.trim()}` : '')
                      .filter(Boolean)
                      .join('\n');
  }

  // 2. Convertir la Priorización en una Tabla Markdown real
  let prFormatted = "_(vacío)_";
  if (pr) {
    const rows = pr.split('\n').filter(line => line.trim() !== '');
    prFormatted = "| Proceso | Impacto | Esfuerzo | Riesgo | Score | Nota |\n";
    prFormatted += "|---|:---:|:---:|:---:|:---:|---|\n";
    rows.forEach(row => {
      let cells = row.split('|').map(c => c.trim());
      if(cells.length > 0) {
         prFormatted += `| ${cells.join(' | ')} |\n`;
      }
    });
  }

  // 3. Poner en negrita las palabras clave del SIPOC automáticamente
  let sipFormatted = "_(vacío)_";
  if (sip) {
    sipFormatted = sip
      .replace(/Suppliers:/gi, "**Suppliers:**")
      .replace(/Inputs:/gi, "**Inputs:**")
      .replace(/Process:/gi, "**Process:**")
      .replace(/Outputs:/gi, "**Outputs:**")
      .replace(/Customers:/gi, "**Customers:**");
  }

  // 4. Construir el documento final con emojis y separadores
  const md = [
    `# 🎯 M2-S10 · Entregable rápido · ${tName}`,
    "",
    "---",
    "",
    "## 📋 1. Inventario (L1)",
    invFormatted,
    "",
    "## ⚖️ 2. Priorización (Impacto / Esfuerzo / Riesgo)",
    prFormatted,
    "",
    "## 🧾 3. SIPOC",
    sipFormatted,
    "",
    "---",
    "",
    "## 💡 4. Nota y Trade-off principal",
    "> **Trade-off principal:** Sacrificamos la automatización total (0-touch) a cambio de mantener control humano en los permisos que requieren revisión de justificantes médicos.",
    "> ",
    "> **Restricción dominante:** Minimización y control de acceso a PII (datos de salud y familiares en los adjuntos)."
  ].join("\n");

  out.value = md;
}

function downloadText(filename, text){
  const blob = new Blob([text], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

// =====================
// Boot
// =====================
document.addEventListener("DOMContentLoaded", ()=>{
  ensureTrackSelector();
  if($("#feedWrap")) renderFeed();
  setupPista();

  const exp = $("#btnExport");
  if(exp) exp.addEventListener("click", exportLabToMarkdown);

  const dl = $("#btnDownload");
  if(dl) dl.addEventListener("click", ()=>{
    const text = $("#mdOut").value || "";
    const t = getTrack();
    downloadText(`m2-s10_${t}_entregable.md`, text);
  });
});
