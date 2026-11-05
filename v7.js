'use strict';
(() => {
 const q=s=>document.querySelector(s), escPrint=s=>String(s??'').replace(/[&<>\"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[m]));
 function improveFavorites(){
  const old=q('#favoritesOnly'); if(!old||old.closest('.favorites-switch'))return;
  const label=old.closest('label'); label.className='favorites-switch';
  const text=[...label.childNodes].find(n=>n.nodeType===3); if(text)text.remove();
  old.insertAdjacentHTML('afterend','<span class="switch-track" aria-hidden="true"></span><span class="switch-copy"><strong>Solo favoritas</strong><small>Desactivado: mostrar todas</small></span>');
  const sync=()=>{const small=label.querySelector('small');small.textContent=old.checked?'Activado: solo favoritas':'Desactivado: mostrar todas';}; old.addEventListener('change',sync);sync();
 }
 function addPrintUI(){
  const sidebar=q('.sidebar');if(!sidebar||q('#printAllBtn'))return;
  const btn=document.createElement('button');btn.id='printAllBtn';btn.className='primary print-all-btn';btn.textContent='Imprimir fichas / Guardar PDF';btn.onclick=openPrint;const nav=sidebar.querySelector('nav');sidebar.insertBefore(btn,nav);
  document.body.insertAdjacentHTML('beforeend',`<dialog id="printDialog" class="print-modal"><article><div class="section-head"><div><h2>Imprimir fichas</h2><p>Configura la maquetación y revisa la vista previa.</p></div><span class="pill warning">Salida de impresión</span></div><div class="print-config"><label>Fichas por fila<select id="printColumns"><option value="1">1 ficha</option><option value="2" selected>2 fichas</option><option value="3">3 fichas</option><option value="4">4 fichas</option></select></label><label>Contenido<select id="printDetail"><option value="summary">Ficha resumida</option><option value="full">Ficha completa</option></select></label><label>Fichas incluidas<select id="printScope"><option value="all">Todas</option><option value="favorites">Solo favoritas</option><option value="filtered">Resultado actual del filtro</option></select></label><div class="actions"><button id="refreshPreviewBtn" class="secondary">Actualizar preview</button><button id="launchPrintBtn" class="primary">Imprimir / PDF</button></div></div><p class="print-help">En el diálogo del navegador selecciona “Guardar como PDF”. La aplicación no envía datos a ningún servidor.</p><div class="print-preview-wrap"><iframe id="printPreview" class="print-preview" title="Vista previa de impresión"></iframe></div></article><footer><button id="closePrintBtn" class="secondary">Cerrar</button></footer></dialog>`);
  q('#refreshPreviewBtn').onclick=renderPreview;q('#launchPrintBtn').onclick=()=>{renderPreview();setTimeout(()=>q('#printPreview').contentWindow.print(),120)};q('#closePrintBtn').onclick=()=>q('#printDialog').close();['#printColumns','#printDetail','#printScope'].forEach(s=>q(s).addEventListener('change',renderPreview));
 }
 function selectedMeds(){
  const scope=q('#printScope').value;
  if(scope==='favorites')return meds.filter(x=>favorites.has(x.id));
  if(scope==='filtered'){
   const query=q('#search').value.trim().toLowerCase(),cat=q('#category').value,fav=q('#favoritesOnly').checked;
   return meds.filter(x=>(!query||Object.values(x).join(' ').toLowerCase().includes(query))&&(cat==='all'||x.c===cat)&&(!fav||favorites.has(x.id)));
  }
  return meds;
 }
 function iconNames(x){try{return iconsFor(x).map(k=>iconDefs[k][0])}catch{return[]}}
 function printCard(x,full){
  const names=iconNames(x);let body=full?`<dl><dt>Presentación</dt><dd>${escPrint(x.p)}</dd><dt>Indicación</dt><dd>${escPrint(x.i)}</dd><dt>Vía</dt><dd>${escPrint(x.a)}</dd><dt>Preparación</dt><dd>${escPrint(x.d)}</dd><dt>Código cromático</dt><dd>${escPrint(colors[x.color]?.[1]||'Miscelánea')} · ${escPrint(colors[x.color]?.[2]||'Blanco')}</dd></dl>`:`<p><b>Presentación:</b> ${escPrint(x.p)}</p><p><b>Indicación:</b> ${escPrint(x.i)}</p>`;
  return `<article class="pcard color-${escPrint(x.color)}"><div class="ctag">${escPrint(x.c)}</div><h2>${escPrint(x.n)}</h2>${x.b?`<p class="brand">${escPrint(x.b)}</p>`:''}${body}${names.length?`<p class="icons"><b>Símbolos:</b> ${names.map(escPrint).join(' · ')}</p>`:''}<p class="warning">Verificar con el protocolo vigente.</p></article>`;
 }
 function printDoc(list,cols,full){
  const css=`@page{size:A4;margin:9mm}*{box-sizing:border-box}body{margin:0;color:#111;font:9.5pt Arial,sans-serif}.head{display:flex;justify-content:space-between;align-items:end;border-bottom:2px solid #0b4f6c;margin-bottom:7mm}.head h1{margin:0 0 3mm;font-size:17pt}.head p{margin:0 0 3mm}.grid{display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:4mm}.pcard{break-inside:avoid;border:1px solid #65727a;border-top:5px solid #fff;border-radius:3mm;padding:3mm;min-width:0}.pcard h2{font-size:${cols>=3?'10.5':'13'}pt;margin:2mm 0 1mm}.pcard p{margin:1.3mm 0}.pcard dl{display:grid;grid-template-columns:${cols>=3?'1fr':'29mm 1fr'};gap:1mm 2mm;margin:2mm 0}.pcard dt{font-weight:bold}.pcard dd{margin:0}.ctag{display:inline-block;padding:1.2mm 2mm;border:1px solid #555;border-radius:2mm;font-size:8pt;font-weight:bold;background:#fff}.brand{color:#555}.icons{font-size:8pt}.warning{padding-top:1.5mm;border-top:1px solid #ccc;color:#7b1d1d;font-size:7.5pt}.color-inductor{border-top-color:#DBBC4E}.color-benzodiazepina{border-top-color:#F47C20}.color-relajante{border-top-color:#FF6B7A}.color-anticolinergico{border-top-color:#8DC63F}.color-opioide{border-top-color:#71C5E8}.color-antiemetico{border-top-color:#F3C892}.color-simpaticomimetico,.color-hipotensor{border-top-color:#D6A9E3}.empty{padding:20mm;text-align:center}@media print{.pcard{box-shadow:none}}`;
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Fichas de medicación</title><style>${css}</style></head><body><header class="head"><h1>Medicación de Urgencias</h1><p>${list.length} fichas · ${full?'completas':'resumidas'} · ${cols} por fila</p></header>${list.length?`<main class="grid">${list.map(x=>printCard(x,full)).join('')}</main>`:'<p class="empty">No hay fichas en la selección.</p>'}</body></html>`;
 }
 function renderPreview(){const list=selectedMeds(),cols=Number(q('#printColumns').value),full=q('#printDetail').value==='full',frame=q('#printPreview');frame.srcdoc=printDoc(list,cols,full)}
 function openPrint(){q('#printDialog').showModal();renderPreview()}
 document.addEventListener('DOMContentLoaded',()=>{improveFavorites();addPrintUI()});
})();
