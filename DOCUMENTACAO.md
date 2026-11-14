# Painel notch — chaves, permissões e manutenção

## Serviços e permissões
| Serviço | Para que serve | Como conectar | Onde fica o acesso |
|---|---|---|---|
| Microsoft (Entra ID) | Calendário, To Do, OneNote, OneDrive (backup, livros, Meu dia, escuta) | Ajustes → Microsoft | Tokens no armazenamento do navegador (site) ou no cofre seguro (app nativo) |
| Spotify | Player, playlists, busca, fila | Ajustes → Spotify | Tokens no armazenamento do navegador (site) ou no cofre seguro (app nativo) |
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
1. Ajustar os arquivos em `js/` (`notch.js`, `dados.js`) e em `estilo/notch.css`.
2. Rodar `npm run check`, `npm run lint` e `npm test`.
3. Trocar a versão do cache em `sw.js` (`VERSAO = 'painel-vNN'`) e, se a lista de arquivos mudou, atualizar `ARQUIVOS`.
4. Registrar a entrega em `CHANGELOG.md`.
5. Rodar `npm run build`: ele gera `dist/` e falha se algum arquivo referenciado estiver faltando (inclui os ícones).
6. Publicar o conteúdo de `dist/` na pasta do site.

## Como reconectar
- Se a sincronização mostrar erro de sessão, abra Ajustes e conecte a Microsoft ou o Spotify de novo.

## Recursos do painel (v87)

- **Treinos:** plano semanal, treino em casa, exercícios, séries com repetições e carga, histórico e evolução de carga.
- **Cardio:** registro de tempo, distância, inclinação, calorias e observação; evolução com gráfico e resumo; sessões podem ser apagadas e desfeitas.
- **Peso (em jejum):** registro diário com média móvel de 7 dias e gráfico de 30 dias (com tabela de texto alternativo).
- **Metas por exercício:** séries, repetições e carga padrão de cada exercício, usadas na lista do Meu dia.
- **Sincronização de treinos:** pelo botão "Sincronizar treinos" (exige o backup OneDrive ativo em Ajustes). Treinos, cardio e exercícios são unidos entre aparelhos; exclusões são respeitadas nos dois lados por marcas de exclusão.
- **Livros:** exclusões também são sincronizadas por marcas próprias.
- **Rotinas fixas:** planos de treino e modelos do Meu dia ficam em `js/dados.js`. Para mudar um horário ou exercício, edite esse arquivo.
- **Armazenamento:** todas as chaves do painel usam o prefixo `notch:`. Chaves antigas (sem prefixo) são copiadas automaticamente na primeira leitura.

## Backup

- **Exportar:** gera um arquivo JSON com todos os dados do painel, ou apenas uma parte (por grupo). O checksum usa SHA-256.
- **Importar:** une os dados ao que já existe no aparelho e nada é apagado. Se o checksum não bater, o painel pergunta antes de importar.
- **Limite de tamanho:** arquivos acima de 2 MB são recusados.
- **Senha:** o backup pode ser protegido por senha (PBKDF2 com SHA-256 e 200 mil iterações).
- **Limite do checksum:** o checksum detecta corrupção acidental. Como não há chave secreta, quem altera o arquivo consegue recalculá-lo. Não é uma assinatura.

## Desenvolvimento

- **Testes:** `npm test` (suíte com jsdom; carrega a página com os scripts reais). Requer `npm install`.
- **Verificação de sintaxe:** `npm run check`.
- **Lint:** `npm run lint` (ESLint com a configuração em `eslint.config.js`).
- **Build:** `npm run build` gera `dist/` e confere se o HTML, o `sw.js` e o manifesto apontam só para arquivos existentes.
- **Versão:** a versão do cache fica em `VERSAO` no `sw.js`. Quando a lista de arquivos muda, ela sobe. O histórico de mudanças fica em `CHANGELOG.md`.
- **Tempo:** tarefas periódicas usam um agendador único (`agendar`, com precisão de 1 s).
- **Tela:** a tela só é mantida acesa com a aba visível e sem bateria baixa (quando o navegador informa a bateria).
