let fatorial = 1;
let valorFatorial = 20;

for (i = valorFatorial; i !== 0; i--){
    fatorial *= i;
}

console.log(fatorial);

//----------------------------------//

let word = 'banana';

let array = [ ];

for (i of word){
    console.log(i);
    array.unshift(i);
}

console.log(array);

// gabarito //

let word2 = 'tryber';
let reverseWord = '';

for (let index = 0; index < word2.length; index += 1) {
  reverseWord += word2[word2.length - 1 - index];
}

console.log(reverseWord);

//ou 

let word3 = 'tryber';
let reverseWord2 = '';

reverseWord2 = word3.split('').reverse().join('');

console.log(reverseWord2);

//------------------------------// 

let array2 = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array2[0];
let menorPalavra = array2[0];


for(i = 0; i < array2.length; i ++){
    if(array2[i].length > maiorPalavra.length){
        maiorPalavra = array2[i];
    }
}

for (i = 0; i < array2.length; i++){
    if(array2[i].length < menorPalavra.length){
        menorPalavra = array2[i];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);

// ----------------------------------- // 

let maiorNumeroPrimo = 0;

for(i = 2; i <= 50; i++){
    let primo = true;
    for(j = 2; j < i; j++){
        if(i % j ===0){
            primo = false;
            
        }
    }
    if(primo){
        maiorNumeroPrimo = i;
    }
}

console.log(maiorNumeroPrimo);

// fim // 

