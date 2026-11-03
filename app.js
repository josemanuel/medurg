'use strict';
const drugs = [
 {n:'Atropina',b:'',p:'1 mg / 1 ml',c:'Anticolinérgico',i:'Bradicardias extremas, ritmo periparada',a:'IV directo o diluido; perfusión continua; IM/SC',d:'IV directo: 1 min lento. PC: 1 amp (1 mg) + 100 ml SF o SG5.',w:'Advertencia: no usar tapones antirreflujo.'},
 {n:'Adrenalina',b:'',p:'1 mg / 1 ml',c:'Vasopresores',i:'Uso según protocolo de emergencias',a:'IV directo; perfusión continua; IM/SC',d:'Consultar protocolo local y presentación disponible.',w:'Medicamento de alto riesgo. Verificar concentración y vía.'},
 {n:'Etomidato',b:'Hyptomidate®',p:'20 mg / 10 ml',c:'Inductores anestésicos',i:'Inducción IOT',a:'IV directo',d:'Administración IV directa según prescripción y protocolo.',w:'Requiere monitorización y personal entrenado.'},
 {n:'Ketamina',b:'Ketolar®',p:'500 mg / 10 ml',c:'Inductores anestésicos',i:'Inducción IOT',a:'IV directo o diluido; IM',d:'Se indica dilución posible con 10 ml de API.',w:'Verificar presentación y concentración.'},
 {n:'Propofol',b:'',p:'200 mg / 20 ml',c:'Inductores anestésicos',i:'Inducción IOT',a:'IV directo; perfusión continua',d:'Preparación según protocolo local.',w:'Requiere monitorización avanzada.'},
 {n:'Midazolam',b:'Dormicum®',p:'15 mg / 3 ml',c:'Benzodiazepinas',i:'Sedación; convulsión según protocolo',a:'IV directo/diluido; perfusión; IM',d:' 1 amp + 12 ml SF, concentración indicada 1 mg/ml; PC 3 amp + 100 ml SF o SG5.',w:'Comprobar concentración final de forma independiente.'},
 {n:'Clonazepam',b:'Rivotril®',p:'1 mg / 1 ml',c:'Benzodiazepinas',i:'Convulsión',a:'IV directo/diluido; IM',d:' 1 amp + 1 ml API, concentración indicada 0,5 mg/ml.',w:'Verificar velocidad y protocolo.'},
 {n:'Diazepam',b:'Valium®',p:'10 mg / 2 ml',c:'Benzodiazepinas',i:'Convulsión',a:'IV directo/diluido; IM',d:' 1 amp + 8 ml SF o SG5, concentración indicada 1 mg/ml.',w:'Verificar compatibilidad y vía.'},
 {n:'Atracurio',b:'',p:'50 mg / 5 ml',c:'Relajantes musculares',i:'Inducción IOT',a:'IV directo',d:'Administración según prescripción y protocolo.',w:'Paralizante. Confirmar capacidad de ventilación y sedación.'},
 {n:'Cisatracurio',b:'Nimbex®',p:'10 mg / 5 ml',c:'Relajantes musculares',i:'Inducción IOT',a:'IV directo',d:'Administración según prescripción y protocolo.',w:'Paralizante. Confirmar capacidad de ventilación y sedación.'},
 {n:'Suxametonio',b:'Anectine®',p:'100 mg / 2 ml',c:'Relajantes musculares',i:'Inducción IOT, relajación',a:'IV directo; perfusión',d:' PC 50 mg + 100 ml SF o SG5.',w:'Se indica conservación limitada a temperatura ambiente.'},
 {n:'Rocuronio',b:'Esmerón®',p:'50 mg / 5 ml',c:'Relajantes musculares',i:'Inducción IOT',a:'IV directo',d:'Administración según prescripción y protocolo.',w:'Paralizante. Confirmar capacidad de ventilación y sedación.'},
 {n:'Neostigmina',b:'Prostigmine®',p:'0,5 mg / 1 ml',c:'Antagonistas RM',i:'Reversión del bloqueo neuromuscular',a:'IV directo; IM/SC',d:'Ver pauta médica y protocolo.',w:'La asociación y monitorización dependen del contexto clínico.'},
 {n:'Sugammadex',b:'Bridion®',p:'200 mg / 2 ml',c:'Antagonistas RM',i:'Reversión de rocuronio',a:'IV directo',d:'Administración según prescripción y ficha técnica.',w:'Dosis dependiente del grado de bloqueo.'},
 {n:'Flumazenilo',b:'Anexate®',p:'0,5 mg / 5 ml',c:'Antídotos',i:'Reversión de benzodiazepinas',a:'IV directo o diluido; perfusión',d:' PC 5 amp (2,5 mg) en 100-250 ml SF o SG5.',w:'Puede precipitar convulsiones en determinados contextos.'},
 {n:'Naloxona',b:'',p:'0,4 mg / 1 ml',c:'Antídotos',i:'Reversión del efecto opioide',a:'IV directo/diluido; perfusión; IM',d:' PC 5 amp (2 mg) + 100 ml SF o SG5.',w:'Titular y vigilar recurrencia según protocolo.'},
 {n:'Morfina',b:'',p:'10 mg / 1 ml',c:'Opioides',i:'Analgesia según protocolo',a:'IV directo/diluido; perfusión; IM/SC',d:' 1 amp + 9 ml SF, concentración 1 mg/ml; PC 20 mg + 100 ml.',w:'Opioide. Monitorizar ventilación y nivel de conciencia.'},
 {n:'Fentanilo',b:'Fentanest®',p:'0,15 mg / 3 ml',c:'Opioides',i:'Analgesia / sedoanalgesia',a:'IV directo/diluido; perfusión; IM/SC',d:' 1 amp + 12 ml SF, concentración 0,01 mg/ml; PC 0,45 mg + 100 ml.',w:'Usar unidades coherentes; alto riesgo de error mg/microgramos.'},
 {n:'Petidina',b:'Dolantina®',p:'50 mg / 1 ml',c:'Opioides',i:'Analgesia según protocolo',a:'IV directo/diluido; IM/SC',d:' diluir 50 mg en 10-100 ml SF o SG5.',w:'Revisar indicación, contraindicaciones e interacciones.'},
 {n:'Ondansetrón',b:'',p:'8 mg / 4 ml',c:'Antieméticos',i:'Antiemético',a:'IV directo o diluido',d:' 8 mg + 100 ml SF o SG5.',w:'Verificar riesgo de prolongación QT.'},
 {n:'Metoclopramida',b:'Primperan®',p:'10 mg / 2 ml',c:'Antieméticos',i:'Antiemético',a:'IV directo o diluido; IM',d:' 10 mg + 100 ml SF o SG5.',w:'Revisar contraindicaciones y efectos extrapiramidales.'},
 {n:'Alteplasa (ictus)',b:'Actilyse®',p:'20-50 mg',c:'Trombolíticos',i:'Ictus isquémico seleccionado',a:'IV bolo + perfusión',d:' 0,9 mg/kg (máx. 90 mg); 10% en 1 min y 90% en 1 h.',w:'ALTO RIESGO. Aplicar exclusivamente protocolo de ictus y doble control.'},
 {n:'Alteplasa (embolia)',b:'Actilyse®',p:'20-50 mg',c:'Trombolíticos',i:'Embolia pulmonar seleccionada',a:'IV carga + perfusión',d:' carga 10 mg; si >65 kg, 90 mg en 2 h; si <65 kg, 1,5 mg/kg en 2 h.',w:'ALTO RIESGO. Confirmar protocolo, peso y criterios de inclusión/exclusión.'},
 {n:'Noradrenalina',b:'Norages®',p:'4 mg / 4 ml',c:'Vasopresores',i:'Soporte vasopresor',a:'Perfusión continua',d:' 8 mg + 100 ml SG5, 3-10 ml/h.',w:'Alto riesgo. Vía, concentración, objetivo y monitorización según protocolo.'},
 {n:'Dobutamina',b:'Dobucor®',p:'250 mg / 20 ml',c:'Vasopresores',i:'Soporte inotrópico',a:'Perfusión continua',d:' 500 mg + 250 ml SG5 o SF, 8-10 ml/h.',w:'Ajuste según respuesta y monitorización.'},
 {n:'Dopamina',b:'',p:'200 mg / 5 ml',c:'Vasopresores',i:'Soporte vasoactivo seleccionado',a:'Perfusión continua',d:' 400 mg + 250 ml SG5 o SF, 6-8 ml/h.',w:'Validar indicación y objetivos hemodinámicos.'},
 {n:'Isoprenalina',b:'Aleudrina®',p:'0,2 mg / 1 ml',c:'Vasopresores',i:'Bloqueos de alto grado',a:'Perfusión continua',d:' 1 mg + 250 ml SG5 o SF, 10-30 ml/h.',w:'Monitorización electrocardiográfica continua.'},
 {n:'Nitroglicerina',b:'Solinitrina®',p:'50 mg / 10 ml',c:'Hipotensores',i:'Según protocolo cardiovascular',a:'Perfusión continua',d:' 50 mg + 250 ml SG5 o SF, 4-8 ml/h; material de baja adsorción.',w:'Titular a objetivo con monitorización.'},
 {n:'Urapidil',b:'Elgadil®',p:'50 mg / 10 ml',c:'Hipotensores',i:'Control de presión arterial seleccionado',a:'IV bolo; perfusión',d:' 25 mg; repetir 50 mg si procede; PC 250 mg + 250 ml, 15 ml/h.',w:'Confirmar objetivos y velocidad.'},
 {n:'Labetalol',b:'Trandate®',p:'100 mg / 20 ml',c:'Hipotensores',i:'Control de presión arterial seleccionado',a:'IV bolo; perfusión',d:' bolo lento 5-10 mg; PC 250 mg + 250 ml, 15 ml/h.',w:'Validar la pauta antes de uso.'},
 {n:'Adenosina',b:'Adenocor®',p:'6 mg / 2 ml',c:'Miscelánea',i:'Taquicardia seleccionada según algoritmo',a:'IV directa rápida',d:' 6 mg, 12 mg, 18 mg con embolada de 20 ml SF.',w:'Monitorización continua y equipo de reanimación disponible.'},
 {n:'Amiodarona',b:'Trangorex®',p:'150 mg / 3 ml',c:'Miscelánea',i:'Arritmias cardiacas',a:'IV carga + perfusión',d:' carga 300 mg + 100 ml SG5; PC 750 mg + 250 ml SG5.',w:'Verificar pauta del algoritmo aplicable.'},
 {n:'Ácido tranexámico',b:'Amchafibrin®',p:'500 mg / 5 ml',c:'Miscelánea',i:'Hemorragia seleccionada',a:'IV carga + perfusión',d:' carga 1 g + 100 ml; PC 1 g + 500 ml en 8 h.',w:'Validar indicación y momento de administración.'},
 {n:'Acetilcisteína',b:'',p:'5 g / 25 ml',c:'Antídotos',i:'Antídoto de paracetamol',a:'Perfusión continua',d:'La ficha incluye tres fases basadas en peso.',w:'PAUTA PENDIENTE DE VALIDACIÓN: cotejar la pauta completa con el protocolo vigente y la ficha técnica.'},
 {n:'Hidroxicobalamina',b:'Cyanokit®',p:'2,5 g',c:'Antídotos',i:'Cianuro / exposición a humo de incendios',a:'IV diluido',d:' 5 g + 100 ml SF en 15 min; no agitar; usar filtro del kit.',w:'Seguir instrucciones del kit y protocolo toxicológico.'},
 {n:'Suero antiofídico',b:'Viperatab® / Viperfav®',p:'Según marca',c:'Antídotos',i:'Picadura de víbora',a:'IV diluido',d:' +100 ml SF en 30 min; dosis diferente según marca.',w:'Seguir ficha técnica, prospecto y circuito toxicológico.'},
 {n:'Sulfato de magnesio',b:'Sulmetin®',p:'1,5 g / 10 ml',c:'Miscelánea',i:'Según protocolo',a:'IV directo o diluido',d:' 1,5 g + 100 ml SF o SG5.',w:'Confirmar indicación, dosis y velocidad.'},
 {n:'Manitol',b:'',p:'10-20% 500 ml',c:'Miscelánea',i:'Según protocolo',a:'Perfusión IV',d:' 0,5-1 g/kg en 30 min.',w:'Puede cristalizar; verificar solución y equipo según protocolo.'},
 {n:'Cloruro sódico hipertónico',b:'',p:'NaCl 20 mEq / 10 ml',c:'Miscelánea',i:'Preparación hipertónica',a:'IV',d:' 3% = 10 ml NaCl 20% + 90 ml SF; 7% = 30 ml NaCl 20% + 70 ml SF.',w:'Alto riesgo. Preparación por protocolo y doble comprobación.'},
 {n:'Atenolol',b:'Tenormin®',p:'5 mg / 10 ml',c:'Hipotensores',i:'Según protocolo cardiovascular',a:'IV directo lento',d:'La ficha incluye bolo IV lento; revisar pauta exacta en protocolo local.',w:'Validar indicación, contraindicaciones, dosis máxima y monitorización.'},
 {n:'Digoxina',b:'',p:'0,5 mg / 2 ml',c:'Miscelánea',i:'Según protocolo cardiológico',a:'IV directa o diluida',d:'La ficha incluye administración IV directa o diluida.',w:'Margen terapéutico estrecho. Verificar función renal, electrolitos e interacciones.'},
 {n:'Levosimendán',b:'Simdax®',p:'12,5 mg / 5 ml',c:'Miscelánea',i:'Soporte inotrópico seleccionado',a:'Perfusión continua',d:'La ficha incluye carga y perfusión; cotejar cifras con protocolo antes de uso.',w:'Uso especializado con monitorización hemodinámica.'},
 {n:'Omeprazol',b:'',p:'40 mg polvo',c:'Miscelánea',i:'Según protocolo',a:'IV diluido',d:'Reconstituir y administrar conforme a la presentación disponible y ficha técnica.',w:'El diluyente y estabilidad dependen de la presentación.'},
 {n:'Complejo protrombínico humano',b:'Prothromplex Total®',p:'500 UI',c:'Hemostasia / reversión',i:'Reversión anticoagulante seleccionada',a:'IV directo lento',d:' 1 vial con 17 ml de agua esterilizada; administración lenta, sin superar 2 ml/min.',w:'ALTO RIESGO. Dosis según INR, peso, indicación y protocolo; requiere doble control.'},
 {n:'Somatostatina',b:'',p:'3 mg polvo + 1 ml API',c:'Hemostasia / reversión',i:'Hemorragia digestiva según protocolo',a:'IV carga y perfusión',d:'La ficha incluye bolo y perfusión continua; revisar pauta completa con protocolo local.',w:'Validar reconstitución, dosis, velocidad y duración.'},
 {n:'Heparina sódica',b:'',p:'50 mg / 5000 UI / 5 ml',c:'Heparinas',i:'Anticoagulación según protocolo',a:'IV directo o perfusión',d:'La ficha incluye carga y perfusión continua; revisar pauta según indicación.',w:'ALTO RIESGO. Prescribir y calcular en UI; doble comprobación y monitorización.'}
];
const familyStyles={
 'Anticolinérgico':['#8b5a00','#fff0cf'],'Vasopresores':['#8b5a00','#fff0cf'],'Inductores anestésicos':['#8b5a00','#fff0cf'],
 'Benzodiazepinas':['#54358c','#eee6ff'],'Relajantes musculares':['#8a3654','#fde6ef'],'Antagonistas RM':['#0a6c68','#dff6f3'],
 'Antídotos':['#9a3127','#ffe5df'],'Opioides':['#255c99','#e2efff'],'Antieméticos':['#087a4f','#dcf7ea'],
 'Trombolíticos':['#a01f42','#ffe1e9'],'Hipotensores':['#6a4d1f','#f5ead8'],'Miscelánea':['#43515b','#e8edf0'],
 'Hemostasia / reversión':['#71336f','#f4e3f3'],'Heparinas':['#7a2e47','#f6e1e8']
};
const ICONS={
 bolo:{label:'Bolo directo',svg:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 5v9m12-9v9M14 14h20v8a10 10 0 0 1-20 0z"/><path d="M24 30v13m-5-5 5 5 5-5"/></svg>'},
 nodilute:{label:'No diluir',svg:'<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="11" width="32" height="26" rx="3"/><path d="M10 13l28 22M38 13 10 35"/></svg>'},
 sf:{label:'Suero fisiológico 0,9%',svg:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M16 6h16v7l4 5v20a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V18l4-5z"/><path class="fill-blue" d="M14 25h20v13a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2z"/><path d="M24 42v4"/></svg>'},
 sg5:{label:'Suero glucosado 5%',svg:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M16 6h16v7l4 5v20a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V18l4-5z"/><path class="fill-red" d="M14 25h20v13a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2z"/><path d="M24 42v4"/></svg>'},
 pump:{label:'Bomba de perfusión',svg:'<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="22" cy="27" r="15"/><path d="M22 12V7m-5 0h10M37 22h5v14h-5M13 18l-4-4"/><circle cx="22" cy="27" r="2"/></svg>'},
 fridge:{label:'Nevera',svg:'<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="12" y="5" width="24" height="38" rx="3"/><path d="M12 22h24M17 13v5m0 9v7M25 10v8m-4-4h8m-4-4 4 7m-8 0 8-7"/></svg>'},
 special:{label:'Indicación especial',svg:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M4 24s8-13 20-13 20 13 20 13-8 13-20 13S4 24 4 24z"/><circle cx="24" cy="24" r="6"/><path d="M24 2v5M8 7l4 4M40 7l-4 4"/></svg>'},
 rl:{label:'Ringer lactato',svg:'<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="8" width="34" height="32" rx="5"/><text x="24" y="31" text-anchor="middle">RL</text></svg>'}
};
function familyStyle(cat){const [fg,bg]=familyStyles[cat]||['#43515b','#e8edf0'];return `--family:${fg};--family-bg:${bg}`;}
function iconsFor(x){const t=`${x.a} ${x.d} ${x.w}`.toLowerCase(),set=[];
 if(/iv directo|iv directa|bolo/.test(t))set.push('bolo');
 if(/sin diluir|no diluir/.test(t))set.push('nodilute');
 if(/\bsf\b|fisiológ/.test(t))set.push('sf');
 if(/sg5|glucosado/.test(t))set.push('sg5');
 if(/perfusión|\bpc\b|ml\/h/.test(t))set.push('pump');
 if(/nevera|refriger|temperatura ambiente/.test(t))set.push('fridge');
 if(/ringer|\brl\b/.test(t))set.push('rl');
 if(/alto riesgo|advertencia|validar|verificar|monitoriz|especial|filtro|no agitar/.test(t))set.push('special');
 return [...new Set(set)];}
function iconMarkup(key,compact=false){const o=ICONS[key];return `<span class="med-icon ${compact?'compact':''}" title="${esc(o.label)}" aria-label="${esc(o.label)}">${o.svg}${compact?'':`<span>${esc(o.label)}</span>`}</span>`;}
function renderLegend(){$('#iconLegend').innerHTML=Object.keys(ICONS).map(k=>iconMarkup(k)).join('');}

const $=s=>document.querySelector(s), cards=$('#cards'), dialog=$('#drugDialog');
let favorites=new Set(JSON.parse(localStorage.getItem('urgentFavs')||'[]'));
const esc=s=>String(s||'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
function categories(){[...new Set(drugs.map(x=>x.c))].sort().forEach(c=>$('#category').insertAdjacentHTML('beforeend',`<option>${esc(c)}</option>`));}
function render(){const q=$('#search').value.trim().toLowerCase(),cat=$('#category').value,fav=$('#favoritesOnly').checked;const list=drugs.filter((x,i)=>{const hay=Object.values(x).join(' ').toLowerCase();return (!q||hay.includes(q))&&(cat==='all'||x.c===cat)&&(!fav||favorites.has(i));});$('#count').textContent=`${list.length} de ${drugs.length} fichas`;cards.innerHTML=list.map(x=>{const i=drugs.indexOf(x);return `<article class="drug-card family-card" style="${familyStyle(x.c)}"><div><span class="tag family-tag">${esc(x.c)}</span></div><h3>${esc(x.n)}</h3><div class="brand">${esc(x.b)}</div><div class="presentation">${esc(x.p)}</div><div class="summary"><strong>Indicación:</strong> ${esc(x.i)}</div><div class="card-icons">${iconsFor(x).map(k=>iconMarkup(k,true)).join('')}</div><div class="card-actions"><button class="secondary detail" data-i="${i}">Ver ficha</button><button class="secondary fav ${favorites.has(i)?'active':''}" data-i="${i}" aria-label="Favorito">★</button></div></article>`}).join('');$('#empty').hidden=!!list.length;}
function showDrug(i){const x=drugs[i];$('#dialogContent').innerHTML=`<span class="tag family-tag" style="${familyStyle(x.c)}">${esc(x.c)}</span><h2>${esc(x.n)}</h2><p>${esc(x.b)}</p><div class="detail-icons">${iconsFor(x).map(k=>iconMarkup(k)).join('')}</div><div class="detail-warning"><strong>Transcripción no validada:</strong> compruebe todos los datos con el protocolo vigente.</div><dl class="detail-grid"><dt>Presentación</dt><dd>${esc(x.p)}</dd><dt>Indicación</dt><dd>${esc(x.i)}</dd><dt>Vía / modalidad</dt><dd>${esc(x.a)}</dd><dt>Preparación</dt><dd>${esc(x.d)}</dd><dt>Advertencia</dt><dd>${esc(x.w)}</dd></dl>`;dialog.showModal();}
function calc(){const kg=Number($('#weight').value),pct=Number($('#burn').value);if(!(kg>0&&kg<=300&&pct>0&&pct<=100)){ $('#calcResult').textContent='Revisa los valores: peso 1-300 kg y SCQ 1-100%.';return;}const total=4*kg*pct,half=total/2;$('#calcResult').innerHTML=`Total teórico: <strong>${total.toLocaleString('es-ES',{maximumFractionDigits:1})} ml</strong><br>Primeras 8 h: ${half.toLocaleString('es-ES',{maximumFractionDigits:1})} ml (${(half/8).toLocaleString('es-ES',{maximumFractionDigits:1})} ml/h teóricos)<br>Siguientes 16 h: ${half.toLocaleString('es-ES',{maximumFractionDigits:1})} ml (${(half/16).toLocaleString('es-ES',{maximumFractionDigits:1})} ml/h teóricos)<br><small>Verificar hora de la quemadura, objetivos y ajustes clínicos.</small>`;}
categories();render();renderLegend();
['#search','#category','#favoritesOnly'].forEach(s=>$(s).addEventListener('input',render));
$('#clearBtn').onclick=()=>{$('#search').value='';$('#category').value='all';$('#favoritesOnly').checked=false;render();};
cards.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const i=Number(b.dataset.i);if(b.classList.contains('detail'))showDrug(i);else{favorites.has(i)?favorites.delete(i):favorites.add(i);localStorage.setItem('urgentFavs',JSON.stringify([...favorites]));render();}});
$('.side-nav').onclick=e=>{const b=e.target.closest('[data-view]');if(!b)return;document.querySelectorAll('.view').forEach(v=>v.hidden=true);$(`#${b.dataset.view}View`).hidden=false;document.querySelectorAll('.nav-btn').forEach(n=>n.classList.toggle('active',n===b));};
$('#gateCheck').onchange=e=>$('#enterBtn').disabled=!e.target.checked;$('#enterBtn').onclick=()=>$('#safetyGate').classList.add('hidden');
$('#calcBtn').onclick=calc;$('#resetCalc').onclick=()=>{$('#weight').value='';$('#burn').value='';$('#calcResult').textContent='Introduce peso y %SCQ.';};
$('#themeBtn').onclick=()=>document.body.classList.toggle('dark');

const unitFactor={mcg:0.001,mg:1,g:1000,UI:null};
function toMg(value,unit){return unit==='UI'?value:value*unitFactor[unit];}
function fmt(n,d=3){return Number(n).toLocaleString('es-ES',{maximumFractionDigits:d});}
function calculateDose(){
 const mode=$('#doseMode').value, dose=Number($('#doseValue').value), weight=Number($('#doseWeight').value), doseUnit=$('#doseUnit').value;
 const stockAmount=Number($('#stockAmount').value), stockUnit=$('#stockUnit').value, stockVolume=Number($('#stockVolume').value);
 const finalVolume=Number($('#finalVolume').value), duration=Number($('#duration').value), durationUnit=$('#durationUnit').value;
 const err=[]; if(!(dose>0))err.push('dosis'); if(mode==='perKg'&&!(weight>0&&weight<=300))err.push('peso'); if(!(stockAmount>0))err.push('cantidad de la presentación'); if(!(stockVolume>0))err.push('volumen de la presentación');
 if((doseUnit==='UI')!==(stockUnit==='UI'))err.push('unidades incompatibles (UI frente a masa)');
 if(err.length){$('#doseResult').innerHTML=`<strong>No se puede calcular.</strong> Revisa: ${esc(err.join(', '))}.`;return;}
 const prescribed=dose*(mode==='perKg'?weight:1), prescribedBase=toMg(prescribed,doseUnit), stockBase=toMg(stockAmount,stockUnit), draw=prescribedBase/(stockBase/stockVolume);
 if(!Number.isFinite(draw)||draw<=0){$('#doseResult').textContent='No se ha podido realizar el cálculo.';return;}
 let html=`<strong>Dosis calculada:</strong> ${fmt(prescribed)} ${esc(doseUnit)}${mode==='perKg'?` (${fmt(dose)} ${esc(doseUnit)}/kg × ${fmt(weight)} kg)`:''}<br><strong>Concentración de origen:</strong> ${fmt(stockAmount/stockVolume)} ${esc(stockUnit)}/ml<br><strong>Volumen a extraer:</strong> ${fmt(draw)} ml<br><span class="formula">${fmt(prescribed)} ${esc(doseUnit)} ÷ ${fmt(stockAmount/stockVolume)} ${esc(stockUnit)}/ml = ${fmt(draw)} ml</span>`;
 if(finalVolume>0){const finalConc=prescribed/finalVolume;html+=`<br><strong>Concentración final:</strong> ${fmt(finalConc)} ${esc(doseUnit)}/ml en ${fmt(finalVolume)} ml`;if(finalVolume<draw)html+=`<br><span class="bad">Advertencia: el volumen final es menor que el volumen a extraer.</span>`;}
 if(duration>0){const hours=durationUnit==='min'?duration/60:duration;if(finalVolume>0)html+=`<br><strong>Velocidad matemática:</strong> ${fmt(finalVolume/hours)} ml/h durante ${fmt(duration)} ${durationUnit==='min'?'min':'h'}`;else html+=`<br><span class="bad">Introduce volumen final para calcular ml/h.</span>`;}
 html+=`<div class="detail-warning"><strong>Resultado matemático, no pauta clínica.</strong> Comprueba unidades, concentración real, volumen final, compatibilidad, límites, vía y redondeo permitido.</div>`;$('#doseResult').innerHTML=html;
}
$('#doseCalcBtn').onclick=calculateDose;
$('#doseResetBtn').onclick=()=>{document.querySelectorAll('#doseView input').forEach(i=>i.value='');$('#doseResult').textContent='Introduce la dosis prescrita y la presentación disponible.';};
$('#doseMode').onchange=e=>$('#weightWrap').hidden=e.target.value!=='perKg';

$('#exportBtn').onclick=()=>{const data=drugs.filter((_,i)=>favorites.has(i));const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.download='favoritos-urgencias.json';a.click();URL.revokeObjectURL(a.href);};
