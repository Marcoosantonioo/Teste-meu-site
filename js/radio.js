/* Aba Rádio: funções da tela de rádio (carregado antes de notch.js). Mesmo escopo global do painel. */
function rdMerge(list){const out=list.filter(x=>x.n||x.u).map(x=>({n:x.n,u:x.u,g:x.g||''}));
 RD_DEF.forEach(d=>{const i=out.findIndex(x=>nrm(x.n)===nrm(d.n)||(d.u&&x.u===d.u));if(i<0)out.push({n:d.n,u:d.u,g:d.g});else if(!out[i].g)out[i].g=d.g});return out}

function rdSort(list){const rank=new Map(RD_DEF.map((d,i)=>[nrm(d.n),i]));return list.map((x,i)=>({x,i,r:rank.has(nrm(x.n))?rank.get(nrm(x.n)):1e6})).sort((a,b)=>a.r-b.r||a.i-b.i).map(o=>o.x)}

function rdMedia(){if(!('mediaSession' in navigator))return;try{const ms=navigator.mediaSession;ms.metadata=new MediaMetadata({title:rdName(RADIO.s.i>=0?RADIO.s.i:RADIO.s.cur),artist:'Rádio'});
 ms.setActionHandler('nexttrack',()=>rdStep(1));ms.setActionHandler('previoustrack',()=>rdStep(-1));ms.setActionHandler('pause',()=>rdStop());ms.setActionHandler('play',()=>rdPlay(RADIO.s.cur))}catch(_){}}

function rdRender(){$('#notch').classList.toggle('playing',S.m.play||RADIO.s.on);const rtIc=document.querySelector('#t-radio svg');if(rtIc)rtIc.outerHTML=ic(RADIO.s.on?'radio-on':'radio-off');if(S.tab!=='radio'||RADIO.s.edit)return;
 const a=document.activeElement,sel=a&&a.dataset&&a.dataset.a?'[data-a="'+a.dataset.a+'"]'+(a.dataset.i!==undefined?'[data-i="'+a.dataset.i+'"]':''):'';view();if(sel){const n=$('#view '+sel);if(n)n.focus()}}

function rdDetach(){if(RADIO.s.hls){try{RADIO.s.hls.destroy()}catch(_){}RADIO.s.hls=null}}

function rdStop(){RADIO.s.tok++;rdDetach();try{RA.pause();RA.removeAttribute('src');RA.load()}catch(_){}RADIO.s.i=-1;RADIO.s.st='';RADIO.s.on=false;rdRender()}

function emissoraForaAr(){const k=RADIO.s.i;if(k<0||!RADIO.s.list[k])return;const n=rdName(k);say('Emissora fora do ar: '+n);notifyBg('Rádio fora do ar',n+' parou de tocar')}

function rdFail(){if((RADIO.s.retry||0)>=3)emissoraForaAr();if((RADIO.s.retry||0)<3&&RADIO.s.i>=0&&RADIO.s.list[RADIO.s.i]&&RADIO.s.list[RADIO.s.i].u){const k=RADIO.s.i;RADIO.s.retry=(RADIO.s.retry||0)+1;setTimeout(()=>{if(RADIO.s.i===k&&RADIO.s.st==='err')rdPlay(k)},2500*RADIO.s.retry)}RADIO.s.st='err';RADIO.s.on=false;rdRender();say('Não foi possível tocar '+rdName(RADIO.s.i))}

function rdPlay(i){const st=RADIO.s.list[i];if(!st||!st.u)return;RADIO.s.t0=Date.now();
 RADIO.s.cur=i;ls.set('rd_cur',i);RADIO.s.i=i;RADIO.s.on=false;rdDetach();RADIO.s.niveis=[];const tok=++RADIO.s.tok;
 const url=(location.protocol==='https:'&&/^http:/i.test(st.u))?st.u.replace(/^http:/i,'https:'):st.u;
 RADIO.s.st='load';rdRender();RA.volume=(st.v!=null?st.v:RADIO.s.vol);
 const falha=()=>{if(tok===RADIO.s.tok&&RADIO.s.i===i)rdFail()},tocar=()=>{const pr=RA.play();if(pr&&pr.catch)pr.catch(e=>{if(e&&e.name!=='AbortError')falha()})};
 if(!isHls(url)||RA.canPlayType('application/vnd.apple.mpegurl')){RA.src=url;tocar();return}
 loadHls().then(Hls=>{if(tok!==RADIO.s.tok)return;if(!window.Hls.isSupported()){falha();return}
  const h=new Hls({lowLatencyMode:false});RADIO.s.hls=h;
  h.on(Hls.Events.ERROR,(_e,d)=>{if(d&&d.fatal)falha()});h.on(Hls.Events.MANIFEST_PARSED,()=>{RADIO.s.niveis=(h.levels||[]).map((l,i)=>({i,k:Math.round((l.bitrate||0)/1000)})).filter(x=>x.k>0);tocar()});
  h.loadSource(url);h.attachMedia(RA)}).catch(falha)}

function rdPool(){return RADIO.s.list.map((x,i)=>x.u&&(!RADIO.s.onlyFav||isFav(x.u))?i:-1).filter(i=>i>=0)}

function rdEmpty(){say(RADIO.s.onlyFav?'Nenhuma favorita com link. Favorite uma emissora primeiro':'Nenhuma emissora com link. Adicione em Editar emissoras')}

function rdStep(d){const pl=rdPool();if(!pl.length){rdEmpty();return false}
 const idx=pl.indexOf(RADIO.s.cur),k=idx<0?(d>0?pl[0]:pl[pl.length-1]):pl[(idx+d+pl.length)%pl.length];
 const was=rdPlaying()||(RADIO.s.i>=0&&RADIO.s.st==='err');
 if(was)rdPlay(k);else{RADIO.s.cur=k;ls.set('rd_cur',k);RADIO.s.i=-1;RADIO.s.st='';rdRender();say(rdName(k)+', emissora '+(pl.indexOf(k)+1)+' de '+pl.length)}
 return true}

function rdRand(){const pl=rdPool();if(!pl.length){rdEmpty();return}
 let k=pl[Math.floor(Math.random()*pl.length)];if(pl.length>1&&k===RADIO.s.cur)k=pl[(pl.indexOf(k)+1)%pl.length];rdPlay(k)}

function rdCollect(){RADIO.s.draft=RADIO.s.draft.map((s,k)=>{const n=$('#rn'+k),u=$('#ru'+k);return n&&u?{...s,n:n.value,u:u.value,g:s.g||''}:s})}

function radioPlayerHtml(){const R=RADIO.s;const L=R.list,pl=L.map((x,i)=>x.u?i:-1).filter(i=>i>=0),k=R.cur,s=L[k]||{n:'',u:'',img:''},on=rdPlaying()&&R.i===k,pos=pl.indexOf(k)+1;
 const ehTocavel=j=>j!==k&&L[j]&&L[j].u;
 const anteriores=[];try{const h=JSON.parse(ls.get('rd_hist')||'[]')||[];(Array.isArray(h)?h:[]).forEach(n=>{const j=L.findIndex((x,q)=>q!==k&&x.u&&rdName(q)===n);if(j>=0&&!anteriores.includes(j))anteriores.push(j)})}catch(_){}
 const ant3=anteriores.slice(0,3);
 const prox=[];for(let t=1;t<pl.length&&prox.length<3;t++){const j=pl[(pos-1+t)%pl.length];if(ehTocavel(j)&&!prox.includes(j)&&!ant3.includes(j))prox.push(j)}
 const viz=[...ant3.map((i,q)=>({i,d:-(q+1)})),...prox.map((i,q)=>({i,d:q+1}))];
 const hero='<span class="rad-hero'+(s.img?' com-logo':' sem-logo')+(on?' on':'')+'" aria-hidden="true">'+(s.img?'<img src="'+esc(s.img)+'" alt="" loading="lazy" referrerpolicy="no-referrer">':'<span class="eq"><i></i><i></i><i></i></span>')+'</span>';
 const iniciais=n=>String(n||'').replace(/[^A-Za-zÀ-ú0-9 ]/g,' ').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase()||'?';
 const carrossel='<div class="rad-stage" aria-label="Rádios anteriores e próximas">'+viz.map(o=>{const a=Math.abs(o.d),sc=a===1?0.72:0.5,op=a===1?0.85:0.5,z=a===1?2:1;const midia=L[o.i].img?'<img src="'+esc(L[o.i].img)+'" alt="" loading="lazy" referrerpolicy="no-referrer">':'<span class="rad-viz-ini" aria-hidden="true">'+esc(iniciais(rdName(o.i)))+'</span>';return '<button type="button" class="rad-viz" data-a="rpick" data-i="'+o.i+'" style="--d:'+o.d+';--s:'+sc+';--o:'+op+';--z:'+z+'" aria-label="Ouvir '+esc(rdName(o.i))+'">'+midia+'</button>'}).join('')+hero+'</div>';
 return `<div class="rad-player"><div class="rad-head rad-head-play"><button type="button" class="rad-voltar" data-a="radMenu" aria-label="Voltar para Rádio"><span aria-hidden="true">‹</span> Rádio</button><div class="rad-search"><label class="sr" for="radBuscaP">Buscar emissora</label><input id="radBuscaP" type="search" value="${esc(S.radBusca||'')}" placeholder="Buscar por nome, gênero ou cidade" data-a="radBuscaP"></div></div>${carrossel}<div class="rad-info"><b>${esc(L.length?rdName(k):'Sem emissoras')}</b>${on?'<span class="rad-live">Ao vivo</span>':''}</div><p class="sub" style="margin:0 0 10px">${s.g?esc(s.g)+' · ':''}${pos?'Emissora '+pos+' de '+pl.length:(RADIO.s.onlyFav?pl.length+(pl.length===1?' favorita':' favoritas'):pl.length+(pl.length===1?' emissora com link':' emissoras com link'))}</p>\n 
 ${RADIO.s.i>=0&&RADIO.s.i!==RADIO.s.cur&&RADIO.s.st?'<p class="sub" style="margin:0 0 8px">Tocando agora: <b>'+esc(rdName(RADIO.s.i))+'</b></p>':''}<div class="rvol" style="margin:0 0 8px"><button type="button" class="chip" data-a="rfonly" aria-pressed="${RADIO.s.onlyFav?'true':'false'}">Navegar só entre favoritas: ${RADIO.s.onlyFav?'ligado':'desligado'}</button></div>${RADIO.s.st==='err'&&s.u?'<div class="rvol" style="margin:0 0 8px"><button type="button" class="chip" data-a="rplay">Tentar novamente</button><button type="button" class="chip" data-a="rnext">Escolher outra rádio</button></div><details class="dt" style="margin:0 0 8px"><summary>Mais informações</summary><p class="sub">Endereço da transmissão: '+esc(s.u)+'</p></details>':''}<div class="ctrl ctrl2"><button type="button" class="ib sm like" data-a="rfav" aria-pressed="${isFav(s.u)}" aria-label="${isFav(s.u)?'Remover dos favoritos':'Adicionar aos favoritos'}">${ic(isFav(s.u)?'heartf':'heart')}</button><button type="button" class="ib" data-a="rrand" aria-label="Ouvir rádio aleatória">${ic('shuf')}</button></div>
 <div class="rvol"><label for="rvol" class="sub">Volume</label><input id="rvol" type="range" min="0" max="1" step="0.05" value="${R.vol}"></div><details class="dt" style="margin:0.5rem 0"><summary>Mais opções</summary><div class="rvol"><button class="chip" data-a="redit">Editar emissoras</button></div>${sleepRow()}</details></div>`}

