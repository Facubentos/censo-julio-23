const sistema = new Sistema();

sistema.precargarCensistas();
sistema.precargarPersonas();

let estadoUsuario = false; //Al ingresar sin loguearte como Censista, automaticamente se detectará al usuario como invitado.
let usuarioActivo = "";


sistema.desplegarDepartamentos();
sistema.desplegarOcupaciones();


function salir() {
    cerrarSesion(usuarioActivo);
}

function volver(){
    volverAtras();
}


function registrar() {
    const nombreRegistrar = darValorInput('ingresoNombreCensista');
    const usuarioRegistrar = darValorInput('ingresoUsuarioCensista');
    const claveRegistrar = darValorInput('ingresoClaveCensista');
    const idRegistrar = sistema.obtenerIdLibre();
    if (sistema.registrarCensista(nombreRegistrar, usuarioRegistrar, claveRegistrar, idRegistrar)) {
        ocultarMostrar('contenidoRegistro', 'contenidoLogin');
        modificarContenidoParrafo("mensajeLoginCorrecto", `<div class="alert alert-success" role="alert">
        Bienvenido ${mostrarInicialMayuscula(nombreRegistrar)}, se ha registrado satisfactoriamente!
        </div>`);
        console.log(sistema.censista);
    }
}

function procesarCedula() {
    const cedulaIngreso = sistema.limpiarCedula(darValorInput('buscarCedulaPersona'));
    if (sistema.validarCedula(cedulaIngreso) || estadoUsuario){
        if (!sistema.buscarCedula(cedulaIngreso)) {
            if (!estadoUsuario) {
                document.getElementById('cedulaPersona').value = cedulaIngreso;
                document.getElementById('cedulaPersona').disabled = true;
            }
            ocultarMostrar(containerActivo, 'contenidoCenso')
            //Si la cedula ingresada no finalizó el formulario, se le despliega el formulario en donde lo dejó
            sistema.completarFormulario(cedulaIngreso);

            // modificarValorInput('nombrePersona', sistema.completarFormulario(cedulaIngreso, "nombre"));
            // modificarValorInput('apellidoPersona', sistema.completarFormulario(cedulaIngreso, "apellido"));
            // modificarValorInput('edadPersona', sistema.completarFormulario(cedulaIngreso, "edad"));
            // modificarValorInput('departamentoPersona', sistema.completarFormulario(cedulaIngreso, "departamento"));
            // modificarValorInput('ocupacionPersona', sistema.completarFormulario(cedulaIngreso, "ocupacion"));
        }
    }
}

function enviarFormulario() {
    const nombreCensado = darValorInput('nombrePersona');
    const apellidoCensado = darValorInput('apellidoPersona');
    const edadCensado = darValorInput('edadPersona');
    const cedulaCensado = sistema.limpiarCedula(darValorInput('cedulaPersona'));
    const departamentoCensado = darValorInput('departamentoPersona');
    const ocupacionCensado = darValorInput('ocupacionPersona');
    const estado = estadoUsuario;
    let usuarioCensista = usuarioActivo;

    if (sistema.validarCampoVacio(nombreCensado, apellidoCensado, edadCensado, departamentoCensado, ocupacionCensado) && sistema.validarEdadPersona(edadCensado)) {
        if (sistema.personaCensada(cedulaCensado)) {
            sistema.modificarCensado(cedulaCensado, nombreCensado, apellidoCensado, edadCensado, departamentoCensado, ocupacionCensado);
        } else {
            if (estado != "censista") {
                usuarioCensista = sistema.asignarCensistaAleatorio(); //Asigna un censista existente aleatorio al formulario creado en modo Invitado.
            }
            sistema.agregarCensado(nombreCensado, apellidoCensado, edadCensado, cedulaCensado, departamentoCensado, ocupacionCensado, estado, usuarioCensista)
        }

        modificarContenidoParrafo("mensajeCensoEnviado", `<div class="alert alert-success" role="alert">
        Censo enviado correctamente!
        </div>`);
        if(estado === "censista"){
            modificarContenidoParrafo("validacionCensoEnviado", `Censo validado correctamente.`);
        }
        limpiarFormulario('formularioCedulaCenso');
        limpiarFormulario('formularioCenso');
        ocultarMostrar(containerActivo, 'contenidoCensoEnviado');

    } else {
        modificarContenidoParrafo("mensajeCenso", `<div class="alert alert-danger" role="alert">
        Hubo un problema! Debe completar todos los campos.
        </div>`);

    }
}

