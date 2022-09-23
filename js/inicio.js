let options= document.getElementById('opciones')
let btn= document.getElementById('boton')


let nombre= document.getElementById('nombre')
let monto = document.getElementById('monto_input')
let telefono= document.getElementById('telefono')
let mensajeOutput= document.getElementById('mensaje')
let whatsapp= document.getElementById('whatsapp')


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

btn.addEventListener('click', mostrarMensaje)
function mostrarMensaje(){
   let mensaje=""
   
    if(options.value.toLowerCase()=="campaña"){
        mensaje='Sr(a).'+ nombre.value.toUpperCase()+ ' le saludamos por encargo del Banco Falabella, le estamos ofreciendo liquidar su CMR  por el importe mínimo de s/.'+
        monto.value+' previa evaluación , Me confirma para enviar la propuesta y realice la cancelación y el tramite  de su CONSTANCIA DE NO ADEUDO.'
    } else if(options.value.toLowerCase()=="recordatorio"){
        mensaje= 'Buenos días Sr(a). '+ nombre.value.toUpperCase()+
        ', le saluda Joel Copia por encargo del Banco Falabella, le estamos llamando para confirmar su pago pendiente para el día de hoy por el importe de S/.'+monto.value+
        ' . Por este medio me hace el envío del comprobante para realizar el ajuste correspondiente.'
    }
    
    
    let link = 'http://api.whatsapp.com/send?phone=51'+telefono.value

    mensajeOutput.innerHTML=mensaje
    whatsapp.href=link
    whatsapp.innerHTML="Enviar whatsapp a "+ nombre.value

}
let rpta= document.getElementById('respuesta')
let copiar= document.getElementById('copiar')

copy.addEventListener('click', function(e) {
    // Sleccionando el texto
    mensaje.select(); 
    try {
        // Copiando el texto seleccionado
        var successful = document.execCommand('copy');
  
        if(successful) rpta.innerHTML = 'Copiado!';
        else rpta.innerHTML = 'Incapaz de copiar!';
    } catch (err) {
        rpta.innerHTML = 'Browser no soportado!';
    }
 });

