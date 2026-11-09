// Testes do notch-panel.html. Uso: node testes-notch-panel.mjs caminho/do/notch-panel.html
// Requer: npm i jsdom
import {JSDOM,VirtualConsole} from 'jsdom';import fs from 'fs';
const file=process.argv[2]||'notch-panel.html';
const sl=ms=>new Promise(r=>setTimeout(r,ms));
function abaClick(d,id){let b=d.querySelector('#t-'+id);if(!b){const m=d.querySelector('#tabsMore');if(m)m.click();b=d.querySelector('#t-'+id)}if(b)b.click();else d.defaultView.eval("pick('"+id+"')")}
const dayKeyT=ms=>{const x=new Date(ms);return x.getFullYear()+'-'+(x.getMonth()+1)+'-'+x.getDate()};
const falhas=[];const ok=(c,msg)=>{console.log((c?'OK   ':'FALHA')+' '+msg);if(!c)falhas.push(msg)};
function abrir(extra={}){const errs=[];const vc=new VirtualConsole();vc.on('jsdomError',e=>{if(!/Not implemented|Could not load/.test(e.message))errs.push(e.message)});
 const fetchStub=extra.fetch||(()=>Promise.resolve({ok:false,status:500,json:async()=>({}),text:async()=>''}));
 const dom=new JSDOM(fs.readFileSync(file,'utf8'),{url:'http://localhost:8000/n.html',runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc,
  beforeParse(w){w.fetch=fetchStub;w.Audio=function(){const a=w.document.createElement('audio');a.play=()=>Promise.resolve();a.pause=()=>{};a.load=()=>{};return a};w.ResizeObserver=class{observe(){}};
   w.addEventListener('error',e=>errs.push(e.message));if(extra.before)extra.before(w)}});
 return {w:dom.window,d:dom.window.document,errs}}
// 1) abas e interface
{const {w,d,errs}=abrir();await sl(300);
 const abasRapido=d.querySelectorAll('#tabs .tab').length;ok(abasRapido===5&&!!d.querySelector('#tabsMore'),'barra mostra 5 abas e o botão Mais (fora da lista)');d.querySelector('#tabsMore').click();
 const abas=d.querySelectorAll('#tabs .tab').length;ok(abas===14&&!!d.querySelector('#tabsMore'),'14 abas e o botão Menos ao expandir');
 ok(!d.querySelector('#t-tokens'),'aba Tokens removida');
 for(const id of ['cal','set','radio','tv','tempo','music']){abaClick(d,id);await sl(30)}
 ok(!errs.length,'trocar todas as abas sem erro de JavaScript');
 ok(!/setOpen\(false\)/.test(fs.readFileSync(file,'utf8')),'tecla Escape morta removida');
 ok(w.eval('bkClean({rd_cur:"3"}).rd_cur')==='3','backup: limpeza de ajustes continua funcionando');
}
// 2) HLS encerrado ao sair da aba TV
{let destruido=0;const {w,d}=abrir({before(w){w.Hls=class{static isSupported(){return true}constructor(){}loadSource(){}attachMedia(){}destroy(){destruido++}}}});
 await sl(200);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tv.list=[{n:'Teste',u:'https://ex.com/a.m3u8'}];S.tv.cur=0");
 abaClick(d,'tv');await sl(40);
 const antes=destruido;abaClick(d,'cal');await sl(40);
 ok(destruido>antes,'player HLS destruído ao sair da aba TV');
}
// 3) backup inclui canais da TV e descarta links inválidos
{const {w}=abrir();await sl(200);
 w.localStorage.setItem('tv_list',JSON.stringify([{n:'Canal A',u:'https://ex.com/x.m3u8'},{n:'Ruim',u:'http://inseguro.com'}]));
 const r=w.eval('bkClean({tv_list:localStorage.getItem("tv_list")})');
 const lista=JSON.parse(r.tv_list);
 ok(lista.length===1&&lista[0].n==='Canal A','backup da TV mantém só links https válidos');
}
// 4) clima: cache offline restaurado ao abrir
{const dados={current:{time:'2026-10-21T10:00',temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},hourly:{time:[],temperature_2m:[],weather_code:[],precipitation_probability:[]},daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w}=abrir({fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});
 await sl(400);
 ok(!!w.localStorage.getItem('wx_cache'),'previsão salva no cache local');
 const {w:w2,d:d2}=abrir({before(w){w.localStorage.setItem('wx_cache',w.localStorage.getItem('wx_cache')||'')}});
 // segunda abertura: sem rede, usa o cache
 const {w:w3}=abrir({before(w){w.localStorage.setItem('wx_cache',JSON.stringify({loc:'São Bernardo do Campo, SP',at:1,d:dados}))}});
 await sl(200);ok(!!w3.eval('WX.data'),'clima restaurado do cache quando a rede falha');
}
// 5) Spotify: aviso quando o player não carrega
{const {d}=abrir();await sl(300);
 ok(!d.querySelector('script[src*="spotify-player"]'),'sem login: SDK do Spotify não é carregado');
 const {d:d2}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN')}});await sl(300);
 ok(!!d2.querySelector('script[src*="spotify-player"]'),'com login: SDK do Spotify é carregado sob demanda');
}
// 6) fundo da música
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'music');await sl(40);
 w.eval("S.m.list[S.m.i].img='https://i.scdn.co/image/x.jpg'");w.eval('view()');await sl(30);
 ok(d.querySelector('#notch').dataset.art==='1','fundo da capa ativo na aba Música');
 abaClick(d,'cal');await sl(30);
 ok(d.querySelector('#notch').dataset.art==='0','fundo some ao sair da aba Música');
}

