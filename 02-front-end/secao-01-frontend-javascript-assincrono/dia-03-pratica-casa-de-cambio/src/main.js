import Swal from 'sweetalert2';

const urlBase = "https://api.exchangerate.host/latest?base=";
const coinValue = "BRL";

let input = document.getElementById('moeda');
let button = document.getElementById('button');
const elementcontent = document.querySelector('#content');

const nomeValor = {};

fetch(urlBase + coinValue)
    .then((response) => response.json())
    .then((data) => {
        Object.entries(data.rates).forEach((element) => {
            nomeValor.nome = element[0];
            nomeValor.valor = element[1];
        });
        button.addEventListener('click', (event) => {
            event.preventDefault();
            if (!input.value) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                })
            } 
            if (input.value !== element[0]) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                })
            }
        });
    });