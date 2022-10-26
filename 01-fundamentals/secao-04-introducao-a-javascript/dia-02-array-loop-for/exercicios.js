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