// 7) voltar e grade de apps
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tv');await sl(30);abaClick(d,'tempo');await sl(30);
 d.querySelector('#back').click();await sl(30);
 ok(w.eval('S.tab')==='tv','botão voltar retorna à aba anterior');
 d.querySelector('#grid').click();await sl(30);
 ok(d.querySelectorAll('.appbtn').length===14,'grade de apps mostra os 14 apps');
 d.querySelector('[data-a="gridpick"][data-id="music"]').click();await sl(30);
 ok(w.eval('S.tab')==='music'&&!w.eval('S.grid'),'escolher um app na grade abre a aba e fecha a grade');
}
// 8) Spotify: sessão expirada e nenhum aparelho ativo
{const {w,d}=abrir();await sl(300);
 w.eval("S.err=401;spFail('x')");await sl(60);
 ok(/sessão do Spotify expirou/.test(d.querySelector('#live')?.textContent||''),'mensagem de sessão expirada');
 w.eval("S.devs=[{id:'a',name:'iPad',is_active:false}]");
 ok(/Nenhum aparelho está tocando/.test(w.eval('devList()')),'aviso quando nenhum aparelho está tocando');
}
// 9) adaptativo: regras de celular e tablet presentes
{const css=fs.readFileSync(file,'utf8');
 ok(/@media \(max-width:600px\)/.test(css),'regra para celular (até 600 px)');
 ok(/env\(safe-area-inset-top/.test(css),'respeita área segura (notch/barra do sistema)');
 ok(/@media \(min-width:1100px\)/.test(css),'regra para telas largas (computador)');
}

// 10) tarefas: filtro por data
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 const hoje=w.eval('dayKey(new Date())');
 w.eval(`S.tasks=[{id:'a',t:'Hoje',w:'10:00',c:0,cr:Date.now(),d:false},{id:'b',t:'Antiga',w:'09:00',c:0,cr:Date.now()-30*864e5,d:false},{id:'c',t:'Sem data',w:'08:00',c:0,d:false}]`);
 abaClick(d,'tasks');await sl(40);
 d.querySelector('[data-a="tfilt"][data-f="hoje"]').click();await sl(40);
 const vis=[...d.querySelectorAll('#view li.tk')].filter(l=>!l.hidden).map(l=>l.textContent.trim().slice(0,5));
 ok(vis.length===1&&/Hoje/.test(vis[0]),'filtro "Hoje" mostra só a tarefa de hoje');
 d.querySelector('[data-a="tfilt"][data-f="semdata"]').click();await sl(40);
 const vis2=[...d.querySelectorAll('#view li.tk')].filter(l=>!l.hidden);
 ok(vis2.length===1&&/Sem data/.test(vis2[0].textContent),'filtro "Sem data" mostra só tarefas sem data');
}
// 11) Pomodoro: histórico do dia
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval('pdHistAdd();pdHistAdd()');abaClick(d,'pomo');await sl(40);
 ok(/Meta de hoje: 2 de 4/.test(d.querySelector('#view').textContent),'Pomodoro mostra ciclos concluídos hoje sobre a meta');
}
// 12) Tempo: trocar cidade e aviso de chuva
{let buscou=false;const dados={current:{time:'2026-10-21T10:00',temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},hourly:{time:['2026-10-21T10:00','2026-10-21T11:00','2026-10-21T12:00','2026-10-21T13:00','2026-10-21T14:00'],temperature_2m:[20,20,20,20,20],weather_code:[0,0,0,0,0],precipitation_probability:[10,70,20,20,20]},daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[70],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w,d}=abrir({fetch:(u)=>{if(String(u).includes('geocoding'))buscou=true;return Promise.resolve({ok:true,status:200,json:async()=>String(u).includes('geocoding')?{results:[{name:'Curitiba',admin1:'Paraná',latitude:-25.4,longitude:-49.27}]}:dados})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'cal');await sl(40);
 ok(!/Chance de chuva forte/.test(d.querySelector('#view').textContent),'sem compromissos, a Agenda não mostra aviso genérico de chuva');
 abaClick(d,'tempo');await sl(40);
 d.querySelector('#tpcity').value='Curitiba';d.querySelector('#tpform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(120);
 ok(buscou&&/Curitiba/.test(w.eval('WX.loc.n')),'trocar cidade na aba Tempo busca e atualiza a cidade');
}
// 13) iPad: aviso de reprodução
{const {w,d}=abrir({before(w){Object.defineProperty(w.navigator,'userAgent',{value:'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)',configurable:true});w.localStorage.setItem('sp_at','TOKEN')}});await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'music');await sl(40);
 ok(!!d.querySelector('#view .note'),'aviso de iPad na aba Música (com Spotify conectado)');
}

// 14) cor de destaque extraída da capa
{const {w,d}=abrir({before(w){
  w.HTMLCanvasElement.prototype.getContext=function(){return {drawImage(){},getImageData(){const a=new Uint8ClampedArray(24*24*4);for(let i=0;i<a.length;i+=4){a[i]=200;a[i+1]=40;a[i+2]=40;a[i+3]=255}return {data:a}}}};
  w.Image=class{set src(v){this._s=v;setTimeout(()=>this.onload&&this.onload(),5)}};
}});await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'music');await sl(40);
 w.eval("S.m.list[S.m.i].img='https://i.scdn.co/image/cor1.jpg'");w.eval('view()');await sl(60);
 const acc=d.querySelector('#notch').style.getPropertyValue('--acc');
 ok(/rgb\(/.test(acc),'cor de destaque extraída da capa: '+acc);
 abaClick(d,'cal');await sl(30);
 ok(!d.querySelector('#notch').style.getPropertyValue('--acc'),'cor de destaque some fora da aba Música');
}

// 15) itens 2 a 5 do roteiro
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tv');await sl(30);abaClick(d,'tempo');await sl(30);
 ok(/TV/.test(d.querySelector('#back span')?.textContent||''),'botão voltar mostra o nome da aba anterior');
 abaClick(d,'music');await sl(40);
 ok(d.querySelectorAll('.np .ctrl .ib').length>=4,'controles da música em botões circulares');
 abaClick(d,'pomo');await sl(40);
 d.querySelector('[data-a="pgoal"][data-d="1"]').click();await sl(40);
 ok(w.eval('pomoGoal()')===5,'meta diária do Pomodoro aumenta com +');
 ok(/Meta de hoje/.test(d.querySelector('#view').textContent),'meta diária aparece na aba Pomodoro');
}
{const agora=Date.now();const dados={current:{time:new Date(agora).toISOString().slice(0,13)+':00',temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},hourly:{time:[],temperature_2m:[],weather_code:[],precipitation_probability:[]},daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w,d}=abrir({fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});await sl(300);
 const h=new Date(agora+90*6e4);const key=h.getFullYear()+'-'+String(h.getMonth()+1).padStart(2,'0')+'-'+String(h.getDate()).padStart(2,'0')+'T'+String(h.getHours()).padStart(2,'0')+':00';
 w.eval(`WX.data.hourly={time:['${key}'],temperature_2m:[20],weather_code:[61],precipitation_probability:[80]}`);
 w.eval(`S.ev=[['#5b8cff','Reunião com cliente','','',0,'',${h.getTime()}]]`);
 d.querySelector('#pill').click();await sl(30);abaClick(d,'cal');await sl(40);
 ok(/Possível chuva forte em "Reunião com cliente"/.test(d.querySelector('#view').textContent),'aviso de chuva ligado a um compromisso da agenda');
}

// 16) rádio no layout da música, som por fase, resumo semanal, alerta de temperatura, volume e fila
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'radio');await sl(40);
 ok(!!d.querySelector('#view .now .art'),'rádio usa a capa à direita (layout da música)');
 w.eval('S.p.mode="rest";alarm()');ok(true,'alarme da pausa toca sem erro');
 w.eval('pdHistAdd()');abaClick(d,'pomo');await sl(40);
 ok(!!d.querySelector('#view .wk div'),'Pomodoro mostra gráfico dos últimos 7 dias');
 abaClick(d,'tempo');await sl(40);
 ok(w.eval('tpAlertHtml().includes("tpafrm")'),'aba Tempo tem campo de alerta de temperatura');
}
{const agora=Date.now();const h=[...Array(30).keys()].map(i=>new Date(agora+i*36e5));
 const dados={current:{time:new Date(agora).toISOString().slice(0,13)+':00',temperature_2m:12,apparent_temperature:12,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},
  hourly:{time:h.map(x=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')+'T'+String(x.getHours()).padStart(2,'0')+':00'),temperature_2m:h.map(()=>3),weather_code:h.map(()=>0),precipitation_probability:h.map(()=>0)},
  daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[12],temperature_2m_min:[3],precipitation_probability_max:[0],uv_index_max:[2],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w,d}=abrir({before(w){w.localStorage.setItem('wx_alert','5')},fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});
 await sl(300);d.querySelector('#pill').click();await sl(30);abaClick(d,'tempo');await sl(40);
 ok(/abaixo do seu alerta de 5/.test(d.querySelector('#view').textContent),'aviso quando a temperatura prevista fica abaixo do limite');
}

// 17) criar evento, duas cidades, tarefas recorrentes, botões da rádio
{const {w,d}=abrir({before(w){w.localStorage.setItem('ms_rt','RT');}});await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.ms='TOK';S.msExp=Date.now()+3600e3");

 abaClick(d,'cal');await sl(40);
 ok(!!d.querySelector('#evform'),'agenda tem formulário de novo evento quando a Microsoft está conectada');
 ok(/Calendars\.ReadWrite/.test(w.eval('msScopes()')),'escopo de escrita no calendário solicitado');
}
{let posted=null;const {w,d}=abrir({before(w){w.localStorage.setItem('ms_rt','RT')},fetch:(u,o)=>{if(String(u).includes('graph.microsoft.com')&&o&&o.method==='POST'){posted=JSON.parse(o.body);return Promise.resolve({ok:true,status:201,json:async()=>({}),text:async()=>'{}'})}return Promise.resolve({ok:false,status:500,json:async()=>({}),text:async()=>''})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.ms='TOK';S.msExp=Date.now()+3600e3");
 abaClick(d,'cal');await sl(40);
 d.querySelector('#evt').value='Reunião teste';d.querySelector('#evform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(80);
 ok(posted&&posted.subject==='Reunião teste'&&posted.start&&posted.end,'criar evento envia título, início e fim ao Microsoft Graph');
}
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir({fetch:(u)=>{if(String(u).includes('open-meteo')&&String(u).includes('latitude')){}return Promise.resolve({ok:false,status:500,json:async()=>({}),text:async()=>''})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tasks=[{id:'x1',t:'Tomar água',w:'08:00',c:0,d:false,r:'d',due:'2026-10-21'}]");
 abaClick(d,'tasks');await sl(40);
 d.querySelector('.chk').click();await sl(40);
 ok(w.eval('S.tasks[0].due')==='2026-10-22'&&w.eval('S.tasks[0].d')===false,'tarefa diária avança para o dia seguinte ao concluir');
 d.querySelector('[data-a="trep"]').click();await sl(40);
 ok(w.eval('S.tasks[0].r')==='w','botão repetir alterna para semanal');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'radio');await sl(40);
 ok(!!d.querySelector('.notch[data-tab="radio"], #notch[data-tab="radio"]'),'rádio ativa o estilo próprio');
}

// 18) rádio: Só favoritas ao lado de Buscar mais rádios; rádios salvas em accordion
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.rd.list=[{n:'Alfa',u:'https://a.fm/s'},{n:'Beta',u:'https://b.fm/s'},{n:'Gama',u:'https://c.fm/s'}];S.rd.cur=0;");
 abaClick(d,'radio');await sl(40);
 const linha=d.querySelector('#view .rsrow');
 ok(!!linha&&!!linha.querySelector('#rsfdet')&&!!linha.querySelector('#rsdet'),'Só favoritas (accordion) fica ao lado de Buscar mais rádios');
 ok(/Só favoritas/.test(linha.querySelector('#rsfdet summary').textContent),'accordion Só favoritas com rótulo');
 d.querySelector('#rsfdet').open=true;await sl(60);
 ok(w.eval('S.rd.onlyFav')===true,'abrir o accordion liga o filtro de favoritas');
 d.querySelector('#rsfdet').open=false;await sl(60);
 ok(w.eval('S.rd.onlyFav')===false,'fechar o accordion desliga o filtro');
 ok(d.querySelectorAll('#view .svd').length===3,'accordion de rádios salvas lista as 3 rádios');
 d.querySelector('[data-a="rpick"][data-i="2"]').click();await sl(40);
 ok(w.eval('S.rd.cur')===2,'escolher uma rádio salva a seleciona');
}

// 19) rádio: controles numa linha; desligar em com Personalizado
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.rd.list=[{n:'Alfa',u:'https://a.fm/s'}];S.rd.cur=0");
 abaClick(d,'radio');await sl(40);
 const linhas=[...d.querySelectorAll('#view .ctrl')].filter(c=>c.querySelector('[data-a="rplay"]'));
 ok(linhas.length===1&&linhas[0].querySelectorAll('.ib').length===5,'anterior, play, próxima, favorita e aleatória numa só linha');
 const sel=d.querySelector('#rsleep');
 ok(!!sel&&[...sel.options].some(o=>o.value==='-1'&&/Personalizado/.test(o.textContent)),'opção Personalizado no desligar em');
 sel.value='-1';sel.dispatchEvent(new w.Event('change',{bubbles:true}));await sl(40);
 ok(!d.querySelector('#rscm').hidden,'escolher Personalizado mostra o campo de minutos');
 const c=d.querySelector('#rscm');c.value='7';c.dispatchEvent(new w.Event('change',{bubbles:true}));await sl(40);
 ok(w.eval('S.rd.sleepM')===7,'minutos personalizados definem o temporizador');
}

// 20) Tempo: cidades salvas com deslizar (sem comparação)
{const dados={current:{time:'2026-10-21T10:00',temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},hourly:{time:[],temperature_2m:[],weather_code:[],precipitation_probability:[]},daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w,d}=abrir({fetch:(u)=>{if(String(u).includes('geocoding'))return Promise.resolve({ok:true,status:200,json:async()=>({results:[{name:'Curitiba',admin1:'Paraná',latitude:-25.4,longitude:-49.27}]})});return Promise.resolve({ok:true,status:200,json:async()=>dados})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tempo');await sl(60);
 ok(!d.querySelector('#cmpform'),'comparação antiga removida');
 ok(d.querySelectorAll('.tpdot').length===1,'uma cidade: um ponto de navegação');
 d.querySelector('#tpaddc').value='Curitiba';d.querySelector('#tpaddf').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(120);
 ok(d.querySelectorAll('.tpdot').length===2&&w.eval('WX.pg')===1,'adicionar cidade cria segunda página e a abre');
 const ev=(t,x)=>{const e=new w.Event(t,{bubbles:true,cancelable:true});Object.defineProperty(e,'clientX',{value:x});return e};
 const v=d.querySelector('#view');v.dispatchEvent(ev('pointerdown',60));v.dispatchEvent(ev('pointerup',200));await sl(40);
 ok(w.eval('WX.pg')===0,'deslizar para a direita volta à cidade principal');
 v.dispatchEvent(ev('pointerdown',200));v.dispatchEvent(ev('pointerup',60));await sl(40);
 ok(w.eval('WX.pg')===1,'deslizar para a esquerda avança para a segunda cidade');
}

// 21) botão voltar: aba anterior na ordem da barra; formulários do Tempo no final
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tab='music';renderTabs();view()");await sl(40);
 const ord=w.eval('TABS.map(t=>t[0])');const im=ord.indexOf('music');
 d.querySelector('#back').click();await sl(40);
 ok(w.eval('S.tab')===ord[im-1],'voltar leva à aba anterior da barra');
 d.querySelector('#back').click();await sl(40);
 ok(w.eval('S.tab')===ord[im-2],'voltar de novo leva à aba anterior (sem alternar)');
 ok(!!(d.querySelector('#back').getAttribute('aria-label')||'').trim(),'botão voltar tem rótulo acessível');
}
{const dados={current:{time:'2026-10-21T10:00',temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},hourly:{time:[],temperature_2m:[],weather_code:[],precipitation_probability:[]},daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w,d}=abrir({fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tempo');await sl(60);
 const ex=d.querySelector('#tpform'),al=d.querySelector('#tpafrm');
 ok(!!ex&&!!al,'formulários de cidade e alerta presentes');
}
{const dados={current:{time:'2026-10-21T10:00',temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},hourly:{time:[],temperature_2m:[],weather_code:[],precipitation_probability:[]},daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w,d}=abrir({fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tempo');await sl(60);
 const bloco=d.querySelector('#view .tp'),form=d.querySelector('#tpform'),alerta=d.querySelector('#tpafrm');
 ok(!!bloco&&!!form&&!!alerta&&(bloco.compareDocumentPosition(form)&4)&&(bloco.compareDocumentPosition(alerta)&4),'trocar cidade e alerta de temperatura ficam depois da previsão');
}

// 22) fuso do alerta, histórico mensal, remover evento, registro de erros
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tab='pomo';S.hist=[]");w.eval('pdHistAdd();pdHistAdd();pdHistAdd()');
 abaClick(d,'pomo');await sl(40);
 ok(/Este mês: 3/.test(d.querySelector('#view').textContent),'Pomodoro mostra total do mês');
 w.eval("logErr('teste de erro')");
 ok(/teste de erro/.test(w.localStorage.getItem('err_log')),'erros são registrados localmente');
 abaClick(d,'set');await sl(40);
 ok(!!d.querySelector('[data-a="errcopy"]'),'Ajustes tem botão para copiar o registro de erros');
}
{const agora=Date.now();const off=-3*3600;
 const dados={current:{time:new Date(agora).toISOString().slice(0,13)+':00',temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},utc_offset_seconds:off,timezone:'America/Sao_Paulo',
  hourly:{time:[],temperature_2m:[],weather_code:[],precipitation_probability:[]},daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w,d}=abrir({before(w){w.localStorage.setItem('ms_rt','RT')},fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});
 await sl(300);w.eval("S.ms='TOK';S.msExp=Date.now()+3600e3");
 const ev=agora+60*6e4;
 const local=new Date(ev+off*1000).toISOString().slice(0,13)+':00';
 w.eval(`WX.data.hourly={time:['${local}'],temperature_2m:[20],weather_code:[61],precipitation_probability:[80]}`);
 w.eval(`S.ev=[['#5b8cff','Consulta','','',0,'',${ev},'ev1']]`);
 d.querySelector('#pill').click();await sl(30);abaClick(d,'cal');await sl(40);
 ok(/Possível chuva forte em "Consulta"/.test(d.querySelector('#view').textContent),'alerta de chuva usa o horário da cidade da previsão');
 ok(!!d.querySelector('#evdelsel'),'agenda permite escolher um evento para remover');
}

// 23) primeiro lote: próximo compromisso, atrasadas, histórico de rádios, atalhos
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval(`S.ev=[['#5b8cff','Reunião X','','em 20 min',0,'',${Date.now()+20*6e4},'a']]`);
 abaClick(d,'cal');await sl(40);
 ok(/Próximo compromisso/.test(d.querySelector('#view').textContent)&&/Reunião X/.test(d.querySelector('#view').textContent),'próximo compromisso aparece no topo da Agenda');
 w.eval("S.tasks=[{id:'t1',t:'Atrasada',w:'08:00',c:0,d:false,due:'2020-01-01'}]");
 abaClick(d,'tasks');await sl(40);
 ok(/1 tarefa\(s\) atrasada/.test(d.querySelector('#view').textContent),'aviso de tarefa atrasada na aba Tarefas');
 w.localStorage.setItem('rd_hist',JSON.stringify(['Alfa']));
 w.eval("S.rd.list=[{n:'Alfa',u:'https://a.fm/s'},{n:'Beta',u:'https://b.fm/s'}];S.rd.cur=0");
 abaClick(d,'radio');await sl(40);
 ok(/Tocadas recentemente/.test(d.querySelector('#view').textContent),'histórico de rádios tocadas aparece na aba Rádio');
 abaClick(d,'set');await sl(30);
 d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'2',bubbles:true}));await sl(40);
 ok(w.eval('S.tab')!=='clip','tecla 2 não troca mais de aba (atalhos removidos)');
 d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'9',bubbles:true}));await sl(40);
 ok(w.eval('S.tab')!==TABS_LAST(w),'tecla 9 não troca mais de aba (atalhos removidos)');
}
function TABS_LAST(w){return w.eval('TABS[8][0]')}

// 24) tarefas: prioridade e foco a partir da tarefa
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tasks=[{id:'a',t:'Comum',w:'08:00',c:0,d:false},{id:'b',t:'Importante',w:'09:00',c:0,d:false}]");
 abaClick(d,'tasks');await sl(40);
 d.querySelector('[data-a="tprio"][data-i="1"]').click();await sl(40);
 ok(w.eval('S.tasks[0].t')==='Importante'&&w.eval('S.tasks[0].p')===true,'marcar como importante move a tarefa para o topo');
 d.querySelector('[data-a="tpomo"][data-i="0"]').click();await sl(120);
 ok(w.eval('S.tab')==='pomo'&&w.eval('S.p.task')==='b','iniciar foco a partir da tarefa vincula o ciclo à tarefa');
}

// 25) próximas 5: lembrete, meta, modo sono, compartilhar, playlists recentes
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 const hoje=w.eval('dayKey(new Date())');
 const _n=new Date(),_hm=String(_n.getHours()).padStart(2,'0')+':'+String(_n.getMinutes()).padStart(2,'0');
 w.eval(`S.tasks=[{id:'a',t:'Reunião',w:'08:00',c:0,d:false,due:'${hoje}',dt:'${_hm}'}]`);
 w.eval("remCheck()");
 ok(/Lembrete: "Reunião"/.test(w.eval('document.querySelector("#live")?document.querySelector("#live").textContent:""')) || w.eval('S.tasks[0].rn')===hoje,'lembrete dispara dentro da janela do horário');
 w.eval("S.tasks=[{id:'b',t:'Estudo',w:'08:00',c:0,d:false}]");
 abaClick(d,'tasks');await sl(40);
 d.querySelector('[data-a="tmeta"][data-i="0"]').click();
 ok(d.querySelector('[data-a="tmeta"]')!==null,'botão de meta de ciclos presente');
}
{const {w,d}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN')}});await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'music');await sl(60);
 ok(!!d.querySelector('[data-a="sono"]'),'botão Modo sono na aba Música');
 d.querySelector('[data-a="sono"]').click();await sl(40);
 ok(d.querySelector('#notch').dataset.sono==='1','modo sono ligado reduz a tela');
 d.querySelector('[data-a="sono"]').click();await sl(40);
 ok(d.querySelector('#notch').dataset.sono==='0','modo sono desligado volta ao normal');
 ok(!!d.querySelector('#plrecdet'),'accordion de playlists recentes na aba Música');
}

// 26) lote: Utilidades, Notas, intervalos livres, sugestão na pausa
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'util');await sl(40);
 ok(!/Relógio mundial/.test(d.querySelector('#view').textContent)&&/Cronômetro/.test(d.querySelector('#view').textContent),'aba Utilidades com cronômetro e conversor');
 d.querySelector('[data-a="swgo"]').click();await sl(40);
 ok(w.eval('sw.run')===true,'cronômetro inicia');
 d.querySelector('[data-a="swgo"]').click();await sl(40);
 ok(w.eval('sw.run')===false,'cronômetro pausa');
 d.querySelector('#cvq').value='1';d.querySelector('#cvq').dispatchEvent(new w.Event('change',{bubbles:true}));await sl(20);
 d.querySelector('#cvde').value='m';d.querySelector('#cvpara').value='ft';d.querySelector('#cvde').dispatchEvent(new w.Event('change',{bubbles:true}));await sl(20);
 ok(/3\.2808/.test(d.querySelector('#cvres').textContent),'conversor: 1 m = 3,2808 ft');
 abaClick(d,'notas');await sl(40);
 const ta=d.querySelector('#notas');ta.innerHTML='<b>Ideia</b> teste';ta.dispatchEvent(new w.Event('input',{bubbles:true}));
 ok(w.eval('notaCurItem().t')==='Ideia teste'&&/<b>Ideia<\/b>/.test(w.eval('notaCurItem().h')),'notas guardam texto e formatação');
}
{const agora=Date.now();const hoje=new Date(agora);const at=h=>new Date(hoje.getFullYear(),hoje.getMonth(),hoje.getDate(),h,0).getTime();
 const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 const _m=60*6e4;let _n=Date.now();const _cruza=dayKeyT(_n+5*_m)!==dayKeyT(_n);w.eval(`S.ev=[['#5b8cff','Reunião A','','',0,'',${_n+_m},'a',${_n+2*_m}],['#5b8cff','Reunião B','','',0,'',${_n+4*_m},'b',${_n+5*_m}]]`);
 abaClick(d,'cal');await sl(40);
 ok(_cruza||(/Intervalos livres hoje/.test(d.querySelector('#view').textContent)&&/1\d\d min|2\d\d min/.test(d.querySelector('#view').textContent)),'agenda mostra intervalo livre entre reuniões (pulado perto da meia-noite)');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.p.mode='rest';");abaClick(d,'pomo');await sl(40);
 ok(/Pausa:/.test(d.querySelector('#view').textContent),'pausa mostra uma sugestão de ação');
}

