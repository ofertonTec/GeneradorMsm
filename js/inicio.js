let options= document.getElementById('opciones')
let btn= document.getElementById('boton')
btn.addEventListener('click', verificarSelector)

options.addEventListener('change', alertarCambio)
function alertarCambio(){
    
    let opcion= options.value
    switch(opcion.toLowerCase){
        case "campaña":
            let monto= document.getElementById('monto')
            monto.style.display="none"
            break;
        case "recordatorio":
            document.getElementById("campaña").style.display="none";
            document.getElementById("recordatorio").style.display="flex";
            break;
    }
}
function verificarSelector(){
    let opcion= options.value
    let campaña= document.getElementById('campaña')
    let recordatorio= document.getElementById('recordatorio')

    
}