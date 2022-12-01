

const display = document.getElementById('display');

const btns = document.querySelectorAll("button");

btns.forEach((item)=>
{
    item.onclick = ()=> {
        if(item.id == "clear")
        {
            display.innerText = '';
        }

        else
        if(item.id == "delete")
        {
            let contenido = display.innerText.toString();

            display.innerText = contenido.substr(0, contenido.length-1) //Copiar el string con el ultimo cr eliminado

        }

        else
        if(display.innerText != '' && item.id == "=")
        {
            display.innerText = eval(display.innerText)
        }


        // Preguntamos ahora si la operacion está vacia

        else
        if(display.innerText == '' && item.id == "=")
        {
            display.innerText = 'NULL';
            setTimeout(() => {
                display.innerText = '';
            }, 1000);
        }

        else
        {
            // Adjuntamos todos los caracteres
        display.innerText += item.id
        }
        
    }
    //alert(item.textContent)
})


// Copiar al portapapeles
display.addEventListener('click', ()=>
{
    // document.execCommand('select')
    display.focus() //Direccionar al de display
    document.execCommand('copy');
    

})


// Tema DARK

const btnActivarTema = document.querySelector('.activador-icon');

btnActivarTema.addEventListener('click', activarTema);

function activarTema()
{
    // El toggle es para activar y desactivar en caso tal se encuentre activado
    //Es decir, agrega una clase y si ya la tiene, la quita
    document.querySelector('.calculadora').classList.toggle("dark-mode");
    btnActivarTema.classList.toggle('text-dark');
    
    // Aqui cambiamos el color de cada boton que corresponda a un numero
    let btns = document.querySelectorAll('.btn-num');

    for(let i=0; i<btns.length; i++)
    {
        btns[i].classList.toggle("btns-change-color")
    }
    

}