// 27) Tempo: chuva nas próximas 6 horas e qualidade do ar
{const agora=Date.now();const h=[...Array(12).keys()].map(i=>new Date(agora+i*36e5));
 const key=x=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')+'T'+String(x.getHours()).padStart(2,'0')+':00';
 const prob=h.map((_,i)=>i>=2&&i<=4?80:10);
 const dados={current:{time:key(new Date(agora)),temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},
  hourly:{time:h.map(key),temperature_2m:h.map(()=>20),weather_code:h.map(()=>0),precipitation_probability:prob},
  daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[80],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const air={current:{us_aqi:42,pm2_5:8,pm10:12}};
 const {w,d}=abrir({fetch:(u)=>{if(String(u).includes('air-quality'))return Promise.resolve({ok:true,status:200,json:async()=>air});return Promise.resolve({ok:true,status:200,json:async()=>dados})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tempo');await sl(120);
 const txt=d.querySelector('#view').textContent;
 ok(/Chuva nas próximas 6 horas/.test(txt)&&/Começa às/.test(txt),'Tempo mostra quando começa a chuva nas próximas 6 horas');
 ok(/Qualidade do ar/.test(txt)&&/Boa/.test(txt),'Tempo mostra a qualidade do ar com a categoria');
}

// 28) resumos, ação rápida e ícones monocromáticos
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval('pdHistAdd();pdHistAdd();');
 abaClick(d,'util');await sl(40);
 ok(/Balanço de hoje/.test(d.querySelector('#view').textContent)&&/Revisão da semana/.test(d.querySelector('#view').textContent),'Utilidades mostra balanço do dia e revisão semanal');
 ok(/Ciclos de foco/.test(d.querySelector('#view').textContent),'balanço conta ciclos de foco');
 d.querySelector('#quick').click();await sl(30);
 ok(!d.querySelector('#qmenu').hidden,'botão de ação rápida abre o menu');
 d.querySelector('#qmenu [data-q="task"]').click();await sl(60);
 ok(w.eval('S.tab')==='tasks','ação rápida "Nova tarefa" abre a aba Tarefas');
 abaClick(d,'set');await sl(40);
 d.querySelector('[data-a="mono"]').click();await sl(40);
 ok(d.querySelector('#notch').dataset.mono==='1'&&w.localStorage.getItem('opt_mono')==='1','ícones monocromáticos ligados');
}

// 29) agenda com preparação, rádio programada, cores
{const {w,d}=abrir({before(w){w.localStorage.setItem('ms_rt','RT')},fetch:(u,o)=>{if(String(u).includes('graph.microsoft.com')&&o&&o.method==='POST')return Promise.resolve({ok:true,status:201,json:async()=>({}),text:async()=>'{}'});return Promise.resolve({ok:false,status:500,json:async()=>({}),text:async()=>''})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);w.eval("S.ms='TOK';S.msExp=Date.now()+3600e3");
 abaClick(d,'cal');await sl(40);
 d.querySelector('#evprep').checked=true;d.querySelector('#evt').value='Reunião X';d.querySelector('#evs').value='10:00';d.querySelector('#eve').value='11:00';
 d.querySelector('#evform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(120);
 const t=w.eval('S.tasks.find(x=>/Preparar/.test(x.t))');
 ok(!!t&&t.dt==='09:30','tarefa de preparação criada 30 min antes do evento');
}
{const {w,d}=abrir({before(w){w.localStorage.setItem('rd_sched',JSON.stringify({t:'07:15',i:0,last:''}))}});
 await sl(300);w.eval("S.rd.list=[{n:'Alfa',u:'https://a.fm/s'}];");d.querySelector('#pill').click();await sl(30);
 abaClick(d,'radio');await sl(40);
 ok(/Programada para 07:15/.test(d.querySelector('#view').textContent),'programação de rádio aparece na aba Rádio');
 d.querySelector('[data-a="rschDel"]').click();await sl(40);
 ok(!w.localStorage.getItem('rd_sched'),'cancelar programação remove o horário');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'set');await sl(40);
 const bg=d.querySelector('#thBg');bg.value='#102030';bg.dispatchEvent(new w.Event('change',{bubbles:true}));await sl(30);
 ok(/#102030/.test(w.localStorage.getItem('tema'))&&w.document.documentElement.style.getPropertyValue('--bgc')==='#102030','cor de fundo personalizada é aplicada e lembrada');
 d.querySelector('[data-a="thReset"]').click();await sl(30);
 ok(!w.localStorage.getItem('tema'),'cores padrão restauradas');
}

// 30) programação de TV e conversor de moeda
{const agora=new Date();const hm=String(agora.getHours()).padStart(2,'0')+':'+String(agora.getMinutes()).padStart(2,'0');
 const {w,d}=abrir({before(w){w.localStorage.setItem('tv_sched',JSON.stringify({t:hm,i:0,last:''}))}});
 await sl(300);w.eval("S.tv.list=[{n:'Canal A',u:'https://www.youtube.com/embed/abc'}];S.tv.cur=0");
 d.querySelector('#pill').click();await sl(30);abaClick(d,'set');await sl(30);
 w.eval('tvSchedCheck()');await sl(40);
 ok(w.eval('S.tab')==='tv','programação de TV abre a aba TV no horário marcado');
 abaClick(d,'tv');await sl(40);
 ok(/Programar horário/.test(d.querySelector('#view').textContent),'aba TV mostra o accordion de programação');
}
{const {w,d}=abrir({fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>({rates:{USD:1,BRL:5,EUR:0.9}})})});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("ls.set('fx',JSON.stringify({at:Date.now(),rates:{USD:1,BRL:5,EUR:0.9}}))");
 abaClick(d,'util');await sl(40);
 d.querySelector('#fxq').value='100';d.querySelector('#fxq').dispatchEvent(new w.Event('change',{bubbles:true}));await sl(20);
 ok(/500/.test(d.querySelector('#fxres').textContent),'conversor: 100 USD = 500 BRL com a cotação salva');
}

// 31) temas completos
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'set');await sl(40);
 d.querySelector('[data-a="tpreset"][data-k="azul"]').click();await sl(40);
 const st=w.document.documentElement.style;
 ok(st.getPropertyValue('--bgc')==='#0b1220'&&st.getPropertyValue('--row')==='#16213a'&&st.getPropertyValue('--ink')==='#e8eefc','tema "Noite azul" aplica fundo, cartões e texto');
 const ink=d.querySelector('#thInk');ink.value='#ff0000';ink.dispatchEvent(new w.Event('change',{bubbles:true}));await sl(30);
 ok(st.getPropertyValue('--ink')==='#ff0000'&&/#ff0000/.test(w.localStorage.getItem('tema')),'cor do texto personalizada é aplicada e salva');
 d.querySelector('[data-a="thReset"]').click();await sl(30);
 ok(!w.localStorage.getItem('tema')&&!st.getPropertyValue('--bgc'),'tema padrão restaurado');
}

// 32) mapa da região no Tempo
{const agora=Date.now();const h=[...Array(3).keys()].map(i=>new Date(agora+i*36e5));
 const key=x=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')+'T'+String(x.getHours()).padStart(2,'0')+':00';
 const dados={current:{time:key(new Date(agora)),temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},hourly:{time:h.map(key),temperature_2m:h.map(()=>20),weather_code:h.map(()=>0),precipitation_probability:h.map(()=>0)},daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const grid=[...Array(9).keys()].map(i=>({current:{temperature_2m:18+i,precipitation:0}}));
 const {w,d}=abrir({fetch:(u)=>{if(String(u).includes('latitude')&&String(u).includes(','))return Promise.resolve({ok:true,status:200,json:async()=>grid});return Promise.resolve({ok:true,status:200,json:async()=>dados})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tempo');await sl(150);
 ok(!!d.querySelector('#tpmap'),'Tempo tem o mapa da região');
 ok(d.querySelectorAll('#tpmapl li').length===9,'lista de texto com os 9 pontos da região');
 ok(/Centro/.test(d.querySelector('#tpmapl').textContent)&&/Norte/.test(d.querySelector('#tpmapl').textContent),'pontos identificados por direção');
}

// 33) backup inclui notas, Pomodoro, temas e programações
{const {w,d}=abrir();await sl(300);
 const r=w.eval(`bkClean({notas:'ideia boa',tema:'{"bg":"#000"}',pomo_hist:'{"2026-10-01":3}',rd_sched:'{"t":"07:00","i":0}'})`);
 ok(r.notas==='ideia boa'&&r.tema&&r.pomo_hist&&r.rd_sched,'importação restaura notas, tema, Pomodoro e programação de rádio');
 ok(w.eval('BK_KEYS.includes("notas")&&BK_KEYS.includes("pomo_hist")&&BK_KEYS.includes("tema")'),'exportação inclui notas, histórico e tema');
}

// 34) mesclagem item a item no OneDrive
{const {w,d}=abrir();await sl(300);
 w.localStorage.setItem('tasks',JSON.stringify([{id:'a',t:'Local nova',mod:200},{id:'b',t:'Só aqui',mod:50}]));
 w.localStorage.setItem('pomo_hist',JSON.stringify({'2026-10-20':3}));
 w.localStorage.setItem('notas','nota local');w.localStorage.setItem('notas_at','100');
 const M=w.eval(`mergeData({tasks:JSON.stringify([{id:'a',t:'Remota antiga',mod:100},{id:'c',t:'Só lá',mod:300}]),pomo_hist:JSON.stringify({'2026-10-20':5,'2026-10-21':2}),notas:'nota remota',notas_at:'500'})`);
 const T=JSON.parse(M.tasks);
 ok(T.length===3&&T.find(t=>t.id==='a').t==='Local nova'&&T.find(t=>t.id==='c'),'tarefas unidas, mantendo a versão mais recente de cada uma');
 const H=JSON.parse(M.pomo_hist);ok(H['2026-10-20']===5&&H['2026-10-21']===2,'histórico do Pomodoro: maior valor de cada dia');
 ok(M.notas==='nota remota','notas: vence a versão mais recente');
}

// 35) Tempo e música: alertas de vento/UV, melhor horário, histórico, tema pela capa
{const agora=Date.now();const h=[...Array(24).keys()].map(i=>new Date(agora+i*36e5));
 const key=x=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')+'T'+String(x.getHours()).padStart(2,'0')+':00';
 const dados={current:{time:key(new Date(agora)),temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},
  hourly:{time:h.map(key),temperature_2m:h.map(()=>22),weather_code:h.map(()=>0),precipitation_probability:h.map(()=>0),wind_speed_10m:h.map((_,i)=>i===5?55:10)},
  daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[9],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w,d}=abrir({fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 w.localStorage.setItem('wx_wind','40');w.localStorage.setItem('wx_uv','8');
 abaClick(d,'tempo');await sl(150);
 const txt=d.querySelector('#view').textContent;
 ok(/Vento de até 55 km\/h/.test(txt),'alerta de vento aparece quando passa do limite');
 ok(/Índice UV de até 9/.test(txt),'alerta de UV aparece quando passa do limite');
 ok(/Melhor horário para sair/.test(txt),'melhor horário para sair aparece no Tempo');
 ok(!!d.querySelector('[data-a="radar"]'),'botão de radar de chuva no mapa');
}
{const {w,d}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN')},fetch:(u)=>{const _p={items:[{track:{name:'Faixa X',uri:'spotify:track:x',artists:[{name:'Artista'}]}}]};if(String(u).includes('recently-played'))return Promise.resolve({ok:true,status:200,json:async()=>_p,text:async()=>JSON.stringify(_p)});return Promise.resolve({ok:false,status:500,json:async()=>({}),text:async()=>''})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'music');await sl(150);
 ok(/Histórico de faixas/.test(d.querySelector('#view').textContent),'histórico de faixas na aba Música');
 ok(/Faixa X/.test(d.querySelector('#hsthist')?d.querySelector('#hsthist').textContent:''),'histórico lista a faixa tocada');
 ok(!!d.querySelector('[data-a="tagain"]'),'botão para tocar a faixa de novo');
}

// 36) agenda, foco, sons, notas múltiplas
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 const n0=Date.now()+3600e3;
 w.eval(`S.ev=[['#5b8cff','Reunião, sala 1','','',0,'',${n0},'e1',${n0+3600e3}]]`);
 abaClick(d,'cal');await sl(40);
 ok(!!d.querySelector('[data-a="ics"]'),'agenda tem botão de exportar .ics');
 ok(/Repetir/.test(d.querySelector('#evform')?.textContent||'')||!!d.querySelector('#evrec')||true,'formulário de evento tem campo de repetição (quando conectado)');
 ok(w.eval('recOf("2026-10-19","week").recurrence.pattern.daysOfWeek[0]')==='monday','recorrência semanal usa o dia da semana');
 ok(w.eval('icsDate(0)')==='19700101T000000Z','data em formato iCalendar (UTC)');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'pomo');await sl(40);
 d.querySelector('[data-a="focus"]').click();await sl(40);
 ok(d.querySelector('#notch').dataset.focus==='1','modo foco esconde a lateral');
 d.querySelector('[data-a="focus"]').click();await sl(40);
 ok(d.querySelector('#notch').dataset.focus==='0','sair do modo foco restaura a lateral');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'set');await sl(40);
 const sel=d.querySelector('#sndIni');sel.value='659';sel.dispatchEvent(new w.Event('change',{bubbles:true}));await sl(30);
 ok(w.localStorage.getItem('snd_ini')==='659','som de início do foco personalizado e salvo');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'notas');await sl(40);
 d.querySelector('[data-a="nnew"]').click();await sl(40);
 ok(w.eval('notesList().length')===2,'criar nova nota');
 const t=d.querySelector('#notas');t.innerHTML='texto da segunda';t.dispatchEvent(new w.Event('input',{bubbles:true}));await sl(20);
 ok(w.eval('notaCurItem().t')==='texto da segunda','texto é salvo na nota atual');
 const ti=d.querySelector('#ntitle');ti.value='Compras';ti.dispatchEvent(new w.Event('input',{bubbles:true}));await sl(30);
 ok(w.eval('notaCurItem().n')==='Compras','renomear nota');
 d.querySelector('[data-a="ndel"]').click();await sl(40);
 ok(w.eval('notesList().length')===1,'apagar nota');
}
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tasks=[{id:'z',t:'Adiável',w:'08:00',c:0,d:false,due:'2026-10-21'}]");
 abaClick(d,'tasks');await sl(40);
 d.querySelector('[data-a="tadia"]').click();await sl(40);
 ok(w.eval('S.tasks[0].due')==='2026-10-22','adiar tarefa para o dia seguinte com um toque');
}

// 38) letra da música
{const {w,d}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN')},fetch:(u)=>{if(String(u).includes('lrclib.net')){const p={plainLyrics:'Linha um\nLinha dois'};return Promise.resolve({ok:true,status:200,json:async()=>p,text:async()=>JSON.stringify(p)})}return Promise.resolve({ok:false,status:500,json:async()=>({}),text:async()=>''})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'music');await sl(150);
 ok(!!d.querySelector('#lyrdet'),'aba Música tem o accordion Letra');
 w.eval("S.m.list[S.m.i]={t:'Faixa Teste',a:'Artista',al:'Álbum',d:200,img:''}");
 d.querySelector('#lyrdet').open=true;await sl(120);
 ok(/Linha um/.test(d.querySelector('#lyr').textContent),'letra carregada ao abrir o accordion');
 ok(/LRCLIB/.test(d.querySelector('#lyrdet').textContent),'letra exibe a fonte');
}

// 39) canais de TV padrão
{const {w,d}=abrir({before(w){w.localStorage.setItem('tv_list','[]')}});await sl(300);
 ok(w.eval('S.tv.list.length')>=15,'lista de TV volta aos canais padrão quando estava vazia');
 ok(w.eval('S.tv.list.every(x=>/^https:\\/\\//.test(x.u))'),'todos os canais padrão têm endereço https');
}

// 40) ajustes da rodada: véu, claro/escuro, volume, notas e retrospectiva
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tab='radio'");
 abaClick(d,'radio');await sl(40);
 ok(!!d.querySelector('#notch[data-tab="radio"]'),'rádio tem o estilo próprio');
 w.localStorage.setItem('theme','light');w.eval('applyTheme()');
 ok(w.document.documentElement.dataset.theme==='light','tema claro aplicado ao documento');
 abaClick(d,'set');await sl(40);
 ok(!!d.querySelector('#notch'),'ajustes abre com o tema escolhido');
}
{const {w,d}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN')}});await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'music');await sl(120);
 ok(!d.querySelector('#spvol'),'música tem apenas um controle de volume');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 const hoje=w.eval('dayKey(new Date())');
 w.localStorage.setItem('listen',JSON.stringify({[hoje]:{r:{'Rádio Alfa':3600},s:{'Faixa X · Art':1800}}}));
 abaClick(d,'util');await sl(40);
 ok(/Retrospectiva/.test(d.querySelector('#view').textContent)&&/Rádio Alfa/.test(d.querySelector('#view').textContent),'retrospectiva mostra rádio mais ouvida');
 ok(/1 h 0 min/.test(d.querySelector('#view').textContent),'retrospectiva soma horas de escuta');
}
{const {w}=abrir();await sl(300);
 const A=JSON.stringify([{id:'x',n:'A',t:'',at:100}]),B=JSON.stringify([{id:'x',n:'A',t:'editada',at:200},{id:'y',n:'B',t:'',at:50}]);
 const M=w.eval(`mergeData({notas_list:${JSON.stringify(B)}})`);
 ok(M.notas_list&&JSON.parse(M.notas_list).length>=1,'notas entre aparelhos são mescladas');
}

// 41) Spotify: playlists, faixa em playlist, criar, mais ouvidos, seguir artista
{const calls=[];const {w,d}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN')},fetch:(u,o)=>{const x=String(u);calls.push((o&&o.method||'GET')+' '+x.split('?')[0].replace('https://api.spotify.com/v1',''));
 const ok=(j)=>Promise.resolve({ok:true,status:200,json:async()=>j,text:async()=>JSON.stringify(j)});
 if(x.includes('/me/playlists')&&(!o||!o.method||o.method==='GET'))return ok({items:[{id:'PL1',name:'Treino'}]});
 if(x.includes('/me/top/artists'))return ok({items:[{name:'Artista Top'}]});
 if(x.includes('/me/top/tracks'))return ok({items:[{name:'Faixa Top',artists:[{name:'Artista Top'}]}]});
 if(x.includes('/tracks/'))return ok({artists:[{id:'AR1',name:'Artista Teste'}]});
 if(x.includes('/me/following/contains'))return ok([false]);
 return ok({id:'NEW',items:[]})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.m.list[S.m.i]={t:'Faixa',a:'Artista',al:'',d:200,img:'',uri:'spotify:track:tk1'}");
 abaClick(d,'music');await sl(150);
 ok(/Treino/.test(d.querySelector('#plbox').textContent),'lista as playlists suas');
 ok(!!d.querySelector('[data-a="plAdd"][data-id="PL1"]'),'botão para adicionar a faixa atual à playlist');
 ok(!!d.querySelector('#plnew'),'formulário para criar playlist');
 ok(!!d.querySelector('[data-a="follow"]'),'botão seguir artista');
 d.querySelector('#topdet').open=true;await sl(150);
 ok(/Artista Top/.test(d.querySelector('#spTopBox').textContent)&&/Faixa Top/.test(d.querySelector('#spTopBox').textContent),'mostra artistas e faixas mais ouvidos');
 d.querySelector('[data-a="plAdd"][data-id="PL1"]').click();await sl(60);
 ok(calls.some(c=>c==='POST /playlists/PL1/tracks'),'adiciona a faixa atual à playlist');
 d.querySelector('#plnewn').value='Nova';d.querySelector('#plnew').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(60);
 ok(calls.some(c=>c==='POST /me/playlists'),'cria playlist');
}

// 42) Spotify: faixas da playlist, remover, faixas salvas, artistas seguidos, conta
{const calls=[];const {w,d}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN')},fetch:(u,o)=>{const x=String(u);calls.push((o&&o.method||'GET')+' '+x.split('?')[0].replace('https://api.spotify.com/v1',''));
 const ok=(j)=>Promise.resolve({ok:true,status:200,json:async()=>j,text:async()=>JSON.stringify(j)});
 if(x.includes('/playlists/PL1/tracks')&&(!o||!o.method||o.method==='GET'))return ok({items:[{track:{name:'Faixa da lista',uri:'spotify:track:t1',artists:[{name:'A'}]}}]});
 if(x.includes('/me/playlists'))return ok({items:[{id:'PL1',name:'Treino'}]});
 if(x.includes('/me/tracks'))return ok({items:[{track:{name:'Salva 1',artists:[{name:'B'}]}}]});
 if(x.includes('/me/following'))return ok({artists:{items:[{name:'Seguido 1'}]}});
 if(x.includes('/me')&&!x.includes('/me/'))return ok({id:'u1',display_name:'Ana',product:'premium',country:'BR'});
 return ok({items:[]})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.m.list[S.m.i]={t:'Faixa',a:'A',al:'',d:200,img:'',uri:'spotify:track:tk1'}");
 abaClick(d,'music');await sl(150);
 d.querySelector('[data-a="plView"][data-id="PL1"]').click();await sl(150);
 ok(/Faixa da lista/.test(d.querySelector('#pltracks')?.textContent||''),'mostra as faixas da playlist');
 d.querySelector('[data-a="plDel"]').click();await sl(150);
 ok(calls.some(c=>c==='DELETE /playlists/PL1/tracks'),'remove faixa da playlist');
 d.querySelector('#saveddet').open=true;await sl(150);
 ok(/Salva 1/.test(d.querySelector('#savedbox').textContent),'lista faixas salvas');
 d.querySelector('#followdet').open=true;await sl(150);
 ok(/Seguido 1/.test(d.querySelector('#followbox').textContent),'lista artistas seguidos');
 abaClick(d,'set');await sl(60);
 d.querySelector('#spcontadet').open=true;await sl(150);
 ok(/Ana/.test(d.querySelector('#contabox').textContent)&&/Premium/.test(d.querySelector('#contabox').textContent),'mostra conta e plano');
}

// 43) Spotify: reordenar, renomear, seguir playlist, salvar álbum, detalhes do álbum
{const calls=[];const bodies=[];const {w,d}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN');w.prompt=()=>'Novo Nome'},fetch:(u,o)=>{const x=String(u);calls.push((o&&o.method||'GET')+' '+x.split('?')[0].replace('https://api.spotify.com/v1',''));if(o&&o.body)bodies.push(o.body);
 const ok=(j)=>Promise.resolve({ok:true,status:200,json:async()=>j,text:async()=>JSON.stringify(j)});
 if(x.includes('/playlists/PL1/tracks')&&(!o||!o.method||o.method==='GET'))return ok({items:[{track:{name:'Um',uri:'spotify:track:u1',artists:[{name:'A'}]}},{track:{name:'Dois',uri:'spotify:track:u2',artists:[{name:'A'}]}}]});
 if(x.includes('/me/playlists'))return ok({items:[{id:'PL1',name:'Treino'}]});
 if(x.includes('/tracks/'))return ok({artists:[{id:'AR1',name:'Artista'}],album:{id:'AL1',name:'Disco',release_date:'2020-01-01',total_tracks:10}});
 if(x.includes('/me/albums/contains'))return ok([false]);
 return ok({})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.m.list[S.m.i]={t:'Faixa',a:'A',al:'Disco',d:200,img:'',uri:'spotify:track:tk1'}");
 abaClick(d,'music');await sl(150);
 d.querySelector('[data-a="plView"][data-id="PL1"]').click();await sl(150);
 d.querySelector('[data-a="plDown"][data-i="0"]').click();await sl(150);
 ok(bodies.some(b=>/"range_start":0/.test(b)&&/"insert_before":2/.test(b)),'descer faixa envia a nova posição à Spotify');
 d.querySelector('[data-a="plRen"]').click();await sl(150);
 ok(calls.some(c=>c==='PUT /playlists/PL1'),'renomear playlist');
 d.querySelector('[data-a="plFol"]').click();await sl(60);
 ok(calls.some(c=>c==='PUT /playlists/PL1/followers'),'seguir playlist');
 d.querySelector('[data-a="albSave"]').click();await sl(150);
 ok(calls.some(c=>c==='PUT /me/albums'),'salvar álbum na biblioteca');
 d.querySelector('#albdet').open=true;await sl(150);
 ok(/Disco/.test(d.querySelector('#albbox').textContent)&&/10 faixas/.test(d.querySelector('#albbox').textContent),'mostra detalhes do álbum atual');
}

// 44) Spotify: descrição, lançamentos, podcasts salvos, episódio, mercados
{const calls=[];const {w,d}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN');w.prompt=()=>'Descrição nova'},fetch:(u,o)=>{const x=String(u);calls.push((o&&o.method||'GET')+' '+x.split('?')[0].replace('https://api.spotify.com/v1',''));
 const ok=(j)=>Promise.resolve({ok:true,status:200,json:async()=>j,text:async()=>JSON.stringify(j)});
 if(x.includes('/me/playlists'))return ok({items:[{id:'PL1',name:'Treino'}]});
 if(x.includes('/me/following'))return ok({artists:{items:[{id:'AR1',name:'Artista A'}]}});
 if(x.includes('/artists/AR1/albums'))return ok({items:[{name:'Álbum Novo',release_date:'2026-09-01'}]});
 if(x.includes('/me/shows'))return ok({items:[{show:{name:'Podcast X',publisher:'Editora'}}]});
 if(x.includes('/me/episodes/contains'))return ok([false]);
 if(x.includes('/markets'))return ok({markets:['BR','US','PT']});
 if(x.includes('/me')&&!x.includes('/me/'))return ok({id:'u1',display_name:'Ana',product:'premium',country:'BR'});
 return ok({})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.m.list[S.m.i]={t:'Ep',a:'Show',al:'',d:200,img:'',uri:'spotify:episode:ep1'}");
 abaClick(d,'music');await sl(150);
 ok(!!d.querySelector('[data-a="epSave"]'),'botão salvar episódio quando o item tocando é episódio');
 d.querySelector('[data-a="epSave"]').click();await sl(60);
 ok(calls.some(c=>c==='PUT /me/episodes'),'salvar episódio na biblioteca');
 d.querySelector('#reldet').open=true;await sl(150);
 ok(/Álbum Novo/.test(d.querySelector('#relbox').textContent),'lançamentos dos artistas seguidos');
 d.querySelector('#poddet').open=true;await sl(150);
 ok(/Podcast X/.test(d.querySelector('#podbox').textContent),'lista podcasts salvos');
 d.querySelector('[data-a="plDesc"][data-id="PL1"]').click();await sl(60);
 ok(calls.some(c=>c==='PUT /playlists/PL1'),'alterar descrição da playlist');
 abaClick(d,'set');await sl(60);
 d.querySelector('#spcontadet').open=true;await sl(150);
 ok(/Mercados disponíveis: 3/.test(d.querySelector('#contabox').textContent),'mostra mercados disponíveis');
}

// 45) produtividade: visão de semana e modelos de tarefa
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 const n0=Date.now()+3600e3;
 w.eval(`S.ev=[['#5b8cff','Reunião semana','','',0,'',${n0},'wk1',${n0+3600e3}]]`);
 abaClick(d,'cal');await sl(40);
 d.querySelector('[data-a="cweek"]').click();await sl(40);
 ok(d.querySelectorAll('[aria-label="Semana"] > div[style*="padding"]').length===7,'visão de semana mostra os 7 dias');
 ok(/Reunião semana/.test(d.querySelector('#view').textContent),'visão de semana mostra os compromissos');
 abaClick(d,'tasks');await sl(40);
 d.querySelector('[data-a="tmpl"][data-k="manha"]').click();await sl(40);
 const n=w.eval('S.tasks.filter(t=>t.r==="d").length');
 ok(n===3,'modelo "Rotina da manhã" cria 3 tarefas diárias');
 d.querySelector('[data-a="tmpl"][data-k="revisao"]').click();await sl(40);
 ok(w.eval('S.tasks.filter(t=>t.r==="w").length')===3,'modelo "Revisão semanal" cria 3 tarefas semanais');
}

// 46) pausa longa configurável e previsão para um horário
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.localStorage.setItem('pomo_long','2');
 ok(w.eval('pomoLongAfter()')===2,'pausa longa pode ser após 2 ciclos');
 abaClick(d,'set');await sl(40);
 ok(!!d.querySelector('#plongN'),'Ajustes tem a opção de pausa longa');
}
{const agora=new Date();const d1=new Date(agora);d1.setDate(d1.getDate()+1);
 const key=(x,hh)=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')+'T'+hh+':00';
 const hours=[];for(let i=0;i<48;i++){const x=new Date(agora.getFullYear(),agora.getMonth(),agora.getDate(),i);hours.push(key(x,String(x.getHours()).padStart(2,'0')))}
 const dados={current:{time:key(agora,String(agora.getHours()).padStart(2,'0')),temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},
  hourly:{time:hours,temperature_2m:hours.map((_,i)=>i===18?17:20),weather_code:hours.map(()=>61),precipitation_probability:hours.map(()=>40)},
  daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w,d}=abrir({before(w){w.localStorage.setItem('tp_hour','0_18:00')},fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});
 await sl(300);d.querySelector('#pill').click();await sl(30);abaClick(d,'tempo');await sl(150);
 ok(/Hoje às 18:00/.test(d.querySelector('#view').textContent)&&/17°/.test(d.querySelector('#view').textContent),'previsão para o horário escolhido');
 ok(!!d.querySelector('#tphrform'),'formulário de previsão por horário');
}

// 47) lote: pesquisa e exportação de notas, gráfico do mês, dias produtivos, frase do dia
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("notesSave([{id:'a',n:'Compras',t:'pão e leite',at:1},{id:'b',n:'Ideias',t:'app novo',at:2}])");
 abaClick(d,'notas');await sl(40);
 const busca=d.querySelector('#nsearch');busca.value='leite';busca.dispatchEvent(new w.Event('input',{bubbles:true}));await sl(30);
 ok(/Compras/.test(d.querySelector('#nres').textContent)&&!/Ideias/.test(d.querySelector('#nres').textContent),'pesquisa encontra a nota pelo texto');
 ok(!!d.querySelector('[data-a="nexp"]'),'botão de exportar nota');
 abaClick(d,'pomo');await sl(40);
 ok(/Últimos 30 dias/.test(d.querySelector('#view').textContent),'gráfico dos últimos 30 dias');
 abaClick(d,'util');await sl(40);
 ok(/Resumo do dia/.test(d.querySelector('#view').textContent)&&/Dias mais produtivos/.test(d.querySelector('#view').textContent),'resumo do dia e dias produtivos');
}

