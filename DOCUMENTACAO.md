# Painel notch — chaves, permissões e manutenção

## Serviços e permissões
| Serviço | Para que serve | Como conectar | Onde fica o acesso |
|---|---|---|---|
| Microsoft (Entra ID) | Calendário, To Do, OneNote, OneDrive (backup, livros, Meu dia, escuta) | Ajustes → Microsoft | Tokens no armazenamento do navegador |
| Spotify | Player, playlists, busca, fila | Ajustes → Spotify | Tokens no armazenamento do navegador |
| Last.fm | Histórico e artistas parecidos | Ajustes → Serviços com chave (chave + usuário) | Só neste aparelho |
| IQAir | Qualidade do ar | Ajustes → Serviços com chave | Só neste aparelho |
| BrasilAPI | Feriados oficiais | Sem chave | — |
| OpenFoodFacts | Calorias por código de barras | Sem chave | — |
| Radio Browser | Emissoras e logotipos | Sem chave | — |
| Open-Meteo | Clima, UV e qualidade do ar | Sem chave | — |

## Permissões da Microsoft
- Calendars.ReadWrite, Tasks.ReadWrite, Notes.ReadWrite, Files.ReadWrite.AppFolder, offline_access.
- Sem a permissão, a sincronização mostra "Sem permissão. Autorize a conta em Ajustes".

## Permissões do Spotify
- Leitura do player e controle de reprodução, leitura da biblioteca, criação de playlists (playlist-modify-private).
- Playlists por humor dependem da permissão de playlists e podem ser desligadas em Ajustes.

## Chaves que não entram no backup
- Tokens da Microsoft e do Spotify, chaves do Last.fm e da IQAir, identificador do aparelho.

## Como publicar
1. Ajustar `js/notch.js` e `css/notch.css`.
2. Rodar `node --check js/notch.js` e a suíte de testes.
3. Trocar a versão do cache em `sw.js` (`painel-vNN`).
4. Copiar os arquivos para a pasta publicada.

## Como reconectar
- Se a sincronização mostrar erro de sessão, abra Ajustes e conecte a Microsoft ou o Spotify de novo.
