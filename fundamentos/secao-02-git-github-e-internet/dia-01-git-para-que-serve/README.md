# GIT E GITHUB

# Git, GitHub e Internet

Os comandos ficam da seguinte forma:

- `git add .` ou `git add nome-do-arquivo nome-do-outro-arquivo`: adiciona as modificações em `staging`, que informa ao *git* as modificações realizadas e que vão estar no próximo `commit`;
- `git commit -m "Mensagem sobre as alterações realizadas"`: informa quais alterações foram realizadas e cria uma versão do projeto que pode ser acessada a qualquer momento;
- `git status`: é utilizado sempre que você quiser verificar o que foi alterado.

> 👀 De olho na dica: É considerada uma boa prática o hábito de realizar commits com frequência. Isso facilita o acompanhamento das alterações e também na correção de possíveis erros em seu código. Procure evitar commits muito extensos e/ou com muitas alterações.
> 

### Relembrando 🧠

Resumidamente, o processo acontece nessa ordem:

- Uma pasta é criada para armazenar um repositório local: `mkdir <nome da pasta>`;
- A pasta criada é acessada: `cd <nome da pasta criada>`;
- Um repositório local é iniciado nessa pasta, e é possível ter o controle de versionamento: `git init`;
- É realizada uma modificação inicial, por exemplo: `touch README.md`;
- Verificamos quais arquivos foram alterados: `git status`;
- Adicionamos os arquivos modificados e selecionados ao que será a próxima versão: `git add` (`git add README.md` ou `git add .`);
- Uma nova versão desse repositório local é criada com uma descrição do que essa versão muda em relação a antiga: `git commit -m "Mensagem desejada"`;
- 
    
    ![Captura de Tela 2022-10-10 às 15.10.08.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df3a9f0c-033b-4cd1-b9a0-91126c84abd1/Captura_de_Tela_2022-10-10_as_15.10.08.png)
    
    Não usar o git init em pastas home ou raiz (”~ /”) 
    Não dar o git init dentro de uma pasta que já existe git init 
    Usar o ls -la para verificar se já existe um arquivo .git