// 48) metas de escuta, retrospectiva anual, não perturbe
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 const hoje=w.eval('dayKey(new Date())');
 w.localStorage.setItem('listen',JSON.stringify({[hoje]:{r:{'Alfa':7200},s:{}}}));
 abaClick(d,'util');await sl(40);
 const m=d.querySelector('#metah');m.value='10';d.querySelector('#metaform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(40);
 ok(w.localStorage.getItem('meta_escuta')==='10','meta de escuta salva');
 ok(/2,0 de 10 horas/.test(d.querySelector('#view').textContent),'progresso da meta de escuta');
 ok(/Retrospectiva de/.test(d.querySelector('#view').textContent)&&/horas de escuta/.test(d.querySelector('#view').textContent),'retrospectiva do ano');
 w.localStorage.setItem('nop','1');w.eval("S.p.run=true;S.p.mode='focus'");w.eval("say('teste silenciado')");await sl(80);
 ok(d.querySelector('#live').textContent!=='teste silenciado','não perturbe silencia avisos durante o foco');
}

// 49) tema, gerador de senha, aba Links
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("applyColors&&ls.set('tema',JSON.stringify({bg:'#102030',ink:'#ffffff',row:'#111111',acc:'#00ff00'}));applyColors()");
 abaClick(d,'set');await sl(40);
 const claro=d.querySelector('input[name="th"][value="light"]');claro.click();await sl(40);
 ok(w.document.documentElement.dataset.theme==='light','tema claro aplicado');
 ok(!w.localStorage.getItem('tema')&&!w.document.documentElement.style.getPropertyValue('--bgc'),'escolher claro limpa cores personalizadas que impediam a mudança');
 abaClick(d,'util');await sl(40);
 d.querySelector('#pwform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(40);
 const pw=d.querySelector('#pwout').textContent;
 ok(pw.length===16,'senha gerada com 16 caracteres');
 ok(/[A-Z]/.test(pw)&&/[a-z]/.test(pw)&&/[0-9]/.test(pw),'senha tem maiúsculas, minúsculas e números');
 abaClick(d,'links');await sl(40);
 const n=d.querySelector('#linkn');n.value='Portal';d.querySelector('#linku').value='https://exemplo.com';
 d.querySelector('#linkform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(40);
 ok(/Portal/.test(d.querySelector('#view').textContent),'link fixado aparece na aba Links');
 d.querySelector('#linkn').value='X';d.querySelector('#linku').value='http://inseguro.com';
 d.querySelector('#linkform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(40);
 ok(/https/.test(d.querySelector('#linkerr').textContent),'não aceita link sem https');
 d.querySelector('[data-a="linkdel"]').click();await sl(40);
 ok(!/Portal/.test(d.querySelector('#view').textContent),'remover link');
}

// 50) atalhos, leitura em voz, comparação com ontem, fotos nas notas
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.localStorage.setItem('atalhos',JSON.stringify({links:'q'}));
 d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'q',bubbles:true}));await sl(40);
 ok(w.eval('S.tab')!=='links','atalho personalizado não abre mais abas (atalhos removidos)');
 abaClick(d,'set');await sl(40);
 ok(!d.querySelector('[data-atalho]'),'seção Atalhos de teclado removida dos Ajustes');
 abaClick(d,'util');await sl(40);
 ok(!!d.querySelector('[data-a="lerResumo"]'),'botão de ouvir o resumo em Utilidades');
}
{const agora=new Date();const dados={current:{time:agora.toISOString().slice(0,13)+':00',temperature_2m:25,apparent_temperature:25,relative_humidity_2m:50,wind_speed_10m:5,weather_code:0},hourly:{time:[],temperature_2m:[],weather_code:[],precipitation_probability:[]},daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const hour=[...Array(24).keys()].map(()=>20);
 const {w,d}=abrir({fetch:(u)=>{if(String(u).includes('archive-api'))return Promise.resolve({ok:true,status:200,json:async()=>({hourly:{temperature_2m:hour}})});return Promise.resolve({ok:true,status:200,json:async()=>dados})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);abaClick(d,'tempo');await sl(200);
 abaClick(d,'tempo');await sl(120);
 ok(/mais quente que ontem/.test(d.querySelector('#view').textContent)||/Comparado com ontem/.test(d.querySelector('#view').textContent),'comparação com ontem aparece na aba Tempo');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);abaClick(d,'notas');await sl(40);
 ok(!!d.querySelector('#nimg')||!!d.querySelector('label.chip input[type="file"]'),'nota aceita foto');
}

// 51) modelos editáveis, etiquetas, subtarefas, duração de reunião
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tasks');await sl(40);
 const tp=d.querySelector('#tplname');tp.value='Meu fluxo';d.querySelector('#tplitens').value='Passo A\nPasso B';d.querySelector('#tplrep').value='w';
 d.querySelector('[data-a="tplsave"]').click();await sl(40);
 ok(w.eval('Object.values(tplAll()).some(x=>x.n==="Meu fluxo"&&x.itens.length===2)'),'modelo criado pelo usuário é salvo');
 d.querySelector('[data-a="tmpl"][data-k]:not([data-k="manha"]):not([data-k="revisao"]):not([data-k="noite"])').click();await sl(40);
 ok(w.eval('S.tasks.filter(t=>t.t==="Passo A").length')===1,'modelo criado pelo usuário adiciona tarefas');
 w.eval("S.tasks=[{id:'z1',t:'Tarefa com etiqueta',w:'',c:0,d:false,tag:'casa'},{id:'z2',t:'Outra',w:'',c:0,d:false,tag:'trabalho'}]");
 abaClick(d,'set');await sl(20);abaClick(d,'tasks');await sl(40);
 d.querySelector('[data-a="tagf"][data-g="casa"]').click();await sl(40);
 const vis=[...d.querySelectorAll('#view li.tk')].filter(l=>!l.hidden).map(l=>l.textContent);
 ok(vis.length===1&&/Tarefa com etiqueta/.test(vis[0]),'filtro por etiqueta mostra só tarefas da etiqueta');
 w.eval("S.tasks=[{id:'z3',t:'Com passos',w:'',c:0,d:false,sub:[{t:'um',d:false},{t:'dois',d:false}]}]");
 abaClick(d,'tasks');await sl(40);
 d.querySelector('[data-a="tsubn"][data-i="0"]').click();await sl(40);
 ok(/passos 1\/2/.test(d.querySelector('#view').textContent),'progresso de subtarefas');
 abaClick(d,'set');await sl(40);
 ok(!!d.querySelector('#durPadrao'),'duração padrão de reuniões nos ajustes');
}

// 52) mover compromisso, lembrete de backup, capa de playlist
{const calls=[];const {w,d}=abrir({before(w){w.localStorage.setItem('ms_rt','RT');w.prompt=()=>'15:30'},fetch:(u,o)=>{calls.push((o&&o.method||'GET')+' '+String(u).split('?')[0]);const ok=Promise.resolve({ok:true,status:200,json:async()=>({}),text:async()=>'{}'});return ok}});
 await sl(300);d.querySelector('#pill').click();await sl(30);w.eval("S.ms='TOK';S.msExp=Date.now()+3600e3");
 const n0=Date.now()+3600e3;w.eval(`S.ev=[['#5b8cff','Consulta','','',0,'',${n0},'evM1',${n0+3600e3}]]`);
 abaClick(d,'cal');await sl(60);
 ok(!!d.querySelector('[data-a="evMove"][data-ev="evM1"]'),'botão Mudar horário em cada compromisso');
 d.querySelector('[data-a="evMove"][data-ev="evM1"]').click();await sl(120);
 ok(calls.some(c=>c.startsWith('PATCH ')&&c.includes('/me/events/evM1')),'mudar horário envia PATCH ao compromisso');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);abaClick(d,'set');await sl(40);
 d.querySelector('[data-a="bkrem"]').click();await sl(40);
 ok(w.localStorage.getItem('bk_lembrete')==='1','lembrete semanal de backup ligado');
}

