

const contenido = document.querySelector('body');
const divCambiar = document.querySelector('.space');

divCambiar.addEventListener('click', cambiar)

function cambiar()
{
    contenido.classList.toggle('tema-cambiante')
    divCambiar.classList.toggle('tema-cambiante')
}