function radGradeHtml(itens){if(!itens.length)return '<p class="sub">Nenhuma emissora para mostrar.</p>';
 return '<div class="rad-grid">'+itens.map(([x,i])=>{const on=rdPlaying()&&RADIO.s.i===i;const sem=!x.u;const nome=x.n||('Emissora '+(i+1));
  return '<button type="button" class="rad-card'+(on?' on':'')+'" data-a="rpick" data-i="'+i+'" aria-label="'+esc(nome)+(sem?', sem endereço':'')+(on?', ao vivo':'')+'"><span class="rad-logo'+(x.img?'':' sem')+'"'+(x.img?' style="background-image:url(\''+esc(x.img)+'\')"':'')+' aria-hidden="true">'+(x.img?'':esc(nome.slice(0,2).toUpperCase()))+'</span><b>'+esc(nome)+'</b><span class="sub">'+(on?'<span class="rad-live">Ao vivo</span>':esc(sem?'Sem endereço':(x.g||'Emissora')))+'</span></button>'}).join('')+'</div>'}

/* Aba Rádio · Todas as estações: destaques (mais ouvidas) + grade com 4 linhas visíveis (rolagem) + gêneros em abas */
/* Rádio (player): favorito e aleatório ficam na pílula, depois da emissora (como na Música) */
/* Últimos 7 dias por emissora: acordeom fechado por padrão, na página Explorar */
function radSemanaAcordeon(){ const wk=document.querySelector('#view #rweek');
 if(wk&&!(wk.parentElement&&wk.parentElement.classList.contains('rad-semana-acc'))){
  const d=document.createElement('details');d.className='dt rad-semana-acc';const sm=document.createElement('summary');sm.textContent='Últimos 7 dias por emissora';d.appendChild(sm);
  wk.parentElement.insertBefore(d,wk);d.appendChild(wk);const t=wk.querySelector('.tp-k');if(t)t.hidden=true}
}
function radBarraAjustes(){radSemanaAcordeon();const pl=document.querySelector('#view .rad-player');if(!pl)return;const root=pl.closest('.rad-root');const bar=root&&root.querySelector(':scope > .rad-bar');const c2=pl.querySelector('.ctrl2');
 if(bar&&c2){
  let vb=bar.querySelector('[data-a="rvolAtalho"]');
  if(!vb){vb=document.createElement('button');vb.type='button';vb.className='ib';vb.dataset.a='rvolAtalho';vb.setAttribute('aria-label','Volume');vb.setAttribute('title','Volume');
   vb.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>';bar.appendChild(vb)}
  vb.setAttribute('aria-expanded',String(!!RADIO.s.volOpen));pl.classList.toggle('vol-on',!!RADIO.s.volOpen);
  c2.querySelectorAll('button').forEach(b=>{if(b.parentElement!==bar)bar.appendChild(b)});c2.hidden=true;
  const navBtn=[...pl.querySelectorAll('button[data-a="rfonly"]')][0];const navRow=navBtn&&navBtn.closest('.rvol');
  const mais=[...pl.querySelectorAll(':scope > details')].find(d=>/Mais opções/.test(d.textContent));
  if(mais&&mais.parentElement!==root){bar.after(mais)}
  if(navRow&&navRow.parentElement!==root){bar.after(navRow)}
 }
 
}

/* Rádio · ajustes de layout: filtro curto, destaques com "Ver todas", estado vazio com ação, total da semana e toque longo para favoritar */
function radLayoutAjustes(){const v=document.querySelector('#view');if(!v||S.tab!=='radio')return;
 radAcessibilidade(v);
 const f=v.querySelector('button[data-a="rfonly"]');if(f&&f.textContent.indexOf('Só favoritas')<0)f.textContent='Só favoritas';
 const h=[...v.querySelectorAll('h3.rad-sec-tit')].find(e=>/Destaques/.test(e.textContent));
 if(h&&!h.dataset.ajustado){h.dataset.ajustado='1';h.textContent='Destaques';const head=document.createElement('div');head.className='rad-sec-head';h.parentNode.insertBefore(head,h);
  const sub=document.createElement('span');sub.className='sub';sub.textContent='mais ouvidas';const btn=document.createElement('button');btn.type='button';btn.className='chip';btn.dataset.a='radVerTodas';btn.textContent='Ver todas';head.append(h,sub,btn)}
 const vazio=[...v.querySelectorAll('p.sub')].find(p=>/Ainda sem dados de escuta/.test(p.textContent));
 if(vazio){const bloco=document.createElement('div');bloco.className='rad-vazio';bloco.innerHTML='<span class="rad-vazio-ic" aria-hidden="true">'+ic('heart')+'</span><b>Sem escuta esta semana</b><p class="sub">Ouça uma emissora para ver o seu tempo aqui.</p><button type="button" class="chip" data-a="radIrTodas">Escolher emissoras</button>';vazio.replaceWith(bloco)}
 const wk=v.querySelector('#rweek');
 if(wk&&!wk.dataset.total){wk.dataset.total='1';
  const L=S.listenAll||(()=>{try{return JSON.parse(ls.get('listen')||'{}')||{}}catch(_){return {}}})();
  const dias=[...Array(7).keys()].reverse().map(i=>dayKey(new Date(Date.now()-i*864e5)));
  const soma=dias.reduce((t,k)=>{const d=L[k];return t+(d&&d.r?Object.values(d.r).reduce((x,y)=>x+y,0):0)},0);
  const h2=Math.floor(soma/3600),m2=Math.round((soma%3600)/60);
  const tot=document.createElement('div');tot.className='rad-total';tot.innerHTML='<b>'+(h2?h2+' h '+m2+' min':m2+' min')+'</b><span class="sub">nesta semana</span>';
  const pz=wk.querySelector('p.sub');if(pz)pz.before(tot);else wk.prepend(tot);
  const bars=wk.querySelectorAll('.tr-bar');if(bars.length)bars[bars.length-1].classList.add('hoje')}
}
/* Rádio · acessibilidade e experiência (itens 20–26): dica do toque longo, atalho F, anúncio ao vivo, atalhos de teclado,
   erro e carregamento visíveis, e retorno do foco à tela de origem */
let radUltimoAnuncio=null,radTextoAnuncio='',radRetorno=false;
/* Rádio · itens 8, 10, 13 e 14: menu de contexto, confirmação HUD, cor de destaque e estados vazios */
function radToast(t){let h=document.getElementById('radHud');if(!h){h=document.createElement('div');h.id='radHud';h.className='rad-hud';h.setAttribute('role','status');document.body.appendChild(h)}
 h.innerHTML='<span class="rad-hud-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M20 6L9 17l-5-5"/></svg></span><span>'+esc(t)+'</span>';
 h.classList.add('on');clearTimeout(h._t);h._t=setTimeout(()=>h.classList.remove('on'),1600)}
function radMenuContexto(i){const x=RADIO.s.list[i];if(!x)return;document.querySelectorAll('.rad-ctx').forEach(e=>e.remove());
 const era=isFav(x.u);const o=document.createElement('div');o.className='rad-ctx';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label','Ações da emissora '+(x.n||''));
 o.innerHTML='<div class="rad-ctx-card"><div class="rad-ctx-prev"><span class="rad-ctx-logo" aria-hidden="true">'+(x.img?'<span style="background-image:url(\''+esc(x.img)+'\')"></span>':esc((x.n||'Em').slice(0,2).toUpperCase()))+'</span><span class="rad-ctx-txt"><b>'+esc(x.n||'Emissora')+'</b><span class="sub">'+esc(x.g||'')+'</span></span></div><button type="button" class="rad-ctx-op" data-ctx="tocar">Tocar agora</button><button type="button" class="rad-ctx-op" data-ctx="fav">'+(era?'Remover dos favoritos':'Adicionar aos favoritos')+'</button><button type="button" class="rad-ctx-op rad-ctx-cancel" data-ctx="fechar">Cancelar</button></div>';
 document.body.appendChild(o);const primeiro=o.querySelector('button');if(primeiro)primeiro.focus();
 const tecla=e=>{if(e.key==='Escape'){e.preventDefault();fechar()}};
 const fechar=()=>{o.remove();document.removeEventListener('keydown',tecla,true)};
 document.addEventListener('keydown',tecla,true);
 const abertoEm=Date.now();o.addEventListener('click',e=>{const b=e.target.closest('[data-ctx]');if(!b){if(e.target===o&&Date.now()-abertoEm>400)fechar();return}
  const op=b.dataset.ctx;if(op==='fav'){const f=isFav(x.u);toggleFav(i);radToast(f?'Removida dos favoritos':'Adicionada aos favoritos')}
  if(op==='tocar'){const c=document.querySelector('#view .rad-card[data-i="'+i+'"]');if(c)c.click()}
  fechar()})}
/* 10 · cor de destaque tirada da emissora (campo de cor da emissora, ou da arte quando o navegador permite) */
const radCorCache={};
function radCorDestaque(){const notch=document.getElementById('notch');if(!notch)return;const x=RADIO.s.list&&RADIO.s.list[RADIO.s.i];
 const aplica=c=>{if(c)notch.style.setProperty('--rad-accent',c);else notch.style.removeProperty('--rad-accent')};
 if(!x){aplica(null);return}
 if(x.c){aplica(x.c);return}
 if(!x.img){aplica(null);return}
 if(radCorCache[x.img]!==undefined){aplica(radCorCache[x.img]);return}
 try{const im=new Image();im.crossOrigin='anonymous';im.onload=()=>{try{const cv=document.createElement('canvas');cv.width=cv.height=8;const g=cv.getContext('2d');g.drawImage(im,0,0,8,8);const d=g.getImageData(0,0,8,8).data;let R=0,G=0,B=0,n=0;for(let k=0;k<d.length;k+=4){R+=d[k];G+=d[k+1];B+=d[k+2];n++}const c='rgb('+Math.round(R/n*.8)+','+Math.round(G/n*.8)+','+Math.round(B/n*.8)+')';radCorCache[x.img]=c;aplica(c)}catch(_){radCorCache[x.img]=null;aplica(null)}};im.onerror=()=>{radCorCache[x.img]=null;aplica(null)};im.src=x.img}catch(_){aplica(null)}}
/* 14 · favoritas vazias: estado com ícone, mensagem e ação (padrão "Conteúdo indisponível") */
function radEstadosVazios(v){const p=[...v.querySelectorAll('p.sub')].find(e=>/Nenhuma estação favorita ainda/.test(e.textContent));
 if(p){const b=document.createElement('div');b.className='rad-vazio';b.innerHTML='<span class="rad-vazio-ic" aria-hidden="true">'+ic('heart')+'</span><b>Nenhuma favorita ainda</b><p class="sub">Toque e segure uma emissora para favoritar.</p><button type="button" class="chip" data-a="radIrTodas">Ver emissoras</button>';p.replaceWith(b)}}
/* Rádio · padrão Apple (itens 1–7): título grande que encolhe ao rolar, lista ou grade, folha com alça, hierarquia,
   volume fixo com ícones nas extremidades e menu "…" para as ações secundárias */
const RAD_SPK_LO='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M11 5L6 9H2v6h4l5 4V5z"/></svg>';
const RAD_SPK_HI='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>';
function radApple(v){
 const pl=v.querySelector('.rad-player');const root=pl&&pl.closest('.rad-root');
 /* 1 · título grande; o cabeçalho antigo com o mesmo nome fica só para leitores de tela (sem duplicar na tela) */
 if(v.querySelector('.rad-titulo-grande')||true){[...v.querySelectorAll('h2,h3')].filter(h=>!h.closest('aside')&&h.textContent.trim()==='Rádio'&&!h.classList.contains('sr')).forEach(h=>h.classList.add('sr'))}
 const colunaMain=v.querySelector('.rad-menu > section.mus-main');
 if(!v.querySelector('.rad-titulo-grande')){const tg=document.createElement('div');tg.className='rad-titulo-grande';tg.textContent='Rádio';if(colunaMain)colunaMain.prepend(tg);else{const h1=v.querySelector(':scope > h1.tela-titulo');if(h1)h1.after(tg);else v.prepend(tg)}}
 if(!v.dataset.tgOk){v.dataset.tgOk='1';v.addEventListener('scroll',()=>{const t=v.querySelector('.rad-titulo-grande');if(t)t.classList.toggle('compacto',v.scrollTop>40)},{passive:true})}
 /* 3 · lista ou grade (padrão Biblioteca do Apple Music) */
 const grade=v.querySelector('.rad-todas');const modo=ls.get('rd_vista')||'grade';
 if(grade&&!v.querySelector('.rad-vista')){const d=document.createElement('div');d.className='rad-vista';d.setAttribute('role','group');d.setAttribute('aria-label','Modo de exibição');
  d.innerHTML='<button type="button" class="rad-vista-b" data-a="radVista" data-v="lista" aria-pressed="'+(modo==='lista')+'">Lista</button><button type="button" class="rad-vista-b" data-a="radVista" data-v="grade" aria-pressed="'+(modo==='grade')+'">Grade</button>';grade.before(d)}
 if(grade)grade.classList.toggle('lista',modo==='lista');
 /* 4 · alça da folha: toque ou arrasto para baixo volta à lista */
 if(pl&&!pl.querySelector('.rad-alca')){const al=document.createElement('button');al.type='button';al.className='rad-alca';al.dataset.a='radMenu';al.setAttribute('aria-label','Fechar e voltar para Rádio');pl.prepend(al)}
 /* 6 · volume fixo abaixo dos controles, com ícones nas extremidades */
 const rv=pl&&pl.querySelector('.rvol:has(#rvol)');
 if(rv&&!rv.querySelector('.rad-vol-ic')){const lo=document.createElement('span');lo.className='rad-vol-ic';lo.innerHTML=RAD_SPK_LO;const hi=document.createElement('span');hi.className='rad-vol-ic';hi.innerHTML=RAD_SPK_HI;rv.prepend(lo);rv.append(hi)}
 /* 7 · "…" na pílula: abre as ações secundárias (antes em "Mais opções") */
 const bar=root&&root.querySelector(':scope > .rad-bar');
 const mais=[...v.querySelectorAll('details')].find(d=>{const s=d.querySelector(':scope > summary');return s&&/Mais opções/.test(s.textContent)});
 if(mais&&!mais.classList.contains('rad-mais-pop'))mais.classList.add('rad-mais-pop');
 if(bar&&!bar.querySelector('[data-a="radMais"]')){const b=document.createElement('button');b.type='button';b.className='ib';b.dataset.a='radMais';b.setAttribute('aria-label','Mais opções');b.setAttribute('aria-expanded','false');b.setAttribute('title','Mais opções');b.innerHTML=musPontosIcone();bar.appendChild(b)}
}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-a="rvolsave"]');if(b)radToast('Volume salvo para esta emissora')},true);
/* alça da folha: arrasto para baixo de mais de 60 px fecha a tela de reprodução */
let radAlcaY=null;
document.addEventListener('pointerdown',e=>{const a=e.target.closest&&e.target.closest('.rad-alca');radAlcaY=a?e.clientY:null},true);
document.addEventListener('pointerup',e=>{if(radAlcaY!==null&&e.clientY-radAlcaY>60){radAlcaY=null;const a=document.querySelector('#view .rad-alca');if(a)a.click()}else radAlcaY=null},true);
/* Rádio · padrão Apple (itens 1–5): cartões coloridos, setas de carrossel, chevron nos títulos e pílula de player flutuante */
const RAD_PALETA=['#c2185b','#7b1fa2','#1565c0','#00727d','#2e7d32','#b34700','#b71c1c','#4e342e','#37474f','#8a5a00'];
function radCorDe(txt,fixa){if(fixa)return fixa;let h=0;for(const ch of String(txt||''))h=(h*31+ch.charCodeAt(0))>>>0;return RAD_PALETA[h%RAD_PALETA.length]}
/* Rádio · itens 6–7: botão "…" em cada emissora (menu de ações) e rodapé da aba */
function radItensMais(v){
 v.querySelectorAll('.rad-destaques .rad-grid > .rad-card, .rad-todas .rad-grid > .rad-card').forEach(c=>{
  if(c.parentElement.classList.contains('rad-item'))return;
  const x=RADIO.s.list&&RADIO.s.list[+c.dataset.i];const nome=x?x.n:'emissora';
  const item=document.createElement('div');item.className='rad-item';c.before(item);item.appendChild(c);
  const m=document.createElement('button');m.type='button';m.className='rad-mais';m.dataset.i=c.dataset.i;m.setAttribute('aria-label','Mais opções de '+nome);m.setAttribute('title','Mais opções');
  m.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>';
  item.appendChild(m)});
 const mm=v.querySelector('.rad-menu > section.mus-main');
 if(mm&&!mm.querySelector('.rad-rodape')&&v.querySelector('.rad-menu')){const f=document.createElement('footer');f.className='rad-rodape';f.innerHTML='<p class="sub rad-copy">Copyright © 2026 · Painel notch. Todos os direitos reservados.</p>';mm.appendChild(f)}
 if(mm&&mm.querySelector('.rad-rodape')){mm.appendChild(mm.querySelector('.rad-rodape'))}
}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('.rad-mais');if(!b)return;e.stopPropagation();radMenuContexto(+b.dataset.i)},true);
/* Rádio · hierarquia e organização (itens 2–6, 13–15): nomes claros na barra lateral, sem duplicações,
   destaques honestos quando não há dados, dica visível do toque longo */