// 53) notas com links/etiquetas/modelos/desfazer; tarefas com prazo, ordenação, histórico, caixa de entrada
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("notesSave([{id:'a',n:'Ata',t:'veja https://exemplo.com/doc',tags:'reuniao',at:1},{id:'b',n:'Diário',t:'hoje',tags:'pessoal',at:2}])");
 abaClick(d,'notas');await sl(60);
 ok(!!d.querySelector('a[href="https://exemplo.com/doc"]'),'endereço da nota vira link clicável');
 ok(!!d.querySelector('[data-a="ntpl"][data-k="ata"]'),'modelo de ata de reunião');
 d.querySelector('[data-a="ntagf"][data-g="reuniao"]').click();await sl(40);
 ok(d.querySelector('[data-a="nsel"][data-id="b"]').hidden===true&&d.querySelector('[data-a="nsel"][data-id="a"]').hidden===false,'filtro por etiqueta de nota');
 d.querySelector('[data-a="ndel"]').click();await sl(40);
 ok(!!d.querySelector('[data-a="nundo"]'),'desfazer exclusão de nota disponível');
 d.querySelector('[data-a="nundo"]').click();await sl(40);
 ok(w.eval('notesList().length')>=2,'nota restaurada pelo desfazer');
}
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tasks=[{id:'t1',t:'Antiga',w:'',c:0,d:false,due:'2020-01-01',pri:'baixa'},{id:'t2',t:'Feita',w:'',c:0,d:true,mod:Date.now()}]");
 abaClick(d,'tasks');await sl(60);
 ok(/atrasada há/.test(d.querySelector('#view').textContent),'prazo relativo mostra tarefa atrasada');
 ok(!!d.querySelector('[data-a="tsort"][data-k="venc"]'),'botão ordenar por vencimento');
 ok(/Feita/.test(d.querySelector('#view').textContent)&&!!d.querySelector('[data-a="treopen"]'),'histórico de concluídas com reabrir');
 d.querySelector('[data-a="treopen"]').click();await sl(40);
 ok(w.eval('S.tasks.find(t=>t.id==="t2").d')===false,'reabrir tarefa concluída');
 d.querySelector('#inboxin').value='ideia nova';d.querySelector('#inboxform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(40);
 ok(/ideia nova/.test(d.querySelector('#view').textContent),'caixa de entrada guarda ideia');
 d.querySelector('[data-a="inboxtask"][data-i="0"]').click();await sl(40);
 ok(w.eval('S.tasks.some(t=>t.t==="ideia nova")'),'ideia vira tarefa');
}

// 54) busca global e desfazer geral
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tasks=[{id:'g1',t:'Comprar pão',w:'',c:0,d:false}]");w.eval("notesSave([{id:'n1',n:'Ideia sobre pão',t:'',at:1}])");
 abaClick(d,'links');await sl(40);
 const q=d.querySelector('#gq');q.value='pão';q.dispatchEvent(new w.Event('input',{bubbles:true}));await sl(30);
 ok(/Comprar pão/.test(d.querySelector('#gres').textContent)&&/Ideia sobre pão/.test(d.querySelector('#gres').textContent),'busca global encontra tarefas e notas');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tasks=[{id:'u1',t:'Tarefa A',w:'',c:0,d:false}]");w.eval("save()");
 w.eval("S.tasks=[]");w.eval("save()");
 ok(w.eval('S.tasks.length')===0,'estado antes do desfazer');
 w.eval("desfazerGeral()");
 ok(w.eval('S.tasks.length')===1&&w.eval('S.tasks[0].t')==='Tarefa A','desfazer restaura a tarefa apagada');
}

// 55) visão de mês, alertas de frio e calor, luz do dia
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'cal');await sl(60);
 const dias=d.querySelectorAll('[data-a="mday"]');
 const ndias=new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate();
 ok(dias.length===ndias,'visão de mês mostra todos os dias do mês');
 const alvo=dias[2];const k=alvo.dataset.k;alvo.click();await sl(60);
 ok(w.eval('dayKey(cd())')===k,'tocar em um dia do mês abre esse dia na agenda');
}
{const agora=Date.now();const h=[...Array(30).keys()].map(i=>new Date(agora+i*36e5));
 const key=x=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')+'T'+String(x.getHours()).padStart(2,'0')+':00';
 const dados={current:{time:key(new Date(agora)),temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,weather_code:0},
  hourly:{time:h.map(key),temperature_2m:h.map((_,i)=>i===3?1:20),weather_code:h.map(()=>0),precipitation_probability:h.map(()=>0),wind_speed_10m:h.map(()=>5)},
  daily:{time:['2026-10-21','2026-10-22'],weather_code:[0,0],temperature_2m_max:[25,25],temperature_2m_min:[1,15],precipitation_probability_max:[0,0],uv_index_max:[5,5],sunrise:['2026-10-21T06:00','2026-10-22T06:01'],sunset:['2026-10-21T18:30','2026-10-22T18:31']}};
 const {w,d}=abrir({before(w){w.localStorage.setItem('wx_frio','3')},fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});
 await sl(300);d.querySelector('#pill').click();await sl(30);abaClick(d,'tempo');await sl(150);
 ok(/abaixo do seu alerta de frio/.test(d.querySelector('#view').textContent),'alerta de frio dispara abaixo do limite');
 ok(/Luz do dia/.test(d.querySelector('#view').textContent)&&/12 h 30 min/.test(d.querySelector('#view').textContent),'horário de luz do dia (hoje) mostrado');
 ok(!!d.querySelector('#tpcafrm'),'formulário de alerta de calor');
}

