/*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */

document.getElementsByTagName("p")[1].innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quam debitis ipsam exercitationem aspernatur quidem sint rem labore earum modi? Nihil odit exercitationem blanditiis hic ad error eaque, iste explicabo."

const main = document.querySelector(".main-content");
main.style.backgroundColor = 'rgb(76, 164, 109)';

const center = document.querySelector(".main-content .center-content");
center.style.backgroundColor = 'white';

document.getElementsByClassName("title")[0].innerText = "Exercício JavaScript"

document.getElementsByTagName("p")[0].innerHTML = "TEXTO PADRÃO DO NOSSO SITE"

console.log(document.querySelectorAll("p"));