function radOrganizacao(v){
 /* Organização 3 · a barra lateral não repete "Gêneros": os gêneros já estão na página, em cartões */
 v.querySelectorAll('.rad-menu > aside.mus-side button').forEach(b=>{if(/^\s*Gêneros/.test(b.textContent))b.style.display='none'});
 /* Acessibilidade 4 · o cabeçalho do painel de navegação não repete o título "Rádio" */
 v.querySelectorAll('.rad-menu > aside.mus-side h2.mus-h').forEach(h=>{if(h.textContent.trim()==='Rádio')h.textContent='Seções'});
 /* Organização 5 · sem a contagem "N estações" solta */
 v.querySelectorAll('p.sub').forEach(p=>{if(/^\d+\s+estaç(ão|ões)$/.test(p.textContent.trim()))p.remove()});
 /* Organização 4 · destaques: só dizem "mais ouvidas" quando há dados de escuta */
 const temEscuta=(()=>{try{const L=JSON.parse(ls.get('listen')||'{}')||{};return Object.keys(L).length>0}catch(_){return false}})();
 v.querySelectorAll('.rad-sec-head .sub').forEach(s=>{if(/mais ouvidas|Ouça para ver/.test(s.textContent))s.textContent=temEscuta?'mais ouvidas':'Ouça para ver as mais tocadas'});
 /* Navegar só entre favoritas: o controle saiu da tela de reprodução e fica no menu, ao lado de Lista | Grade */
 const ancora=v.querySelector('.rad-vista')||v.querySelector('.rad-head')||v.querySelector('.rad-menu > section.mus-main > *');
 if(ancora&&!v.querySelector('[data-a="rfonly"]')){const b=document.createElement('button');b.type='button';b.className='chip rad-so-fav';b.dataset.a='rfonly';b.setAttribute('aria-pressed',RADIO.s.onlyFav?'true':'false');b.textContent='Só favoritas';ancora.after(b)}
 /* Organização 13 · dica do toque longo sempre visível, perto da grade */
 const grade=v.querySelector('.rad-todas');
 if(grade&&!v.querySelector('.rad-dica-f')){const d=document.createElement('p');d.className='sub rad-dica-f';d.textContent='Dica: use o … de uma emissora para favoritar, tocar ou remover. Também dá para pressionar e segurar.';grade.before(d)}
}
function radVisualApple(v){
 radOrganizacao(v);
 radItensMais(v);
 /* 1 · cartões de estação coloridos, com o nome grande dentro */
 v.querySelectorAll('.rad-destaques .rad-card,.rad-todas .rad-card').forEach(c=>{if(c.dataset.rc)return;const x=RADIO.s.list&&RADIO.s.list[+c.dataset.i];const cor=radCorDe(x&&x.n,x&&x.c);c.dataset.rc=cor;c.style.setProperty('--rc',cor)});
 /* 1 · textos dos cartões coloridos em branco (prioridade máxima, sobre as cores do tema) */
 v.querySelectorAll('.rad-destaques .rad-card,.rad-todas .rad-card').forEach(c=>{if(c.closest('.rad-todas')&&(ls.get('rd_vista')||'grade')==='lista')return;c.querySelectorAll('b,span,p,.rad-logo').forEach(e=>{e.style.setProperty('color',e.classList.contains('sub')?'rgba(255,255,255,.9)':'#fff','important')})});
 /* 1 · cartões de gênero coloridos (lugar das abas de gênero) */
 v.querySelectorAll('.rad-gen-tabs .chip').forEach(b=>{if(b.dataset.rc)return;const cor=radCorDe(b.textContent.trim());b.dataset.rc=cor;b.style.setProperty('--rc',cor)});
 /* 3 · setas de carrossel (anterior e próxima) */
 const dst=v.querySelector('.rad-destaques');
 if(dst&&!dst.parentElement.classList.contains('rad-carrossel')){const w=document.createElement('div');w.className='rad-carrossel';dst.before(w);w.appendChild(dst);
  ['-1','1'].forEach(d=>{const s=document.createElement('button');s.type='button';s.className='rad-seta rad-seta-'+(d==='-1'?'ant':'prox');s.dataset.dir=d;s.setAttribute('aria-label',d==='-1'?'Estações anteriores':'Próximas estações');s.innerHTML=d==='-1'?'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>':'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';w.appendChild(s)})}
 /* 5 · pílula de player flutuante centralizada, como na Apple Music */
 let fl=document.getElementById('radFlutuante');
 const x=RADIO.s.list&&RADIO.s.list[RADIO.s.cur];const mostra=!!x;

 const barraBase=document.getElementById('barraBase');if(barraBase){const n=document.getElementById('notch');if(n)n.style.setProperty('--rad-pilula-bottom',(barraBase.offsetHeight+12)+'px')}
 if(!mostra){if(fl)fl.remove();return}
 if(!fl){fl=document.createElement('div');fl.id='radFlutuante';fl.className='rad-flutuante';fl.setAttribute('role','region');fl.setAttribute('aria-label','Tocando agora');document.getElementById('notch').appendChild(fl)}
 const on=!!RADIO.s.on;
 const ic=(p)=>'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+p+'</svg>';
 fl.innerHTML='<button type="button" class="rf-b" data-a="rprev" aria-label="Anterior">'+ic('<path d="M19 5l-9 7 9 7z"/><path d="M5 5v14"/>')+'</button>'+
  '<button type="button" class="rf-b rf-play" data-a="rplay" aria-label="'+(on?'Pausar':'Ouvir')+'">'+ic(on?'<path d="M9 5v14M15 5v14"/>':'<path d="M7 5l12 7-12 7z"/>')+'</button>'+
  '<button type="button" class="rf-b" data-a="rnext" aria-label="Próxima">'+ic('<path d="M5 5l9 7-9 7z"/><path d="M19 5v14"/>')+'</button>'+
  '<button type="button" class="rf-info rf-mais" aria-label="Ações desta emissora: '+esc(x.n||'emissora')+'"><span class="rf-capa" aria-hidden="true">'+(x.img?'<span style="background-image:url(\''+esc(x.img)+'\')"></span>':'')+'</span><span class="rf-txt"><b>'+esc(x.n||'Emissora')+'</b><span>'+(on?'Ao vivo':'Parada')+'</span></span></button>'+
  '<button type="button" class="rf-b rf-mais" aria-label="Mais opções desta emissora">'+ic('<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>')+'</button>';
 /* 12 · aleatório à esquerda da pílula (como na Apple) */
 if(fl&&!fl.querySelector('[data-a="rrand"]')){const b=document.createElement('button');b.type='button';b.className='rf-b';b.dataset.a='rrand';b.setAttribute('aria-label','Ouvir rádio aleatória');b.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>';fl.prepend(b)}
 if(fl&&!fl.querySelector('[data-a="rfav"]')){const fav=document.createElement('button');fav.type='button';fav.className='rf-b';fav.dataset.a='rfav';const f=isFav(x.u);fav.setAttribute('aria-pressed',String(!!f));fav.setAttribute('aria-label',f?'Remover dos favoritos':'Adicionar aos favoritos');fav.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="'+(f?'currentColor':'none')+'" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>';const pl=fl.querySelector('[data-a="rprev"]');(pl?pl.parentElement:fl).insertBefore(fav,pl?pl.nextSibling:null)}
 /* 13 · rodapé com a linha de copyright */
 const rod=v.querySelector('.rad-rodape');if(rod&&!rod.querySelector('.rad-copy')){const c=document.createElement('p');c.className='sub rad-copy';c.textContent='Copyright © 2026 · Painel notch. Todos os direitos reservados.';rod.appendChild(c)}
 /* legenda de origem nos cartões (o painel não tem o produtor; usa o endereço do serviço de transmissão) */
 v.querySelectorAll('.rad-destaques .rad-card,.rad-todas .rad-card').forEach(c=>{if(c.querySelector('.rad-host'))return;const x=RADIO.s.list&&RADIO.s.list[+c.dataset.i];let host='';try{host=new URL(x&&x.u||'').hostname}catch(_){host=''}if(!host)return;void host});
}
/* 3 · setas: rolam o carrossel de destaques */
document.addEventListener('click',e=>{const s=e.target.closest&&e.target.closest('.rad-seta');if(!s)return;const w=s.closest('.rad-carrossel');const alvo=w&&(w.querySelector('.rad-destaques > .rad-grid')||w.querySelector('.rad-destaques'));if(alvo)alvo.scrollBy({left:(+s.dataset.dir)*300,behavior:'smooth'})});
function radAcessibilidade(v){
 if(RADIO.s.radTela==='player')RADIO.s.radTela='menu';
 radVisualApple(v);
 radApple(v);radEstadosVazios(v);radCorDestaque();
 const pl=v.querySelector('.rad-player');
 /* 22 · anúncio da emissora atual para leitores de tela */
 let an=v.querySelector('#radAnuncio');if(!an){an=document.createElement('div');an.id='radAnuncio';an.className='sr';an.setAttribute('role','status');an.setAttribute('aria-live','polite');v.appendChild(an)}
 const x=RADIO.s.list&&RADIO.s.list[RADIO.s.i];const chave=(RADIO.s.i)+'|'+(RADIO.s.on?'on':'off');
 if(x&&chave!==radUltimoAnuncio){radUltimoAnuncio=chave;radTextoAnuncio=(RADIO.s.on?'Tocando: ':'Pausado: ')+(x.n||'emissora')}
 if(radTextoAnuncio&&an.textContent!==radTextoAnuncio)an.textContent=radTextoAnuncio;
 /* 24 · falha ao tocar: mensagem clara com tentativa de novo */
 if(pl){const erro=pl.querySelector('.rad-erro');
  if(RADIO.s.st==='err'&&!erro){const d=document.createElement('div');d.className='rad-erro';d.setAttribute('role','alert');d.innerHTML='<p class="sub">Não foi possível tocar esta emissora.</p><button type="button" class="chip" data-a="rretry">Tentar de novo</button>';const info=pl.querySelector('.rad-info')||pl.firstElementChild;info?info.after(d):pl.prepend(d)}
  else if(RADIO.s.st!=='err'&&erro)erro.remove();
  /* 25 · carregamento visível enquanto a emissora conecta */
  let carr=pl.querySelector('.rad-carrega');
  if(RADIO.s.st==='load'){if(!carr){carr=document.createElement('p');carr.className='sub rad-carrega';carr.setAttribute('role','status');carr.textContent='Carregando emissora…';const info2=pl.querySelector('.rad-info')||pl.firstElementChild;info2?info2.after(carr):pl.prepend(carr)}}
  else if(carr)carr.remove();
 }
 /* 20 · dica do toque longo, mostrada uma vez, na seção Todas as estações */
 const grade=v.querySelector('.rad-todas');
 if(grade&&!ls.get('rd_dica_fav')&&!v.querySelector('.rad-dica')){const dica=document.createElement('div');dica.className='rad-dica';dica.innerHTML='<p class="sub">Dica: toque e segure uma emissora para favoritar. Com o teclado, selecione a emissora e pressione F.</p><button type="button" class="chip" data-a="radDicaOk">Entendi</button>';grade.before(dica)}
 /* 26 · ao voltar da tela de reprodução, o foco retorna ao botão que a abriu */
 if(radRetorno&&RADIO.s.radTela==='menu'){radRetorno=false;const m=v.querySelector('.rad-mini-info');if(m)setTimeout(()=>m.focus(),0)}
}
/* 21 · atalho F: favorita a emissora com foco; 23 · Espaço e setas controlam a reprodução fora dos campos de texto */
document.addEventListener('keydown',e=>{
 if(!S||S.tab!=='radio')return;const t=e.target;const campo=t&&(/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)||t.isContentEditable);if(campo)return;if(t&&t.closest&&t.closest('#tabs'))return;
 if((e.key==='f'||e.key==='F')&&t.classList&&t.classList.contains('rad-card')){const i=+t.dataset.i;const x=RADIO.s.list[i];if(!x)return;const era=isFav(x.u);toggleFav(i);radToast(era?'Removida dos favoritos':'Adicionada aos favoritos');e.preventDefault();return}
 const c=(sel)=>{const b=document.querySelector('#view .rad-bar '+sel)||document.querySelector('#view '+sel);if(b){b.click();return true}return false};
 if(e.key===' '||e.code==='Space'){if(c('[data-a="rplay"]')){e.preventDefault()}}
 else if(e.key==='ArrowRight'){if(c('[data-a="rnext"]')){e.preventDefault()}}
 else if(e.key==='ArrowLeft'){if(c('[data-a="rprev"]')){e.preventDefault()}}
},true);
/* 26 · marca o botão que abriu a tela de reprodução para devolver o foco ao voltar */
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-a="radPlayer"]');if(b)radRetorno=true},true);
/* Toque longo (600 ms) num cartão de emissora alterna os favoritos; o toque curto continua tocando a emissora */
let radPressT=null,radPressI=null,radPressFeito=false;
document.addEventListener('pointerdown',e=>{const c=e.target.closest&&e.target.closest('#view button.rad-card[data-a="rpick"]');if(!c)return;radPressI=+c.dataset.i;radPressFeito=false;clearTimeout(radPressT);
 radPressT=setTimeout(()=>{radPressFeito=true;radMenuContexto(radPressI)},600)});