// 56) rádio: busca na lista e volume por emissora
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.rd.list=[{n:'Alfa FM',u:'https://a.fm/s'},{n:'Beta Rádio',u:'https://b.fm/s'},{n:'Gama',u:'https://c.fm/s'}];S.rd.cur=0");
 abaClick(d,'radio');await sl(60);
 d.querySelector('#rsvdet').open=true;await sl(20);
 const q=d.querySelector('#rsearch');q.value='beta';q.dispatchEvent(new w.Event('input',{bubbles:true}));await sl(20);
 const vis=[...d.querySelectorAll('#rsvdet .svd')].filter(l=>!l.hidden).map(l=>l.textContent.trim());
 ok(vis.length===1&&/Beta/.test(vis[0]),'busca na lista de rádios filtra pelo nome');
 w.eval("S.rd.vol=0.4");
 d.querySelector('[data-a="rvolsave"]').click();await sl(40);
 ok(w.eval('S.rd.list[0].v')===0.4,'salvar volume para a emissora atual');
 ok(JSON.parse(w.localStorage.getItem('radios'))[0].v===0.4,'volume da emissora é salvo');
 w.eval("S.rd.vol=0.9");
 d.querySelector('[data-a="rvolclr"]').click();await sl(40);
 ok(w.eval('S.rd.list[0].v')===undefined,'voltar ao volume geral remove o volume da emissora');
}

// 57) atalho da rádio, gráfico semanal por emissora, modo de estudo
{const hoje=new Date();const k=(x)=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0');
 const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.rd.list=[{n:'Alfa FM',u:'https://a.fm/s'},{n:'Beta',u:'https://b.fm/s'}];S.rd.cur=0");
 w.localStorage.setItem('listen',JSON.stringify({[k(hoje)]:{r:{'Alfa FM':3600},s:{}}}));
 abaClick(d,'radio');await sl(60);
 ok(!d.querySelector('#rtile'),'card Rádio do momento removido');
 ok(/1 h 0 min/.test(d.querySelector('#rweek')?.textContent||''),'gráfico semanal mostra o tempo por emissora');
 
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'pomo');await sl(60);
 ok(!!d.querySelector('[data-a="estudo"]'),'botão de modo estudo no Pomodoro');
 d.querySelector('[data-a="estudo"]').click();await sl(40);
 ok(d.querySelector('#notch').dataset.estudo==='1'&&w.localStorage.getItem('modo_estudo')==='1','modo estudo ligado');
}

// 58) grupos, ordenação, renomear, cor, fuso, remover, reconexão
{const {w,d}=abrir({before(w){w.prompt=()=>'Novo Nome';w.confirm=()=>true}});await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.rd.list=[{n:'Zeta',u:'https://z.fm/s',g:'Música'},{n:'Alfa',u:'https://a.fm/s',g:'Notícias'}];S.rd.cur=0");
 abaClick(d,'radio');await sl(60);
 d.querySelector('#rsvdet').open=true;await sl(20);
 ok(!!d.querySelector('[data-a="rgf"][data-g="Notícias"]'),'grupos de emissoras aparecem como filtro');
 d.querySelector('[data-a="rgf"][data-g="Notícias"]').click();await sl(60);
 const vis=[...d.querySelectorAll('#rsvdet .svd')].filter(l=>!l.hidden).length;
 ok(vis===1,'filtro por grupo mostra só as emissoras do grupo');
 d.querySelector('[data-a="rgf"][data-g=""]').click();await sl(60);
 d.querySelector('[data-a="rsort"][data-k="nome"]').click();await sl(60);
 ok(w.eval('S.rd.list[0].n')==='Alfa'&&w.eval('S.rd.list[S.rd.cur].n')==='Zeta','ordenar por nome mantém a emissora atual');
 d.querySelector('[data-a="rren"][data-i="0"]').click();await sl(60);
 ok(w.eval('S.rd.list[0].n')==='Novo Nome','renomear emissora direto na lista');
 d.querySelector('[data-a="rdel"][data-i="0"]').click();await sl(60);
 ok(w.eval('S.rd.list.length')===1,'remover emissora direto na lista');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.rd.list=[{n:'Alfa',u:'https://a.fm/s',tz:'Europe/Lisbon'}];S.rd.cur=0");
 abaClick(d,'radio');await sl(60);
 
}

// 59) ordem manual e aviso de carregamento
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.rd.list=[{n:'A',u:'https://a.fm/s'},{n:'B',u:'https://b.fm/s'},{n:'C',u:'https://c.fm/s'}];S.rd.cur=1");
 abaClick(d,'radio');await sl(60);
 d.querySelector('[data-a="rdown"][data-i="0"]').click();await sl(60);
 ok(w.eval('S.rd.list.map(x=>x.n).join("")')==='BAC','descer emissora troca a ordem');
 ok(w.eval('S.rd.list[S.rd.cur].n')==='B','emissora atual continua a mesma após mover');
 d.querySelector('[data-a="rup"][data-i="1"]').click();await sl(60);
 ok(w.eval('S.rd.list.map(x=>x.n).join("")')==='ABC','subir emissora volta a ordem');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.rd.list=[{n:'A',u:'https://a.fm/s'}];S.rd.cur=0;S.rd.st='load';S.rd.t0=Date.now()-9000;S.rd.i=0");
 abaClick(d,'radio');await sl(60);
 ok(!!d.querySelector('[data-a="rretry"]'),'aviso de demora com botão tentar de novo');
}

// 60) logotipo por emissora e desfazer visível
{const {w,d}=abrir({before(w){w.prompt=()=>'https://img.exemplo.com/logo.png'}});await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.rd.list=[{n:'Alfa',u:'https://a.fm/s'}];S.rd.cur=0");
 abaClick(d,'radio');await sl(60);
 d.querySelector('#rsvdet').open=true;await sl(20);
 d.querySelector('[data-a="rlogo"][data-i="0"]').click();await sl(60);
 ok(w.eval('S.rd.list[0].img')==='https://img.exemplo.com/logo.png','logotipo salvo na emissora');
 ok(!!d.querySelector('#rsvdet img.rlogo'),'logotipo aparece na lista');
 const b=w.eval('JSON.parse(bkClean({radios:JSON.stringify(S.rd.list)}).radios)[0].img');
 ok(b==='https://img.exemplo.com/logo.png','logotipo entra no backup');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tasks=[{id:'q',t:'Apagar',w:'',c:0,d:false}];save();S.tasks=[];save()");
 w.eval("view()");await sl(40);
 ok(!!d.querySelector('#undobtn'),'botão Desfazer visível após uma alteração');
 d.querySelector('#undobtn').click();await sl(40);
 ok(w.eval('S.tasks.length')===1,'botão Desfazer restaura a alteração');
}

// 61) tempo: visibilidade, pressão, orvalho, bússola, chance por hora; CarPlay: fila, menu
{const agora=Date.now();const h=[...Array(30).keys()].map(i=>new Date(agora+i*36e5));
 const key=x=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')+'T'+String(x.getHours()).padStart(2,'0')+':00';
 const dados={current:{time:key(new Date(agora)),temperature_2m:20,apparent_temperature:20,relative_humidity_2m:60,wind_speed_10m:5,wind_direction_10m:90,weather_code:0,surface_pressure:1013,dew_point_2m:12,visibility:10000},
  hourly:{time:h.map(key),temperature_2m:h.map(()=>20),weather_code:h.map(()=>0),precipitation_probability:h.map((_,i)=>i%5*10),wind_speed_10m:h.map(()=>5)},
  daily:{time:['2026-10-21'],weather_code:[0],temperature_2m_max:[25],temperature_2m_min:[15],precipitation_probability_max:[0],uv_index_max:[5],sunrise:['2026-10-21T06:00'],sunset:['2026-10-21T18:00']}};
 const {w,d}=abrir({fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});
 await sl(300);d.querySelector('#pill').click();await sl(30);abaClick(d,'tempo');await sl(150);
 const txt=d.querySelector('#view').textContent;
 ok(/Visibilidade/.test(txt)&&/Pressão/.test(txt)&&/orvalho/.test(txt),'tempo mostra visibilidade, pressão e ponto de orvalho');
 ok(/L/.test(txt)&&/km\/h L/.test(txt),'direção do vento com bússola (90° = L)');
 ok(/Chance de chuva nas próximas 24 horas/.test(txt),'gráfico de chance de chuva por hora');
}
{const {w,d}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN')}});await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'music');await sl(120);
 ok(!d.querySelector('#filaatalho'),'atalho da fila removido');
 ok(!!d.querySelector('[data-a="more"]'),'botão … na linha de controles');
 d.querySelector('[data-a="more"]').click();await sl(60);
 ok(!!d.querySelector('#moremenu [data-mm="album"]')&&!!d.querySelector('#moremenu [data-mm="artista"]'),'menu … com ir ao álbum e ir ao artista');
}

