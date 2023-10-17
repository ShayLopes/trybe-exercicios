# GIT E GITHUB

Como funciona o versionamento. 

- primeiramente nós criamos uma pasta do repositório a partir do terminal
- usamos o comando “git init” para iniciar o processo de estrutura 
- abrimos a IDE a partir do comando code .
- com a IDE aberta criamos um README.md para adicionar as instruções do projeto 
- após isso podemos usar o comando "git checkout -b nova-branch" para criar uma nova branch 
- navegamos até a branch com o comando "git checkout nova-branch"
- dentro da branch adicionamos os arquivos desejados com o comando "git add ." (para adicionar todos os arquivos) ou "git add nome nome-do-arquivo."
- após os arquivos adicionados damos um commit com o comando "git commit -m "nome do commit" 
- executamos as alterações, commitamos novamente e vamos para o merge 
- sempre utilizar o "git status" afim de entender oque está acontecendo
- após tudo isso navegar até a main e utilizar o comando "git merge nome-da-branch"

git log → mostra o log de ações

    Não usar o git init em pastas home ou raiz (”~ /”) 
    Não dar o git init dentro de uma pasta que já existe git init 
    Usar o ls -la para verificar se já existe um arquivo .git

- git init 
- git add nome-do-arquivo
- git add .
- git status
- git log 
- git merge
- git branch 