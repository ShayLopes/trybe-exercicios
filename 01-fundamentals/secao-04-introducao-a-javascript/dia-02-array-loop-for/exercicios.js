let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//------------------------------------------------//

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

//----------------------------------------------//

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu3.push('Contato');

console.log(menu3);

//-------------------------------------------//

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(i = 0; i < groceryList.length; i++){
    console.log(groceryList[i]);
}

//------------------------------------//

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (i of names){
    console.log(i);
}

//--------------------------------------//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maiorValor = 0;
let qntImpar = 0;
let menorValor = 0;

for(i of numbers){
    soma += i;
    console.log(i);
}

media = soma/numbers.length;

console.log (soma);
console.log (media);

if(media > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor que 20');
}

for(j of numbers){
    if(maiorValor < j){
        maiorValor = j;
    }
    if(menorValor+numbers[1] > j){
        menorValor = j;
    }
}

console.log(maiorValor);
console.log(menorValor);

for(m of numbers){
    if(m % 2 !== 0){
        qntImpar++;
    }
}

console.log(qntImpar);

if(qntImpar === 0){
    console.log('nenhum valor ímpar encontrado');
}

let array = [ ];

for(n = 0; n <= 25; n += 1){
    array.push(n);
    console.log(array[n]);
    console.log(array[n]/2);
}

// fim // 