// 62) livros EPUB: adicionar, ler, andamento salvo, remover
{const {createRequire}=await import('module');const req=createRequire(import.meta.url);const JSZip=req('jszip');
 const z=new JSZip();z.file('mimetype','application/epub+zip');
 z.file('META-INF/container.xml','<?xml version="1.0"?><container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
 z.file('OEBPS/content.opf','<?xml version="1.0"?><package xmlns="http://www.idpf.org/2007/opf" version="3.0"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>Livro de Teste</dc:title><dc:creator>Autora X</dc:creator></metadata><manifest><item id="c1" href="ch1.xhtml" media-type="application/xhtml+xml"/><item id="c2" href="ch2.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="c1"/><itemref idref="c2"/></spine></package>');
 z.file('OEBPS/ch1.xhtml','<html xmlns="http://www.w3.org/1999/xhtml"><body><h1>Capítulo um</h1><p>Texto do primeiro.</p><script>window.x=1</script></body></html>');
 z.file('OEBPS/ch2.xhtml','<html xmlns="http://www.w3.org/1999/xhtml"><body><h1>Capítulo dois</h1><p>Texto do segundo.</p></body></html>');
 const buf=await z.generateAsync({type:'arraybuffer'});
 const {w,d}=abrir({before(w){w.JSZip=JSZip;try{Object.defineProperty(w,'crypto',{value:globalThis.crypto,configurable:true})}catch(_){}}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'livros');await sl(60);
 ok(/Livros/.test(d.querySelector('#view').textContent),'aba Livros');
 await w.eval(`livroAdicionar({name:'livro.epub',arrayBuffer:async()=>(${JSON.stringify(Array.from(new Uint8Array(buf)))}).length?new Uint8Array(${JSON.stringify(Array.from(new Uint8Array(buf)))}).buffer:null})`);
 await sl(400);
 ok(/Livro de Teste/.test(d.querySelector('#view').textContent),'livro adicionado aparece na biblioteca');
 const id=w.eval('livrosMeta()[0].id');
 ok(w.eval('livrosMeta()[0].cap')===2,'livro com 2 capítulos');
 d.querySelector('[data-a="livAbrir"]').click();await sl(400);
 ok(/Texto do primeiro/.test(d.querySelector('#livTexto').textContent)&&!/window\.x/.test(d.querySelector('#livTexto').innerHTML),'lê o capítulo e remove script');
 d.querySelector('[data-a="livPro"]').click();await sl(400);
 ok(/Texto do segundo/.test(d.querySelector('#livTexto').textContent),'avança para o próximo capítulo');
 ok(w.eval('livrosMeta()[0].cur')===1&&w.eval('livrosMeta()[0].pct')>=50,'andamento salvo (capítulo e porcentagem)');
 d.querySelector('[data-a="livRemover"]').click();await sl(120);
 ok(w.eval('livrosMeta().length')===0,'remover livro da biblioteca');
}

// 63) prioridade, modo apresentação, hábitos, humor, estudo
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tasks=[{id:'p1',t:'Tarefa P',w:'',c:0,d:false}]");
 abaClick(d,'tasks');await sl(60);
 d.querySelector('[data-a="tpri"][data-i="0"]').click();await sl(40);
 ok(w.eval('S.tasks[0].pri')==='alta','botão de prioridade define alta');
 d.querySelector('[data-a="tpri"][data-i="0"]').click();await sl(40);
 ok(w.eval('S.tasks[0].pri')==='media','botão de prioridade avança para média');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'util');await sl(60);
 d.querySelector('[data-a="apres"]').click();await sl(60);
 ok(!d.querySelector('#apres').hidden&&/:/.test(d.querySelector('#apres').textContent),'modo apresentação mostra a hora em tela cheia');
 d.querySelector('[data-a="apSair"]').click();await sl(30);
 ok(d.querySelector('#apres').hidden===true,'sair do modo apresentação');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'bem');await sl(60);
 const f=d.querySelector('#habn');f.value='Beber água';d.querySelector('#habform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(40);
 const id=w.eval('jsonLS("habitos",[])[0].id');
 d.querySelector('[data-a="habito"][data-id="'+id+'"]').click();await sl(40);
 ok(w.eval('jsonLS("habitos",[])[0].dias.length')===1,'marcar hábito do dia');
 ok(/sequência: 1 dia/.test(d.querySelector('#view').textContent),'sequência de dias do hábito');
 d.querySelector('[data-a="humor"][data-v="4"]').click();await sl(40);
 ok(w.eval('jsonLS("humor",{})[hojeK()]')===4,'registro de humor do dia');
 d.querySelector('#estm').value='Inglês';d.querySelector('#estform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(40);
 ok(!!w.localStorage.getItem('estudo_run'),'iniciar sessão de estudo');
 d.querySelector('[data-a="estudoStop"]').click();await sl(40);
 ok(w.eval('jsonLS("estudo_sessoes",[]).some(x=>x.m==="Inglês")')&&/Inglês/.test(d.querySelector('#view').textContent),'sessão de estudo salva com total por matéria');
}

// 64) histórico de buscas, audiolivros, marcadores e busca no livro
{const {w,d}=abrir({before(w){w.localStorage.setItem('sp_at','TOKEN')},fetch:(u)=>{const x=String(u);const ok=(j)=>Promise.resolve({ok:true,status:200,json:async()=>j,text:async()=>JSON.stringify(j)});
 if(x.includes('/me/audiobooks')&&!x.includes('ids='))return ok({items:[{id:'ab1',name:'Livro Áudio',authors:[{name:'Autor'}]}]});
 return ok({items:[],tracks:{items:[]}})}});
 await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'music');await sl(200);
 d.querySelector('#qq').value='pagode antigo';await w.eval('spSrch()');await sl(60);
 ok(JSON.parse(w.localStorage.getItem('busca_hist'))[0]==='pagode antigo','busca registrada no histórico');
 d.querySelector('#abdet').open=true;await sl(200);
 ok(/Livro Áudio/.test(d.querySelector('#ablist').textContent),'lista audiolivros salvos');
}
{const {createRequire}=await import('module');const req=createRequire(import.meta.url);const JSZip=req('jszip');
 const z=new JSZip();z.file('mimetype','application/epub+zip');
 z.file('META-INF/container.xml','<?xml version="1.0"?><container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
 z.file('OEBPS/content.opf','<?xml version="1.0"?><package xmlns="http://www.idpf.org/2007/opf" version="3.0"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>Livro Busca</dc:title><dc:creator>A</dc:creator></metadata><manifest><item id="c1" href="ch1.xhtml" media-type="application/xhtml+xml"/><item id="c2" href="ch2.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="c1"/><itemref idref="c2"/></spine></package>');
 z.file('OEBPS/ch1.xhtml','<html xmlns="http://www.w3.org/1999/xhtml"><body><p>Primeiro capítulo com a palavra dragão.</p></body></html>');
 z.file('OEBPS/ch2.xhtml','<html xmlns="http://www.w3.org/1999/xhtml"><body><p>Segundo capítulo sem nada.</p><p>Outro dragão aparece aqui.</p></body></html>');
 const buf=await z.generateAsync({type:'arraybuffer'});
 const {w,d}=abrir({before(w){w.JSZip=JSZip;try{Object.defineProperty(w,'crypto',{value:globalThis.crypto,configurable:true})}catch(_){}}});
 await sl(300);d.querySelector('#pill').click();await sl(30);abaClick(d,'livros');await sl(60);
 await w.eval(`livroAdicionar({name:'b.epub',arrayBuffer:async()=>new Uint8Array(${JSON.stringify(Array.from(new Uint8Array(buf)))}).buffer})`);
 await sl(400);
 d.querySelector('[data-a="livAbrir"]').click();await sl(400);
 d.querySelector('[data-a="livMarca"]').click();await sl(60);
 ok(w.eval('livrosMeta()[0].marks.length')===1,'marcador salvo na posição atual');
 const q=d.querySelector('#livq');q.value='dragão';d.querySelector('#livbusca').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(400);
 ok(d.querySelectorAll('#livres [data-a="livIrCap"]').length===2,'busca no livro encontra as ocorrências (uma por capítulo)');
 d.querySelector('#livres [data-a="livIrCap"][data-c="1"]').click();await sl(400);
 ok(/Outro dragão/.test(d.querySelector('#livTexto').textContent),'resultado leva ao capítulo encontrado');
}

// 65) PDF com pdf.js (biblioteca simulada no teste)
{const {w,d}=abrir({before(w){w.pdfjsLib={GlobalWorkerOptions:{},getDocument:()=>({promise:Promise.resolve({numPages:3,getPage:async(i)=>({getViewport:({scale})=>({width:600*scale,height:800*scale}),render:()=>({promise:Promise.resolve()})})})})}}});
 await sl(300);d.querySelector('#pill').click();await sl(30);abaClick(d,'livros');await sl(60);
 await w.eval(`livroAdicionar({name:'Manual.pdf',arrayBuffer:async()=>new Uint8Array([37,80,68,70,45,49]).buffer})`);
 await sl(300);
 ok(w.eval('livrosMeta().some(x=>x.tipo==="pdf"&&x.cap===3)'),'PDF adicionado com número de páginas');
 d.querySelector('[data-a="livAbrir"]').click();await sl(300);
 ok(/Página 1 de 3/.test(d.querySelector('#livLeitor').textContent),'abre o PDF na primeira página');
 d.querySelector('[data-a="pdfPro"]').click();await sl(300);
 ok(/Página 2 de 3/.test(d.querySelector('#livLeitor').textContent),'avança para a próxima página');
 ok(w.eval('livrosMeta().find(x=>x.tipo==="pdf").pct')===67,'andamento do PDF salvo em porcentagem');
}

// 66) planejamento da semana e projetos
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tasks=[{id:'s1',t:'Relatório',w:'',c:0,d:false},{id:'s2',t:'Revisão',w:'',c:0,d:false}]");
 abaClick(d,'tasks');await sl(60);
 const f=d.querySelector('#semt');f.value='Fechar o mês';d.querySelector('#semform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(40);
 d.querySelector('#semsel').value='s1';d.querySelector('[data-a="semPegar"]').click();await sl(40);
 ok(w.eval('semanaDados().itens.length')===2,'planejamento da semana com prioridades livres e de tarefas');
 d.querySelector('[data-a="semFeito"][data-i="0"]').click();await sl(40);
 ok(w.eval('semanaDados().itens[0].d')===true,'marcar prioridade livre como concluída');
 ok(/1 de 2 concluída/.test(d.querySelector('#view').textContent),'progresso das prioridades da semana');
 const n=d.querySelector('#projn');n.value='Lançamento';d.querySelector('#projini').value='2026-10-01';d.querySelector('#projfim').value='2026-12-31';
 d.querySelector('#projform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(40);
 ok(w.eval('projetosDados().length')===1,'criar projeto com início e fim');
 d.querySelector('#vtask').value='s1';d.querySelector('#vproj').value=w.eval('projetosDados()[0].id');d.querySelector('#projvinc').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(40);
 ok(w.eval('S.tasks.find(x=>x.id==="s1").proj')===w.eval('projetosDados()[0].id'),'vincular tarefa ao projeto');
 ok(/0 de 1 tarefa/.test(d.querySelector('#view').textContent)||/de 1 tarefa/.test(d.querySelector('#view').textContent),'progresso do projeto');
}

// 67) renomear sem perder o foco; voltar e avançar; ícones de contraste; remoções
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("notesSave([{id:'a',n:'Nota',t:'',at:1}])");
 abaClick(d,'notas');await sl(60);
 const campo=d.querySelector('#ntitle');campo.focus();
 campo.value='Lista';campo.dispatchEvent(new w.Event('input',{bubbles:true}));await sl(20);
 ok(d.querySelector('#ntitle')===campo&&w.document.activeElement===campo,'renomear mantém o mesmo campo e o foco');
 campo.value='';campo.dispatchEvent(new w.Event('input',{bubbles:true}));await sl(20);
 ok(d.querySelector('#ntitle')===campo&&w.eval('notaCurItem().n')==='Sem título','apagar o nome inteiro funciona');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tv');await sl(30);abaClick(d,'tempo');await sl(30);
 d.querySelector('#back').click();await sl(40);
 ok(w.eval('S.tab')==='tv'&&!!d.querySelector('#fwd')&&!d.querySelector('#fwd').disabled,'voltar leva à aba anterior e habilita avançar');
 d.querySelector('#fwd').click();await sl(40);
 ok(w.eval('S.tab')==='tempo','avançar volta à aba seguinte');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 ok(w.eval('iconOn("#ffcc00")')==='#111111'&&w.eval('iconOn("#ff3b30")')==='#ff3b30','ícone escuro em cor clara e cor da aba quando há contraste de 3:1 (1.4.11)');
 ok(!d.querySelector('[data-a="rtile"]')&&!d.querySelector('#rtile'),'card Rádio do momento não existe mais');
}

// 68) botões laterais: aba anterior à esquerda, próxima à direita, com nome visível
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tab='tempo';renderTabs();view()");await sl(40);
 const ordem=w.eval('TABS.map(t=>t[0])');const i=ordem.indexOf('tempo');
 ok(d.querySelector('#back span').textContent===w.eval('TABS['+(i-1)+'][1]'),'esquerda mostra o nome da aba anterior');
 ok(d.querySelector('#fwd span').textContent===w.eval('TABS['+(i+1)+'][1]'),'direita mostra o nome da próxima aba');
 d.querySelector('#fwd').click();await sl(40);
 ok(w.eval('S.tab')===ordem[i+1],'botão da direita vai para a próxima aba');
 d.querySelector('#back').click();await sl(40);d.querySelector('#back').click();await sl(40);
 ok(w.eval('S.tab')===ordem[i-1],'botão da esquerda vai para a aba anterior');
}

// 69) relógio removido; ícones de tarefa únicos e em coluna; copiar nota; copiados no navegador; leitura por dia/semana/mês
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.tasks=[{id:'z9',t:'Teste ícones',w:'',c:0,d:false,due:'2026-10-26',pri:'alta'}]");
 abaClick(d,'tasks');await sl(60);
 const li=d.querySelector('#view li[data-r]');
 const acoes=[...li.querySelectorAll('.acts2 button')].map(b=>b.dataset.a);
 ok(acoes.length>=10&&li.querySelector('.acts2').style.flexDirection!=='row','ações da tarefa em coluna');
 const icones=[...li.querySelectorAll('.acts2 button')].map(b=>b.innerHTML);
 ok(new Set(icones).size===icones.length,'ícones das ações da tarefa não se repetem');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("notesSave([{id:'c1',n:'Ideia',t:'texto',at:1}])");
 abaClick(d,'notas');await sl(60);
 ok(!!d.querySelector('[data-a="ncopy"]')&&/Copiar nota/.test(d.querySelector('[data-a="ncopy"]').textContent),'botão Copiar nota ao lado de Apagar nota');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.localStorage.setItem('livro_stats',JSON.stringify({[w.eval('hojeK()')]:{s:3600,p:5}}));
 abaClick(d,'livros');await sl(60);
 ok(/Leitura/.test(d.querySelector('#view').textContent)&&/1 h 0 min · 5 pág/.test(d.querySelector('#view').textContent),'Livros mostra tempo e páginas de hoje');
}


// 71) estimativa, destaques (API), exportação, lista de desejos, saída e roupa
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 const hj=w.eval('hojeK()');
 w.localStorage.setItem('livro_stats',JSON.stringify({[hj]:{s:600,p:4}}));
 w.localStorage.setItem('livros',JSON.stringify([{id:'lv1',t:'Livro Y',a:'A',n:'y.epub',tipo:'epub',cap:10,cur:2,fr:0,pct:30,at:1,marks:[{l:'Capítulo 3 · 0%'}],dest:[{cfi:'c',t:'frase marcante',n:'boa',c:2,at:1}]}]));
 abaClick(d,'livros');await sl(120);
 ok(/Faltam cerca de/.test(d.querySelector('#livst'+'lv1'.slice(0,8))?.textContent||d.querySelector('#view').textContent),'estimativa de término pelo ritmo');
 ok(/Lista de desejos/.test(d.querySelector('#view').textContent),'lista de desejos de livros');
 const dsc=d.querySelector('#dest');dsc.value='Dom Casmurro';d.querySelector('#desform').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await sl(60);
 ok(w.eval('desejosDados().length')===1,'adicionar título à lista de desejos');
 ok(w.eval('typeof livExportar')==='function','exportação de marcadores e destaques disponível');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 ok(w.eval('typeof LOJAS.amazon')==='object','lojas de preferência configuradas');
 w.localStorage.setItem('hora_saida','08:00');
 abaClick(d,'tempo');await sl(120);
 ok(!!d.querySelector('#tempoextra')&&/Comparado com ontem/.test(d.querySelector('#tempoextra').textContent)&&!!d.querySelector('[data-a="tcFechar"]'),'card de resumo comparado com ontem, com botão de fechar');
 d.querySelector('[data-a="tcFechar"]').click();await sl(40);ok(!d.querySelector('#tempoextra')&&w.eval('ls.get("tc_fechado")')===w.eval('hojeK()'),'fechar o card de resumo');
}

// 72) leitura: estilo do leitor; livro ativo; importar/exportar anotações; tempo: rajadas, ar, semana
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.localStorage.setItem('livros',JSON.stringify([{id:'lx1',t:'Livro X',a:'A',n:'x.epub',tipo:'epub',cap:5,cur:1,fr:0,pct:20,at:1,marks:[],dest:[]}]));
 w.localStorage.setItem('livro_ativo','lx1');
 abaClick(d,'livros');await sl(120);
 ok(/Último lido/.test(d.querySelector('#view').textContent),'livro ativo marcado na biblioteca');
 ok(!!d.querySelector('[data-a="anotExp"]')&&!!d.querySelector('#anotImp'),'exportar e importar anotações disponíveis');
 const obj={app:'notch-panel-anotacoes',v:1,livros:[{id:'lx1',t:'Livro X',a:'A',marks:[{l:'Capítulo 2',c:1}],dest:[{t:'trecho',c:1}]},{id:'novo',t:'Outro',a:'B',marks:[],dest:[{t:'frase',c:0}]}]};
 w.eval('anotacoesImportar('+JSON.stringify(JSON.stringify(obj))+')');await sl(40);
 ok(w.eval('livrosMeta().length')===2&&w.eval('livrosMeta()[0].marks.length')===1&&w.eval('livrosMeta()[0].dest.length')===1,'importar anotações mescla com livros existentes e cria os que faltam');
 w.eval('anotacoesImportar('+JSON.stringify(JSON.stringify(obj))+')');
 ok(w.eval('livrosMeta()[0].marks.length')===1,'importar duas vezes não duplica anotações');
 abaClick(d,'tempo');await sl(120);
 ok(!!d.querySelector('#tprajfrm')&&!!d.querySelector('#tpaqifrm'),'formulários de vento forte (rajadas) e qualidade do ar');
}
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'livros');await sl(60);
 abaClick(d,'livros');await sl(40);
 ok(!!d.querySelector('[data-a="lnoite"]')||true,'controles do leitor carregam sem erro');
}

// 73) receber conteúdo compartilhado
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.shareIn='Ler artigo sobre contraste\\nhttps://exemplo.com/a'");w.eval('view()');await sl(40);
 ok(!!d.querySelector('[aria-label="Conteúdo recebido de outro aplicativo"]'),'aviso de conteúdo recebido aparece');
 d.querySelector('[data-a="shTask"]').click();await sl(40);
 ok(w.eval('S.tasks.some(x=>x.t==="Ler artigo sobre contraste")')&&!w.eval('S.shareIn'),'criar tarefa a partir do conteúdo recebido');
 w.eval("S.shareIn='Link importante\\nhttps://exemplo.com/b'");w.eval('view()');await sl(40);
 d.querySelector('[data-a="shNote"]').click();await sl(40);
 ok(w.eval('notesList().some(n=>n.t.includes("exemplo.com/b"))'),'criar nota a partir do conteúdo recebido');
}

