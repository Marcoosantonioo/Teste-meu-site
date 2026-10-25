const I={fwd:'<polyline points="9 18 15 12 9 6"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',star:'<polygon points="12 2 15 9 22 9 16 14 18 21 12 17 6 21 8 14 2 9 9 9"/>',repeat:'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',back:'<polyline points="15 18 9 12 15 6"/>',grid:'<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',dev:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',chl:'<path d="m15 18-6-6 6-6"/>',chr:'<path d="m9 18 6-6-6-6"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',heartf:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" fill="currentColor"/>',tup:'<path d="m18 15-6-6-6 6"/>',tdn:'<path d="m6 9 6 6 6-6"/>',play:'<polygon points="6 4 20 12 6 20 6 4"/>',pause:'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',next:'<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',prev:'<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>',shuf:'<path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>',rep:'<path d="M17 2l4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',check:'<path d="M20 6 9 17l-5-5"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',pin:'<path d="M12 17v5"/><path d="M9 3h6l-1 7 3 3H7l3-3z"/>',eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',grip:'<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>',edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',reset:'<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>',video:'<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M22 8l-6 4 6 4z"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clip:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M10 2h4"/>',sl:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4"/><path d="M19.1 4.9a10 10 0 0 1 0 14.2M4.9 19.1a10 10 0 0 1 0-14.2"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'};
const ic=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;
const $=s=>document.querySelector(s), fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
const TABS=[['cal','Agenda','cal'],['tasks','Tarefas','check'],['clip','Copiados','clip'],['pomo','Pomodoro','timer'],['set','Ajustes','sl'],['radio','Rádio','radio'],['tv','TV','radio'],['tempo','Tempo','sun'],['util','Utilidades','timer'],['notas','Notas','edit'],['links','Links','link'],['buscar','Buscar','search'],['livros','Livros','book'],['bem','Bem-estar','heart'],['music','Música','music']];
const S={open:false,tab:'music',
 m:{i:0,pos:0,play:true,shuf:false,rep:false,list:[{t:'Maré baixa',a:'Estúdio Cinco',d:212},{t:'Linha do horizonte',a:'Coro Vazio',d:187},{t:'Luz de neon',a:'Vera Lacerda',d:243}]},
 tasks:[{t:'Escrever as notas de versão da 0.2.22',w:'2h',d:false},{t:'Perguntar à Ana sobre o texto do onboarding',w:'5h',d:false},{t:'Responder a avaliação na App Store',w:'1d',d:false},{t:'Enviar a fatura de agosto',w:'3d',d:false},{t:'Reservar os voos de outubro',w:'8h',d:true}],
 clip:[{a:'S',c:'#7c3aed',t:'https://zoom.us/j/9876543210',h:'',pin:true},{a:'F',c:'#e5484d',t:'#F5A623',h:'18:41'},{a:'S',c:'#7c3aed',t:'Quinta às quatro funciona para mim. Vou enviar o link.',h:'18:37'},{a:'N',c:'#c99a06',t:'Perguntar à Ana sobre o segundo monitor antes de sexta',h:'18:33'},{a:'X',c:'#1f7ae0',t:'translatesAutoresizingMaskIntoConstraints = false',h:'18:16'},{a:'W',c:'#2a9d8f',t:'4929 1234 5678 0000',h:'18:08',sens:true,hide:true}],
 p:{mode:'focus',left:1500,run:false,done:0}};
let q='';
function say(x){if(ls.get('nop')==='1'&&S.p&&S.p.run&&S.p.mode==='focus')return;$('#live').textContent='';setTimeout(()=>$('#live').textContent=x,30)}
const TAB_COL={cal:'#ff3b30',tasks:'#0a84ff',clip:'#8e8e93',pomo:'#ff9500',set:'#636366',radio:'#ff2d55',tv:'#5e5ce6',music:'#fc3c44',tempo:'#32ade6',util:'#8e8e93',notas:'#ffcc00',links:'#64d2ff',buscar:'#8e8e93',livros:'#bf5af2',bem:'#ff375f'};
function txtOn(h){const c=(h||'#636366').replace('#','');const l=[0,2,4].map(i=>parseInt(c.substr(i,2),16)/255).map(v=>v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4));const L=0.2126*l[0]+0.7152*l[1]+0.0722*l[2];return (1.05/(L+0.05))>((L+0.05)/0.05)?'#ffffff':'#111111'}
function renderTabs(){
 $('#notch').dataset.tab=S.tab;$('#tabs').innerHTML=TABS.map(([id,l,i])=>(id==='radio'?'<span class="sp"></span>':'')+`<button class="tab" style="--tc:${TAB_COL[id]||'#636366'};--tt:${txtOn(TAB_COL[id])}" role="tab" id="t-${id}" aria-selected="${S.tab===id}" aria-controls="view" tabindex="${S.tab===id?0:-1}" aria-label="${l}" title="${l}" data-tab="${id}">${ic(i)}<span>${l}</span></button>`).join('')}
function viewInner(){
 const v=$('#view');v.setAttribute('aria-labelledby','t-'+S.tab);
 const m=S.m,tr=m.list[m.i];
if(S.tab==='music')v.innerHTML=`<section class="np" aria-label="Reprodução do Spotify"><div class="np-top"><span class="np-art" style="${tr.img?`background-image:url('${esc(tr.img)}')`:''}" aria-hidden="true"></span><div class="np-meta"><div class="np-title"><b>${esc(tr.t)}</b>${S.tok?`<button class="ib sm like" data-a="like" aria-pressed="${!!m.liked}" aria-label="Favoritar faixa">${ic(m.liked?'heartf':'heart')}</button>`:''}</div>${tr.al?`<div class="np-sub">Álbum: <span class="np-al">${esc(tr.al)}</span></div>`:''}<div class="np-sub">${esc(tr.a)}</div><div class="np-state" role="status">${m.play?'Tocando':'Pausada'}</div></div></div>
 <div class="prog"><span id="mpos">${fmt(m.pos)}</span><input class="seek" id="mseek" type="range" min="0" max="${tr.d}" step="1" value="${m.pos}" aria-label="Posição da faixa" aria-valuetext="${fmt(m.pos)} de ${fmt(tr.d)}" style="--p:${(m.pos/tr.d*100).toFixed(1)}%"><span>${fmt(tr.d)}</span></div>
 <div class="ctrl"><button class="ib" data-a="shuf" aria-pressed="${m.shuf}" aria-label="Aleatório">${ic('shuf')}</button><button class="ib" data-a="prev" aria-label="Faixa anterior">${ic('prev')}</button><button class="ib big" data-a="play" aria-label="${m.play?'Pausar':'Tocar'}">${ic(m.play?'pause':'play')}</button><button class="ib" data-a="next" aria-label="Próxima faixa">${ic('next')}</button><button class="ib" data-a="rep" aria-pressed="${m.rep}" aria-label="Repetir">${ic('rep')}</button></div>
 ${spDev()}${plsSection()}${spBox()}</section>`;
 if(S.tab==='cal')v.innerHTML=calView();
 if(S.tab==='tasks')v.innerHTML=taskView();
 if(S.tab==='radio')v.innerHTML=radioView();
 if(S.tab==='clip')drawClip();
 if(S.tab==='pomo'){const p=S.p;v.innerHTML=taskSel()+`<div class="pomo ${p.mode!=='focus'?'rest':''}" id="pm"><div class="big"><span class="time" id="ptime" role="timer">${fmt(p.left)}</span><span class="mode">${pnome(p.mode)}</span></div>
  <div class="pr"><button class="ib go" data-a="pgo" aria-label="${p.run?'Pausar':'Iniciar'}">${ic(p.run?'pause':'play')}</button><button class="ib" data-a="prs" aria-label="Reiniciar">${ic('reset')}</button><button class="ib" data-a="psk" aria-label="Pular etapa">${ic('next')}</button>
  <div class="cyc" role="img" aria-label="${p.done} de 4 ciclos de foco concluídos">${[0,1,2,3].map(i=>`<i class="${i<p.done?'on':''}" style="--f:${i<p.done?100:(i===p.done&&p.mode==='focus')?(100*(1-p.left/(S.p.f||1))).toFixed(1):0}%">${i<p.done?ic('check').replace('<svg','<svg width="20" height="20"'):''}</i>`).join('')}</div></div></div>`+pform(p)}
 
 if(S.tab==='tv'){if(tvHlsObj){tvHlsObj.destroy();tvHlsObj=null}v.innerHTML=tvView();tvAfter()}
 if(S.tab==='tempo'){v.innerHTML=tempoView();if(!WX.data&&!WX.busy)wxLoad()}
 if(S.tab==='util'){v.innerHTML=utilView();swTick()}
 if(S.tab==='notas'){v.innerHTML=notasView()}
 if(S.tab==='links'){v.innerHTML=linksView()}
 if(S.tab==='buscar'){v.innerHTML=buscaView()}
 if(S.tab==='livros'){v.innerHTML=livrosView();livrosAfter()}
 if(S.tab==='bem'){v.innerHTML=bemView()}
 if(S.tab==='set')v.innerHTML=setView();tick(true)}
function drawClip(){const v=$('#view');const f=S.clip.filter(c=>!q||(c.t+c.a).toLowerCase().includes(q));
 v.innerHTML=`<div class="add" style="display:flex;gap:8px;margin-bottom:10px"><input id="cq" type="search" aria-label="Buscar na área de transferência" placeholder="Buscar" value="${esc(q)}"><button class="chip" data-a="cclr" style="height:44px;border-radius:22px;padding:0 18px">Limpar</button></div>`+
 (f.length?f.map(c=>{const k=S.clip.indexOf(c);return `<div class="row"><span class="app" style="background:${c.c}" aria-hidden="true">${esc(c.a)}</span>${c.sens&&c.hide?`<span class="grow sub"><span class="blur" aria-hidden="true">${esc(c.t)}</span> <span class="sr">Conteúdo sensível oculto</span> Número de cartão ou conta</span>`:`<button class="copy" data-a="ccopy" data-i="${k}" aria-label="Copiar: ${esc(c.t)}">${esc(c.t)}</button>`}
 <span class="acts">${c.sens?`<button class="ib sm" data-a="ceye" data-i="${k}" aria-label="${c.hide?'Mostrar':'Ocultar'} conteúdo">${ic('eye')}</button>`:''}<button class="ib sm" data-a="cpin" data-i="${k}" aria-pressed="${!!c.pin}" aria-label="Fixar">${ic('pin')}</button><button class="ib sm" data-a="cdel" data-i="${k}" aria-label="Remover">${ic('x')}</button></span><span class="tag t">${c.pin?'fixado':c.h}</span></div>`}).join(''):'<p class="sub">Nada encontrado. Copie algo em qualquer app para ele aparecer aqui.</p>')}
let lastTick=Date.now(),tickAcc=0;
function tickInner(paintOnly){const m=S.m,tr=m.list[m.i];let dt=0;
 if(!paintOnly){const now=Date.now();tickAcc+=now-lastTick;lastTick=now;dt=Math.floor(tickAcc/1000);tickAcc-=dt*1000}
 if(dt>0){
  if(m.play){m.pos+=dt;if(m.pos>=tr.d){if(m.rep)m.pos=0;else go(1)}}
  const p=S.p;if(p.run){p.left-=dt;if(p.left<=0){if(p.mode==='focus'){p.done=Math.min(pomoLongAfter(),p.done+1);pdSave();pdHistAdd();bump();p.mode=p.done>=pomoLongAfter()?'long':'rest'}else{if(p.mode==='long'){p.done=0;pdSave()}p.mode='focus'}p.left=pdur(p.mode);if(S.tab==='pomo')view();say(pmsg(p.mode));alarm()}}}
 pTitle();rdSleepTick();pillPaint();alertTick();const mp=$('#mpos');if(mp&&!S.seeking){const sk=$('#mseek'),dd=m.list[m.i].d;if(!sk||document.activeElement!==sk){mp.textContent=fmt(m.pos);if(sk){sk.max=dd;sk.value=m.pos;sk.style.setProperty('--p',(m.pos/dd*100)+'%');sk.setAttribute('aria-valuetext',fmt(m.pos)+' de '+fmt(dd))}}}
const pt=$('#ptime');if(pt)pt.textContent=fmt(S.p.left);cycPaint();
 $('#notch').classList.toggle('playing',m.play||!!(S.rd&&S.rd.on))}
function go(d){const m=S.m;m.i=m.shuf?Math.floor(Math.random()*m.list.length):(m.i+d+m.list.length)%m.list.length;m.pos=0;if(S.tab==='music')view()}
function setOpen(o,q){if(S.open&&$('#tabs').children.length)return;S.open=true;$('#notch').dataset.open='true';renderTabs();view()}
function pick(id){if(id!=='tasks')S.undo=null;S.tab=id;renderTabs();view();$('#t-'+id).focus();if(id==='cal'&&msOn()&&Date.now()-(S.msAt||0)>30000)msSync();if(id==='music'&&S.tok)spDevs()}
$('#pill').onclick=()=>setOpen(!S.open);
$('#tabs').addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(b)pick(b.dataset.tab)});
$('#tabs').addEventListener('keydown',e=>{const ids=TABS.map(t=>t[0]);let i=ids.indexOf(S.tab);
 if(e.key==='ArrowRight')i=(i+1)%ids.length;else if(e.key==='ArrowLeft')i=(i-1+ids.length)%ids.length;else if(e.key==='Home')i=0;else if(e.key==='End')i=ids.length-1;else return;e.preventDefault();pick(ids[i])});
$('#view').addEventListener('click',e=>{
 const c=e.target.closest('.chk');if(c){const t=S.tasks[c.dataset.i];if(!t.d&&t.r){t.due=nextDue(t);say('Tarefa repetida para '+fDm(t.due))}else t.d=!t.d;t.mod=Date.now();t.dy=true;save();view();$('#view').querySelector(`[data-i="${c.dataset.i}"]`).focus();return}
 const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,m=S.m,i=+b.dataset.i,p=S.p;
 if(a==='sconn')return spLogin();if(a==='sdis')return spOut();
 if(a==='mconn')return mAuth();if(a==='mdis'){S.ms=null;S.msExp=0;S.ev=null;S.evg=null;S.td=null;alertHide();ls.del('ms_rt');view();$('#view').focus();return}
 if(taskAct(a,i)||radioAct(a,i)||miscAct(a,b)||tvAct(a,b))return;
 if(S.tok&&a==='like')return spLike();
 if(S.tok&&['play','next','prev','shuf','rep'].includes(a))return spCmd(a);
 if(a==='play'){m.play=!m.play;view();$('#view').querySelector('[data-a=play]').focus()}
 else if(a==='next')go(1);else if(a==='prev'){m.pos>3?m.pos=0:go(-1);view()}
 else if(a==='shuf'||a==='rep'){m[a]=!m[a];b.setAttribute('aria-pressed',m[a])}
 else if(a==='pgo'){p.run=!p.run;view();$('#view').querySelector('[data-a=pgo]').focus()}
 else if(a==='prs'){p.left=pdur(p.mode);p.run=false;view()}
 else if(a==='psk'){if(p.mode==='long'){p.done=0;pdSave()}p.mode=p.mode==='focus'?'rest':'focus';p.left=pdur(p.mode);view();say(pnome(p.mode))}
 else if(a==='cclr'){S.clip=S.clip.filter(x=>x.pin);q='';drawClip();say('Histórico limpo, itens fixados mantidos')}
 else if(a==='cdel'){S.clip.splice(i,1);drawClip();say('Item removido')}
 else if(a==='cpin'){S.clip[i].pin=!S.clip[i].pin;drawClip()}
 else if(a==='ceye'){S.clip[i].hide=!S.clip[i].hide;drawClip()}
 else if(a==='ccopy'){try{navigator.clipboard.writeText(S.clip[i].t)}catch(_){}say('Copiado')}});
$('#view').addEventListener('submit',e=>{e.preventDefault();if(subExtra(e))return;if(e.target.id!=='addf')return;const n=$('#nt'),v=n.value.trim();if(!v)return;const dd=($('#ntd')||{}).value;S.tasks.unshift({id:Date.now(),cr:Date.now(),t:esc(v),w:new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),d:false,c:0,mod:Date.now(),due:/^\d{4}-\d\d-\d\d$/.test(dd||'')?dd:undefined});save();view();$('#nt').focus();say('Tarefa adicionada')});
$('#view').addEventListener('input',e=>{if(e.target.id==='cq'){q=e.target.value.toLowerCase();const p=e.target.selectionStart;drawClip();const n=$('#cq');n.focus();n.setSelectionRange(p,p)}});
setInterval(()=>tick(),1000);tick(true);

/* ===== Spotify (login PKCE, sem servidor) =====
   1. Cole seu Client ID entre as aspas abaixo.
   2. Cadastre no painel do Spotify a mesma URL de retorno usada aqui (SPOTIFY_REDIRECT).
   3. Rode a página fora do Claude (ex.: http://127.0.0.1:8888/notch-panel.html). */
const SPOTIFY_CLIENT_ID='e13cde702b164cd4bfe2684e0f3de4d7';
const SPOTIFY_REDIRECT=location.origin+location.pathname;
const SP_SCOPES='user-read-playback-state user-modify-playback-state user-library-read user-library-modify user-read-recently-played streaming playlist-read-private playlist-modify-private playlist-modify-public user-top-read user-follow-read user-follow-modify ugc-image-upload';
const SECRETS=new Set(['sp_at','sp_rt','ms_rt']);
const VAULT=window.notchApp&&typeof notchApp.secretGet==='function'?notchApp:null;
const ls0={get:k=>{try{return localStorage.getItem(k)}catch(_){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(_){}},del:k=>{try{localStorage.removeItem(k)}catch(_){}}};
const UNDO_KEYS=['tasks','notas_list','links','inbox'];const UNDO_STACK=[];let UNDO_BUSY=false;
const ls={get:k=>VAULT&&SECRETS.has(k)?VAULT.secretGet(k):ls0.get(k),set:(k,v)=>{if(UNDO_KEYS.includes(k)&&!UNDO_BUSY){const p=ls0.get(k);if(p!==null&&p!==v){UNDO_STACK.push({k,v:p});if(UNDO_STACK.length>40)UNDO_STACK.shift()}}if(VAULT&&SECRETS.has(k))VAULT.secretSet(k,v);else ls0.set(k,v)},del:k=>{if(VAULT&&SECRETS.has(k))VAULT.secretDel(k);else ls0.del(k)}};
if(VAULT)SECRETS.forEach(k=>{const v=ls0.get(k);if(v!==null){if(VAULT.secretGet(k)===null)VAULT.secretSet(k,v);ls0.del(k)}});
S.tok=ls.get('sp_at');
const b64=b=>btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
function spBox(){
 if(S.tok)return '<div class="sp-box"><span class="sub">Spotify conectado</span><button class="chip" data-a="sdis">Desconectar</button></div>';
 if(!SPOTIFY_CLIENT_ID)return '<div class="sp-box"><span class="sub">Modo demonstração. Para usar o Spotify, preencha SPOTIFY_CLIENT_ID no código.</span></div>';
 return '<div class="sp-box"><span class="sub">Modo demonstração</span><button class="chip" data-a="sconn">Conectar ao Spotify</button></div>'}
async function spLogin(){
 const v=b64(crypto.getRandomValues(new Uint8Array(48)));ls.set('sp_v',v);
 const ch=b64(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(v)));
 location.href='https://accounts.spotify.com/authorize?'+new URLSearchParams({response_type:'code',client_id:SPOTIFY_CLIENT_ID,scope:SP_SCOPES,code_challenge_method:'S256',code_challenge:ch,redirect_uri:SPOTIFY_REDIRECT})}
async function spToken(body){
 const r=await fetch('https://accounts.spotify.com/api/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:SPOTIFY_CLIENT_ID,...body})});
 if(!r.ok)throw new Error('token');const j=await r.json();
 S.tok=j.access_token;ls.set('sp_at',j.access_token);if(j.refresh_token)ls.set('sp_rt',j.refresh_token)}
async function spApi(path,opt={},retry=true){
 if(!S.tok){S.err=401;return null}
 const r=await fetch('https://api.spotify.com/v1'+path,{...opt,headers:{...(opt.headers||{}),Authorization:'Bearer '+S.tok}});
 if(r.status===401){
  if(retry&&ls.get('sp_rt')){try{await spToken({grant_type:'refresh_token',refresh_token:ls.get('sp_rt')});return spApi(path,opt,false)}catch(_){}}
  S.err=401;spOut();return null}
 S.err=r.ok?0:r.status;if(r.status!==200)return null;const tx=await r.text();try{return JSON.parse(tx)}catch(_){return {}}}
function spOut(){['sp_at','sp_rt','sp_v'].forEach(ls.del);S.tok=null;if(S.tab==='music'&&S.open)view()}
async function spSync(){
 if(!S.tok)return;const d=await spApi('/me/player');if(!d||!d.item){await spLast();return}
 const m=S.m,it=d.item,key=[it.id,d.is_playing,d.shuffle_state,d.repeat_state].join();
 m.list=[{t:it.name,a:(it.artists||[]).map(a=>a.name).join(', '),al:(it.album&&it.album.name)||'',d:Math.round(it.duration_ms/1000),img:it.album&&it.album.images&&(it.album.images[0]||{}).url}];
 m.i=0;m.pos=Math.round(d.progress_ms/1000);m.play=d.is_playing;m.shuf=d.shuffle_state;m.rep=d.repeat_state!=='off';
 m.uri=it.uri;m.vol=d.device?d.device.volume_percent:m.vol;m.volOK=d.device?d.device.supports_volume!==false:m.volOK;
 const sv=$('#svol');if(sv&&document.activeElement!==sv&&m.vol!=null){sv.value=m.vol;sv.setAttribute('aria-valuetext',m.vol+'%')}
 if(m.uri&&m.uri!==m.likeFor){m.likeFor=m.uri;m.liked=false;spLikeCheck(m.uri)}
 if(key!==m.key){m.key=key;if(S.tab==='music'&&S.open){const f=document.activeElement&&document.activeElement.dataset&&document.activeElement.dataset.a;view();if(f){const n=$('#view [data-a="'+f+'"]');if(n)n.focus()}}}
 $('#notch').classList.toggle('playing',m.play||!!(S.rd&&S.rd.on))}
let spPlayer=null,spDeviceId=null,spBlocked=false,spSdk=false;
window.onSpotifyWebPlaybackSDKReady=()=>spInitPlayer();
function spInitPlayer(){
 if(spPlayer||spBlocked||!S.tok)return;
 if(!window.Spotify){if(!spSdk){spSdk=true;const sc=document.createElement('script');sc.src='https://sdk.scdn.co/spotify-player.js';sc.async=true;sc.onerror=()=>say('Não foi possível carregar o player do Spotify neste navegador');document.head.appendChild(sc)}return}
 spPlayer=new Spotify.Player({name:'Painel de utilidades',getOAuthToken:cb=>cb(S.tok),volume:.8});
 spPlayer.addListener('ready',({device_id})=>{spDeviceId=device_id});
 spPlayer.addListener('not_ready',()=>{spDeviceId=null});
 spPlayer.addListener('initialization_error',()=>{spBlocked=true;say('Este navegador não suporta reproduzir pelo Spotify')});
 spPlayer.addListener('account_error',()=>{spBlocked=true;say('Reproduzir neste navegador exige Spotify Premium')});
 spPlayer.connect();
}
 async function spCmd(a){const m=S.m;
 const c={play:['PUT',m.play?'/me/player/pause':'/me/player/play'+(spDeviceId?'?device_id='+spDeviceId:'')],next:['POST','/me/player/next'],prev:['POST','/me/player/previous'],shuf:['PUT','/me/player/shuffle?state='+!m.shuf],rep:['PUT','/me/player/repeat?state='+(m.rep?'off':'context')]}[a];
 await spApi(c[1],{method:c[0]});
 if(S.err)say(S.err===403?'Controlar a reprodução exige Spotify Premium':S.err===404?'Nenhum dispositivo ativo. Abra o Spotify e toque uma faixa':'Não foi possível controlar o Spotify');
 setTimeout(spSync,500)}
 /* Sem reprodução ativa: mostra a última faixa tocada, pausada (consulta no máximo 1 vez por minuto) */
async function spLast(){if(Date.now()-(S.lastAt||0)<60000)return;S.lastAt=Date.now();
 const r=await spApi('/me/player/recently-played?limit=1');
 if(S.err===403){if(S.open&&S.tab==='music')say('Para ver a última música, desconecte e conecte o Spotify de novo');return}
 const it=r&&r.items&&r.items[0]&&r.items[0].track;if(!it)return;
 const m=S.m;if(m.key==='last:'+it.id)return;
 m.key='last:'+it.id;m.list=[{t:it.name,a:(it.artists||[]).map(a=>a.name).join(', '),al:(it.album&&it.album.name)||'',d:Math.round(it.duration_ms/1000),img:it.album&&it.album.images&&(it.album.images[0]||{}).url,uri:it.uri}];
 m.i=0;m.pos=0;m.play=false;m.uri=it.uri;m.liked=false;m.likeFor=it.uri;spLikeCheck(it.uri);
 if(S.tab==='music'&&S.open)spPaint()}
(async()=>{
 const c=new URLSearchParams(location.search).get('code');
 if(c&&SPOTIFY_CLIENT_ID&&!(new URLSearchParams(location.search).get('state')||'').startsWith('ms.')){
  try{await spToken({grant_type:'authorization_code',code:c,redirect_uri:SPOTIFY_REDIRECT,code_verifier:ls.get('sp_v')||''});say('Spotify conectado')}catch(_){say('Falha ao conectar ao Spotify')}
  history.replaceState(null,'',location.pathname);setOpen(true)}
 if(S.tok){spInitPlayer();spSync();setInterval(spSync,4000)}})();
/* ===== Tarefas salvas, Pomodoro com alerta, Outlook e Teams, tema e atalho =====
   Outlook e Teams (Microsoft Graph, somente leitura):
   1. No Microsoft Entra, registre um app e adicione a plataforma "Aplicativo de página única" (SPA).
   2. URI de redirecionamento: http://localhost/notch-panel.html (sem porta; para localhost o Entra ignora a porta).
   3. Permissões delegadas do Microsoft Graph: Calendars.Read e User.Read (offline_access vem no pedido de login).
   4. Cole o ID do aplicativo (cliente) em MS_CLIENT_ID. Se o app aceitar só o seu diretório (conta de trabalho),
      cole também o ID do diretório (locatário) em MS_TENANT. Vazio, ele usa "common". */
const MS_CLIENT_ID='bd2c1b18-f896-40ac-9b79-8513f9935546';
const MS_TENANT='';
const MS_AUTH='https://login.microsoftonline.com/'+(MS_TENANT||'common')+'/oauth2/v2.0';
const MS_SCOPES='openid offline_access User.Read Calendars.ReadWrite';
/* Tarefas e OneDrive pedem permissão só quando você ativa o recurso (consentimento incremental) */
function msScopes(){let w={};try{w=JSON.parse(ls.get('ms_want')||'{}')}catch(_){}
 const drv=w.drv||ls.get('ms_drv')||'';
 return MS_SCOPES+((w.todo||ls.get('ms_todo')==='1')?' Tasks.ReadWrite':'')+(drv==='app'?' Files.ReadWrite.AppFolder':drv==='full'?' Files.ReadWrite':'')}
function msPromote(){try{const w=JSON.parse(ls.get('ms_want')||'{}');if(w.todo)ls.set('ms_todo','1');if(w.drv)ls.set('ms_drv',w.drv)}catch(_){}}
const MS_REDIRECT=location.origin+location.pathname;
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function save(){ls.set('tasks',JSON.stringify(S.tasks));todoSoon()}
try{const t=JSON.parse(ls.get('tasks')||'null');if(Array.isArray(t))S.tasks=t}catch(_){}
S.tasks.forEach((t,i)=>{t.id=t.id||'d'+i;t.c=t.c||0});S.p.task='';
function bump(){const t=S.tasks.find(t=>String(t.id)===String(S.p.task));if(t){t.c=(t.c||0)+1;save()}}
function taskSel(){const op=S.tasks.filter(t=>!t.d);if(!op.some(t=>String(t.id)===String(S.p.task)))S.p.task='';
 const o=op.map(t=>`<option value="${t.id}"${String(S.p.task)===String(t.id)?' selected':''}>${t.t}${t.c?' ('+t.c+(t.c>1?' ciclos':' ciclo')+')':''}</option>`).join('');
 return `<div class="tsel"><label for="ptask" class="sub">Tarefa em foco</label><select id="ptask"><option value="">Sem tarefa</option>${o}</select></div>`+(op.length?'':'<p class="sub" style="margin:-4px 2px 10px">Nenhuma tarefa pendente. Adicione na aba Tarefas.</p>')}
function setView(){const th=ls.get('theme')||'auto',on=k=>ls.get(k)==='1'?' checked':'';
 return `<h2>Ajustes</h2><fieldset class="fs"><legend>Tema da página</legend>${[['auto','Automático'],['light','Claro'],['dark','Escuro']].map(([v,l])=>`<label class="opt"><input type="radio" name="th" value="${v}"${th===v?' checked':''}>${l}</label>`).join('')}</fieldset>
 <label class="opt row"><input type="checkbox" id="osnd"${on('opt_snd')}>Som ao fim de cada etapa do Pomodoro</label>
 <label class="opt row"><input type="checkbox" id="ontf"${on('opt_ntf')}>Notificação do navegador quando a aba estiver em segundo plano</label>
 <label class="opt row"><input type="checkbox" id="opill"${ls.get('opt_pill')!=='0'?' checked':''}>Mostrar status no notch fechado (Pomodoro, próxima reunião, música ou rádio)</label>
 <label class="opt row" for="oalert"><span style="flex:1">Avisar antes das reuniões</span><select id="oalert">${[[0,'Desligado'],[1,'1 min antes'],[5,'5 min antes'],[10,'10 min antes'],[15,'15 min antes']].map(([v,l])=>`<option value="${v}"${(ls.get('al_min')===null?5:+ls.get('al_min'))===v?' selected':''}>${l}</option>`).join('')}</select></label>
 ${window.notchApp?`<fieldset class="fs"><legend>Aplicativo de desktop</legend>
 <label class="opt row"><input type="checkbox" id="oclip"${ls.get('opt_clip')!=='0'?' checked':''}>Guardar o histórico da área de transferência (só na memória, até fechar o app)</label>
 <label class="opt row"><input type="checkbox" id="ohov"${ls.get('opt_hover')!=='0'?' checked':''}>Abrir ao encostar o mouse no topo da tela</label>
 <label class="opt row"><input type="checkbox" id="oleave"${ls.get('opt_leave')==='1'?' checked':''}>Fechar quando o mouse sair (só se foi aberto pelo mouse e você não está usando o teclado)</label>
 <p class="sub" style="margin:6px 0 0" id="cofrenota">Logins do Spotify e da Microsoft: ${notchApp.secretMode==='seguro'?'guardados no cofre do sistema (Keychain, Credential Manager ou chaveiro do Linux).':'guardados só na memória, porque o sistema não oferece um cofre seguro. Você terá de entrar de novo a cada abertura.'}</p></fieldset>`:''}
 <fieldset class="fs"><legend>Relógio e clima</legend>
 <p class="sub" style="margin:0 0 8px">Horário e data de São Paulo. Clima de: <span id="wcur"></span></p>
 <form id="wform" class="add"><label for="wcity" class="sr">Cidade para a previsão</label><input id="wcity" placeholder="Ex.: Jundiaí" maxlength="60" autocomplete="off"><button class="chip">Buscar cidade</button></form>
 <p class="sub" id="wmsg" role="status" style="margin:0 0 8px"></p>
 <span class="redact" style="margin:0"><button type="button" class="chip" data-a="wdef">Usar São Bernardo do Campo</button></span></fieldset>
 <fieldset class="fs"><legend>Endereço para os logins</legend><p class="sub" style="margin:0 0 6px">Use este endereço como URI de redirecionamento no Spotify e na Microsoft:</p><p><code id="ruri">${esc(location.origin+location.pathname)}</code> <button class="chip" data-a="cuib">Copiar</button></p><p class="sub" style="margin:6px 0 0">${addrHint()}</p></fieldset>
 ${msFieldset()}
 <fieldset class="fs"><legend>Backup dos dados</legend><p class="sub" style="margin:0 0 8px">Salva tarefas, rádios, tempos do Pomodoro, ajustes em um arquivo. Os logins do Spotify e da Microsoft não entram no arquivo.</p><span class="redact" style="margin:0"><button class="chip" data-a="expb">Exportar dados</button><button class="chip" data-a="impb">Importar dados</button></span><input type="file" id="impf" accept="application/json,.json" class="sr" tabindex="-1" aria-hidden="true"><p class="err" id="bkerr" role="alert"></p></fieldset>
 <p class="sub">${window.notchApp?'Atalho global, que funciona com qualquer app em foco: Ctrl+Shift+Espaço.':'Atalho para abrir e fechar o painel: Ctrl+Shift+Espaço, com esta página em foco.'}</p>${window.notchApp?'<button class="chip" data-a="appquit">Sair do aplicativo</button>':''}`}
function applyTheme(){const t=ls.get('theme'),r=document.documentElement;if(t==='light'||t==='dark')r.dataset.theme=t;else r.removeAttribute('data-theme')}
applyTheme();
function ac(){return S.ac||(S.ac=new (window.AudioContext||window.webkitAudioContext)())}
function beep(f){try{const c=ac(),o=c.createOscillator(),g=c.createGain();o.frequency.value=f||880;o.connect(g);g.connect(c.destination);g.gain.setValueAtTime(.15,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.7);o.start();o.stop(c.currentTime+.7)}catch(_){}}
document.addEventListener('click',()=>{if(ls.get('opt_snd')==='1'){try{const c=ac();if(c.state==='suspended')c.resume()}catch(_){}}});
function estudoAjusta(){const n=$('#notch');if(n)n.dataset.estudo=S.estudo?'1':'0';if(!S.estudo)return;
 if(S.p.mode==='focus'&&S.p.run&&!S.rd.on&&S.rd.list[S.rd.cur]&&S.rd.list[S.rd.cur].u){RA.volume=0.2;rdPlay(S.rd.cur)}
 if(S.p.mode!=='focus'&&S.rd.on)rdStop()}
function alarm(){const msg=pmsg(S.p.mode);
 if(ls.get('opt_snd')==='1')beep(S.p.mode==='focus'?(+ls.get('snd_ini')||880):(+ls.get('snd_fim')||523));
 if(ls.get('opt_ntf')==='1'&&window.Notification&&Notification.permission==='granted'&&document.hidden){try{new Notification('Pomodoro',{body:msg})}catch(_){}}}
$('#view').addEventListener('change',e=>{const t=e.target;
 if(t.id==='ptask'){S.p.task=t.value;return}
 if(t.name==='th'){ls.set('theme',t.value);ls.del('tema');ls.del('tema_bg');ls.del('tema_acc');applyColors();applyTheme();view();say('Tema: '+({auto:'automático',light:'claro',dark:'escuro'})[t.value])}
 if(t.id==='osnd'){ls.set('opt_snd',t.checked?'1':'0');if(t.checked)beep()}
 if(t.id==='ontf'){
  if(!t.checked){ls.set('opt_ntf','0');return}
  if(!window.Notification){t.checked=false;say('Este navegador não oferece notificações');return}
  Notification.requestPermission().then(r=>{if(r==='granted')ls.set('opt_ntf','1');else{t.checked=false;say('Permissão de notificação negada')}})}});
document.addEventListener('keydown',e=>{if(e.ctrlKey&&e.shiftKey&&e.code==='Space'){e.preventDefault();setOpen(!S.open)}});
/* Outlook e Teams via Microsoft Graph (somente leitura; o token de renovação fica no localStorage) */
const msOn=()=>!!MS_CLIENT_ID&&!!(S.ms||ls.get('ms_rt'));
function cBox(){const b=t=>`<div class="sp-box">${t}</div>`;
 if(msOn())return b(`<span class="sub">${S.msLoad?'Carregando a agenda…':'Outlook conectado. '+(S.msAt?'Atualizado às '+hm(S.msAt)+'.':'')}</span><span class="redact" style="margin:0"><button class="chip" data-a="mref">Atualizar agora</button><button class="chip" data-a="mdis">Desconectar</button></span>`);
 if(!MS_CLIENT_ID)return b('<span class="sub">Eventos de demonstração. Para usar Outlook e Teams, preencha MS_CLIENT_ID no código.</span>');
 return b('<span class="sub">Eventos de demonstração</span><button class="chip" data-a="mconn">Conectar ao Outlook</button>')}
function chipEl(e){const t=e[5]?'a':'button',at=e[5]?` href="${e[5]}" target="_blank" rel="noopener"`:'';
 return `<${t} class="chip"${at} aria-label="Entrar no ${e[2]}: ${e[1]}${e[5]?' (abre em nova aba)':''}">${ic('video').replace('<svg','<svg width="16" height="16"')}${e[2]}</${t}>`}
async function mAuth(want){ls.set('ms_want',JSON.stringify(want||{}));
 const v=b64(crypto.getRandomValues(new Uint8Array(48))),st='ms.'+b64(crypto.getRandomValues(new Uint8Array(12)));
 ls.set('ms_v',v);ls.set('ms_st',st);
 const ch=b64(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(v)));
 location.href=MS_AUTH+'/authorize?'+new URLSearchParams({client_id:MS_CLIENT_ID,response_type:'code',redirect_uri:MS_REDIRECT,response_mode:'query',scope:msScopes(),state:st,code_challenge:ch,code_challenge_method:'S256'})}
async function msToken(body){
 const r=await fetch(MS_AUTH+'/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:MS_CLIENT_ID,scope:msScopes(),...body})});
 if(!r.ok){const e=new Error('token');e.status=r.status;throw e}
 const j=await r.json();S.ms=j.access_token;S.msExp=Date.now()+(j.expires_in-120)*1000;if(j.refresh_token)ls.set('ms_rt',j.refresh_token)}
function mapEv(e,td,mp){const n=new Date(),p=x=>new Date(x.dateTime.split('.')[0]+'Z'),ad=e.isAllDay,s=!ad&&p(e.start),f=!ad&&p(e.end);
 let u=(e.onlineMeeting&&e.onlineMeeting.joinUrl)||'';if(!/^https:/.test(u))u='';
 const lb=!u?'':e.onlineMeetingProvider==='teamsForBusiness'||/teams\.(microsoft|live)\.com/.test(u)?'Teams':/zoom/.test(u)?'Zoom':'Entrar';
 let tag='dia todo',pr=0;
 if(s&&td===false)tag=s.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})+' – '+f.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
 else if(s){const m=Math.round((s-n)/6e4);
  if(n>=s&&n<f){tag='faltam '+Math.ceil((f-n)/6e4)+' min';pr=Math.round((n-s)/(f-s)*100)}
  else if(m>0&&m<360)tag='em '+(m>=60?Math.floor(m/60)+'h ':'')+(m%60?m%60+'min':'');
  else tag=s.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}
 if(mp&&s){pr=0;tag=mp.i===0?s.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})+' →':mp.i===mp.n-1?'até '+f.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}):'dia todo'}else if(mp)tag='dia '+(mp.i+1)+' de '+mp.n;
 return [s?'#5b8cff':'#3ecf8e',esc(e.subject||'(sem título)'),lb,tag.trim(),pr,esc(u),s?s.getTime():0,e.id||'',f?f.getTime():0]}
async function msSync(manual){if(!msOn())return;
 if(!S.ms||Date.now()>S.msExp){
  try{await msToken({grant_type:'refresh_token',refresh_token:ls.get('ms_rt')||''})}
  catch(e){if(e.status===400||e.status===401){ls.del('ms_rt');S.ms=null;S.ev=null;say('Sessão da Microsoft expirada. Conecte de novo')}else say('Não foi possível ler a agenda');S.msErr=true;S.msLoad=false;if(S.tab==='cal'&&S.open)view();return}}
 const key=calKey(),days=S.cm==='next'?nextDays():[cd()],a=new Date(days[0]),b=new Date(days[days.length-1]);b.setDate(b.getDate()+1);
 try{const r=await fetch('https://graph.microsoft.com/v1.0/me/calendarView?'+new URLSearchParams({startDateTime:a.toISOString(),endDateTime:b.toISOString(),'$orderby':'start/dateTime','$top':String(days.length>1?100:25),'$select':'subject,start,end,isAllDay,isCancelled,onlineMeeting,onlineMeetingProvider'}),{headers:{Authorization:'Bearer '+S.ms,Prefer:'outlook.timezone="UTC"'}});
  if(r.status===401){S.ms=null;S.msExp=0}
  else if(r.ok){const js=(await r.json()).value.filter(e=>!e.isCancelled);if(days.some(d=>isToday(d)))S.td=pillEv(js);else msToday();if(key!==calKey())return;
  S.evg=days.map(d=>({k:dayKey(d),d,rows:[]}));
  js.forEach(e=>{const ks=evDays(e);ks.forEach((k,i)=>{const g=S.evg.find(x=>x.k===k);if(g)g.rows.push(mapEv(e,isToday(g.d),ks.length>1?{i,n:ks.length}:null))})});
  S.ev=S.evg.flatMap(g=>g.rows);S.evk=key;S.msAt=Date.now();S.msErr=false}else{S.msErr=true;say('Não foi possível ler a agenda')}}catch(_){S.msErr=true;say('Não foi possível ler a agenda')}
 S.msLoad=false;if(S.tab==='cal'&&S.open)keepFocus(view);
 if(manual)say(S.msAt&&Date.now()-S.msAt<5000?'Agenda atualizada às '+hm(S.msAt):'Não foi possível atualizar a agenda agora')}
(async()=>{const u=new URLSearchParams(location.search),c=u.get('code'),st=u.get('state')||'';
 if(MS_CLIENT_ID&&st.startsWith('ms.')&&(c||u.get('error'))){
  if(c&&st===ls.get('ms_st')){try{await msToken({grant_type:'authorization_code',code:c,redirect_uri:MS_REDIRECT,code_verifier:ls.get('ms_v')||''});msPromote();say('Microsoft conectada')}catch(_){say('Falha ao conectar à Microsoft')}}
  else say('Não foi possível concluir o login da Microsoft');
  ls.del('ms_st');ls.del('ms_v');const wt=(ls.get('ms_want')||'{}')!=='{}'?'set':'cal';ls.del('ms_want');history.replaceState(null,'',location.pathname);S.tab=wt;setOpen(true)}
 if(msOn()){S.ev=S.ev||[];S.msLoad=true;if(S.tab==='cal'&&S.open)view();await msSync();todoSync();drvStart()}})();
setInterval(()=>{if(msOn())msSync()},60000);
/* ===== Rádio, tarefas editáveis e ordenáveis, tempos do Pomodoro ===== */
const unesc=t=>{const d=document.createElement('textarea');d.innerHTML=t;return d.value};
S.p.f=+ls.get('pomo_f')||1500;S.p.r=+ls.get('pomo_r')||300;S.p.l=+ls.get('pomo_l')||900;S.p.left=S.p.f;
function pomoLongAfter(){const n=parseInt(ls.get('pomo_long'),10);return n>=2&&n<=8?n:4}
const pdur=m=>m==='focus'?S.p.f:m==='long'?S.p.l:S.p.r;
function cycPaint(){const p=S.p,t=(p.mode==='focus'?p.f:p.mode==='long'?p.l:p.r)||1;document.querySelectorAll('.cyc i').forEach((x,i)=>{const f=i<p.done?100:(i===p.done&&p.mode==='focus')?100*(1-p.left/t):0;x.style.setProperty('--f',Math.min(100,Math.max(0,f)).toFixed(1)+'%')})}
const pmsg=m=>m==='focus'?'Hora de focar':m==='long'?'Hora da pausa longa':'Hora da pausa';
const pnome=m=>m==='focus'?'Foco':m==='long'?'Pausa longa':'Pausa';
function pTitle(){const p=S.p;document.title=p.run?fmt(p.left)+' · '+pnome(p.mode)+' | Painel do notch':'Painel do notch'}
function parseT(v){const m=/^(\d{1,3})(?::([0-5]\d))?$/.exec(String(v).trim());if(!m)return null;const t=+m[1]*60+(m[2]?+m[2]:0);return t>=5&&t<=10800?t:null}
function pform(p){return `<p class="sub" id="pleg" style="margin:10px 2px 0">Cada círculo é um foco concluído: ${p.done} de 4 nesta rodada. Depois do 4º foco vem a pausa longa, e a contagem recomeça quando ela termina.</p><form id="pform" class="pf"><div class="pfr"><label for="pfoc">Foco (min:seg)</label><input id="pfoc" autocomplete="off" value="${fmt(p.f)}" aria-describedby="phint"></div><div class="pfr"><label for="pbrk">Pausa (min:seg)</label><input id="pbrk" autocomplete="off" value="${fmt(p.r)}" aria-describedby="phint"></div><div class="pfr"><label for="plng">Pausa longa (min:seg)</label><input id="plng" autocomplete="off" value="${fmt(p.l)}" aria-describedby="phint"></div><button class="chip">Aplicar</button></form><p class="sub" id="phint" style="margin:8px 2px 0">Use minutos ou minutos:segundos, de 0:05 a 180:00. Exemplos: 25, 2:40, 3:10.</p><p class="err" id="perr" role="alert"></p>`}

function taskView(){const T=S.tasks,n=T.length;
 return (S.undo?`<div class="row" style="justify-content:space-between"><span>Tarefa removida.</span><button class="chip" data-a="tundo">Desfazer</button></div>`:'')+`${todoBar()}<form class="add" id="addf"><input id="nt" aria-label="Nova tarefa" placeholder="Nova tarefa" autocomplete="off"><input type="date" id="ntd" aria-label="Vencimento (opcional)"><button>Adicionar</button></form><ul style="list-style:none;padding:0;margin:0">`+T.map((t,i)=>{const ed=S.edit===t.id,lab=t.t;
  return `<li class="row tk${t.d?' done':''}" data-r="${i}" data-cr="${t.cr?dayKey(new Date(t.cr)):''}" data-due="${t.due||''}" data-tag="${esc(t.tag||'')}"${ed?'':' draggable="true"'}><span class="grip" aria-hidden="true">${ic('grip')}</span><button class="chk" role="checkbox" aria-checked="${t.d}" aria-label="${lab}" data-i="${i}">${t.d?ic('check'):''}</button>`+
  (ed?`<form class="ef" data-r="${i}"><input id="ted" aria-label="Editar tarefa" value="${lab}" autocomplete="off"><input type="date" id="ted-d" aria-label="Vencimento da tarefa" value="${t.due||''}"><button class="ib sm" aria-label="Salvar edição">${ic('check')}</button><button type="button" class="ib sm" data-a="tcan" data-i="${i}" aria-label="Cancelar edição">${ic('x')}</button></form>`
  :`<span class="grow">${lab}</span><span class="tag">${dueTag(t)}${t.g?(t.c||0)+'/'+t.g+' ciclos':t.c?t.c+(t.c>1?' ciclos':' ciclo'):taskWhen(t)+subInfo(t)+prazoTxt(t)}</span><span class="acts2"><button class="ib sm" data-a="ted" data-i="${i}" aria-label="Editar: ${lab}">${ic('edit')}</button><span class="mvs"><button class="ib sm" data-a="tprio" data-i="${i}" aria-pressed="${!!S.tasks[i].p}" aria-label="${S.tasks[i].p?'Remover prioridade':'Marcar como importante'}: ${esc(S.tasks[i].t)}">${ic('star')}</button><button class="ib sm" data-a="tpomo" data-i="${i}" aria-label="Iniciar foco nesta tarefa: ${esc(S.tasks[i].t)}">${ic('timer')}</button>${S.tasks[i].due?`<button class="ib sm" data-a="tadia" data-i="${i}" aria-label="Adiar para amanhã: ${esc(S.tasks[i].t)}">${ic('next')}</button>`:''}<button class="ib sm" data-a="ttag" data-i="${i}" aria-label="Etiqueta: ${esc(S.tasks[i].t)}">#</button><button class="ib sm" data-a="tsub" data-i="${i}" aria-label="Adicionar passo: ${esc(S.tasks[i].t)}">+</button><button class="ib sm" data-a="tsubn" data-i="${i}" aria-label="Concluir próximo passo: ${esc(S.tasks[i].t)}">✓</button><button class="ib sm" data-a="trem" data-i="${i}" aria-label="Lembrete: ${esc(S.tasks[i].t)}">${ic('timer')}</button><button class="ib sm" data-a="tmeta" data-i="${i}" aria-label="Meta de ciclos: ${esc(S.tasks[i].t)}">${ic('star')}</button><button class="ib sm" data-a="trep" data-i="${i}" aria-label="Repetir: ${S.tasks[i].r==='d'?'todo dia':S.tasks[i].r==='w'?'toda semana':'não repete'}. Alterar">${ic('repeat')}</button><button class="ib sm" data-a="tup" data-i="${i}" aria-disabled="${i===0}" aria-label="Mover para cima: ${lab}">${ic('tup')}</button><button class="ib sm" data-a="tdn" data-i="${i}" aria-disabled="${i===n-1}" aria-label="Mover para baixo: ${lab}">${ic('tdn')}</button></span><button class="ib sm" data-a="tdel" data-i="${i}" aria-label="Remover: ${lab}">${ic('x')}</button></span>`)+'</li>'}).join('')+'</ul>'+(T.some(x=>x.due)?'<button class="chip" data-a="tsort" style="margin-top:8px">Ordenar por vencimento</button>':'')+
  (n?'<p class="sub" style="margin:8px 2px 0">Arraste pelo ícone à esquerda ou use os botões de subir e descer.</p>':'<p class="sub">Nenhuma tarefa. Adicione a primeira acima.</p>')}
function endEdit(i){S.edit=null;view();const b=$('#view [data-a="ted"][data-i="'+i+'"]');if(b)b.focus()}
function nextDue(t){const b=t.due?new Date(t.due+'T12:00:00'):new Date();b.setDate(b.getDate()+(t.r==='d'?1:7));return dayKey(b)}
function fDm(k){return k.slice(8)+'/'+k.slice(5,7)}
function remCheck(){const now=new Date(),hoje=dayKey(now),mins=now.getHours()*60+now.getMinutes();
 (S.tasks||[]).forEach(t=>{if(t.d||!t.due||t.due!==hoje||!t.dt||t.rn===hoje)return;const [h,m]=t.dt.split(':').map(Number),alvo=h*60+m;
  if(mins>=alvo-30&&mins<alvo+60){t.rn=hoje;save();say('Lembrete: "'+t.t+'" às '+t.dt);if(ls.get('opt_ntf')==='1'&&window.Notification&&Notification.permission==='granted')new Notification('Tarefa: '+t.t,{body:'Vence às '+t.dt})}})}
setInterval(remCheck,60000);
function taskAct(a,i){const T=S.tasks;
 if(a==='ttag'){const t=T[i];const v=window.prompt('Etiqueta (uma palavra, ex.: casa, trabalho). Deixe vazio para remover.',t.tag||'');if(v===null)return true;const x=v.trim().replace(/\s+/g,'-').slice(0,20);if(x)t.tag=x;else delete t.tag;t.mod=Date.now();t.dy=true;save();view();return true}
 if(a==='tsub'){const t=T[i];const v=window.prompt('Novo passo da tarefa',"");if(v===null||!v.trim())return true;t.sub=(t.sub||[]).concat([{t:v.trim().slice(0,80),d:false}]).slice(0,20);t.mod=Date.now();t.dy=true;save();view();return true}
 if(a==='tsubn'){const t=T[i];const p=(t.sub||[]).find(x=>!x.d);if(!p){say('Todos os passos concluídos');return true}p.d=true;t.mod=Date.now();t.dy=true;save();view();say('Passo concluído: '+p.t);return true}
 if(a==='tadia'){const t=T[i];const b=new Date(t.due+'T12:00:00');b.setDate(b.getDate()+1);t.due=dayKey(b);t.mod=Date.now();t.dy=true;save();view();say('Adiada para '+fDm(t.due));return true}
 if(a==='trem'){const t=T[i],v=prompt('Horário do lembrete (HH:MM). Deixe vazio para remover.',t.dt||'');if(v===null)return true;const x=v.trim();
  if(x===''){delete t.dt}else if(/^([01]\d|2[0-3]):[0-5]\d$/.test(x)){if(!t.due){say('Defina primeiro a data de vencimento da tarefa');return true}t.dt=x}else{say('Use o formato HH:MM, como 14:30');return true}
  t.mod=Date.now();t.dy=true;save();view();say(t.dt?'Lembrete às '+t.dt:'Lembrete removido');return true}
 if(a==='tmeta'){const t=T[i],v=prompt('Quantos ciclos de foco essa tarefa precisa? (0 remove a meta)',t.g||'');if(v===null)return true;const n=parseInt(v,10);
  if(v.trim()===''||n===0){delete t.g}else if(n>=1&&n<=50){t.g=n}else{say('Informe um número de 1 a 50');return true}
  t.mod=Date.now();t.dy=true;save();view();say(t.g?'Meta: '+t.g+' ciclos':'Meta removida');return true}
 if(a==='tprio'){const t=T[i];t.p=!t.p;if(t.p){T.splice(i,1);T.unshift(t)}t.mod=Date.now();t.dy=true;save();view();const b=$('#view [data-a="tprio"][data-i="0"]');if(b&&t.p)b.focus();say(t.p?'Tarefa marcada como importante e movida para o topo':'Prioridade removida');return true}
 if(a==='tpomo'){S.p.task=String(T[i].id);pick('pomo');setTimeout(()=>{const b=$('#view [data-a="pgo"]');if(b&&!S.p.run)b.click();say('Foco iniciado: '+T[i].t)},60);return true}
 if(a==='trep'){const t=T[i],nx={'':'d',d:'w',w:''}[t.r||''];if(nx)t.r=nx;else delete t.r;t.mod=Date.now();t.dy=true;save();view();const b=$('#view [data-a="trep"][data-i="'+i+'"]');if(b)b.focus();say(t.r==='d'?'Repete todo dia':t.r==='w'?'Repete toda semana':'Não repete');return true}
 if(a==='tsort'){const key=t=>t.d?2:t.due?0:1;const ord=T.map((t,k)=>({t,k})).sort((x,y)=>key(x.t)-key(y.t)||(key(x.t)===0?(x.t.due<y.t.due?-1:x.t.due>y.t.due?1:0):0)||x.k-y.k).map(o=>o.t);
  S.tasks=ord;save();view();const b=$('#view [data-a="tsort"]');if(b)b.focus();say('Tarefas ordenadas por vencimento');return true}
 if(a==='ted'){S.edit=T[i].id;view();const n=$('#ted');n.focus();n.select();return true}
 if(a==='tcan'){endEdit(i);return true}
 if(a==='tup'||a==='tdn'){const j=a==='tup'?i-1:i+1;if(j<0||j>=T.length)return true;
  [T[i],T[j]]=[T[j],T[i]];save();view();const b=$('#view [data-a="'+a+'"][data-i="'+j+'"]');if(b)b.focus();say(unesc(T[j].t)+': posição '+(j+1)+' de '+T.length);return true}
 if(a==='tdel'){const t=T.splice(i,1)[0];if(String(S.p.task)===String(t.id))S.p.task='';todoQueueDel(t);S.undo={t,i};save();view();const b=$('#view [data-a="tundo"]');if(b)b.focus();say('Tarefa removida. O botão Desfazer está no topo da lista');return true}
 if(a==='tundo'&&S.undo){const u=S.undo;S.undo=null;const k=Math.min(u.i,T.length);T.splice(k,0,u.t);todoUnqueue(u.t);save();view();const b=$('#view [data-a="ted"][data-i="'+k+'"]')||$('#nt');if(b)b.focus();say('Tarefa restaurada');return true}
 return false}
/* arrastar para reordenar (o mouse usa isto; teclado e toque usam os botões) */
let dragR=-1;const clr=()=>document.querySelectorAll('#view li.ins-a,#view li.ins-b,#view li.drag').forEach(x=>x.classList.remove('ins-a','ins-b','drag'));
$('#view').addEventListener('dragstart',e=>{const li=e.target.closest&&e.target.closest('li[data-r]');if(!li)return;dragR=+li.dataset.r;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',String(dragR));li.classList.add('drag')});
$('#view').addEventListener('dragover',e=>{const li=e.target.closest&&e.target.closest('li[data-r]');if(dragR<0||!li)return;e.preventDefault();e.dataTransfer.dropEffect='move';document.querySelectorAll('#view li.ins-a,#view li.ins-b').forEach(x=>x.classList.remove('ins-a','ins-b'));const r=li.getBoundingClientRect();li.classList.add(e.clientY>r.top+r.height/2?'ins-a':'ins-b')});
$('#view').addEventListener('drop',e=>{const li=e.target.closest&&e.target.closest('li[data-r]');if(dragR<0||!li)return;e.preventDefault();
 const r=li.getBoundingClientRect();let to=+li.dataset.r+(e.clientY>r.top+r.height/2?1:0);const from=dragR;dragR=-1;clr();
 if(from<to)to--;if(to===from)return;const[x]=S.tasks.splice(from,1);S.tasks.splice(to,0,x);save();view();say(unesc(x.t)+': posição '+(to+1)+' de '+S.tasks.length)});
$('#view').addEventListener('dragend',()=>{dragR=-1;clr()});
$('#view').addEventListener('keydown',e=>{if(e.key==='Escape'&&e.target.id==='ted'){e.stopPropagation();endEdit(S.tasks.findIndex(t=>t.id===S.edit))}});

/* Rádio online: um player com emissora anterior/próxima (a lista fica só no modo de edição) */
const RT={load:'Conectando…',live:'Ao vivo',wait:'Reconectando…',err:'Não foi possível tocar. Confira o link do stream (em páginas https, o stream também precisa ser https).'};
const RD_DEF=[
 {n:'Lofi Café Chilling',u:'https://radio.loficafe.net/listen/chilling/radio.mp3',g:'Lo-fi · beats'},
 {n:'LoFi Radio',u:'https://live.lofiradio.ru/lofi_mp3_128',g:'Lo-fi · beats'},
 {n:'Hotmix Lo-fi',u:'https://streaming.hotmixradio.com/hotmix-lofi-en-mp3',g:'Lo-fi · beats'},
 {n:'Psybr Lo-Fi (BR)',u:'https://radio.psybrazil.com.br/lofi',g:'Lo-fi · beats'},
 {n:'SomaFM Fluid',u:'https://ice5.somafm.com/fluid-128-mp3',g:'Lo-fi · beats'},
 {n:'SomaFM Vaporwaves',u:'https://ice5.somafm.com/vaporwaves-128-mp3',g:'Lo-fi · eletrônica'},
 {n:'SomaFM cliqhop idm',u:'https://ice5.somafm.com/cliqhop-128-mp3',g:'Lo-fi · eletrônica'},
 {n:'SomaFM Beat Blender',u:'https://ice5.somafm.com/beatblender-128-mp3',g:'Lo-fi · eletrônica'},
 {n:'SomaFM Groove Salad',u:'https://ice5.somafm.com/groovesalad-128-mp3',g:'Lo-fi · eletrônica'},
 {n:'SomaFM Space Station Soma',u:'https://ice5.somafm.com/spacestation-128-mp3',g:'Lo-fi · eletrônica'},
 {n:'SomaFM Drone Zone',u:'https://ice5.somafm.com/dronezone-128-mp3',g:'Lo-fi · foco'},
 {n:'SomaFM Deep Space One',u:'https://ice5.somafm.com/deepspaceone-128-mp3',g:'Lo-fi · foco'},
 {n:'SomaFM Mission Control',u:'https://ice5.somafm.com/missioncontrol-128-mp3',g:'Lo-fi · foco'},
 {n:'SomaFM Groove Salad Classic',u:'https://ice5.somafm.com/gsclassic-128-mp3',g:'Lo-fi · foco'},
 {n:'SomaFM Indie Pop Rocks',u:'https://ice5.somafm.com/indiepop-128-mp3',g:'Rock suave (indie)'},
 {n:'Alpha FM 101.7',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/Radio_ALPHAFM_ADP.aac?dist=site-alphafm',g:'Brasil · mais ouvidas'},
 {n:'Band FM 96.1',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/BANDFM_SPAAC.aac',g:'Brasil · mais ouvidas'},
 {n:'Jovem Pan FM 100.9',u:'https://24253.live.streamtheworld.com/JP_SP_FMAAC.aac',g:'Brasil · mais ouvidas'},
 {n:'Transamérica Pop SP',u:'https://26513.live.streamtheworld.com/RT_SPAAC.aac',g:'Brasil · mais ouvidas'},
 {n:'Nativa FM 95.3',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/NATIVA_SPAAC.aac',g:'Brasil · mais ouvidas'},
 {n:'Gazeta FM 88.1',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/GAZETA_FM.mp3',g:'Brasil · mais ouvidas'},
 {n:'Mix FM SP',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/MIXFM_SAOPAULOAAC.aac',g:'Brasil · mais ouvidas'},
 {n:'Antena 1 SP',u:'https://antenaone.crossradio.com.br/stream/1;?type=mp4',g:'Brasil · mais ouvidas'},
 {n:'89 FM A Rádio Rock',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/Radio_89FM_ADP.aac?dist=site-89fm',g:'Brasil · mais ouvidas'},
 {n:'Metropolitana 98.5 SP',u:'https://ice.fabricahost.com.br/metropolitana985sp',g:'Brasil · mais ouvidas'},
 {n:'FM O Dia 100.5',u:'http://streaming.livespanel.com:20000/live',g:'Brasil · mais ouvidas'},
 {n:'JB FM 99.9',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/JBFMAAC1.aac',g:'Brasil · mais ouvidas'},
 {n:'Super Rádio Tupi',u:'https://8923.brasilstream.com.br/stream',g:'Brasil · mais ouvidas'},
 {n:'Energia 97',u:'https://streaming.inweb.com.br/energia',g:'Brasil · mais ouvidas'},
 {n:'Jovem Pan News',u:'https://26643.live.streamtheworld.com/JP_SP_AMAAC.aac',g:'Brasil · mais ouvidas'},
 {n:'BandNews FM',u:'https://26733.live.streamtheworld.com/BANDNEWSFM_SPAAC/HLS/playlist.m3u8',g:'Brasil · mais ouvidas'},
 {n:'Rádio Bandeirantes',u:'https://18123.live.streamtheworld.com/RADIOBANDEIRANTESAAC/HLS/playlist.m3u8',g:'Brasil · mais ouvidas'},
 {n:'Rádio Itatiaia',u:'https://8903.brasilstream.com.br/stream',g:'Brasil · mais ouvidas'},
 {n:'Rádio Gaúcha',u:'https://1132747t.ha.azioncdn.net/primary/gaucha_rbs.sdp/playlist.m3u8',g:'Brasil · mais ouvidas'},
 {n:'Clube FM Brasília',u:'https://8157.brasilstream.com.br/stream',g:'Brasil · mais ouvidas'},
 {n:'Kiss FM 92.5',u:'',g:'Brasil · mais ouvidas'},
 {n:'Disney FM SP',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/DISNEY_BRA_SP.mp3',g:'Brasil · mais ouvidas'},
 {n:'Alpha MPB',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/ALPHAMPBAAC.aac?dist=site-alphampb',g:'Brasil · mais ouvidas'},
 {n:'Alpha Classic',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/89BRASILAAC.aac?dist=site-alphaclassics',g:'Brasil · mais ouvidas'},
 {n:'Mix FM Porto Alegre',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/MIXFM_POAAAC.aac',g:'Brasil · mais ouvidas'},
 {n:'98 FM Curitiba',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/98FM_CWBAAC.aac?dist=RadiosNet',g:'Brasil · mais ouvidas'},
 {n:'Top FM SP 104.1',u:'https://ice.fabricahost.com.br/topfm1041sp',g:'Brasil · mais ouvidas'},
 {n:'Ótima FM 90.3',u:'https://ice.fabricahost.com.br/otimafm903',g:'Brasil · mais ouvidas'},
 {n:'Laser FM Campinas',u:'https://8577.brasilstream.com.br/stream',g:'Brasil · mais ouvidas'},
 {n:'98 FM BH',u:'https://9554.brasilstream.com.br/stream',g:'Brasil · mais ouvidas'},
 {n:'Alvorada FM BH',u:'https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_ALVORADAAAC.aac',g:'Brasil · mais ouvidas'},
 {n:'Alpha FM Goiânia',u:'https://ice.fabricahost.com.br/alphafm1021',g:'Brasil · mais ouvidas'},
 {n:'Metropolitana Pop',u:'https://ice.fabricahost.com.br/metrosppop',g:'Brasil · estilos e regionais'},
 {n:'Metropolitana MPB',u:'https://ice.fabricahost.com.br/metropolitanampb',g:'Brasil · estilos e regionais'},
 {n:'Metropolitana Light',u:'https://ice.fabricahost.com.br/metropolitanasplight',g:'Brasil · estilos e regionais'},
 {n:'Metropolitana Sertanejo',u:'https://ice.fabricahost.com.br/metrospsertanejo',g:'Brasil · estilos e regionais'},
 {n:'Hunter.FM Sertanejo',u:'',g:'Brasil · estilos e regionais'},
 {n:'Sertaneja FM',u:'https://stm5.painelcast.com:7584/stream',g:'Brasil · estilos e regionais'},
 {n:'Rádio Sertanejo',u:'https://stream.vagalume.fm/hls/14619606471054026608/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Sertanejo Romântico',u:'https://stream.vagalume.fm/hls/1499715905423293/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Pop Rock',u:'https://stream.vagalume.fm/hls/1506975770142563/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Rock',u:'https://stream.vagalume.fm/hls/1464201608479108132/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Pop Nacional',u:'https://stream.vagalume.fm/hls/1470169276225492/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio MPB',u:'https://stream.vagalume.fm/hls/1470154983100588/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Pagode',u:'https://stream.vagalume.fm/hls/147015499779090/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Forró',u:'https://stream.vagalume.fm/hls/147015501223418/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Eletrônica',u:'https://stream.vagalume.fm/hls/146411300413492499/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Anos 80',u:'https://stream.vagalume.fm/hls/1507663468882713/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Anos 90',u:'https://stream.vagalume.fm/hls/1478022035646498/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Anos 2000',u:'https://stream.vagalume.fm/hls/147396460892793/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Românticas',u:'https://stream.vagalume.fm/hls/1470155219129532/aac.m3u8',g:'Brasil · estilos e regionais'},
 {n:'Rádio Reggae',u:'https://stream.vagalume.fm/hls/1465840912218182609/aac.m3u8',g:'Brasil · estilos e regionais'}];
const nrm=t=>String(t||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
function rdMerge(list){const out=list.filter(x=>x.n||x.u).map(x=>({n:x.n,u:x.u,g:x.g||''}));
 RD_DEF.forEach(d=>{const i=out.findIndex(x=>nrm(x.n)===nrm(d.n)||(d.u&&x.u===d.u));if(i<0)out.push({n:d.n,u:d.u,g:d.g});else if(!out[i].g)out[i].g=d.g});return out}
function rdSort(list){const rank=new Map(RD_DEF.map((d,i)=>[nrm(d.n),i]));return list.map((x,i)=>({x,i,r:rank.has(nrm(x.n))?rank.get(nrm(x.n)):1e6})).sort((a,b)=>a.r-b.r||a.i-b.i).map(o=>o.x)}
S.rd={list:[],draft:[],i:-1,cur:0,tok:0,hls:null,hlsP:null,st:'',on:false,edit:false,vol:(v=>v===null?0.8:Math.min(1,Math.max(0,+v||0)))(ls.get('rd_vol'))};
try{const r=JSON.parse(ls.get('radios')||'null');if(Array.isArray(r))S.rd.list=r.slice(0,200).map(x=>({n:String(x.n||'').slice(0,40),u:String(x.u||''),g:String(x.g||'').slice(0,30)}))}catch(_){}
if(!ls.get('radios_v4')){S.rd.list=rdSort(rdMerge(S.rd.list));ls.set('radios',JSON.stringify(S.rd.list));ls.set('radios_v4','1');ls.del('rd_cur')}
S.rd.cur=Math.min(Math.max(0,+ls.get('rd_cur')||0),Math.max(0,S.rd.list.length-1));
S.rd.favs=(()=>{try{const f=JSON.parse(ls.get('rd_favs')||'[]');return Array.isArray(f)?f.filter(x=>typeof x==='string').slice(0,200):[]}catch(_){return[]}})();
const RA=new Audio();RA.preload='none';
const rdName=k=>{const x=S.rd.list[k===undefined?S.rd.cur:k];return (x&&x.n)||'Emissora '+((k===undefined?S.rd.cur:k)+1)};
const rdPlaying=()=>S.rd.i>=0&&['load','live','wait'].includes(S.rd.st);
function pdSave(){ls.set('pomo_done',JSON.stringify({d:new Date().toDateString(),n:S.p.done}))}
try{const j=JSON.parse(ls.get('pomo_done')||'null');if(j&&j.d===new Date().toDateString())S.p.done=Math.min(pomoLongAfter(),Math.max(0,+j.n||0))}catch(_){}
function rdMedia(){if(!('mediaSession' in navigator))return;try{const ms=navigator.mediaSession;ms.metadata=new MediaMetadata({title:rdName(S.rd.i>=0?S.rd.i:S.rd.cur),artist:'Rádio'});
 ms.setActionHandler('nexttrack',()=>rdStep(1));ms.setActionHandler('previoustrack',()=>rdStep(-1));ms.setActionHandler('pause',()=>rdStop());ms.setActionHandler('play',()=>rdPlay(S.rd.cur))}catch(_){}}
function rdRender(){$('#notch').classList.toggle('playing',S.m.play||S.rd.on);if(S.tab!=='radio'||S.rd.edit)return;
 const a=document.activeElement,sel=a&&a.dataset&&a.dataset.a?'[data-a="'+a.dataset.a+'"]'+(a.dataset.i!==undefined?'[data-i="'+a.dataset.i+'"]':''):'';view();if(sel){const n=$('#view '+sel);if(n)n.focus()}}
function rdDetach(){if(S.rd.hls){try{S.rd.hls.destroy()}catch(_){}S.rd.hls=null}}
function rdStop(){S.rd.tok++;rdDetach();try{RA.pause();RA.removeAttribute('src');RA.load()}catch(_){}S.rd.i=-1;S.rd.st='';S.rd.on=false;rdRender()}
function rdFail(){if((S.rd.retry||0)<3&&S.rd.i>=0&&S.rd.list[S.rd.i]&&S.rd.list[S.rd.i].u){const k=S.rd.i;S.rd.retry=(S.rd.retry||0)+1;setTimeout(()=>{if(S.rd.i===k&&S.rd.st==='err')rdPlay(k)},2500*S.rd.retry)}S.rd.st='err';S.rd.on=false;rdRender();say('Não foi possível tocar '+rdName(S.rd.i))}
const isHls=u=>/\.m3u8(\?|#|$)/i.test(u);
const HLS_VER='1.7.3',HLS_SRI='sha384-cciJ0zi8d1uMKC2zJd7jvPY4HQt7W4ByUI/FlMkltvBi31aW61rcpVBhpmW8/NwX';
function loadHls(){if(window.Hls)return Promise.resolve(window.Hls);if(S.rd.hlsP)return S.rd.hlsP;
 const tenta=(src,cdn)=>new Promise((ok,no)=>{const sc=document.createElement('script');sc.src=src;sc.integrity=HLS_SRI;if(cdn)sc.crossOrigin='anonymous';sc.onload=()=>window.Hls?ok(window.Hls):no(new Error('hls'));sc.onerror=()=>no(new Error('hls'));document.head.appendChild(sc)});
 const cdn='https://cdn.jsdelivr.net/npm/hls.js@'+HLS_VER+'/dist/hls.min.js';
 S.rd.hlsP=(location.protocol==='file:'?tenta(cdn,true):tenta('/vendor/hls.min.js',false).catch(()=>tenta(cdn,true))).catch(e=>{S.rd.hlsP=null;throw e});return S.rd.hlsP}
function rdPlay(i){const st=S.rd.list[i];if(!st||!st.u)return;S.rd.t0=Date.now();
 S.rd.cur=i;ls.set('rd_cur',i);S.rd.i=i;S.rd.on=false;rdDetach();const tok=++S.rd.tok;
 if(location.protocol==='https:'&&/^http:/i.test(st.u)){S.rd.st='err';rdRender();say('Esta emissora usa http e a página está em https. Troque o link por https.');return}
 S.rd.st='load';rdRender();RA.volume=(st.v!=null?st.v:S.rd.vol);
 const falha=()=>{if(tok===S.rd.tok&&S.rd.i===i)rdFail()},tocar=()=>{const pr=RA.play();if(pr&&pr.catch)pr.catch(e=>{if(e&&e.name!=='AbortError')falha()})};
 if(!isHls(st.u)||RA.canPlayType('application/vnd.apple.mpegurl')){RA.src=st.u;tocar();return}
 loadHls().then(Hls=>{if(tok!==S.rd.tok)return;if(!window.Hls.isSupported()){falha();return}
  const h=new Hls({lowLatencyMode:false});S.rd.hls=h;
  h.on(Hls.Events.ERROR,(_e,d)=>{if(d&&d.fatal)falha()});h.on(Hls.Events.MANIFEST_PARSED,tocar);
  h.loadSource(st.u);h.attachMedia(RA)}).catch(falha)}
function rdPool(){return S.rd.list.map((x,i)=>x.u&&(!S.rd.onlyFav||isFav(x.u))?i:-1).filter(i=>i>=0)}
function rdEmpty(){say(S.rd.onlyFav?'Nenhuma favorita com link. Favorite uma emissora primeiro':'Nenhuma emissora com link. Adicione em Editar emissoras')}
function rdStep(d){const pl=rdPool();if(!pl.length){rdEmpty();return false}
 const idx=pl.indexOf(S.rd.cur),k=idx<0?(d>0?pl[0]:pl[pl.length-1]):pl[(idx+d+pl.length)%pl.length];
 const was=rdPlaying()||(S.rd.i>=0&&S.rd.st==='err');
 if(was)rdPlay(k);else{S.rd.cur=k;ls.set('rd_cur',k);S.rd.i=-1;S.rd.st='';rdRender();say(rdName(k)+', emissora '+(pl.indexOf(k)+1)+' de '+pl.length)}
 return true}
const isFav=u=>!!u&&S.rd.favs.includes(u);
function toggleFav(i){const u=S.rd.list[i]&&S.rd.list[i].u;if(!u){say('Adicione o link desta emissora antes de favoritar');return}
 const k=S.rd.favs.indexOf(u);if(k>=0){S.rd.favs.splice(k,1);say('Removida dos favoritos')}else{if(S.rd.favs.length>=200)S.rd.favs.shift();S.rd.favs.push(u);say('Adicionada aos favoritos')}
 ls.set('rd_favs',JSON.stringify(S.rd.favs))}
function rdRand(){const pl=rdPool();if(!pl.length){rdEmpty();return}
 let k=pl[Math.floor(Math.random()*pl.length)];if(pl.length>1&&k===S.rd.cur)k=pl[(pl.indexOf(k)+1)%pl.length];rdPlay(k)}
RA.addEventListener('playing',()=>{if(S.rd.i<0)return;S.rd.retry=0;try{const n=rdName(S.rd.cur);let h=JSON.parse(ls.get('rd_hist')||'[]');if(!Array.isArray(h))h=[];ls.set('rd_hist',JSON.stringify([n].concat(h.filter(x=>x!==n)).slice(0,8)))}catch(_){}S.rd.st='live';S.rd.on=true;rdRender();rdMedia();say('Tocando '+rdName(S.rd.i))});
RA.addEventListener('waiting',()=>{if(S.rd.i>=0&&S.rd.st==='live'){S.rd.st='wait';S.rd.on=false;rdRender()}});
RA.addEventListener('error',()=>{if(S.rd.i>=0)rdFail()});
function rdCollect(){S.rd.draft=S.rd.draft.map((s,k)=>{const n=$('#rn'+k),u=$('#ru'+k);return n&&u?{n:n.value,u:u.value,g:s.g||''}:s})}
function radioView(){const R=S.rd;
 if(R.edit)return `<h2>Emissoras</h2><form id="rform">${R.draft.map((s,k)=>`<div class="rrow"><input id="rn${k}" aria-label="Nome da emissora ${k+1}" placeholder="Nome" maxlength="40" value="${esc(s.n)}" autocomplete="off"><input id="ru${k}" type="url" inputmode="url" aria-label="Link do stream da emissora ${k+1}" placeholder="https://..." value="${esc(s.u)}" autocomplete="off"><button type="button" class="ib sm" data-a="rrm" data-i="${k}" aria-label="Remover emissora ${k+1}${s.n?': '+esc(s.n):''}">${ic('x')}</button></div>`).join('')}<div class="redact"><button type="button" class="chip" data-a="radd">Adicionar emissora</button><button type="button" class="chip" data-a="rsug">Adicionar sugeridas</button><button type="button" class="chip" data-a="rimp">Importar playlist (.m3u ou .pls)</button><input type="file" id="rimpf" accept=".m3u,.m3u8,.pls,text/plain,audio/x-mpegurl,audio/x-scpls" class="sr" tabindex="-1" aria-hidden="true"></div><p class="sub" id="rimsg" role="status" style="margin:0"></p><p class="err" id="rerr" role="alert"></p><div style="display:flex;justify-content:flex-end;gap:8px"><button type="button" class="chip" data-a="rcan">Cancelar</button><button class="chip">Salvar</button></div></form>`;
 const L=R.list,pl=L.map((x,i)=>x.u?i:-1).filter(i=>i>=0),k=R.cur,s=L[k]||{n:'',u:''},on=rdPlaying()&&R.i===k,pos=pl.indexOf(k)+1;
 const stt=!L.length?'Nenhuma emissora cadastrada':!s.u?'Sem link. Edite para adicionar':R.i===k&&R.st?RT[R.st]:'Parada';
 return `<h2>Rádio</h2><div class="now"><span class="art" aria-hidden="true" style="background:linear-gradient(135deg,#ff9a2e,#ff5a8a)"></span><div><b>${esc(L.length?rdName(k):'Sem emissoras')}</b><span>${stt}</span></div></div>
 <p class="sub" style="margin:0 0 10px">${s.g?esc(s.g)+' · ':''}${pos?'Emissora '+pos+' de '+pl.length:(S.rd.onlyFav?pl.length+(pl.length===1?' favorita':' favoritas'):pl.length+(pl.length===1?' emissora com link':' emissoras com link'))}</p>\n 
 <div class="ctrl"><button class="ib" data-a="rprev" aria-label="Emissora anterior">${ic('prev')}</button><button class="ib big" data-a="rplay" aria-pressed="${on}" aria-label="Ouvir rádio">${ic(on?'pause':'play')}</button><button class="ib" data-a="rnext" aria-label="Próxima emissora">${ic('next')}</button><button type="button" class="ib sm like" data-a="rfav" aria-pressed="${isFav(s.u)}" aria-label="Favoritar emissora">${ic(isFav(s.u)?'heartf':'heart')}</button><button type="button" class="ib" data-a="rrand" aria-label="Aleatória">${ic('shuf')}</button></div>
 <div class="rvol"><label for="rvol" class="sub">Volume</label><input id="rvol" type="range" min="0" max="1" step="0.05" value="${R.vol}"><button class="chip" data-a="redit">Editar emissoras</button></div>${sleepRow()}<div class="rsrow">${rsBox()}${favBox()}</div>${savedBox()}`}
function radioAct(a,i){const R=S.rd;
 if(a==='redit'){R.draft=R.list.map(x=>({n:x.n,u:x.u,g:x.g||''}));if(!R.draft.length)R.draft.push({n:'',u:'',g:''});R.edit=true;view();const n=$('#rn0');if(n)n.focus();return true}
 if(a==='rcan'){R.edit=false;view();const b=$('#view [data-a="redit"]');if(b)b.focus();return true}
 if(a==='radd'){if(R.draft.length>=200){say('Limite de 200 emissoras');return true}rdCollect();R.draft.push({n:'',u:''});view();const n=$('#rn'+(R.draft.length-1));if(n)n.focus();return true}
 if(a==='rrm'){rdCollect();R.draft.splice(i,1);view();const b=$('#view [data-a="rrm"][data-i="'+Math.min(i,R.draft.length-1)+'"]')||$('#view [data-a="radd"]');if(b)b.focus();say('Emissora removida');return true}
 if(a==='rsug'){rdCollect();const before=R.draft.filter(x=>x.n||x.u).length;R.draft=rdMerge(R.draft);view();say((R.draft.length-before)+' emissoras sugeridas adicionadas');return true}
 if(a==='rplay'){const s=R.list[R.cur];if(!s||!s.u){say('Adicione o link desta emissora em Editar emissoras');return true}
  if(rdPlaying()&&R.i===R.cur){rdStop();say('Rádio parada')}else rdPlay(R.cur);return true}
 if(a==='rimp'){$('#rimpf').click();return true}
 if(a==='rnext'){rdStep(1);return true}
 if(a==='rprev'){rdStep(-1);return true}
 if(a==='rpick'){const k=+i;S.rd.cur=k;ls.set('rd_cur',k);view();const n=$('#view [data-a="rpick"][data-i="'+k+'"]');if(n)n.focus();say('Selecionada: '+rdName(k));return true}
 if(a==='rfonly'){R.onlyFav=!R.onlyFav;if(R.onlyFav&&!rdPool().includes(R.cur)){const p=rdPool();if(p.length)R.cur=p[0];else{R.onlyFav=true}}view();const b=$('#view [data-a="rfonly"]');if(b)b.focus();say(R.onlyFav?'Mostrando só favoritas':'Mostrando todas as emissoras');return true}
 if(a==='rfav'){toggleFav(R.cur);view();const b=$('#view [data-a="rfav"]');if(b)b.focus();return true}
 if(a==='rrand'){rdRand();return true}
 return false}
$('#view').addEventListener('input',e=>{if(e.target.id==='rvol'){S.rd.vol=+e.target.value;const cur=S.rd.list[S.rd.cur];if(cur&&cur.v!=null){cur.v=S.rd.vol;ls.set('radios',JSON.stringify(S.rd.list))}RA.volume=S.rd.vol;ls.set('rd_vol',S.rd.vol)}});

/* envios de formulário: tempos do Pomodoro, edição de tarefa e emissoras */
function subExtra(e){const f=e.target;
 if(f.id==='qform'){spSrch();return true}
 if(f.id==='rsform'){rsRun();return true}
   if(f.id==='tpform'){const q=$('#tpcity').value.trim();if(q)wxSet(q);else $('#tpcity').focus();return true}
 if(f.id==='evform'){evCreate();return true}
  if(f.id==='pwform'){senhaGerar();return true}
 if(f.id==='livbusca'){if(LIV_OPEN.tipo==='pdf')pdfBuscar($('#livq').value);else livroBuscar($('#livq').value);return true}
 if(f.id==='linkform'){linkAdd();return true}
 if(f.id==='metaform'){const v=parseFloat(String($('#metah').value).replace(',','.'));if(v>0&&v<=168){ls.set('meta_escuta',String(v));view();say('Meta: '+v+' horas por semana')}else say('Informe entre 1 e 168 horas');return true}
 if(f.id==='tphrform'){const dd=$('#tphday').value,hh=$('#tphtime').value;if(/^([01]\d|2[0-3]):[0-5]\d$/.test(hh)){ls.set('tp_hour',dd+'_'+hh);view()}else say('Informe um horário');return true}
 if(f.id==='plnew'){const n=$('#plnewn').value.trim();if(n)spPlCreate(n).then(ok=>{if(ok)view()});return true}
 if(f.id==='tpfrfrm'){const v=$('#tpfrio').value.trim().replace(',','.');if(v===''){ls.del('wx_frio');say('Alerta de frio desligado')}else if(/^-?\d{1,2}(\.\d)?$/.test(v)){ls.set('wx_frio',v);say('Alerta de frio abaixo de '+v+'°')}else{say('Informe uma temperatura');return true}view();return true}
 if(f.id==='tpcafrm'){const v=$('#tpcalor').value.trim().replace(',','.');if(v===''){ls.del('wx_calor');say('Alerta de calor desligado')}else if(/^-?\d{1,2}(\.\d)?$/.test(v)){ls.set('wx_calor',v);say('Alerta de calor acima de '+v+'°')}else{say('Informe uma temperatura');return true}view();return true}
 if(f.id==='tpwfrm'){const v=$('#tpwind').value.trim().replace(',','.');if(v===''){ls.del('wx_wind');say('Alerta de vento desligado')}else if(/^\d{1,3}(\.\d)?$/.test(v)){ls.set('wx_wind',v);say('Alerta: vento acima de '+v+' km/h')}else{say('Informe um valor em km/h');return true}view();return true}
 if(f.id==='tpuvfrm'){const v=$('#tpuv').value.trim().replace(',','.');if(v===''){ls.del('wx_uv');say('Alerta de UV desligado')}else if(/^\d{1,2}(\.\d)?$/.test(v)){ls.set('wx_uv',v);say('Alerta: UV acima de '+v)}else{say('Informe um índice de 0 a 15');return true}view();return true}
 if(f.id==='tpafrm'){const v=$('#tpalert').value.trim().replace(',','.');if(v===''){ls.del('wx_alert');say('Alerta de temperatura desligado')}else if(/^-?\d{1,2}(\.\d)?$/.test(v)){ls.set('wx_alert',v);say('Alerta: avisar abaixo de '+v+'°')}else{say('Informe uma temperatura, como 5 ou 2,5')}view();return true}
 if(f.id==='tvform'){tvAdd();return true}
 if(f.id==='pform'){const a=parseT($('#pfoc').value),b=parseT($('#pbrk').value),c=parseT($('#plng').value);
  if(a==null||b==null||c==null){const bad=a==null?$('#pfoc'):b==null?$('#pbrk'):$('#plng');$('#perr').textContent='Tempo inválido em '+(a==null?'Foco':b==null?'Pausa':'Pausa longa')+'. Use minutos ou min:seg, de 0:05 a 180:00. Exemplos: 25, 2:40, 3:10.';bad.setAttribute('aria-invalid','true');bad.focus();return true}
  S.p.f=a;S.p.r=b;S.p.l=c;ls.set('pomo_f',a);ls.set('pomo_r',b);ls.set('pomo_l',c);const run=S.p.run;if(!run)S.p.left=pdur(S.p.mode);view();
  say(run?'Tempos salvos. Valem a partir da próxima etapa':'Tempos salvos: foco '+fmt(a)+', pausa '+fmt(b)+', pausa longa '+fmt(c));return true}
 if(f.classList&&f.classList.contains('ef')){const i=+f.dataset.r,v=$('#ted').value.trim();
  if(!v){say('Digite o texto da tarefa ou cancele com Esc');$('#ted').focus();return true}
  const dd=($('#ted-d')||{}).value;S.tasks[i].t=esc(v);S.tasks[i].due=/^\d{4}-\d\d-\d\d$/.test(dd||'')?dd:undefined;S.tasks[i].mod=Date.now();S.tasks[i].dy=true;save();say('Tarefa atualizada');endEdit(i);return true}
 if(f.id==='rform'){rdCollect();const out=[];
  for(let k=0;k<S.rd.draft.length;k++){const n=S.rd.draft[k].n.trim().slice(0,40),u=S.rd.draft[k].u.trim();
   if(!n&&!u)continue;
   if(u&&!/^https?:\/\/\S+$/i.test(u)){$('#rerr').textContent='Link inválido na emissora '+(k+1)+'. Ele deve começar com http:// ou https://.';const x=$('#ru'+k);x.setAttribute('aria-invalid','true');x.focus();return true}
   if(u&&location.protocol==='https:'&&/^http:/i.test(u)){$('#rerr').textContent='Emissora '+(k+1)+': esta página está em https, então o link também precisa começar com https://.';const x=$('#ru'+k);x.setAttribute('aria-invalid','true');x.focus();return true}
   if(u&&/\.(pls|m3u)(\?|#|$)/i.test(u)){$('#rerr').textContent='Emissora '+(k+1)+': este link é uma lista de reprodução (.pls ou .m3u). Baixe o arquivo e use Importar playlist.';const x=$('#ru'+k);x.setAttribute('aria-invalid','true');x.focus();return true}
   out.push({n:n||'Emissora '+(out.length+1),u,g:S.rd.draft[k].g||''})}
  rdStop();S.rd.list=out;S.rd.cur=Math.min(S.rd.cur,Math.max(0,out.length-1));ls.set('radios',JSON.stringify(out));ls.set('rd_cur',S.rd.cur);S.rd.edit=false;view();const b=$('#view [data-a="redit"]');if(b)b.focus();say('Emissoras salvas');return true}
 return false}

/* Spotify: volume, posição da faixa e favoritos */
function spVol(){if(!S.tok)return '';const m=S.m,v=m.vol==null?50:m.vol,off=m.volOK===false;
 return `<div class="rvol"><label for="svol" class="sub">Volume</label><input id="svol" type="range" min="0" max="100" step="5" value="${v}" aria-valuetext="${v}%"${off?' disabled aria-describedby="svolnote"':''}>${off?'<span class="sub" id="svolnote">Este aparelho não permite ajustar o volume por aqui.</span>':''}</div>`}
function spPaint(){if(S.tab!=='music'||!S.open)return;const a=document.activeElement,f=a&&a.dataset&&a.dataset.a,id=a&&a.id;view();const n=f?$('#view [data-a="'+f+'"]'):id?$('#'+id):null;if(n)n.focus()}
function spFail(def){say(S.err===401?'A sessão do Spotify expirou. Toque em Conectar de novo na aba Música':S.err===403?'O Spotify recusou. Controlar a reprodução exige Premium; para favoritos, desconecte e conecte de novo e aceite o acesso à biblioteca':S.err===404?'Nenhum dispositivo ativo. Abra o Spotify e toque uma faixa':def)}
async function spLikeCheck(uri){const r=await spApi('/me/library/contains?uris='+encodeURIComponent(uri));if(S.m.uri!==uri)return;if(Array.isArray(r)){S.m.liked=!!r[0];spPaint()}}
async function spLike(){const m=S.m;if(!m.uri)return;const on=!m.liked;
 await spApi('/me/library?uris='+encodeURIComponent(m.uri),{method:on?'PUT':'DELETE'});
 if(S.err){spFail('Não foi possível atualizar os favoritos');return}
 m.liked=on;spPaint();say(on?'Faixa adicionada aos favoritos':'Faixa removida dos favoritos')}
async function spSeek(v){await spApi('/me/player/seek?position_ms='+Math.round(v*1000),{method:'PUT'});if(S.err)spFail('Não foi possível mudar a posição');setTimeout(spSync,500)}
async function spVolSet(v){await spApi('/me/player/volume?volume_percent='+v,{method:'PUT'});if(S.err){S.m.volOK=S.err===403?false:S.m.volOK;spFail('Não foi possível ajustar o volume');if(S.err===403)spPaint()}}
$('#view').addEventListener('input',e=>{const t=e.target;
 if(t.id==='mseek'){S.seeking=true;const v=+t.value,d=+t.max;$('#mpos').textContent=fmt(v);t.style.setProperty('--p',(v/d*100)+'%');t.setAttribute('aria-valuetext',fmt(v)+' de '+fmt(d))}
 if(t.id==='svol'){const v=+t.value;t.setAttribute('aria-valuetext',v+'%');S.m.vol=v;clearTimeout(S.vt);S.vt=setTimeout(()=>spVolSet(v),200)}});
$('#view').addEventListener('change',e=>{const t=e.target;if(t.id!=='mseek')return;const v=+t.value;S.seeking=false;S.m.pos=v;clearTimeout(S.sk);S.sk=setTimeout(()=>{if(S.tok)spSeek(v)},250)});
['pointerup','focusout'].forEach(ev=>$('#view').addEventListener(ev,()=>{S.seeking=false}));

/* Endereço dos logins, ações auxiliares e modo aplicativo */
function addrHint(){const l=location;
 if(l.protocol==='file:')return 'A página foi aberta como arquivo. Os logins não funcionam assim: use o servidor local (servir.py) ou hospede em https.';
 if(l.protocol==='https:')return 'Endereço https: serve para Spotify e Microsoft ao mesmo tempo.';
 if(l.hostname==='127.0.0.1')return 'O Spotify aceita este endereço, mas a Microsoft não aceita 127.0.0.1 pelo portal. Para usar os dois, abra https://localhost:8443/ (veja o LEIA-ME).';
 if(l.hostname==='localhost')return 'A Microsoft aceita este endereço, mas o Spotify não aceita http://localhost. Para usar os dois, abra https://localhost:8443/ (veja o LEIA-ME).';
 return 'Confirme que este endereço está cadastrado nos dois serviços.'}
function miscAct(a,b){
 if(a==='tsync'){todoSync(true);return true}
 if(a==='tauth'){mAuth({todo:true});return true}
 if(a==='drvnow'){drvUpload(true);return true}
 if(a==='drvrest'){drvRestore(false);return true}
 if(a==='drvyes'){drvRestore(true);return true}
 if(a==='drvno'){const o=S.drv.offer;if(o)ls.set('drv_at',String(o.at));S.drv.offer=null;S.drv.hold=false;say('Backup do OneDrive ignorado. Os dados daqui serão mantidos');repaintSet();return true}
 if(a==='rpre'){const p=RS_PRE[+b.dataset.k];if(p){$('#rsq').value=p.q;S.rd.rsQ=p.q;$('#rsbr').checked=!!p.br;rsRun(p)}return true}
 if(a==='rsadd'||a==='rsplay'){const u=b.dataset.u,n=b.dataset.n,L=S.rd.list;let k=L.findIndex(x=>x.u===u);
  if(k<0){if(L.length>=200){say('Limite de 200 emissoras');return true}L.push({n:n.slice(0,40),u,g:'Busca'});ls.set('radios',JSON.stringify(L));k=L.length-1;say('Adicionada à lista: '+n)}else say('Já está na lista: '+n);
  if(a==='rsplay')rdPlay(k);else{b.textContent='Na lista';b.setAttribute('aria-disabled','true')}return true}
 if(window.notchApp&&notchApp.clip&&(a==='ccopy'||a==='cpin'||a==='cdel'||a==='cclr')){
  const it=S.clip[+(b&&b.dataset.i)];
  if(a==='cclr'){q='';notchApp.clip.clear();say('Histórico limpo, itens fixados mantidos')}
  else if(it){if(a==='ccopy'){notchApp.clip.copy(it.id);say('Copiado')}else if(a==='cpin')notchApp.clip.pin(it.id);else{notchApp.clip.del(it.id);say('Item removido')}}
  return true}
 if(a==='mref'){msSync(true);return true}
 if(a==='cprev'||a==='cnext'){S.cd=stepDay(cd(),a==='cnext'?1:-1,S.cb);calGo();return true}
 if(a==='ctoday'){S.cd=null;calGo();return true}
 if(a==='cmode'){S.cm=b.dataset.m==='next'?'next':'day';calGo();return true}
 if(a==='expb'){bkExport();return true}
 if(a==='impb'){$('#impf').click();return true}
 if(a==='qadd'){if(b.getAttribute('aria-disabled')==='true')return true;
  spApi('/me/player/queue?uri='+encodeURIComponent(b.dataset.u),{method:'POST'}).then(()=>{if(S.err){spFail('Não foi possível adicionar à fila');return}b.textContent='Na fila';b.setAttribute('aria-disabled','true');say('Adicionada à fila: '+b.dataset.n)});return true}
 if(a==='cuib'){const u=location.origin+location.pathname;try{navigator.clipboard.writeText(u);say('Endereço copiado')}catch(_){say('Não foi possível copiar')}return true}
 if(a==='appquit'){if(window.notchApp)notchApp.quit();return true}
 return false}
if(window.notchApp){document.documentElement.classList.add('app');notchApp.onToggle(()=>setOpen(!S.open));
 let ft;const fit=()=>{clearTimeout(ft);ft=setTimeout(()=>{const b=$('#notch').getBoundingClientRect();notchApp.fit(Math.ceil(b.width),Math.ceil(b.height))},150)};
 new ResizeObserver(fit).observe($('#notch'));fit()
 const sendPrefs=()=>notchApp.prefs({clip:ls.get('opt_clip')!=='0',hover:ls.get('opt_hover')!=='0',leave:ls.get('opt_leave')==='1'});sendPrefs();
 S.clip=[];
 const adaptClip=c=>({id:c.id,a:c.sens?'!':'T',c:c.sens?'#b45309':'#52525b',t:c.t,h:new Date(c.at).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),pin:c.pin,sens:false,hide:false});
 const repaintClip=()=>{if(S.tab==='clip'&&S.open)keepFocus(drawClip)};
 notchApp.clip.list().then(l=>{S.clip=l.map(adaptClip);repaintClip()});
 notchApp.clip.onChange(l=>{S.clip=l.map(adaptClip);repaintClip()});
 notchApp.onHoverOpen(()=>{if(!S.open){S.hover=true;setOpen(true,true)}});
 notchApp.onHoverLeave(()=>{const a=document.activeElement,usando=document.hasFocus()&&a&&a.closest&&a.closest('#panel')&&/INPUT|SELECT|TEXTAREA/.test(a.tagName);
  if(S.open&&S.hover&&ls.get('opt_leave')==='1'&&!usando&&!S.edit)setOpen(false,true)});
 ['pointerdown','keydown'].forEach(ev=>$('#notch').addEventListener(ev,()=>{S.hover=false}));
 let hv;$('#pill').addEventListener('pointerenter',()=>{if(ls.get('opt_hover')==='0'||S.open)return;hv=setTimeout(()=>{if(!S.open){S.hover=true;setOpen(true,true)}},350)});
 $('#pill').addEventListener('pointerleave',()=>clearTimeout(hv));
 $('#view').addEventListener('change',e=>{const t=e.target;
  if(t.id==='oclip'){ls.set('opt_clip',t.checked?'1':'0');sendPrefs()}
  if(t.id==='ohov'){ls.set('opt_hover',t.checked?'1':'0');sendPrefs()}
  if(t.id==='oleave'){ls.set('opt_leave',t.checked?'1':'0');sendPrefs()}})}

/* Agenda: atualizar ao voltar para a aba */
const hm=t=>new Date(t).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
const backAgenda=()=>{if(!document.hidden&&msOn()&&Date.now()-(S.msAt||0)>15000)msSync()};
document.addEventListener('visibilitychange',backAgenda);window.addEventListener('focus',backAgenda);

/* Spotify: escolher o aparelho e adicionar faixas à fila */
async function spDevs(){if(!S.tok)return;const r=await spApi('/me/player/devices');if(!r||!r.devices)return;S.devs=r.devices;
 devPaint()}
function devPaint(){const l=$('#sdevl');if(!l)return;if(!l.contains(document.activeElement))l.innerHTML=devList();
 const b=$('#view [data-a="devtoggle"]');if(!b)return;const act=(S.devs||[]).find(x=>x.is_active),d=b.querySelector('.dot-on');
 b.setAttribute('aria-label','Reproduzir em: '+(act?act.name:'nenhum aparelho'));
 if(act&&!d)b.insertAdjacentHTML('beforeend','<span class="dot-on" aria-hidden="true"></span>');else if(!act&&d)d.remove()}
function spDev(){if(!S.tok)return '';if(!S.devs)setTimeout(spDevs,0);
 const act=(S.devs||[]).find(x=>x.is_active);
 return `<div class="np-bottom"><button class="ib sm dev" data-a="devtoggle" aria-expanded="${!!S.devOpen}" aria-controls="sdevl" aria-label="Reproduzir em: ${esc(act?act.name:'nenhum aparelho')}">${ic('dev')}${act?'<span class="dot-on" aria-hidden="true"></span>':''}</button>${spVol()}</div>
 <div id="sdevl" class="devl" ${S.devOpen?'':'hidden'}>${devList()}</div>
 <details class="dt"><summary>Buscar e adicionar à fila</summary><form id="qform" class="add" style="margin-top:8px"><input id="qq" aria-label="Buscar faixa" placeholder="Nome da faixa ou artista" autocomplete="off"><button>Buscar</button></form><div id="qres" aria-live="polite"></div></details>`}
function spExtra(){const q=(S.queue||[]).slice(0,5);
 const fila=q.length?'<ol>'+q.map(x=>'<li>'+esc(x.name)+' <span class="sub">· '+esc((x.artists||[]).map(a=>a.name).join(', '))+'</span></li>').join('')+'</ol>':'<p class="sub">Fila vazia ou indisponível. A fila aparece quando há reprodução ativa.</p>';
 return '<div class="spx"><h3>A seguir</h3>'+fila+'</div>'}
async function spLoadQueue(){if(!S.tok||Date.now()-(S.qAt||0)<15000)return;S.qAt=Date.now();const r=await spApi('/me/player/queue');if(r&&Array.isArray(r.queue)){S.queue=r.queue;if(S.tab==='music')view()}}
function devList(){const d=S.devs||[];if(!d.length)return '<p class="sub">Nenhum aparelho encontrado. Abra o Spotify em algum aparelho.</p>';
 const sem=!d.some(x=>x.is_active);
 return (sem?'<p class="sub" role="status">Nenhum aparelho está tocando. Escolha um abaixo ou inicie a música no app do Spotify.</p>':'')+'<p class="sub" id="sdevh">Reproduzir em</p><ul class="devs" aria-labelledby="sdevh">'+d.map(x=>`<li><button class="devbtn" data-a="devpick" data-id="${esc(x.id)}" aria-pressed="${!!x.is_active}">${esc(x.name)}${x.is_active?' · tocando':''}</button></li>`).join('')+'</ul>'}
/* Playlists: busca no Spotify pelo artista atual (não são recomendações personalizadas) */
function plsSection(){const a=(S.m.list[0]||{}).a||'',q=a.split(',')[0].trim();
 return `<details class="dt" id="pls"><summary>Playlists sugeridas</summary><p class="sub">Busca no Spotify por "${esc(q||'artista atual')}". Não são recomendações personalizadas do Spotify.</p><div id="plsres" aria-live="polite"></div></details>`}
async function plsLoad(){const a=(S.m.list[0]||{}).a||'',q=a.split(',')[0].trim()||'lofi';const out=$('#plsres');if(!out)return;if(!S.tok){out.textContent='Conecte ao Spotify para buscar playlists.';return}out.textContent='Buscando…';
 const r=await spApi('/search?'+new URLSearchParams({q,type:'playlist',limit:'5'}));
 if(S.err||!r){out.textContent='Não foi possível buscar playlists agora.';return}
 const it=((r.playlists&&r.playlists.items)||[]).filter(Boolean);
 out.innerHTML=it.length?'<ul class="devs">'+it.map(p=>`<li class="row" style="margin:0 0 6px"><span class="grow">${esc(p.name)}<br><span class="sub">${esc((p.owner&&p.owner.display_name)||'Spotify')}</span></span><button class="chip" data-a="plsplay" data-u="${esc(p.uri)}" aria-label="Tocar playlist: ${esc(p.name)}">Tocar</button></li>`).join('')+'</ul>':'Nenhuma playlist encontrada.'}
 async function spSrch(){const q=$('#qq').value.trim(),out=$('#qres');buscaHistPush(q);
 if(q.length<2){out.textContent='Digite pelo menos 2 letras.';return}
 out.textContent='Buscando…';const r=await spApi('/search?'+new URLSearchParams({q,type:'track',limit:'5'}));
 if(S.err||!r||!r.tracks){out.textContent='Não foi possível buscar agora.';return}
 const it=r.tracks.items||[];
 out.innerHTML=it.length?it.map(t=>{const a=(t.artists||[]).map(x=>x.name).join(', ');return `<div class="row"><span class="grow">${esc(t.name)}<br><span class="sub">${esc(a)}</span></span><button class="chip" data-a="qadd" data-u="${esc(t.uri)}" data-n="${esc(t.name)}" aria-label="Adicionar à fila: ${esc(t.name)}, ${esc(a)}">Adicionar</button></div>`}).join(''):'Nada encontrado para essa busca.'}
setInterval(()=>{if(S.tok&&S.open&&S.tab==='music')spDevs()},20000);

/* Rádio: temporizador para dormir */
const SLEEP_OPTS=[0,15,30,45,60,90];
const sleepTxt=()=>S.rd.sleepAt?'Para em '+Math.max(1,Math.ceil((S.rd.sleepAt-Date.now())/60000))+' min':'';
function radioExtrasDom(){const v=$('#view');if(!v||S.tab!=='radio')return;
 v.querySelectorAll('#rtile,#rweek').forEach(n=>n.remove());
 
 const listen=(()=>{try{return JSON.parse(ls.get('listen')||'{}')||{}}catch(_){return {}}})();
 const dias=[...Array(7).keys()].reverse().map(i=>dayKey(new Date(Date.now()-i*864e5)));
 const tot={};dias.forEach(k=>{const d=listen[k];if(d&&d.r)Object.entries(d.r).forEach(([n,sec])=>{tot[n]=tot[n]||{sec:0,dia:{}};tot[n].sec+=sec;tot[n].dia[k]=(tot[n].dia[k]||0)+sec})});
 const top=Object.entries(tot).sort((a,b)=>b[1].sec-a[1].sec).slice(0,6);
 const sec2=x=>{const h=Math.floor(x/3600),m=Math.round((x%3600)/60);return h?h+' h '+m+' min':m+' min'};
 const wk=document.createElement('section');wk.id='rweek';wk.setAttribute('aria-label','Tempo ouvido por emissora na semana');wk.className='tp-card';wk.style.margin='0 0 12px';
 wk.innerHTML='<div class="tp-k">Últimos 7 dias por emissora</div>'+(top.length?top.map(([n,o])=>{const max=Math.max(1,...dias.map(k=>o.dia[k]||0));return '<div style="margin-top:8px"><div style="display:flex;justify-content:space-between;font-size:14px"><span>'+esc(n)+'</span><b>'+sec2(o.sec)+'</b></div><div style="display:flex;align-items:flex-end;gap:3px;height:34px;margin-top:4px" role="img" aria-label="'+esc(n)+': '+sec2(o.sec)+' na semana">'+dias.map(k=>'<i style="flex:1;display:block;min-height:2px;height:'+Math.round((o.dia[k]||0)/max*100)+'%;background:var(--acc,#30d158);border-radius:3px 3px 1px 1px"></i>').join('')+'</div></div>'}).join(''):'<p class="sub" style="margin:6px 0 0">Ainda sem dados de escuta na semana.</p>');
 const detW=v.querySelector('#rsvdet');if(detW)detW.after(wk);else v.appendChild(wk);radioListDom();
 const det=v.querySelector('#rsvdet');
 if(det&&!det.querySelector('#rsearch')){const wrap=document.createElement('div');wrap.style.margin='8px 0';wrap.innerHTML='<label class="sr" for="rsearch">Buscar nas rádios salvas</label><input id="rsearch" type="search" placeholder="Buscar rádio pelo nome" maxlength="40" autocomplete="off" style="width:100%;box-sizing:border-box;border-radius:12px;padding:10px;background:var(--row);color:var(--ink);border:0;font:inherit">';const sm=det.querySelector('summary');sm?sm.after(wrap):det.prepend(wrap)}
 const cur=S.rd.list[S.rd.cur];
 const ex=v.querySelector('#rvolstation');if(ex)ex.remove();
 if(cur&&cur.u){const box=document.createElement('div');box.id='rvolstation';box.className='rvol';box.style.flexWrap='wrap';
  box.innerHTML='<span class="sub">Volume desta emissora: '+(cur.v!=null?Math.round(cur.v*100)+'%':'geral')+'</span><button type="button" class="chip" data-a="rvolsave">Salvar volume para esta emissora</button>'+(cur.v!=null?'<button type="button" class="chip" data-a="rvolclr">Usar volume geral</button>':'');
  const rv=v.querySelector('#rvol');if(rv&&rv.parentElement)rv.parentElement.after(box);else v.prepend(box)}}
document.addEventListener('input',e=>{if(e.target.id!=='rsearch')return;const q=e.target.value.trim().toLowerCase();document.querySelectorAll('#rsvdet .svd').forEach(li=>{li.hidden=!!q&&!li.textContent.toLowerCase().includes(q)})});
document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-a]');if(!t)return;
 if(t.dataset.a==='rvolsave'){const c=S.rd.list[S.rd.cur];if(c){c.v=S.rd.vol;ls.set('radios',JSON.stringify(S.rd.list));RA.volume=c.v;view();say('Volume salvo para '+(c.n||'esta emissora'))}return}
 if(t.dataset.a==='rgf'){rdg=t.dataset.g||'';view();return}
 if(t.dataset.a==='rlogo'){const i=+t.dataset.i,x=S.rd.list[i];if(!x)return;const u=window.prompt('Endereço da imagem do logotipo (https). Deixe vazio para remover.',x.img||'');if(u===null)return;const v=u.trim();if(!v){delete x.img;rdSaveList();view();say('Logotipo removido');return}if(!/^https:\/\/\S+$/i.test(v)){say('O endereço precisa começar com https://');return}x.img=v.slice(0,300);rdSaveList();view();say('Logotipo salvo');return}
 if(t.dataset.a==='rup'||t.dataset.a==='rdown'){rdMove(+t.dataset.i,t.dataset.a==='rup'?-1:1);return}
 if(t.dataset.a==='rretry'){S.rd.retry=0;S.rd.wt=0;rdPlay(S.rd.cur);return}
 if(t.dataset.a==='rsort'){rdSortList(t.dataset.k);return}
 if(t.dataset.a==='rren'||t.dataset.a==='rgru'||t.dataset.a==='rtz'){const i=+t.dataset.i,x=S.rd.list[i];if(!x)return;
  if(t.dataset.a==='rren'){const n=window.prompt('Novo nome da emissora',x.n||'');if(n&&n.trim()){x.n=n.trim().slice(0,40)}}
  if(t.dataset.a==='rgru'){const g=window.prompt('Grupo da emissora (ex.: Notícias, Música). Deixe vazio para tirar do grupo.',x.g||'');if(g!==null){x.g=g.trim().slice(0,30)||undefined;if(!x.g)delete x.g}}
  if(t.dataset.a==='rtz'){const z=window.prompt('Fuso horário (ex.: America/Sao_Paulo, Europe/Lisbon). Deixe vazio para remover.',x.tz||'');if(z!==null){if(!z.trim()){delete x.tz}else{try{new Intl.DateTimeFormat('pt-BR',{timeZone:z.trim()});x.tz=z.trim()}catch(_){say('Fuso inválido');return}}}}
  rdSaveList();view();return}
 if(t.dataset.a==='rcor'){const i=+t.dataset.i,x=S.rd.list[i];if(!x)return;const inp=document.createElement('input');inp.type='color';inp.value=x.c||'#30d158';inp.addEventListener('change',()=>{x.c=inp.value;rdSaveList();view();say('Cor da emissora salva')});inp.click();return}
 if(t.dataset.a==='rdel'){const i=+t.dataset.i,x=S.rd.list[i];if(!x)return;if(!window.confirm('Remover "'+(x.n||'emissora')+'" da lista?'))return;
  const wasCur=i===S.rd.cur;S.rd.list.splice(i,1);
  const sc=(()=>{try{return JSON.parse(ls.get('rd_sched')||'null')}catch(_){return null}})();if(sc){if(sc.i===i)ls.del('rd_sched');else if(sc.i>i){sc.i--;ls.set('rd_sched',JSON.stringify(sc))}}
  if(S.rd.cur>i)S.rd.cur--;else if(wasCur)S.rd.cur=Math.min(S.rd.cur,Math.max(0,S.rd.list.length-1));
  if(wasCur&&S.rd.on)rdStop();rdSaveList();ls.set('rd_cur',S.rd.cur);view();say('Emissora removida');return}
 if(t.dataset.a==='rtile'){const c=S.rd.list[S.rd.cur];if(!c||!c.u){say('Esta emissora não tem link');return}if(S.rd.i===S.rd.cur&&S.rd.on)rdStop();else rdPlay(S.rd.cur);return}
 if(t.dataset.a==='estudo'){S.estudo=!S.estudo;ls.set('modo_estudo',S.estudo?'1':'0');const n=$('#notch');if(n)n.dataset.estudo=S.estudo?'1':'0';if(!S.estudo&&S.rd.on)rdStop();if(S.estudo&&!S.rd.on&&S.rd.list[S.rd.cur]&&S.rd.list[S.rd.cur].u)rdPlay(S.rd.cur);view();say(S.estudo?'Modo estudo: rádio de fundo':'Modo estudo desligado');return}
 if(t.dataset.a==='rvolclr'){const c=S.rd.list[S.rd.cur];if(c){delete c.v;ls.set('radios',JSON.stringify(S.rd.list));RA.volume=S.rd.vol;view();say('Usando volume geral')}return}});
let rdg='';
function radioListDom(){const v=$('#view');if(!v)return;v.querySelectorAll('#rlctl,#rload').forEach(n=>n.remove());
 if(S.rd.st==='load'&&S.rd.t0){const espera=Date.now()-S.rd.t0;if(espera<8000&&!S.rd.wt){S.rd.wt=setTimeout(()=>{S.rd.wt=0;if(S.tab==='radio')view()},8100-espera)}
  if(espera>=8000){const b=document.createElement('div');b.id='rload';b.setAttribute('role','status');b.className='note';b.innerHTML='A rádio está demorando para começar. <button type="button" class="chip" data-a="rretry" style="margin-left:6px">Tentar de novo</button>';v.prepend(b)}}const tEl=v.querySelector('#rtile span');const cz=S.rd.list[S.rd.cur];if(tEl&&cz&&cz.tz&&!tEl.dataset.hl){tEl.dataset.hl='1';tEl.textContent+=' · '+new Date().toLocaleTimeString('pt-BR',{timeZone:cz.tz,hour:'2-digit',minute:'2-digit'})+' local'}
 const det=v.querySelector('#rsvdet');if(!det)return;
 const grupos=[...new Set(S.rd.list.map(x=>x.g).filter(Boolean))];
 const ctl=document.createElement('div');ctl.id='rlctl';ctl.className='redact';ctl.setAttribute('role','group');ctl.setAttribute('aria-label','Organizar emissoras');ctl.style.margin='8px 0';
 ctl.innerHTML=(grupos.length?'<span class="sub" style="align-self:center">Grupo:</span><button type="button" class="chip" data-a="rgf" data-g="" aria-pressed="'+(!rdg)+'">Todos</button>'+grupos.map(g=>'<button type="button" class="chip" data-a="rgf" data-g="'+esc(g)+'" aria-pressed="'+(rdg===g)+'">'+esc(g)+'</button>').join(''):'')+
  '<span class="sub" style="align-self:center">Ordenar:</span><button type="button" class="chip" data-a="rsort" data-k="nome">Nome</button><button type="button" class="chip" data-a="rsort" data-k="tocada">Última tocada</button>';
 det.querySelector('summary').after(ctl);
 det.querySelectorAll('.svd').forEach(li=>{const b=li.querySelector('[data-i]');if(!b)return;const i=+b.dataset.i,x=S.rd.list[i];if(!x)return;
  li.hidden=!!rdg&&x.g!==rdg;if(x.c)li.style.borderLeft='4px solid '+x.c;if(x.img){const bt=li.querySelector('.svdbtn');if(bt&&!bt.querySelector('img.rlogo'))bt.insertAdjacentHTML('afterbegin','<img class="rlogo" src="'+esc(x.img)+'" alt="" width="28" height="28" style="border-radius:6px;object-fit:cover;margin-right:8px;flex:none">')}
  if(!li.querySelector('.rctl')){const box=document.createElement('span');box.className='rctl';box.style.display='flex';box.style.gap='4px';box.style.flexWrap='wrap';
   box.innerHTML='<button type="button" class="chip" data-a="rlogo" data-i="'+i+'" aria-label="Logotipo de '+esc(x.n)+'">Logo</button><button type="button" class="chip" data-a="rup" data-i="'+i+'" aria-label="Subir '+esc(x.n)+'"'+(i===0?' disabled':'')+'>↑</button><button type="button" class="chip" data-a="rdown" data-i="'+i+'" aria-label="Descer '+esc(x.n)+'"'+(i===S.rd.list.length-1?' disabled':'')+'>↓</button><button type="button" class="chip" data-a="rren" data-i="'+i+'" aria-label="Renomear '+esc(x.n)+'">Renomear</button><button type="button" class="chip" data-a="rgru" data-i="'+i+'" aria-label="Grupo de '+esc(x.n)+'">Grupo</button><button type="button" class="chip" data-a="rcor" data-i="'+i+'" aria-label="Cor de '+esc(x.n)+'">Cor</button><button type="button" class="chip" data-a="rtz" data-i="'+i+'" aria-label="Fuso horário de '+esc(x.n)+'">Fuso</button><button type="button" class="chip" data-a="rdel" data-i="'+i+'" aria-label="Remover '+esc(x.n)+'">Remover</button>';
   li.appendChild(box)}});
}
function rdSaveList(){ls.set('radios',JSON.stringify(S.rd.list))}
function rdMove(i,d){const j=i+d;if(j<0||j>=S.rd.list.length)return;const cur=S.rd.list[S.rd.cur];
 const sc=(()=>{try{return JSON.parse(ls.get('rd_sched')||'null')}catch(_){return null}})();const schedSt=sc&&S.rd.list[sc.i];
 const tmp=S.rd.list[i];S.rd.list[i]=S.rd.list[j];S.rd.list[j]=tmp;
 S.rd.cur=Math.max(0,S.rd.list.indexOf(cur));rdSaveList();ls.set('rd_cur',S.rd.cur);
 if(sc&&schedSt){sc.i=S.rd.list.indexOf(schedSt);if(sc.i>=0)ls.set('rd_sched',JSON.stringify(sc))}
 view();say('Emissora movida')}
function rdSortList(k){const cur=S.rd.list[S.rd.cur];const sc=(()=>{try{return JSON.parse(ls.get('rd_sched')||'null')}catch(_){return null}})();const schedSt=sc&&S.rd.list[sc.i];
 let hist=[];try{hist=JSON.parse(ls.get('rd_hist')||'[]')||[]}catch(_){}
 if(k==='nome')S.rd.list.sort((a,b)=>String(a.n).localeCompare(String(b.n),'pt-BR'));
 else S.rd.list.sort((a,b)=>{const ia=hist.indexOf(a.n),ib=hist.indexOf(b.n);return (ia<0?99:ia)-(ib<0?99:ib)});
 S.rd.cur=Math.max(0,S.rd.list.indexOf(cur));rdSaveList();ls.set('rd_cur',S.rd.cur);
 if(sc&&schedSt){sc.i=S.rd.list.indexOf(schedSt);if(sc.i>=0)ls.set('rd_sched',JSON.stringify(sc))}
 view();say('Lista ordenada: '+(k==='nome'?'por nome':'por última tocada'))}
function sleepRow(){return `<div class="rvol"><label for="rsleep" class="sub">Desligar em</label><select id="rsleep">${SLEEP_OPTS.map(m=>`<option value="${m}"${(S.rd.sleepM||0)===m?' selected':''}>${m?m+' min':'Desativado'}</option>`).join('')}<option value="-1"${(S.rd.sleepM||0)&&!SLEEP_OPTS.includes(S.rd.sleepM)?' selected':''}>Personalizado</option></select><input type="number" id="rscm" min="1" max="1440" inputmode="numeric" aria-label="Minutos personalizados" placeholder="min" value="${(S.rd.sleepM&&!SLEEP_OPTS.includes(S.rd.sleepM))?S.rd.sleepM:''}" style="width:76px"${(S.rd.sleepM&&!SLEEP_OPTS.includes(S.rd.sleepM))?'':' hidden'}><span class="sub" id="rslp">${sleepTxt()}</span></div>`}
function rdSleepTick(){const R=S.rd;if(!R||!R.sleepAt)return;
 if(Date.now()>=R.sleepAt){R.sleepAt=0;R.sleepM=0;const was=rdPlaying();if(was)rdStop();else if(S.tab==='radio'&&!R.edit)rdRender();say(was?'Temporizador encerrado: a rádio parou':'Temporizador da rádio encerrado');return}
 const e=$('#rslp');if(e)e.textContent=sleepTxt()}
$('#view').addEventListener('change',e=>{const t=e.target;
 if(t.id==='rsleep'){const m=+t.value;if(m===-1){const c=$('#rscm');if(c){c.hidden=false;c.focus()}return}const c0=$('#rscm');if(c0)c0.hidden=true;S.rd.sleepM=m;S.rd.sleepAt=m?Date.now()+m*60000:0;const x=$('#rslp');if(x)x.textContent=sleepTxt();say(m?'A rádio vai parar em '+m+' minutos':'Temporizador desativado')}
 if(t.id==='impf'){bkImport(t.files[0]);t.value=''}});

/* Backup: exportar e importar (sem tokens de login) */
const BK_KEYS=['semana_prios','projetos','habitos','humor','estudo_sessoes','estudo_run','livros','links','notas_list','notas_cur','notas_at','tv_list','tasks','radios','radios_v4','rd_cur','rd_vol','rd_favs','rd_hist','rd_sched','tv_sched','theme','tema','opt_snd','opt_ntf','opt_mono','pomo_f','pomo_r','pomo_l','pomo_goal','pomo_hist','notas','wx_loc','wx_extra','wx_alert'];
function bkExport(){ls.set('bk_last',String(Date.now()));const data={};BK_KEYS.forEach(k=>{const v=ls.get(k);if(v!==null)data[k]=v});
 const nome='painel-notch-backup-'+new Date().toISOString().slice(0,10)+'.json',a=document.createElement('a');
 a.href=URL.createObjectURL(new Blob([JSON.stringify({app:'notch-panel',v:1,em:new Date().toISOString(),data},null,1)],{type:'application/json'}));a.download=nome;document.body.appendChild(a);a.click();
 setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);say('Backup gerado: '+nome)}
function bkClean(raw,keepMid){const d={},num=(v,a,b)=>Math.min(b,Math.max(a,Math.round(+v)||0));
 const J=k=>{try{return JSON.parse(raw[k])}catch(_){return null}};
 const T=J('tasks');if(Array.isArray(T))d.tasks=JSON.stringify(T.slice(0,500).map((x,i)=>({id:String((x&&x.id)??('i'+i)).replace(/[^\w-]/g,'').slice(0,20)||('i'+i),t:esc(unesc(String((x&&x.t)||'')).slice(0,300)),w:esc(String((x&&x.w)||'').slice(0,20)),c:num(x&&x.c,0,9999),cr:Number(x&&x.cr)>0?Number(x.cr):undefined,d:!!(x&&x.d),due:/^\d{4}-\d\d-\d\d$/.test(String((x&&x.due)||''))?String(x.due):undefined,r:(x&&(x.r==='d'||x.r==='w'))?x.r:undefined,ev:(x&&/^[\w=+/-]{8,500}$/.test(String(x.ev)))?String(x.ev):undefined,dt:(x&&/^([01]\d|2[0-3]):[0-5]\d$/.test(String(x.dt)))?String(x.dt):undefined,mid:keepMid&&/^[\w=-]{8,200}$/.test(String((x&&x.mid)||''))?String(x.mid):undefined,tl:keepMid&&/^[\w=-]{8,200}$/.test(String((x&&x.tl)||''))?String(x.tl):undefined})).filter(x=>x.t));
 const Rd=J('radios');if(Array.isArray(Rd)){d.radios=JSON.stringify(Rd.slice(0,200).map(x=>({n:String((x&&x.n)||'').slice(0,40),u:/^https?:\/\/\S+$/i.test(String((x&&x.u)||''))?String(x.u):'',g:String((x&&x.g)||'').slice(0,30),v:(typeof (x&&x.v)==='number'&&x.v>=0&&x.v<=1)?x.v:undefined,c:/^#[0-9a-f]{6}$/i.test(String((x&&x.c)||''))?String(x.c):undefined,tz:String((x&&x.tz)||'').slice(0,40)||undefined,img:/^https:\/\/\S+$/i.test(String((x&&x.img)||''))?String(x.img):undefined})));d.radios_v4='1'}
 if(raw.rd_cur!==undefined)d.rd_cur=String(num(raw.rd_cur,0,199));
 const Fv=J('rd_favs');if(Array.isArray(Fv))d.rd_favs=JSON.stringify(Fv.filter(x=>typeof x==='string'&&/^https?:\/\/\S+$/i.test(x)).slice(0,200));
  const Tv=J('tv_list');if(Array.isArray(Tv))d.tv_list=JSON.stringify(Tv.slice(0,100).map(x=>({n:String((x&&x.n)||'').slice(0,40),u:String((x&&x.u)||'').slice(0,300)})).filter(x=>x.n&&(!x.u||/^https:\/\/\S+$/i.test(x.u))));
 const GEN=['semana_prios','projetos','habitos','humor','estudo_sessoes','estudo_run','links','notas_list','notas_cur','notas_at','rd_hist','rd_sched','tv_sched','tema','opt_mono','pomo_goal','pomo_hist','notas','wx_loc','wx_extra','wx_alert'];GEN.forEach(k=>{if(typeof raw[k]==='string'&&raw[k].length<=((k==='notas_list'||k==='livros')?4000000:20000))d[k]=raw[k]});
 if(raw.rd_vol!==undefined)d.rd_vol=String(Math.min(1,Math.max(0,+raw.rd_vol||0)));
 if(['auto','light','dark'].includes(raw.theme))d.theme=raw.theme;
 ['opt_snd','opt_ntf'].forEach(k=>{if(raw[k]==='0'||raw[k]==='1')d[k]=raw[k]});
 ['pomo_f','pomo_r','pomo_l'].forEach(k=>{if(raw[k]!==undefined)d[k]=String(num(raw[k],5,10800))});
 return d}
function bkImport(file){const er=$('#bkerr');er.textContent='';if(!file)return;
 if(file.size>2e6){er.textContent='Arquivo grande demais para ser um backup deste painel.';return}
 file.text().then(tx=>{let j;try{j=JSON.parse(tx)}catch(_){er.textContent='Este arquivo não é um JSON válido.';return}
  if(!j||j.app!=='notch-panel'||!j.data||typeof j.data!=='object'){er.textContent='Este arquivo não parece um backup do painel.';return}
  const d=bkClean(j.data);if(!Object.keys(d).length){er.textContent='O backup não tem dados que o painel reconheça.';return}
  if(!confirm('Importar o arquivo? Tarefas e histórico são unidos, e em notas e temas vale o mais recente. Nada é apagado.'))return;
  const M=mergeData(d);BK_KEYS.forEach(k=>{if(k in M)ls.set(k,M[k]);else if(k in d)ls.set(k,d[k])});try{sessionStorage.setItem('bk_ok','1')}catch(_){}location.reload()},()=>{er.textContent='Não consegui ler o arquivo.'})}
try{if(sessionStorage.getItem('bk_ok')){sessionStorage.removeItem('bk_ok');setTimeout(()=>say('Dados importados'),400)}}catch(_){}

/* Agenda: escolher o dia, dias úteis e próximos dias */
S.cm='day';S.cb=ls.get('cal_biz')!=='0';
const dayKey=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const dayOf=k=>{const [y,m,d]=k.split('-').map(Number);return new Date(y,m-1,d)};
const todayD=()=>{const d=new Date();d.setHours(0,0,0,0);return d};
const cd=()=>S.cd||todayD();
const isToday=d=>dayKey(d)===dayKey(new Date());
const isWe=d=>d.getDay()===0||d.getDay()===6;
const dayLabel=d=>d.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'});
function stepDay(d,dir,biz){const x=new Date(d);do{x.setDate(x.getDate()+dir)}while(biz&&isWe(x));return x}
function nextDays(){let x=new Date(cd());if(S.cb&&isWe(x))x=stepDay(x,1,true);const o=[x];while(o.length<5)o.push(stepDay(o[o.length-1],1,S.cb));return o}
const calKey=()=>S.cm+':'+dayKey(cd())+':'+(S.cb?1:0);
function keepFocus(fn){const a=document.activeElement,ok=a&&a.closest&&a.closest('#view'),sel=ok?(a.id?'#'+a.id:a.dataset&&a.dataset.a?'[data-a="'+a.dataset.a+'"]'+(a.dataset.m?'[data-m="'+a.dataset.m+'"]':'')+(a.dataset.i!==undefined?'[data-i="'+a.dataset.i+'"]':''):''):'',ss=ok&&a.selectionStart!==undefined?[a.selectionStart,a.selectionEnd]:null;fn();if(sel){const n=$('#view '+sel);if(n){n.focus();if(ss&&n.setSelectionRange)try{n.setSelectionRange(ss[0],ss[1])}catch(_){}}}}
const DEMO_EV=[['#3ecf8e','Aniversário da Marta','','dia todo',0],['#5b8cff','Daily','','9:30',0],['#5b8cff','Revisão de design: painel do notch','Meet','18:37',0],['#5b8cff','Onboarding com a Ana','Zoom','faltam 50 min',45],['#5b8cff','Um a um','','em 2h 8min',0],['#3ecf8e','Buscar as chaves','','em 4h 8min',0]];
const rowsHtml=(rows,vazio)=>rows.length?rows.map(e=>`<div class="row">${e[4]?`<i class="bar" style="width:${e[4]}%"></i>`:''}<i class="dot" style="background:${e[0]}"></i><span class="grow">${e[1]}</span>${e[2]?chipEl(e):''}<span class="tag">${e[3]}</span></div>`).join(''):`<p class="sub">${vazio}</p>`;
function calView(){const c=cd(),conn=msOn(),days=S.cm==='next'?nextDays():[c],nx=S.cm==='next';
 const groups=conn?(S.evk===calKey()&&S.evg?S.evg:null):days.map(d=>({k:dayKey(d),d,rows:isToday(d)?DEMO_EV:[]}));
 const nav=`<h2 id="chead">${esc(nx?'Próximos dias':dayLabel(c))}${!nx&&isToday(c)?' (hoje)':''}</h2>
 <div class="calnav" role="group" aria-label="Escolher o dia">
 <button class="ib" data-a="cprev" aria-label="${S.cb?'Dia útil anterior':'Dia anterior'}">${ic('chl')}</button>
 <button class="chip" data-a="ctoday">Hoje</button>
 <button class="ib" data-a="cnext" aria-label="${S.cb?'Próximo dia útil':'Próximo dia'}">${ic('chr')}</button>
 <input type="date" id="cdate" value="${dayKey(c)}" aria-label="Escolher uma data no calendário">
 </div>
 <div class="calnav"><span role="group" aria-label="Modo de exibição" style="display:inline-flex;gap:6px"><button class="chip" data-a="cmode" data-m="day" aria-pressed="${!nx}">Um dia</button><button class="chip" data-a="cmode" data-m="next" aria-pressed="${nx}">Próximos dias</button></span>
 <label class="cbz"><input type="checkbox" id="cbiz"${S.cb?' checked':''}> Só dias úteis</label></div>`;
 let body;
 if(!groups)body=S.msErr&&!S.msLoad?'<p class="sub">Não foi possível carregar a agenda agora. Use Atualizar agora, abaixo.</p>':'<p class="sub">Carregando a agenda…</p>';
 else if(!nx)body=rowsHtml(groups[0].rows,conn?'Nenhum evento neste dia.':'Sem eventos de demonstração neste dia.');
 else body=groups.map(g=>`<h3 class="dh">${esc(dayLabel(g.d))}${isToday(g.d)?' (hoje)':''}</h3>`+rowsHtml(g.rows,conn?'Sem eventos.':'Sem eventos de demonstração.')).join('');
 return nav+body+cBox()}
function calGo(){S.evg=null;S.evk='';S.msErr=false;if(msOn())S.msLoad=true;keepFocus(view);
 const nd=S.cm==='next'?nextDays():null;
 say(nd?'Próximos dias, a partir de '+dayLabel(nd[0]):'Agenda de '+dayLabel(cd()));
 if(msOn())msSync()}
$('#view').addEventListener('change',e=>{const t=e.target;
 if(t.id==='cdate'&&t.value){S.cd=dayOf(t.value);calGo()}
 if(t.id==='cbiz'){S.cb=t.checked;ls.set('cal_biz',t.checked?'1':'0');calGo()}});

/* Status no notch fechado e aviso de reunião */
S.al=null;S.alSeen=new Set();
const cut=(t,n)=>t.length>n?t.slice(0,n-1)+'…':t;
function evDays(e){const o=[];
 if(e.isAllDay){const a=dayOf(e.start.dateTime.slice(0,10)),z=dayOf(e.end.dateTime.slice(0,10));for(let d=new Date(a),i=0;d<z&&i<31;d.setDate(d.getDate()+1),i++)o.push(dayKey(d));return o.length?o:[dayKey(a)]}
 const s=new Date(e.start.dateTime.split('.')[0]+'Z'),f=new Date(e.end.dateTime.split('.')[0]+'Z'),a=new Date(s),z=new Date(f.getTime()-1);a.setHours(0,0,0,0);z.setHours(0,0,0,0);
 for(let d=new Date(a),i=0;d<=z&&i<31;d.setDate(d.getDate()+1),i++)o.push(dayKey(d));return o.length?o:[dayKey(s)]}
function pillEv(js){return js.filter(e=>!e.isCancelled&&!e.isAllDay).map(e=>{const s=new Date(e.start.dateTime.split('.')[0]+'Z').getTime(),f=new Date(e.end.dateTime.split('.')[0]+'Z').getTime();let u=(e.onlineMeeting&&e.onlineMeeting.joinUrl)||'';if(!/^https:/.test(u))u='';
 return {t:e.subject||'(sem título)',s,f,url:u,key:(e.subject||'')+'|'+s}}).filter(e=>dayKey(new Date(e.s))===dayKey(new Date()))}
async function msToday(){const a=todayD(),b=new Date(a);b.setDate(b.getDate()+1);
 try{const r=await fetch('https://graph.microsoft.com/v1.0/me/calendarView?'+new URLSearchParams({startDateTime:a.toISOString(),endDateTime:b.toISOString(),'$orderby':'start/dateTime','$top':'25','$select':'subject,start,end,isAllDay,isCancelled,onlineMeeting,onlineMeetingProvider'}),{headers:{Authorization:'Bearer '+S.ms,Prefer:'outlook.timezone="UTC"'}});
  if(r.ok)S.td=pillEv((await r.json()).value)}catch(_){}}
function pillInfo(){const p=S.p;
 if(p.run)return {t:fmt(p.left)+' '+pnome(p.mode),l:pnome(p.mode)+', '+Math.max(1,Math.ceil(p.left/60))+' min restantes'};
 if(S.td){const n=Date.now(),ev=S.td.find(e=>e.f>n&&e.s-n<=15*60000);
  if(ev){const m=Math.ceil((ev.s-n)/60000);return m>0?{t:cut(ev.t,18)+' em '+m+' min',l:ev.t+', em '+m+' minutos'}:{t:cut(ev.t,18)+' agora',l:ev.t+', em andamento'}}}
 if(S.tok&&S.m.uri&&S.m.play)return {t:cut(S.m.list[0].t+' · '+S.m.list[0].a,30),l:'Tocando '+S.m.list[0].t};
 if(S.rd&&S.rd.on)return {t:cut(rdName(S.rd.i),30),l:'Rádio '+rdName(S.rd.i)};
 return null}
function pillPaint(){if(!window.__pronto)return;const nt=$('#notch'),pb=$('#pill');if(!nt||!pb)return;
 const i=ls.get('opt_pill')!=='0'&&!S.open?pillInfo():null,e=$('#pst'),t=i?i.t:'';
 if(e&&e.textContent!==t)e.textContent=t;nt.classList.toggle('has-st',!!i||!!S.al);
 const lab=(S.open?'Fechar painel de utilidades':'Abrir painel de utilidades')+(i?'. '+i.l:'');
 if(pb.getAttribute('aria-label')!==lab)pb.setAttribute('aria-label',lab)}
function alertMsg(ev){const m=Math.ceil((ev.s-Date.now())/60000);return m>0?ev.t+' começa em '+m+' min':ev.t+' já começou'}
function alertShow(ev){S.al={ev};S.alSeen.add(ev.key);const b=$('#alertbar');b.hidden=false;$('#alert-t').textContent=alertMsg(ev);
 const j=$('#alert-join');if(ev.url){j.hidden=false;j.href=ev.url;j.setAttribute('aria-label','Entrar em '+ev.t+' (abre em nova aba)')}else{j.hidden=true;j.removeAttribute('href')}
 $('#alert-x').setAttribute('aria-label','Dispensar aviso: '+ev.t);pillPaint();
 const msg=alertMsg(ev);say(msg);
 if(ls.get('opt_ntf')==='1'&&window.Notification&&Notification.permission==='granted'&&document.hidden){try{new Notification('Reunião',{body:msg})}catch(_){}}}
function alertHide(){const b=$('#alertbar');if(!b)return;const f=b.contains(document.activeElement);S.al=null;b.hidden=true;if(f)$('#pill').focus();pillPaint()}
function alertTick(){if(!window.__pronto||!$('#alertbar'))return;const lead=ls.get('al_min')===null?5:+ls.get('al_min'),n=Date.now();
 if(S.al){const ev=S.al.ev;if(!lead||n>ev.s+5*60000)alertHide();else{const t=alertMsg(ev),e=$('#alert-t');if(e.textContent!==t)e.textContent=t}return}
 if(!lead||!S.td)return;
 const ev=S.td.find(e=>!S.alSeen.has(e.key)&&e.s-n<=lead*60000&&n<e.s+5*60000&&n<e.f);if(ev)alertShow(ev)}
$('#alert-x').addEventListener('click',()=>alertHide());
$('#alert-join').addEventListener('click',()=>setTimeout(()=>alertHide(),150));
$('#view').addEventListener('change',e=>{const t=e.target;
 if(t.id==='opill'){ls.set('opt_pill',t.checked?'1':'0');pillPaint()}
 if(t.id==='oalert'){ls.set('al_min',t.value);if(t.value==='0')alertHide()}});


/* Rádio: importar playlists .m3u e .pls */
function parsePlaylist(tx){tx=String(tx).replace(/^\uFEFF/,'');
 if(/#EXT-X-(STREAM-INF|TARGETDURATION|MEDIA-SEQUENCE|VERSION)/.test(tx))return {hls:true,items:[]};
 const items=[],seen=new Set(),add=(u,n)=>{u=String(u||'').trim();if(!/^https?:\/\/\S+$/i.test(u)||seen.has(u))return;seen.add(u);let nome=String(n||'').replace(/[\u0000-\u001f]/g,'').trim();if(!nome){try{nome=new URL(u).hostname}catch(_){nome='Emissora'}}items.push({u,n:nome.slice(0,40)})};
 const L=tx.split(/\r?\n/);
 if(/^\s*\[playlist\]/im.test(tx)){const f={},t={};L.forEach(l=>{const m=/^\s*(File|Title)(\d+)\s*=\s*(.*)$/i.exec(l);if(m)(m[1].toLowerCase()==='file'?f:t)[m[2]]=m[3]});Object.keys(f).sort((a,b)=>a-b).forEach(k=>add(f[k],t[k]))}
 else{let nome='';L.forEach(l=>{l=l.trim();if(!l)return;if(l[0]==='#'){const m=/^#EXTINF:(?:[^",]|"[^"]*")*,(.*)$/i.exec(l);if(m)nome=m[1];return}add(l,nome);nome=''})}
 return {hls:false,items:items.slice(0,200)}}
$('#view').addEventListener('change',e=>{const t=e.target;if(t.id!=='rimpf')return;const f=t.files[0];t.value='';if(!f)return;
 const msg=x=>{const m=$('#rimsg');if(m)m.textContent=x};
 if(f.size>2e6){msg('Arquivo grande demais para ser uma playlist.');return}
 f.text().then(tx=>{const r=parsePlaylist(tx);
  if(r.hls){msg('Este arquivo é uma lista HLS (.m3u8). Cole o endereço dela no campo do link de uma emissora.');return}
  if(!r.items.length){msg('Não encontrei links http ou https nesse arquivo.');return}
  rdCollect();const have=new Set(S.rd.draft.map(x=>x.u));let add=0;
  for(const it of r.items){if(S.rd.draft.length>=200)break;if(have.has(it.u))continue;have.add(it.u);S.rd.draft.push({n:it.n,u:it.u,g:'Importadas'});add++}
  view();msg(add+' emissoras importadas. Revise a lista e toque em Salvar.');say(add+' emissoras importadas. Revise e salve.');
  const n=$('#rn'+(S.rd.draft.length-add));if(add&&n)n.focus()},()=>msg('Não consegui ler o arquivo.'))});

window.__pronto=true;pillPaint();
/* ===== Tarefas com vencimento e sincronização com o Microsoft To Do ===== */
S.todo={at:0,err:'',busy:false,dirty:false};
function dueInfo(t){if(!t.due)return null;const d=dayOf(t.due),diff=Math.round((d-todayD())/864e5),dm=d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'});
 if(t.d)return {txt:'venc. '+dm,late:false};
 if(diff<0)return {txt:'atrasada há '+(-diff)+(diff===-1?' dia':' dias'),late:true};
 return {txt:diff===0?'vence hoje':diff===1?'vence amanhã':'vence '+dm,late:false}}
const taskWhen=t=>{if(!t.cr)return t.w||'';const d=new Date(t.cr);return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'2-digit'})+' '+d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}
const dueTag=t=>{const i=dueInfo(t);return i?`<span class="due${i.late?' late':''}">${i.txt}</span> · `:''};
const todoOn=()=>ls.get('todo_sync')==='1'&&!!MS_CLIENT_ID;
function todoBar(){if(!todoOn())return '';const e=S.todo.err;
 const msg=!msOn()?'To Do: conecte ao Outlook na aba Agenda.':e==='scope'?'To Do: falta autorizar o acesso às tarefas.':e==='lista'?'To Do: a lista não foi encontrada.':e?'To Do: não consegui sincronizar agora.':S.todo.busy?'To Do: sincronizando…':S.todo.at?'To Do: sincronizado às '+hm(S.todo.at)+'.':'To Do: aguardando a primeira sincronização.';
 return `<div class="sp-box" style="margin:0 0 8px;padding-top:0;border:0"><span class="sub" id="tdst">${msg}</span><span class="redact" style="margin:0">${e==='scope'?'<button class="chip" data-a="tauth">Autorizar tarefas</button>':''}<button class="chip" data-a="tsync">Sincronizar agora</button></span></div>`}
async function gj(path,o={}){if(!S.ms)return {ok:false,status:401,j:null};
 const r=await fetch('https://graph.microsoft.com/v1.0'+path,{...o,headers:{Authorization:'Bearer '+S.ms,...(o.body?{'Content-Type':'application/json'}:{}),...(o.headers||{})}});
 let j=null;try{const tx=await r.text();j=tx?JSON.parse(tx):null}catch(_){}return {ok:r.ok,status:r.status,j}}
async function msEnsure(){if(!msOn())return false;if(!S.ms||Date.now()>S.msExp){try{await msToken({grant_type:'refresh_token',refresh_token:ls.get('ms_rt')||''})}catch(_){return false}}return !!S.ms}
function todoQueueDel(t){if(!t||!t.mid||!todoOn())return;let q=[];try{q=JSON.parse(ls.get('todo_del')||'[]')}catch(_){}q.push({id:t.mid,l:t.tl||''});ls.set('todo_del',JSON.stringify(q.slice(-200)))}
function todoUnqueue(t){if(!t||!t.mid)return;let q=[];try{q=JSON.parse(ls.get('todo_del')||'[]')}catch(_){}ls.set('todo_del',JSON.stringify(q.filter(x=>x.id!==t.mid)))}
function todoSoon(){if(!todoOn()||!S.todo)return;S.todo.dirty=true;clearTimeout(S.tdT);S.tdT=setTimeout(()=>todoSync(),4000)}
const toDo=t=>({title:unesc(t.t),status:t.d?'completed':'notStarted',dueDateTime:t.due?{dateTime:t.due+'T00:00:00.0000000',timeZone:'UTC'}:null});
async function todoSync(manual){
 const Z=S.todo;
 if(Z.busy||!msOn())return;
 if(!manual&&!Z.dirty&&Date.now()-Z.at<270000)return;
 Z.busy=true;Z.err='';Z.dirty=false;
 try{
  if(!await msEnsure())throw {k:'auth'};
  const bad=r=>r.status===401||r.status===403?'scope':r.status===404?'lista':'api';
  let lid=ls.get('todo_list');
  if(!lid){const r=await gj('/me/todo/lists');if(!r.ok)throw {k:bad(r)};const L=(r.j&&r.j.value)||[],d=L.find(x=>x.wellknownListName==='defaultList')||L[0];if(!d)throw {k:'lista'};lid=d.id;ls.set('todo_list',lid)}
  const base='/me/todo/lists/'+encodeURIComponent(lid)+'/tasks';let url=base+'?$top=100',rem=[];
  for(let n=0;url&&n<10;n++){const r=await gj(url);if(!r.ok){if(r.status===404)ls.del('todo_list');throw {k:bad(r)}}rem=rem.concat((r.j&&r.j.value)||[]);const nx=r.j&&r.j['@odata.nextLink'];url=nx?nx.replace('https://graph.microsoft.com/v1.0',''):''}
  // 1. exclusões feitas aqui
  let q=[];try{q=JSON.parse(ls.get('todo_del')||'[]')}catch(_){}
  const gone=new Set();for(const x of q){if(x.l&&x.l!==lid)continue;const r=await gj(base+'/'+encodeURIComponent(x.id),{method:'DELETE'});if(r.ok||r.status===404)gone.add(x.id)}
  ls.set('todo_del',JSON.stringify(q.filter(x=>!gone.has(x.id))));
  // 2. mescla
  const by=new Map(S.tasks.filter(t=>t.mid&&t.tl===lid).map(t=>[t.mid,t])),seen=new Set(rem.map(r=>r.id));
  for(const r of rem){if(gone.has(r.id))continue;const t=by.get(r.id),rdone=r.status==='completed',rdue=r.dueDateTime&&r.dueDateTime.dateTime?r.dueDateTime.dateTime.slice(0,10):undefined,rmod=Date.parse(r.lastModifiedDateTime)||0;
   if(!t){if(!rdone)S.tasks.push({id:'m'+r.id.slice(-10)+S.tasks.length,t:esc(r.title||'(sem título)'),w:hm(Date.now()),d:false,c:0,due:rdue,mid:r.id,tl:lid,mod:rmod,rv:rmod});continue}
   const mudouLa=rmod!==(t.rv||0);
   if(t.dy&&(!mudouLa||(t.mod||0)>rmod)){const p=await gj(base+'/'+encodeURIComponent(r.id),{method:'PATCH',body:JSON.stringify(toDo(t))});if(p.ok&&p.j){t.rv=Date.parse(p.j.lastModifiedDateTime)||Date.now();t.dy=false}}
   else if(mudouLa){t.t=esc(r.title||'(sem título)');t.d=rdone;t.due=rdue;t.mod=rmod;t.rv=rmod;t.dy=false}}
  // 3. apagadas no To Do somem aqui; vínculos de outra lista viram tarefas locais
  S.tasks=S.tasks.filter(t=>!(t.mid&&t.tl===lid&&!seen.has(t.mid)&&!gone.has(t.mid)));
  S.tasks.forEach(t=>{if(t.mid&&t.tl!==lid){delete t.mid;delete t.tl}});
  // 4. novas daqui vão para o To Do
  for(const t of S.tasks.filter(t=>!t.mid)){const r=await gj(base,{method:'POST',body:JSON.stringify(toDo(t))});if(r.ok&&r.j){t.mid=r.j.id;t.tl=lid;t.rv=Date.parse(r.j.lastModifiedDateTime)||Date.now();t.mod=t.rv;t.dy=false}else if(r.status===401||r.status===403)throw {k:'scope'}}
  ls.set('tasks',JSON.stringify(S.tasks));Z.at=Date.now();
  if(manual)say('Tarefas sincronizadas com o Microsoft To Do às '+hm(Z.at));
 }catch(e){Z.err=(e&&e.k)||'api';if(manual)say(Z.err==='scope'?'Falta autorizar o acesso às tarefas':'Não consegui sincronizar com o Microsoft To Do')}
 Z.busy=false;if(S.tab==='tasks'&&S.open&&!S.edit)keepFocus(view);else if(S.tab==='set'&&S.open)repaintSet()}

/* ===== Backup automático no OneDrive ===== */
S.drv={at:0,err:'',busy:false,checked:false,hold:false,offer:null};
const drvOn=()=>ls.get('drv_sync')==='1'&&!!MS_CLIENT_ID;
const drvPath=()=>(ls.get('ms_drv')==='full'?'/me/drive/root:/Apps/PainelNotch/painel-notch-backup.json':'/me/drive/special/approot:/painel-notch-backup.json');
const hash=t=>{let h=5381;for(let i=0;i<t.length;i++)h=((h<<5)+h+t.charCodeAt(i))|0;return String(h>>>0)};
function bkSnapshot(){const data={};BK_KEYS.forEach(k=>{const v=ls.get(k);if(v!==null)data[k]=v});return JSON.stringify({app:'notch-panel',v:1,data})}
function repaintSet(){if(S.tab==='set'&&S.open)keepFocus(view)}
const drvErrTxt=()=>S.drv.err==='scope'?'O OneDrive recusou o acesso. Desative e ative de novo para autorizar. Em contas de trabalho, a pasta do aplicativo pode não ser aceita: tente "Pasta Apps/PainelNotch".':S.drv.err?'Não consegui falar com o OneDrive agora.':'';
async function drvUpload(manual){const D=S.drv;if(D.busy||!msOn())return;D.busy=true;D.err='';
 try{if(!await msEnsure())throw {k:'auth'};const snap=bkSnapshot(),r=await gj(drvPath()+':/content',{method:'PUT',body:snap,headers:{'Content-Type':'application/json'}});
  if(!r.ok)throw {k:r.status===401||r.status===403?'scope':'api'};
  D.at=Date.now();ls.set('drv_hash',hash(snap));ls.set('drv_at',String(Date.parse(r.j&&r.j.lastModifiedDateTime)||Date.now()));
  if(manual)say('Backup salvo no OneDrive às '+hm(D.at))}
 catch(e){D.err=(e&&e.k)||'api';if(manual)say(drvErrTxt()||'Não consegui salvar o backup')}
 D.busy=false;repaintSet()}
async function drvStart(){const D=S.drv;if(!drvOn()||!msOn()||D.checked)return;D.checked=true;
 try{if(!await msEnsure())throw {k:'auth'};const r=await gj(drvPath());
  if(r.status===404){D.hold=false}
  else if(!r.ok)throw {k:r.status===401||r.status===403?'scope':'api'};
  else{const rt=Date.parse(r.j.lastModifiedDateTime)||0,mine=+(ls.get('drv_at')||0);
   if(rt>mine+2000){D.offer={at:rt,url:r.j['@microsoft.graph.downloadUrl']||''};D.hold=true;say('Há um backup mais novo no OneDrive. Veja em Ajustes.')}}}
 catch(e){D.err=(e&&e.k)||'api'}
 repaintSet()}
function drvTick(){const D=S.drv;if(!drvOn()||!msOn()||D.hold||D.busy||D.err==='scope')return;if(!D.checked){drvStart();return}
 if(hash(bkSnapshot())!==ls.get('drv_hash')&&Date.now()-D.at>60000)drvUpload()}
function mergeData(d){const out={};
 try{const L=JSON.parse(ls.get('tasks')||'[]'),R=d.tasks?JSON.parse(d.tasks):[];if(Array.isArray(L)&&Array.isArray(R)){const m=new Map();[...L,...R].forEach(t=>{const k=String(t.id);const o=m.get(k);if(!o||(t.mod||0)>(o.mod||0))m.set(k,t)});out.tasks=JSON.stringify([...m.values()].slice(0,500))}}catch(_){}
 try{const L=JSON.parse(ls.get('pomo_hist')||'{}')||{},R=d.pomo_hist?JSON.parse(d.pomo_hist)||{}:{};const o={};new Set([...Object.keys(L),...Object.keys(R)]).forEach(k=>{o[k]=Math.max(L[k]||0,R[k]||0)});out.pomo_hist=JSON.stringify(o)}catch(_){}
 try{const L=JSON.parse(ls.get('rd_favs')||'[]')||[],R=d.rd_favs?JSON.parse(d.rd_favs)||[]:[];if(Array.isArray(L)&&Array.isArray(R))out.rd_favs=JSON.stringify([...new Set([...L,...R])])}catch(_){}
 try{const L=JSON.parse(ls.get('notas_list')||'[]')||[],R=d.notas_list?JSON.parse(d.notas_list)||[]:[];if(Array.isArray(L)&&Array.isArray(R)){const m=new Map();[...L,...R].forEach(n=>{const o=m.get(n.id);if(!o||(n.at||0)>(o.at||0))m.set(n.id,n)});out.notas_list=JSON.stringify([...m.values()].slice(0,200))}}catch(_){}
 const la=+(ls.get('notas_at')||0),ra=+(d.notas_at||0);if(d.notas!==undefined&&ra>la){out.notas=d.notas;out.notas_at=String(ra)}
 return out}
async function drvRestore(fromOffer){
 if(!confirm('Combinar com o backup do OneDrive? Tarefas e histórico são unidos, e em notas e temas vale o mais recente. Nada é apagado.'))return;
 try{if(!await msEnsure())throw 0;let url=fromOffer&&S.drv.offer?S.drv.offer.url:'',at=fromOffer&&S.drv.offer?S.drv.offer.at:0;
  if(!url){const m=await gj(drvPath());if(!m.ok)throw 0;url=m.j['@microsoft.graph.downloadUrl'];at=Date.parse(m.j.lastModifiedDateTime)||Date.now()}
  const tx=await (await fetch(url)).text(),j=JSON.parse(tx);if(!j||j.app!=='notch-panel'||!j.data)throw 1;
  const d=bkClean(j.data,true);if(!Object.keys(d).length)throw 2;
  const M=mergeData(d);BK_KEYS.forEach(k=>{if(k in M)ls.set(k,M[k]);else if(k in d)ls.set(k,d[k])});ls.set('drv_at',String(at));ls.del('drv_hash');try{sessionStorage.setItem('bk_ok','1')}catch(_){}location.reload()}
 catch(_){say('Não consegui restaurar o backup do OneDrive')}}
setInterval(()=>{if(msOn()){todoSync();drvTick()}},30000);

/* Ajustes: Microsoft To Do e OneDrive */
function todoNote(){const e=S.todo.err;return !ls.get('ms_todo')?'Ao ativar, a Microsoft pede a permissão de Tarefas. Você será levado à tela de login.':e==='scope'?'Falta autorizar o acesso às tarefas. Desative e ative de novo.':e?'Não consegui sincronizar agora.':S.todo.at?'Última sincronização às '+hm(S.todo.at)+'.':ls.get('todo_sync')==='1'?'Aguardando a primeira sincronização.':''}
function drvNote(){const D=S.drv,o=D.offer;
 if(o)return `Há um backup mais novo no OneDrive (${new Date(o.at).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'})}). <span class="redact" style="margin:6px 0 0"><button type="button" class="chip" data-a="drvyes">Combinar com este backup</button><button type="button" class="chip" data-a="drvno">Manter os dados daqui</button></span>`;
 if(D.err)return esc(drvErrTxt());
 if(!ls.get('ms_drv'))return 'Ao ativar, a Microsoft pede a permissão de arquivos do OneDrive. Você será levado à tela de login.';
 const at=+(ls.get('drv_at')||0);return drvOn()?(at?'Último backup às '+hm(at)+'. O painel salva sozinho quando algo muda.':'Nenhum backup salvo ainda.'):''}
function msFieldset(){
 if(!MS_CLIENT_ID)return '<fieldset class="fs"><legend>Microsoft: To Do e OneDrive</legend><p class="sub" style="margin:0">Disponível depois de preencher MS_CLIENT_ID no código (veja o LEIA-ME).</p></fieldset>';
 const L=(id,c,t)=>`<label class="opt row"><input type="checkbox" id="${id}"${c?' checked':''}>${t}</label>`,m=ls.get('ms_drv_pref')||ls.get('ms_drv')||'app';
 return `<fieldset class="fs"><legend>Microsoft: To Do e OneDrive</legend>
 ${L('otodo',ls.get('todo_sync')==='1','Sincronizar tarefas com o Microsoft To Do (lista padrão)')}
 <p class="sub" id="todonote" style="margin:0 0 6px">${todoNote()}</p>
 ${L('odrv',ls.get('drv_sync')==='1','Guardar backup automático no OneDrive')}
 <label class="opt row" for="odrvm"><span style="flex:1">Onde guardar</span><select id="odrvm"><option value="app"${m!=='full'?' selected':''}>Pasta do aplicativo (acesso restrito)</option><option value="full"${m==='full'?' selected':''}>Pasta Apps/PainelNotch (acesso amplo)</option></select></label>
 <p class="sub" id="drvnote" style="margin:0">${drvNote()}</p>
 <span class="redact" style="margin:6px 0 0"><button type="button" class="chip" data-a="drvnow">Salvar backup agora</button><button type="button" class="chip" data-a="drvrest">Restaurar do OneDrive</button></span></fieldset>`}
$('#view').addEventListener('change',e=>{const t=e.target;
 if(t.id==='otodo'){if(!t.checked){ls.set('todo_sync','0');repaintSet();return}
  ls.set('todo_sync','1');if(ls.get('ms_todo')==='1'&&msOn()){todoSync(true);repaintSet()}else mAuth({todo:true})}
 if(t.id==='odrvm'){ls.set('ms_drv_pref',t.value);if(ls.get('drv_sync')==='1'&&ls.get('ms_drv')!==t.value){S.drv.checked=false;S.drv.hold=false;mAuth({drv:t.value})}}
 if(t.id==='odrv'){if(!t.checked){ls.set('drv_sync','0');repaintSet();return}
  const m=ls.get('ms_drv_pref')||'app';ls.set('drv_sync','1');S.drv.checked=false;S.drv.err='';
  if(ls.get('ms_drv')===m&&msOn()){drvStart().then(()=>{if(!S.drv.hold)drvUpload(true)})}else mAuth({drv:m})}});

/* ===== Rádio: buscar mais rádios no diretório Radio Browser ===== */
const RS_PRE=[{l:'Lo-fi rock',q:'lofi rock'},{l:'Lo-fi eletrônica',q:'lofi electronic'},{l:'Lo-fi foco',q:'lofi focus'},{l:'Mais ouvidas do Brasil',q:'',br:true,order:'clickcount'},{l:'Mais votadas do Brasil',q:'',br:true,order:'votes'}];
const RB=['https://de1.api.radio-browser.info','https://fi1.api.radio-browser.info','https://at1.api.radio-browser.info'];
async function rbFetch(par){let ult;for(const b of RB){try{const r=await fetch(b+'/json/stations/search?'+new URLSearchParams(par));if(r.ok)return await r.json()}catch(e){ult=e}}throw ult||new Error('rb')}
function favBox(){const R=S.rd,L=R.list,fav=L.map((x,i)=>({x,i})).filter(o=>o.x.u&&isFav(o.x.u)),open=R.favOpen?' open':'';
 const items=fav.map(o=>{const cur=o.i===R.cur;return '<li class="svd'+(cur?' cur':'')+'"><button type="button" class="svdbtn" data-a="rpick" data-i="'+o.i+'" aria-current="'+cur+'"><span class="grow">'+esc(o.x.n||('Emissora '+(o.i+1)))+'</span><span class="fav" aria-hidden="true">★</span></button></li>'}).join('');
 return '<details class="dt rsv rsfacc" id="rsfdet"'+open+'><summary>Só favoritas ('+fav.length+')</summary>'+(fav.length?'<ul class="svlist">'+items+'</ul>':'<p class="sub">Nenhuma favorita ainda. Toque no coração de uma emissora para favoritar.</p>')+'</details>'}
let plCache=null;
async function spRecentPlaylists(){if(!S.tok)return [];if(plCache&&Date.now()-plCache.at<10*60000)return plCache.l;
 const r=await spApi('/me/player/recently-played?limit=50');const seen=new Map();
 ((r&&r.items)||[]).forEach(it=>{const c=it.context;if(c&&c.type==='playlist'&&c.uri&&!seen.has(c.uri))seen.set(c.uri,c)});
 const list=[];for(const [uri] of [...seen.entries()].slice(0,6)){const id=uri.split(':').pop();const p=await spApi('/playlists/'+id+'?fields=name');list.push({uri,id,name:(p&&p.name)||'Playlist'})}
 plCache={at:Date.now(),l:list};return list}
async function plRecentLoad(){const box=$('#plrec');if(!box)return;const l=await spRecentPlaylists();
 box.innerHTML=l.length?'<ul class="svlist">'+l.map(p=>'<li class="svd"><a class="svdbtn" href="https://open.spotify.com/playlist/'+esc(p.id)+'" target="_blank" rel="noopener"><span class="grow">'+esc(p.name)+'</span></a></li>').join('')+'</ul>':'<p class="sub">Nenhuma playlist recente. Toque uma playlist no Spotify e ela aparece aqui.</p>'}
function savedBox(){const R=S.rd,L=R.list,open=R.savedOpen?' open':'';
 const items=L.map((x,i)=>{const cur=i===R.cur;return '<li class="svd'+(cur?' cur':'')+'"><button type="button" class="svdbtn" data-a="rpick" data-i="'+i+'" aria-current="'+cur+'"><span class="grow">'+esc(x.n||('Emissora '+(i+1)))+(x.u?'':' <span class="sub">(sem link)</span>')+(x.u&&isFav(x.u)?' <span class="fav" aria-label="favorita">★</span>':'')+'</span></button></li>'}).join('');
 return '<details class="dt rsv" id="rsvdet"'+open+'><summary>Rádios salvas ('+L.length+')</summary>'+(L.length?'<ul class="svlist">'+items+'</ul>':'<p class="sub">Nenhuma rádio salva ainda. Use Buscar mais rádios para adicionar.</p>')+'</details>'}
function rsBox(){const R=S.rd;
 return `<details class="dt" id="rsdet"${R.rsOpen?' open':''}><summary>Buscar mais rádios</summary>
 <p class="sub" style="margin:6px 0">Pesquisa no diretório público Radio Browser (precisa de internet).</p>
 <div class="redact">${RS_PRE.map((p,k)=>`<button type="button" class="chip" data-a="rpre" data-k="${k}">${p.l}</button>`).join('')}</div>
 <form id="rsform" class="add"><input id="rsq" aria-label="Buscar rádio por nome ou estilo" placeholder="Nome ou estilo (ex.: lofi rock)" autocomplete="off" value="${esc(R.rsQ||'')}"><button>Buscar</button></form>
 <label class="cbz"><input type="checkbox" id="rsbr"${R.rsBr?' checked':''}> Só rádios do Brasil</label>
 <div id="rsres" aria-live="polite">${R.rsHtml||''}</div></details>`}
async function rsRun(preset){const R=S.rd,out=$('#rsres'),q=($('#rsq').value||'').trim(),br=$('#rsbr').checked,order=(preset&&preset.order)||(br&&!q?'clickcount':'votes');
 R.rsQ=q;R.rsBr=br;if(q.length<2&&!(preset&&preset.br)){out.textContent='Digite pelo menos 2 letras ou use um dos atalhos.';return}
 out.textContent='Buscando…';
 const base={hidebroken:'true',order,reverse:'true',limit:'30'};if(br)base.countrycode='BR';if(location.protocol==='https:')base.is_https='true';
 try{let lista=await rbFetch(q?{...base,name:q}:base);const pal=q.toLowerCase().split(/\s+/).filter(Boolean);
  if(q&&lista.length<8&&pal.length){const t=await rbFetch({...base,tag:pal[0]});lista=lista.concat(t.filter(x=>pal.every(w=>(String(x.name)+' '+String(x.tags)).toLowerCase().includes(w))))}
  const vis=new Set(),itens=lista.filter(x=>{const u=String(x.url_resolved||x.url||'');if(!/^https?:\/\/\S+$/i.test(u)||(location.protocol==='https:'&&!/^https:/i.test(u))||vis.has(u))return false;vis.add(u);return true}).slice(0,25);
  R.rsHtml=itens.length?itens.map(x=>{const u=String(x.url_resolved||x.url),n=String(x.name||'Rádio').trim().slice(0,40),meta=[x.country,(x.codec||'').toUpperCase()+(x.bitrate?' '+x.bitrate+' kbps':''),(x.votes||0)+' votos',(x.clickcount||0)+' ouvintes'].filter(Boolean).join(' · ');
   return `<div class="row"><span class="grow">${esc(n)}<br><span class="sub">${esc(meta)}</span></span><button type="button" class="chip" data-a="rsadd" data-u="${esc(u)}" data-n="${esc(n)}" aria-label="Adicionar à lista: ${esc(n)}">Adicionar</button><button type="button" class="chip" data-a="rsplay" data-u="${esc(u)}" data-n="${esc(n)}" aria-label="Adicionar e ouvir: ${esc(n)}">Ouvir</button></div>`}).join(''):'Nada encontrado para essa busca.';
  out.innerHTML=R.rsHtml;say(itens.length+(itens.length===1?' rádio encontrada':' rádios encontradas'))}
 catch(_){R.rsHtml='';out.textContent='Não foi possível buscar agora. Confira a conexão com a internet.'}}
$('#view').addEventListener('toggle',e=>{if(e.target.id==='rsdet')S.rd.rsOpen=e.target.open;if(e.target.id==='rsvdet')S.rd.savedOpen=e.target.open;
 if(e.target.id==='rsfdet'){const R=S.rd;R.favOpen=e.target.open;R.onlyFav=e.target.open;if(R.onlyFav){const p=rdPool();if(p.length&&!p.includes(R.cur)){R.cur=p[0];ls.set('rd_cur',R.cur)}}view()}},true);
$('#view').addEventListener('input',e=>{if(e.target.id==='rsq')S.rd.rsQ=e.target.value});

/* ===== Relógio (horário de São Paulo), data e previsão do tempo ===== */
const TZ='America/Sao_Paulo';
const WX_DEF={n:'São Bernardo do Campo, SP',lat:-23.6939,lon:-46.5650};
const WX={loc:WX_DEF,at:0,data:null,busy:false};
try{const l=JSON.parse(ls.get('wx_loc')||'null');if(l&&typeof l.lat==='number'&&typeof l.lon==='number')WX.loc={n:String(l.n||'').slice(0,60),lat:l.lat,lon:l.lon}}catch(_){}
const fClock=new Intl.DateTimeFormat('pt-BR',{timeZone:TZ,hour:'2-digit',minute:'2-digit',second:'2-digit'});
const fDate=new Intl.DateTimeFormat('pt-BR',{timeZone:TZ,weekday:'long',day:'2-digit',month:'2-digit',year:'numeric'});
const fWd=new Intl.DateTimeFormat('pt-BR',{timeZone:TZ,weekday:'short'});
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const WMO=[[[0],'Céu limpo','sun'],[[1,2],'Parcialmente nublado','cloud'],[[3],'Nublado','cloud'],[[45,48],'Nevoeiro','fog'],[[51,53,55,56,57],'Garoa','rain'],[[61,63,65,66,67,80,81,82],'Chuva','rain'],[[71,73,75,77,85,86],'Neve','snow'],[[95,96,99],'Tempestade','storm']];
const wmo=c=>{const r=WMO.find(x=>x[0].includes(c));return r?{t:r[1],i:r[2]}:{t:'Tempo variável',i:'cloud'}};
const WXI={sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 cloud:'<path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.5 3.5 0 0 0 7 18z"/>',
 rain:'<path d="M7 14h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.5 3.5 0 0 0 7 14z"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>',
 snow:'<path d="M7 14h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.5 3.5 0 0 0 7 14z"/><path d="M8 18h.01M12 19h.01M16 18h.01"/>',
 storm:'<path d="M7 14h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.5 3.5 0 0 0 7 14z"/><path d="M12 14l-2 4h3l-2 4"/>',
 fog:'<path d="M3 8h18M5 12h14M3 16h18"/>'};
const wIcon=n=>'<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+WXI[n]+'</svg>';
function tpUv(v){return v<3?'Baixo':v<6?'Moderado':v<8?'Alto':v<11?'Muito alto':'Extremo'}
function tpHM(t){return t?String(t).slice(11,16):'--:--'}
function tempoViewBase(){const w=WX.data;
 if(!w)return '<div class="tp"><h2>Tempo</h2><p class="sub">'+(WX.busy?'Carregando o tempo…':'Tempo indisponível agora. Confira a conexão com a internet.')+'</p></div>';
 const c=w.current,d=w.daily,h=w.hourly,cur=wmo(c.weather_code),N=10;
 const idx=h&&h.time?Math.max(0,h.time.indexOf(String(c.time).slice(0,13)+':00')):0;
 const hours=h&&h.time?[...Array(24).keys()].map(k=>idx+k).filter(k=>k<h.time.length).map(k=>'<div><span>'+(k===idx?'Agora':String(h.time[k]).slice(11,13)+'h')+'</span>'+wIcon(wmo(h.weather_code[k]).i)+'<span>'+Math.round(h.temperature_2m[k])+'°</span>'+(h.precipitation_probability&&h.precipitation_probability[k]>=20?'<span style="color:#64d2ff;font-size:11px">'+h.precipitation_probability[k]+'%</span>':'')+'</div>').join(''):'';
 const L=[...Array(N).keys()].filter(k=>d.time[k]),gmin=Math.min(...L.map(k=>d.temperature_2m_min[k])),gmax=Math.max(...L.map(k=>d.temperature_2m_max[k])),span=(gmax-gmin)||1;
 const days=L.map(k=>{const mn=d.temperature_2m_min[k],mx=d.temperature_2m_max[k],x=wmo(d.weather_code[k]),pp=d.precipitation_probability_max?d.precipitation_probability_max[k]:0;
  const lbl=k===0?'Hoje':cap(fWd.format(new Date(d.time[k]+'T12:00:00-03:00'))).replace(/\.?$/,'.');
  return '<div><span>'+lbl+'<span class="sr">, '+x.t+'</span></span>'+wIcon(x.i)+'<span class="mn">'+Math.round(mn)+'°</span><span class="tp-bar"><i style="left:'+((mn-gmin)/span*100).toFixed(1)+'%;width:'+Math.max(4,(mx-mn)/span*100).toFixed(1)+'%"></i></span><span class="mx">'+Math.round(mx)+'°'+(pp>=20?'<span class="pp">'+pp+'%</span>':'')+'</span></div>'}).join('');
 const card=(k,v,sub)=>'<div class="tp-card"><div class="tp-k">'+k+'</div><div class="tp-v">'+v+'</div>'+(sub?'<div class="tp-s">'+sub+'</div>':'')+'</div>';
 const uv=d.uv_index_max?d.uv_index_max[0]:null,pp0=d.precipitation_probability_max?d.precipitation_probability_max[0]:null;
 return '<div class="tp" aria-label="Tempo em '+esc(WX.loc.n)+'">'+
  '<div class="tp-head"><div class="tp-city">'+esc(WX.loc.n.split(',')[0])+'</div><div class="tp-temp" aria-label="'+Math.round(c.temperature_2m)+' graus">'+Math.round(c.temperature_2m)+'°</div><div class="tp-cond">'+cur.t+'</div><div class="tp-hl">Máx '+Math.round(d.temperature_2m_max[0])+'° Mín '+Math.round(d.temperature_2m_min[0])+'°</div></div>'+
  (hours?'<section class="tp-card" aria-label="Previsão por hora"><h3>Previsão por hora</h3><div class="tp-hours">'+hours+'</div></section>':'')+
  '<section class="tp-card" aria-label="Previsão de 10 dias"><h3>Previsão de 10 dias</h3><div class="tp-days">'+days+'</div></section>'+
  '<div class="tp-grid">'+
   card('Sensação térmica',Math.round(c.apparent_temperature)+'°',Math.round(c.apparent_temperature)>Math.round(c.temperature_2m)?'Mais quente que a temperatura':'Mais fria que a temperatura')+
   card('Umidade',Math.round(c.relative_humidity_2m)+'%','')+
   card('Vento',Math.round(c.wind_speed_10m)+' km/h '+bussola(c.wind_direction_10m),'')+(c.visibility!=null?card('Visibilidade',(c.visibility/1000).toFixed(1).replace('.',',')+' km',''):'')+(c.surface_pressure!=null?card('Pressão',Math.round(c.surface_pressure)+' hPa',''):'')+(c.dew_point_2m!=null?card('Ponto de orvalho',Math.round(c.dew_point_2m)+'°',''):'')+
   (uv!=null?card('Índice UV',Math.round(uv),tpUv(uv)):'')+
   (pp0!=null?card('Chance de chuva',pp0+'%','Hoje'):'')+
   card('Nascer do sol',tpHM(d.sunrise&&d.sunrise[0]),'Pôr do sol '+tpHM(d.sunset&&d.sunset[0]))+
  '</div><p class="tp-src">Dados: Open-Meteo</p></div>'}
const IS_IOS=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
function tpPages(){let x=[];try{x=JSON.parse(ls.get('wx_extra')||'[]')||[]}catch(_){}return [WX.loc].concat(Array.isArray(x)?x.slice(0,5):[])}
function tpUrl(loc){return 'https://api.open-meteo.com/v1/forecast?'+new URLSearchParams({latitude:loc.lat,longitude:loc.lon,current:'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m,weather_code,surface_pressure,dew_point_2m,visibility',hourly:'temperature_2m,weather_code,precipitation_probability,wind_speed_10m',daily:'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset',timezone:'auto',forecast_days:'10'})}
async function tpFetch(loc){WX.pages=WX.pages||{};const k=loc.lat+','+loc.lon,c=WX.pages[k];if(c&&Date.now()-c.at<30*60000)return c.d;const r=await fetch(tpUrl(loc));if(!r.ok)throw 0;const j=await r.json();if(!j.current||!j.daily)throw 0;WX.pages[k]={d:j,at:Date.now()};return j}
function tpRender(loc,data){const sd=WX.data,sl=WX.loc;WX.data=data;WX.loc=loc;try{return tempoViewBase()}finally{WX.data=sd;WX.loc=sl}}
function tpHead(P,i){return '<form id="tpform" class="add" style="margin:0 0 8px"><label class="sr" for="tpcity">Trocar cidade principal</label><input id="tpcity" placeholder="Trocar cidade principal (ex.: Curitiba)" maxlength="60" autocomplete="off"><button>Buscar</button></form><p class="sub" id="wmsg" role="status" style="margin:0 0 6px"></p>'+
 (P.length<6?'<form id="tpaddf" class="add" style="margin:0 0 6px"><label class="sr" for="tpaddc">Adicionar cidade</label><input id="tpaddc" placeholder="Adicionar cidade" maxlength="60" autocomplete="off"><button>Adicionar</button></form>':'')+
 (i>0?'<button type="button" class="chip" data-a="tpdel" style="margin:0 0 8px">Remover esta cidade</button>':'')}
function tpDots(P,i){return '<div class="tpdots" role="tablist" aria-label="Cidades salvas">'+P.map((p,k)=>'<button type="button" role="tab" class="tpdot'+(k===i?' on':'')+'" data-a="tpdot" data-i="'+k+'" aria-selected="'+(k===i)+'" aria-label="'+esc(p.n)+'"></button>').join('')+'</div><p class="sub" style="text-align:center;margin:4px 0 0">'+esc(P[i].n)+' · '+(i+1)+' de '+P.length+'</p>'}
function tempoView(){const P=tpPages();WX.pg=Math.min(Math.max(0,WX.pg||0),P.length-1);const i=WX.pg,loc=P[i];
 let body;
 if(i===0)body=tpRender(loc,WX.data);
 else{const c=WX.pages&&WX.pages[loc.lat+','+loc.lon];
  if(c)body=tpRender(loc,c.d);
  else{tpFetch(loc).then(()=>{if(S.tab==='tempo')view()}).catch(()=>{if(S.tab==='tempo')view()});body='<div class="tp"><p class="sub">Carregando '+esc(loc.n)+'…</p></div>'}}
 return body+tpHourHtml(i===0?WX.data:((WX.pages&&WX.pages[loc.lat+','+loc.lon])||{}).d)+tpExtras(loc,i===0?WX.data:((WX.pages&&WX.pages[loc.lat+','+loc.lon])||{}).d)+tpDots(P,i)+tpHead(P,i)+tpAlertHtml()}
function tpRain(data){const h=data&&data.hourly;if(!h||!h.time||!h.precipitation_probability)return '';
 const i=Math.max(0,h.time.indexOf(String(data.current.time).slice(0,13)+':00')),jan=h.precipitation_probability.slice(i,i+6),tm=h.time.slice(i,i+6);
 const k=jan.findIndex(p=>p>=50);if(k<0)return '<div class="tp-card" style="margin:0 0 10px"><div class="tp-k">Chuva nas próximas 6 horas</div><div class="tp-s" style="font-size:15px;color:var(--ink)">Sem chuva prevista</div></div>';
 let e=k;while(e+1<jan.length&&jan[e+1]>=50)e++;
 return '<div class="tp-card" style="margin:0 0 10px"><div class="tp-k">Chuva nas próximas 6 horas</div><div class="tp-s" style="font-size:15px;color:var(--ink)">Começa às '+tm[k].slice(11,16)+(e>k?' e vai até às '+tm[e].slice(11,16):' (pode ser rápida)')+' · '+jan[k]+'% de chance</div></div>'}
const AQI=[[50,'Boa'],[100,'Moderada'],[150,'Insalubre para grupos sensíveis'],[200,'Insalubre'],[300,'Muito insalubre'],[Infinity,'Perigosa']];
function tpAir(loc){WX.air=WX.air||{};const k=loc.lat+','+loc.lon,c=WX.air[k];if(c&&Date.now()-c.at<30*60000)return c.d;if(!WX.airBusy||!WX.airBusy[k]){WX.airBusy=WX.airBusy||{};WX.airBusy[k]=1;
  fetch('https://air-quality-api.open-meteo.com/v1/air-quality?'+new URLSearchParams({latitude:loc.lat,longitude:loc.lon,current:'us_aqi,pm2_5,pm10',timezone:'auto'})).then(r=>r.ok?r.json():null).then(j=>{if(j&&j.current){WX.air[k]={d:j.current,at:Date.now()}}}).catch(()=>{}).finally(()=>{delete WX.airBusy[k];if(S.tab==='tempo')view()})}
 return null}
function tpExtras(loc,data){if(!data)return '';const a=tpAir(loc);let air='';
 if(a&&a.us_aqi!=null){const cat=AQI.find(x=>a.us_aqi<=x[0])[1];air='<div class="tp-card" style="margin:0 0 10px"><div class="tp-k">Qualidade do ar</div><div class="tp-v" style="font-size:30px">'+Math.round(a.us_aqi)+'</div><div class="tp-s" style="font-size:15px;color:var(--ink)">'+cat+' · PM2,5: '+(a.pm2_5!=null?a.pm2_5:'—')+' µg/m³</div></div>'}
 return bestTimeHtml(data)+luzHtml(data)+tpRain(data)+chanceHtml(data)+air+ontemHtml(loc,data)+tpMapCard()}
function ontemHtml(loc,data){if(!data||!data.current)return '';const key=loc.lat+','+loc.lon+','+dayKey(new Date());
 let c=null;try{c=JSON.parse(ls.get('ontem')||'null')}catch(_){}
 if(!c||c.key!==key){if(!WX.ontemBusy){WX.ontemBusy=true;const y=new Date();y.setDate(y.getDate()-1);const yk=dayKey(y);
  fetch('https://archive-api.open-meteo.com/v1/archive?'+new URLSearchParams({latitude:loc.lat,longitude:loc.lon,hourly:'temperature_2m',start_date:yk,end_date:yk,timezone:'auto'})).then(r=>r.ok?r.json():null).then(j=>{if(j&&j.hourly){const h=new Date().getHours();const t=j.hourly.temperature_2m[h];if(t!=null){ls.set('ontem',JSON.stringify({key,t}));if(S.tab==='tempo')view()}}}).catch(()=>{}).finally(()=>{WX.ontemBusy=false})}
  return ''}
 const hoje=Math.round(data.current.temperature_2m),ont=Math.round(c.t),dif=hoje-ont;
 const txt=dif===0?'Mesma temperatura de ontem nesta hora ('+ont+'°).':Math.abs(dif)+'° '+(dif>0?'mais quente':'mais fria')+' que ontem nesta hora (ontem '+ont+'°).';
 return '<section class="tp-card" aria-label="Comparação com ontem" style="margin:0 0 10px"><div class="tp-k">Comparado com ontem</div><div class="tp-s" style="font-size:15px;color:var(--ink)">'+txt+'</div></section>'}
function luzHtml(data){const d=data&&data.daily;if(!d||!d.sunrise||!d.sunset)return '';
 const dur=i=>{if(!d.sunrise[i]||!d.sunset[i])return null;const a=new Date(d.sunrise[i]),b=new Date(d.sunset[i]);return (b-a)/36e5};
 const fmt=h=>h==null||isNaN(h)?'—':Math.floor(h)+' h '+String(Math.round((h%1)*60)).padStart(2,'0')+' min';
 return '<section class="tp-card" aria-label="Horário de luz do dia" style="margin:0 0 10px"><div class="tp-k">Luz do dia</div><div class="tp-s" style="font-size:15px;color:var(--ink);margin-top:6px">Hoje: '+fmt(dur(0))+' ('+(d.sunrise[0]||'').slice(11,16)+' às '+(d.sunset[0]||'').slice(11,16)+')</div>'+(d.sunrise[1]?'<div class="tp-s" style="font-size:15px;color:var(--ink)">Amanhã: '+fmt(dur(1))+'</div>':'')+'</section>'}
function bussola(g){if(g==null||isNaN(g))return '';const n=['N','NE','L','SE','S','SO','O','NO'];return n[Math.round(g/45)%8]}
function chanceHtml(data){const h=data&&data.hourly;if(!h||!h.time||!h.precipitation_probability)return '';
 const i=Math.max(0,h.time.indexOf(String(data.current.time).slice(0,13)+':00'));const p=h.precipitation_probability.slice(i,i+24),tm=h.time.slice(i,i+24);if(!p.length)return '';
 return '<section class="tp-card" aria-label="Chance de chuva por hora" style="margin:0 0 10px"><div class="tp-k">Chance de chuva nas próximas 24 horas</div><div style="display:flex;align-items:flex-end;gap:3px;height:70px;margin-top:8px" role="img" aria-label="Chance de chuva por hora: '+p.map((v,k)=>tm[k].slice(11,13)+'h '+v+'%').join(', ')+'">'+p.map(v=>'<i style="flex:1;display:block;min-height:2px;height:'+Math.max(2,v)+'%;background:#64d2ff;border-radius:3px 3px 1px 1px"></i>').join('')+'</div><div class="sub" style="display:flex;justify-content:space-between;font-size:11px;margin-top:4px"><span>'+(tm[0]||'').slice(11,13)+'h</span><span>'+(tm[23]||'').slice(11,13)+'h</span></div></section>'}
function tpMapCard(){return '<section class="tp-card" aria-label="Mapa da região" style="margin:0 0 10px"><div style="display:flex;justify-content:space-between;align-items:center"><div class="tp-k">Mapa da região</div><button type="button" class="chip" data-a="radar" aria-pressed="'+(ls.get('radar')==='1')+'">'+(ls.get('radar')==='1'?'Ocultar radar':'Radar de chuva')+'</button></div><div id="tpmap" role="img" aria-label="Mapa com a temperatura em pontos ao redor da cidade" style="height:240px;border-radius:12px;overflow:hidden;margin-top:6px"></div><ul id="tpmapl" class="svlist" aria-label="Temperaturas na região" style="margin-top:8px"><li class="sub">Carregando região…</li></ul></section>'}
function tpCurLoc(){const P=tpPages();return P[Math.min(WX.pg||0,P.length-1)]}
function tpGridPts(loc){const pts=[];for(const dy of [-0.3,0,0.3])for(const dx of [-0.3,0,0.3])pts.push({lat:+(loc.lat+dy).toFixed(3),lon:+(loc.lon+dx).toFixed(3),dy,dx});return pts}
async function tpGridLoad(loc){WX.grid=WX.grid||{};const k=loc.lat+','+loc.lon,c=WX.grid[k];if(c&&Date.now()-c.at<30*60000)return c.d;
 const pts=tpGridPts(loc);const r=await fetch('https://api.open-meteo.com/v1/forecast?'+new URLSearchParams({latitude:pts.map(p=>p.lat).join(','),longitude:pts.map(p=>p.lon).join(','),current:'temperature_2m,precipitation',timezone:'auto'}));
 if(!r.ok)throw 0;const j=await r.json();const arr=Array.isArray(j)?j:[j];
 const d=pts.map((p,i)=>({lat:p.lat,lon:p.lon,dy:p.dy,dx:p.dx,t:arr[i]&&arr[i].current?arr[i].current.temperature_2m:null,p:arr[i]&&arr[i].current?arr[i].current.precipitation:null}));WX.grid[k]={d,at:Date.now()};return d}
function tpDir(p){const v=p.dy>0?'Norte':p.dy<0?'Sul':'';const h=p.dx>0?'Leste':p.dx<0?'Oeste':'';return (v&&h)?v+'-'+h:(v||h||'Centro')}
function tpListDraw(d){const l=$('#tpmapl');if(!l)return;l.innerHTML=d.map(p=>'<li class="svd" style="display:flex;justify-content:space-between;padding:6px 4px;font-size:14px"><span>'+tpDir(p)+'</span><b>'+(p.t==null?'—':Math.round(p.t)+'°C')+(p.p>0?' · chuva '+p.p+' mm':'')+'</b></li>').join('')}
let lfReady=null;
function lfLoad(){if(window.L)return Promise.resolve();if(lfReady)return lfReady;lfReady=new Promise((res,rej)=>{const cs=document.createElement('link');cs.rel='stylesheet';cs.href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';document.head.appendChild(cs);
 const sc=document.createElement('script');sc.src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';sc.onload=res;sc.onerror=()=>{lfReady=null;rej(new Error('leaflet'))};document.head.appendChild(sc)});return lfReady}
let tpMapObj=null;
function tpMapDraw(loc,d){const el=$('#tpmap');if(!el||!window.L)return;
 if(tpMapObj&&tpMapObj.getContainer()===el)return;
 if(tpMapObj){tpMapObj.remove();tpMapObj=null}
 tpMapObj=window.L.map(el,{zoomControl:false}).setView([loc.lat,loc.lon],10);
 window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap'}).addTo(tpMapObj);
 d.forEach(p=>{if(p.t==null)return;const col=p.t<15?'#64d2ff':p.t<25?'#30d158':p.t<30?'#ff9f0a':'#ff453a';
  window.L.marker([p.lat,p.lon],{icon:window.L.divIcon({className:'',html:'<span class="tpmt" style="background:'+col+'">'+Math.round(p.t)+'°</span>',iconSize:null}),keyboard:false,title:tpDir(p)}).addTo(tpMapObj)})}
let radarLayer=null,radarHost=null;
async function radarDraw(){const el=$('#tpmap');if(!el||!window.L||!tpMapObj||tpMapObj.getContainer()!==el)return;
 try{if(!radarHost){const r=await fetch('https://api.rainviewer.com/public/weather-video.json');const j=await r.json();const past=j.radar&&j.radar.past;if(!past||!past.length)return;radarHost={host:j.host,path:past[past.length-1].path}}
  if(radarLayer)radarLayer.remove();radarLayer=window.L.tileLayer(radarHost.host+radarHost.path+'/256/{z}/{x}/{y}/2/1_1.png',{opacity:.6,attribution:'Radar: RainViewer'}).addTo(tpMapObj)}
 catch(_){}}
function tpMapInit(){const el=$('#tpmap');if(!el)return;const loc=tpCurLoc();if(!loc)return;
 tpGridLoad(loc).then(d=>{tpListDraw(d);return lfLoad().then(()=>tpMapDraw(loc,d)).catch(()=>{})}).catch(()=>{const l=$('#tpmapl');if(l)l.innerHTML='<li class="sub">Não foi possível carregar a região agora.</li>'})}
function tpHourHtml(data){const sel=ls.get('tp_hour')||'';const hora=sel.slice(2)||'18:00',dia=sel.slice(0,1)||'0';
 const form='<form id="tphrform" class="tpalert" style="margin:0 0 10px"><div class="tp-k" style="margin-bottom:6px">Previsão para um horário</div><div class="add" style="margin:0"><label class="sr" for="tphday">Dia</label><select id="tphday"><option value="0"'+(dia==='0'?' selected':'')+'>Hoje</option><option value="1"'+(dia==='1'?' selected':'')+'>Amanhã</option></select><label class="sr" for="tphtime">Horário</label><input type="time" id="tphtime" value="'+hora+'"><button>Ver</button></div></form>';
 if(!data||!data.hourly||!data.hourly.time)return form;
 const d0=new Date();d0.setDate(d0.getDate()+(+dia));const key=dayKey(d0)+'T'+hora.slice(0,2)+':00';const h=data.hourly,i=h.time.indexOf(key);
 if(i<0)return form+'<div class="tp-card" style="margin:0 0 10px"><div class="tp-s" style="font-size:15px;color:var(--ink)">Sem previsão para esse horário</div></div>';
 return form+'<div class="tp-card" style="margin:0 0 10px"><div class="tp-k">'+(dia==='1'?'Amanhã':'Hoje')+' às '+hora+'</div><div class="tp-v" style="font-size:30px">'+Math.round(h.temperature_2m[i])+'°</div><div class="tp-s" style="font-size:15px;color:var(--ink)">'+wmo(h.weather_code[i]).t+' · '+(h.precipitation_probability?h.precipitation_probability[i]:0)+'% de chuva</div></div>'}
function tpGo(dir){const n=tpPages().length;WX.pg=Math.min(n-1,Math.max(0,(WX.pg||0)+dir));view()}
function logErr(m){try{let l=JSON.parse(ls.get('err_log')||'[]');if(!Array.isArray(l))l=[];l.push({t:new Date().toISOString(),tab:S.tab,m:String(m).slice(0,200)});ls.set('err_log',JSON.stringify(l.slice(-20)))}catch(_){}}
window.addEventListener('error',e=>logErr(e.message));
window.addEventListener('unhandledrejection',e=>logErr('promessa: '+(e.reason&&e.reason.message||e.reason)));
document.addEventListener('keydown',e=>{
 if(e.ctrlKey||e.metaKey||e.altKey)return;
 const t=e.target;if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))return;
 {let at={};try{at=JSON.parse(ls.get('atalhos')||'{}')||{}}catch(_){}const k=Object.keys(at).find(id=>at[id]===e.key);if(k&&TABS.some(t=>t[0]===k)){e.preventDefault();pick(k);return}}
 if(e.key>='1'&&e.key<='9'&&!ls.get('atalhos')){const tb=TABS[+e.key-1];if(tb){e.preventDefault();pick(tb[0])}return}
 if(e.key==='p'||e.key==='P'){const b=$('#view [data-a="pgo"]');if(b){e.preventDefault();b.click()}return}
 if(e.key==='n'||e.key==='N'){e.preventDefault();if(S.tab!=='tasks')pick('tasks');const i=$('#nt');if(i)i.focus();return}
});
$('#view').addEventListener('input',e=>{if(e.target.id==='notas'){notaInput(e.target.value);const c=$('#nct');if(c)c.textContent=e.target.value.length+' de 5000'}if(e.target.id==='nimg'&&e.target.files&&e.target.files[0])notaAddImg(e.target.files[0]);if(e.target.id==='gq')buscaResultados(e.target.value);if(e.target.id==='nsearch')notaSearch(e.target.value);if(e.target.id==='ntitle')notaTitle(e.target.value);if(e.target.id==='nref'){const L=notesList(),c=notaCurItem(L);c.ref=e.target.value;notesSave(L)}});
$('#view').addEventListener('change',e=>{if(e.target.dataset&&e.target.dataset.atalho){let at={};try{at=JSON.parse(ls.get('atalhos')||'{}')||{}}catch(_){}const k=e.target.value.trim().slice(0,1);if(k)at[e.target.dataset.atalho]=k;else delete at[e.target.dataset.atalho];ls.set('atalhos',JSON.stringify(at));say('Atalho salvo')}if(e.target.id==='durPadrao'){ls.set('dur_padrao',e.target.value);say('Duração padrão: '+e.target.value+' min')}if(e.target.id==='plongN'){ls.set('pomo_long',e.target.value);view();say('Pausa longa após '+e.target.value+' ciclos')}if(e.target.id==='sndIni'||e.target.id==='sndFim'){ls.set(e.target.id==='sndIni'?'snd_ini':'snd_fim',e.target.value);beep(+e.target.value)}if(['thBg','thInk','thRow','thAcc'].includes(e.target.id)){saveTema();applyColors()}if(e.target.id==='fxq'||e.target.id==='fxde'||e.target.id==='fxpa')fxRun();if(e.target.id==='cvk'){cvSetUnits();cvRun()}if(e.target.id==='cvde'||e.target.id==='cvpara'||e.target.id==='cvq')cvRun()});
(function(){if(ls.get('opt_mono')==='1')$('#notch').dataset.mono='1'})();
const TEMAS={padrao:null,azul:{bg:'#0b1220',ink:'#e8eefc',row:'#16213a',acc:'#5b8cff'},floresta:{bg:'#0d1a14',ink:'#e9f5ee',row:'#173325',acc:'#3ecf8e'},roxo:{bg:'#17101f',ink:'#f3ecff',row:'#2a1d3b',acc:'#bf5af2'},claro:{bg:'#f2f2f7',ink:'#111111',row:'#ffffff',acc:'#0a84ff'}};
function temaAtual(){try{const t=JSON.parse(ls.get('tema')||'null');if(t&&typeof t==='object')return t}catch(_){}return {bg:ls.get('tema_bg')||'',acc:ls.get('tema_acc')||'',ink:'',row:''}}
function applyColors(){const r=document.documentElement.style,t=temaAtual();
 const set=(k,v)=>v?r.setProperty(k,v):r.removeProperty(k);
 set('--bgc',t.bg);set('--ink',t.ink);set('--row',t.row);set('--acc',t.acc)}
function saveTema(){ls.set('tema',JSON.stringify({bg:$('#thBg').value,ink:$('#thInk').value,row:$('#thRow').value,acc:$('#thAcc').value}));ls.del('tema_bg');ls.del('tema_acc')}
applyColors();
const WCITIES=[['São Paulo','America/Sao_Paulo'],['Lisboa','Europe/Lisbon'],['Nova York','America/New_York'],['Londres','Europe/London'],['Tóquio','Asia/Tokyo'],['Sydney','Australia/Sydney']];
const CONV={len:{u:['m','ft','km','mi'],f:{m:1,ft:0.3048,km:1000,mi:1609.344}},peso:{u:['kg','lb','g'],f:{kg:1,lb:0.45359237,g:0.001}},temp:{u:['°C','°F']}};
let sw={run:false,acc:0,t0:0};
function swMs(){return sw.acc+(sw.run?Date.now()-sw.t0:0)}
function swFmt(ms){const t=Math.floor(ms/10),c=t%100,sec=Math.floor(t/100)%60,min=Math.floor(t/6000)%60,h=Math.floor(t/360000);return (h?h+':':'')+String(min).padStart(2,'0')+':'+String(sec).padStart(2,'0')+'.'+String(c).padStart(2,'0')}
let swTimer=null;
function swTick(){clearInterval(swTimer);if(!sw.run)return;swTimer=setInterval(()=>{const el=$('#swv');if(el)el.textContent=swFmt(swMs());else clearInterval(swTimer)},100)}
function diaKey(ms){return dayKey(new Date(ms))}
function resumoHtml(){const hoje=dayKey(new Date());let h={};try{h=JSON.parse(ls.get('pomo_hist')||'{}')||{}}catch(_){}
 const ciclosHoje=h[hoje]||0;let ciclos7=0;for(let i=0;i<7;i++)ciclos7+=h[dayKey(new Date(Date.now()-i*864e5))]||0;
 const ini7=Date.now()-6*864e5;
 const feitasHoje=(S.tasks||[]).filter(t=>t.d&&t.mod&&diaKey(t.mod)===hoje).length;
 const feitas7=(S.tasks||[]).filter(t=>t.d&&t.mod&&t.mod>=ini7).length;
 const pendentes=(S.tasks||[]).filter(t=>!t.d).length;
 const cumpridos=(S.ev||[]).filter(r=>r[6]&&diaKey(r[6])===hoje&&r[8]&&r[8]<Date.now()).length;
 const linha=(k,v)=>'<div style="display:flex;justify-content:space-between;padding:6px 0;border-top:1px solid rgba(255,255,255,.08)"><span>'+k+'</span><b>'+v+'</b></div>';
 return '<section class="tp-card" aria-label="Balanço do dia"><h3 class="tkh" style="margin:0 0 6px">Balanço de hoje</h3>'+linha('Ciclos de foco',ciclosHoje)+linha('Tarefas concluídas',feitasHoje)+linha('Compromissos já cumpridos',cumpridos)+'</section>'+
 '<section class="tp-card" aria-label="Revisão da semana" style="margin-top:12px"><h3 class="tkh" style="margin:0 0 6px">Revisão da semana</h3>'+linha('Ciclos de foco (7 dias)',ciclos7)+linha('Tarefas concluídas (7 dias)',feitas7)+linha('Tarefas pendentes agora',pendentes)+'<p class="sub" style="margin:8px 0 0">Tarefas concluídas são contadas pela data da última alteração.</p></section>'}
const FX_MOEDAS=['USD','BRL','EUR','GBP','ARS','JPY'];
function fxCache(){try{return JSON.parse(ls.get('fx')||'null')}catch(_){return null}}
async function fxLoad(){const c=fxCache();if(c&&Date.now()-c.at<6*36e5)return;
 try{const r=await fetch('https://open.er-api.com/v6/latest/USD');if(!r.ok)return;const j=await r.json();if(j&&j.rates){ls.set('fx',JSON.stringify({at:Date.now(),rates:j.rates}));if(S.tab==='util')view()}}catch(_){}}
function fxHtml(){const c=fxCache();if(!c)fxLoad();
 const opt=(sel)=>FX_MOEDAS.map(m=>'<option value="'+m+'"'+(m===sel?' selected':'')+'>'+m+'</option>').join('');
 return '<section class="tp-card" aria-label="Conversor de moeda" style="margin-top:12px"><h3 class="tkh" style="margin:0 0 6px">Moedas</h3>'+
  '<div class="add" style="margin:0"><label class="sr" for="fxq">Valor</label><input id="fxq" inputmode="decimal" value="100" autocomplete="off"><label class="sr" for="fxde">De</label><select id="fxde">'+opt('USD')+'</select><label class="sr" for="fxpa">Para</label><select id="fxpa">'+opt('BRL')+'</select></div>'+
  '<p id="fxres" role="status" style="font-size:20px;font-weight:600;margin:10px 0 0">'+(c?'':'Carregando cotações…')+'</p>'+
  '<p class="sub" style="margin:6px 0 0">Cotações: open.er-api.com. Atualizadas a cada 6 horas e podem ter atraso.</p></section>'}
function fxRun(){const c=fxCache(),r=$('#fxres'),q=parseFloat(String($('#fxq').value).replace(',','.')),de=$('#fxde').value,pa=$('#fxpa').value;if(!r)return;
 if(!c||!c.rates){r.textContent='Cotações indisponíveis agora';return}if(isNaN(q)){r.textContent='Digite um número';return}
 const v=q/c.rates[de]*c.rates[pa];r.textContent=q.toLocaleString('pt-BR')+' '+de+' = '+v.toLocaleString('pt-BR',{maximumFractionDigits:2})+' '+pa}
function listenTick(){try{const hoje=dayKey(new Date());let L=JSON.parse(ls.get('listen')||'{}')||{};L[hoje]=L[hoje]||{r:{},s:{}};
 if(rdPlaying()&&S.rd.list[S.rd.cur]){const n=rdName(S.rd.cur);L[hoje].r[n]=(L[hoje].r[n]||0)+15}
 const tr=S.m&&S.m.play&&S.m.list&&S.m.list[S.m.i];if(tr&&tr.t){const k=tr.t+(tr.a?' · '+tr.a:'');L[hoje].s[k]=(L[hoje].s[k]||0)+15}
 const ks=Object.keys(L).sort();if(ks.length>400)ks.slice(0,ks.length-400).forEach(k=>delete L[k]);ls.set('listen',JSON.stringify(L))}catch(_){}}
setInterval(listenTick,15000);
function retroPeriodo(dias){const L=(()=>{try{return JSON.parse(ls.get('listen')||'{}')||{}}catch(_){return {}}})();const r={},s={};let tr=0,ts=0;
 for(let i=0;i<dias;i++){const k=dayKey(new Date(Date.now()-i*864e5));const d=L[k];if(!d)continue;
  Object.entries(d.r||{}).forEach(([n,v])=>{r[n]=(r[n]||0)+v;tr+=v});Object.entries(d.s||{}).forEach(([n,v])=>{s[n]=(s[n]||0)+v;ts+=v})}
 const top=o=>Object.entries(o).sort((a,b)=>b[1]-a[1]).slice(0,3);
 const fmt=sec=>{const h=Math.floor(sec/3600),m=Math.round((sec%3600)/60);return h?h+' h '+m+' min':m+' min'};
 return {tr,ts,top:top(r),tops:top(s),fmt}}
function retroHtml(){const per=[['Hoje',1],['Esta semana',7],['Este mês',30],['Este ano',365]];
 return '<section class="tp-card" aria-label="Retrospectiva de escuta" style="margin-bottom:12px"><h3 class="tkh" style="margin:0 0 6px">Retrospectiva</h3>'+
  per.map(([l,d])=>{const p=retroPeriodo(d);const lista=(arr)=>arr.length?arr.map(([n,v])=>esc(n)+' ('+p.fmt(v)+')').join(', '):'—';
   return '<div style="padding:8px 0;border-top:1px solid rgba(255,255,255,.08)"><div style="display:flex;justify-content:space-between"><b>'+l+'</b><span>Rádio '+p.fmt(p.tr)+' · Música '+p.fmt(p.ts)+'</span></div><div class="sub" style="font-size:13px;margin-top:4px">Mais ouvidas: rádio: '+lista(p.top)+' · música: '+lista(p.tops)+'</div></div>'}).join('')+
  '</section>'}
function ouvidoSec(dias){const L=(()=>{try{return JSON.parse(ls.get('listen')||'{}')||{}}catch(_){return {}}})();let t=0;for(let i=0;i<dias;i++){const d=L[dayKey(new Date(Date.now()-i*864e5))];if(d){Object.values(d.r||{}).forEach(v=>t+=v);Object.values(d.s||{}).forEach(v=>t+=v)}}return t}
function metaHtml(){const meta=parseFloat(ls.get('meta_escuta'))||0;const sem=ouvidoSec(7)/3600;const pc=meta?Math.min(100,Math.round(sem/meta*100)):0;
 return '<section class="tp-card" aria-label="Meta de escuta" style="margin-top:12px"><div class="tp-k">Meta de escuta semanal</div>'+
  (meta?'<div style="margin-top:6px;font-size:15px;color:var(--ink)">'+sem.toFixed(1).replace('.',',')+' de '+String(meta).replace('.',',')+' horas</div><div role="progressbar" aria-label="Progresso da meta de escuta" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+pc+'" style="height:8px;border-radius:4px;background:rgba(255,255,255,.14);margin:8px 0;overflow:hidden"><i style="display:block;height:100%;width:'+pc+'%;background:var(--acc,#30d158)"></i></div>':'<p class="sub" style="margin:6px 0 0">Defina quantas horas de música ou rádio você quer ouvir por semana.</p>')+
  '<form id="metaform" class="add" style="margin:8px 0 0"><label class="sr" for="metah">Horas por semana</label><input id="metah" inputmode="decimal" placeholder="Horas por semana (ex.: 10)" maxlength="5" autocomplete="off"><button>Salvar meta</button></form></section>'}
function anoStats(){const L=(()=>{try{return JSON.parse(ls.get('listen')||'{}')||{}}catch(_){return {}}})();const ano=String(new Date().getFullYear());let sec=0;Object.entries(L).forEach(([k,d])=>{if(k.slice(0,4)!==ano)return;Object.values(d.r||{}).forEach(v=>sec+=v);Object.values(d.s||{}).forEach(v=>sec+=v)});
 let h={};try{h=JSON.parse(ls.get('pomo_hist')||'{}')||{}}catch(_){}let ciclos=0;Object.entries(h).forEach(([k,v])=>{if(k.slice(0,4)===ano)ciclos+=v||0});
 const tarefas=(S.tasks||[]).filter(t=>t.d&&t.mod&&String(new Date(t.mod).getFullYear())===ano).length;return {horas:Math.round(sec/360)/10,ciclos,tarefas,ano}}
function anoHtml(){const a=anoStats();const txt='Meu ano de '+a.ano+': '+String(a.horas).replace('.',',')+' horas de escuta, '+a.ciclos+' ciclos de foco e '+a.tarefas+' tarefas concluídas.';
 return '<section class="tp-card" aria-label="Retrospectiva do ano" style="margin-top:12px"><div class="tp-k">Retrospectiva de '+a.ano+'</div><div style="margin-top:6px;font-size:15px;color:var(--ink)">'+txt+'</div><button type="button" class="chip" data-a="retroShare" style="margin-top:8px">Compartilhar resumo</button></section>'}
function shareRetro(){const a=anoStats();const txt='Meu ano de '+a.ano+': '+String(a.horas).replace('.',',')+' horas de escuta, '+a.ciclos+' ciclos de foco e '+a.tarefas+' tarefas concluídas.';
 if(navigator.share){navigator.share({title:'Retrospectiva '+a.ano,text:txt}).catch(()=>{})}else{navigator.clipboard&&navigator.clipboard.writeText(txt).then(()=>say('Resumo copiado')).catch(()=>say(txt))}}
function linksList(){try{const l=JSON.parse(ls.get('links')||'[]');return Array.isArray(l)?l:[]}catch(_){return []}}
function linksView(){const L=linksList();
 return '<h2>Links</h2><p class="sub" style="margin:0 0 10px">Links fixados. Abrem em uma nova aba.</p>'+
 (L.length?'<ul class="svlist">'+L.map(x=>'<li class="svd" style="display:flex;align-items:center;gap:8px"><a class="grow" href="'+esc(x.u)+'" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline">'+esc(x.n)+'</a><button type="button" class="chip" data-a="linkdel" data-id="'+esc(x.id)+'" aria-label="Remover link: '+esc(x.n)+'">Remover</button></li>').join('')+'</ul>':'<p class="sub">Nenhum link fixado ainda.</p>')+
 '<form id="linkform" class="add" style="margin-top:12px"><label class="sr" for="linkn">Nome do link</label><input id="linkn" placeholder="Nome (ex.: Portal do trabalho)" maxlength="60" autocomplete="off"><label class="sr" for="linku">Endereço (https)</label><input id="linku" placeholder="https://…" maxlength="300" autocomplete="off" inputmode="url"><button>Fixar link</button></form><p class="err" id="linkerr" role="alert"></p>'}
function linkAdd(){const n=$('#linkn').value.trim().slice(0,60),u=$('#linku').value.trim(),err=$('#linkerr');
 if(!n){err.textContent='Informe um nome.';return}
 if(!/^https:\/\/\S+$/i.test(u)){err.textContent='O endereço precisa começar com https://';return}
 const L=linksList();L.push({id:'k'+Date.now().toString(36),n,u});ls.set('links',JSON.stringify(L.slice(0,200)));view();say('Link fixado: '+n)}
function linkDel(id){ls.set('links',JSON.stringify(linksList().filter(x=>x.id!==id)));view();say('Link removido')}
function resumoTexto(){const hoje=new Date(),k=dayKey(hoje);let h={};try{h=JSON.parse(ls.get('pomo_hist')||'{}')||{}}catch(_){}
 const feitas=(S.tasks||[]).filter(t=>t.d&&t.mod&&dayKey(new Date(t.mod))===k).length,ciclos=h[k]||0,ev=(S.ev||[]).filter(r=>r[8]&&r[8]<Date.now()&&dayKey(new Date(r[6]))===k).length;
 let t='Resumo do dia. '+feitas+' tarefa'+(feitas===1?'':'s')+' concluída'+(feitas===1?'':'s')+', '+ciclos+' ciclo'+(ciclos===1?'':'s')+' de foco e '+ev+' compromisso'+(ev===1?'':'s')+' cumprido'+(ev===1?'':'s')+'.';
 if(WX.data&&WX.data.current)t+=' Agora '+Math.round(WX.data.current.temperature_2m)+' graus, '+wmo(WX.data.current.weather_code).t.toLowerCase()+'.';return t}
function lerResumo(){if(!('speechSynthesis' in window)){say('Leitura em voz alta não disponível neste navegador');return}
 const u=new SpeechSynthesisUtterance(resumoTexto());u.lang='pt-BR';speechSynthesis.cancel();speechSynthesis.speak(u)}
function resumoVozHtml(){return '<section class="tp-card" aria-label="Ouvir o resumo" style="margin-bottom:12px"><div class="tp-k">Resumo em voz alta</div><div class="sub" style="margin-top:6px">Lê o resumo do dia e o tempo atual com a voz do aparelho.</div><button type="button" class="chip" data-a="lerResumo" style="margin-top:8px">Ouvir resumo</button></section>'}
function senhaHtml(){return '<section class="tp-card" aria-label="Gerador de senha" style="margin-top:12px"><div class="tp-k">Gerador de senha</div>'+
 '<form id="pwform" class="add" style="margin:8px 0 0"><label for="pwlen" class="sub">Tamanho</label><input id="pwlen" type="number" min="8" max="64" value="16" style="width:80px"><label class="sr" for="pwgo">Gerar</label><button id="pwgo">Gerar senha</button></form>'+
 '<div style="display:flex;flex-wrap:wrap;gap:12px;margin:8px 0;font-size:14px"><label><input type="checkbox" id="pwmai" checked> Maiúsculas</label><label><input type="checkbox" id="pwmin" checked> Minúsculas</label><label><input type="checkbox" id="pwnum" checked> Números</label><label><input type="checkbox" id="pwsim" checked> Símbolos</label></div>'+
 '<div style="display:flex;gap:8px;align-items:center"><code id="pwout" style="flex:1;word-break:break-all;background:var(--row);padding:10px;border-radius:10px;font-size:16px;min-height:22px" aria-live="polite"></code><button type="button" class="chip" data-a="pwcopy">Copiar</button></div>'+
 '<p class="sub" style="margin:6px 0 0">Gerada no seu aparelho com aleatoriedade criptográfica. Não é guardada.</p></section>'}
function senhaGerar(){const len=Math.min(64,Math.max(8,parseInt($('#pwlen').value,10)||16));
 const grupos=[];if($('#pwmai').checked)grupos.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');if($('#pwmin').checked)grupos.push('abcdefghijklmnopqrstuvwxyz');if($('#pwnum').checked)grupos.push('0123456789');if($('#pwsim').checked)grupos.push('!@#$%&*+-=?');
 if(!grupos.length){say('Escolha pelo menos um tipo de caractere');return}
 const all=grupos.join('');const r=new Uint32Array(1);const pick=(set)=>{let x;do{crypto.getRandomValues(r);x=r[0]}while(x>=Math.floor(4294967296/set.length)*set.length);return set[x%set.length]};
 let p=grupos.map(g=>pick(g));while(p.length<len)p.push(pick(all));
 for(let i=p.length-1;i>0;i--){crypto.getRandomValues(r);const j=r[0]%(i+1);[p[i],p[j]]=[p[j],p[i]]}
 $('#pwout').textContent=p.join('')}
function diasProdHtml(){const nomes=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];const c=[0,0,0,0,0,0,0];
 let h={};try{h=JSON.parse(ls.get('pomo_hist')||'{}')||{}}catch(_){}
 Object.entries(h).forEach(([k,v])=>{const d=new Date(k+'T12:00:00');if(!isNaN(d))c[d.getDay()]+=v||0});
 (S.tasks||[]).filter(t=>t.d&&t.mod).forEach(t=>{c[new Date(t.mod).getDay()]+=1});
 const top=c.map((v,i)=>[v,i]).sort((a,b)=>b[0]-a[0]).slice(0,3).filter(x=>x[0]>0);
 const hoje=new Date();const feitas=(S.tasks||[]).filter(t=>t.d&&t.mod&&dayKey(new Date(t.mod))===dayKey(hoje)).length;
 let ciclos=h[dayKey(hoje)]||0;const ev=(S.ev||[]).filter(r=>r[8]&&r[8]<Date.now()&&dayKey(new Date(r[6]))===dayKey(hoje)).length;
 const frase='Hoje: '+feitas+' tarefa(s) concluída(s), '+ciclos+' ciclo(s) de foco e '+ev+' compromisso(s) cumprido(s).';
 return '<section class="tp-card" aria-label="Resumo do dia em uma frase" style="margin-top:12px"><div class="tp-k">Resumo do dia</div><div style="margin-top:6px;font-size:15px;color:var(--ink)">'+frase+'</div></section>'+
  '<section class="tp-card" aria-label="Dias mais produtivos" style="margin-top:12px"><div class="tp-k">Dias mais produtivos</div><div style="margin-top:6px;font-size:15px;color:var(--ink)">'+(top.length?top.map(([v,i])=>nomes[i]+' ('+v+')').join(' · '):'Ainda sem dados suficientes')+'</div><p class="sub" style="margin:6px 0 0">Conta ciclos de foco e tarefas concluídas por dia da semana.</p></section>'}
function utilView(){const now=new Date();
 const rel=WCITIES.map(([n,tz])=>'<div class="svd" style="display:flex;justify-content:space-between;padding:10px 4px"><span>'+n+'</span><b style="font-variant-numeric:tabular-nums">'+now.toLocaleTimeString('pt-BR',{timeZone:tz,hour:'2-digit',minute:'2-digit'})+'</b></div>').join('');
 const opts=(arr)=>arr.map(u=>'<option value="'+u+'">'+u+'</option>').join('');
 return '<h2>Utilidades</h2>'+apresBtnHtml()+resumoVozHtml()+retroHtml()+metaHtml()+anoHtml()+resumoHtml()+diasProdHtml()+fxHtml()+senhaHtml()+
 '<section class="tp-card"><h3 class="tkh" style="margin:0 0 6px">Relógio mundial</h3>'+rel+'</section>'+
 '<section class="tp-card" style="margin-top:12px"><h3 class="tkh" style="margin:0 0 6px">Cronômetro</h3><div id="swv" style="font:700 44px/1 system-ui;font-variant-numeric:tabular-nums;text-align:center;margin:8px 0">'+swFmt(swMs())+'</div><div style="display:flex;gap:8px;justify-content:center"><button type="button" class="chip" data-a="swgo">'+(sw.run?'Pausar':'Iniciar')+'</button><button type="button" class="chip" data-a="swreset">Zerar</button></div></section>'+
 '<section class="tp-card" style="margin-top:12px"><h3 class="tkh" style="margin:0 0 6px">Conversor</h3>'+
 '<div class="add" style="margin:0"><label class="sr" for="cvq">Valor</label><input id="cvq" inputmode="decimal" placeholder="Valor" value="1" autocomplete="off"><label class="sr" for="cvk">Tipo</label><select id="cvk"><option value="len">Comprimento</option><option value="peso">Peso</option><option value="temp">Temperatura</option></select></div>'+
 '<div class="add" style="margin:8px 0 0"><label class="sr" for="cvde">De</label><select id="cvde">'+opts(CONV.len.u)+'</select><label class="sr" for="cvpara">Para</label><select id="cvpara">'+opts(CONV.len.u.slice(1))+'</select></div>'+
 '<p id="cvres" role="status" style="font-size:20px;font-weight:600;margin:10px 0 0">'+'</p></section>'}
function cvRun(){const k=$('#cvk').value,q=parseFloat(String($('#cvq').value).replace(',','.')),de=$('#cvde').value,pa=$('#cvpara').value,r=$('#cvres');
 if(isNaN(q)){r.textContent='Digite um número';return}
 if(k==='temp'){const v=de==='°C'?(pa==='°F'?q*9/5+32:q):(pa==='°C'?(q-32)*5/9:q);r.textContent=q+' '+de+' = '+(Math.round(v*100)/100)+' '+pa;return}
 const f=CONV[k].f,v=q*f[de]/f[pa];r.textContent=q+' '+de+' = '+(Math.round(v*10000)/10000)+' '+pa}
function cvSetUnits(){const k=$('#cvk').value,u=CONV[k].u,de=$('#cvde'),pa=$('#cvpara');const opt=a=>a.map(x=>'<option value="'+x+'">'+x+'</option>').join('');de.innerHTML=opt(u);pa.innerHTML=opt(u);pa.selectedIndex=k==='temp'?1:Math.min(1,u.length-1)}
// ---- Notas rápidas e captura por voz ----
function notesList(){let l=[];try{l=JSON.parse(ls.get('notas_list')||'null')}catch(_){}
 if(!Array.isArray(l)||!l.length){const t=ls.get('notas')||'';l=[{id:'n1',n:'Nota 1',t,at:+(ls.get('notas_at')||Date.now())}];ls.set('notas_list',JSON.stringify(l));ls.set('notas_cur','n1')}
 return l}
function notesSave(l){ls.set('notas_list',JSON.stringify(l));const c=notaCurItem(l);ls.set('notas',c?c.t:'');ls.set('notas_at',String(Date.now()))}
function notaCurItem(l){l=l||notesList();const id=ls.get('notas_cur');return l.find(x=>x.id===id)||l[0]}
function notaSel(id){ls.set('notas_cur',id)}
function notasView(){const L=notesList(),c=notaCurItem(L);
 return '<h2>Notas</h2>'+notasExtraHtml()+'<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px" role="group" aria-label="Suas notas">'+L.map(n=>'<button type="button" class="chip" data-a="nsel" data-id="'+esc(n.id)+'" aria-pressed="'+(n.id===c.id)+'">'+esc(n.n)+'</button>').join('')+'<button type="button" class="chip" data-a="nnew">+ Nova nota</button></div>'+
 '<label class="sr" for="nref">Vincular a</label><select id="nref" style="width:100%;margin-bottom:8px;border-radius:12px;padding:10px;background:var(--row);color:var(--ink);border:0">'+notaRefOpts(c.ref||'')+'</select>'+'<label class="sr" for="ntitle">Nome da nota</label><input id="ntitle" value="'+esc(c.n)+'" maxlength="60" style="width:100%;box-sizing:border-box;margin-bottom:8px;border-radius:12px;padding:10px;background:var(--row);color:var(--ink);border:0;font:inherit">'+
 '<label class="sr" for="notas">Texto da nota</label><textarea id="notas" rows="11" maxlength="5000" placeholder="Escreva aqui. Salva automaticamente neste aparelho." style="width:100%;box-sizing:border-box;border-radius:14px;padding:12px;font:inherit;background:var(--row);color:var(--ink);border:0">'+esc(c.t)+'</textarea>'+
 '<div style="margin-top:8px">'+notaImgsHtml(c)+'</div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;gap:8px;flex-wrap:wrap"><span class="sub" id="nct">'+c.t.length+' de 5000</span><span style="display:flex;gap:8px"><button type="button" class="chip" data-a="ndel">Apagar nota</button><button type="button" class="chip" data-a="ditado" aria-label="Ditar uma ideia">Ditar ideia</button></span></div><p class="sub" id="dtmsg" role="status"></p>'}
function notasExtraHtml(){return '<div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap"><label class="sr" for="nsearch">Pesquisar nas notas</label><input id="nsearch" placeholder="Pesquisar nas notas" maxlength="60" autocomplete="off" style="flex:1 1 160px;border-radius:12px;padding:10px;background:var(--row);color:var(--ink);border:0;font:inherit"><button type="button" class="chip" data-a="nexp">Exportar nota (.txt)</button></div><div id="nres" role="status"></div>'}
function notaSearch(q){const out=$('#nres');if(!out)return;q=(q||'').trim().toLowerCase();if(!q){out.innerHTML='';return}
 const hits=notesList().filter(n=>(n.n+' '+n.t).toLowerCase().includes(q));
 out.innerHTML=hits.length?'<ul class="svlist">'+hits.map(n=>'<li class="svd"><button type="button" class="svdbtn" data-a="nsel" data-id="'+esc(n.id)+'"><span class="grow">'+esc(n.n)+'</span></button></li>').join('')+'</ul>':'<p class="sub">Nenhuma nota encontrada</p>'}
function notaExport(){const c=notaCurItem(notesList());const blob=new Blob([c.n+'\n\n'+c.t],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(c.n||'nota').replace(/[\\/:*?"<>|]+/g,'-')+'.txt';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);say('Nota exportada')}
function notaImgsHtml(c){const imgs=c.imgs||[];return '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">'+imgs.map((src,i)=>'<figure style="margin:0;position:relative"><img src="'+src+'" alt="Foto '+(i+1)+' da nota" style="width:96px;height:96px;object-fit:cover;border-radius:10px"><button type="button" class="chip" data-a="nimgdel" data-i="'+i+'" style="position:absolute;top:4px;right:4px;padding:2px 8px">×</button></figure>').join('')+(imgs.length<3?'<label class="chip" style="cursor:pointer">+ Foto<input type="file" id="nimg" accept="image/*" style="display:none"></label>':'')+'</div>'}
function notaAddImg(file){const L=notesList(),c=notaCurItem(L);if(!file||!file.type.startsWith('image/')){say('Escolha um arquivo de imagem');return}
 const img=new Image(),url=URL.createObjectURL(file);img.onload=()=>{const m=Math.min(1,700/Math.max(img.width,img.height));const cv=document.createElement('canvas');cv.width=Math.round(img.width*m);cv.height=Math.round(img.height*m);cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);
  c.imgs=(c.imgs||[]).concat([cv.toDataURL('image/jpeg',0.72)]).slice(0,3);URL.revokeObjectURL(url);notesSave(L);view();say('Foto adicionada à nota')};img.onerror=()=>say('Não foi possível abrir a imagem');img.src=url}
function notaInput(v){const L=notesList(),c=notaCurItem(L);c.t=v.slice(0,5000);c.at=Date.now();notesSave(L)}
function notaTitle(v){const L=notesList(),c=notaCurItem(L);c.n=(v||'Sem título').slice(0,60);notesSave(L);document.querySelectorAll('#view [data-a="nsel"][data-id="'+c.id+'"]').forEach(b=>{b.textContent=c.n})}
function notaRefOpts(cur){const ts=(S.tasks||[]).filter(t=>!t.d).slice(0,50),es=(S.ev||[]).filter(r=>r[7]&&r[6]>=Date.now()-36e5).slice(0,30);
 return '<option value="">Sem vínculo</option>'+ts.map(t=>'<option value="task:'+esc(String(t.id))+'"'+(cur==='task:'+t.id?' selected':'')+'>Tarefa: '+esc(t.t)+'</option>').join('')+es.map(r=>'<option value="ev:'+esc(r[7])+'"'+(cur==='ev:'+r[7]?' selected':'')+'>Compromisso: '+esc(r[1])+'</option>').join('')}
function notaNewRef(ref){const L=notesList();const id='n'+Date.now().toString(36);L.push({id,n:'Nota',t:'',at:Date.now(),ref:ref||''});notesSave(L);notaSel(id);pick('notas');}
function notaNew(){const L=notesList();const id='n'+Date.now().toString(36);L.push({id,n:'Nova nota',t:'',at:Date.now()});notesSave(L);notaSel(id);view();const t=$('#ntitle');if(t){t.focus();t.select()}}
function notaDel(){let L=notesList();if(L.length<=1){const c=notaCurItem(L);c.t='';c.n='Nota 1';notesSave(L);view();say('Nota limpa');return}const c=notaCurItem(L);S.undoNote={n:c,i:L.indexOf(c)};L=L.filter(x=>x.id!==c.id);notesSave(L);notaSel(L[0].id);view();say('Nota apagada. Use Desfazer para restaurar')}
function ditar(){const R=window.SpeechRecognition||window.webkitSpeechRecognition,m=$('#dtmsg');if(!R){m.textContent='Captura por voz não disponível neste navegador.';return}
 const rec=new R();rec.lang='pt-BR';rec.interimResults=false;m.textContent='Ouvindo…';
 rec.onresult=e=>{const t=e.results[0][0].transcript;const L=notesList(),c=notaCurItem(L);c.t=((c.t?c.t+'\n':'')+t).slice(0,5000);c.at=Date.now();notesSave(L);view();$('#dtmsg').textContent='Ideia adicionada à nota'};
 rec.onerror=()=>{m.textContent='Não foi possível ouvir. Verifique a permissão do microfone.'};rec.start()}
(function(){const q=document.createElement('button');q.id='quick';q.type='button';q.className='ib';q.setAttribute('aria-label','Ação rápida: nova tarefa ou evento');q.innerHTML='<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';document.body.appendChild(q);
 const menu=document.createElement('div');menu.id='qmenu';menu.hidden=true;menu.setAttribute('role','menu');menu.innerHTML='<button type="button" role="menuitem" data-q="task">Nova tarefa</button><button type="button" role="menuitem" data-q="evt">Novo evento</button>';document.body.appendChild(menu);
 q.addEventListener('click',()=>{menu.hidden=!menu.hidden;if(!menu.hidden)menu.querySelector('button').focus()});
 menu.addEventListener('click',e=>{const b=e.target.closest('[data-q]');if(!b)return;menu.hidden=true;
  if(b.dataset.q==='task'){pick('tasks');const i=$('#nt');if(i)i.focus()}else{pick('cal');setTimeout(()=>{const f=$('#evt');if(f)f.focus()},60)}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){menu.hidden=true;q.focus()}});
})();
function desfazerGeral(){const u=UNDO_STACK.pop();if(!u){say('Nada para desfazer');return false}
 UNDO_BUSY=true;try{ls0.set(u.k,u.v);if(u.k==='tasks'){try{S.tasks=JSON.parse(u.v)||[]}catch(_){}}}finally{UNDO_BUSY=false}
 view();say('Desfeito');return true}
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&!e.shiftKey&&(e.key==='z'||e.key==='Z')){const t=e.target;if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))return;e.preventDefault();desfazerGeral()}});
function buscaView(){return '<h2>Buscar</h2><label class="sr" for="gq">Buscar em tudo</label><input id="gq" type="search" placeholder="Buscar em tarefas, notas, compromissos e links" maxlength="80" autocomplete="off" style="width:100%;box-sizing:border-box;border-radius:14px;padding:12px;background:var(--row);color:var(--ink);border:0;font:inherit;margin-bottom:10px"><div id="gres" role="status"></div>'}
function buscaResultados(q){const out=$('#gres');if(!out)return;q=(q||'').trim().toLowerCase();if(q.length<2){out.innerHTML='<p class="sub">Digite pelo menos 2 letras.</p>';return}
 const has=x=>String(x||'').toLowerCase().includes(q);const itens=[];
 (S.tasks||[]).forEach(t=>{if(has(t.t)||has(t.tag))itens.push({tipo:'Tarefa',txt:t.t,go:'tasks'})});
 notesList().forEach(n=>{if(has(n.n)||has(n.t)||has(n.tags))itens.push({tipo:'Nota',txt:n.n,go:'notas',id:n.id})});
 (S.ev||[]).forEach(r=>{if(has(r[1]))itens.push({tipo:'Compromisso',txt:r[1],go:'cal'})});
 linksList().forEach(l=>{if(has(l.n)||has(l.u))itens.push({tipo:'Link',txt:l.n,go:'links'})});
 let inbox=[];try{inbox=JSON.parse(ls.get('inbox')||'[]')||[]}catch(_){}
 inbox.forEach(x=>{if(has(x.t))itens.push({tipo:'Ideia',txt:x.t,go:'tasks'})});
 out.innerHTML=itens.length?'<ul class="svlist">'+itens.slice(0,50).map((x,i)=>'<li class="svd"><button type="button" class="svdbtn" data-a="gopen" data-go="'+x.go+'"'+(x.id?' data-id="'+esc(x.id)+'"':'')+'><span class="grow"><span class="sub">'+x.tipo+' · </span>'+esc(x.txt)+'</span></button></li>').join('')+'</ul>':'<p class="sub">Nada encontrado para "'+esc(q)+'".</p>'}
function undoUI(){let b=document.getElementById('undobtn');
 if(!UNDO_STACK.length){if(b)b.remove();return}
 if(!b){b=document.createElement('button');b.id='undobtn';b.type='button';b.textContent='Desfazer';b.setAttribute('aria-label','Desfazer última alteração');b.addEventListener('click',()=>desfazerGeral());document.body.appendChild(b)}}
/* ===== Livros (EPUB, versão 1) ===== */
const LIV_DB='painel-livros';let LIV_IDB=null;const LIV_MEM={};const LIV_OPEN={};
function livrosMeta(){try{const l=JSON.parse(ls.get('livros')||'[]');return Array.isArray(l)?l:[]}catch(_){return []}}
function livrosSave(l){ls.set('livros',JSON.stringify(l.slice(0,300)))}
function idbAbrir(){if(LIV_IDB)return Promise.resolve(LIV_IDB);if(!window.indexedDB)return Promise.resolve(null);
 return new Promise(res=>{const r=indexedDB.open(LIV_DB,1);r.onupgradeneeded=()=>r.result.createObjectStore('arquivos');r.onsuccess=()=>{LIV_IDB=r.result;res(LIV_IDB)};r.onerror=()=>res(null)})}
async function idbPut(id,blob){const db=await idbAbrir();if(!db){LIV_MEM[id]=blob;return true}return new Promise(res=>{const t=db.transaction('arquivos','readwrite');t.objectStore('arquivos').put(blob,id);t.oncomplete=()=>res(true);t.onerror=()=>res(false)})}
async function idbGet(id){if(LIV_MEM[id])return LIV_MEM[id];const db=await idbAbrir();if(!db)return null;return new Promise(res=>{const q=db.transaction('arquivos').objectStore('arquivos').get(id);q.onsuccess=()=>res(q.result||null);q.onerror=()=>res(null)})}
async function idbDel(id){delete LIV_MEM[id];const db=await idbAbrir();if(!db)return;db.transaction('arquivos','readwrite').objectStore('arquivos').delete(id)}
async function sha256Hex(buf){if(globalThis.crypto&&crypto.subtle){const h=await crypto.subtle.digest('SHA-256',buf);return Array.from(new Uint8Array(h)).map(b=>b.toString(16).padStart(2,'0')).join('')}let h=2166136261;const u=new Uint8Array(buf);for(let i=0;i<u.length;i++){h^=u[i];h=Math.imul(h,16777619)>>>0}return 'f'+h.toString(16)+'-'+u.length}
function loadJSZip(){if(window.JSZip)return Promise.resolve(window.JSZip);return new Promise((res,rej)=>{const sc=document.createElement('script');sc.src='https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';sc.onload=()=>res(window.JSZip);sc.onerror=()=>rej(new Error('jszip'));document.head.appendChild(sc)})}
function dirOf(p){const i=p.lastIndexOf('/');return i<0?'':p.slice(0,i+1)}
function normPath(p){const out=[];p.split('/').forEach(x=>{if(x==='..')out.pop();else if(x&&x!=='.')out.push(x)});return out.join('/')}
async function epubLer(zip){const cont=zip.file('META-INF/container.xml');if(!cont)throw new Error('Arquivo não parece um EPUB');
 const cx=new DOMParser().parseFromString(await cont.async('string'),'application/xml');const rf=cx.querySelector('rootfile');if(!rf)throw new Error('EPUB sem arquivo principal');
 const opfPath=rf.getAttribute('full-path');const opf=new DOMParser().parseFromString(await zip.file(opfPath).async('string'),'application/xml');const base=dirOf(opfPath);
 const titulo=(opf.getElementsByTagNameNS('*','title')[0]||{}).textContent||'Sem título';const autor=(opf.getElementsByTagNameNS('*','creator')[0]||{}).textContent||'';
 const man={};[...opf.getElementsByTagNameNS('*','item')].forEach(it=>{man[it.getAttribute('id')]={href:it.getAttribute('href'),tipo:it.getAttribute('media-type')||'',props:it.getAttribute('properties')||''}});
 const spine=[...opf.getElementsByTagNameNS('*','itemref')].map(r=>man[r.getAttribute('idref')]).filter(x=>x&&/html|xml/.test(x.tipo)).map(x=>normPath(base+x.href));
 let capaPath=null;const metaCover=[...opf.getElementsByTagNameNS('*','meta')].find(m=>m.getAttribute('name')==='cover');
 if(metaCover&&man[metaCover.getAttribute('content')])capaPath=normPath(base+man[metaCover.getAttribute('content')].href);
 else{const it=Object.values(man).find(x=>/cover-image/.test(x.props));if(it)capaPath=normPath(base+it.href)}
 const drm=!!zip.file('META-INF/encryption.xml');
 return {titulo:titulo.trim().slice(0,160),autor:autor.trim().slice(0,120),spine,capaPath,drm}}
async function livroNuvemEnviar(id,blob){if(!msOn())return false;try{if(!await msEnsure())return false;const r=await fetch('https://graph.microsoft.com/v1.0/me/drive/special/approot:/livros/'+id+'.epub:/content',{method:'PUT',headers:{Authorization:'Bearer '+S.ms,'Content-Type':'application/epub+zip'},body:blob});return r.ok}catch(_){return false}}
async function livroNuvemBaixar(id){if(!msOn())return null;try{if(!await msEnsure())return null;const r=await fetch('https://graph.microsoft.com/v1.0/me/drive/special/approot:/livros/'+id+'.epub:/content',{headers:{Authorization:'Bearer '+S.ms}});if(!r.ok)return null;const b=await r.blob();await idbPut(id,b);return b}catch(_){return null}}
async function livroAdicionar(file){const err=$('#livErr');if(err)err.textContent='';
 if(!file||!/\.(epub|pdf)$/i.test(file.name)){if(err)err.textContent='Escolha um arquivo .epub ou .pdf';return}
 if(/\.pdf$/i.test(file.name)){await pdfAdicionar(file);return}
 try{const JS=await loadJSZip();const buf=await file.arrayBuffer();const id=await sha256Hex(buf);const zip=await JS.loadAsync(buf);const info=await epubLer(zip);
  if(info.drm){if(err)err.textContent='Este EPUB tem proteção (DRM) e não pode ser lido aqui.';return}
  let capa='';if(info.capaPath&&zip.file(info.capaPath)){try{const b=await zip.file(info.capaPath).async('base64');const m=info.capaPath.match(/\.(\w+)$/);capa='data:image/'+(m?m[1].replace('jpg','jpeg'):'jpeg')+';base64,'+b;if(capa.length>120000)capa=''}catch(_){}}
  const blobL=new Blob([buf],{type:'application/epub+zip'});await idbPut(id,blobL);livroNuvemEnviar(id,blobL);
  const L=livrosMeta();const ex=L.find(x=>x.id===id);
  if(ex){ex.n=file.name.slice(0,120);if(!ex.capa&&capa)ex.capa=capa}
  else L.unshift({id,t:info.titulo,a:info.autor,n:file.name.slice(0,120),cap:info.spine.length,cur:0,fr:0,pct:0,at:Date.now(),capa});
  livrosSave(L);view();say('Livro adicionado: '+info.titulo)}
 catch(e){if(err)err.textContent='Não foi possível abrir este EPUB: '+(e&&e.message||'erro')}}
function livrosView(){const L=livrosMeta();
 return '<h2>Livros</h2><div class="add" style="margin:0 0 10px"><label class="sr" for="livFile">Adicionar arquivo EPUB</label><input type="file" id="livFile" accept=".epub,.pdf,application/epub+zip,application/pdf"></div><p id="livErr" class="err" role="alert"></p>'+
  (L.length?'<ul class="svlist">'+L.map(x=>'<li class="svd" style="display:flex;gap:10px;align-items:center;padding:10px 0">'+(x.capa?'<img src="'+x.capa+'" alt="" width="48" height="66" style="border-radius:6px;object-fit:cover;flex:none">':'<span aria-hidden="true" style="width:48px;height:66px;border-radius:6px;background:var(--row);flex:none"></span>')+
   '<span class="grow" style="min-width:0"><b style="display:block;overflow-wrap:anywhere">'+esc(x.t)+'</b><span class="sub">'+esc(x.a)+' · '+(x.pct||0)+'% lido</span><span class="sub" id="livst'+esc(x.id.slice(0,8))+'" style="display:block;font-size:12px"></span></span>'+
   '<button type="button" class="chip" data-a="livAbrir" data-id="'+esc(x.id)+'">Continuar</button><button type="button" class="chip" data-a="livRemover" data-id="'+esc(x.id)+'" aria-label="Remover '+esc(x.t)+'">Remover</button></li>').join('')+'</ul>':'<p class="sub">Nenhum livro. Adicione um arquivo EPUB sem DRM.</p>')+
  '<div id="livLeitor"></div>'}
async function livrosAfter(){const L=livrosMeta();for(const x of L){const el=$('#livst'+x.id.slice(0,8));if(!el)continue;const f=await idbGet(x.id);if(!f)el.textContent='Arquivo não está neste aparelho. Adicione-o para continuar.'}
 const fi=$('#livFile');if(fi)fi.onchange=()=>{if(fi.files&&fi.files[0])livroAdicionar(fi.files[0])};
 if(LIV_OPEN.id&&$('#livLeitor'))livroMostrar()}
async function livroAbrir(id){let f=await idbGet(id);if(!f)f=await livroNuvemBaixar(id);const x=livrosMeta().find(y=>y.id===id);
 if(!f){say('Adicione o arquivo deste livro neste aparelho');return}
 if(x&&x.tipo==='pdf'){pdfAbrir(id,f,x);return}
 const JS=await loadJSZip();const zip=await JS.loadAsync(f);const info=await epubLer(zip);
 LIV_OPEN.id=id;LIV_OPEN.tipo='epub';LIV_OPEN.buf=f.slice?await f.arrayBuffer():null;LIV_OPEN.cfiSalvo=x&&x.cfi||null;LIV_OPEN.zip=zip;LIV_OPEN.spine=info.spine;LIV_OPEN.titulo=x?x.t:info.titulo;LIV_OPEN.cur=x&&x.cur<info.spine.length?x.cur:0;LIV_OPEN.fr=x?x.fr||0:0;LIV_OPEN.urls=[];
 view();livroMostrar()}
async function livroCapitulo(){const sp=LIV_OPEN.spine,zip=LIV_OPEN.zip,i=LIV_OPEN.cur;if(!sp||!sp[i])return '';
 const path=sp[i];const txt=await zip.file(path).async('string');const doc=new DOMParser().parseFromString(txt,'text/html');
 doc.querySelectorAll('script,style,link,iframe,object,embed').forEach(n=>n.remove());
 doc.querySelectorAll('*').forEach(n=>[...n.attributes].forEach(a=>{if(/^on/i.test(a.name)||/^javascript:/i.test(a.value))n.removeAttribute(a.name)}));
 const dir=dirOf(path);for(const img of doc.querySelectorAll('img,image')){const src=img.getAttribute('src')||img.getAttribute('xlink:href')||img.getAttribute('href');if(!src||/^(https?:|data:)/i.test(src))continue;const f=zip.file(normPath(dir+src));if(!f)continue;const b=await f.async('blob');const u=URL.createObjectURL(b);LIV_OPEN.urls.push(u);img.setAttribute('src',u)}
 return doc.body?doc.body.innerHTML:''}
async function livroMostrar(){const box=$('#livLeitor');if(!box)return;if(LIV_OPEN.tipo==='pdf'){pdfMostrar();return}if(!LIV_OPEN.zip)return;
 const html=await livroCapitulo();const n=LIV_OPEN.spine.length;
 box.innerHTML='<section aria-label="Leitor de livros" style="margin-top:14px"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><b style="overflow-wrap:anywhere">'+esc(LIV_OPEN.titulo)+'</b><button type="button" class="chip" data-a="livFechar">Fechar</button></div>'+
  '<div style="display:flex;gap:8px;align-items:center;margin:8px 0;flex-wrap:wrap"><button type="button" class="chip" data-a="livAnt" '+(LIV_OPEN.cur<=0?'disabled':'')+'>‹ Anterior</button><span class="sub" id="livPos">Capítulo '+(LIV_OPEN.cur+1)+' de '+n+'</span><button type="button" class="chip" data-a="livPro" '+(LIV_OPEN.cur>=n-1?'disabled':'')+'>Próximo ›</button></div>'+
  '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:6px 0"><button type="button" class="chip" data-a="livMarca">Marcar esta posição</button></div>'+livroMarcasHtml()+livroBuscaHtml()+'<div id="livTexto" tabindex="0" aria-label="Texto do capítulo" style="max-height:60vh;overflow-y:auto;line-height:1.7;font-size:17px;padding:12px;border-radius:14px;background:var(--row)">'+html+'</div></section>';
 if(await epubCfiMostrar(box)){livroProgresso();return}
 const t=$('#livTexto');if(t){t.scrollTop=(LIV_OPEN.fr||0)*t.scrollHeight;t.addEventListener('scroll',()=>{const max=t.scrollHeight-t.clientHeight;LIV_OPEN.fr=max>0?t.scrollTop/max:0;livroProgresso()},{passive:true})}
 livroProgresso()}
function livroMarcasHtml(){const x=livrosMeta().find(y=>y.id===LIV_OPEN.id);const m=(x&&x.marks)||[];if(!m.length)return '';
 return '<ul class="svlist" aria-label="Marcadores" style="margin:6px 0">'+m.map((k,i)=>'<li class="svd" style="display:flex;gap:8px;align-items:center"><button type="button" class="chip" data-a="livIrMarca" data-i="'+i+'">'+esc(k.l)+'</button><button type="button" class="chip" data-a="livDelMarca" data-i="'+i+'" aria-label="Remover marcador">×</button></li>').join('')+'</ul>'}
function livroBuscaHtml(){return '<form id="livbusca" class="add" style="margin:6px 0"><label class="sr" for="livq">Buscar no livro</label><input id="livq" maxlength="60" placeholder="Buscar no livro" autocomplete="off"><button>Buscar</button></form><div id="livres" role="status"></div>'}
async function livroBuscar(q){const out=$('#livres');if(!out||!LIV_OPEN.zip)return;q=(q||'').trim();if(q.length<2){out.textContent='Digite pelo menos 2 letras';return}
 out.textContent='Buscando…';const ql=q.toLowerCase();const hits=[];
 for(let i=0;i<LIV_OPEN.spine.length&&hits.length<40;i++){const f=LIV_OPEN.zip.file(LIV_OPEN.spine[i]);if(!f)continue;const doc=new DOMParser().parseFromString(await f.async('string'),'text/html');const txt=(doc.body&&doc.body.textContent||'').replace(/\s+/g,' ');
  let p=txt.toLowerCase().indexOf(ql);let n=0;while(p>=0&&n<3&&hits.length<40){hits.push({c:i,trecho:txt.slice(Math.max(0,p-40),p+q.length+40)});n++;p=txt.toLowerCase().indexOf(ql,p+q.length)}}
 out.innerHTML=hits.length?'<ul class="svlist">'+hits.map((h,k)=>'<li class="svd"><button type="button" class="svdbtn" data-a="livIrCap" data-c="'+h.c+'"><span class="grow"><span class="sub">Capítulo '+(h.c+1)+' · </span>…'+esc(h.trecho)+'…</span></button></li>').join('')+'</ul>':'<p class="sub">Nenhum resultado para "'+esc(q)+'".</p>'}
function livroProgresso(){if(!LIV_OPEN.id)return;const n=LIV_OPEN.spine.length||1;const pct=Math.round(((LIV_OPEN.cur+(LIV_OPEN.fr||0))/n)*100);
 const L=livrosMeta();const x=L.find(y=>y.id===LIV_OPEN.id);if(!x)return;x.cur=LIV_OPEN.cur;x.fr=Math.round((LIV_OPEN.fr||0)*1000)/1000;x.pct=Math.min(100,pct);x.at=Date.now();livrosSave(L)}
/* ===== EPUB com posição exata (CFI) via epub.js ===== */
let epubJsReady=null;
function loadEpubJs(){if(window.ePub)return Promise.resolve(window.ePub);if(epubJsReady)return epubJsReady;epubJsReady=new Promise((res,rej)=>{const sc=document.createElement('script');sc.src='https://cdnjs.cloudflare.com/ajax/libs/epub.js/0.3.93/epub.min.js';sc.onload=()=>res(window.ePub);sc.onerror=()=>{epubJsReady=null;rej(new Error('epubjs'))};document.head.appendChild(sc)});return epubJsReady}
function livroSalvarPos(cfi,idx,pct){const L=livrosMeta();const x=L.find(y=>y.id===LIV_OPEN.id);if(!x)return;if(cfi)x.cfi=cfi;if(idx!=null)x.cur=idx;if(pct!=null)x.pct=Math.min(100,pct);x.at=Date.now();livrosSave(L)}
async function epubCfiMostrar(box){const alvo=box.querySelector('#livTexto');if(!alvo||!LIV_OPEN.buf)return false;let ePub;try{ePub=await loadEpubJs()}catch(_){return false}
 try{if(LIV_OPEN.rend&&LIV_OPEN.rend.destroy)LIV_OPEN.rend.destroy();alvo.innerHTML='';alvo.style.overflow='hidden';
  const book=ePub(LIV_OPEN.buf);const rend=book.renderTo(alvo,{width:'100%',height:460,spread:'none'});LIV_OPEN.book=book;LIV_OPEN.rend=rend;LIV_OPEN.cfi=LIV_OPEN.cfiSalvo||null;
  rend.on('relocated',loc=>{const idx=loc&&loc.start?loc.start.index:0;const n=(LIV_OPEN.spine&&LIV_OPEN.spine.length)||1;LIV_OPEN.cur=idx;livroSalvarPos(loc&&loc.start?loc.start.cfi:null,idx,Math.round(((idx+1)/n)*100));const p=$('#livPos');if(p)p.textContent='Capítulo '+(idx+1)+' de '+n});
  await rend.display(LIV_OPEN.cfiSalvo||undefined);return true}
 catch(_){return false}}
/* ===== PDF (pdf.js) ===== */
let pdfJsReady=null;
function loadPdfJs(){if(window.pdfjsLib)return Promise.resolve(window.pdfjsLib);if(pdfJsReady)return pdfJsReady;pdfJsReady=new Promise((res,rej)=>{const sc=document.createElement('script');sc.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';sc.onload=()=>{try{window.pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'}catch(_){}res(window.pdfjsLib)};sc.onerror=()=>{pdfJsReady=null;rej(new Error('pdfjs'))};document.head.appendChild(sc)});return pdfJsReady}
async function pdfAdicionar(file){const err=$('#livErr');try{const lib=await loadPdfJs();const buf=await file.arrayBuffer();const id=await sha256Hex(buf);const doc=await lib.getDocument({data:buf.slice(0)}).promise;
  const blob=new Blob([buf],{type:'application/pdf'});await idbPut(id,blob);livroNuvemEnviar(id,blob);
  const L=livrosMeta();const ex=L.find(x=>x.id===id);const t=file.name.replace(/\.pdf$/i,'').slice(0,160);
  if(ex){ex.n=file.name.slice(0,120)}else L.unshift({id,t,a:'',n:file.name.slice(0,120),tipo:'pdf',cap:doc.numPages,cur:0,fr:0,pct:0,at:Date.now()});
  livrosSave(L);view();say('PDF adicionado: '+t)}
 catch(e){if(err)err.textContent='Não foi possível abrir este PDF: '+(e&&e.message||'erro')}}
async function pdfAbrir(id,f,x){const lib=await loadPdfJs();const buf=await f.arrayBuffer();const doc=await lib.getDocument({data:buf}).promise;
 LIV_OPEN.id=id;LIV_OPEN.tipo='pdf';LIV_OPEN.pdf=doc;LIV_OPEN.total=doc.numPages;LIV_OPEN.cur=Math.min(doc.numPages-1,x&&x.cur||0);LIV_OPEN.titulo=x?x.t:'PDF';LIV_OPEN.urls=[];LIV_OPEN.spine=[];view();pdfMostrar()}
async function pdfMostrar(){const box=$('#livLeitor');if(!box||!LIV_OPEN.pdf)return;const n=LIV_OPEN.total;const p=LIV_OPEN.cur+1;
 box.innerHTML='<section aria-label="Leitor de PDF" style="margin-top:14px"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><b style="overflow-wrap:anywhere">'+esc(LIV_OPEN.titulo)+'</b><button type="button" class="chip" data-a="livFechar">Fechar</button></div>'+
  '<div style="display:flex;gap:8px;align-items:center;margin:8px 0;flex-wrap:wrap"><button type="button" class="chip" data-a="pdfAnt" '+(p<=1?'disabled':'')+'>‹ Anterior</button><span class="sub" id="pdfPos">Página '+p+' de '+n+'</span><button type="button" class="chip" data-a="pdfPro" '+(p>=n?'disabled':'')+'>Próxima ›</button></div>'+
  '<div id="pdfBox" style="overflow:auto;max-height:60vh;background:#222;border-radius:12px;padding:8px;text-align:center"><canvas id="pdfCv" aria-label="Página '+p+' do PDF" role="img"></canvas></div>'+livroMarcasHtml()+livroBuscaHtml()+'</section>';
 try{const page=await LIV_OPEN.pdf.getPage(p);const base=page.getViewport({scale:1});const ancho=Math.min(680,(box.clientWidth||360)-24);const sc=ancho/base.width;const vp=page.getViewport({scale:sc});const cv=$('#pdfCv');if(cv){cv.width=vp.width;cv.height=vp.height;const ctx=cv.getContext&&cv.getContext('2d');if(ctx)await page.render({canvasContext:ctx,viewport:vp}).promise}}catch(_){}
 const x=livrosMeta().find(y=>y.id===LIV_OPEN.id);if(x){x.cur=LIV_OPEN.cur;x.pct=Math.round((p/n)*100);x.at=Date.now();livrosSave(livrosMeta().map(y=>y.id===x.id?x:y))}}
async function pdfIr(d){const n=LIV_OPEN.total;LIV_OPEN.cur=Math.min(n-1,Math.max(0,LIV_OPEN.cur+d));pdfMostrar()}
async function pdfBuscar(q){const out=$('#livres');if(!out||!LIV_OPEN.pdf)return;q=(q||'').trim().toLowerCase();if(q.length<2){out.textContent='Digite pelo menos 2 letras';return}out.textContent='Buscando…';const hits=[];
 for(let i=1;i<=LIV_OPEN.total&&hits.length<40;i++){const pg=await LIV_OPEN.pdf.getPage(i);const tc=await pg.getTextContent();const txt=tc.items.map(it=>it.str).join(' ').replace(/\s+/g,' ');const k=txt.toLowerCase().indexOf(q);if(k>=0)hits.push({c:i-1,trecho:txt.slice(Math.max(0,k-40),k+q.length+40)})}
 out.innerHTML=hits.length?'<ul class="svlist">'+hits.map(h=>'<li class="svd"><button type="button" class="svdbtn" data-a="pdfIrPag" data-c="'+h.c+'"><span class="grow"><span class="sub">Página '+(h.c+1)+' · </span>…'+esc(h.trecho)+'…</span></button></li>').join('')+'</ul>':'<p class="sub">Nenhum resultado para "'+esc(q)+'".</p>'}
async function livroIr(d){if(LIV_OPEN.tipo==='pdf'){pdfIr(d);return}if(LIV_OPEN.rend&&LIV_OPEN.book){d>0?LIV_OPEN.rend.next():LIV_OPEN.rend.prev();return}const n=LIV_OPEN.spine.length;LIV_OPEN.cur=Math.min(n-1,Math.max(0,LIV_OPEN.cur+d));LIV_OPEN.fr=0;livroProgresso();LIV_OPEN.urls.forEach(u=>URL.revokeObjectURL(u));LIV_OPEN.urls=[];livroMostrar()}
function livroFechar(){LIV_OPEN.urls&&LIV_OPEN.urls.forEach(u=>URL.revokeObjectURL(u));for(const k of Object.keys(LIV_OPEN))delete LIV_OPEN[k];view()}
async function livroRemover(id){const L=livrosMeta().filter(x=>x.id!==id);livrosSave(L);await idbDel(id);if(LIV_OPEN.id===id)livroFechar();else view();say('Livro removido')}
document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-a]');if(!t)return;const a=t.dataset.a;
 if(a==='livAbrir'){livroAbrir(t.dataset.id);return}
 if(a==='livRemover'){livroRemover(t.dataset.id);return}
 if(a==='livFechar'){livroFechar();return}
 if(a==='livAnt'){livroIr(-1);return}
 if(a==='pdfAnt'){pdfIr(-1);return}
 if(a==='pdfPro'){pdfIr(1);return}
 if(a==='pdfIrPag'){LIV_OPEN.cur=+t.dataset.c;pdfMostrar();return}
 if(a==='livMarca'){const x=livrosMeta().find(y=>y.id===LIV_OPEN.id);if(!x)return;x.marks=(x.marks||[]).concat([{c:LIV_OPEN.cur,fr:Math.round((LIV_OPEN.fr||0)*1000)/1000,l:'Capítulo '+(LIV_OPEN.cur+1)+' · '+Math.round((LIV_OPEN.fr||0)*100)+'%',at:Date.now()}]).slice(-30);livrosSave(livrosMeta().map(y=>y.id===x.id?x:y));livroMostrar();say('Marcador criado');return}
 if(a==='livIrMarca'||a==='livIrCap'){const x=livrosMeta().find(y=>y.id===LIV_OPEN.id);const k=a==='livIrCap'?{c:+t.dataset.c,fr:0}:((x&&x.marks)||[])[+t.dataset.i];if(!k)return;LIV_OPEN.cur=k.c;LIV_OPEN.fr=k.fr||0;livroProgresso();LIV_OPEN.urls.forEach(u=>URL.revokeObjectURL(u));LIV_OPEN.urls=[];livroMostrar();return}
 if(a==='livDelMarca'){const x=livrosMeta().find(y=>y.id===LIV_OPEN.id);if(x){x.marks=(x.marks||[]).filter((_,i)=>i!==+t.dataset.i);livrosSave(livrosMeta().map(y=>y.id===x.id?x:y));livroMostrar()}return}
 if(a==='livPro'){livroIr(1);return}});
/* ===== Prioridade das tarefas ===== */
const PRI_LABEL={alta:'Alta',media:'Média',baixa:'Baixa'};
function prioDom(){const v=$('#view');if(!v)return;v.querySelectorAll('li[data-r]').forEach(li=>{const i=+li.dataset.r,t=S.tasks[i];if(!t||li.querySelector('[data-a="tpri"]'))return;
 const b=document.createElement('button');b.type='button';b.className='chip';b.dataset.a='tpri';b.dataset.i=String(i);b.style.marginLeft='4px';
 b.setAttribute('aria-label','Prioridade de '+t.t+': '+(PRI_LABEL[t.pri]||'nenhuma')+'. Alterar');b.textContent=PRI_LABEL[t.pri]||'Prioridade';
 if(t.pri==='alta')b.style.color='#ff453a';li.appendChild(b)})}
function priCiclo(i){const t=S.tasks[i];if(!t)return;const ordem=[undefined,'alta','media','baixa'];const k=ordem.indexOf(t.pri);t.pri=ordem[(k+1)%ordem.length];if(!t.pri)delete t.pri;t.mod=Date.now();t.dy=true;save();view();say('Prioridade: '+(PRI_LABEL[t.pri]||'nenhuma'))}
/* ===== Modo apresentação ===== */
function apresBtnHtml(){return '<section class="tp-card" aria-label="Modo apresentação" style="margin-bottom:12px"><div class="tp-k">Modo apresentação</div><div class="sub" style="margin-top:6px">Tela grande com hora, clima e próximo compromisso. Toque em Sair ou pressione Esc para voltar.</div><button type="button" class="chip" data-a="apres" style="margin-top:8px">Abrir apresentação</button></section>'}
function apresRender(){let el=document.getElementById('apres');if(!el){el=document.createElement('div');el.id='apres';el.setAttribute('role','region');el.setAttribute('aria-label','Modo apresentação');document.body.appendChild(el)}
 const agora=new Date();const hora=agora.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});const data=agora.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'});
 const c=WX.data&&WX.data.current;const clima=c?Math.round(c.temperature_2m)+'° · '+wmo(c.weather_code).t:'Clima indisponível';
 const prox=(S.ev||[]).filter(r=>r[6]&&r[6]>Date.now()).sort((a,b)=>a[6]-b[6])[0];
 el.innerHTML='<div style="text-align:center;padding:24px"><div style="font:200 min(26vw,180px)/1 system-ui;font-variant-numeric:tabular-nums">'+hora+'</div><div style="font-size:min(4vw,28px);margin-top:8px;text-transform:capitalize">'+data+'</div><div style="font-size:min(4vw,30px);margin-top:28px">'+clima+'</div><div style="font-size:min(3.5vw,24px);margin-top:20px">'+(prox?'Próximo: '+esc(prox[1])+' às '+new Date(prox[6]).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}):'Sem compromissos próximos')+'</div><button type="button" class="chip" data-a="apresSair" style="margin-top:30px;min-height:48px">Sair</button></div>';
 el.hidden=false}
function apresAbrir(){S.apres=true;apresRender();clearInterval(S.apresT);S.apresT=setInterval(()=>{if(S.apres)apresRender()},30000);const b=document.querySelector('#apres [data-a="apresSair"]');if(b)b.focus()}
function apresSair(){S.apres=false;clearInterval(S.apresT);const el=document.getElementById('apres');if(el)el.hidden=true}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&S.apres)apresSair()});
/* ===== Bem-estar: hábitos, humor e estudo ===== */
function jsonLS(k,def){try{const v=JSON.parse(ls.get(k)||'null');return v==null?def:v}catch(_){return def}}
function hojeK(){return dayKey(new Date())}
function sequencia(dias){const set=new Set(dias);let n=0;const d=new Date();if(!set.has(dayKey(d)))d.setDate(d.getDate()-1);while(set.has(dayKey(d))){n++;d.setDate(d.getDate()-1)}return n}
function habitosHtml(){const H=jsonLS('habitos',[]);const hj=hojeK();
 return '<section class="tp-card" aria-label="Hábitos diários" style="margin-bottom:12px"><div class="tp-k">Hábitos de hoje</div>'+
  (H.length?'<ul class="svlist">'+H.map(h=>{const feito=(h.dias||[]).includes(hj);return '<li class="svd" style="display:flex;gap:8px;align-items:center;padding:8px 0"><button type="button" class="chip" data-a="habito" data-id="'+esc(h.id)+'" aria-pressed="'+feito+'">'+(feito?'✓ ':'')+esc(h.n)+'</button><span class="grow sub">sequência: '+sequencia(h.dias||[])+' dia(s)</span><button type="button" class="chip" data-a="habitoDel" data-id="'+esc(h.id)+'" aria-label="Remover hábito '+esc(h.n)+'">Remover</button></li>'}).join('')+'</ul>':'<p class="sub">Nenhum hábito. Crie um abaixo.</p>')+
  '<form id="habform" class="add" style="margin-top:8px"><label class="sr" for="habn">Novo hábito</label><input id="habn" maxlength="40" placeholder="Ex.: beber água, ler 10 páginas" autocomplete="off"><button>Criar hábito</button></form></section>'}
function humorHtml(){const M=jsonLS('humor',{});const dias=[...Array(7).keys()].reverse().map(i=>dayKey(new Date(Date.now()-i*864e5)));const hj=M[hojeK()];
 const emo=['','😞','😕','😐','🙂','😄'];
 return '<section class="tp-card" aria-label="Registro de humor" style="margin-bottom:12px"><div class="tp-k">Como você está hoje?</div><div class="redact" role="group" aria-label="Humor de hoje" style="margin:8px 0">'+[1,2,3,4,5].map(n=>'<button type="button" class="chip" data-a="humor" data-v="'+n+'" aria-pressed="'+(hj===n)+'" aria-label="Humor '+n+' de 5">'+emo[n]+'</button>').join('')+'</div>'+
  '<div style="display:flex;align-items:flex-end;gap:6px;height:80px" role="img" aria-label="Humor dos últimos 7 dias">'+dias.map(k=>{const v=M[k]||0;return '<div style="flex:1;text-align:center;font-size:11px"><i style="display:block;height:'+(v?v*16:3)+'px;background:'+(v?'#ff375f':'rgba(255,255,255,.15)')+';border-radius:4px"></i>'+k.slice(8)+'</div>'}).join('')+'</div></section>'}
function estudoHtml(){const S2=jsonLS('estudo_sessoes',[]);const run=jsonLS('estudo_run',null);const tot={};S2.forEach(x=>{tot[x.m]=(tot[x.m]||0)+x.ms});
 return '<section class="tp-card" aria-label="Sessões de estudo" style="margin-bottom:12px"><div class="tp-k">Sessões de estudo</div>'+
  (run?'<p style="margin:8px 0">Estudando <b>'+esc(run.m)+'</b> · <span id="estt">'+fmtHM(Date.now()-run.t0)+'</span></p><button type="button" class="chip" data-a="estudoStop">Parar sessão</button>':
   '<form id="estform" class="add" style="margin:8px 0"><label class="sr" for="estm">Matéria</label><input id="estm" list="estmats" maxlength="40" placeholder="Matéria (ex.: Inglês)" autocomplete="off"><datalist id="estmats">'+Object.keys(tot).map(m=>'<option value="'+esc(m)+'">').join('')+'</datalist><button>Iniciar</button></form>')+
  (Object.keys(tot).length?'<p class="sub" style="margin:8px 0 2px">Total por matéria</p><ul class="svlist">'+Object.entries(tot).sort((a,b)=>b[1]-a[1]).map(([m,ms])=>'<li class="svd">'+esc(m)+': '+(ms/36e5).toFixed(1).replace('.',',')+' h</li>').join('')+'</ul>':'')+'</section>'}
function fmtHM(ms){const s=Math.floor(ms/1000),h=Math.floor(s/3600),m=Math.floor((s%3600)/60),x=s%60;return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(x).padStart(2,'0')}
function bemView(){return '<h2>Bem-estar</h2>'+habitosHtml()+humorHtml()+estudoHtml()}
document.addEventListener('submit',e=>{if(e.target.id==='habform'){e.preventDefault();const n=$('#habn').value.trim().slice(0,40);if(!n)return;const H=jsonLS('habitos',[]);H.push({id:'h'+Date.now().toString(36),n,dias:[]});ls.set('habitos',JSON.stringify(H.slice(0,50)));view();say('Hábito criado')}
 if(e.target.id==='estform'){e.preventDefault();const m=$('#estm').value.trim().slice(0,40);if(!m)return;ls.set('estudo_run',JSON.stringify({m,t0:Date.now()}));view();say('Sessão iniciada: '+m)}});
setInterval(()=>{const t=$('#estt');const r=jsonLS('estudo_run',null);if(t&&r)t.textContent=fmtHM(Date.now()-r.t0)},1000);
document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-a]');if(!t)return;const a=t.dataset.a;
 if(a==='tpri'){priCiclo(+t.dataset.i);return}
 if(a==='apres'){apresAbrir();return}
 if(a==='apresSair'){apresSair();return}
 if(a==='habito'){const H=jsonLS('habitos',[]),h=H.find(x=>x.id===t.dataset.id);if(!h)return;const k=hojeK();h.dias=h.dias||[];h.dias=h.dias.includes(k)?h.dias.filter(d=>d!==k):h.dias.concat([k]);ls.set('habitos',JSON.stringify(H));view();return}
 if(a==='habitoDel'){ls.set('habitos',JSON.stringify(jsonLS('habitos',[]).filter(h=>h.id!==t.dataset.id)));view();return}
 if(a==='humor'){const M=jsonLS('humor',{});M[hojeK()]=+t.dataset.v;ls.set('humor',JSON.stringify(M));view();say('Humor registrado');return}
 if(a==='estudoStop'){const r=jsonLS('estudo_run',null);if(!r)return;const S2=jsonLS('estudo_sessoes',[]);S2.push({m:r.m,ms:Date.now()-r.t0,dia:hojeK()});ls.set('estudo_sessoes',JSON.stringify(S2.slice(-500)));ls.del('estudo_run');view();say('Sessão salva: '+r.m);return}});
document.addEventListener('keydown',e=>{if(!e.target||/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))return;});
/* ===== Planejamento da semana (até 5 prioridades) ===== */
function segundaK(d){const x=new Date(d);const w=(x.getDay()+6)%7;x.setDate(x.getDate()-w);return dayKey(x)}
function semanaDados(){const d=jsonLS('semana_prios',null);const k=segundaK(new Date());if(!d||d.semana!==k)return {semana:k,itens:[]};return d}
function semanaSalvar(d){ls.set('semana_prios',JSON.stringify(d))}
function semanaHtml(){const d=semanaDados();const it=d.itens||[];
 const feitos=it.filter(x=>x.tid?((S.tasks||[]).find(t=>String(t.id)===x.tid)||{}).d:x.d).length;const pc=it.length?Math.round(feitos/it.length*100):0;
 const abertas=(S.tasks||[]).filter(t=>!t.d&&!it.some(x=>x.tid===String(t.id)));
 return '<section class="tp-card" aria-label="Planejamento da semana" style="margin:10px 0"><div class="tp-k">Prioridades da semana (até 5)</div>'+
  (it.length?'<div style="margin:8px 0" role="progressbar" aria-label="Progresso das prioridades da semana" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+pc+'"><div style="font-size:14px">'+feitos+' de '+it.length+' concluída(s)</div><div style="height:8px;border-radius:4px;background:rgba(255,255,255,.14);margin-top:4px;overflow:hidden"><i style="display:block;height:100%;width:'+pc+'%;background:var(--acc,#30d158)"></i></div></div>'+
   '<ul class="svlist">'+it.map((x,i)=>{const done=x.tid?!!((S.tasks||[]).find(t=>String(t.id)===x.tid)||{}).d:!!x.d;const nome=x.tid?((S.tasks||[]).find(t=>String(t.id)===x.tid)||{}).t||x.t:x.t;return '<li class="svd" style="display:flex;gap:8px;align-items:center;padding:6px 0"><button type="button" class="chip" data-a="semFeito" data-i="'+i+'" aria-pressed="'+done+'" '+(x.tid?'disabled':'')+'>'+(done?'✓ ':'')+esc(nome)+'</button><button type="button" class="chip" data-a="semRem" data-i="'+i+'" aria-label="Remover prioridade">×</button></li>'}).join('')+'</ul>':'<p class="sub">Escolha as prioridades desta semana.</p>')+
  (it.length<5?'<form id="semform" class="add" style="margin-top:8px"><label class="sr" for="semt">Nova prioridade</label><input id="semt" maxlength="80" placeholder="Nova prioridade (texto livre)" autocomplete="off"><button>Adicionar</button></form>'+
   (abertas.length?'<div class="add" style="margin-top:6px"><label class="sr" for="semsel">Escolher tarefa existente</label><select id="semsel"><option value="">Escolher tarefa existente…</option>'+abertas.map(t=>'<option value="'+esc(String(t.id))+'">'+esc(t.t)+'</option>').join('')+'</select><button type="button" class="chip" data-a="semPegar">Usar</button></div>':''):'')+'</section>'}
/* ===== Projetos (início, fim e progresso) ===== */
function projetosDados(){return jsonLS('projetos',[])}
function projetoProgresso(p){const ts=(S.tasks||[]).filter(t=>t.proj===p.id);const f=ts.filter(t=>t.d).length;return {total:ts.length,feitas:f,pc:ts.length?Math.round(f/ts.length*100):0}}
function projetosHtml(){const P=projetosDados();const hj=hojeK();
 return '<details class="dt" style="margin:10px 0" id="projdet"><summary>Projetos ('+P.length+')</summary>'+
  (P.length?'<ul class="svlist">'+P.map(p=>{const g=projetoProgresso(p);const atras=p.fim&&p.fim<hj&&g.pc<100;return '<li class="svd" style="padding:8px 0"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><b>'+esc(p.n)+'</b><span class="sub">'+(p.ini?esc(p.ini.split('-').reverse().join('/')):'')+(p.fim?' → '+esc(p.fim.split('-').reverse().join('/')):'')+'</span></div><div role="progressbar" aria-label="Progresso do projeto '+esc(p.n)+'" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+g.pc+'" style="height:8px;border-radius:4px;background:rgba(255,255,255,.14);margin:6px 0;overflow:hidden"><i style="display:block;height:100%;width:'+g.pc+'%;background:var(--acc,#30d158)"></i></div><div class="sub" style="font-size:13px">'+g.feitas+' de '+g.total+' tarefa(s) · '+g.pc+'%'+(atras?' · atrasado':'')+'</div><button type="button" class="chip" data-a="projDel" data-id="'+esc(p.id)+'" style="margin-top:6px">Apagar projeto</button></li>'}).join('')+'</ul>':'<p class="sub">Nenhum projeto. Crie um abaixo e vincule tarefas a ele.</p>')+
  '<form id="projform" class="tpalert" style="margin-top:8px"><label for="projn" style="display:block;font-size:14px;margin-bottom:6px">Nome do projeto</label><input id="projn" maxlength="60" autocomplete="off" style="width:100%;box-sizing:border-box;border-radius:12px;padding:10px;background:var(--row);color:var(--ink);border:0;margin-bottom:8px"><div class="add" style="margin:0"><label class="sr" for="projini">Início</label><input type="date" id="projini" value="'+hj+'"><label class="sr" for="projfim">Fim</label><input type="date" id="projfim"><button>Criar projeto</button></div></form>'+
  (P.length&&(S.tasks||[]).length?'<form id="projvinc" class="add" style="margin-top:10px"><label class="sr" for="vtask">Tarefa</label><select id="vtask"><option value="">Escolha uma tarefa…</option>'+(S.tasks||[]).map(t=>'<option value="'+esc(String(t.id))+'">'+esc(t.t)+'</option>').join('')+'</select><label class="sr" for="vproj">Projeto</label><select id="vproj">'+P.map(p=>'<option value="'+esc(p.id)+'">'+esc(p.n)+'</option>').join('')+'</select><button>Vincular</button></form>':'')+
  '</details>'}
document.addEventListener('submit',e=>{
 if(e.target.id==='semform'){e.preventDefault();const t=$('#semt').value.trim().slice(0,80);if(!t)return;const d=semanaDados();if(d.itens.length>=5)return;d.itens.push({t,d:false});semanaSalvar(d);view();return}
 if(e.target.id==='projform'){e.preventDefault();const n=$('#projn').value.trim().slice(0,60);if(!n){say('Informe o nome do projeto');return}const ini=$('#projini').value,fim=$('#projfim').value;if(fim&&ini&&fim<ini){say('O fim precisa ser depois do início');return}
  const P=projetosDados();P.push({id:'pj'+Date.now().toString(36),n,ini:ini||'',fim:fim||''});ls.set('projetos',JSON.stringify(P.slice(0,50)));view();say('Projeto criado');return}
 if(e.target.id==='projvinc'){e.preventDefault();const tid=$('#vtask').value,pid=$('#vproj').value;const t=(S.tasks||[]).find(x=>String(x.id)===tid);if(!t||!pid){say('Escolha a tarefa e o projeto');return}t.proj=pid;t.mod=Date.now();t.dy=true;save();view();say('Tarefa vinculada ao projeto');return}
});
document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-a]');if(!t)return;const a=t.dataset.a;
 if(a==='semFeito'){const d=semanaDados();const x=d.itens[+t.dataset.i];if(!x||x.tid)return;x.d=!x.d;semanaSalvar(d);view();return}
 if(a==='semRem'){const d=semanaDados();d.itens.splice(+t.dataset.i,1);semanaSalvar(d);view();return}
 if(a==='semPegar'){const sel=$('#semsel');if(!sel||!sel.value)return;const tk=(S.tasks||[]).find(x=>String(x.id)===sel.value);if(!tk)return;const d=semanaDados();if(d.itens.length>=5)return;d.itens.push({t:tk.t,tid:String(tk.id)});semanaSalvar(d);view();return}
 if(a==='projDel'){const id=t.dataset.id;ls.set('projetos',JSON.stringify(projetosDados().filter(p=>p.id!==id)));(S.tasks||[]).forEach(x=>{if(x.proj===id)delete x.proj});save();view();say('Projeto apagado');return}
});
function navLabels(){const bk=$('#back'),fw=$('#fwd');const i=TABS.findIndex(t=>t[0]===S.tab);
 const ant=i>0?TABS[i-1]:null,pro=(i>=0&&i<TABS.length-1)?TABS[i+1]:null;
 if(bk){bk.disabled=!ant;bk.innerHTML=ic('back')+'<span>'+(ant?ant[1]:'Início')+'</span>';bk.setAttribute('aria-label',ant?'Ir para '+ant[1]+' (aba anterior)':'Primeira aba')}
 if(fw){fw.disabled=!pro;fw.innerHTML='<span>'+(pro?pro[1]:'Fim')+'</span>'+ic('fwd');fw.setAttribute('aria-label',pro?'Ir para '+pro[1]+' (próxima aba)':'Última aba')}}
let tpX=null;
$('#view').addEventListener('pointerdown',e=>{if(S.tab==='tempo')tpX=e.clientX});
$('#view').addEventListener('pointerup',e=>{if(S.tab!=='tempo'||tpX==null)return;const dx=e.clientX-tpX;tpX=null;if(Math.abs(dx)>50)tpGo(dx<0?1:-1)});
$('#view').addEventListener('keydown',e=>{if(S.tab!=='tempo'||e.target.tagName==='INPUT')return;if(e.key==='ArrowLeft')tpGo(-1);if(e.key==='ArrowRight')tpGo(1)});
$('#view').addEventListener('click',e=>{const d=e.target.closest('[data-a="tpdot"]');if(d){WX.pg=+d.dataset.i;view();return}
 if(e.target.closest('[data-a="tpdel"]')){let x=[];try{x=JSON.parse(ls.get('wx_extra')||'[]')||[]}catch(_){}x.splice(WX.pg-1,1);ls.set('wx_extra',JSON.stringify(x));WX.pg=0;view();say('Cidade removida');return}});
$('#view').addEventListener('submit',async e=>{if(e.target.id!=='tpaddf')return;e.preventDefault();const q=$('#tpaddc').value.trim();if(!q)return;
 const g=await wxFind(q).catch(()=>null);if(!g){say('Cidade não encontrada');return}
 let x=[];try{x=JSON.parse(ls.get('wx_extra')||'[]')||[]}catch(_){}
 x.push({n:[g.name,g.admin1].filter(Boolean).join(', ').slice(0,60),lat:g.latitude,lon:g.longitude});x=x.slice(0,5);ls.set('wx_extra',JSON.stringify(x));WX.pg=x.length;view();say('Cidade adicionada: '+g.name)});
function altAlertForms(){const w=ls.get('wx_wind'),u=ls.get('wx_uv');
 return '<form id="tpwfrm" class="tpalert" style="margin-top:12px"><label for="tpwind" style="font-size:14px;display:block;margin-bottom:6px">Avisar quando o vento passar de (km/h)'+(w?' · atual: '+w:'')+'</label><div class="add" style="margin:0"><input id="tpwind" inputmode="decimal" placeholder="Ex.: 40" maxlength="4" autocomplete="off"><button>Salvar</button></div></form>'+
 '<form id="tpuvfrm" class="tpalert" style="margin-top:12px"><label for="tpuv" style="font-size:14px;display:block;margin-bottom:6px">Avisar quando o índice UV passar de'+(u?' · atual: '+u:'')+'</label><div class="add" style="margin:0"><input id="tpuv" inputmode="decimal" placeholder="Ex.: 8" maxlength="4" autocomplete="off"><button>Salvar</button></div></form>'}
function frioCalorForms(){const f=ls.get('wx_frio'),c=ls.get('wx_calor');
 return '<form id="tpfrfrm" class="tpalert" style="margin-top:12px"><label for="tpfrio" style="font-size:14px;display:block;margin-bottom:6px">Avisar quando a temperatura ficar abaixo de (°C)'+(f?' · atual: '+f+'°':'')+'</label><div class="add" style="margin:0"><input id="tpfrio" inputmode="decimal" placeholder="Ex.: 3" maxlength="5" autocomplete="off"><button>Salvar</button></div></form>'+
  '<form id="tpcafrm" class="tpalert" style="margin-top:12px"><label for="tpcalor" style="font-size:14px;display:block;margin-bottom:6px">Avisar quando a temperatura passar de (°C)'+(c?' · atual: '+c+'°':'')+'</label><div class="add" style="margin:0"><input id="tpcalor" inputmode="decimal" placeholder="Ex.: 35" maxlength="5" autocomplete="off"><button>Salvar</button></div></form>'}
function altAlert(data){if(!data||!data.hourly)return null;const out=[];const w=parseFloat(ls.get('wx_wind')),uv=parseFloat(ls.get('wx_uv')),frio=parseFloat(ls.get('wx_frio')),calor=parseFloat(ls.get('wx_calor'));const h=data.hourly;
 const i=Math.max(0,h.time.indexOf(String(data.current.time).slice(0,13)+':00'));
 if(w>0&&h.wind_speed_10m){const mx=Math.max(...h.wind_speed_10m.slice(i,i+24));if(mx>w)out.push('Vento de até '+Math.round(mx)+' km/h nas próximas 24 horas, acima do seu alerta de '+w+' km/h.')}
 if(frio>-99&&h.temperature_2m){const mn=Math.min(...h.temperature_2m.slice(i,i+24));if(mn<frio)out.push('Temperatura de até '+Math.round(mn)+'° nas próximas 24 horas, abaixo do seu alerta de frio ('+frio+'°).')}
 if(calor>-99&&h.temperature_2m){const mx=Math.max(...h.temperature_2m.slice(i,i+24));if(mx>calor)out.push('Temperatura de até '+Math.round(mx)+'° nas próximas 24 horas, acima do seu alerta de calor ('+calor+'°).')}
 if(uv>0&&data.daily&&data.daily.uv_index_max&&data.daily.uv_index_max[0]>uv)out.push('Índice UV de até '+Math.round(data.daily.uv_index_max[0])+' hoje, acima do seu alerta de '+uv+'.');
 return out}
function bestTimeHtml(data){if(!data||!data.hourly||!data.hourly.time)return '';const h=data.hourly;const i=Math.max(0,h.time.indexOf(String(data.current.time).slice(0,13)+':00'));
 let best=null;for(let k=i;k+2<=Math.min(h.time.length,i+12);k++){let sc=0;let ok=true;for(let j=k;j<k+2;j++){const t=h.temperature_2m[j],p=h.precipitation_probability[j],wv=h.wind_speed_10m?h.wind_speed_10m[j]:0;if(p>=30)ok=false;sc+=Math.abs(t-22)+wv/10+p/10}
  if(ok&&(!best||sc<best.sc))best={k,sc}}
 if(!best)return '<div class="tp-card" style="margin:0 0 10px"><div class="tp-k">Melhor horário para sair</div><div class="tp-s" style="font-size:15px;color:var(--ink)">Nenhuma janela sem chuva nas próximas 12 horas</div></div>';
 return '<div class="tp-card" style="margin:0 0 10px"><div class="tp-k">Melhor horário para sair</div><div class="tp-s" style="font-size:15px;color:var(--ink)">Das '+h.time[best.k].slice(11,16)+' às '+h.time[best.k+2].slice(11,16)+', sem chuva prevista e com temperatura e vento agradáveis.</div></div>'}
function tpAlertHtml(){return tpAlertHtmlOld()+altAlertForms()+frioCalorForms()}
function tpAlertHtmlOld(){const t=ls.get('wx_alert');return '<form id="tpafrm" class="tpalert" style="margin-top:12px"><label for="tpalert" style="font-size:14px;display:block;margin-bottom:6px">Avisar quando a temperatura ficar abaixo de (°C)'+(t?' · atual: '+t+'°':'')+'</label><div class="add" style="margin:0"><input id="tpalert" inputmode="decimal" placeholder="Ex.: 5" maxlength="5" autocomplete="off" value=""><button>Salvar</button></div></form>'}
function cityKey(ms){const o=(WX.data&&WX.data.utc_offset_seconds)||0;return new Date(ms+o*1000).toISOString().slice(0,13)+':00'}
function minAlert(){const t=parseFloat(ls.get('wx_alert'));if(!(t>-99)||!WX.data||!WX.data.hourly||!WX.data.hourly.time)return null;const h=WX.data.hourly,i=Math.max(0,h.time.indexOf(String(WX.data.current.time).slice(0,13)+':00'));const mn=Math.min(...h.temperature_2m.slice(i,i+24));return mn<t?{mn:Math.round(mn),t}:null}
function evForm(){if(!msOn())return '';const hoje=dayKey(new Date());return '<form id="evform" class="tpalert" aria-label="Criar evento" style="margin-top:12px"><h3 class="tkh" style="margin:0 0 8px">Novo evento</h3><label class="sr" for="evt">Título do evento</label><input id="evt" placeholder="Título do evento" maxlength="100" autocomplete="off" style="width:100%;margin-bottom:8px"><div class="add" style="margin:0"><label class="sr" for="evd">Data</label><input type="date" id="evd" value="'+hoje+'"><label class="sr" for="evs">Início</label><input type="time" id="evs" value="09:00"><label class="sr" for="eve">Fim</label><input type="time" id="eve" value="'+(()=>{const[h,m]=('09:00').split(':').map(Number),t=h*60+m+(parseInt(ls.get('dur_padrao'),10)||30);return String(Math.floor(t/60)%24).padStart(2,'0')+':'+String(t%60).padStart(2,'0')})()+'"><button>Criar</button></div><label style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:8px;font-size:14px"><input type="checkbox" id="evprep"> Criar tarefa de preparação <select id="evpmin" aria-label="Quanto tempo antes"><option value="15">15 min antes</option><option value="30" selected>30 min antes</option><option value="60">1 h antes</option></select></label><label style="display:flex;gap:8px;align-items:center;margin-top:8px;font-size:14px">Repetir <select id="evrec"><option value="none">Não repete</option><option value="week">Toda semana</option><option value="day">Todos os dias</option></select></label><p class="err" id="everr" role="alert"></p></form>'}
function recOf(d,k){if(k==='none')return {};const dias=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];const dow=dias[new Date(d+'T12:00:00').getDay()];
 const pat=k==='day'?{type:'daily',interval:1}:{type:'weekly',interval:1,daysOfWeek:[dow],firstDayOfWeek:'sunday'};
 return {recurrence:{pattern:pat,range:{type:'noEnd',startDate:d}}}}
function addMoveBtns(){if(S.tab!=='cal')return;document.querySelectorAll('#view [data-a="nnewev"]').forEach(b=>{const n=b.previousElementSibling;if(n&&n.dataset&&n.dataset.a==='evMove')return;const m=document.createElement('button');m.type='button';m.className='chip';m.dataset.a='evMove';m.dataset.ev=b.dataset.ev;m.style.marginTop='6px';m.textContent='Mudar horário';b.before(m,' ')})}
async function evMove(evId){const r=(S.ev||[]).find(x=>x[7]===evId);if(!r){say('Compromisso não encontrado');return}
 const ini=new Date(r[6]),dur=r[8]-r[6],pad=n=>String(n).padStart(2,'0');
 const novo=window.prompt('Novo horário de início (HH:MM) para "'+r[1]+'" no mesmo dia',pad(ini.getHours())+':'+pad(ini.getMinutes()));
 if(novo===null)return;if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(novo.trim())){say('Use o formato HH:MM');return}
 const [h,m]=novo.trim().split(':').map(Number);const st=new Date(ini);st.setHours(h,m,0,0);const en=new Date(st.getTime()+dur);
 const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC';const f=x=>x.getFullYear()+'-'+pad(x.getMonth()+1)+'-'+pad(x.getDate())+'T'+pad(x.getHours())+':'+pad(x.getMinutes())+':00';
 const res=await gj('/me/events/'+encodeURIComponent(evId),{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({start:{dateTime:f(st),timeZone:tz},end:{dateTime:f(en),timeZone:tz}})});
 if(res.ok){say('Compromisso movido para '+novo.trim());S.evg=null;S.evk='';calGo()}
 else if(res.status===403)say('Sem permissão para editar eventos. Reconecte a Microsoft em Ajustes.');
 else say('Não foi possível mover o compromisso agora')}
/* ===== Extras: notas (links, etiquetas, modelos, desfazer) e tarefas (prazo, ordenação, histórico, caixa de entrada) ===== */
const NOTE_TPL={ata:'Ata de reunião\nData: \nParticipantes: \n\nPauta:\n- \n\nDecisões:\n- \n\nPróximos passos:\n- ',diario:'Diário\nData: \n\nComo foi o dia:\n\nO que aprendi:\n\nAgradeço por:\n- ',lista:'Lista de leitura\n\n- Título — autor — status (quero ler / lendo / lido)\n- '};
function noteTags(n){return (n.tags||'').split(',').map(x=>x.trim()).filter(Boolean)}
function setNoteTag(v){const L=notesList(),c=notaCurItem(L);c.tags=v.split(',').map(x=>x.trim().toLowerCase().replace(/\s+/g,'-')).filter(Boolean).slice(0,5).join(',');notesSave(L);view()}
function prazoTxt(t){if(!t.due||t.d)return '';const hoje=new Date(),dt=new Date(t.due+'T12:00:00');const dias=Math.round((dt-new Date(hoje.getFullYear(),hoje.getMonth(),hoje.getDate(),12))/864e5);
 if(dias<0)return ' · atrasada há '+(-dias)+' dia'+(dias===-1?'':'s');if(dias===0)return ' · vence hoje';if(dias===1)return ' · amanhã';return ' · em '+dias+' dias'}
function sortTasks(k){const T=S.tasks;const pr={alta:0,media:1,baixa:2};
 const key=t=>k==='venc'?(t.due||'9999-99-99'):k==='etiq'?(t.tag||'zzz'):(pr[t.pri]??3);
 T.sort((a,b)=>{const x=key(a),y=key(b);return x<y?-1:x>y?1:0});save();view();say('Tarefas ordenadas')}
function extrasDom(){const v=$('#view');if(!v)return;v.querySelectorAll('.extra').forEach(n=>n.remove());
 const add=h=>v.insertAdjacentHTML('beforeend','<div class="extra">'+h+'</div>');
 if(S.tab==='notas'){
  const L=notesList(),c=notaCurItem(L),tags=[...new Set(L.flatMap(noteTags))];
  v.querySelectorAll('[data-a="nsel"]').forEach(b=>{const n=L.find(x=>x.id===b.dataset.id);b.hidden=!!(S.ntag&&(!n||!noteTags(n).includes(S.ntag)))});
  add('<div style="margin-top:10px"><label class="sr" for="ntags">Etiquetas da nota</label><input id="ntags" value="'+esc(c.tags||'')+'" placeholder="Etiquetas separadas por vírgula" maxlength="120" style="width:100%;box-sizing:border-box;border-radius:12px;padding:10px;background:var(--row);color:var(--ink);border:0"></div>'+
   (tags.length?'<div class="redact" role="group" aria-label="Filtrar notas por etiqueta" style="margin:8px 0">'+tags.map(t=>'<button type="button" class="chip" data-a="ntagf" data-g="'+esc(t)+'" aria-pressed="'+(S.ntag===t)+'">#'+esc(t)+'</button>').join('')+'<button type="button" class="chip" data-a="ntagf" data-g="">Todas</button></div>':'')+
   '<div class="redact" role="group" aria-label="Modelos de nota" style="margin:8px 0"><button type="button" class="chip" data-a="ntpl" data-k="ata">Modelo: ata de reunião</button><button type="button" class="chip" data-a="ntpl" data-k="diario">Modelo: diário</button><button type="button" class="chip" data-a="ntpl" data-k="lista">Modelo: lista de leitura</button></div>'+
   (S.undoNote?'<div class="row" style="justify-content:space-between"><span>Nota apagada.</span><button type="button" class="chip" data-a="nundo">Desfazer</button></div>':'')+
   (()=>{const urls=((c.t||'').match(/https?:\/\/[^\s]+/g)||[]);return urls.length?'<p class="sub" style="margin:8px 0 4px">Links nesta nota</p><ul class="svlist">'+urls.map(u=>'<li class="svd"><a href="'+esc(u)+'" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;word-break:break-all">'+esc(u)+'</a></li>').join('')+'</ul>':''})());}
 if(S.tab==='cal'){
  const hoje=new Date(),ref=cd(),ano=ref.getFullYear(),mes=ref.getMonth();const first=new Date(ano,mes,1),ndias=new Date(ano,mes+1,0).getDate();const off=(first.getDay()+6)%7;
  const cel=[];for(let i=0;i<off;i++)cel.push('<span></span>');
  for(let d=1;d<=ndias;d++){const x=new Date(ano,mes,d),k=dayKey(x),ne=(S.ev||[]).filter(r=>r[6]&&dayKey(new Date(r[6]))===k).length,nt=(S.tasks||[]).filter(t=>!t.d&&t.due===k).length;
   cel.push('<button type="button" class="chip" data-a="mday" data-k="'+k+'" aria-label="'+x.toLocaleDateString('pt-BR',{day:'numeric',month:'long'})+(ne?', '+ne+' compromisso(s)':'')+(nt?', '+nt+' tarefa(s)':'')+'" style="padding:6px 0;min-height:40px;'+(k===dayKey(hoje)?'outline:2px solid var(--acc,#fff);':'')+(k===dayKey(ref)?'background:var(--acc,#3a3a41);color:#fff;':'')+'">'+d+'<br><span style="font-size:10px">'+(ne?'●'.repeat(Math.min(ne,3)):'')+(nt?'<span style="color:#ffd60a">'+'●'.repeat(Math.min(nt,3))+'</span>':'')+'</span></button>')}
  add('<section aria-label="Visão de mês" style="margin:10px 0"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b>'+ref.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})+'</b><span style="display:flex;gap:6px"><button type="button" class="chip" data-a="mnav" data-d="-1" aria-label="Mês anterior">‹</button><button type="button" class="chip" data-a="mnav" data-d="1" aria-label="Próximo mês">›</button></span></div><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center;font-size:12px"><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span><span>D</span>'+cel.join('')+'</div><p class="sub" style="margin:6px 0 0;font-size:12px">Pontos brancos: compromissos. Amarelos: tarefas com vencimento. Mostra os eventos já carregados.</p></section>');
 }
 if(S.tab==='tasks'){
  add(semanaHtml()+projetosHtml());
 }
 if(S.tab==='tasks'){
  const ini=S.tasks.filter(t=>t.d).length;const hist=(S.tasks||[]).filter(t=>t.d).slice(0,15);
  let inbox=[];try{inbox=JSON.parse(ls.get('inbox')||'[]')||[]}catch(_){}
  add('<div class="redact" role="group" aria-label="Ordenar tarefas" style="margin:10px 0"><span class="sub" style="align-self:center">Ordenar por:</span><button type="button" class="chip" data-a="tsort" data-k="venc">Vencimento</button><button type="button" class="chip" data-a="tsort" data-k="pri">Prioridade</button><button type="button" class="chip" data-a="tsort" data-k="etiq">Etiqueta</button></div>'+
   '<details class="dt" style="margin-top:8px"><summary>Caixa de entrada ('+inbox.length+')</summary><form id="inboxform" class="add" style="margin:8px 0"><label class="sr" for="inboxin">Ideia de tarefa</label><input id="inboxin" maxlength="120" placeholder="Anote uma ideia rápida" autocomplete="off"><button>Guardar</button></form>'+
   (inbox.length?'<ul class="svlist">'+inbox.map((x,i)=>'<li class="svd" style="display:flex;gap:8px;align-items:center"><span class="grow">'+esc(x.t)+'</span><button type="button" class="chip" data-a="inboxtask" data-i="'+i+'">Virar tarefa</button><button type="button" class="chip" data-a="inboxdel" data-i="'+i+'">Descartar</button></li>').join('')+'</ul>':'<p class="sub">Nenhuma ideia guardada.</p>')+'</details>'+
   '<details class="dt" style="margin-top:8px"><summary>Histórico de concluídas ('+ini+')</summary>'+(hist.length?'<ul class="svlist">'+hist.map(t=>'<li class="svd" style="display:flex;gap:8px;align-items:center"><span class="grow">'+esc(t.t)+'</span><button type="button" class="chip" data-a="treopen" data-id="'+esc(String(t.id))+'">Reabrir</button></li>').join('')+'</ul>':'<p class="sub">Nenhuma tarefa concluída ainda.</p>')+'</details>');
 }}
document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-a]');if(!t)return;const a=t.dataset.a;
 if(a==='ntagf'){S.ntag=t.dataset.g||'';view();return}
 if(a==='ntpl'){const L=notesList(),c=notaCurItem(L);c.t=((c.t?c.t+'\n\n':'')+NOTE_TPL[t.dataset.k]).slice(0,5000);c.at=Date.now();notesSave(L);view();say('Modelo inserido na nota');return}
 if(a==='nundo'&&S.undoNote){const u=S.undoNote;const L=notesList();L.splice(Math.min(u.i,L.length),0,u.n);notesSave(L);S.undoNote=null;view();say('Nota restaurada');return}
 if(a==='tsort'){sortTasks(t.dataset.k);return}
 if(a==='treopen'){const x=S.tasks.find(y=>String(y.id)===t.dataset.id);if(x){x.d=false;x.mod=Date.now();x.dy=true;save();view();say('Tarefa reaberta')}return}
 if(a==='inboxdel'||a==='inboxtask'){let L=[];try{L=JSON.parse(ls.get('inbox')||'[]')||[]}catch(_){}const i=+t.dataset.i,it=L[i];if(!it)return;L.splice(i,1);ls.set('inbox',JSON.stringify(L));
  if(a==='inboxtask'){S.tasks.unshift({id:'x'+Date.now().toString(36),t:it.t,w:'',c:0,d:false,mod:Date.now()});save()}view();say(a==='inboxtask'?'Ideia virou tarefa':'Ideia descartada');return}
});
document.addEventListener('input',e=>{if(e.target.id==='ntags')setNoteTag(e.target.value)});
document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-a]');if(!t)return;
 if(t.dataset.a==='mnav'){const r=cd();S.cd=new Date(r.getFullYear(),r.getMonth()+(+t.dataset.d),1);calGo();return}
 if(t.dataset.a==='mday'){const [y,m,d]=t.dataset.k.split('-').map(Number);S.cd=new Date(y,m-1,d);S.cmonth=false;calGo();return}});
document.addEventListener('submit',e=>{if(e.target.id!=='inboxform')return;e.preventDefault();const v=$('#inboxin').value.trim();if(!v)return;let L=[];try{L=JSON.parse(ls.get('inbox')||'[]')||[]}catch(_){}L.unshift({t:v.slice(0,120),at:Date.now()});ls.set('inbox',JSON.stringify(L.slice(0,200)));view();say('Ideia guardada')});
async function evCreate(){const t=$('#evt').value.trim(),d=$('#evd').value,s0=$('#evs').value,e0=$('#eve').value,err=$('#everr');
 if(!t){err.textContent='Informe o título do evento.';$('#evt').focus();return}
 if(!d||!s0||!e0){err.textContent='Informe data, início e fim.';return}
 if(e0<=s0){err.textContent='O fim precisa ser depois do início.';$('#eve').focus();return}
 const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC';
 if(!(await msEnsure())){err.textContent='Conecte a Microsoft em Ajustes para criar eventos.';return}
 const r=await gj('/me/events',{method:'POST',body:JSON.stringify(Object.assign({subject:t,start:{dateTime:d+'T'+s0+':00',timeZone:tz},end:{dateTime:d+'T'+e0+':00',timeZone:tz}},recOf(d,$('#evrec')?$('#evrec').value:'none')))});
 if(r.ok){if($('#evprep')&&$('#evprep').checked){const N=+$('#evpmin').value,[hh,mm]=s0.split(':').map(Number);let tot=Math.max(0,hh*60+mm-N);const dt=String(Math.floor(tot/60)).padStart(2,'0')+':'+String(tot%60).padStart(2,'0');S.tasks.unshift({id:'p'+Date.now(),t:'Preparar: '+t,w:'',c:0,d:false,due:d,dt,ev:(r.j&&r.j.id)||undefined});save();view()}say('Evento criado: '+t);S.evg=null;S.evk='';calGo()}
 else if(r.status===403){err.textContent='Sem permissão para criar eventos. Desconecte e conecte a Microsoft de novo em Ajustes e aceite o acesso ao calendário.'}
 else{err.textContent='Não foi possível criar o evento agora. Tente de novo.'}}
function icsDate(ms){return new Date(ms).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')}
function icsText(x){return String(x||'').replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\n/g,'\\n')}
function icsExport(){const ev=(S.ev||[]).filter(r=>r[6]&&r[8]);if(!ev.length){say('Nenhum compromisso com horário para exportar');return}
 const L=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Painel de utilidades//PT','CALSCALE:GREGORIAN'];
 ev.forEach(r=>{L.push('BEGIN:VEVENT','UID:'+(r[7]||('e'+r[6]))+'@painel','DTSTAMP:'+icsDate(Date.now()),'DTSTART:'+icsDate(r[6]),'DTEND:'+icsDate(r[8]),'SUMMARY:'+icsText(String(r[1]).replace(/<[^>]+>/g,'')),'END:VEVENT')});
 L.push('END:VCALENDAR');const blob=new Blob([L.join('\\r\\n')],{type:'text/calendar'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='agenda.ics';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);say('Agenda exportada: '+ev.length+' compromissos')}
function linksHtml(){const now=Date.now();const evs=(S.ev||[]).filter(r=>r[7]&&r[6]>=now-36e5).slice(0,8);if(!evs.length)return '';
 const livres=(S.tasks||[]).filter(t=>!t.d&&!t.ev);
 return '<details class="dt" style="margin-top:12px"><summary>Tarefas e notas por compromisso</summary>'+evs.map((r,k)=>{
  const T=(S.tasks||[]).filter(t=>t.ev===r[7]),N=notesList().filter(n=>n.ref==='ev:'+r[7]);
  return '<div class="tp-card" style="margin:8px 0"><div class="tp-k">'+r[1]+'</div>'+
   (T.length?'<ul class="svlist">'+T.map(t=>'<li class="svd">'+esc(t.t)+(t.d?' ✓':'')+'</li>').join('')+'</ul>':'<p class="sub">Sem tarefas ligadas.</p>')+
   (livres.length?'<div class="add" style="margin:6px 0 0"><label class="sr" for="lk'+k+'">Ligar tarefa a este compromisso</label><select id="lk'+k+'">'+livres.map(t=>'<option value="'+esc(String(t.id))+'">'+esc(t.t)+'</option>').join('')+'</select><button type="button" class="chip" data-a="lnk" data-ev="'+esc(r[7])+'" data-k="'+k+'">Ligar</button></div>':'')+
   (N.length?'<p class="sub" style="margin:6px 0 0">Notas: '+N.map(n=>esc(n.n)).join(', ')+'</p>':'')+
   '<button type="button" class="chip" data-a="nnewev" data-ev="'+esc(r[7])+'" style="margin-top:6px">+ Nota</button></div>'}).join('')+'</details>'}
function evDelHtml(){if(!msOn()||!(S.ev||[]).some(r=>r[7]))return '';const now=Date.now(),up=(S.ev||[]).filter(r=>r[7]&&r[6]>=now-36e5).slice(0,30);if(!up.length)return '';
 return '<details class="dt" style="margin-top:12px"><summary>Remover evento</summary><label class="sr" for="evdelsel">Evento a remover</label><select id="evdelsel" style="width:100%;margin:8px 0">'+up.map(r=>'<option value="'+r[7]+'">'+r[1]+' · '+new Date(r[6]).toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})+'</option>').join('')+'</select><button type="button" class="chip" data-a="evdel">Remover evento selecionado</button><p class="err" id="evdelerr" role="alert"></p></details>'}
async function evDelete(){const sel=$('#evdelsel');if(!sel||!sel.value)return;const id=sel.value,err=$('#evdelerr');
 if(!(await msEnsure())){err.textContent='Conecte a Microsoft em Ajustes para remover eventos.';return}
 const r=await gj('/me/events/'+encodeURIComponent(id),{method:'DELETE'});
 if(r.ok||r.status===404){say('Evento removido');S.evg=null;S.evk='';calGo()}
 else if(r.status===403){err.textContent='Sem permissão para remover eventos. Desconecte e conecte a Microsoft de novo em Ajustes.'}
 else{err.textContent='Não foi possível remover o evento agora. Tente de novo.'}}
function nextEvHtml(){const now=Date.now();const r=(S.ev||[]).filter(x=>x[6]&&x[6]>now).sort((a,b)=>a[6]-b[6])[0];if(!r)return '';
 const m=Math.max(0,Math.round((r[6]-now)/6e4)),falta=m>=60?Math.floor(m/60)+'h '+(m%60?m%60+'min':''):m+' min';
 return '<div class="tp-card" role="status" style="margin:0 0 10px"><div class="tp-k">Próximo compromisso</div><div class="tp-v" style="font-size:20px">'+r[1]+'</div><div class="tp-s">em '+falta.trim()+' · '+r[3]+'</div></div>'}
const TASK_TPL={
 manha:{n:'Rotina da manhã',r:'d',itens:['Beber um copo de água','Alongar por 5 minutos','Revisar a agenda do dia']},
 revisao:{n:'Revisão semanal',r:'w',itens:['Revisar tarefas da semana','Planejar a próxima semana','Esvaziar a caixa de notas']},
 noite:{n:'Rotina da noite',r:'d',itens:['Preparar o que for usar amanhã','Desligar telas 30 min antes de dormir']}};
function tplAll(){const c={};try{const x=JSON.parse(ls.get('tpl_custom')||'{}')||{};Object.entries(x).forEach(([k,v])=>{if(v&&Array.isArray(v.itens)&&v.itens.length)c[k]=v})}catch(_){}return Object.assign({},TASK_TPL,c)}
function tplSave(c){ls.set('tpl_custom',JSON.stringify(c))}
function tplEditorHtml(){return '<details class="dt" style="margin-top:10px"><summary>Criar modelo</summary><form id="tplform" class="tpalert" style="margin-top:8px"><label for="tplname" style="display:block;font-size:14px;margin-bottom:6px">Nome do modelo</label><input id="tplname" maxlength="40" autocomplete="off" style="width:100%;box-sizing:border-box;margin-bottom:8px;border-radius:12px;padding:10px;background:var(--row);color:var(--ink);border:0"><label for="tplitens" style="display:block;font-size:14px;margin-bottom:6px">Tarefas (uma por linha)</label><textarea id="tplitens" rows="4" maxlength="800" style="width:100%;box-sizing:border-box;border-radius:12px;padding:10px;background:var(--row);color:var(--ink);border:0"></textarea><label style="display:flex;gap:8px;align-items:center;margin-top:8px">Repetir <select id="tplrep"><option value="none">Não repete</option><option value="d">Todos os dias</option><option value="w">Toda semana</option></select></label><button type="button" class="chip" data-a="tplsave" style="margin-top:8px">Salvar modelo</button><p class="err" id="tplerr" role="alert"></p></form></details>'}
function tplSaveNew(){const n=$('#tplname').value.trim().slice(0,40),itens=$('#tplitens').value.split('\n').map(x=>x.trim()).filter(Boolean).slice(0,20),r=$('#tplrep').value,err=$('#tplerr');
 if(!n){err.textContent='Informe um nome';return}if(!itens.length){err.textContent='Escreva pelo menos uma tarefa';return}
 let c={};try{c=JSON.parse(ls.get('tpl_custom')||'{}')||{}}catch(_){}c['u'+Date.now().toString(36)]={n,r:r==='none'?'':r,itens};tplSave(c);view();say('Modelo salvo: '+n)}
function tplDelete(k){let c={};try{c=JSON.parse(ls.get('tpl_custom')||'{}')||{}}catch(_){}delete c[k];tplSave(c);view();say('Modelo apagado')}
function tplHtml(){return '<div class="redact" role="group" aria-label="Modelos de tarefa" style="margin:0 0 10px">'+Object.entries(tplAll()).map(([k,v])=>'<button type="button" class="chip" data-a="tmpl" data-k="'+k+'">+ '+v.n+'</button>').join('')+'</div>'+tplEditorHtml()+(Object.keys(tplAll()).some(k=>!TASK_TPL[k])?'<p class="sub" style="margin:0 0 8px">Modelos criados por você: toque no nome para adicionar; use Apagar para remover.</p>'+Object.entries(tplAll()).filter(([k])=>!TASK_TPL[k]).map(([k,v])=>'<button type="button" class="chip" data-a="tpldel" data-k="'+k+'" style="margin:0 6px 6px 0">Apagar '+esc(v.n)+'</button>').join(''):'')}
function tplAdd(k){const tp=tplAll()[k];if(!tp)return;const hoje=dayKey(new Date());const now=Date.now();
 tp.itens.forEach((t,i)=>{S.tasks.unshift({id:'m'+now.toString(36)+i,t,w:'',c:0,d:false,due:hoje,r:tp.r||'',mod:now})});
 save();view();say(tp.n+': '+tp.itens.length+' tarefas adicionadas')}
function overdueHtml(){const hoje=dayKey(new Date());const n=(S.tasks||[]).filter(t=>!t.d&&t.due&&t.due<hoje).length;return n?'<div class="note" role="status">'+n+' tarefa(s) atrasada(s).</div>':''}
function radioHistHtml(){let h=[];try{h=JSON.parse(ls.get('rd_hist')||'[]')||[]}catch(_){}if(!Array.isArray(h)||!h.length)return '';
 return '<details class="dt" style="margin-top:12px"><summary>Tocadas recentemente</summary><ul class="svlist">'+h.map(n=>{const i=S.rd.list.findIndex(x=>x.n===n);return i<0?'':'<li class="svd"><button type="button" class="svdbtn" data-a="rpick" data-i="'+i+'"><span class="grow">'+esc(n)+'</span></button></li>'}).join('')+'</ul></details>'}
async function spReplay(uri){await spApi('/me/player/play',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({uris:[uri]})})}
async function spHistLoad(){const box=$('#hsthist');if(!box)return;const r=await spApi('/me/player/recently-played?limit=20');const items=(r&&r.items)||[];const seen=new Set();const list=[];
 items.forEach(it=>{const t=it.track;if(!t||seen.has(t.uri))return;seen.add(t.uri);list.push(t)});
 box.innerHTML=list.length?'<ul class="svlist">'+list.slice(0,15).map(t=>'<li class="svd" style="display:flex;align-items:center;gap:8px"><span class="grow">'+esc(t.name)+' <span class="sub">· '+esc((t.artists||[]).map(a=>a.name).join(', '))+'</span></span><button type="button" class="chip" data-a="tagain" data-u="'+esc(t.uri)+'">Tocar de novo</button></li>').join('')+'</ul>':'<p class="sub">Nenhuma faixa recente.</p>'}
function histHtml(){return '<details class="dt" style="margin-top:12px" id="hstdet"><summary>Histórico de faixas</summary><div id="hsthist"><p class="sub">Carregando…</p></div></details>'}
const LYR_CACHE=new Map();
function lyricsBox(){return '<details class="dt" style="margin-top:12px" id="lyrdet"><summary>Letra</summary><div id="lyr" role="region" aria-label="Letra da música" style="white-space:pre-line;line-height:1.7;font-size:15px;max-height:360px;overflow-y:auto;padding-top:8px"><p class="sub">Abra para carregar a letra.</p></div><p class="sub" style="margin-top:8px">Letra: LRCLIB (lrclib.net). Pode não haver letra para todas as faixas.</p></details>'}
async function lyricsLoad(){const box=$('#lyr');if(!box)return;const tr=S.m&&S.m.list[S.m.i];if(!tr||!tr.t){box.innerHTML='<p class="sub">Nenhuma faixa tocando.</p>';return}
 const key=tr.t+'|'+tr.a;if(LYR_CACHE.has(key)){box.textContent=LYR_CACHE.get(key)||'Letra não encontrada para esta faixa.';return}
 box.innerHTML='<p class="sub">Buscando letra…</p>';
 try{const p=new URLSearchParams({track_name:tr.t,artist_name:tr.a||'',album_name:tr.al||'',duration:String(Math.round(tr.d||0))});
  const r=await fetch('https://lrclib.net/api/get?'+p);let txt=null;
  if(r.ok){const j=await r.json();txt=(j&&(j.plainLyrics||'').trim())||null}
  LYR_CACHE.set(key,txt);const cur=S.m&&S.m.list[S.m.i];if(cur&&cur.t+'|'+cur.a===key){const b=$('#lyr');if(b)b.textContent=txt||'Letra não encontrada para esta faixa.'}}
 catch(_){box.innerHTML='<p class="sub">Não foi possível buscar a letra agora.</p>'}}
async function spPlaylistsList(){const r=await spApi('/me/playlists?limit=20');return (r&&r.items)||[]}
async function spPlAddCurrent(pid){const tr=S.m&&S.m.list[S.m.i];if(!tr||!tr.uri){say('Nenhuma faixa tocando');return}
 const r=await spApi('/playlists/'+encodeURIComponent(pid)+'/tracks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({uris:[tr.uri]})});
 if(r!==null&&S.err===0){say('Faixa adicionada à playlist')}else if(S.err===403){say('Reconecte o Spotify em Ajustes para liberar as playlists')}else{say('Não foi possível adicionar a faixa')}}
async function spPlCreate(name){const r=await spApi('/me/playlists',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,public:false})});
 if(r&&r.id){say('Playlist criada: '+name);return true}if(S.err===403)say('Reconecte o Spotify em Ajustes para criar playlists');else say('Não foi possível criar a playlist');return false}
async function spArtistOfCurrent(){const tr=S.m&&S.m.list[S.m.i];const id=tr&&tr.uri?tr.uri.split(':').pop():'';if(!id)return null;const t=await spApi('/tracks/'+id);return t&&t.artists&&t.artists[0]?t.artists[0]:null}
async function spFollowToggle(){const a=await spArtistOfCurrent();if(!a){say('Nenhum artista identificado');return}
 const c=await spApi('/me/following/contains?type=artist&ids='+a.id);const on=!!(c&&c[0]);
 const r=await spApi('/me/following?type=artist&ids='+a.id,{method:on?'DELETE':'PUT'});
 if(r===null&&S.err&&S.err!==0){say(S.err===403?'Reconecte o Spotify em Ajustes para seguir artistas':'Não foi possível atualizar agora');return}
 say(on?'Deixou de seguir '+a.name:'Seguindo '+a.name);S.followAt=0;view()}
async function spTopLoad(){const box=$('#spTopBox');if(!box)return;box.innerHTML='<p class="sub">Carregando…</p>';
 const [a,t]=await Promise.all([spApi('/me/top/artists?time_range=short_term&limit=10'),spApi('/me/top/tracks?time_range=short_term&limit=10')]);
 const li=(arr,f)=>(arr||[]).map((x,i)=>'<li class="svd">'+(i+1)+'. '+esc(f(x))+'</li>').join('');
 box.innerHTML=(a&&a.items&&a.items.length?'<p class="sub" style="margin:6px 0 2px">Artistas (últimas 4 semanas)</p><ol class="svlist">'+li(a.items,x=>x.name)+'</ol>':'')+
  (t&&t.items&&t.items.length?'<p class="sub" style="margin:8px 0 2px">Faixas (últimas 4 semanas)</p><ol class="svlist">'+li(t.items,x=>x.name+' · '+((x.artists||[])[0]||{}).name)+'</ol>':'')||'<p class="sub">Sem dados ainda. Ouça músicas pelo Spotify para ver seu ranking.</p>'}
function plBoxHtml(){return '<details class="dt" style="margin-top:12px" id="pldet"><summary>Playlists</summary><div id="plbox"><p class="sub">Carregando…</p></div><form id="plnew" class="add" style="margin:10px 0 0"><label class="sr" for="plnewn">Nome da nova playlist</label><input id="plnewn" placeholder="Nova playlist" maxlength="100" autocomplete="off"><button>Criar</button></form></details>'}
let albCache={uri:'',info:null};
async function releasesLoad(){const box=$('#relbox');if(!box)return;box.innerHTML='<p class="sub">Carregando…</p>';
 const f=await spApi('/me/following?type=artist&limit=5');const arts=(f&&f.artists&&f.artists.items)||[];if(!arts.length){box.innerHTML='<p class="sub">Você ainda não segue artistas.</p>';return}
 const lista=[];for(const a of arts){const r=await spApi('/artists/'+a.id+'/albums?include_groups=album,single&limit=3');((r&&r.items)||[]).forEach(al=>lista.push({artist:a.name,name:al.name,date:al.release_date||''}))}
 lista.sort((x,y)=>(y.date||'').localeCompare(x.date||''));
 box.innerHTML=lista.length?'<ul class="svlist">'+lista.slice(0,15).map(x=>'<li class="svd">'+esc(x.name)+' <span class="sub">· '+esc(x.artist)+' · '+esc(x.date)+'</span></li>').join('')+'</ul>':'<p class="sub">Nenhum lançamento recente encontrado.</p>'}
function relBoxHtml(){return '<details class="dt" style="margin-top:12px" id="reldet"><summary>Lançamentos dos artistas que você segue</summary><div id="relbox"><p class="sub">Abra para carregar.</p></div></details>'}
async function albInfo(){const tr=S.m&&S.m.list[S.m.i];if(!tr||!tr.uri)return null;if(albCache.uri===tr.uri&&albCache.info)return albCache.info;
 const id=tr.uri.split(':').pop();const t=await spApi('/tracks/'+id);if(!t||!t.album)return null;
 const c=await spApi('/me/albums/contains?ids='+t.album.id);const info={id:t.album.id,name:t.album.name,date:t.album.release_date||'',total:t.album.total_tracks,artist:((t.artists||[])[0]||{}).name||'',saved:!!(c&&c[0])};
 albCache={uri:tr.uri,info};return info}
async function epSave(){const tr=S.m&&S.m.list[S.m.i];if(!tr||!tr.uri)return;const id=tr.uri.split(':').pop();
 const c=await spApi('/me/episodes/contains?ids='+id);const on=!!(c&&c[0]);
 await spApi('/me/episodes?ids='+id,{method:on?'DELETE':'PUT'});
 if(S.err===0){say(on?'Episódio removido da biblioteca':'Episódio salvo na biblioteca');view()}else if(S.err===403)say('Reconecte o Spotify em Ajustes para salvar episódios');else say('Não foi possível atualizar o episódio')}
async function albToggle(){const i=await albInfo();if(!i){say('Álbum não identificado');return}
 await spApi('/me/albums?ids='+i.id,{method:i.saved?'DELETE':'PUT'});
 if(S.err===0){albCache={uri:'',info:null};say(i.saved?'Álbum removido da biblioteca':'Álbum salvo na biblioteca');view()}else if(S.err===403)say('Reconecte o Spotify em Ajustes para salvar álbuns');else say('Não foi possível atualizar o álbum')}
async function albLoad(){const box=$('#albbox');if(!box)return;box.innerHTML='<p class="sub">Carregando…</p>';const i=await albInfo();
 box.innerHTML=i?'<div class="tp-card" style="margin:0"><div class="tp-k">Álbum</div><div class="tp-v" style="font-size:20px">'+esc(i.name)+'</div><div class="tp-s" style="font-size:14px;color:var(--ink)">'+esc(i.artist)+(i.date?' · lançado em '+esc(i.date):'')+(i.total?' · '+i.total+' faixas':'')+'</div></div>':'<p class="sub">Álbum não encontrado.</p>'}
function albBoxHtml(){return '<details class="dt" style="margin-top:12px" id="albdet"><summary>Álbum atual</summary><div id="albbox"><p class="sub">Abra para carregar.</p></div></details>'}
function podBoxHtml(){return '<details class="dt" style="margin-top:12px" id="poddet"><summary>Podcasts salvos</summary><div id="podbox"><p class="sub">Abra para carregar.</p></div></details>'}
async function podLoad(){const box=$('#podbox');if(!box)return;box.innerHTML='<p class="sub">Carregando…</p>';const r=await spApi('/me/shows?limit=20');const items=(r&&r.items)||[];
 box.innerHTML=items.length?'<ul class="svlist">'+items.map(x=>x.show).filter(Boolean).map(p=>'<li class="svd">'+esc(p.name)+' <span class="sub">· '+esc(p.publisher||'')+'</span></li>').join('')+'</ul>':'<p class="sub">Nenhum podcast salvo.</p>'}
function savedBoxHtml(){return '<details class="dt" style="margin-top:12px" id="saveddet"><summary>Faixas salvas</summary><div id="savedbox"><p class="sub">Abra para carregar.</p></div></details><details class="dt" style="margin-top:12px" id="followdet"><summary>Artistas que você segue</summary><div id="followbox"><p class="sub">Abra para carregar.</p></div></details>'}
function topBoxHtml(){return '<details class="dt" style="margin-top:12px" id="topdet"><summary>Mais ouvidos</summary><div id="spTopBox"><p class="sub">Abra para carregar.</p></div></details>'}
async function plTracksLoad(pid){const box=$('#pltracks');if(!box)return;box.innerHTML='<p class="sub">Carregando faixas…</p>';
 const r=await spApi('/playlists/'+encodeURIComponent(pid)+'/tracks?limit=50');const items=(r&&r.items)||[];
 const rows=items.map((x,i)=>({t:x.track,i})).filter(o=>o.t);const n=rows.length;
 box.innerHTML=rows.length?'<ol class="svlist">'+rows.map((o,k)=>'<li class="svd" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap"><span class="grow">'+esc(o.t.name)+' <span class="sub">· '+esc((o.t.artists||[]).map(a=>a.name).join(', '))+'</span></span>'+
  '<button type="button" class="chip" data-a="plUp" data-pl="'+esc(pid)+'" data-i="'+o.i+'" '+(k===0?'disabled':'')+' aria-label="Subir faixa">↑</button>'+
  '<button type="button" class="chip" data-a="plDown" data-pl="'+esc(pid)+'" data-i="'+o.i+'" '+(k===n-1?'disabled':'')+' aria-label="Descer faixa">↓</button>'+
  '<button type="button" class="chip" data-a="plDel" data-pl="'+esc(pid)+'" data-uri="'+esc(o.t.uri)+'">Remover</button></li>').join('')+'</ol>':'<p class="sub">Playlist sem faixas.</p>'}
async function plMove(pid,i,dir){const to=dir<0?i-1:i+2;const body={range_start:i,insert_before:to,range_length:1};
 await spApi('/playlists/'+encodeURIComponent(pid)+'/tracks',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
 if(S.err===0){plTracksLoad(pid)}else if(S.err===403)say('Reconecte o Spotify em Ajustes para editar playlists');else say('Não foi possível mover a faixa')}
function plCoverPick(pid){const inp=document.createElement('input');inp.type='file';inp.accept='image/jpeg,image/*';inp.onchange=()=>{const f=inp.files&&inp.files[0];if(f)plCoverSend(pid,f)};inp.click()}
async function plCoverSend(pid,file){if(!file.type.startsWith('image/')){say('Escolha uma imagem');return}
 const img=new Image(),url=URL.createObjectURL(file);
 img.onload=async()=>{URL.revokeObjectURL(url);const cv=document.createElement('canvas');cv.width=cv.height=300;const cx=cv.getContext('2d');const m=Math.min(img.width,img.height);cx.drawImage(img,(img.width-m)/2,(img.height-m)/2,m,m,0,0,300,300);
  let q=0.85,b64=cv.toDataURL('image/jpeg',q).split(',')[1];while(b64.length>256*1024*0.98&&q>0.3){q-=0.1;b64=cv.toDataURL('image/jpeg',q).split(',')[1]}
  if(b64.length>256*1024){say('Imagem muito grande mesmo reduzida');return}
  await spApi('/playlists/'+encodeURIComponent(pid)+'/images',{method:'PUT',headers:{'Content-Type':'image/jpeg'},body:b64});
  if(S.err===0){say('Capa da playlist atualizada')}else if(S.err===403)say('Reconecte o Spotify em Ajustes para alterar capas (permissão nova)');else say('Não foi possível trocar a capa')};
 img.onerror=()=>say('Não foi possível abrir a imagem');img.src=url}
async function plRename(pid,cur){const n=window.prompt('Novo nome da playlist',cur||'');if(n===null)return;const nm=n.trim();if(!nm){say('Informe um nome');return}
 await spApi('/playlists/'+encodeURIComponent(pid),{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:nm})});
 if(S.err===0){say('Playlist renomeada');S.plCacheAt=0;view()}else if(S.err===403)say('Só é possível renomear playlists suas, e é preciso reconectar o Spotify');else say('Não foi possível renomear')}
async function plDesc(pid){const n=window.prompt('Descrição da playlist (até 300 caracteres)','');if(n===null)return;
 await spApi('/playlists/'+encodeURIComponent(pid),{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({description:n.slice(0,300)})});
 if(S.err===0)say('Descrição atualizada');else if(S.err===403)say('Só é possível editar playlists suas, e é preciso reconectar o Spotify');else say('Não foi possível atualizar a descrição')}
async function plFollow(pid,on){await spApi('/playlists/'+encodeURIComponent(pid)+'/followers',{method:on?'PUT':'DELETE',headers:{'Content-Type':'application/json'},body:on?JSON.stringify({public:false}):undefined});
 if(S.err===0){say(on?'Playlist seguida':'Deixou de seguir a playlist')}else say('Não foi possível atualizar a playlist')}
async function plRemove(pid,uri){await spApi('/playlists/'+encodeURIComponent(pid)+'/tracks',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({tracks:[{uri}]})});
 if(S.err===0){say('Faixa removida da playlist');plTracksLoad(pid)}else if(S.err===403)say('Reconecte o Spotify em Ajustes para editar playlists');else say('Não foi possível remover a faixa')}
async function savedLoad(){const box=$('#savedbox');if(!box)return;box.innerHTML='<p class="sub">Carregando…</p>';const r=await spApi('/me/tracks?limit=20');const items=(r&&r.items)||[];
 box.innerHTML=items.length?'<ol class="svlist">'+items.map(x=>x.track).filter(Boolean).map(t=>'<li class="svd">'+esc(t.name)+' <span class="sub">· '+esc((t.artists||[]).map(a=>a.name).join(', '))+'</span></li>').join('')+'</ol>':'<p class="sub">Nenhuma faixa salva ainda.</p>'}
async function followedLoad(){const box=$('#followbox');if(!box)return;box.innerHTML='<p class="sub">Carregando…</p>';const r=await spApi('/me/following?type=artist&limit=20');const items=(r&&r.artists&&r.artists.items)||[];
 box.innerHTML=items.length?'<ul class="svlist">'+items.map(a=>'<li class="svd">'+esc(a.name)+'</li>').join('')+'</ul>':'<p class="sub">Você ainda não segue nenhum artista.</p>'}
async function contaLoad(){const box=$('#contabox');if(!box)return;box.innerHTML='<p class="sub">Carregando…</p>';const u=await spApi('/me');
 if(!u||!u.id){box.innerHTML='<p class="sub">Conecte o Spotify para ver a conta.</p>';return}
 const plano={premium:'Premium',free:'Gratuito',open:'Gratuito'}[u.product]||(u.product||'—');
 const mk=await spApi('/markets');const nm=(mk&&mk.markets)?mk.markets.length:0;box.innerHTML='<div class="tp-card" style="margin:0"><div class="tp-k">Conta</div><div class="tp-v" style="font-size:20px">'+esc(u.display_name||u.id)+'</div><div class="tp-s" style="font-size:14px;color:var(--ink)">Plano: '+plano+(u.country?' · País: '+esc(u.country):'')+'</div><div class="tp-s" style="font-size:14px;color:var(--ink)">Mercados disponíveis: '+nm+'</div></div>'}
async function plListLoad(){const box=$('#plbox');if(!box)return;const l=await spPlaylistsList();const cur=S.m&&S.m.list[S.m.i];
 box.innerHTML=l.length?'<ul class="svlist">'+l.map(p=>'<li class="svd" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span class="grow">'+esc(p.name)+'</span><button type="button" class="chip" data-a="plView" data-id="'+esc(p.id)+'">Ver faixas</button><button type="button" class="chip" data-a="plRen" data-id="'+esc(p.id)+'" data-name="'+esc(p.name)+'">Renomear</button><button type="button" class="chip" data-a="plDesc" data-id="'+esc(p.id)+'">Descrição</button><button type="button" class="chip" data-a="plFol" data-id="'+esc(p.id)+'">Seguir</button><button type="button" class="chip" data-a="plUnf" data-id="'+esc(p.id)+'">Deixar de seguir</button>'+(cur&&cur.uri?'<button type="button" class="chip" data-a="plAdd" data-id="'+esc(p.id)+'">Adicionar faixa atual</button>':'')+'</li>').join('')+'</ul>':'<p class="sub">Nenhuma playlist encontrada.</p>';if(S.plShow){box.insertAdjacentHTML('beforeend','<div id="pltracks" style="margin-top:10px"></div>');plTracksLoad(S.plShow)}}
function musicPlusDom(){const v=$('#view');const n=$('#notch');if(!v||!n)return;
 document.querySelectorAll('#filaatalho,#moremenu').forEach(x=>x.remove());
 if(S.tab!=='music')return;
 
 const ctrl=v.querySelector('.np .ctrl');if(ctrl&&!ctrl.querySelector('[data-a="more"]')){const mb=document.createElement('button');mb.type='button';mb.className='ib';mb.dataset.a='more';mb.setAttribute('aria-label','Mais opções');mb.setAttribute('aria-haspopup','menu');mb.textContent='…';ctrl.appendChild(mb)}
}
document.addEventListener('click',e=>{
 if(e.target.closest&&e.target.closest('#filaatalho')){const f=[...document.querySelectorAll('#view h3')].find(h=>/A seguir/.test(h.textContent));if(f)f.scrollIntoView({behavior:'smooth',block:'start'});return}
 const mb=e.target.closest&&e.target.closest('[data-a="more"]');
 if(mb){const n=$('#notch');let m=document.getElementById('moremenu');if(m){m.remove();return}
  m=document.createElement('div');m.id='moremenu';m.setAttribute('role','menu');m.style.cssText='position:absolute;right:12px;bottom:90px;z-index:30;display:flex;flex-direction:column;gap:6px;background:var(--row);border-radius:16px;padding:8px;box-shadow:0 8px 24px rgba(0,0,0,.4)';
  m.innerHTML='<button type="button" role="menuitem" data-mm="fila" style="min-height:44px;border:0;border-radius:12px;padding:0 14px;background:rgba(255,255,255,.12);color:var(--ink);font:600 15px system-ui">Adicionar à fila</button><button type="button" role="menuitem" data-mm="album" style="min-height:44px;border:0;border-radius:12px;padding:0 14px;background:rgba(255,255,255,.12);color:var(--ink);font:600 15px system-ui">Ir ao álbum</button><button type="button" role="menuitem" data-mm="artista" style="min-height:44px;border:0;border-radius:12px;padding:0 14px;background:rgba(255,255,255,.12);color:var(--ink);font:600 15px system-ui">Ir ao artista</button>';
  n.appendChild(m);return}
 const it=e.target.closest&&e.target.closest('[data-mm]');
 if(it){const o=it.dataset.mm;document.getElementById('moremenu')&&document.getElementById('moremenu').remove();const tr=S.m&&S.m.list[S.m.i];
  if(o==='fila'){if(!tr||!tr.uri){say('Nenhuma faixa tocando');return}spApi('/me/player/queue?uri='+encodeURIComponent(tr.uri),{method:'POST'}).then(()=>say(S.err===0?'Faixa adicionada à fila':'Não foi possível adicionar agora'))}
  if(o==='album'){albInfo().then(i=>{if(i&&i.id)window.open('https://open.spotify.com/album/'+i.id,'_blank','noopener');else say('Álbum não encontrado')})}
  if(o==='artista'){spArtistOfCurrent().then(a=>{if(a&&a.id)window.open('https://open.spotify.com/artist/'+a.id,'_blank','noopener');else say('Artista não encontrado')})}
  return}
});
/* ===== Música: histórico de buscas, episódio, artista, audiolivros ===== */
function buscaHist(){try{const h=JSON.parse(ls.get('busca_hist')||'[]');return Array.isArray(h)?h:[]}catch(_){return []}}
function buscaHistPush(q){q=(q||'').trim().slice(0,80);if(q.length<2)return;const h=buscaHist().filter(x=>x!==q);h.unshift(q);ls.set('busca_hist',JSON.stringify(h.slice(0,10)))}
function musicMoreDom(){const v=$('#view');if(!v||S.tab!=='music'||!S.tok)return;v.querySelectorAll('#musmore').forEach(n=>n.remove());
 const h=buscaHist();const tr=S.m&&S.m.list[S.m.i];const isEp=tr&&tr.uri&&/:episode:/.test(tr.uri);
 const box=document.createElement('div');box.id='musmore';box.innerHTML=
  (h.length?'<section class="tp-card" aria-label="Buscas recentes" style="margin-top:12px"><div class="tp-k">Buscas recentes</div><div class="redact" style="margin-top:6px">'+h.map(q=>'<button type="button" class="chip" data-a="qrep" data-q="'+esc(q)+'">'+esc(q)+'</button>').join('')+'</div></section>':'')+
  (isEp?'<section class="tp-card" aria-label="Episódio atual" style="margin-top:12px" id="epcard"><div class="tp-k">Episódio</div><p class="sub">Carregando…</p></section>':'')+
  '<section class="tp-card" aria-label="Artista atual" style="margin-top:12px" id="artcard"><div class="tp-k">Artista atual</div><button type="button" class="chip" data-a="artLoad" style="margin-top:6px">Ver artista</button><div id="artbody"></div></section>'+
  '<details class="dt" style="margin-top:12px" id="abdet"><summary>Audiolivros</summary><div id="ablist"><p class="sub">Abra para carregar.</p></div><form id="absform" class="add" style="margin-top:8px"><label class="sr" for="absq">Buscar audiolivro</label><input id="absq" maxlength="80" placeholder="Buscar audiolivro" autocomplete="off"><button>Buscar</button></form><div id="absres"></div></details>';
 v.appendChild(box);if(isEp)episodeLoad(tr.uri)}
async function episodeLoad(uri){const box=$('#epcard');if(!box)return;const id=uri.split(':').pop();const e=await spApi('/episodes/'+id+'?market=BR');
 if(!e||!e.id){box.innerHTML='<div class="tp-k">Episódio</div><p class="sub">Não foi possível carregar o episódio.</p>';return}
 const rp=e.resume_point||{};const pos=rp.resume_position_ms?fmtHM(rp.resume_position_ms).replace(/^00:/,''):'00:00';const txt=String(e.description||'').replace(/<[^>]+>/g,'').slice(0,240);
 box.innerHTML='<div class="tp-k">Podcast</div><div style="font-weight:600;margin-top:4px">'+esc(e.show&&e.show.name||'')+'</div><div class="sub" style="font-size:13px">'+esc(e.name)+'</div><div class="sub" style="font-size:13px;margin-top:4px">Ponto de parada: '+pos+(rp.fully_played?' · concluído':'')+'</div>'+(txt?'<p class="sub" style="font-size:13px;margin:6px 0 0">'+esc(txt)+'</p>':'')+'<button type="button" class="chip" data-a="showLoad" data-id="'+esc(e.show&&e.show.id||'')+'" style="margin-top:6px">Ver podcast</button><div id="showbody"></div>'}
async function showLoad(id){const b=$('#showbody');if(!b||!id)return;b.innerHTML='<p class="sub">Carregando…</p>';const sh=await spApi('/shows/'+id+'?market=BR');const eps=await spApi('/shows/'+id+'/episodes?market=BR&limit=5');
 b.innerHTML=(sh&&sh.name?'<p class="sub" style="font-size:13px;margin:8px 0 2px">'+esc(sh.name)+' · '+esc(sh.publisher||'')+'</p>':'')+((eps&&eps.items)||[]).length?'<ul class="svlist">'+eps.items.map(x=>'<li class="svd" style="font-size:13px">'+esc(x.name)+'</li>').join('')+'</ul>':'<p class="sub">Sem episódios disponíveis.</p>'}
async function artistLoad(){const b=$('#artbody');if(!b)return;b.innerHTML='<p class="sub">Carregando…</p>';const a=await spArtistOfCurrent();if(!a||!a.id){b.innerHTML='<p class="sub">Artista não identificado nesta faixa.</p>';return}
 const [ar,top,alb]=await Promise.all([spApi('/artists/'+a.id),spApi('/artists/'+a.id+'/top-tracks?market=BR'),spApi('/artists/'+a.id+'/albums?include_groups=album&market=BR&limit=6')]);
 const gen=((ar&&ar.genres)||[]).slice(0,3).join(', ');const seg=(ar&&ar.followers&&ar.followers.total)?ar.followers.total.toLocaleString('pt-BR')+' seguidores':'';
 b.innerHTML='<div style="font-weight:600;margin-top:6px">'+esc(ar&&ar.name||a.name)+'</div><div class="sub" style="font-size:13px">'+esc([gen,seg].filter(Boolean).join(' · '))+'</div>'+
  ((top&&top.tracks&&top.tracks.length)?'<p class="sub" style="margin:8px 0 2px;font-size:13px">Faixas populares</p><ol class="svlist">'+top.tracks.slice(0,5).map(t=>'<li class="svd" style="font-size:13px">'+esc(t.name)+'</li>').join('')+'</ol>':'')+
  ((alb&&alb.items&&alb.items.length)?'<p class="sub" style="margin:8px 0 2px;font-size:13px">Álbuns</p><ul class="svlist">'+alb.items.map(x=>'<li class="svd" style="font-size:13px">'+esc(x.name)+' <span class="sub">'+esc((x.release_date||'').slice(0,4))+'</span></li>').join('')+'</ul>':'')}
async function audiolivrosLoad(){const b=$('#ablist');if(!b)return;b.innerHTML='<p class="sub">Carregando…</p>';const r=await spApi('/me/audiobooks?limit=20');const it=(r&&r.items)||[];
 b.innerHTML=it.length?'<ul class="svlist">'+it.map(x=>'<li class="svd" style="display:flex;gap:8px;align-items:center"><span class="grow">'+esc(x.name)+' <span class="sub">· '+esc(x.authors&&x.authors[0]&&x.authors[0].name||'')+'</span></span><button type="button" class="chip" data-a="abRem" data-id="'+esc(x.id)+'">Remover</button></li>').join('')+'</ul>':'<p class="sub">Nenhum audiolivro salvo.</p>'}
async function audiolivrosBusca(q){const out=$('#absres');if(!out)return;out.textContent='Buscando…';const r=await spApi('/search?'+new URLSearchParams({q,type:'audiobook',limit:'6',market:'BR'}));const it=(r&&r.audiobooks&&r.audiobooks.items)||[];
 out.innerHTML=it.length?'<ul class="svlist">'+it.map(x=>'<li class="svd" style="display:flex;gap:8px;align-items:center"><span class="grow">'+esc(x.name)+'</span><button type="button" class="chip" data-a="abSave" data-id="'+esc(x.id)+'">Salvar</button></li>').join('')+'</ul>':'<p class="sub">Nenhum resultado.</p>'}
document.addEventListener('submit',e=>{if(e.target.id==='absform'){e.preventDefault();const q=$('#absq').value.trim();if(q.length>=2)audiolivrosBusca(q)}});
document.addEventListener('toggle',e=>{if(e.target.id==='abdet'&&e.target.open)audiolivrosLoad()},true);
document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-a]');if(!t)return;const a=t.dataset.a;
 if(a==='qrep'){const q=$('#qq');if(q){q.value=t.dataset.q;spSrch()}return}
 if(a==='artLoad'){artistLoad();return}
 if(a==='showLoad'){showLoad(t.dataset.id);return}
 if(a==='abSave'){spApi('/me/audiobooks?ids='+encodeURIComponent(t.dataset.id),{method:'PUT'}).then(()=>{say(S.err===0?'Audiolivro salvo':'Não foi possível salvar');audiolivrosLoad()});return}
 if(a==='abRem'){spApi('/me/audiobooks?ids='+encodeURIComponent(t.dataset.id),{method:'DELETE'}).then(()=>{say(S.err===0?'Audiolivro removido':'Não foi possível remover');audiolivrosLoad()});return}});
function musicExtra(){const tr=S.m&&S.m.list[S.m.i];const sono=S.sono?'Sair do modo sono':'Modo sono';
 let h='<div class="spx" style="display:flex;gap:10px;flex-wrap:wrap"><button type="button" class="chip" data-a="sono" aria-pressed="'+!!S.sono+'">'+sono+'</button>';
 if(tr&&tr.uri&&/:episode:/.test(tr.uri))h+='<button type="button" class="chip" data-a="epSave">Salvar episódio</button>';if(tr&&tr.uri&&!/:episode:/.test(tr.uri))h+='<button type="button" class="chip" data-a="albSave">Salvar álbum</button>';if(tr&&tr.uri)h+='<button type="button" class="chip" data-a="share">Compartilhar faixa</button><button type="button" class="chip" data-a="follow">Seguir artista</button>';
 return h+'</div><p class="sub" role="status" id="shmsg" style="margin:6px 2px 0"></p>'}
async function shareTrack(){const tr=S.m.list[S.m.i],id=(tr.uri||'').split(':').pop();if(!id){say('Nada para compartilhar');return}
 const url='https://open.spotify.com/track/'+id;
 try{if(navigator.share){await navigator.share({title:tr.t,text:tr.t+' · '+tr.a,url});return}}catch(_){}
 try{await navigator.clipboard.writeText(url);say('Link da faixa copiado')}catch(_){const m=$('#shmsg');if(m)m.textContent='Link: '+url}}
function freeGaps(){const now=Date.now(),hoje=dayKey(new Date());const ev=(S.ev||[]).filter(r=>r[6]&&dayKey(new Date(r[6]))===hoje&&r[6]>=now-36e5).sort((a,b)=>a[6]-b[6]);
 const out=[];for(let i=0;i<ev.length-1;i++){const fim=ev[i][8];if(!fim)continue;const gap=Math.round((ev[i+1][6]-fim)/6e4);if(gap>=30)out.push({de:ev[i][1],ate:ev[i+1][1],min:gap})}
 return out}
function gapsHtml(){const g=freeGaps();if(!g.length)return '';return '<div class="tp-card" style="margin:0 0 10px"><div class="tp-k">Intervalos livres hoje</div>'+g.map(x=>'<div class="tp-s" style="font-size:14px;color:var(--ink)">'+x.min+' min entre "'+x.de+'" e "'+x.ate+'"</div>').join('')+'</div>'}
function schedHtml(){const sc=(()=>{try{return JSON.parse(ls.get('rd_sched')||'null')}catch(_){return null}})();
 const opts=S.rd.list.map((x,i)=>x.u?'<option value="'+i+'"'+(sc&&sc.i===i?' selected':'')+'>'+esc(x.n||('Emissora '+(i+1)))+'</option>':'').join('');
 return '<details class="dt" style="margin-top:12px"><summary>Programar horário</summary><div class="add" style="margin:8px 0 0"><label class="sr" for="rschT">Horário</label><input type="time" id="rschT" value="'+(sc?sc.t:'07:00')+'"><label class="sr" for="rschI">Emissora</label><select id="rschI">'+opts+'</select><button type="button" class="chip" data-a="rschSet">Programar</button></div>'+
 (sc?'<p class="sub" style="margin:8px 0 0">Programada para '+sc.t+' · '+esc(S.rd.list[sc.i]?S.rd.list[sc.i].n:'emissora')+' <button type="button" class="chip" data-a="rschDel" style="margin-left:6px">Cancelar</button></p>':'')+'<p class="sub" style="margin:6px 0 0">Funciona com o painel aberto. O navegador pode bloquear o som sem um toque antes.</p></details>'}
function tvSchedHtml(){let sc;try{sc=JSON.parse(ls.get('tv_sched')||'null')}catch(_){}
 const opts=(S.tv.list||[]).map((x,i)=>x.u?'<option value="'+i+'"'+(sc&&sc.i===i?' selected':'')+'>'+esc(x.n)+'</option>':'').join('');
 return '<details class="dt" style="margin-top:12px"><summary>Programar horário</summary><div class="add" style="margin:8px 0 0"><label class="sr" for="tvschT">Horário</label><input type="time" id="tvschT" value="'+(sc?sc.t:'19:00')+'"><label class="sr" for="tvschI">Canal</label><select id="tvschI">'+opts+'</select><button type="button" class="chip" data-a="tvschSet">Programar</button></div>'+
 (sc?'<p class="sub" style="margin:8px 0 0">Programado para '+sc.t+' · '+esc(S.tv.list[sc.i]?S.tv.list[sc.i].n:'canal')+' <button type="button" class="chip" data-a="tvschDel" style="margin-left:6px">Cancelar</button></p>':'')+'<p class="sub" style="margin:6px 0 0">Abre o canal no horário marcado, com o painel aberto. Canais sem link não podem ser programados.</p></details>'}
function tvSchedCheck(){let sc;try{sc=JSON.parse(ls.get('tv_sched')||'null')}catch(_){return}if(!sc||!S.tv.list[sc.i]||!S.tv.list[sc.i].u)return;
 const now=new Date(),hm=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0'),hoje=dayKey(now);
 if(hm===sc.t&&sc.last!==hoje){sc.last=hoje;ls.set('tv_sched',JSON.stringify(sc));S.tv.cur=sc.i;pick('tv');say('Programação: abrindo '+S.tv.list[sc.i].n)}}
setInterval(tvSchedCheck,30000);
function rdSchedCheck(){let sc;try{sc=JSON.parse(ls.get('rd_sched')||'null')}catch(_){return}if(!sc||!S.rd.list[sc.i]||!S.rd.list[sc.i].u)return;
 const now=new Date(),hm=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0'),hoje=dayKey(now);
 if(hm===sc.t&&sc.last!==hoje){sc.last=hoje;ls.set('rd_sched',JSON.stringify(sc));try{rdPlay(sc.i);say('Programação: tocando '+rdName(sc.i))}catch(_){say('Não foi possível iniciar a programação')}}}
setInterval(rdSchedCheck,30000);
S.estudo=ls.get('modo_estudo')==='1';
setInterval(()=>{if(ls.get('bk_lembrete')!=='1')return;const last=+(ls.get('bk_last')||0),avisado=+(ls.get('bk_avisado')||0);const sem=7*864e5;
 if(Date.now()-last>sem&&Date.now()-avisado>sem){ls.set('bk_avisado',String(Date.now()));say('Lembrete: exporte um backup do painel em Ajustes');if(window.Notification&&Notification.permission==='granted')new Notification('Backup do painel',{body:'Exporte um backup em Ajustes.'})}},3600000);
$('#view').addEventListener('toggle',e=>{if(e.target.id==='lyrdet'&&e.target.open)lyricsLoad();if(e.target.id==='topdet'&&e.target.open)spTopLoad();if(e.target.id==='saveddet'&&e.target.open)savedLoad();if(e.target.id==='followdet'&&e.target.open)followedLoad();if(e.target.id==='albdet'&&e.target.open)albLoad();if(e.target.id==='reldet'&&e.target.open)releasesLoad();if(e.target.id==='poddet'&&e.target.open)podLoad();if(e.target.id==='spcontadet'&&e.target.open)contaLoad()},true);
function weekStart(d){const x=new Date(d);const w=(x.getDay()+6)%7;x.setDate(x.getDate()-w);x.setHours(0,0,0,0);return x}
function weekHtml(){const ini=weekStart(cd()),hoje=dayKey(new Date());const evs=S.ev||[],ts=S.tasks||[];
 const dias=[...Array(7).keys()].map(i=>{const x=new Date(ini);x.setDate(x.getDate()+i);return x});
 return '<section aria-label="Semana" style="margin:0 0 12px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b>Semana de '+ini.toLocaleDateString('pt-BR',{day:'2-digit',month:'short'})+'</b><button type="button" class="chip" data-a="cweek" aria-pressed="true">Ver o dia</button></div>'+
  dias.map(x=>{const k=dayKey(x);const e=evs.filter(r=>r[6]&&dayKey(new Date(r[6]))===k).sort((a,b)=>a[6]-b[6]);const t=ts.filter(t=>t.due===k&&!t.d);
   const linhas=e.map(r=>'<li style="font-size:13px">'+new Date(r[6]).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})+' · '+r[1]+'</li>').concat(t.map(t=>'<li style="font-size:13px;opacity:.8">Tarefa: '+esc(t.t)+'</li>')).join('');
   return '<div style="display:flex;gap:10px;padding:8px 0;border-top:1px solid rgba(255,255,255,.08)"><div style="width:74px;flex:none;'+(k===hoje?'font-weight:700;color:var(--acc,#fff)':'')+'">'+x.toLocaleDateString('pt-BR',{weekday:'short',day:'2-digit'})+'</div><ul style="margin:0;padding:0 0 0 14px;flex:1;min-width:0">'+(linhas||'<li class="sub" style="font-size:13px;list-style:none;margin-left:-14px">Livre</li>')+'</ul></div>'}).join('')+'</section>'}
function notes(){const v=$('#view');if(!v)return;v.querySelectorAll('.note').forEach(n=>n.remove());
 if(S.tab==='cal'&&S.cweek)v.insertAdjacentHTML('afterbegin',weekHtml());
 if(S.tab==='radio')v.insertAdjacentHTML('beforeend',schedHtml());radioExtrasDom();
 if(S.tab==='tv')v.insertAdjacentHTML('beforeend',tvSchedHtml());
 if(S.tab==='cal')v.insertAdjacentHTML('afterbegin',gapsHtml());
 if(S.tab==='pomo')v.insertAdjacentHTML('beforeend',pomoMonthHtml());if(S.tab==='pomo')v.insertAdjacentHTML('beforeend','<button type="button" class="chip" data-a="estudo" aria-pressed="'+(!!S.estudo)+'" style="margin-top:12px">'+(S.estudo?'Desligar modo estudo':'Modo estudo: rádio de fundo')+'</button>');
 if(S.tab==='pomo')estudoAjusta();
 if(S.tab==='pomo'&&!S.focus)v.insertAdjacentHTML('beforeend','<button type="button" class="chip" data-a="focus" aria-pressed="false" style="margin-top:12px">Modo foco</button>');if(S.tab==='pomo'&&S.focus)v.insertAdjacentHTML('beforeend','<button type="button" class="chip" data-a="focus" aria-pressed="true" style="margin-top:12px">Sair do modo foco</button>');if(S.tab==='pomo'&&S.p.run&&S.p.mode==='focus'&&pdur('focus')>=2700&&S.p.left>=pdur('focus')-5)v.insertAdjacentHTML('afterbegin','<div class="note" role="status">Foco longo: guarde o celular e deixe-o longe de você.</div>');
 if(S.tab==='pomo'&&S.p.mode==='rest'){const dicas=['Levante e alongue os ombros por 30 segundos.','Beba um copo de água.','Olhe para longe da tela por 20 segundos.','Respire fundo três vezes.'];v.insertAdjacentHTML('afterbegin','<div class="note" role="status">Pausa: '+dicas[Math.floor(Date.now()/6e4)%dicas.length]+'</div>')}
 if(S.tab==='music'&&S.tok){v.insertAdjacentHTML('beforeend',musicExtra());v.insertAdjacentHTML('beforeend',plBoxHtml()+topBoxHtml()+savedBoxHtml()+albBoxHtml()+relBoxHtml()+podBoxHtml());plListLoad();v.insertAdjacentHTML('beforeend',lyricsBox());v.insertAdjacentHTML('beforeend',histHtml());spHistLoad();v.insertAdjacentHTML('beforeend','<details class="dt" style="margin-top:12px" id="plrecdet"><summary>Playlists recentes</summary><div id="plrec"><p class="sub">Carregando…</p></div></details>');plRecentLoad()}
 if(S.tab==='cal')v.insertAdjacentHTML('afterbegin',nextEvHtml());
 if(S.tab==='tasks')v.insertAdjacentHTML('afterbegin',overdueHtml()+tplHtml()+tagsHtml());
 if(S.tab==='tasks')prioDom();
 if(S.tab==='radio')v.insertAdjacentHTML('beforeend',radioHistHtml());
 if(S.tab==='cal'){if(!S.cweek)v.insertAdjacentHTML('beforeend','<button type="button" class="chip" data-a="cweek" aria-pressed="false" style="margin-top:8px">Ver semana</button>');v.insertAdjacentHTML('beforeend',linksHtml());v.insertAdjacentHTML('beforeend','<button type="button" class="chip" data-a="ics" style="margin-top:12px">Exportar agenda (.ics)</button>');v.insertAdjacentHTML('beforeend',evForm());v.insertAdjacentHTML('beforeend',evDelHtml())}
 if(S.tab==='set')v.insertAdjacentHTML('beforeend','<details class="dt" style="margin-top:12px"><summary>Lembrete de backup</summary><p class="sub" style="margin:6px 0">Avisa uma vez por semana para exportar um backup em arquivo. O backup do OneDrive continua automático.</p><button type="button" class="chip" data-a="bkrem" aria-pressed="'+(ls.get('bk_lembrete')==='1')+'">'+(ls.get('bk_lembrete')==='1'?'Desligar lembrete':'Ligar lembrete semanal')+'</button></details><details class="dt" style="margin-top:12px"><summary>Duração de reuniões</summary><label style="display:flex;gap:10px;align-items:center;margin:8px 0">Duração padrão <select id="durPadrao">'+[30,45,60].map(n=>'<option value="'+n+'"'+((parseInt(ls.get('dur_padrao'),10)||30)===n?' selected':'')+'>'+n+' min</option>').join('')+'</select></label></details><details class="dt" style="margin-top:12px"><summary>Atalhos de teclado</summary><p class="sub" style="margin:6px 0">Uma tecla para cada aba. Deixe vazio para não usar.</p>'+TABS.map(([id,l])=>{let at={};try{at=JSON.parse(ls.get('atalhos')||'{}')||{}}catch(_){}return '<label style="display:flex;gap:10px;align-items:center;margin:6px 0">'+l+' <input data-atalho="'+id+'" maxlength="1" value="'+esc(at[id]||'')+'" style="width:48px;text-align:center" aria-label="Tecla para '+l+'"></label>'}).join('')+'</details><details class="dt" style="margin-top:12px"><summary>Não perturbe</summary><p class="sub" style="margin:6px 0">Silencia os avisos do painel enquanto um foco está rodando.</p><button type="button" class="chip" data-a="nop" aria-pressed="'+(ls.get('nop')==='1')+'">'+(ls.get('nop')==='1'?'Desligar não perturbe':'Ligar não perturbe')+'</button></details><details class="dt" style="margin-top:12px"><summary>Pausa longa</summary><label style="display:flex;gap:10px;align-items:center;margin:8px 0">Após quantos ciclos <select id="plongN">'+[2,3,4,5,6,8].map(n=>'<option value="'+n+'"'+(pomoLongAfter()===n?' selected':'')+'>'+n+' ciclos</option>').join('')+'</select></label><p class="sub" style="margin:0">A pausa vira longa depois desse número de ciclos de foco.</p></details>');if(S.tab==='set'&&S.tok)v.insertAdjacentHTML('beforeend','<details class="dt" style="margin-top:12px" id="spcontadet"><summary>Conta Spotify</summary><div id="contabox"><p class="sub">Abra para carregar.</p></div></details>');if(S.tab==='set')v.insertAdjacentHTML('beforeend','<details class="dt" style="margin-top:12px"><summary>Sons do foco</summary><label style="display:flex;gap:10px;align-items:center;margin:8px 0">Início do foco <select id="sndIni">'+[[880,'Agudo'],[659,'Médio'],[784,'Alto']].map(([f,n])=>'<option value="'+f+'"'+((+ls.get('snd_ini')||880)===f?' selected':'')+'>'+n+'</option>').join('')+'</select></label><label style="display:flex;gap:10px;align-items:center;margin:8px 0">Fim do foco <select id="sndFim">'+[[523,'Grave'],[392,'Médio'],[659,'Agudo']].map(([f,n])=>'<option value="'+f+'"'+((+ls.get('snd_fim')||523)===f?' selected':'')+'>'+n+'</option>').join('')+'</select></label></details><details class="dt" style="margin-top:12px"><summary>Tema</summary><div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0"><button type="button" class="chip" data-a="tpreset" data-k="padrao">Padrão</button><button type="button" class="chip" data-a="tpreset" data-k="azul">Noite azul</button><button type="button" class="chip" data-a="tpreset" data-k="floresta">Floresta</button><button type="button" class="chip" data-a="tpreset" data-k="roxo">Roxo</button><button type="button" class="chip" data-a="tpreset" data-k="claro">Claro</button></div><label style="display:flex;gap:10px;align-items:center;margin:8px 0">Fundo <input type="color" id="thBg" value="'+(temaAtual().bg||'#000000')+'"></label><label style="display:flex;gap:10px;align-items:center;margin:8px 0">Texto <input type="color" id="thInk" value="'+(temaAtual().ink||'#ffffff')+'"></label><label style="display:flex;gap:10px;align-items:center;margin:8px 0">Cartões <input type="color" id="thRow" value="'+(temaAtual().row||'#1c1c1e')+'"></label><label style="display:flex;gap:10px;align-items:center;margin:8px 0">Destaque <input type="color" id="thAcc" value="'+(temaAtual().acc||'#0a84ff')+'"></label><button type="button" class="chip" data-a="thReset">Tema padrão</button></details><details class="dt" style="margin-top:12px"><summary>Aparência</summary><button type="button" class="chip" data-a="mono" aria-pressed="'+(ls.get('opt_mono')==='1')+'">'+(ls.get('opt_mono')==='1'?'Usar ícones coloridos':'Usar ícones monocromáticos')+'</button></details>');if(S.tab==='set')v.insertAdjacentHTML('beforeend','<details class="dt" style="margin-top:12px"><summary>Registro de erros</summary><p class="sub">Guarda os 20 erros mais recentes neste aparelho. Copie e envie para análise.</p><button type="button" class="chip" data-a="errcopy">Copiar registro de erros</button></details>');
 if(S.tab==='tempo'){const aa=altAlert(WX.data);aa&&aa.forEach(x=>v.insertAdjacentHTML('afterbegin','<div class="note" role="status">'+x+'</div>'))}
 if(S.tab==='tempo'||S.tab==='cal'){const a=minAlert();if(a)v.insertAdjacentHTML('afterbegin','<div class="note" role="status">Previsão de '+a.mn+'° nas próximas 24 horas, abaixo do seu alerta de '+a.t+'°.</div>')}
 if(S.tab==='music'&&S.tok)v.insertAdjacentHTML('beforeend',spExtra());
 const add=t=>v.insertAdjacentHTML('afterbegin','<div class="note" role="status">'+t+'</div>');
 if(S.tab==='music'&&IS_IOS&&S.tok)add('Neste iPad e iPhone o painel não toca a música pelo próprio navegador. Abra o app do Spotify, toque uma faixa e escolha o aparelho na lista de aparelhos.');
  if(S.tab==='cal'&&WX.data&&WX.data.hourly&&WX.data.hourly.time){const h=WX.data.hourly,now=Date.now();
  (S.ev||[]).filter(r=>r[6]&&r[6]>now&&r[6]<now+4*36e5).forEach(r=>{const d=new Date(r[6]),tz=WX.data.timezone||undefined,key=cityKey(r[6]),i=h.time.indexOf(key),p=i>=0?h.precipitation_probability[i]:0;
   if(p>=60)add('Possível chuva forte em "'+r[1]+'" às '+d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',timeZone:tz})+' ('+p+'%). Leve guarda-chuva.')})}
 if(S.tab==='tasks')v.insertAdjacentHTML('afterbegin',tfHtml());
 if(S.tab==='pomo')v.insertAdjacentHTML('beforeend',pomoHistHtml())}
function tagsHtml(){const tg=[...new Set((S.tasks||[]).map(t=>t.tag).filter(Boolean))];if(!tg.length)return '';return '<div class="redact" role="group" aria-label="Filtrar por etiqueta" style="margin:0 0 10px">'+tg.map(g=>'<button type="button" class="chip" data-a="tagf" data-g="'+esc(g)+'" aria-pressed="'+(S.tagf===g)+'">#'+esc(g)+'</button>').join('')+'<button type="button" class="chip" data-a="tagf" data-g="" aria-pressed="'+(!S.tagf)+'">Todas</button></div>'}
function subInfo(t){const s=t.sub||[];return s.length?' · passos '+s.filter(x=>x.d).length+'/'+s.length:''}
function tfHtml(){return '<div class="redact" role="group" aria-label="Filtrar tarefas" style="margin:0 0 10px">'+[['todas','Todas'],['hoje','Hoje'],['semana','Últimos 7 dias'],['semdata','Sem data']].map(([k,l])=>'<button type="button" class="chip" data-a="tfilt" data-f="'+k+'" aria-pressed="'+((S.tf||'todas')===k)+'">'+l+'</button>').join('')+'</div>'}
function tfApply(){const f=S.tf||'todas',today=dayKey(new Date()),ago=dayKey(new Date(Date.now()-6*864e5)),ahead=dayKey(new Date(Date.now()+6*864e5));
 const ok=(cr,due)=>f==='todas'||(f==='hoje'&&(cr===today||due===today))||(f==='semana'&&((!!cr&&cr>=ago)||(!!due&&due>=today&&due<=ahead)))||(f==='semdata'&&!cr&&!due);
 document.querySelectorAll('#view li.tk').forEach(li=>{li.hidden=!ok(li.dataset.cr,li.dataset.due)||(!!S.tagf&&li.dataset.tag!==S.tagf)})}
function pdHistAdd(){const k=dayKey(new Date());let h={};try{h=JSON.parse(ls.get('pomo_hist')||'{}')||{}}catch(_){}h[k]=(h[k]||0)+1;const o={};Object.keys(h).sort().slice(-60).forEach(x=>{o[x]=h[x]});ls.set('pomo_hist',JSON.stringify(o))}
function pomoGoal(){const g=parseInt(ls.get('pomo_goal'),10);return g>=1&&g<=12?g:4}
function pomoHistHtml(){let h={};try{h=JSON.parse(ls.get('pomo_hist')||'{}')||{}}catch(_){}let wk=0;for(let i=0;i<7;i++)wk+=h[dayKey(new Date(Date.now()-i*864e5))]||0;
 const hoje=h[dayKey(new Date())]||0,g=pomoGoal(),pc=Math.min(100,Math.round(hoje/g*100));
 return '<div class="goal"><div class="gl"><span>Meta de hoje: <b>'+hoje+' de '+g+'</b> ciclos</span><span><button type="button" class="chip" data-a="pgoal" data-d="-1" aria-label="Diminuir meta">−</button> <button type="button" class="chip" data-a="pgoal" data-d="1" aria-label="Aumentar meta">+</button></span></div><div class="gb" role="progressbar" aria-label="Progresso da meta de hoje" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+pc+'"><i class="'+(hoje>=g?'ok':'')+'" style="width:'+pc+'%"></i></div><p class="sub" style="margin:4px 0 0">Últimos 7 dias: '+wk+' ciclo(s)'+(hoje>=g?' · meta batida!':'')+'</p>'+pomoWeek(h)+'<p class="sub" style="margin:6px 0 0">Este mês: '+Object.keys(h).filter(k=>k.slice(0,7)===dayKey(new Date()).slice(0,7)).reduce((t,k)=>t+(h[k]||0),0)+' ciclo(s)</p></div>'}
function pomoMonthHtml(){let h={};try{h=JSON.parse(ls.get('pomo_hist')||'{}')||{}}catch(_){}
 const dias=[...Array(30).keys()].reverse().map(i=>new Date(Date.now()-i*864e5));const max=Math.max(1,...dias.map(d=>h[dayKey(d)]||0));const tot=dias.reduce((t,d)=>t+(h[dayKey(d)]||0),0);
 return '<section class="tp-card" aria-label="Foco nos últimos 30 dias" style="margin-top:12px"><div class="tp-k">Últimos 30 dias · '+tot+' ciclos</div><div style="display:flex;align-items:flex-end;gap:3px;height:70px;margin-top:8px" role="img" aria-label="Ciclos por dia nos últimos 30 dias: total '+tot+'">'+dias.map(d=>{const n=h[dayKey(d)]||0;return '<i style="flex:1;display:block;min-height:2px;height:'+Math.round(n/max*100)+'%;background:var(--acc,#30d158);border-radius:3px 3px 1px 1px"></i>'}).join('')+'</div></section>'}
function pomoWeek(h){const dias=[...Array(7).keys()].reverse().map(i=>new Date(Date.now()-i*864e5));const max=Math.max(1,...dias.map(d=>h[dayKey(d)]||0));
 return '<div class="wk" role="img" aria-label="Ciclos concluídos nos últimos 7 dias: '+dias.map(d=>(h[dayKey(d)]||0)).join(', ')+'">'+dias.map(d=>{const n=h[dayKey(d)]||0;return '<div><i style="height:'+Math.round(n/max*100)+'%"></i><span>'+cap(fWd.format(d)).replace(/\.?$/,'').slice(0,3)+'</span></div>'}).join('')+'</div>'}
function view(){if(S.grid){$('#view').innerHTML=gridView();artBg();return}if(tvHlsObj&&S.tab!=='tv'){tvHlsObj.destroy();tvHlsObj=null}viewInner();if(S.tab==='tasks')tfApply();notes();addMoveBtns();extrasDom();undoUI();musicPlusDom();musicMoreDom();navLabels();if(S.tab==='music')spLoadQueue();if(S.tab==='tempo')tpMapInit();if(S.tab==='tempo'&&ls.get('radar')==='1')radarDraw();artBg()}
function gridView(){return '<h2>Apps</h2><div class="appgrid">'+TABS.map(([id,l,i])=>`<button type="button" class="appbtn" data-a="gridpick" data-id="${id}" style="--tc:${TAB_COL[id]||'#636366'}" aria-label="${l}">${ic(i)}<span>${l}</span></button>`).join('')+'</div>'}
function gridPick(id){S.grid=false;$('#grid').setAttribute('aria-pressed','false');pick(id)}
function tick(paintOnly){tickInner(paintOnly);artBg()}
const accCache=new Map(),accPending=new Set();
function accLift(r,g,b){const mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2/255;if(l>=.55)return [r,g,b];const k=.35;return [r+(255-r)*k,g+(255-g)*k,b+(255-b)*k]}
function accFor(url,cb){if(accCache.has(url))return cb(accCache.get(url));if(accPending.has(url))return;accPending.add(url);
 const im=new Image();im.crossOrigin='anonymous';
 const done=v=>{accPending.delete(url);accCache.set(url,v);cb(v)};
 im.onload=()=>{try{const c=document.createElement('canvas');c.width=c.height=24;const x=c.getContext('2d');if(!x)return done(null);x.drawImage(im,0,0,24,24);const p=x.getImageData(0,0,24,24).data;
   let r=0,g=0,b=0,k=0;for(let i=0;i<p.length;i+=4){const R=p[i],G=p[i+1],B=p[i+2],mx=Math.max(R,G,B),mn=Math.min(R,G,B),l=(mx+mn)/510,sat=mx===mn?0:(mx-mn)/(255-Math.abs(mx+mn-255));
    if(sat>.3&&l>.2&&l<.8){r+=R;g+=G;b+=B;k++}}
   if(!k){for(let i=0;i<p.length;i+=4){r+=p[i];g+=p[i+1];b+=p[i+2];k++}}
   const [lr,lg,lb]=accLift(r/k,g/k,b/k);done('rgb('+Math.round(lr)+','+Math.round(lg)+','+Math.round(lb)+')')}
  catch(_){done(null)}};
 im.onerror=()=>done(null);im.src=url}
function artBg(){const n=$('#notch');if(!n)return;if(S.tab!=='music'&&ls.get('tema_capa')==='1'&&document.documentElement.dataset.theme&&!ls.get('theme')){applyTheme()}const a=S.tab==='music'&&$('#view .np-art');const bg=a?(a.style.backgroundImage||''):'';
 if(bg&&bg!=='none'){n.style.setProperty('--art',bg);n.dataset.art='1';const m=bg.match(/url\(["']?(.*?)["']?\)/);
  if(m&&m[1])accFor(m[1],col=>{if(col&&n.dataset.art==='1'){n.style.setProperty('--acc',col);if(ls.get('tema_capa')==='1'){const rgb=col.match(/\d+/g).map(Number),lum=(rgb[0]*299+rgb[1]*587+rgb[2]*114)/1000;document.documentElement.dataset.theme=lum>150?'light':'dark'}}})}
 else{n.style.removeProperty('--art');n.style.removeProperty('--acc');n.dataset.art='0'}}
function paintWx(){if(S.tab==='tempo'&&S.open&&$('#view'))$('#view').innerHTML=tempoView();const w=$('#wcur');if(w)w.textContent=WX.loc.n}
async function wxLoad(){if(WX.busy)return;WX.busy=true;const loc=WX.loc;
 try{const r=await fetch('https://api.open-meteo.com/v1/forecast?'+new URLSearchParams({latitude:loc.lat,longitude:loc.lon,current:'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m,weather_code,surface_pressure,dew_point_2m,visibility',hourly:'temperature_2m,weather_code,precipitation_probability,wind_speed_10m',daily:'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset',timezone:'auto',forecast_days:'10'}));
  if(!r.ok)throw 0;const j=await r.json();if(!j.current||!j.daily)throw 0;if(loc===WX.loc){WX.data=j;WX.at=Date.now();try{ls.set('wx_cache',JSON.stringify({loc:loc.n,at:WX.at,d:j}))}catch(_){}}}
 catch(_){}
 WX.busy=false;paintWx();if(loc!==WX.loc)wxLoad()}
let lastMin=-1;
function paintClock(){const now=new Date(),el=$('#hclk');
 if(el){const t=fClock.format(now);if(el.textContent!==t)el.textContent=t}
 const mm=+now.toLocaleString('en-US',{timeZone:TZ,minute:'numeric'});
 if(mm!==lastMin){lastMin=mm;const d=cap(fDate.format(now)),hm2=now.toLocaleTimeString('pt-BR',{timeZone:TZ,hour:'2-digit',minute:'2-digit'}).replace(':',' horas e ')+' minutos';
  const dt=$('#hdate');if(dt)dt.textContent=d;const sr=$('#hsr');if(sr)sr.textContent='Horário de São Paulo: '+d+', '+hm2}}
async function wxFind(q){const r=await fetch('https://geocoding-api.open-meteo.com/v1/search?'+new URLSearchParams({name:q,count:'1',language:'pt',format:'json'}));if(!r.ok)throw 0;const j=await r.json();return (j.results||[])[0]||null}
async function wxSet(q){const m=$('#wmsg');m.textContent='Buscando…';
 try{const g=await wxFind(q);if(!g){m.textContent='Cidade não encontrada. Tente outro nome.';return}
  WX.loc={n:[g.name,g.admin1].filter(Boolean).join(', ').slice(0,60),lat:g.latitude,lon:g.longitude};ls.set('wx_loc',JSON.stringify(WX.loc));WX.data=null;
  paintWx();await wxLoad();m.textContent='Clima de '+WX.loc.n;say('Clima de '+WX.loc.n)}
 catch(_){m.textContent='Não foi possível buscar a cidade agora.'}}
$('#view').addEventListener('submit',e=>{if(e.target.id!=='wform')return;e.preventDefault();const q=$('#wcity').value.trim();
 if(q.length<2){$('#wmsg').textContent='Digite pelo menos 2 letras.';return}wxSet(q)});
$('#view').addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-a=wdef]');if(!b)return;
 WX.loc=WX_DEF;ls.set('wx_loc',JSON.stringify(WX_DEF));WX.data=null;paintWx();$('#wmsg').textContent='Clima de '+WX_DEF.n;wxLoad();say('Clima de '+WX_DEF.n)});
/* Hunter.FM e Dumont FM: links informados pelo usuário. Preenche as entradas já salvas e acrescenta as que faltam (migração única) */
const RD_V6=[
 {n:"Hunter.FM Sertanejo",u:"https://live.hunter.fm/sertanejo_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM pop",u:"https://live.hunter.fm/pop_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM Pagode",u:"https://live.hunter.fm/pagode_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM Rock",u:"https://live.hunter.fm/rock_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM Moda Sertaneja",u:"https://live.hunter.fm/modasertaneja_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM Hunter Gospel",u:"https://live.hunter.fm/gospel_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM Hits Brasil",u:"https://live.hunter.fm/hitsbrasil_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM MPB",u:"https://live.hunter.fm/mpb_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM Pop2K",u:"https://live.hunter.fm/pop2k_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM Canal 80",u:"https://live.hunter.fm/80s_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM Master",u:"https://live.hunter.fm/master_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM Pisadinha",u:"https://live.hunter.fm/pisadinha_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM Tropical",u:"https://live.hunter.fm/tropical_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Hunter.FM lo-Fi",u:"https://live.hunter.fm/lofi_stream?ag=mp3",g:"Brasil · estilos e regionais"},
 {n:"Rádio Dumont FM 104.3",u:"https://8402.brasilstream.com.br/stream",g:"Brasil · estilos e regionais",alt:"Dumont FM 104.3"}];
if(!ls.get('radios_v6')){const L=S.rd.list;RD_V6.forEach(d=>{const k=L.findIndex(x=>nrm(x.n)===nrm(d.n)||(d.alt&&nrm(x.n)===nrm(d.alt)));if(k>=0){if(!L[k].u)L[k].u=d.u;L[k].n=d.n;L[k].g=d.g}else L.push({n:d.n,u:d.u,g:d.g})});ls.set('radios',JSON.stringify(L));ls.set('radios_v6','1')}
/* ===== TV: canais ao vivo (links oficiais informados pelo usuário) ===== */
const TV_DEF=[
 ['TV Brasil','https://tvbrasil.ebc.com.br/'],
 ['TV Câmara','https://www.camara.leg.br/tv'],
 ['TV Senado','https://www12.senado.leg.br/tv'],
 ['TV Justiça','https://www.youtube.com/TVJusticaOficial'],
 ['TV Cultura','https://cultura.uol.com.br/aovivo'],
 ['Band','https://bandplay.com/'],
 ['Band Sports','https://www.dailymotion.com/bandsportsAoVivoSinal'],
 ['Globo e Canal Futura','https://globoplay.globo.com/'],
 ['Record','https://www.playplus.com/'],
 ['Sesc TV','https://sesctv.org.br/noar'],
 ['Rede TVT','https://www.dailymotion.com/redetvt'],
 ['TV Gazeta','https://www.dailymotion.com/tvgazeta'],
 ['Al Jazeera English','https://www.aljazeera.com/live'],
 ['DW','https://www.dw.com/'],
 ['France 24','https://www.france24.com/en/live-news'],
 ['Euronews','https://www.euronews.com/live'],
 ['Arte','https://www.arte.tv/']
].map(([n,u])=>({n,u}));
S.tv={cur:0,list:[]};
try{const l=JSON.parse(ls.get('tv_list')||'null');const cl=Array.isArray(l)?l.slice(0,100).map(x=>({n:String((x&&x.n)||'').slice(0,40),u:String((x&&x.u)||'').slice(0,300)})).filter(x=>x.n):[];S.tv.list=cl.length?cl:TV_DEF.slice()}catch(_){S.tv.list=TV_DEF.slice()}
const tvSave=()=>ls.set('tv_list',JSON.stringify(S.tv.list));
const tvOk=u=>!u||/^https:\/\/\S+$/i.test(u);
const tvYT=u=>/^https:\/\/(www\.)?(youtube(-nocookie)?\.com\/embed\/|youtube\.com\/embed\/)/i.test(u);
const tvM3u=u=>/^https:\/\/\S+\.m3u8(\?\S*)?$/i.test(u);
function tvPlayer(c){
 if(!c||!c.u)return '<div class="tvbox"><p class="sub">Sem link configurado para este canal. Adicione o link abaixo.</p></div>';
 if(tvYT(c.u))return '<div class="tvbox"><iframe src="'+esc(c.u)+'" title="'+esc(c.n)+'" allow="autoplay; fullscreen; encrypted-media" allowfullscreen sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"></iframe></div>';
 if(tvM3u(c.u))return '<div class="tvbox"><video id="tvv" controls playsinline aria-label="'+esc(c.n)+'"></video></div>';
 return '<div class="tvbox"><p class="sub">Este link não pode ser exibido aqui. <a href="'+esc(c.u)+'" target="_blank" rel="noopener">&nbsp;Abrir em nova aba</a></p></div>'}
let tvHlsObj=null;
function tvHls(url){const v=$('#tvv');if(!v)return;
 if(v.canPlayType('application/vnd.apple.mpegurl')){v.src=url;return}
 const go=()=>{if(!window.Hls||!window.Hls.isSupported())return;if(tvHlsObj)tvHlsObj.destroy();tvHlsObj=new window.Hls();tvHlsObj.loadSource(url);tvHlsObj.attachMedia(v)};
 if(window.Hls)return go();
 if(window.__hlsLoading)return;window.__hlsLoading=true;const sc=document.createElement('script');sc.src='https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.5.13/hls.min.js';sc.onload=go;sc.onerror=()=>{window.__hlsLoading=false;say('Não foi possível carregar o player de vídeo')};document.head.appendChild(sc)}
function tvAfter(){const c=S.tv.list[S.tv.cur];if(c&&tvM3u(c.u||''))tvHls(c.u)}
function tvView(){const L=S.tv.list,c=L[S.tv.cur];
 return `<h2>TV</h2>${tvPlayer(c)}
 <p class="sub" role="status">${c?esc(c.n)+' · '+(S.tv.cur+1)+' de '+L.length:'Nenhum canal cadastrado'}</p>
 <div class="ctrl"><button type="button" class="ib" data-a="tvprev" aria-label="Canal anterior">${ic('prev')}</button><button type="button" class="ib" data-a="tvnext" aria-label="Próximo canal">${ic('next')}</button></div>
 <h3 class="tkh">Canais</h3>
 ${L.map((x,i)=>`<div class="row"><button type="button" class="grow" data-a="tvsel" data-i="${i}" aria-current="${i===S.tv.cur?'true':'false'}" style="text-align:left;background:none;border:0;color:inherit;font:inherit;padding:6px 0">${esc(x.n)}${x.u?'':' <span class="sub">(sem link)</span>'}</button><button type="button" class="ib sm" data-a="tvdel" data-i="${i}" aria-label="Remover canal: ${esc(x.n)}">${ic('x')}</button></div>`).join('')}
 <h3 class="tkh">Adicionar canal</h3>
 <form id="tvform" class="add"><label class="sr" for="tvn">Nome do canal</label><input id="tvn" placeholder="Nome do canal" maxlength="40" autocomplete="off"><label class="sr" for="tvu">Link de transmissão (https)</label><input id="tvu" placeholder="Link (https://…)" maxlength="300" autocomplete="off" inputmode="url"><button>Adicionar</button></form>
 <p class="err" id="tverr" role="alert"></p>
 <p class="sub">Use somente transmissões oficiais e gratuitas. Links do YouTube no formato youtube.com/embed/… tocam aqui. Endereços .m3u8 também.</p>`}
function tvAdd(){const n=$('#tvn').value.trim().slice(0,40),u=$('#tvu').value.trim();
 if(!n){$('#tverr').textContent='Informe o nome do canal.';$('#tvn').focus();return}
 if(!tvOk(u)){$('#tverr').textContent='O link precisa começar com https://';$('#tvu').focus();return}
 S.tv.list.push({n,u});if(S.tv.list.length>100)S.tv.list.shift();S.tv.cur=S.tv.list.length-1;tvSave();view();$('#tvn').focus();say('Canal adicionado: '+n)}
function tvAct(a,b){const T=S.tv,n=T.list.length;
 if(a==='tvprev'||a==='tvnext'){if(!n)return true;T.cur=(T.cur+(a==='tvnext'?1:-1)+n)%n;view();const x=$('#view [data-a="'+a+'"]');if(x)x.focus();say(T.list[T.cur].n+', canal '+(T.cur+1)+' de '+n);return true}
 if(a==='tvsel'){T.cur=+b.dataset.i;view();say(T.list[T.cur].n);return true}
 if(a==='tvdel'){const i=+b.dataset.i;const nm=T.list[i]&&T.list[i].n;T.list.splice(i,1);if(T.cur>=T.list.length)T.cur=Math.max(0,T.list.length-1);tvSave();view();const x=$('#view [data-a="tvdel"]')||$('#tvn');if(x)x.focus();say('Canal removido: '+(nm||''));return true}
 return false}
{const hw=$('#hwx'),vw=$('#view');if(hw&&vw)vw.parentNode.insertBefore(hw,vw)}
{const hw=$('#view'),nav=document.createElement('div');nav.id='navbtns';hw.parentNode.insertBefore(nav,hw);const b=document.createElement('button');b.id='back';b.type='button';b.className='ib';b.setAttribute('aria-label','Voltar para a aba anterior');b.innerHTML=ic('back');nav.appendChild(b);const fw=document.createElement('button');fw.id='fwd';fw.type='button';fw.className='ib';fw.setAttribute('aria-label','Avançar para a aba seguinte');fw.addEventListener('click',()=>{const i=TABS.findIndex(t=>t[0]===S.tab);if(i>=0&&i<TABS.length-1)pick(TABS[i+1][0])});nav.appendChild(fw);
 b.addEventListener('click',()=>{const i=TABS.findIndex(t=>t[0]===S.tab);if(i>0)pick(TABS[i-1][0])});
 const g=document.createElement('button');g.id='grid';g.type='button';g.className='ib';g.setAttribute('aria-label','Todos os apps');g.setAttribute('aria-pressed','false');g.innerHTML=ic('grid');hw.parentNode.insertBefore(g,hw);
 g.addEventListener('click',()=>{S.grid=!S.grid;g.setAttribute('aria-pressed',String(S.grid));view()});
 $('#tabs').addEventListener('click',()=>{if(S.grid){S.grid=false;g.setAttribute('aria-pressed','false')}},true);
 $('#view').addEventListener('click',e=>{const x=e.target.closest('[data-a="gridpick"]');if(x)gridPick(x.dataset.id);if(e.target.closest('[data-a="nsel"]')){notaSel(e.target.closest('[data-a="nsel"]').dataset.id);view();return}if(e.target.closest('[data-a="linkdel"]')){linkDel(e.target.closest('[data-a="linkdel"]').dataset.id);return}if(e.target.closest('[data-a="lerResumo"]')){lerResumo();return}if(e.target.closest('[data-a="gopen"]')){const b=e.target.closest('[data-a="gopen"]');if(b.dataset.id){notaSel(b.dataset.id)}pick(b.dataset.go);return}if(e.target.closest('[data-a="pwcopy"]')){const t=$('#pwout').textContent;if(t){navigator.clipboard.writeText(t).then(()=>say('Senha copiada')).catch(()=>say('Não foi possível copiar'))}return}if(e.target.closest('[data-a="nop"]')){ls.set('nop',ls.get('nop')==='1'?'0':'1');view();say(ls.get('nop')==='1'?'Não perturbe ligado durante o foco':'Não perturbe desligado');return}if(e.target.closest('[data-a="retroShare"]')){shareRetro();return}if(e.target.closest('[data-a="nimgdel"]')){const L=notesList(),c=notaCurItem(L);c.imgs=(c.imgs||[]).filter((_,i)=>i!==+e.target.closest('[data-a="nimgdel"]').dataset.i);notesSave(L);view();return}if(e.target.closest('[data-a="nexp"]')){notaExport();return}if(e.target.closest('[data-a="nnew"]')){notaNew();return}if(e.target.closest('[data-a="nnewev"]')){notaNewRef('ev:'+e.target.closest('[data-a="nnewev"]').dataset.ev);return}if(e.target.closest('[data-a="lnk"]')){const b=e.target.closest('[data-a="lnk"]'),sel=$('#lk'+b.dataset.k);if(!sel||!sel.value)return;const t=(S.tasks||[]).find(x=>String(x.id)===sel.value);if(t){t.ev=b.dataset.ev;t.mod=Date.now();t.dy=true;save();view();say('Tarefa ligada ao compromisso')}return}if(e.target.closest('[data-a="ndel"]')){notaDel();return}if(e.target.closest('[data-a="focus"]')){S.focus=!S.focus;$('#notch').dataset.focus=S.focus?'1':'0';view();return}if(e.target.closest('[data-a="cweek"]')){S.cweek=!S.cweek;view();return}if(e.target.closest('[data-a="tplsave"]')){tplSaveNew();return}if(e.target.closest('[data-a="tpldel"]')){tplDelete(e.target.closest('[data-a="tpldel"]').dataset.k);return}if(e.target.closest('[data-a="tagf"]')){const g=e.target.closest('[data-a="tagf"]').dataset.g;S.tagf=g||'';view();return}if(e.target.closest('[data-a="tmpl"]')){tplAdd(e.target.closest('[data-a="tmpl"]').dataset.k);return}if(e.target.closest('[data-a="evMove"]')){evMove(e.target.closest('[data-a="evMove"]').dataset.ev);return}if(e.target.closest('[data-a="bkrem"]')){ls.set('bk_lembrete',ls.get('bk_lembrete')==='1'?'0':'1');view();say(ls.get('bk_lembrete')==='1'?'Lembrete semanal ligado':'Lembrete desligado');return}if(e.target.closest('[data-a="ics"]')){icsExport();return}if(e.target.closest('[data-a="evdel"]')){evDelete();return}if(e.target.closest('[data-a="swgo"]')){if(sw.run){sw.acc=swMs();sw.run=false}else{sw.t0=Date.now();sw.run=true}view();return}if(e.target.closest('[data-a="swreset"]')){sw={run:false,acc:0,t0:0};view();return}if(e.target.closest('[data-a="ditado"]')){ditar();return}if(e.target.closest('[data-a="tagain"]')){const u=e.target.closest('[data-a="tagain"]').dataset.u;spReplay(u).then(()=>say('Tocando de novo'));return}
 if(e.target.closest('[data-a="tcapa"]')){const on=ls.get('tema_capa')!=='1';ls.set('tema_capa',on?'1':'0');if(!on)applyTheme();view();say(on?'Tema pela capa ligado':'Tema pela capa desligado');return}
 if(e.target.closest('[data-a="radar"]')){ls.set('radar',ls.get('radar')==='1'?'0':'1');if(ls.get('radar')!=='1'&&radarLayer){radarLayer.remove();radarLayer=null}view();return}if(e.target.closest('[data-a="plUp"]')||e.target.closest('[data-a="plDown"]')){const b=e.target.closest('[data-a^="pl"][data-i]');plMove(b.dataset.pl,+b.dataset.i,b.dataset.a==='plUp'?-1:1);return}
 if(e.target.closest('[data-a="plRen"]')){const b=e.target.closest('[data-a="plRen"]');plRename(b.dataset.id,b.dataset.name);return}
 if(e.target.closest('[data-a="plFol"]')){plFollow(e.target.closest('[data-a="plFol"]').dataset.id,true);return}
 if(e.target.closest('[data-a="plUnf"]')){plFollow(e.target.closest('[data-a="plUnf"]').dataset.id,false);return}
 if(e.target.closest('[data-a="albSave"]')){albToggle();return}if(e.target.closest('[data-a="epSave"]')){epSave();return}if(e.target.closest('[data-a="plCover"]')){plCoverPick(e.target.closest('[data-a="plCover"]').dataset.id);return}if(e.target.closest('[data-a="plDesc"]')){plDesc(e.target.closest('[data-a="plDesc"]').dataset.id);return}
 if(e.target.closest('[data-a="plView"]')){S.plShow=e.target.closest('[data-a="plView"]').dataset.id;view();return}if(e.target.closest('[data-a="plDel"]')){const b=e.target.closest('[data-a="plDel"]');plRemove(b.dataset.pl,b.dataset.uri);return}if(e.target.closest('[data-a="plAdd"]')){spPlAddCurrent(e.target.closest('[data-a="plAdd"]').dataset.id);return}if(e.target.closest('[data-a="follow"]')){spFollowToggle();return}if(e.target.closest('[data-a="sono"]')){S.sono=!S.sono;$('#notch').dataset.sono=S.sono?'1':'0';view();say(S.sono?'Modo sono ligado: só relógio e capa':'Modo sono desligado');return}if(e.target.closest('[data-a="share"]')){shareTrack();return}if(e.target.closest('[data-a="tpreset"]')){const k=e.target.closest('[data-a="tpreset"]').dataset.k,p=TEMAS[k];if(p)ls.set('tema',JSON.stringify(p));else ls.del('tema');ls.del('tema_bg');ls.del('tema_acc');applyColors();view();say('Tema: '+e.target.closest('[data-a="tpreset"]').textContent.trim());return}
 if(e.target.closest('[data-a="thReset"]')){ls.del('tema');ls.del('tema_bg');ls.del('tema_acc');applyColors();view();say('Tema padrão restaurado');return}if(e.target.closest('[data-a="mono"]')){const on=ls.get('opt_mono')!=='1';ls.set('opt_mono',on?'1':'0');$('#notch').dataset.mono=on?'1':'0';view();say(on?'Ícones monocromáticos':'Ícones coloridos');return}if(e.target.closest('[data-a="rschSet"]')){const t=$('#rschT').value,i=+$('#rschI').value;if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(t)){say('Informe um horário');return}ls.set('rd_sched',JSON.stringify({t,i,last:''}));view();say('Programado para '+t+' · '+rdName(i));return}
 if(e.target.closest('[data-a="tvschSet"]')){const t=$('#tvschT').value,i=+$('#tvschI').value;if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(t)){say('Informe um horário');return}ls.set('tv_sched',JSON.stringify({t,i,last:''}));view();say('Programado para '+t+' · '+S.tv.list[i].n);return}
 if(e.target.closest('[data-a="tvschDel"]')){ls.del('tv_sched');view();say('Programação cancelada');return}
 if(e.target.closest('[data-a="rschDel"]')){ls.del('rd_sched');view();say('Programação cancelada');return}
 if(e.target.closest('[data-a="errcopy"]')){const t=ls.get('err_log')||'[]';(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>say('Registro copiado')).catch(()=>say('Não foi possível copiar. Registro: '+t.length+' caracteres'));return}const pg=e.target.closest('[data-a="pgoal"]');if(pg){const g=Math.min(12,Math.max(1,pomoGoal()+(+pg.dataset.d)));ls.set('pomo_goal',String(g));view();const n=$('#view [data-a="pgoal"][data-d="'+pg.dataset.d+'"]');if(n)n.focus();say('Meta diária: '+g+' ciclos')}const f=e.target.closest('[data-a="tfilt"]');if(f){S.tf=f.dataset.f;view();const n=$('#view [data-a="tfilt"][data-f="'+S.tf+'"]');if(n)n.focus()}})}
$('#view').addEventListener('change',e=>{if(e.target.id==='rscm'){const v=Math.round(+e.target.value);if(v>=1&&v<=1440){S.rd.sleepM=v;S.rd.sleepAt=Date.now()+v*60000;const x=$('#rslp');if(x)x.textContent=sleepTxt();say('A rádio vai parar em '+v+' minutos')}else{say('Informe entre 1 e 1440 minutos')}}if(e.target.id==='spvol')spApi('/me/player/volume?volume_percent='+e.target.value,{method:'PUT'})});
try{const c=JSON.parse(ls.get('wx_cache')||'null');if(c&&c.d&&c.loc===WX.loc.n){WX.data=c.d;WX.at=c.at}}catch(_){}
setOpen(true,true);
paintClock();paintWx();wxLoad();
setInterval(paintClock,1000);
setInterval(()=>{if(Date.now()-WX.at>30*60000)wxLoad()},60000);
/* Histórico de copiados na versão web: captura copiar/recortar feitos dentro da página */
const CLIP_MAX=50;
const clipSens=t=>/(\d[ -]?){13,19}/.test(t);
function clipAdd(text){
 if(ls.get('opt_clip')==='0')return;
 const t=String(text||'').replace(/\s+$/,'');
 if(!t.trim())return;
 const firstFree=S.clip.findIndex(c=>!c.pin);
 if(firstFree>=0&&S.clip[firstFree].t===t)return;
 const sens=clipSens(t);
 const item={id:'w'+Date.now()+Math.random().toString(36).slice(2,6),a:sens?'!':'T',c:sens?'#b45309':'#52525b',t:t.slice(0,2000),h:new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),pin:false,sens,hide:sens};
 S.clip.splice(firstFree<0?S.clip.length:firstFree,0,item);
 let n=0;S.clip=S.clip.filter(c=>c.pin||++n<=CLIP_MAX);
 if(S.tab==='clip'&&S.open)keepFocus(drawClip);
}
if(!window.notchApp){
 const grabClip=()=>{const el=document.activeElement;let t='';
  if(el&&(el.tagName==='INPUT'||el.tagName==='TEXTAREA')&&el.type!=='password'&&typeof el.selectionStart==='number')t=el.value.slice(el.selectionStart,el.selectionEnd);
  if(!t){const sel=window.getSelection();t=sel?sel.toString():''}
  clipAdd(t)};
 document.addEventListener('copy',grabClip);
 document.addEventListener('cut',grabClip);
}

/* Aparelho (lista), playlists sugeridas e ações dos novos controles. */
$('#view').addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a;
 if(a==='devtoggle'){S.devOpen=!S.devOpen;spPaint();if(S.devOpen)spDevs();return}
 if(a==='devpick'){const id=b.dataset.id;spApi('/me/player',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({device_ids:[id],play:true})}).then(()=>{if(S.err)spFail('Não foi possível trocar de aparelho');else say('Reproduzindo em '+b.textContent.trim().replace(/ · tocando$/,''));setTimeout(()=>{spSync();spDevs()},900)});return}
 if(a==='plsplay'){const u=b.dataset.u;spApi('/me/player/play',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({context_uri:u})}).then(()=>{if(S.err)spFail('Não foi possível tocar a playlist');else say('Tocando playlist')});return}
});
$('#view').addEventListener('toggle',e=>{if(e.target.id==='pls'&&e.target.open)plsLoad()},true);
