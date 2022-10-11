# UNIX E SHELL

## Bash / Terminal

echo > → adiciona sobre-escrevendo o conteúdo

echo >> → adiciona sem sobre-escrever o conteúdo

man → acessa o manual do comando 

cd → navegar entre diretórios

cd.. → retornar um diretório 

touch → cria arquivos

ls → verificar quais os itens do diretório

ls * → listar todos os arquivos

ls -l → infos a + dos arquivos

../ → atalho para voltar um diretório (automaticamente) 

head -5 → exibe as 5 primeiras linhas do arquivo

tail -4 → exibe as 4 ultimas linhas do arquivo

rm - remove o documento 

rmdir - remove o diretório 

rm -rf - remove o diretório com o conteúdo incluso (irreversível) 

rm *.txt - remove todos os documentos terminando em .txt

grep - busca dentro do arquivo;


cat → mostra as infos do arquivo

cat >  → receber valores como inputs (ctrl + d p/ fechar)

cat >> → adiciona mais valores ao arquivo

cat arquivo1 arquivo2 > arquivo3 → envia as infos do arquivo 1 e 2 para o 3

sort < → coloca em ordem alfabética 

sort < arquivo1 > arquivoOrdenado → cria um arquivo com as infos ordenadas

wc → lista linhas palavras e letras

wc -w → quantidade de palavras

wc -l → quantidade de linhas

wc -c → quantidade de caracteres

who → quem tem acesso ao terminal 

chmod u → alterar as permissões do arquivo apenas pro usuário que está utilizando

chmod g → alterar as permissões do arquivo para usuário do grupo 

chmod o → alterar as permissões do arquivo outros usuários

chmod a → alterar as permissões do arquivo todos 

chmod u- → retirar permissão (u, g, o, ou a)

chmod u+ → adicionar permissão  (u, g, o, ou a)

chmod u= → altera para original  (u, g, o, ou a)

ps → lista os processos

sleep 10 & → deixa o processo em pausa por 10 segundos no background

bg → deixar o processo em background

jobs → processos que estão rodando

crtl z → coloca em background

fg %1 → volta a executar o processo

crtl c → mata o processo

kill % 1 → mata o primeiro processo background

kill -9 7816 → força a morte do processo 7816

& → coloca o comando em background 

&& → executa o próximo comando apenas se o comando anterior tiver sucesso

-o → redirecionar a saída do comando (ex: sort  arquivo -o arquivo) 


### Tipos de acessos

(arquivo.txt)

-rw-r- - r - - 

R   - Ler 

W  - Editar  

X   - Acessar pelo comando cd

”-” - Arquivo comum 

D   - Diretório 

Sequencia 
1 - parte mostra o tipo do arquivo 

2 - permissões do arquivo 

3 - grupo do usuário 

4 - outros usuários de outros grupos 

-rw-r- - r - - 

Arquivo comum, permite leitura, permite edição, nega execução, apenas leitura dos grupos
