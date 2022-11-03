let elementoAtual = document.getElementById('pai');

let irmao = document.createElement('section');
irmao.id = 'irmaoElementoOndeVoceEsta'

elementoAtual.appendChild(irmao);

elementoAtual = document.getElementById("elementoOndeVoceEsta");

let filho = document.createElement('section');
filho.id = 'filhoDeOndeEuEstava'

elementoAtual.appendChild(filho);

elementoAtual = document.getElementById("primeiroFilhoDoFilho");

let filhoDoFilho = document.createElement('section');
filhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho'

elementoAtual.appendChild(filhoDoFilho);


    // A partir desse filho criado, acesse `terceiroFilho`.
const terceiroFilho = filhoDoPrimeiroFilhoDoFilho
.parentElement // primeiroFilhoDoFilho
.parentElement // elementoOndeVoceEsta
.nextElementSibling; // terceiroFilho
console.log(terceiroFilho);


let element = document.getElementById('paiDoPai');

element.removeChild();