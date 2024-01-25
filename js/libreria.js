// funciones reutilizables
function darValorInput(idInput) {
    return document.getElementById(idInput).value;
}


function modificarValorInput(id, valor) {
    document.getElementById(id).value = valor;
}

function modificarContenidoParrafo(id, contenido) {
    document.getElementById(id).innerHTML = contenido;
}

function mostrarInicialMayuscula(palabra) {
    const resultado = palabra;
    return resultado[0].toUpperCase() + resultado.substring(1);
}



let containerActivo = 'contenidoInicio';
let containerAnterior = 'contenidoInicio';

//mostrar u ocultar div
function ocultarMostrar(idOcultar, idMostrar) {
    const containerOcultar = document.getElementById(idOcultar);
    const containerMostrar = document.getElementById(idMostrar);
    if (containerOcultar === containerMostrar) {
        return containerActivo;
    }
    if (containerMostrar.style.display === 'none') {
        containerOcultar.setAttribute('style', 'display: none');
        containerMostrar.style.display = 'block';
        containerActivo = idMostrar;
        containerAnterior = idOcultar;
    } else {
        containerOcultar.setAttribute('style', 'display: block');
        containerMostrar.style.display = 'none';
        containerActivo = idOcultar;
        containerAnterior = idMostrar;
    }
    return containerActivo;
}

// Funciones para ocultar y mostrar Div's en el ingreso de la página
function ingresoInvitado() {
    ocultarMostrar('contenidoInicio', 'contenidoMenuInvitado');
}
function ingresoCensista() {
    ocultarMostrar('contenidoInicio', 'contenidoRegistro');
}

function ingresoLoginCensista() {
    ocultarMostrar(containerActivo, 'contenidoLogin');
}

function ingresoFormularioCenso(){
    ocultarMostrar(containerActivo, 'contenidoCenso');
}

function ingresoCensosPorValidar(){
    ocultarMostrar(containerActivo, 'contenidoCedulaCenso');
}

function ingresoReasignarPersona(){
    ocultarMostrar(containerActivo, 'contenidoReasignarCensista');
}

function ingresoInformacionEstadistica(){
    ocultarMostrar(containerActivo, 'contenidoInformacionEstadistica');
}

function verEstadisticasInvitado(){
    ocultarMostrar(containerActivo, 'contenidoEstadisticasInvitado');
}


function volverAtras(){
    ocultarMostrar(containerActivo, containerAnterior);
    limpiarFormularios();
}

function volverAlInicio(){
    ocultarMostrar(containerActivo, 'contenidoInicio');
    limpiarFormularios();
}

function limpiarFormulario(formulario) {
    document.getElementById(formulario).reset()
}

function limpiarFormularios() {
    limpiarFormulario('formularioLoginUsuario');
    limpiarFormulario('formularioRegistroCensista');
    limpiarFormulario('formularioCedulaCenso');
    limpiarFormulario('formularioCenso');
}

function cerrarSesion(usuario) {
    if (confirm("¿Desea salir? Se cerrará su sesión")) {
        if (usuario != "") {
            estadoUsuario = false;
            usuarioActivo = "";
        }
        volverAlInicio();
    }
}

