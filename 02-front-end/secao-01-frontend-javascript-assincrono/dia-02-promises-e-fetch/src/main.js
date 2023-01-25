import './style.css'; 

const ACESS_TOKEN = 5866699763408614;
const API_URL = `https://www.superheroapi.com/api.php/5866699763408614`;

fetch(API_URL).then((response) => response.json()).then((data) => console.log(data));