function eliminarPersonaCensada(){
    let cedulaIngresada = darValorInput('cedulaPersona');
    if(cedulaIngresada != ""){
        sistema.eliminarFormulario(cedulaIngresada);
        limpiarFormularios();
        document.getElementById('cedulaPersona').disabled = false;
        modificarContenidoParrafo("mensajeCenso", `<div class="alert alert-success" role="alert">
        Se ha eliminado el formulario!
        </div>`)
    }
}

function loginCensista() {
    const usuarioIngreso = darValorInput('loginUsuarioCensista');
    const claveIngreso = darValorInput('loginClaveCensista');
    modificarContenidoParrafo("mensajeLoginCorrecto", "");
    if (sistema.verificarLoginCensista(usuarioIngreso, claveIngreso)) {
        estadoUsuario = "censista";
        usuarioActivo = sistema.censistaActual(usuarioIngreso);
        ocultarMostrar('contenidoLogin', 'contenidoMenúCensista');
        limpiarFormulario('formularioLoginUsuario');
        sistema.desplegarCensosPorValidar(usuarioActivo);
        sistema.desplegarCensistas(usuarioActivo);
    } else {
        alert("error")
    }
}

function procesarCensoPorValidar(){
    ocultarMostrar(containerActivo, 'contenidoCenso');
    let cedulaPersonaActual = darValorInput('personaPorValidar');
    for (let iterador = 0; iterador < sistema.censados.length; iterador++) {
        const cedulaPersona = sistema.censados[iterador].cedula;
        if(cedulaPersonaActual === cedulaPersona){
            modificarValorInput('nombrePersona', sistema.completarFormulario(cedulaPersonaActual, "nombre"));
            modificarValorInput('apellidoPersona', sistema.completarFormulario(cedulaPersonaActual, "apellido"));
            modificarValorInput('cedulaPersona', sistema.completarFormulario(cedulaPersonaActual, "cedula"));
            modificarValorInput('edadPersona', sistema.completarFormulario(cedulaPersonaActual, "edad"));
            modificarValorInput('departamentoPersona', sistema.completarFormulario(cedulaPersonaActual, "departamento"));
            modificarValorInput('ocupacionPersona', sistema.completarFormulario(cedulaPersonaActual, "ocupacion"));
        }
    }
}

function procesarTransferenciaDeCensista(){
    let cedulaPersonaAsignada = darValorInput('personaPorValidar');
    let idNuevoCensista = darValorInput('censistaParaTransferir');
    let personaAsignada = sistema.obtenerPersonaPorCedula(cedulaPersonaAsignada);
    personaAsignada.censista = idNuevoCensista;
    console.log('Trasferencia realizada');
    modificarContenidoParrafo("mensajeTransferenciaRealizada", `<div class="alert alert-success" role="alert">
        Transferencia realizada!
        </div>`);
    sistema.desplegarCensosPorValidar(usuarioActivo);
    sistema.desplegarCensistas(usuarioActivo);
}


function mostrarInformacionEstadistica(){
    modificarValorInput('totalPersonasCensadas', `Total de personas censadas: ${sistema.totalCensados()}`);
    sistema.mostrarCensadosPorDepartamento();
    sistema.porcentajeNoValidados();
}
mostrarInformacionEstadistica();

function procesarInformacionMenoresYMayores(){
    let departamentoSeleccionado = darValorInput('departamentoPorcentaje');
    if(departamentoSeleccionado != ""){
        sistema.porcentajeMenoresDeEdad(departamentoSeleccionado);
    }
}

sistema.generarTablaInvitado();




