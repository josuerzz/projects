

// Teclas de teclado según su letra
let tecla1 = document.getElementById('uno')
let tecla2 = document.getElementById('dos')
let tecla3 = document.getElementById('tres')
let tecla4 = document.getElementById('cuatro')
let tecla5 = document.getElementById('cinco')

let teclaA = document.getElementById('a')
let teclaS = document.getElementById('s')
let teclaD = document.getElementById('d')
let teclaF = document.getElementById('f')
let teclaG = document.getElementById('g')
let teclaH = document.getElementById('h')
let teclaJ = document.getElementById('j')


let tagAudio = document.getElementById('audio')
const btnsPiano = document.querySelectorAll('.btn-piano')


// Con esta función quitaremos el efecto cambio de color al darle click a un botón 
function removeClick(tecla, colorBtn)
{
    setTimeout(()=> {
        tecla.classList.remove(colorBtn)
    }, 80)
    
}

//Con esta función se crea un elemento Iframe el cual reproducirá el sonido
function reproducirAudio(audio)
{
    let sonido = document.createElement("iframe");
	sonido.setAttribute("src", `notas/${audio}`);
	document.body.appendChild(sonido);

    //Ejecutamos la función que elimina la etiqueta cada cierto tiempo
    setTimeout(function()
    {
        eliminarAudio()
    }, 1100)

}

// Creamos la función que recorré la lista de nodos Iframe
function eliminarAudio()
{
    let iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0)
    {
		iframe[0].remove()
	}
}



// Event Listeners CLICK btns

btnsPiano.forEach(function(elem)
{
    elem.addEventListener('click', function() { 

        switch (event.path[0].id) {

            // Números
            case "uno":
            tecla1.classList.toggle('btn-black-click')
            removeClick(tecla1, 'btn-black-click')
            reproducirAudio('SA.mp3')
            break;

            case "dos":
            tecla2.classList.toggle('btn-black-click')
            removeClick(tecla2, 'btn-black-click')
            reproducirAudio('SC.mp3')
            break;

            case "tres":
            tecla3.classList.toggle('btn-black-click')
            removeClick(tecla3, 'btn-black-click')
            reproducirAudio('SD.mp3')
            break;

            case "cuatro":
            tecla4.classList.toggle('btn-black-click')
            removeClick(tecla4, 'btn-black-click')
            reproducirAudio('SF.mp3')
            break;

            case "cinco":
            tecla5.classList.toggle('btn-black-click')
            removeClick(tecla5, 'btn-black-click')
            reproducirAudio('SG.mp3')
            break;


            // Letras
            case "a":
                teclaA.classList.toggle('btn-white-click')
                removeClick(teclaA, 'btn-white-click')
                reproducirAudio('A.mp3')
                break;
            
            case "s":
                teclaS.classList.toggle('btn-white-click')
                removeClick(teclaS, 'btn-white-click')
                reproducirAudio('B.mp3')
                break;

            case "d":
                teclaD.classList.toggle('btn-white-click')
                removeClick(teclaD, 'btn-white-click')
                reproducirAudio('C.mp3')
                break;

            case "f":
                teclaF.classList.toggle('btn-white-click')
                removeClick(teclaF, 'btn-white-click')
                reproducirAudio('D.mp3')
                break;
            
            case "g":
                teclaG.classList.toggle('btn-white-click')
                removeClick(teclaG, 'btn-white-click')
                reproducirAudio('E.mp3')
                break;

            case "h":
                teclaH.classList.toggle('btn-white-click')
                removeClick(teclaH, 'btn-white-click')
                reproducirAudio('F.mp3')
                break;

            case "j":
                teclaJ.classList.toggle('btn-white-click')
                removeClick(teclaJ, 'btn-white-click')
                reproducirAudio('G.mp3')
                break;
        
           
        }
     })
})



// Eventos de teclado

document.addEventListener('keyup', function(event)
{
    switch(event.keyCode)
    {
        // Números
        case 49:
            tecla1.classList.toggle('btn-black-click')
            removeClick(tecla1, 'btn-black-click')
            reproducirAudio('SA.mp3')
        break;

        case 50:
            tecla2.classList.toggle('btn-black-click')
            removeClick(tecla2, 'btn-black-click')
            reproducirAudio('SC.mp3')
        break;

        case 51:
            tecla3.classList.toggle('btn-black-click')
            removeClick(tecla3, 'btn-black-click')
            reproducirAudio('SD.mp3')
        break;

        case 52:
            tecla4.classList.toggle('btn-black-click')
            removeClick(tecla4, 'btn-black-click')
            reproducirAudio('SF.mp3')
        break;

        case 53:
            tecla5.classList.toggle('btn-black-click')
            removeClick(tecla5, 'btn-black-click')
            reproducirAudio('SG.mp3')
        break;


        // Letras
        case 65:
            teclaA.classList.toggle('btn-white-click')
            removeClick(teclaA, 'btn-white-click')
            reproducirAudio('A.mp3')
        break;

        case 83:
            teclaS.classList.toggle('btn-white-click')
            removeClick(teclaS, 'btn-white-click')
            reproducirAudio('B.mp3')
        break;

        case 68:
            teclaD.classList.toggle('btn-white-click')
            removeClick(teclaD, 'btn-white-click')
            reproducirAudio('C.mp3')
        break;

        case 70:
            teclaF.classList.toggle('btn-white-click')
            removeClick(teclaF, 'btn-white-click')
            reproducirAudio('D.mp3')
        break;

        case 71:
            teclaG.classList.toggle('btn-white-click')
            removeClick(teclaG, 'btn-white-click')
            reproducirAudio('E.mp3')
        break;

        case 72:
            teclaH.classList.toggle('btn-white-click')
            removeClick(teclaH, 'btn-white-click')
            reproducirAudio('F.mp3')
        break;

        case 74:
            teclaJ.classList.toggle('btn-white-click')
            removeClick(teclaJ, 'btn-white-click')
            reproducirAudio('G.mp3')
        break;
        
    }
})