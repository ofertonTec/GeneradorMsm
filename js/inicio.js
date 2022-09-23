



btnGenerar.addEventListener('click', function () {
    let form = document.querySelector(".form_container")
    let cliente = crearObjeto(form)
    let listaErrores = validarObjeto(cliente)

    if (listaErrores.length > 0) {
        exibirMensajeError(listaErrores)
        return
    } else {
        generaMensaje(cliente)
        form.reset()
        var errores = document.querySelector(".mensaje_error")
        errores.innerHTML = ""
    }
})

function crearObjeto(form) {
    let cliente = {
        carteras: form.carteras.value,
        opciones: form.opciones.value,
        nombre: form.nombre.value,
        monto: form.monto.value,
        telefono: form.telefono.value
    }
    return cliente;
}

function validarObjeto(cliente) {
    let listaErrores = []
    if (cliente.nombre.length == 0) {
        listaErrores.push('El campo Nombres y Apellidos no debe estar vacio')
    }
    if (cliente.monto.length == 0) {
        listaErrores.push('El campo Monto no debe estar vacio')
    }
    if (cliente.telefono.length == 0) {
        listaErrores.push('El campo Telefono no debe estar vacio')
    }
    return listaErrores
}

function exibirMensajeError(listaErrores) {
    let ul = document.getElementById('lista_errores')
    ul.innerHTML = ""
    listaErrores.forEach(error => {
        var li = document.createElement('li')
        li.classList.add('mensaje_error')
        li.textContent = error
        ul.appendChild(li)

    });
}

function generaMensaje(cliente) {
    alert(cliente.carteras)
    let textArea = document.getElementById('mensaje')
    let mensaje = ""
    if (cliente.opciones.toLowerCase() == 'campaña') {
        mensaje = cliente.nombre.toUpperCase() + ' , '+ cliente.carteras.toUpperCase() +' tiene un Dscto Especial APROBADO, cancela tu Deuda con S/.' +
            cliente.monto + ', ACTIVALO comunicándote a esta línea.\n\n Tramite su CONSTANCIA DE NO ADEUDO y evite el recalculo de su deuda y regularice su situación en INFOCORP'

    }
    if (cliente.opciones.toLowerCase() == 'recordatorio') {
        mensaje = 'Que tal Sr(a):' + cliente.nombre.toUpperCase() + ' , '+cliente.carteras.toUpperCase()+' le recuerda que tiene un compromiso pendiente para hoy, por el importe de S/.' +
            cliente.monto + ',cualquier inconveniente con su pago me informa para poder ayudarle. Saludos Cordiales'
    }
    let whatsapp= document.getElementById('whatsapp')
    let link = 'http://api.whatsapp.com/send?phone=51'+cliente.telefono
    textArea.innerHTML = mensaje
    whatsapp.href=link
    whatsapp.innerHTML="Enviar whatsapp a "+ cliente.nombre.toUpperCase()
}

let respuesta= document.getElementById('respuesta')
let copiar= document.getElementById('copiar')

copy.addEventListener('click', function(e) {
    mensaje.select(); 
    try {
        var successful = document.execCommand('copy');
  
        if(successful) respuesta.innerHTML = 'Copiado!';
        else respuesta.innerHTML = 'Incapaz de copiar!';
    } catch (err) {
        rpta.innerHTML = 'Browser no soportado!';
    }
 });