// Clases necesarias para desplegar el menú
const navegador = document.querySelector('.navegador');
const toggle = document.querySelector('.toggle');

// Id's necesarios para cambiar el HTML entre iniciar y cerrar sesión.
const sesion = document.getElementById('sesion');
const sesionIcono = document.getElementById('sesionActiva');
const sesionTitulo = document.getElementById('sesionTitulo');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('activo');
    navegador.classList.toggle('activo');
})