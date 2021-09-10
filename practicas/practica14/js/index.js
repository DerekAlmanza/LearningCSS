const toogle = document.querySelector('.toogle');
const body = document.body;
const titulo = document.querySelector('.titulo');
const contenedor = document.querySelector('.contenedor');

toogle.addEventListener('click', () => {
    toogle.classList.toggle('active');
    body.classList.toggle('oscuro');
    titulo.classList.toggle('letras-claras');
    contenedor.classList.toggle('letras-claras');
})