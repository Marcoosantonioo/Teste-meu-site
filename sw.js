const VERSAO = 'painel-v3';
const ARQUIVOS = ['./', './notch-panel.html', './css/notch.css', './js/notch.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.filter(n => n !== VERSAO).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Arquivos do próprio painel: tenta a rede primeiro (para receber atualizações) e usa o cache sem internet
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req)
        .then(resp => {
          if (resp.ok) { const copia = resp.clone(); caches.open(VERSAO).then(c => c.put(req, copia)); }
          return resp;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./notch-panel.html')))
    );
    return;
  }

  // Bibliotecas de CDN (versões fixas): cache primeiro
  if (url.hostname === 'cdnjs.cloudflare.com') {
    e.respondWith(
      caches.match(req).then(r => r || fetch(req).then(resp => {
        if (resp.ok) { const copia = resp.clone(); caches.open(VERSAO).then(c => c.put(req, copia)); }
        return resp;
      }))
    );
  }
  // Spotify, Microsoft, Open-Meteo e demais: sempre direto na rede (dados ao vivo, não guardados)
});
