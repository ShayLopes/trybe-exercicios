let a = 5;
let b = 10; 

soma = a + b;
subtracao = a - b;
multiplicacao = a * b;
divisao = a/b;
modulo = a%b; 

//-----------------------//

let n1 = 20;
let n2 = 30;

if(n1 < n2){
    console.log(n1);
} else {
    console.log(n2);
}

//-----------------------//

let n3 = 10;
let n4 = 20;
let n5 = 30;

if((n3 > n4) && (n3 >5)){
    console.log(n3);
} else if ((n4 > n3) && (n4 > n5)){
    console.log(n4);
} else {
    console.log(n5);
}

//-----------------------//

let i = 0;

if(i < 0){
    console.log("negative");
} else if (i > 0){
    console.log("positive");
} else {
    console.log("zero");
}

//------------------------//

let a1 = 40;
    a2 = 40;
    a3 = 100;

if((a1 + a2 + a3) === 180){
    console.log(true);
} else {
    console.log(false);
}

//------------------------//

let pecaXadrez = 'tOrRe';

pecaXadrez = (pecaXadrez.toLowerCase());

switch(pecaXadrez){
    case 'peao':
        console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.");
        break;
    case 'torre':
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
        break;
    case 'cavalo':
        console.log("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.");
        break;
    case 'bispo':
        console.log("Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.")
        break;
    case 'rainha':
        console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
        break;
    case 'rei': 
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.");
        break;
    default:
        console.log('Erro, peça invialida');
        break;
}   

//-------------------------//


const j = 1;

if (j < 0 || j > 100) {
  console.log("Erro!");
} else if (j >= 90) {
  console.log("A");
} else if (j >= 80) {
  console.log("B");
} else if (j >= 70) {
  console.log("C");
} else if (j >= 60) {
  console.log("D");
} else if (j >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//-------------------------//

const A = 1;
const B = 1;
const C = 1; 

if((A%2 === 0) || (B%2 === 0) || (C%2 === 0)){
    console.log(true);
} else {
    console.log(false);
}

//--------------------------//


if((A%2 != 0) || (B%2 != 0) || (C%2 != 0)){
    console.log(true);
} else {
    console.log(false);
}

//-------------------------//

const custo = 10;
const venda = 20;

if((custo >= 0) && (venda >= 0)){ 
    const custoTotal = custo - (custo * 0.80);
    const lucroTotal = venda - custoTotal;
    const vendaTotal = lucroTotal * 1000;
    console.log(custoTotal);
    console.log (lucroTotal);
    console.log(vendaTotal);
} else {
    console.log('valor inválido');
}

//--------------------------//

let salarioBruto = 2000;

let alicotaINSS;
let alicotaIR;
let deducaoIR; 

calculaAliquotaINSS(salarioBruto);

let salarioBase = (salarioBruto - alicotaINSS);

calculaAliquotaIR(salarioBase);

let salarioLiquido = salarioBase - (alicotaIR - deducaoIR);

console.log(salarioLiquido);

function calculaAliquotaINSS(i){
    if(i <= 1556.94){
        alicotaINSS = (i * 0.08);
    } else if(i <= 2594.92){
        alicotaINSS = (i * 0.09);
    } else if(i <= 5189.92){
        alicotaINSS = (i * 0.11);
    } else {
        alicotaINSS = 570.88;
    }
}

function calculaAliquotaIR(j){

    if(j <= 1903.98){
        alicotaIR = 0;
    } else if (j <= 2826.65){
        alicotaIR =  (j * 0.075); 
        deducaoIR = 142.80;
    } else if (j <= 3751.05){
        alicotaIR = (j * 0.15);
        deducaoIR = 354.80;
    } else if (j <= 4664,68){
        alicotaIR = (j * 0.225);
        deducaoIR = 636.13;
    } else {
        alicotaIR = (j * 0.275);
        deducaoIR = 869.36;
    }
}



