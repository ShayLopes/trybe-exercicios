dia 4 —————————————————————————————

HTML Semântico

htmlreference.io

- elementos inline ocupam o espaço do texto ficando um ao lado do outro não é possível mexer na largura e altura, impossivel de mexer em margem

- elementos block posiciona um encima do outro e é possível ajustar altura e largura

- aplicar a propriedade float em um elemento inline, transforma ele em um elemento block

- elemento inline-block permite ajustar as propriedades de tamanho e largura. é possível alterar todas as margens

ex:

.nav-links li {

display: inline;

}

 deixa os li's do nav-links em linha (o padrão do li é em bloco)

 div funciona in block

 span texto div inline 

 div para cabeçalho <header> 

 div para links de navegação <nav> (vem como padrão uma altura fixa) 

 div para as informações principais da pg <main>

 div para artigo <article> (conteúdo auto contido)  - possuí display block
ocupa 100% do elemento pai 

 div para seção <section>

 div para barra lateral <aside>

 div para rodapé <footer>