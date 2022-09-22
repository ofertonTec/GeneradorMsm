let options= document.getElementById('opciones')
let btn= document.getElementById('boton')

options.addEventListener('change', alertarCambio)
function alertarCambio(){
    let opcion= options.value

    switch(opcion.toLowerCase()){
        case 'campaña' :
            document.getElementById("monto_label").style.display="none"
            document.getElementById("monto_input").style.display="none"
            break;
        case 'recordatorio' :
            document.getElementById("monto_label").style.display="flex"
            document.getElementById("monto_input").style.display="flex"
            break;
    }
}