['pointerup','pointerleave','pointercancel'].forEach(t=>document.addEventListener(t,()=>clearTimeout(radPressT)));
document.addEventListener('click',e=>{if(radPressFeito){e.stopPropagation();e.preventDefault();radPressFeito=false}},true);
function radTodasHtml(itens,chips){const L=RADIO.s.list;let h=[];try{h=JSON.parse(ls.get('rd_hist')||'[]')||[]}catch(_){h=[]}
 const idx=[];(Array.isArray(h)?h:[]).forEach(n=>{const j=L.findIndex((x,q)=>x&&x.u&&rdName(q)===n);if(j>=0&&!idx.includes(j))idx.push(j)});
 for(let j=0;idx.length<8&&j<L.length;j++){if(L[j]&&L[j].u&&!idx.includes(j))idx.push(j)}
 const dest=idx.slice(0,8).map(j=>[L[j],j]);
 return '<h3 class="rad-sec-tit">Destaques · mais ouvidas</h3><div class="rad-destaques">'+radGradeHtml(dest)+'</div>'+
  '<h3 class="rad-sec-tit">Todas as estações</h3><div class="rad-todas">'+radGradeHtml(itens)+'</div>'+
  '<h3 class="rad-sec-tit">Gêneros</h3><div class="rad-gen-tabs" role="group" aria-label="Gêneros">'+chips+'</div>'}
/* Mini player (padrão Tocando agora): aparece no menu; o toque na faixa abre a tela de reprodução */
function radMiniHtml(){if(!RADIO.s.list||!RADIO.s.list.length)return '';const s=RADIO.s.list[RADIO.s.cur]||{};const on=!!RADIO.s.on;
 return '<div class="rad-mini" role="region" aria-label="Tocando agora"><button type="button" class="rad-mini-info" data-a="radPlayer"><span class="rad-mini-capa" aria-hidden="true">'+(s.img?'<span style="background-image:url(\''+esc(s.img)+'\')"></span>':'')+'</span><span class="rad-mini-txt"><b>'+esc(s.n||'Nenhuma rádio')+'</b><span class="sub">'+(on?'Ao vivo':'Parada')+'</span></span></button><button type="button" class="rad-mini-btn" data-a="rplay" aria-label="'+(on?'Pausar':'Ouvir')+'">'+ic(on?'pause':'play')+'</button></div>'}
