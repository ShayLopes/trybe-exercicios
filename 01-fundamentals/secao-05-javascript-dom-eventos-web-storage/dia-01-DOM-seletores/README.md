### DOM E SELETORES

- `Window`: Representa uma janela que contém um elemento DOM, sendo possível acessar o documento que a janela contém através de `Window`;
- `location`: Representa a localização do objeto ao qual ele está associado, isto é, o documento atual;
- `document`: Representa qualquer página da web carregada no navegador e serve como um ponto de entrada para o conteúdo na página da web. Sendo assim, o `document` contém todos os documentos `HTML`;
- `history`: Permite a manipulação do histórico da sessão do navegador, ou seja, as páginas visitadas na guia ou quadro em que a página atual está carregada;
- `element`: É a classe base mais geral da qual todos os objetos em um `Document` herdam, isto é, são todas as tags que estão em arquivos `HTML` e se transformam em elementos da árvore `DOM`;
- `text`: Texto que vai entre os elementos, é todo o conteúdo das tags;
- `atribute`: São todos os atributos que um nó específico possui, como uma `class` ou `id`.

getElementById (teste) → vai procurar a tag teste dentro do html e vai retornar o conteúdo da tag teste 

.innerHTML → vai retornar o texto bruto com as tags junto

.innerText → vai retornar apenas texto 

.style → retorna o css da tag

ex: getElementById(teste).innerText 

 getElementById(teste).innerText  = “vai alterar o conteúdo da tag para esse texto”;

getElementByTagName(’section’) [0] = 

 querySelector

*Enquanto os `getElementsByClassName('ClassName')` e `getElementsByTagName('TagName')` retornam uma HTMLCollection, os `querySelectorAll('.ClassName')` e `querySelectorAll('TagName')` retornam uma NodeList.*