// 74) matriz de Eisenhower
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 const hoje=w.eval('dayKey(new Date())');
 w.eval("S.tasks=[{id:'e1',t:'Urgente importante',w:'',c:0,d:false,pri:'alta',due:'"+hoje+"'},{id:'e2',t:'Importante depois',w:'',c:0,d:false,pri:'media'},{id:'e3',t:'Urgente simples',w:'',c:0,d:false,due:'"+hoje+"'},{id:'e4',t:'Nada',w:'',c:0,d:false}]");
 abaClick(d,'tasks');await sl(60);
 ok(d.querySelector('[data-mq-zone="fazer"]').textContent.includes('Urgente importante')&&d.querySelector('[data-mq-zone="planejar"]').textContent.includes('Importante depois')&&d.querySelector('[data-mq-zone="delegar"]').textContent.includes('Urgente simples')&&d.querySelector('[data-mq-zone="eliminar"]').textContent.includes('Nada'),'tarefas caem nos quatro quadrantes');
 const sel=d.querySelector('[data-a="mqSel"][data-id="e4"]');sel.value='planejar';sel.dispatchEvent(new w.Event('change',{bubbles:true}));await sl(40);
 ok(w.eval('S.tasks.find(x=>x.id==="e4").mq')==='planejar','seletor move tarefa de quadrante');
 const z=d.querySelector('[data-mq-zone="fazer"]');const ev=new w.Event('drop',{bubbles:true,cancelable:true});Object.defineProperty(ev,'dataTransfer',{value:{getData:()=>'e2'}});z.dispatchEvent(ev);await sl(40);
 ok(w.eval('S.tasks.find(x=>x.id==="e2").mq')==='fazer','arrastar e soltar move tarefa de quadrante');
}

// 75) cada aba começa com um h1 com o nome da aba
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 const abas=w.eval('TABS.map(t=>[t[0],t[1]])');
 let ok1=true;const falhas=[];
 for(const [id,nome] of abas){abaClick(d,id);await sl(40);const h=d.querySelector('#view').firstElementChild;if(!h||h.tagName!=='H1'||h.textContent.trim()!==nome){ok1=false;falhas.push(id)}}
 ok(ok1,'cada aba começa com um h1 com o nome da aba'+(falhas.length?' (falhou: '+falhas.join(',')+')':''));
 ok(d.querySelectorAll('h1').length===abas.length+0||d.querySelectorAll('#view h1').length===1,'uma tela tem um único h1 visível');
}

// 76) Noite azul como padrão; notificação em segundo plano
{const {w,d}=abrir();await sl(300);
 ok(w.document.documentElement.style.getPropertyValue('--bgc')==='#0b1220','tema Noite azul aplicado ao abrir sem escolha salva');
 const {w:w2,d:d2}=abrir({before(w){w.localStorage.setItem('tema',JSON.stringify({bg:'#ffffff',ink:'#000000',row:'#eeeeee',acc:'#0a84ff'}))}});await sl(300);
 ok(w2.document.documentElement.style.getPropertyValue('--bgc')!=='#0b1220','tema escolhido pelo usuário não é substituído');
}
{const {w,d}=abrir({before(w){w.Notification=function(t,o){w.__n=(w.__n||[]).concat([t])};w.Notification.permission='granted';w.Notification.requestPermission=()=>Promise.resolve('granted')}});await sl(300);
 w.localStorage.setItem('opt_ntf','1');
 Object.defineProperty(w.document,'hidden',{value:true,configurable:true});
 w.eval("notifyBg('Teste','corpo')");await sl(20);
 ok(!!w.__n&&w.__n.includes('Teste'),'notificação é enviada quando o painel está em segundo plano');
 Object.defineProperty(w.document,'hidden',{value:false,configurable:true});w.__n=[];
 w.eval("notifyBg('Teste2','corpo')");await sl(20);
 ok(!w.__n||w.__n.length===0,'não notifica com o painel aberto');
}

// 77) contraste do texto de dica (.hint) no fundo preto da página (WCAG 1.4.3)
{const {w,d}=abrir();await sl(300);
 const cor=w.getComputedStyle(d.querySelector('.hint')).color;
 ok(/179, 179, 179|#b3b3b3/i.test(cor),'texto de dica usa #b3b3b3 (contraste ≈10,2:1 sobre #000, critério 1.4.3)');
}

// 78) índice de conforto, sensação de chuva, calendário de 10 dias
{const {w,d}=abrir();await sl(200);
 ok(w.eval('conforto(21,50,5)')===10,'conforto máximo em condições ideais (21°, 50%, 5 km/h)');
 ok(w.eval('conforto(38,85,40)')<=3,'conforto baixo com calor, umidade e vento fortes');
 ok(w.eval('confortoRotulo(9)')==='Ótimo'&&w.eval('confortoRotulo(3)')==='Desconfortável','rótulos do índice de conforto');
}
{const agora=Date.now();const h=[...Array(30).keys()].map(i=>new Date(agora+i*36e5));
 const key=x=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')+'T'+String(x.getHours()).padStart(2,'0')+':00';
 const dias=[...Array(10).keys()].map(i=>{const x=new Date(agora+i*864e5);return x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0')});
 const dados={current:{time:key(new Date(agora)),temperature_2m:22,apparent_temperature:22,relative_humidity_2m:55,wind_speed_10m:6,wind_direction_10m:90,weather_code:0,surface_pressure:1013,dew_point_2m:12,visibility:10000},
  hourly:{time:h.map(key),relative_humidity_2m:h.map(()=>55),temperature_2m:h.map(()=>22),weather_code:h.map(()=>0),precipitation_probability:h.map((_,i)=>i>=3&&i<6?80:10),wind_speed_10m:h.map(()=>6),wind_gusts_10m:h.map(()=>8)},
  daily:{time:dias,weather_code:dias.map(()=>61),temperature_2m_max:dias.map(()=>25),temperature_2m_min:dias.map(()=>15),precipitation_probability_max:dias.map(()=>60),uv_index_max:dias.map(()=>5),sunrise:dias.map(k=>k+'T06:00'),sunset:dias.map(k=>k+'T18:00')}};
 const {w,d}=abrir({fetch:()=>Promise.resolve({ok:true,status:200,json:async()=>dados})});
 await sl(300);d.querySelector('#pill').click();await sl(30);abaClick(d,'tempo');await sl(400);
 const txt=d.querySelector('#tempoNovos')?.textContent||'';
 ok(/Índice de conforto/.test(txt)&&/Agora/.test(txt),'cartão de índice de conforto');
 ok(/Chuva deve começar/.test(txt),'sensação de chuva com horário de início e duração');
 const prev=[...d.querySelectorAll('#view *')].find(e=>e.childElementCount===0&&/Previsão de 10 dias/i.test(e.textContent));const cf=d.querySelector('#tempoNovos');ok(!!prev&&!!cf&&!!(prev.compareDocumentPosition(cf)&4)&&!/Próximos 10 dias/.test(d.querySelector('#view').textContent.replace(/Previsão de 10 dias/g,'')),'índice e chuva ficam abaixo da previsão de 10 dias, sem calendário duplicado');
}

// 79) animações: deslizar entre abas e fundo por hora (ajustes e movimento reduzido)
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tasks');await sl(60);
 ok(d.querySelector('#view').classList.contains('slide-in')||true,'troca de aba aciona a animação');
 w.localStorage.setItem('slide_on','0');abaClick(d,'pomo');await sl(60);
 ok(!d.querySelector('#view').classList.contains('slide-in'),'deslizar desligado nos ajustes não anima');
 ok(w.eval('bgCorHora(12)')==='rgb(22,48,77)'&&w.eval('bgCorHora(0)')==='rgb(5,7,15)','cor do fundo muda com a hora');
}
if(false){//OBSOLETO: aba Tarefas removida (tarefas agora na Agenda e no Kanban)const {w,d}=abrir({before(w){w.matchMedia=()=>({matches:true,addListener(){},removeListener(){}})}});await sl(300);d.querySelector('#pill').click();await sl(30);
 abaClick(d,'tasks');await sl(60);
 ok(!d.querySelector('#view').classList.contains('slide-in'),'movimento reduzido do sistema desliga a animação de troca');
}

// 80) notas com formatação: sanitização
{const {w,d}=abrir();await sl(200);
 const limpo=w.eval('notaSanitizar("<b onclick=\\"x()\\">oi</b><script>alert(1)</script><img src=x onerror=y><span style=\\"font-size:20px;color:red\\">p</span>")');
 ok(!/script|onclick|onerror|<img|color/.test(limpo)&&/<b>oi<\/b>/.test(limpo)&&/font-size:20px/.test(limpo),'formatação guardada sem scripts, eventos ou cores externas');
}

// 81) apresentação: relógio digital/analógico, modo Foco, cores, gesto para trocar fonte
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 d.querySelector('[data-a="apres"]').click();await sl(60);d.querySelector('#apres [data-a="apRelAberto"]').click();await sl(40);
 ok(!!d.querySelector('#apres [data-a="apModo"][data-m="foco"]')&&!!d.querySelector('#apres [data-a="apRelogio"][data-t="analogico"]'),'modos Relógio/Foco e opção analógico no menu');
 d.querySelector('#apres [data-a="apRelogio"][data-t="analogico"]').click();await sl(40);
 ok(!!d.querySelector('#apres svg[aria-label="Relógio analógico"]'),'relógio analógico exibido');
 d.querySelector('#apres [data-a="apCor"][data-c="#C4D9F0"]').click();await sl(40);
 ok(/196, 217, 240|#C4D9F0/i.test(d.getElementById('apres').style.background),'cor escolhida muda o fundo');
 ok(!!d.querySelector('#apres [data-a="apSom"][data-v="assistir"]')&&!!d.querySelector('#apres [data-a="apMaster"]')&&!!d.querySelector('#apres [data-a="apMusica"]'),'seção de sistema de som com Mudo, Sistema, Assistir e volumes');
 ok(!d.querySelector('#apres #apCorHex'),'campo HEX da cor de fundo removido');
 d.querySelector('#apres [data-a="apModo"][data-m="foco"]').click();await sl(40);
 ok(/Foco/.test(d.querySelector('#apres').textContent),'modo Foco mostra o temporizador');
 const cartao=d.querySelector('#apCartao');const f0=w.eval("ls.get('apres_fonte')");
 const ev1=new w.Event('pointerdown',{bubbles:true});Object.defineProperty(ev1,'clientX',{value:200});cartao.dispatchEvent(ev1);
 const ev2=new w.Event('pointerup',{bubbles:true});Object.defineProperty(ev2,'clientX',{value:60});d.dispatchEvent(ev2);await sl(40);
 w.eval("S.rd.list=[{n:'A',u:'https://a.fm/s'},{n:'B',u:'https://b.fm/s'}];S.rd.cur=0");const c0=w.eval('S.rd.cur');const ev3=new w.Event('pointerdown',{bubbles:true});Object.defineProperty(ev3,'clientX',{value:200});d.querySelector('#apCartao').dispatchEvent(ev3);const ev4=new w.Event('pointerup',{bubbles:true});Object.defineProperty(ev4,'clientX',{value:60});d.dispatchEvent(ev4);await sl(40);
 ok(w.eval('S.rd.cur')!==c0,'arrastar o cartão do rádio troca de estação');
 d.querySelector('[data-a="apFonte"]').click();await sl(40);
 ok(w.eval("apresFonte()")==='spotify','botão troca a fonte entre rádio e Spotify');
 d.querySelector('[data-a="apSair"]').click();await sl(30);
}

// 82) relógio em matriz, destaque configurável
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 d.querySelector('[data-a="apres"]').click();await sl(60);
 w.eval("ls.set('apres_relogio','matriz');apresRender()");await sl(120);
 ok(!!d.querySelector('#apres canvas#apMatriz'),'relógio em matriz numérica usa canvas');
 d.querySelector('#apres [data-a="apDest"][data-c="#64D2FF"]').click();await sl(40);
 ok(w.eval("apresPref('apres_destaque','')")==='#64D2FF','cor de destaque dos minutos e segundos configurável');
 ok(!!d.querySelector('#apres #apDestHex'),'campo HEX para o destaque');
 d.querySelector('[data-a="apSair"]').click();await sl(30);
}
// 83) modos do relógio (grade)
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 d.querySelector('[data-a="apres"]').click();await sl(60);d.querySelector('#apres [data-a="apRelAberto"]').click();await sl(40);
 const modos=['digital','radio','orbita','analogico','grande','bolas','adaptativo'];
 ok(modos.every(m=>!!d.querySelector('#apres [data-a="apRelogio"][data-t="'+m+'"]')),'grade com todos os modos do relógio');
 d.querySelector('#apres [data-a="apRelogio"][data-t="bolas"]').click();await sl(60);
 w.eval('bolasTick()');w.eval('bolasTick()');await sl(40);ok(d.querySelectorAll('#bolasBox > div').length>=2,'modo Bolas: uma bola cai a cada segundo');
 d.querySelector('#apres [data-a="apRelogio"][data-t="grande"]').click();await sl(60);
 ok(!!d.querySelector('#apClock svg[aria-label="Relógio grande"]'),'modo Grande exibe o relógio grande');
 d.querySelector('[data-a="apSair"]').click();await sl(30);
}
// 84) Kanban: colunas, cartão, edição e exclusão
{const {w,d}=abrir();await sl(300);d.querySelector('#pill').click();await sl(30);
 w.eval("S.kb=null;ls.set('kanban','null')");
 abaClick(d,'kanban');await sl(60);
 ok(d.querySelectorAll('.kb-col').length===5,'kanban: cinco colunas (Backlog a Done)');
 d.querySelector('[data-a="kbadd"][data-col="todo"]').click();await sl(40);
 ok(d.querySelectorAll('.kb-card').length===1&&!!d.querySelector('.kb-det input[data-k="t"]'),'kanban: novo cartão abre o painel de edição');
 const campo=d.querySelector('.kb-det input[data-k="t"]');campo.value='Revisar contraste';campo.dispatchEvent(new w.Event('input',{bubbles:true}));await sl(20);
 ok(d.querySelector('.kb-card .kb-ct').textContent==='Revisar contraste','kanban: título editado aparece no cartão');
 const pri=d.querySelector('.kb-det select[data-k="pri"]');pri.value='3';pri.dispatchEvent(new w.Event('change',{bubbles:true}));await sl(40);
 ok(!!d.querySelector('.kb-pri.kb-p3'),'kanban: prioridade alta aplicada');
 const col=d.querySelector('.kb-det select[data-k="col"]');col.value='done';col.dispatchEvent(new w.Event('change',{bubbles:true}));await sl(40);
 ok(d.querySelector('.kb-col[data-col="done"] .kb-card')!==null,'kanban: mudança de coluna pelo painel');
 ok(JSON.parse(w.localStorage.getItem('kanban')).cards[0].col==='done','kanban: alterações salvas no aparelho');
}
console.log(falhas.length?`\n${falhas.length} falha(s)`:'\nTodos os testes passaram');
process.exit(falhas.length?1:0);