function radioMenuHtml(){const R=RADIO.s;const L=R.list;const sec=RADIO.s.radSec||'todas';const q=livNorm(S.radBusca||'');const gen=S.radGen||'';
 const generos=[...new Set(L.map(x=>(x.g||'').split(',')[0].trim()).filter(Boolean))].slice(0,12);
 const resumoGen=generos.slice(0,3).join(', ');
 const ico=(d)=>'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+d+'</svg>';
 const IC={todas:ico('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),favs:ico('<path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/>'),gen:ico('<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="7.5" r="1.2"/>'),explorar:ico('<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>'),salvas:ico('<path d="M4 6h16M4 12h16M4 18h10"/>'),config:ico('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>')};
 const itemNav=(k,l,sub)=>'<button type="button" class="mus-nav'+(sec===k?' on':'')+'" data-a="radSec" data-s="'+k+'"'+(sec===k?' aria-current="true"':'')+'><span class="mus-nav-ic">'+IC[k]+'</span><span class="mus-nav-tx">'+l+(sub?'<span class="mus-nav-sub">'+esc(sub)+'</span>':'')+'</span></button>';
 const nav=[['favs','Estações favoritas',''],['todas','Todas as estações',''],['gen','Gêneros',resumoGen],['explorar','Explorar',''],['salvas','Minhas rádios','']].map(([k,l,sub])=>itemNav(k,l,sub)).join('')+'<button type="button" class="mus-nav" data-a="redit"><span class="mus-nav-ic">'+IC.config+'</span><span class="mus-nav-tx">Configurações</span></button>';
 const titulo={todas:'Todas as estações',favs:'Estações favoritas',gen:'Gêneros',explorar:'Explorar',salvas:'Minhas rádios'}[sec]||'';
 let corpo='';
 if(sec==='explorar')corpo=rsBox()+rsTopBoxHtml();
 else if(sec==='salvas')corpo=savedBox();
 else{let itens=L.map((x,i)=>[x,i]);
  if(sec==='favs')itens=itens.filter(([x])=>isFav(x.u));
  if(sec==='gen'&&gen)itens=itens.filter(([x])=>(x.g||'').split(',')[0].trim()===gen);
  if(q)itens=itens.filter(([x])=>livNorm((x.n||'')+' '+(x.g||'')).includes(q));
  const chips=sec==='explorar'||sec==='salvas'?'':'<div class="rad-chips" role="group" aria-label="Filtrar por gênero">'+['',...generos].map(g=>'<button type="button" class="chip'+(g===gen?' on':'')+'" data-a="radGen" data-g="'+esc(g)+'" aria-pressed="'+(g===gen)+'">'+esc(g||'Todas')+'</button>').join('')+'<button type="button" class="chip" data-a="radSec" data-s="favs" aria-pressed="'+(sec==='favs')+'">Favoritas</button></div>';
  const vazio=sec==='favs'&&!itens.length?'<p class="sub">Nenhuma estação favorita ainda. Toque em ♡ na tela de reprodução para favoritar.</p>':'';
  corpo='<p class="sub" style="margin:0 0 0.5rem">'+itens.length+' estaç'+(itens.length===1?'ão':'ões')+'</p>'+vazio+(sec==='todas'&&!q&&!gen?radTodasHtml(itens,chips):radGradeHtml(itens)+chips)}
 return '<div class="mus-menu rad-menu"><aside class="mus-glass mus-side" aria-label="Rádio"><h2 class="mus-h">Rádio</h2><nav class="mus-navs">'+nav+'</nav>'+radMiniHtml()+'</aside><section class="mus-glass mus-main" aria-label="'+esc(titulo)+'"><div class="rad-head"><h3 class="mus-h">'+esc(titulo)+'</h3><div class="rad-search"><label class="sr" for="radBuscaQ">Buscar emissora</label><input id="radBuscaQ" type="search" value="'+esc(S.radBusca||'')+'" placeholder="Buscar por nome, gênero ou cidade" data-a="radBusca"></div></div>'+corpo+'</section></div>'}

function radBarra(s,on){const ctl=(acao,icone,rotulo,extra)=>'<button type="button" class="ib'+(extra||'')+'" data-a="'+acao+'" aria-label="'+rotulo+'">'+icone+'<span class="rad-lbl" aria-hidden="true">'+rotulo+'</span></button>';
 return '<div class="mus-bar rad-bar" role="region" aria-label="Rádio em reprodução"><button type="button" class="mus-barra-capa" data-a="radPlayer" aria-label="Abrir tela de reprodução">'+(s.img?'<span style="background-image:url(\''+esc(s.img)+'\')" aria-hidden="true"></span>':'')+'</button><div class="mus-barra-txt"><span class="sub">Agora ouvindo</span><span class="rad-now"><span class="rad-eq'+(on?' on':'')+'" aria-hidden="true"><i></i><i></i><i></i></span><b>'+esc(s.n||'Nenhuma rádio')+'</b></span><span class="sub">'+(on?'Ao vivo':'Parada')+'</span></div><div class="mus-barra-ctl">'+ctl('rprev',ic('prev'),'Anterior')+ctl('rplay',ic(on?'pause':'play'),on?'Pausar':'Ouvir',on?' big':' big')+ctl('rnext',ic('next'),'Próxima')+'</div></div>'}

function radDots(t){return '<div class="rad-dots" role="tablist" aria-label="Telas da rádio">'+[['menu','Menu de rádio'],['player','Reprodução']].map(([k,l])=>'<button type="button" role="tab" class="rad-dot'+(t===k?' on':'')+'" data-a="radTela" data-t="'+k+'" aria-selected="'+(t===k)+'" aria-label="'+l+'"></button>').join('')+'</div>'}

function radioRoot(corpo){const R=RADIO.s;const L=R.list,k=R.cur,s=L[k]||{n:'',u:'',img:''};const on=rdPlaying()&&R.i===k;
 return '<section class="mus-root rad-root npc" aria-label="Rádio" style="background:linear-gradient(160deg,#2a2a33 0%,#0b0b0d 100%)">'+corpo+radBarra(s,on)+'</section>'}

function radioView(){const R=RADIO.s;
 if(R.edit)return radioRoot(`<div class="mus-menu rad-menu rad-menu-solo"><section class="mus-glass mus-main rad-edit" aria-label="Editar emissoras"><div class="rad-head"><h3 class="mus-h">Editar emissoras</h3></div><form id="rform">${R.draft.map((s,k)=>`<div class="rrow"><input id="rn${k}" aria-label="Nome da emissora ${k+1}" placeholder="Nome" maxlength="40" value="${esc(s.n)}" autocomplete="off"><input id="ru${k}" type="url" inputmode="url" aria-label="Link do stream da emissora ${k+1}" placeholder="https://..." value="${esc(s.u)}" autocomplete="off"><button type="button" class="ib sm" data-a="rrm" data-i="${k}" aria-label="Remover emissora ${k+1}${s.n?': '+esc(s.n):''}">${ic('x')}</button></div>`).join('')}<div class="redact"><button type="button" class="chip" data-a="radd">Adicionar emissora</button><button type="button" class="chip" data-a="rsug">Adicionar sugeridas</button><button type="button" class="chip" data-a="rimp">Importar playlist (.m3u ou .pls)</button><input type="file" id="rimpf" accept=".m3u,.m3u8,.pls,text/plain,audio/x-mpegurl,audio/x-scpls" class="sr" tabindex="-1" aria-hidden="true"></div><p class="sub" id="rimsg" role="status" style="margin:0"></p><p class="err" id="rerr" role="alert"></p><div style="display:flex;justify-content:flex-end;gap:0.5rem"><button type="button" class="chip" data-a="rcan">Cancelar</button><button class="chip">Salvar</button></div></form></section></div>`);
 const tela=RADIO.s.radTela||'menu';return radioRoot(tela==='player'?radioPlayerHtml():radioMenuHtml())}

function radioAct(a,i,b){const R=RADIO.s;
 if(a==='rvolAtalho'){R.volOpen=!R.volOpen;view();return true}
 if(a==='radVerTodas'){const t=document.querySelector('#view .rad-todas');if(t)t.scrollIntoView({behavior:'smooth',block:'start'});return true}
 if(a==='radIrTodas'){R.radSec='todas';R.radTela='menu';view();return true}
 if(a==='radDicaOk'){ls.set('rd_dica_fav','1');view();return true}
 if(a==='radVista'){ls.set('rd_vista',b&&b.dataset?b.dataset.v:'lista');view();return true}
 if(a==='radMais'){const d=document.querySelector('#view details.rad-mais-pop');if(d){d.open=!d.open;if(b&&b.setAttribute)b.setAttribute('aria-expanded',String(d.open))}return true}
 if(a==='redit'){R.draft=R.list.map(x=>({...x,n:x.n,u:x.u,g:x.g||''}));if(!R.draft.length)R.draft.push({n:'',u:'',g:''});R.edit=true;view();const n=$('#rn0');if(n)n.focus();return true}
 if(a==='rcan'){R.edit=false;view();const b=$('#view [data-a="redit"]');if(b)b.focus();return true}
 if(a==='radd'){if(R.draft.length>=200){say('Limite de 200 emissoras');return true}rdCollect();R.draft.push({n:'',u:''});view();const n=$('#rn'+(R.draft.length-1));if(n)n.focus();return true}
 if(a==='rrm'){rdCollect();R.draft.splice(i,1);view();const b=$('#view [data-a="rrm"][data-i="'+Math.min(i,R.draft.length-1)+'"]')||$('#view [data-a="radd"]');if(b)b.focus();say('Emissora removida');return true}
 if(a==='rsug'){rdCollect();const before=R.draft.filter(x=>x.n||x.u).length;R.draft=rdMerge(R.draft);view();say((R.draft.length-before)+' emissoras sugeridas adicionadas');return true}
 if(a==='rplay'){const s=R.list[R.cur];if(!s||!s.u){say('Esta rádio ainda não tem endereço de transmissão. Adicione em Editar emissoras ou escolha outra rádio');return true}
  if(rdPlaying()&&R.i===R.cur){rdStop();say('Rádio parada')}else rdPlay(R.cur);return true}
 if(a==='rimp'){$('#rimpf').click();return true}
 if(a==='rnext'){rdStep(1);return true}
 if(a==='rprev'){rdStep(-1);return true}
  if(a==='radSec'){RADIO.s.radSec=b.dataset.s;S.radBusca='';S.radGen='';view();return}
 if(a==='radGen'){S.radGen=b.dataset.g||'';view();return}
 if(a==='radPlayer'){radMenuContexto(RADIO.s.cur);return}
 if(a==='radMenu'){RADIO.s.radTela='menu';view();return}
 if(a==='radTela'){RADIO.s.radTela=b.dataset.t;view();return}
 if(a==='rpick'){const k=+i;RADIO.s.cur=k;ls.set('rd_cur',k);if(RADIO.s.list[k]&&RADIO.s.list[k].u){rdPlay(k)}else{say('Esta rádio ainda não tem endereço de transmissão. Adicione em Editar emissoras')}view();const n=$('#view [data-a="rpick"][data-i="'+k+'"]');if(n)n.focus();return true}
 if(a==='rfonly'){R.onlyFav=!R.onlyFav;if(R.onlyFav&&!rdPool().includes(R.cur)){const p=rdPool();if(p.length)R.cur=p[0];else{R.onlyFav=true}}view();const b=$('#view [data-a="rfonly"]');if(b)b.focus();say(R.onlyFav?'Mostrando só favoritas':'Mostrando todas as emissoras');return true}
 if(a==='rfav'){toggleFav(R.cur);view();const b=$('#view [data-a="rfav"]');if(b)b.focus();return true}
 if(a==='rrand'){rdRand();return true}
 return false}

function rsTopBoxHtml(){return '<details class="dt" id="rstopBox"'+(S.rsTopOpen?' open':'')+' style="margin:0.5rem 0"><summary>Mais acessadas por país (diretório)</summary><div class="redact" role="group" aria-label="Escolher país" style="margin-top:0.4rem">'+RS_PAISES.map(([c,n])=>'<button type="button" class="chip" data-a="rstop" data-cc="'+c+'">'+n+'</button>').join('')+'</div></details>'}

function radioExtrasDom(){const v=$('#view');if(!v||S.tab!=='radio')return;
 const rf=v.querySelector('#rsform');if(rf&&!v.querySelector('#rstopBox'))rf.insertAdjacentHTML('afterend',rsTopBoxHtml());
 v.querySelectorAll('#rtile,#rweek').forEach(n=>n.remove());
 const noExplorar=!(RADIO.s.radSec==='explorar'&&RADIO.s.radTela!=='player');
 
 const listen=S.listenAll||(()=>{try{return JSON.parse(ls.get('listen')||'{}')||{}}catch(_){return {}}})();
 const dias=[...Array(7).keys()].reverse().map(i=>dayKey(new Date(Date.now()-i*864e5)));
 const tot={};dias.forEach(k=>{const d=listen[k];if(d&&d.r)Object.entries(d.r).forEach(([n,sec])=>{tot[n]=tot[n]||{sec:0,dia:{}};tot[n].sec+=sec;tot[n].dia[k]=(tot[n].dia[k]||0)+sec})});
 const top=Object.entries(tot).sort((a,b)=>b[1].sec-a[1].sec).slice(0,6);
 const sec2=x=>{const h=Math.floor(x/3600),m=Math.round((x%3600)/60);return h?h+' h '+m+' min':m+' min'};
 const wk=document.createElement('section');wk.id='rweek';wk.setAttribute('aria-label','Tempo ouvido por emissora na semana');wk.className='tp-card';wk.style.margin='0 0 12px';
 wk.innerHTML='<div class="tp-k">Últimos 7 dias por emissora</div>'+(top.length?'<div style="margin-top:0.5rem">'+top.map(([n,o])=>'<div style="display:flex;justify-content:space-between;font-size:0.875rem"><span>'+esc(n)+'</span><b>'+sec2(o.sec)+'</b></div>').join('')+'</div>'+(()=>{const tot=dias.map(k=>top.reduce((t,[n,o])=>t+(o.dia[k]||0),0));const mx=Math.max(1,...tot);const barras=tot.map((v,q)=>'<div role="listitem" class="tr-bar"><span class="tr-bv">'+(v?sec2(v):'-')+'</span><span class="tr-bb" style="height:'+Math.max(6,Math.round(v/mx*100))+'%"></span><span class="tr-bd">'+esc(dias[q].slice(5))+'</span></div>').join('');return '<p class="sub" style="margin:0.6rem 0 0.25rem">Tempo de escuta por dia</p><div class="tr-bars" role="list" tabindex="0" aria-label="Tempo de escuta por dia na semana">'+barras+'</div>'})():'<p class="sub" style="margin:0.375rem 0 0">Ainda sem dados de escuta na semana.</p>');
 if(!noExplorar){const detW=v.querySelector('#rsvdet');if(detW)detW.after(wk);else(v.querySelector('.rad-root .mus-main')||v).appendChild(wk)}radioListDom();
 const det=v.querySelector('#rsvdet');
 if(det&&!det.querySelector('#rsearch')){const wrap=document.createElement('div');wrap.style.margin='8px 0';wrap.innerHTML='<label class="sr" for="rsearch">Buscar nas rádios salvas</label><input id="rsearch" hidden type="search" placeholder="Buscar rádio pelo nome" maxlength="40" autocomplete="off" style="width:100%;box-sizing:border-box;border-radius:0.75rem;padding:0.625rem;background:var(--row);color:var(--ink);border:0;font:inherit">';const sm=det.querySelector('summary');sm?sm.after(wrap):det.prepend(wrap)}
 const cur=RADIO.s.list[RADIO.s.cur];
 const ex=v.querySelector('#rvolstation');if(ex)ex.remove();
 if(cur&&cur.u){const box=document.createElement('div');box.id='rvolstation';box.className='rvol';box.style.flexWrap='wrap';
  box.innerHTML='<span class="sub">Volume desta emissora: '+(cur.v!=null?Math.round(cur.v*100)+'%':'geral')+'</span><button type="button" class="chip" data-a="rvolsave">Salvar volume para esta emissora</button>'+(cur.v!=null?'<button type="button" class="chip" data-a="rvolclr">Usar volume geral</button>':'');
  const rv=v.querySelector('#rvol');if(rv&&rv.parentElement)rv.parentElement.after(box);else{const r=v.querySelector('.rad-root .mus-main');(r||v).append(box)}}}

function radioListDom(){const v=$('#view');if(!v)return;v.querySelectorAll('#rlctl,#rload').forEach(n=>n.remove());
 if(RADIO.s.st==='load'&&RADIO.s.t0){const espera=Date.now()-RADIO.s.t0;if(espera<8000&&!RADIO.s.wt){RADIO.s.wt=setTimeout(()=>{RADIO.s.wt=0;if(S.tab==='radio')view()},8100-espera)}
  if(espera>=8000){const b=document.createElement('div');b.id='rload';b.setAttribute('role','status');b.className='note';b.innerHTML='A rádio está demorando para começar. <button type="button" class="chip" data-a="rretry" style="margin-left:0.375rem">Tentar de novo</button>';v.prepend(b)}}const tEl=v.querySelector('#rtile span');const cz=RADIO.s.list[RADIO.s.cur];if(tEl&&cz&&cz.tz&&!tEl.dataset.hl){tEl.dataset.hl='1';tEl.textContent+=' · '+new Date().toLocaleTimeString('pt-BR',{timeZone:cz.tz,hour:'2-digit',minute:'2-digit'})+' local'}
 const det=v.querySelector('#rsvdet');if(!det)return;
 const grupos=[...new Set(RADIO.s.list.map(x=>x.g).filter(Boolean))];
 const ctl=document.createElement('div');ctl.id='rlctl';ctl.className='redact';ctl.setAttribute('role','group');ctl.setAttribute('aria-label','Organizar emissoras');ctl.style.margin='8px 0';
 ctl.innerHTML=(grupos.length?'<span class="sub" style="align-self:center">Grupo:</span><button type="button" class="chip" data-a="rgf" data-g="" aria-pressed="'+(!rdg)+'">Todos</button>'+grupos.map(g=>'<button type="button" class="chip" data-a="rgf" data-g="'+esc(g)+'" aria-pressed="'+(rdg===g)+'">'+esc(g)+'</button>').join(''):'')+
  '<span class="sub" style="align-self:center">Ordenar:</span><button type="button" class="chip" data-a="rsort" data-k="nome">Nome</button><button type="button" class="chip" data-a="rsort" data-k="tocada">Última tocada</button>';
 det.querySelector('summary').after(ctl);
 det.querySelectorAll('.svd').forEach(li=>{const b=li.querySelector('[data-i]');if(!b)return;const i=+b.dataset.i,x=RADIO.s.list[i];if(!x)return;
  li.hidden=!!rdg&&x.g!==rdg;if(x.c)li.style.borderLeft='4px solid '+x.c;if(x.img){const bt=li.querySelector('.svdbtn');if(bt&&!bt.querySelector('img.rlogo'))bt.insertAdjacentHTML('afterbegin','<img class="rlogo" src="'+esc(x.img)+'" alt="" width="28" height="28" style="border-radius:0.375rem;object-fit:cover;margin-right:0.5rem;flex:none">')}
  if(!li.querySelector('.rctl')){const box=document.createElement('span');box.className='rctl';box.style.display='flex';box.style.gap='4px';box.style.flexWrap='wrap';
   box.innerHTML='<button type="button" class="chip" data-a="rlogo" data-i="'+i+'" aria-label="Logotipo de '+esc(x.n)+'">Logo</button><button type="button" class="chip" data-a="rup" data-i="'+i+'" aria-label="Subir '+esc(x.n)+'"'+(i===0?' disabled':'')+'>↑</button><button type="button" class="chip" data-a="rdown" data-i="'+i+'" aria-label="Descer '+esc(x.n)+'"'+(i===RADIO.s.list.length-1?' disabled':'')+'>↓</button><button type="button" class="chip" data-a="rren" data-i="'+i+'" aria-label="Renomear '+esc(x.n)+'">Renomear</button><button type="button" class="chip" data-a="rgru" data-i="'+i+'" aria-label="Grupo de '+esc(x.n)+'">Grupo</button><button type="button" class="chip" data-a="rcor" data-i="'+i+'" aria-label="Cor de '+esc(x.n)+'">Cor</button><button type="button" class="chip" data-a="rtz" data-i="'+i+'" aria-label="Fuso horário de '+esc(x.n)+'">Fuso</button><button type="button" class="chip" data-a="rdel" data-i="'+i+'" aria-label="Remover '+esc(x.n)+'">Remover</button>';
   li.appendChild(box)}});
}

function rdSaveList(){ls.set('radios',JSON.stringify(RADIO.s.list))}

function rdMove(i,d){const j=i+d;if(j<0||j>=RADIO.s.list.length)return;const cur=RADIO.s.list[RADIO.s.cur];
 const sc=(()=>{try{return JSON.parse(ls.get('rd_sched')||'null')}catch(_){return null}})();const schedSt=sc&&RADIO.s.list[sc.i];
 const tmp=RADIO.s.list[i];RADIO.s.list[i]=RADIO.s.list[j];RADIO.s.list[j]=tmp;
 RADIO.s.cur=Math.max(0,RADIO.s.list.indexOf(cur));rdSaveList();ls.set('rd_cur',RADIO.s.cur);
 if(sc&&schedSt){sc.i=RADIO.s.list.indexOf(schedSt);if(sc.i>=0)ls.set('rd_sched',JSON.stringify(sc))}
 view();say('Emissora movida')}

function rdSortList(k){const cur=RADIO.s.list[RADIO.s.cur];const sc=(()=>{try{return JSON.parse(ls.get('rd_sched')||'null')}catch(_){return null}})();const schedSt=sc&&RADIO.s.list[sc.i];
 let hist=[];try{hist=JSON.parse(ls.get('rd_hist')||'[]')||[]}catch(_){}
 if(k==='nome')RADIO.s.list.sort((a,b)=>String(a.n).localeCompare(String(b.n),'pt-BR'));
 else RADIO.s.list.sort((a,b)=>{const ia=hist.indexOf(a.n),ib=hist.indexOf(b.n);return (ia<0?99:ia)-(ib<0?99:ib)});
 RADIO.s.cur=Math.max(0,RADIO.s.list.indexOf(cur));rdSaveList();ls.set('rd_cur',RADIO.s.cur);
 if(sc&&schedSt){sc.i=RADIO.s.list.indexOf(schedSt);if(sc.i>=0)ls.set('rd_sched',JSON.stringify(sc))}
 view();say('Lista ordenada: '+(k==='nome'?'por nome':'por última tocada'))}

function rdSleepTick(){const R=RADIO.s;if(!R||!R.sleepAt)return;
 if(Date.now()>=R.sleepAt){R.sleepAt=0;R.sleepM=0;const was=rdPlaying();if(was)rdStop();else if(S.tab==='radio'&&!R.edit)rdRender();say(was?'Temporizador encerrado: a rádio parou':'Temporizador da rádio encerrado');return}
 const e=$('#rslp');if(e)e.textContent=sleepTxt()}

function rsBox(){const R=RADIO.s;
 return `<details class="dt" id="rsdet"${R.rsOpen?' open':''}><summary>Buscar mais rádios</summary>
 <p class="sub" style="margin:0.375rem 0">Pesquisa no diretório público Radio Browser (precisa de internet).</p>
 <div class="redact">${RS_PRE.map((p,k)=>`<button type="button" class="chip" data-a="rpre" data-k="${k}">${p.l}</button>`).join('')}</div>
 <form id="rsform" class="add"><input id="rsq" aria-label="Buscar rádio por nome ou estilo" placeholder="Nome ou estilo (ex.: lofi rock)" autocomplete="off" value="${esc(R.rsQ||'')}"><button>Buscar</button></form>
 <label class="cbz"><input type="checkbox" id="rsbr"${R.rsBr?' checked':''}> Só rádios do Brasil</label>
 <div id="rsres" aria-live="polite">${R.rsHtml||''}</div></details>`}

async function rsRun(preset){const R=RADIO.s,out=$('#rsres'),q=($('#rsq').value||'').trim(),br=$('#rsbr').checked,order=(preset&&preset.order)||(br&&!q?'clickcount':'votes');
 R.rsQ=q;R.rsBr=br;if(q.length<2&&!(preset&&(preset.br||preset.cc))){out.textContent='Digite pelo menos 2 letras ou use um dos atalhos.';return}
 out.textContent='Buscando…';
 const base={hidebroken:'true',order,reverse:'true',limit:'30'};if(br)base.countrycode='BR';{const idi=(($('#rsidioma')||{}).value||'').trim(),bit=+(($('#rsbit')||{}).value||0);if(idi)base.language=idi;if(bit)base.bitrateMin=String(bit)}if(preset&&preset.cc)base.countrycode=preset.cc;if(location.protocol==='https:')base.is_https='true';
 try{let lista=await rbFetch(q?{...base,name:q}:base);const pal=q.toLowerCase().split(/\s+/).filter(Boolean);
  if(q&&lista.length<8&&pal.length){const t=await rbFetch({...base,tag:pal[0]});lista=lista.concat(t.filter(x=>pal.every(w=>(String(x.name)+' '+String(x.tags)).toLowerCase().includes(w))))}
  const vis=new Set(),itens=lista.filter(x=>{const u=String(x.url_resolved||x.url||'');if(!/^https?:\/\/\S+$/i.test(u)||(location.protocol==='https:'&&!/^https:/i.test(u))||vis.has(u))return false;vis.add(u);return true}).slice(0,25);
  R.rsHtml=itens.length?itens.map(x=>{const u=String(x.url_resolved||x.url),n=String(x.name||'Rádio').trim().slice(0,40),img=String(x.favicon||'').replace(/^http:/i,'https:'),meta=[x.country,(x.codec||'').toUpperCase()+(x.bitrate?' '+x.bitrate+' kbps':''),(x.votes||0)+' votos',(x.clickcount||0)+' acessos no diretório'].filter(Boolean).join(' · ');
   return `<div class="row"><span class="grow">${esc(n)}<br><span class="sub">${esc(meta)}</span></span><button type="button" class="chip" data-a="rsadd" data-u="${esc(u)}" data-img="${esc(/^https:\/\/\S+$/i.test(img)?img:'')}" data-n="${esc(n)}" aria-label="Adicionar à lista: ${esc(n)}">Adicionar</button><button type="button" class="chip" data-a="rsplay" data-u="${esc(u)}" data-img="${esc(/^https:\/\/\S+$/i.test(img)?img:'')}" data-n="${esc(n)}" aria-label="Adicionar e ouvir: ${esc(n)}">Ouvir e salvar</button></div>`}).join(''):'Nada encontrado para essa busca.';
  out.innerHTML=R.rsHtml;say(itens.length+(itens.length===1?' rádio encontrada':' rádios encontradas'))}
 catch(_){R.rsHtml='';out.textContent='Não foi possível buscar agora. Confira a conexão com a internet.'}}

function radioTocando(){return !!(RADIO.s.i===RADIO.s.cur&&typeof RA!=='undefined'&&RA&&!RA.paused)}

function radFimMontar(){const m=document.querySelector('#view .rad-root .mus-main');
 if(!m){const r=document.getElementById('rweek'),v=document.getElementById('view'),nb=document.getElementById('navBaixo');if(r&&v&&nb&&!r.closest('.rad-semana-acc')&&r.nextElementSibling!==nb)v.insertBefore(r,nb);return}

 ['#rvolstation','.rad-chips','#rweek'].forEach(sel=>{const e=m.querySelector(sel);if(e&&e.parentElement===m&&m.lastElementChild!==e&&!e.closest('.rad-semana-acc'))m.appendChild(e)})}

/* Fundo da Rádio (padrão Apple): uma única camada atrás de todas as abas da Rádio.
   Usa a imagem escolhida pelo usuário (Música > Imagem de fundo) ou, sem escolha, um degradê neutro. */
/* Fundo da Rádio: uma camada atrás de todas as abas, com a cor escolhida em Ajustes (sem imagem nem degradê). */
function radFundoAplicar(){const v=document.querySelector('#view');if(!v)return;
 let f=v.querySelector(':scope > .rad-fundo');
 if(S.tab!=='radio'){if(f)f.remove();return}
 if(!f){f=document.createElement('div');f.className='rad-fundo';f.setAttribute('aria-hidden','true');const h1=v.querySelector(':scope > h1.tela-titulo');h1?h1.after(f):v.prepend(f)}
 v.querySelectorAll('.rad-root,.rad-menu').forEach(e=>{e.style.backgroundImage='';e.style.backgroundSize='';e.style.backgroundPosition=''});
 v.querySelectorAll('.rad-bar *').forEach(e=>{if(e.children.length===0&&e.textContent.trim()==='Agora ouvindo')e.style.display='none'});
}

function rdDevId(){let d=ls.get('device_id');if(!d){d=Math.random().toString(36).slice(2,10);ls.set('device_id',d)}return d}

function rdAplicarCor(){const n=document.getElementById('notch');if(!n)return;const c=S.rdCor||'#c8102e';n.style.setProperty('--rdbg',c);
 const v=c[0]==='#'?[1,3,5].map(k=>parseInt(c.substr(k,2),16)):(c.match(/\d+/g)||[200,16,46]).slice(0,3).map(Number);
 const L=v.map(x=>{x=x/255;return x<=0.03928?x/12.92:Math.pow((x+0.055)/1.055,2.4)});const lum=0.2126*L[0]+0.7152*L[1]+0.0722*L[2];
 n.style.setProperty('--rdfg',lum>0.18?'#111111':'#ffffff');n.style.setProperty('--rdnav',lum>0.18?'rgba(0,0,0,0.08)':'rgba(255,255,255,0.14)')}

function rdCorDom(){const n=document.getElementById('notch');if(!n||S.tab!=='radio')return;
 const st=RADIO.s.list[RADIO.s.cur];const url=st&&st.img;if(!url){S.rdCor='#c8102e';rdAplicarCor();return}
 if(S.rdCorUrl===url){rdAplicarCor();return}
 S.rdCorUrl=url;const im=new Image();im.crossOrigin='anonymous';
 im.onload=()=>{try{const c=document.createElement('canvas');c.width=c.height=8;const x=c.getContext('2d');x.drawImage(im,0,0,8,8);const d=x.getImageData(0,0,8,8).data;let r=0,g=0,b=0,k=0;for(let i=0;i<d.length;i+=4){r+=d[i];g+=d[i+1];b+=d[i+2];k++}
   S.rdCor='rgb('+[r,g,b].map(v=>Math.round(v/k*0.8)).join(',')+')'}catch(_){S.rdCor='#c8102e'}rdAplicarCor()};
 im.onerror=()=>{S.rdCor='#c8102e';rdAplicarCor()};im.src=url}

function radioQualDom(){const v=$('#view');if(!v||S.tab!=='radio'||v.querySelector('#rqual'))return;const n=(RADIO.s.niveis||[]).length;if(n<2)return;
 const ref=v.querySelector('#rvol');if(!ref)return;const sel=document.createElement('label');sel.className='sub';sel.style.cssText='display:flex;gap:0.5rem;align-items:center;margin-top:0.4rem';
 const cur=RADIO.s.hls&&RADIO.s.hls.currentLevel>=0?RADIO.s.hls.currentLevel:-1;
 sel.innerHTML='Qualidade <select id="rqual" aria-label="Qualidade do áudio" style="padding:0.4rem;border-radius:0.6rem;font:inherit"><option value="-1"'+(cur===-1?' selected':'')+'>Automática</option>'+RADIO.s.niveis.map(x=>'<option value="'+x.i+'"'+(cur===x.i?' selected':'')+'>'+x.k+' kbps</option>').join('')+'</select>';
 ref.insertAdjacentElement('afterend',sel)}

function radioFiltrosDom(){const v=$('#view');if(!v||S.tab!=='radio'||v.querySelector('#rsfiltros'))return;const f=v.querySelector('#rsform');if(!f)return;
 const d=document.createElement('div');d.id='rsfiltros';d.style.cssText='display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;margin:0.4rem 0';
 d.innerHTML='<label class="sub" style="display:flex;gap:0.3rem;align-items:center">Idioma <input id="rsidioma" placeholder="ex.: portuguese" aria-label="Idioma das rádios" style="padding:0.4rem;border-radius:0.6rem;font:inherit;width:9rem"></label><label class="sub" style="display:flex;gap:0.3rem;align-items:center">Bitrate mínimo <select id="rsbit" aria-label="Bitrate mínimo" style="padding:0.4rem;border-radius:0.6rem;font:inherit"><option value="0">Qualquer</option><option value="64">64 kbps</option><option value="128">128 kbps</option><option value="192">192 kbps</option></select></label>';
 f.insertAdjacentElement('afterend',d)}

function rdLogoTent(){try{return JSON.parse(ls.get('rd_logo_tent')||'{}')||{}}catch(_){return {}}}

async function rdLogosBuscar(){if(S.rdLogoBusy)return;S.rdLogoBusy=true;let tent=rdLogoTent();let n=0;if(ls.get('rd_logo_v')!=='3'){tent={};ls.del('rd_logo_tent');ls.set('rd_logo_v','3')}
 try{const pend=RADIO.s.list.filter(x=>x&&x.u&&!x.img&&(tent[x.u]||0)<3).slice(0,15);
  if(!pend.length){say('Todas as emissoras já têm logotipo ou já foram tentadas');return}
  say('Buscando logotipos… '+pend.length+' emissora(s)');
  for(const x of pend){tent[x.u]=(tent[x.u]||0)+1;
   const porUrl=await rbPorUrl(x.u);const fv=(porUrl||[]).find(c=>c&&c.favicon&&/^https?:\/\/\S+$/i.test(String(c.favicon)));
   if(fv){x.img=String(fv.favicon).replace(/^http:/i,'https:');n++;await new Promise(res=>setTimeout(res,600));continue}
   let r=[];try{r=await rbFetch({name:String(x.n||''),limit:'10',hidebroken:'true'})}catch(_){r=[]}
   const nome=String(x.n||'').trim().toLowerCase();
   const cand=(Array.isArray(r)?r:[]).filter(c=>c&&c.favicon&&String(c.name||'').trim().toLowerCase()===nome&&/^https?:\/\/\S+$/i.test(String(c.favicon)));
   let host='';try{host=new URL(x.u).host}catch(_){}
   const best=cand.find(c=>{try{return new URL(c.url_resolved||c.url).host===host}catch(_){return false}})||cand[0];
   if(best){x.img=String(best.favicon).replace(/^http:/i,'https:');n++}
   await new Promise(res=>setTimeout(res,1200))}
  ls.set('rd_logo_tent',JSON.stringify(tent));
  if(n){rdSaveList();view()}
  say(n?n+' logotipo(s) encontrado(s)':'Nenhum logotipo encontrado nesta busca. Cole o endereço manualmente')
 }finally{S.rdLogoBusy=false}}

function rdJaSalva(u){return RADIO.s.list.some(x=>x&&x.u===u)}

function rdExplorarDom(){const v=$('#view');if(!v||S.tab!=='radio'||v.querySelector('#rdExplorar'))return;
 const box=document.createElement('details');box.id='rdExplorar';box.className='dt';box.style.margin='0.75rem 0';
 box.innerHTML='<summary>Explorar emissoras</summary>'+
  '<p class="sub" style="margin:0.4rem 0 0.2rem">Gênero</p><div role="group" aria-label="Gêneros" style="display:flex;gap:0.4rem;flex-wrap:wrap">'+RD_GENEROS.map(g=>'<button type="button" class="chip" data-a="rdexp" data-k="tag" data-v="'+g+'">'+g+'</button>').join('')+'</div>'+
  '<p class="sub" style="margin:0.6rem 0 0.2rem">Estado (Brasil)</p><div role="group" aria-label="Estados" style="display:flex;gap:0.4rem;flex-wrap:wrap">'+RD_ESTADOS.map(g=>'<button type="button" class="chip" data-a="rdexp" data-k="state" data-v="'+g+'">'+g.replace(/\b\w/g,c=>c.toUpperCase())+'</button>').join('')+'</div>'+
  '<div id="rdExpRes" role="region" aria-live="polite" style="margin-top:0.6rem"></div>';
 const f=v.querySelector('#rsfiltros')||v.querySelector('#rsform');if(f)f.insertAdjacentElement('afterend',box);else v.appendChild(box)}

function rdGerenciarDom(){const v=$('#view');if(!v||S.tab!=='radio'||v.querySelector('#rdGerenciar'))return;if(!RADIO.s.list.length)return;
 const box=document.createElement('details');box.id='rdGerenciar';box.className='dt';box.style.margin='0.75rem 0';
 box.innerHTML='<summary>Gerenciar emissoras ('+RADIO.s.list.length+')</summary><ul style="list-style:none;margin:0.5rem 0 0;padding:0;display:flex;flex-direction:column;gap:0.4rem">'+RADIO.s.list.map((x,i)=>'<li data-rdi="'+i+'" style="display:flex;justify-content:space-between;gap:0.5rem;align-items:center"><span style="min-width:0;overflow-wrap:anywhere">'+esc(x.n||'Emissora')+'</span><button type="button" class="chip" data-a="rdrem" data-i="'+i+'" aria-label="Remover '+esc(x.n||'emissora')+'">Remover</button></li>').join('')+'</ul>';
 const ref=v.querySelector('#rdExplorar')||v.querySelector('#rsfiltros')||v.querySelector('#rsform');if(ref)ref.insertAdjacentElement('afterend',box);else v.appendChild(box)}

function rdExpMais(){const st=S.rdExp;if(!st)return;const out=$('#rdExpRes');if(!out)return;st.off+=20;
 rbFetch(Object.assign({},st.par,{offset:String(st.off)})).then(r=>{const vis=new Set(RADIO.s.list.map(x=>x.u));const itens=(Array.isArray(r)?r:[]).filter(x=>{const u=String(x.url_resolved||x.url||'').replace(/^http:/i,'https:');if(!/^https:\/\/\S+$/i.test(u)||vis.has(u))return false;vis.add(u);x._u=u;return true});
  const ul=out.querySelector('ul');if(!ul||!itens.length){say('Não há mais resultados');return}
  ul.insertAdjacentHTML('beforeend',itens.map(x=>'<li style="display:flex;justify-content:space-between;gap:0.5rem;align-items:center"><span style="min-width:0;overflow-wrap:anywhere"><b>'+esc(String(x.name||'Rádio').trim().slice(0,40))+'</b></span><button type="button" class="chip" data-a="rdexpadd" data-u="'+esc(x._u)+'" data-n="'+esc(String(x.name||'Rádio').trim().slice(0,40))+'" data-img="">Adicionar</button></li>').join(''))}).catch(()=>{})}

function rdOrdenarDom(){const v=$('#view');const box=v&&v.querySelector('#rdGerenciar');if(!box||box.querySelector('#rdOrdem'))return;
 const p=document.createElement('label');p.className='sub';p.style.cssText='display:flex;gap:0.5rem;align-items:center;margin:0.5rem 0';
 p.innerHTML='Ordenar por <select id="rdOrdem" aria-label="Ordenar emissoras" style="padding:0.4rem;border-radius:0.6rem;font:inherit"><option value="">Ordem atual</option><option value="nome">Nome (A a Z)</option><option value="genero">Gênero</option></select>';
 box.querySelector('summary').insertAdjacentElement('afterend',p)}

function rdMoverDom(){const v=$('#view');const box=v&&v.querySelector('#rdGerenciar');if(!box)return;box.querySelectorAll('li[data-rdi]').forEach(li=>{if(li.querySelector('[data-a="rdmove"]'))return;const i=+li.dataset.rdi;const n=RADIO.s.list.length;
 const g=document.createElement('span');g.style.cssText='display:flex;gap:0.3rem';g.innerHTML='<button type="button" class="chip" data-a="rdmove" data-i="'+i+'" data-d="-1"'+(i===0?' disabled':'')+' aria-label="Subir '+esc(RADIO.s.list[i].n||'emissora')+'">↑</button><button type="button" class="chip" data-a="rdmove" data-i="'+i+'" data-d="1"'+(i===n-1?' disabled':'')+' aria-label="Descer '+esc(RADIO.s.list[i].n||'emissora')+'">↓</button>';li.insertBefore(g,li.querySelector('[data-a="rdrem"]'))})}

function radioHistHtml(){let h=[];try{h=JSON.parse(ls.get('rd_hist')||'[]')||[]}catch(_){}if(!Array.isArray(h)||!h.length)return '';
 return '<details class="dt" style="margin-top:0.75rem"><summary>Tocadas recentemente</summary><ul class="svlist">'+h.map(n=>{const i=RADIO.s.list.findIndex(x=>x.n===n);return i<0?'':'<li class="svd"><button type="button" class="svdbtn" data-a="rpick" data-i="'+i+'"><span class="grow">'+esc(n)+'</span></button></li>'}).join('')+'</ul></details>'}

function rdSchedCheck(){let sc;try{sc=JSON.parse(ls.get('rd_sched')||'null')}catch(_){return}if(!sc||!RADIO.s.list[sc.i]||!RADIO.s.list[sc.i].u)return;
 const now=new Date(),hm=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0'),hoje=dayKey(now);
 if(hm===sc.t&&sc.last!==hoje){sc.last=hoje;ls.set('rd_sched',JSON.stringify(sc));try{rdPlay(sc.i);say('Programação: tocando '+rdName(sc.i))}catch(_){say('Não foi possível iniciar a programação')}}}

/* Fachada: o restante do painel usa somente estas funções da Rádio */
window.RADIO={emissoraForaAr,radBarra,radDots,radFimMontar,radFundoAplicar,radGradeHtml,radioAct,radioExtrasDom,radioFiltrosDom,radioHistHtml,radioListDom,radioMenuHtml,radioPlayerHtml,radioQualDom,radioRoot,radioTocando,radioView,rdAplicarCor,rdCollect,rdCorDom,rdDetach,rdDevId,rdEmpty,rdExpMais,rdExplorarDom,rdFail,rdGerenciarDom,rdJaSalva,rdLogoTent,rdLogosBuscar,rdMedia,rdMerge,rdMove,rdMoverDom,rdOrdenarDom,rdPlay,rdPool,rdRand,rdRender,rdSaveList,rdSchedCheck,rdSleepTick,rdSort,rdSortList,rdStep,rdStop,rsBox,rsRun,rsTopBoxHtml,radBarraAjustes,radLayoutAjustes,radAcessibilidade,radApple,radToast,radMenuContexto};

/* Arrasto horizontal nos carrosséis (dedo ou mouse), como na Apple */
let radArrasto=null,radArrastou=false;
document.addEventListener('pointerdown',e=>{const c=e.target.closest&&e.target.closest('.rad-destaques');if(!c||e.target.closest('.rad-seta,.rad-mais'))return;const el=c.querySelector(':scope > .rad-grid')||c;radArrasto={el:el,x:e.clientX,esq:el.scrollLeft,id:e.pointerId};radArrastou=false;c.classList.add('arrastando')},true);
document.addEventListener('pointermove',e=>{if(!radArrasto)return;const dx=e.clientX-radArrasto.x;if(Math.abs(dx)>5)radArrastou=true;radArrasto.el.scrollLeft=radArrasto.esq-dx});
['pointerup','pointercancel'].forEach(t=>document.addEventListener(t,()=>{if(radArrasto){radArrasto.el.classList.remove('arrastando');radArrasto=null}},true));
document.addEventListener('click',e=>{if(radArrastou){e.stopPropagation();e.preventDefault();radArrastou=false}},true);

/* Um único controle de reprodução: a pílula fixa. Seu "…" abre as ações da emissora atual (inclui favoritar). */
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('.rf-mais');if(!b)return;e.stopPropagation();radMenuContexto(RADIO.s.cur)},true);
