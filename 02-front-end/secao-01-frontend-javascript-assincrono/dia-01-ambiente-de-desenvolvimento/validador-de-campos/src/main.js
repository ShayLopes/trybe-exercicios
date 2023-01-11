import  validator  from 'validator';
import  './style.css';

const textInput = document.getElementById('dataValue');
const button = document.getElementById('button');
const textType = document.getElementById('dataType');
const textReturn = document.getElementById('answer');

button.addEventListener('click', (e) => {
    e.preventDefault();

    const values = {
        cpf: validator.isTaxID(textInput.value, 'pt-BR'),
        hexColor: validator.isHexColor(textInput.value),
        email: validator.isEmail(textInput.value),
        uuid: validator.isUUID(textInput.value, 4),
        url: validator.isURL(textInput.value),
    };

    textReturn.innerHTML = `A validação retornou ${values[textType.value]}`;
});