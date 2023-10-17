const readline = require('readline-sync');

const measures = {
    weight: 0,
    heigth: 0,
};

measures.weight = readline.questionFloat('Qual seu peso?');
measures.heigth = readline.questionFloat('Qual sua altura?');

const calculateBMI = () => {
    const BMI = measures.weight/Math.pow(measures.heigth, 2);
    let situation;

    if (BMI < 18.5) situation = 'Abaixo do peso (magreza)';
    else if (BMI > 18.5 && BMI < 24.9) situation = 'Peso normal';
    else if (BMI >25.0 && BMI < 29.9) situation = 'Acima do peso (sobrepeso)';
    else if (BMI >30.0 && BMI < 34.9) situation = 'Obesidade grau I';
    else if (BMI >35.0 && BMI < 39.9) situation = 'Obesidade grau II';
    else if (BMI > 40.0) situation = 'Obesidade grau IV';

    console.log(situation);
    return BMI;
}

console.log(`Seu IMC é: ${calculateBMI().toFixed(2)}`);